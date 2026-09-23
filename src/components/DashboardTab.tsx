import React from 'react';
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  BrainCircuit, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import { INITIAL_EMPLOYEES } from '@/data/hrData';

interface DashboardTabProps {
  onNavigateTab: (tab: string) => void;
}

export const DashboardTab: React.FC<DashboardTabProps> = ({ onNavigateTab }) => {
  const highRiskCount = INITIAL_EMPLOYEES.filter(e => e.riskLevel === 'CRITICAL' || e.riskLevel === 'HIGH').length;
  const criticalEmployees = INITIAL_EMPLOYEES.filter(e => e.riskLevel === 'CRITICAL');

  return (
    <div className="space-y-8 animate-fade-in text-white">
      {/* Top Welcome / Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl glass-panel p-8 border border-blue-400/30 bg-gradient-to-r from-blue-900 via-indigo-900/60 to-blue-950 shadow-xl">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/30 text-white text-xs font-bold mb-3 border border-blue-400/40">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" />
              <span>Multi-Source Reasoning Active</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
              Workforce Intelligence Command Center
            </h1>
            <p className="mt-2 text-blue-100 text-sm leading-relaxed font-normal">
              Synthesizing real-time telemetry across Greenhouse ATS, Workday HRIS, Slack Sentiment Pulse, and Git output. Detecting risks <strong className="text-white underline decoration-blue-400 font-bold">60–90 days</strong> before resignation notices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab('attrition')}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-600/40 flex items-center space-x-2 border border-blue-400/40"
            >
              <span>View Flight Risks</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigateTab('policy-agent')}
              className="px-4 py-2.5 rounded-xl bg-blue-900/80 hover:bg-blue-800 text-white font-bold text-xs transition border border-blue-700/60 flex items-center space-x-2"
            >
              <BrainCircuit className="h-4 w-4 text-blue-300" />
              <span>Ask Policy Agent</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Attrition Risk Alert */}
        <div 
          onClick={() => onNavigateTab('attrition')}
          className="glass-panel p-5 rounded-2xl cursor-pointer glass-panel-hover transition duration-200 border-l-4 border-l-rose-500 bg-blue-950/70"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Flight Risk Exposure</span>
            <div className="p-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-white">{highRiskCount}</span>
            <span className="text-xs font-bold text-rose-300">Key Talent at Risk</span>
          </div>
          <p className="mt-2 text-xs text-blue-200 font-normal">
            $425,000 potential replacement & friction exposure if unaddressed.
          </p>
        </div>

        {/* AI Competency Gap */}
        <div 
          onClick={() => onNavigateTab('skill-graph')}
          className="glass-panel p-5 rounded-2xl cursor-pointer glass-panel-hover transition duration-200 border-l-4 border-l-amber-500 bg-blue-950/70"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Strategic Skill Gap</span>
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-white">-38%</span>
            <span className="text-xs font-bold text-amber-300">GenAI & Vector RAG Gap</span>
          </div>
          <p className="mt-2 text-xs text-blue-200 font-normal">
            6 critical engineering roles need urgent upskilling for Q4 goals.
          </p>
        </div>

        {/* Policy Reasoning Speed */}
        <div 
          onClick={() => onNavigateTab('policy-agent')}
          className="glass-panel p-5 rounded-2xl cursor-pointer glass-panel-hover transition duration-200 border-l-4 border-l-emerald-500 bg-blue-950/70"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Policy Compliance Speed</span>
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-white">&lt; 1.2s</span>
            <span className="text-xs font-bold text-emerald-300">Audit-Grounded</span>
          </div>
          <p className="mt-2 text-xs text-blue-200 font-normal">
            100% source-referenced citations across 4 internal policy manuals.
          </p>
        </div>

        {/* Hiring & Candidate Quality */}
        <div 
          onClick={() => onNavigateTab('recruitment')}
          className="glass-panel p-5 rounded-2xl cursor-pointer glass-panel-hover transition duration-200 border-l-4 border-l-blue-400 bg-blue-950/70"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">AI Recruitment Match</span>
            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/40">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-white">94%</span>
            <span className="text-xs font-bold text-blue-300">Top Match Score</span>
          </div>
          <p className="mt-2 text-xs text-blue-200 font-normal">
            Automated tailored interview guides generated for 3 candidates.
          </p>
        </div>
      </div>

      {/* Two Column Layout: Critical Action Feed + Multi-Source Reasoning Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: High Priority Attrition Triggers */}
        <div className="lg:col-span-2 glass-panel rounded-2xl p-6 bg-blue-950/80 border border-blue-500/20">
          <div className="flex items-center justify-between pb-4 border-b border-blue-800/80">
            <div>
              <h2 className="text-base font-bold text-white flex items-center space-x-2">
                <span>Immediate Flight-Risk Prescriptions</span>
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
              </h2>
              <p className="text-xs text-blue-200 mt-0.5">
                Proactive retention actions generated by AuraHR Reasoning Engine
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('attrition')}
              className="text-xs text-blue-300 hover:text-white font-bold transition"
            >
              View All 5 &rarr;
            </button>
          </div>

          <div className="mt-5 space-y-4">
            {criticalEmployees.map((emp) => (
              <div 
                key={emp.id}
                className="p-4 rounded-xl bg-blue-900/40 border border-rose-500/40 hover:border-rose-500/80 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-rose-500/20 text-rose-200 font-bold flex items-center justify-center border border-rose-500/40">
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-white">{emp.name}</span>
                        <span className="text-[10px] font-mono text-blue-200">[{emp.id}]</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/30 text-rose-200 border border-rose-500/50">
                          {emp.attritionRiskScore}% Risk
                        </span>
                      </div>
                      <p className="text-xs text-blue-200">{emp.role} &bull; {emp.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-rose-300 block">Est. Cost if Lost</span>
                    <span className="text-xs font-bold text-white">{emp.estimatedReplacementCost}</span>
                  </div>
                </div>

                <div className="mt-3.5 p-3 rounded-lg bg-blue-950/90 border border-blue-800/80 text-xs">
                  <span className="font-bold text-amber-300 block mb-1">AI Identified Root Driver:</span>
                  <p className="text-white font-medium">{emp.keyDrivers[0]}</p>
                </div>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-blue-800/80">
                  <span className="text-xs text-blue-200">
                    <strong className="text-blue-300">Action:</strong> {emp.recommendedAction.substring(0, 70)}...
                  </span>
                  <button
                    onClick={() => onNavigateTab('attrition')}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-md shadow-blue-600/30"
                  >
                    Take Action
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Cross-Silo Data Source Status */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between bg-blue-950/80 border border-blue-500/20">
          <div>
            <div className="pb-4 border-b border-blue-800/80">
              <h2 className="text-base font-bold text-white">Active Data Silos</h2>
              <p className="text-xs text-blue-200 mt-0.5">
                Connected streams parsed by AuraHR
              </p>
            </div>

            <div className="mt-4 space-y-3.5">
              {[
                { name: 'Workday HRIS', type: 'Tenure, Comp, Progression', status: 'Syncing 42ms ago', color: 'bg-emerald-400' },
                { name: 'Greenhouse ATS', type: 'Pipelines, Resumes, Rubrics', status: 'Active (3 openings)', color: 'bg-emerald-400' },
                { name: 'Slack / Teams Pulse', type: 'NLP Sentiment, After-Hours', status: '12 Anomaly Flags', color: 'bg-amber-400' },
                { name: 'GitHub / Jira Output', type: 'Code Velocity & Burnout Drift', status: 'Synced', color: 'bg-emerald-400' },
                { name: 'Enterprise Policy PDF', type: '4 Policy Handbooks v4.2 Vectorized', status: 'Indexed RAG', color: 'bg-blue-400' },
              ].map((silo, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-blue-900/40 border border-blue-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`h-2 w-2 rounded-full ${silo.color}`}></span>
                      <span className="text-xs font-bold text-white">{silo.name}</span>
                    </div>
                    <p className="text-[11px] text-blue-200 mt-0.5">{silo.type}</p>
                  </div>
                  <span className="text-[10px] font-mono text-white bg-blue-950 px-2 py-0.5 rounded border border-blue-700/60 font-semibold">
                    {silo.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-900/50 border border-blue-500/40">
            <div className="flex items-center space-x-2 text-xs font-bold text-white mb-1.5">
              <Sparkles className="h-4 w-4 text-blue-300" />
              <span>Multi-Agent Reasoning Core</span>
            </div>
            <p className="text-xs text-blue-100 leading-relaxed font-normal">
              Unlike chatbots that only summarize docs, AuraHR calculates correlation coefficients between stagnant compensation and burnout sentiment to intervene before resignations happen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
