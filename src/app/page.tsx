'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardTab } from '@/components/DashboardTab';
import { AttritionTab } from '@/components/AttritionTab';
import { SkillGraphTab } from '@/components/SkillGraphTab';
import { PolicyAgentTab } from '@/components/PolicyAgentTab';
import { RecruitmentTab } from '@/components/RecruitmentTab';
import { OnboardingTab } from '@/components/OnboardingTab';
import { Bell, Sparkles, Shield, RefreshCw } from 'lucide-react';

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
    <div className="min-h-screen flex bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Fixed Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Top Navbar */}
        <header className="sticky top-0 z-20 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/80 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Connected Org: <strong className="text-slate-200">Aura Global Enterprise (540 Headcount)</strong>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleSimulateSync}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 flex items-center space-x-1.5 transition"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-indigo-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Re-synthesizing...' : 'Resync Signals'}</span>
            </button>

            <div className="h-8 w-px bg-slate-800" />

            <div className="flex items-center space-x-3 pl-1">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-md shadow-indigo-600/30">
                HR
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-xs font-bold text-white block leading-tight">Chief People Officer</span>
                <span className="text-[10px] text-slate-400">Executive Access</span>
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
