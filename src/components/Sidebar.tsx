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
      badgeColor: 'bg-blue-500/30 text-white border-blue-400/40',
      desc: 'Cross-silo workforce health'
    },
    {
      id: 'attrition',
      label: 'Attrition Intelligence',
      icon: Users,
      badge: '2 Critical',
      badgeColor: 'bg-rose-500/30 text-white border-rose-400/50',
      desc: 'Multi-signal flight-risk predictor'
    },
    {
      id: 'skill-graph',
      label: 'Workforce Skill Graph',
      icon: Network,
      badge: '-38% AI Gap',
      badgeColor: 'bg-amber-500/30 text-white border-amber-400/50',
      desc: 'Dynamic org capability radar'
    },
    {
      id: 'policy-agent',
      label: 'Policy Reasoning Agent',
      icon: BrainCircuit,
      badge: 'RAG Grounded',
      badgeColor: 'bg-emerald-500/30 text-white border-emerald-400/50',
      desc: 'Source-backed compliance reasoning'
    },
    {
      id: 'recruitment',
      label: 'Recruitment & Interviews',
      icon: UserCheck,
      badge: '3 Matches',
      badgeColor: 'bg-blue-500/30 text-white border-blue-400/40',
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
    <aside className="w-72 bg-blue-950/95 border-r border-blue-800/60 flex flex-col justify-between h-screen sticky top-0 backdrop-blur-xl z-30 shadow-2xl">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-blue-800/70 flex items-center justify-between bg-blue-900/30">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/30 ring-1 ring-white/40">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-white drop-shadow-sm">
                  AuraHR
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-blue-600/40 text-white border border-blue-400/50">
                  MVP v1.0
                </span>
              </div>
              <p className="text-xs text-blue-200 font-medium">Workforce Reasoning Engine</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-1.5">
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-blue-300">
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
                    ? 'bg-blue-600 text-white border border-blue-400/60 shadow-lg shadow-blue-600/30 font-semibold'
                    : 'text-blue-100 hover:text-white hover:bg-blue-900/60 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-800 text-white shadow-md'
                        : 'bg-blue-900/70 text-blue-200 group-hover:text-white group-hover:bg-blue-800/80'
                    }`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="truncate">
                    <p className="text-sm font-semibold truncate text-white">
                      {item.label}
                    </p>
                    <p className={`text-[11px] truncate font-medium ${isActive ? 'text-blue-100' : 'text-blue-300'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ml-2 ${
                      item.badgeColor || 'bg-blue-900 text-white border-blue-700'
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
      <div className="p-4 border-t border-blue-800/70 bg-blue-950/80">
        <div className="p-3.5 rounded-xl bg-blue-900/40 border border-blue-700/50">
          <div className="flex items-center space-x-2 text-xs text-white font-bold mb-1">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Multi-Agent Synthesizer</span>
          </div>
          <p className="text-[11px] text-blue-200 leading-relaxed font-normal">
            Correlating signals from HRIS, Slack Sentiment, Git Commits & ATS.
          </p>
          <div className="mt-2.5 flex items-center justify-between text-[10px] text-blue-300 pt-2 border-t border-blue-800/60">
            <span className="flex items-center space-x-1 font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1"></span>
              Live Inference Mode
            </span>
            <span className="font-mono text-blue-300 font-bold">SOC2 PII Safe</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
