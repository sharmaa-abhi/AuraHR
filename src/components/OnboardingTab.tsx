import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Calendar
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
    <div className="space-y-6 animate-fade-in text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-blue-800/80">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Adaptive Onboarding Agent & Journey Architect
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/30 text-white border border-blue-400/50">
              Personalized Ramp-Up
            </span>
          </div>
          <p className="text-blue-200 text-sm mt-1">
            Dynamically synthesizes role milestones, buddy assignments, and system access roadmaps based on employee seniority and skill profile.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex gap-2">
          {ONBOARDING_TEMPLATES.map((tmpl, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectRole(idx)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedRoleIndex === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/40 border border-blue-400'
                  : 'bg-blue-950/80 text-blue-200 hover:bg-blue-900 hover:text-white border border-blue-800'
              }`}
            >
              {tmpl.role}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Overview Card */}
      <div className="glass-panel p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/80 via-indigo-900/60 to-blue-950">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono text-blue-300 uppercase tracking-wider font-bold">
              30-Day Adaptive Cohort
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              {currentTemplate.role} Ramp-Up Path
            </h2>
            <p className="text-xs text-blue-200 mt-0.5">
              Automated progression track &bull; {completedCount} of {milestones.length} milestones cleared
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <span className="text-xs text-blue-200 block font-bold">Cohort Velocity</span>
              <span className="text-2xl font-extrabold text-blue-300">{progressPercent}%</span>
            </div>
            <div className="w-14 h-14 rounded-full border-4 border-blue-900 border-t-blue-400 flex items-center justify-center font-bold text-xs text-white bg-blue-950">
              {progressPercent}%
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 w-full bg-blue-950 rounded-full h-2.5 overflow-hidden border border-blue-900">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Interactive Milestones Timeline */}
      <div className="glass-panel p-6 rounded-2xl border border-blue-800 bg-blue-950/80">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-blue-300" />
          <span>Interactive Milestone Roadmap</span>
        </h3>

        <div className="space-y-4">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              onClick={() => handleToggleMilestone(idx)}
              className={`p-4 rounded-xl border cursor-pointer transition flex items-start justify-between ${
                m.completed
                  ? 'bg-blue-900/20 border-blue-900/60 text-blue-300 hover:bg-blue-900/40'
                  : 'bg-blue-900/50 border-blue-500/50 text-white shadow-md shadow-blue-500/10 hover:border-blue-400'
              }`}
            >
              <div className="flex items-start space-x-3.5">
                <button className="mt-0.5 text-blue-400 hover:text-blue-300">
                  {m.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Circle className="h-5 w-5 text-blue-300" />
                  )}
                </button>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      m.completed ? 'bg-blue-950 text-blue-300' : 'bg-blue-600/40 text-white border border-blue-400/50'
                    }`}>
                      Day {m.day}
                    </span>
                    <h4 className={`text-sm font-bold ${m.completed ? 'line-through text-blue-300' : 'text-white'}`}>
                      {m.title}
                    </h4>
                  </div>
                  <p className="text-xs text-blue-200 mt-1 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              </div>

              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 ml-3 ${
                m.completed
                  ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/30'
                  : 'bg-amber-500/20 text-amber-200 border border-amber-400/30'
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
