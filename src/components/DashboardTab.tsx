import React from 'react';
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  BrainCircuit, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  FileText,
  DollarSign
} from 'lucide-react';
import { INITIAL_EMPLOYEES, SKILL_GRAPH_DATA } from '@/data/hrData';

interface DashboardTabProps {
  onNavigateTab: (tab: string) => void;
}

export const DashboardTab: React.FC<DashboardTabProps> = ({ onNavigateTab }) => {
  const highRiskCount = INITIAL_EMPLOYEES.filter(e => e.riskLevel === 'CRITICAL' || e.riskLevel === 'HIGH').length;
  const criticalEmployees = INITIAL_EMPLOYEES.filter(e => e.riskLevel === 'CRITICAL');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Welcome / Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl glass-panel p-8 border border-indigo-500/20 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3 border border-indigo-500/30">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Multi-Source Reasoning Active</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Workforce Intelligence Command Center
            </h1>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Synthesizing real-time telemetry across Greenhouse ATS, Workday HRIS, Slack Sentiment Pulse, and Git output. Detecting risks <strong className="text-white">60–90 days</strong> before resignation notices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab('attrition')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition shadow-lg shadow-indigo-600/30 flex items-center space-x-2"
            >
              <span>View Flight Risks</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigateTab('policy-agent')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition border border-slate-700 flex items-center space-x-2"
            >
              <BrainCircuit className="h-4 w-4 text-purple-400" />
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
          className="glass-panel p-5 rounded-2xl cursor-pointer glass-panel-hover transition duration-200 border-l-4 border-l-rose-500"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Flight Risk Exposure</span>
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">{highRiskCount}</span>
            <span className="text-xs font-medium text-rose-400">Key Talent at Immediate Risk</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            $425,000 potential replacement & friction exposure if unaddressed.
          </p>
        </div>

        {/* AI Competency Gap */}
        <div 
          onClick={() => onNavigateTab('skill-graph')}
          className="glass-panel p-5 rounded-2xl cursor-pointer glass-panel-hover transition duration-200 border-l-4 border-l-amber-500"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Strategic Skill Gap</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">-38%</span>
            <span className="text-xs font-medium text-amber-400">GenAI & Vector RAG Gap</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            6 critical engineering roles need urgent upskilling for Q4 goals.
          </p>
        </div>

        {/* Policy Reasoning Speed */}
        <div 
          onClick={() => onNavigateTab('policy-agent')}
          className="glass-panel p-5 rounded-2xl cursor-pointer glass-panel-hover transition duration-200 border-l-4 border-l-emerald-500"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Policy Compliance Speed</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">&lt; 1.2s</span>
            <span className="text-xs font-medium text-emerald-400">Audit-Grounded Response</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            100% source-referenced citations across 4 internal policy manuals.
          </p>
        </div>

        {/* Hiring & Candidate Quality */}
        <div 
          onClick={() => onNavigateTab('recruitment')}
          className="glass-panel p-5 rounded-2xl cursor-pointer glass-panel-hover transition duration-200 border-l-4 border-l-indigo-500"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Recruitment Match</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">94%</span>
            <span className="text-xs font-medium text-indigo-400">Top Candidate Alignment</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Automated tailored interview guides generated for 3 candidates.
          </p>
        </div>
      </div>

      {/* Two Column Layout: Critical Action Feed + Multi-Source Reasoning Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: High Priority Attrition Triggers */}
        <div className="lg:col-span-2 glass-panel rounded-2xl p-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-base font-bold text-white flex items-center space-x-2">
                <span>Immediate Flight-Risk Prescriptions</span>
                <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Proactive retention actions generated by AuraHR Reasoning Engine
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('attrition')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              View All 5 &rarr;
            </button>
          </div>

          <div className="mt-5 space-y-4">
            {criticalEmployees.map((emp) => (
              <div 
                key={emp.id}
                className="p-4 rounded-xl bg-slate-900/80 border border-rose-500/30 hover:border-rose-500/60 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-rose-500/20 text-rose-300 font-bold flex items-center justify-center border border-rose-500/30">
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-white">{emp.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">[{emp.id}]</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                          {emp.attritionRiskScore}% Risk
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">{emp.role} &bull; {emp.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-rose-400 block">Est. Cost if Lost</span>
                    <span className="text-xs font-bold text-slate-200">{emp.estimatedReplacementCost}</span>
                  </div>
                </div>

                <div className="mt-3.5 p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
                  <span className="font-semibold text-amber-300 block mb-1">AI Identified Root Driver:</span>
                  <p className="text-slate-300">{emp.keyDrivers[0]}</p>
                </div>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400">
                    <strong className="text-indigo-300">Action:</strong> {emp.recommendedAction.substring(0, 70)}...
                  </span>
                  <button
                    onClick={() => onNavigateTab('attrition')}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-medium transition"
                  >
                    Take Action
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Cross-Silo Data Source Status */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="pb-4 border-b border-slate-800">
              <h2 className="text-base font-bold text-white">Active Data Silos</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Connected streams parsed by AuraHR
              </p>
            </div>

            <div className="mt-4 space-y-3.5">
              {[
                { name: 'Workday HRIS', type: 'Tenure, Comp, Role Progression', status: 'Syncing 42ms ago', color: 'bg-emerald-400' },
                { name: 'Greenhouse ATS', type: 'Candidate Pipelines, Resumes, Rubrics', status: 'Active (3 openings)', color: 'bg-emerald-400' },
                { name: 'Slack / Teams Pulse', type: 'NLP Sentiment, After-Hours Pings', status: '12 Anomaly Flags', color: 'bg-amber-400' },
                { name: 'GitHub / Jira Output', type: 'Code Velocity & Burnout Drift', status: 'Synced', color: 'bg-emerald-400' },
                { name: 'Enterprise Policy PDF', type: '4 Policy Handbooks v4.2 Vectorized', status: 'Indexed RAG', color: 'bg-indigo-400' },
              ].map((silo, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`h-2 w-2 rounded-full ${silo.color}`}></span>
                      <span className="text-xs font-semibold text-white">{silo.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{silo.type}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                    {silo.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30">
            <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-300">
              <Sparkles className="h-4 w-4" />
              <span>Multi-Agent Reasoning Core</span>
            </div>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Unlike chatbots that only summarize docs, AuraHR calculates correlation coefficients between stagnant compensation and burnout sentiment to intervene before resignations happen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
