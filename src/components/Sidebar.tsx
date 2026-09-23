import React from 'react';
import { 
  Activity, 
  Users, 
  BrainCircuit, 
  Network, 
  UserCheck, 
  Compass, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Executive Command',
      icon: Activity,
      badge: 'Real-time',
      desc: 'Cross-silo workforce health'
    },
    {
      id: 'attrition',
      label: 'Attrition Intelligence',
      icon: Users,
      badge: '2 Critical',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      desc: 'Multi-signal flight-risk predictor'
    },
    {
      id: 'skill-graph',
      label: 'Workforce Skill Graph',
      icon: Network,
      badge: '-38% AI Gap',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      desc: 'Dynamic org capability radar'
    },
    {
      id: 'policy-agent',
      label: 'Policy Reasoning Agent',
      icon: BrainCircuit,
      badge: 'RAG Grounded',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      desc: 'Source-backed compliance reasoning'
    },
    {
      id: 'recruitment',
      label: 'Recruitment & Interviews',
      icon: UserCheck,
      badge: '3 Matches',
      desc: 'Resume parsing & interview generator'
    },
    {
      id: 'onboarding',
      label: 'Adaptive Onboarding',
      icon: Compass,
      desc: 'Personalized role journeys'
    }
  ];

  return (
    <aside className="w-72 bg-slate-900/90 border-r border-slate-800 flex flex-col justify-between h-screen sticky top-0 backdrop-blur-xl z-30">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                  AuraHR
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  MVP v1.0
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Workforce Reasoning Engine</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-1.5">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Workforce Intelligence Modules
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full group text-left px-3.5 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/10 text-white border border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/40'
                        : 'bg-slate-800/80 text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-700/80'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="truncate">
                    <p className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {item.label}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ml-2 ${
                      item.badgeColor || 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-slate-800/80">
        <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="flex items-center space-x-2 text-xs text-slate-300 font-semibold mb-1">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Multi-Agent Synthesizer</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Correlating signals from HRIS, Slack Sentiment, Git Commits & ATS.
          </p>
          <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
            <span className="flex items-center space-x-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping inline-block mr-1"></span>
              Live Inference Mode
            </span>
            <span className="font-mono text-indigo-400">SOC2 PII Safe</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
