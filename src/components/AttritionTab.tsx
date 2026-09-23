import React, { useState } from 'react';
import { 
  Users, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { INITIAL_EMPLOYEES, EmployeeRiskProfile } from '@/data/hrData';

export const AttritionTab: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeRiskProfile[]>(INITIAL_EMPLOYEES);
  const [selectedEmp, setSelectedEmp] = useState<EmployeeRiskProfile>(INITIAL_EMPLOYEES[0]);
  const [mitigationApplied, setMitigationApplied] = useState<{ [key: string]: boolean }>({});
  const [compBoostSlider, setCompBoostSlider] = useState<number>(15);

  const handleApplyMitigation = (empId: string) => {
    setMitigationApplied(prev => ({ ...prev, [empId]: true }));
    setEmployees(prev => prev.map(e => {
      if (e.id === empId) {
        return {
          ...e,
          attritionRiskScore: Math.max(18, e.attritionRiskScore - 42),
          riskLevel: 'LOW'
        };
      }
      return e;
    }));
  };

  return (
    <div className="space-y-6 animate-fade-in text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-blue-800/80">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Employee Attrition Prediction & Proactive Retention Engine
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/30 text-rose-200 border border-rose-400/50">
              Prescriptive ML
            </span>
          </div>
          <p className="text-blue-200 text-sm mt-1">
            Analyzing workforce patterns, compensation delta, engagement drift, and overtime to proactively retain critical talent.
          </p>
        </div>
      </div>

      {/* Main Grid: List of at-risk employees & In-depth Reasoner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Employee Selector List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-2 px-1 flex justify-between">
            <span>Workforce Cohort Monitored</span>
            <span className="text-white">{employees.length} Profiles</span>
          </div>

          {employees.map((emp) => {
            const isSelected = selectedEmp.id === emp.id;
            const isMitigated = mitigationApplied[emp.id];

            return (
              <div
                key={emp.id}
                onClick={() => setSelectedEmp(emp)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-blue-800/80 border-blue-400 shadow-lg shadow-blue-500/20'
                    : 'bg-blue-950/70 border-blue-800/60 hover:border-blue-600 hover:bg-blue-900/50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`h-10 w-10 rounded-full font-bold flex items-center justify-center text-sm border ${
                      emp.riskLevel === 'CRITICAL'
                        ? 'bg-rose-500/30 text-rose-200 border-rose-400/60'
                        : emp.riskLevel === 'HIGH'
                        ? 'bg-amber-500/30 text-amber-200 border-amber-400/60'
                        : 'bg-emerald-500/30 text-emerald-200 border-emerald-400/60'
                    }`}>
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white flex items-center space-x-2">
                        <span>{emp.name}</span>
                        {isMitigated && (
                          <span className="text-[10px] text-emerald-300 font-bold flex items-center space-x-0.5">
                            <CheckCircle className="h-3 w-3 inline" />
                            <span>Retained</span>
                          </span>
                        )}
                      </h3>
                      <p className="text-xs text-blue-200">{emp.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${
                      emp.attritionRiskScore >= 75
                        ? 'bg-rose-500/30 text-rose-200 border-rose-400/50'
                        : emp.attritionRiskScore >= 50
                        ? 'bg-amber-500/30 text-amber-200 border-amber-400/50'
                        : 'bg-emerald-500/30 text-emerald-200 border-emerald-400/50'
                    }`}>
                      {emp.attritionRiskScore}% Risk
                    </span>
                    <p className="text-[10px] text-blue-200 mt-1">{emp.department}</p>
                  </div>
                </div>

                <div className="mt-3 w-full bg-blue-950 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      emp.attritionRiskScore >= 75
                        ? 'bg-rose-500'
                        : emp.attritionRiskScore >= 50
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${emp.attritionRiskScore}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Detail & Multi-Signal AI Reasoning Panel */}
        <div className="lg:col-span-7 space-y-5">
          <div className="glass-panel p-6 rounded-2xl border border-blue-500/30 bg-blue-950/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-blue-800/80 gap-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-900 text-blue-200 border border-blue-700">
                    {selectedEmp.id}
                  </span>
                  <h2 className="text-lg font-bold text-white">{selectedEmp.name}</h2>
                  <span className="text-xs text-blue-200">&bull; {selectedEmp.tenureYears} yrs tenure</span>
                </div>
                <p className="text-xs text-blue-200 mt-0.5">{selectedEmp.role} | {selectedEmp.department}</p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[11px] text-blue-200 block uppercase tracking-wider font-bold">Predicted Replacement Cost</span>
                <span className="text-sm font-extrabold text-rose-300">{selectedEmp.estimatedReplacementCost}</span>
              </div>
            </div>

            {/* Signal Telemetry Gauges */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
                <span className="text-[10px] text-blue-200 block font-bold uppercase">Comp vs Market</span>
                <span className={`text-base font-extrabold ${selectedEmp.signals.compRatioToMarket < 0.9 ? 'text-rose-300' : 'text-emerald-300'}`}>
                  {(selectedEmp.signals.compRatioToMarket * 100).toFixed(0)}%
                </span>
                <span className="text-[10px] text-blue-200 block">
                  {selectedEmp.signals.compRatioToMarket < 1 ? 'Under benchmark' : 'Market competitive'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
                <span className="text-[10px] text-blue-200 block font-bold uppercase">Promotion Gap</span>
                <span className={`text-base font-extrabold ${selectedEmp.signals.promotionStagnationMonths >= 18 ? 'text-amber-300' : 'text-white'}`}>
                  {selectedEmp.signals.promotionStagnationMonths} mo
                </span>
                <span className="text-[10px] text-blue-200 block">Without grade shift</span>
              </div>

              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
                <span className="text-[10px] text-blue-200 block font-bold uppercase">Slack Sentiment</span>
                <span className={`text-base font-extrabold ${selectedEmp.signals.engagementSentiment < 0 ? 'text-rose-300' : 'text-emerald-300'}`}>
                  {selectedEmp.signals.engagementSentiment > 0 ? '+' : ''}{selectedEmp.signals.engagementSentiment.toFixed(2)}
                </span>
                <span className="text-[10px] text-blue-200 block">30-day NLP trend</span>
              </div>

              <div className="p-3 rounded-xl bg-blue-900/40 border border-blue-800">
                <span className="text-[10px] text-blue-200 block font-bold uppercase">Overtime Burnout</span>
                <span className={`text-base font-extrabold ${selectedEmp.signals.overtimeHoursPerMonth > 20 ? 'text-rose-300' : 'text-white'}`}>
                  {selectedEmp.signals.overtimeHoursPerMonth} hrs/mo
                </span>
                <span className="text-[10px] text-blue-200 block">Beyond normal load</span>
              </div>
            </div>

            {/* Multi-Signal Root Drivers */}
            <div className="mt-5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <ShieldAlert className="h-4 w-4 text-amber-400" />
                <span>Multi-Source Reasoning Evidence</span>
              </h4>
              <div className="space-y-2">
                {selectedEmp.keyDrivers.map((driver, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800 text-xs text-white font-medium flex items-start space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span>{driver}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prescriptive Mitigation Sandbox */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-blue-950 border border-blue-500/40 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <Sparkles className="h-4 w-4 text-blue-300" />
                  <span>AuraHR Prescriptive Retention Plan</span>
                </span>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-blue-600/40 text-white border border-blue-400/50">
                  Target: 85%+ Retention Probability
                </span>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed mb-4 font-normal">
                {selectedEmp.recommendedAction}
              </p>

              {/* Interactive Retention Slider Simulator */}
              <div className="p-3 bg-blue-950/90 rounded-lg border border-blue-800 mb-4">
                <div className="flex justify-between text-xs text-white font-semibold mb-1">
                  <span>Simulate Out-of-Cycle Comp Revision:</span>
                  <span className="font-extrabold text-blue-300">+{compBoostSlider}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={compBoostSlider}
                  onChange={(e) => setCompBoostSlider(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 bg-blue-900 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-blue-200 mt-1">
                  <span>+5% (Nominal)</span>
                  <span className="text-white font-bold">Estimated new flight risk: {Math.max(12, selectedEmp.attritionRiskScore - (compBoostSlider * 2))}%</span>
                  <span>+30% (Aggressive)</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-200">
                  {mitigationApplied[selectedEmp.id] ? 'Retention workflow dispatched to HRBP & Executive Lead' : 'Ready to execute recommendation'}
                </span>
                <button
                  disabled={mitigationApplied[selectedEmp.id]}
                  onClick={() => handleApplyMitigation(selectedEmp.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition ${
                    mitigationApplied[selectedEmp.id]
                      ? 'bg-emerald-600/40 text-emerald-200 border border-emerald-400/50 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/40 border border-blue-400/40'
                  }`}
                >
                  {mitigationApplied[selectedEmp.id] ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      <span>Mitigation Executed</span>
                    </>
                  ) : (
                    <>
                      <span>Execute Retention Workflow</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
