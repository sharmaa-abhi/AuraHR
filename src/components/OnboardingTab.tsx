import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  Circle, 
  Calendar, 
  UserCheck, 
  Sparkles, 
  ArrowRight,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import { ONBOARDING_TEMPLATES } from '@/data/hrData';

export const OnboardingTab: React.FC = () => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);
  const currentTemplate = ONBOARDING_TEMPLATES[selectedRoleIndex];
  const [milestones, setMilestones] = useState(currentTemplate.milestones);

  const handleToggleMilestone = (index: number) => {
    setMilestones(prev => prev.map((m, i) => i === index ? { ...m, completed: !m.completed } : m));
  };

  const handleSelectRole = (idx: number) => {
    setSelectedRoleIndex(idx);
    setMilestones(ONBOARDING_TEMPLATES[idx].milestones);
  };

  const completedCount = milestones.filter(m => m.completed).length;
  const progressPercent = Math.round((completedCount / milestones.length) * 100);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Adaptive Onboarding Agent & Journey Architect
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Personalized Ramp-Up
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Dynamically synthesizes role milestones, buddy assignments, and system access roadmaps based on employee seniority and skill profile.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex gap-2">
          {ONBOARDING_TEMPLATES.map((tmpl, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectRole(idx)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedRoleIndex === idx
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {tmpl.role}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Overview Card */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-900">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
              30-Day Adaptive Cohort
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              {currentTemplate.role} Ramp-Up Path
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Automated progression track &bull; {completedCount} of {milestones.length} milestones cleared
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <span className="text-xs text-slate-400 block font-medium">Cohort Velocity</span>
              <span className="text-2xl font-bold text-indigo-400">{progressPercent}%</span>
            </div>
            <div className="w-14 h-14 rounded-full border-4 border-slate-800 border-t-indigo-500 flex items-center justify-center font-bold text-xs text-white">
              {progressPercent}%
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 w-full bg-slate-950 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Interactive Milestones Timeline */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-indigo-400" />
          <span>Interactive Milestone Roadmap</span>
        </h3>

        <div className="space-y-4">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              onClick={() => handleToggleMilestone(idx)}
              className={`p-4 rounded-xl border cursor-pointer transition flex items-start justify-between ${
                m.completed
                  ? 'bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/60'
                  : 'bg-slate-900/90 border-indigo-500/40 text-slate-200 shadow-md shadow-indigo-500/5 hover:border-indigo-500'
              }`}
            >
              <div className="flex items-start space-x-3.5">
                <button className="mt-0.5 text-indigo-400 hover:text-indigo-300">
                  {m.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Circle className="h-5 w-5 text-slate-500" />
                  )}
                </button>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      m.completed ? 'bg-slate-800 text-slate-400' : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      Day {m.day}
                    </span>
                    <h4 className={`text-sm font-semibold ${m.completed ? 'line-through text-slate-400' : 'text-white'}`}>
                      {m.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>

              <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full shrink-0 ml-3 ${
                m.completed
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }`}>
                {m.completed ? 'Verified' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
