import React, { useState } from 'react';
import { 
  UserCheck, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  FileText, 
  Send,
  SlidersHorizontal,
  Briefcase,
  Star,
  Award,
  ChevronRight
} from 'lucide-react';
import { CANDIDATES_DATA, CandidateProfile } from '@/data/hrData';

export const RecruitmentTab: React.FC = () => {
  const [candidates, setCandidates] = useState<CandidateProfile[]>(CANDIDATES_DATA);
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateProfile>(CANDIDATES_DATA[0]);
  const [customQuestionInput, setCustomQuestionInput] = useState<string>('');
  const [generatedQuestions, setGeneratedQuestions] = useState(CANDIDATES_DATA[0].recommendedInterviewQuestions);

  const handleSelectCandidate = (can: CandidateProfile) => {
    setSelectedCandidate(can);
    setGeneratedQuestions(can.recommendedInterviewQuestions);
  };

  const handleGenerateCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestionInput.trim()) return;

    const newQuestion = {
      category: "Targeted Competency Probing",
      question: customQuestionInput,
      expectedInsight: "Candidate should demonstrate systemic problem-solving, architectural ownership, and measurable impact."
    };

    setGeneratedQuestions(prev => [newQuestion, ...prev]);
    setCustomQuestionInput('');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              AI Recruitment Intelligence & Interview Agent
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Resume & Skill Relevance Engine
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Ranks candidates using semantic resume analysis against job requirements and synthesizes role-specific structured interview questions.
          </p>
        </div>
      </div>

      {/* Main Grid: Candidate Pipeline & Interview Intelligence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Candidate Cards */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1 flex justify-between">
            <span>Ranked Candidate Pipeline</span>
            <span>ATS Relevance Score</span>
          </div>

          {candidates.map((can) => {
            const isSelected = selectedCandidate.id === can.id;

            return (
              <div
                key={can.id}
                onClick={() => handleSelectCandidate(can)}
                className={`p-4 rounded-xl cursor-pointer transition border ${
                  isSelected
                    ? 'bg-slate-800/90 border-indigo-500 shadow-lg shadow-indigo-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-sm border border-indigo-500/30">
                      {can.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white flex items-center space-x-2">
                        <span>{can.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono">[{can.id}]</span>
                      </h3>
                      <p className="text-xs text-slate-400">{can.targetRole}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {can.matchScore}% Match
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1">{can.experienceYears} yrs exp</p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {can.matchedSkills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      {skill}
                    </span>
                  ))}
                  {can.matchedSkills.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-slate-500 font-medium">
                      +{can.matchedSkills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Candidate Deep-Dive & Structured Interview Question Generator */}
        <div className="lg:col-span-7 space-y-5">
          <div className="glass-panel p-6 rounded-2xl border border-indigo-500/20">
            {/* Candidate Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-bold text-white">{selectedCandidate.name}</h2>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-400 border border-slate-700">
                    Source: {selectedCandidate.atsSource}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Applied for: <strong className="text-slate-200">{selectedCandidate.targetRole}</strong></p>
              </div>

              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-right">
                <span className="text-[10px] text-indigo-300 uppercase tracking-wider block font-semibold">Semantic Fit</span>
                <span className="text-xl font-bold text-white">{selectedCandidate.matchScore}%</span>
              </div>
            </div>

            {/* Skill Fit Breakdown */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5 mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Strong Competency Matches</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCandidate.matchedSkills.map((s, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-bold text-amber-400 flex items-center space-x-1.5 mb-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>Unverified / Missing Gaps</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCandidate.missingSkills.map((s, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Structured Interview Intelligence */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-indigo-400" />
                  <span>AI Generated Role-Specific Interview Questions</span>
                </h3>
                <span className="text-[10px] text-slate-400">Tailored to resume gaps</span>
              </div>

              <div className="space-y-3">
                {generatedQuestions.map((q, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase font-semibold">
                      {q.category}
                    </span>
                    <p className="text-xs font-semibold text-white mt-2 leading-relaxed">
                      "{q.question}"
                    </p>
                    <div className="mt-2.5 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400">
                      <strong className="text-slate-300">Expected Evaluation Criteria: </strong>
                      {q.expectedInsight}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Question Prompt Generator */}
            <form onSubmit={handleGenerateCustomQuestion} className="mt-4 flex gap-2">
              <input
                type="text"
                value={customQuestionInput}
                onChange={(e) => setCustomQuestionInput(e.target.value)}
                placeholder="Probe another area (e.g. 'How does candidate lead incident postmortems?')..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-indigo-500 text-xs text-white placeholder-slate-500 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition shrink-0"
              >
                Add Question
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
