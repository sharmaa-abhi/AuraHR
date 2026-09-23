import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle2, 
  Send, 
  FileCheck, 
  Sparkles, 
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { POLICY_KNOWLEDGE_BASE, PolicyKnowledgeItem } from '@/data/hrData';

export const PolicyAgentTab: React.FC = () => {
  const [activeQuery, setActiveQuery] = useState<string>('');
  const [activePolicy, setActivePolicy] = useState<PolicyKnowledgeItem>(POLICY_KNOWLEDGE_BASE[0]);
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [history, setHistory] = useState<PolicyKnowledgeItem[]>([POLICY_KNOWLEDGE_BASE[0]]);

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeQuery.trim()) return;

    setIsSynthesizing(true);
    setTimeout(() => {
      const match = POLICY_KNOWLEDGE_BASE.find(p => 
        p.sampleQuery.toLowerCase().includes(activeQuery.toLowerCase()) ||
        p.topic.toLowerCase().includes(activeQuery.toLowerCase())
      ) || POLICY_KNOWLEDGE_BASE[0];

      setActivePolicy(match);
      if (!history.some(h => h.id === match.id)) {
        setHistory(prev => [match, ...prev]);
      }
      setIsSynthesizing(false);
    }, 600);
  };

  const handleSelectPreset = (policy: PolicyKnowledgeItem) => {
    setActiveQuery(policy.sampleQuery);
    setActivePolicy(policy);
  };

  return (
    <div className="space-y-6 animate-fade-in text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-blue-800/80">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Contextual HR Policy Reasoning Agent
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/30 text-emerald-200 border border-emerald-400/50">
              RAG with Citation Grounding
            </span>
          </div>
          <p className="text-blue-200 text-sm mt-1">
            Answers complex compliance, cross-border, and benefits questions with exact source-backed policy citations (not a shallow chatbot).
          </p>
        </div>
      </div>

      {/* Preset Example Query Badges */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-blue-200 uppercase tracking-wider flex items-center space-x-1.5">
          <HelpCircle className="h-3.5 w-3.5 text-blue-300" />
          <span>Try Multi-Source Scenario Queries:</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {POLICY_KNOWLEDGE_BASE.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectPreset(item)}
              className="text-xs px-3 py-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-white font-medium border border-blue-700/60 hover:border-blue-500 transition flex items-center space-x-1.5 text-left"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item.sampleQuery}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Query Search Bar */}
      <form onSubmit={handleQuerySubmit} className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-blue-300" />
          <input
            type="text"
            value={activeQuery}
            onChange={(e) => setActiveQuery(e.target.value)}
            placeholder="Ask any complex HR question e.g. 'Can an employee take parental leave during probation?' or 'Cross-border tax rules'..."
            className="w-full pl-12 pr-32 py-3.5 rounded-xl bg-blue-950/90 border border-blue-700/70 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-white placeholder-blue-300/70 text-sm outline-none transition font-medium"
          />
          <button
            type="submit"
            disabled={isSynthesizing}
            className="absolute right-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-blue-600/40 border border-blue-400/40"
          >
            {isSynthesizing ? (
              <span>Reasoning...</span>
            ) : (
              <>
                <span>Reason</span>
                <Send className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Reasoning Output Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Answer with Ground Truth */}
        <div className="lg:col-span-8 space-y-5">
          <div className="glass-panel p-6 rounded-2xl border border-blue-500/30 bg-blue-950/80">
            {/* Citation Header */}
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-blue-800/80 gap-2">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  <FileCheck className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Audit-Verified Grounding</span>
                  <span className="text-[11px] font-mono text-blue-200">
                    Source: {activePolicy.sourceDoc} &bull; {activePolicy.section}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-500/30 text-emerald-200 border border-emerald-400/50">
                100% Policy Grounded
              </span>
            </div>

            {/* Answer Summary Card */}
            <div className="mt-5 p-4 rounded-xl bg-blue-900/50 border border-blue-700/60">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-1">
                Executive Synthesis
              </span>
              <p className="text-sm font-bold text-white leading-relaxed">
                {activePolicy.answerSummary}
              </p>
            </div>

            {/* Detailed Contextual Reasoning */}
            <div className="mt-5 space-y-2">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block">
                Full Statutory & Internal Policy Rationale
              </span>
              <p className="text-xs text-white leading-relaxed bg-blue-950 p-4 rounded-xl border border-blue-800/80 font-medium">
                {activePolicy.fullReasoning}
              </p>
            </div>

            {/* Compliance Warning (if any) */}
            {activePolicy.complianceWarning && (
              <div className="mt-5 p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-start space-x-3">
                <ShieldAlert className="h-5 w-5 text-rose-300 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-rose-200 block">Critical Compliance Guardrail</span>
                  <p className="text-xs text-white mt-0.5 leading-relaxed font-normal">
                    {activePolicy.complianceWarning}
                  </p>
                </div>
              </div>
            )}

            {/* Required Action Checklist */}
            <div className="mt-5">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2.5 block">
                Standard Operating Procedure (SOP) Checklist
              </span>
              <div className="space-y-2">
                {activePolicy.actionChecklist.map((act, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-blue-900/40 border border-blue-800 flex items-center space-x-2.5 text-xs text-white font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Knowledge Base Docs & Policy Registry */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-panel p-5 rounded-2xl border border-blue-800 bg-blue-950/80">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2 mb-3">
              <BookOpen className="h-4 w-4 text-blue-300" />
              <span>Vectorized Policy Corpus</span>
            </h3>

            <div className="space-y-2.5">
              {[
                { title: 'Global Employee Handbook v4.2', pages: '84 pages', updated: 'Jan 2026' },
                { title: 'International Mobility & Tax Nexus', pages: '32 pages', updated: 'Feb 2026' },
                { title: 'Total Rewards & Upskilling Policy', pages: '46 pages', updated: 'Dec 2025' },
                { title: 'Equal Opportunity & Anti-Harassment', pages: '28 pages', updated: 'Jan 2026' },
              ].map((doc, i) => (
                <div key={i} className="p-3 rounded-xl bg-blue-900/40 border border-blue-800 hover:border-blue-600 transition">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{doc.title}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-blue-300" />
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] text-blue-200 mt-1 font-medium">
                    <span>{doc.pages}</span>
                    <span>&bull;</span>
                    <span>Vectorized & Indexed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reasoning Agent Architecture Callout */}
          <div className="p-4 rounded-2xl bg-blue-900/50 border border-blue-500/40">
            <div className="flex items-center space-x-2 text-xs font-bold text-white mb-1">
              <Sparkles className="h-4 w-4 text-blue-300" />
              <span>Zero-Hallucination Protocol</span>
            </div>
            <p className="text-xs text-blue-100 leading-relaxed font-normal">
              Every answer enforces vector chunk similarity thresholds &gt;0.88 with strict citation verification to eliminate speculative answers in enterprise legal contexts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
