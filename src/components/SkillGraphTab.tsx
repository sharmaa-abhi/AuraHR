import React, { useState } from 'react';
import { 
  Network, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Users,
  Layers,
  ChevronRight,
  Target
} from 'lucide-react';
import { SKILL_GRAPH_DATA, SkillNode } from '@/data/hrData';

export const SkillGraphTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeSkill, setActiveSkill] = useState<SkillNode>(SKILL_GRAPH_DATA[0]);
  const [enrolledPrograms, setEnrolledPrograms] = useState<{ [key: string]: boolean }>({});

  const categories = ['ALL', 'AI & ML', 'Cloud & Systems', 'Product & Data', 'Leadership', 'Security'];

  const filteredSkills = selectedCategory === 'ALL'
    ? SKILL_GRAPH_DATA
    : SKILL_GRAPH_DATA.filter(s => s.category === selectedCategory);

  const handleEnroll = (skillId: string) => {
    setEnrolledPrograms(prev => ({ ...prev, [skillId]: true }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Workforce Skill Graph & Strategic Capability Radar
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Capability Gap Synthesis
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Dynamic graph mapping current internal talent competencies against forward-looking 2026 organizational roadmap demands.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Skill Nodes Matrix & Deep Dive Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Skill Nodes Grid */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1 flex items-center justify-between">
            <span>Organizational Capability Matrix</span>
            <span>Target vs Current Baseline</span>
          </div>

          <div className="space-y-3">
            {filteredSkills.map((skill) => {
              const isSelected = activeSkill.id === skill.id;
              const hasSevereGap = skill.gap <= -30;

              return (
                <div
                  key={skill.id}
                  onClick={() => setActiveSkill(skill)}
                  className={`p-4 rounded-xl cursor-pointer transition border ${
                    isSelected
                      ? 'bg-slate-800/90 border-indigo-500 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/50'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-sm text-white">{skill.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                          {skill.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 mt-1.5 text-xs text-slate-400">
                        <span>Current: <strong className="text-slate-200">{skill.currentMastery}%</strong></span>
                        <span>&bull;</span>
                        <span>Target: <strong className="text-slate-200">{skill.orgDemandTarget}%</strong></span>
                        <span>&bull;</span>
                        <span className={`font-semibold ${hasSevereGap ? 'text-amber-400' : 'text-emerald-400'}`}>
                          Gap: {skill.gap}%
                        </span>
                      </div>
                    </div>

                    <ChevronRight className={`h-5 w-5 transition ${isSelected ? 'text-indigo-400 transform translate-x-1' : 'text-slate-600'}`} />
                  </div>

                  {/* Dual Bar (Current vs Target) */}
                  <div className="mt-3.5 space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Internal Capacity ({skill.currentMastery}%)</span>
                      <span>Target ({skill.orgDemandTarget}%)</span>
                    </div>
                    <div className="relative w-full bg-slate-950 rounded-full h-2.5 overflow-hidden">
                      {/* Current Bar */}
                      <div
                        className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full z-10"
                        style={{ width: `${skill.currentMastery}%` }}
                      />
                      {/* Target Marker */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-amber-400 z-20 shadow-sm"
                        style={{ left: `${skill.orgDemandTarget}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Active Skill Graph Insight & Upskill Launcher */}
        <div className="lg:col-span-5 space-y-5">
          <div className="glass-panel p-6 rounded-2xl border border-indigo-500/20">
            <div className="pb-4 border-b border-slate-800">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {activeSkill.category} &bull; {activeSkill.id}
              </span>
              <h2 className="text-xl font-bold text-white mt-2">{activeSkill.name}</h2>
              <p className="text-xs text-slate-400 mt-1">
                Capability telemetry generated by analyzing GitHub commits, Jira stories, and peer endorsements.
              </p>
            </div>

            {/* Gap Analysis Card */}
            <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-semibold text-slate-300">Org Capability Health</span>
                <span className={`font-bold px-2 py-0.5 rounded-full ${
                  activeSkill.gap <= -30 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {activeSkill.gap <= -30 ? 'Critical Deficit' : 'Moderate Alignment'}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Mastery</span>
                  <span className="text-lg font-bold text-white">{activeSkill.currentMastery}%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Target Demand</span>
                  <span className="text-lg font-bold text-indigo-400">{activeSkill.orgDemandTarget}%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Net Gap</span>
                  <span className="text-lg font-bold text-amber-400">{activeSkill.gap}%</span>
                </div>
              </div>
            </div>

            {/* Internal SME Anchors */}
            <div className="mt-5">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                <Users className="h-4 w-4 text-indigo-400" />
                <span>Internal Subject Matter Experts (SMEs)</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeSkill.topEmployees.map((empName, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-center space-x-1.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span>{empName}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Prescribed Upskilling Program */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-900 border border-indigo-500/30">
              <div className="flex items-center space-x-2 text-xs font-bold text-indigo-300 mb-1.5">
                <Sparkles className="h-4 w-4" />
                <span>AI Prescribed Upskilling Cohort</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {activeSkill.suggestedUpskillingProgram}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {enrolledPrograms[activeSkill.id] ? 'Cohort initiated in LMS' : '8-week accelerated transition track'}
                </span>
                <button
                  disabled={enrolledPrograms[activeSkill.id]}
                  onClick={() => handleEnroll(activeSkill.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition ${
                    enrolledPrograms[activeSkill.id]
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30'
                  }`}
                >
                  {enrolledPrograms[activeSkill.id] ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Cohort Active</span>
                    </>
                  ) : (
                    <>
                      <span>Launch Cohort</span>
                      <ArrowRight className="h-3.5 w-3.5" />
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
