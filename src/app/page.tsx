'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardTab } from '@/components/DashboardTab';
import { AttritionTab } from '@/components/AttritionTab';
import { SkillGraphTab } from '@/components/SkillGraphTab';
import { PolicyAgentTab } from '@/components/PolicyAgentTab';
import { RecruitmentTab } from '@/components/RecruitmentTab';
import { OnboardingTab } from '@/components/OnboardingTab';
import { RefreshCw } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleSimulateSync = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 700);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white selection:bg-blue-600 selection:text-white">
      {/* Fixed Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Top Navbar */}
        <header className="sticky top-0 z-20 backdrop-blur-xl bg-blue-950/80 border-b border-blue-800/60 px-8 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse ring-2 ring-emerald-400/40"></span>
            <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
              Connected Org: <strong className="text-white font-bold">Aura Global Enterprise (540 Headcount)</strong>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleSimulateSync}
              className="px-3.5 py-1.5 rounded-lg bg-blue-900/80 hover:bg-blue-800 border border-blue-700/60 text-xs font-medium text-white flex items-center space-x-1.5 transition shadow-sm"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-blue-300 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Re-synthesizing...' : 'Resync Signals'}</span>
            </button>

            <div className="h-8 w-px bg-blue-800/80" />

            <div className="flex items-center space-x-3 pl-1">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md shadow-blue-500/30 ring-1 ring-white/30">
                HR
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-xs font-bold text-white block leading-tight">Chief People Officer</span>
                <span className="text-[10px] text-blue-200">Executive Access</span>
              </div>
            </div>
          </div>
        </header>

        {/* Tab View Container */}
        <div className="p-8 max-w-7xl mx-auto w-full flex-1">
          {activeTab === 'dashboard' && <DashboardTab onNavigateTab={setActiveTab} />}
          {activeTab === 'attrition' && <AttritionTab />}
          {activeTab === 'skill-graph' && <SkillGraphTab />}
          {activeTab === 'policy-agent' && <PolicyAgentTab />}
          {activeTab === 'recruitment' && <RecruitmentTab />}
          {activeTab === 'onboarding' && <OnboardingTab />}
        </div>
      </main>
    </div>
  );
}
