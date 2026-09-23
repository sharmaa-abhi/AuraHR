export interface EmployeeRiskProfile {
  id: string;
  name: string;
  role: string;
  department: string;
  tenureYears: number;
  attritionRiskScore: number; // 0 - 100
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  signals: {
    compRatioToMarket: number; // e.g. 0.82 = 18% under market
    promotionStagnationMonths: number;
    engagementSentiment: number; // -1.0 to 1.0
    overtimeHoursPerMonth: number;
    managerMeetingFrequencyDays: number;
  };
  keyDrivers: string[];
  recommendedAction: string;
  estimatedReplacementCost: string;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'AI & ML' | 'Cloud & Systems' | 'Product & Data' | 'Leadership' | 'Security';
  currentMastery: number; // 0 - 100
  orgDemandTarget: number; // 0 - 100
  gap: number;
  topEmployees: string[];
  suggestedUpskillingProgram: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  targetRole: string;
  matchScore: number; // 0 - 100
  experienceYears: number;
  matchedSkills: string[];
  missingSkills: string[];
  atsSource: string;
  recommendedInterviewQuestions: {
    category: string;
    question: string;
    expectedInsight: string;
  }[];
}

export interface PolicyKnowledgeItem {
  id: string;
  topic: string;
  sourceDoc: string;
  section: string;
  sampleQuery: string;
  answerSummary: string;
  fullReasoning: string;
  complianceWarning?: string;
  actionChecklist: string[];
}

export const INITIAL_EMPLOYEES: EmployeeRiskProfile[] = [
  {
    id: "EMP-1042",
    name: "Alex Rivera",
    role: "Senior Distributed Systems Engineer",
    department: "Platform Engineering",
    tenureYears: 2.8,
    attritionRiskScore: 89,
    riskLevel: "CRITICAL",
    signals: {
      compRatioToMarket: 0.81,
      promotionStagnationMonths: 22,
      engagementSentiment: -0.42,
      overtimeHoursPerMonth: 44,
      managerMeetingFrequencyDays: 28,
    },
    keyDrivers: [
      "19% compensation delta against Q3 2026 market benchmarks",
      "Stalled promotion cycle despite high architectural output",
      "44 hrs/mo unlogged on-call overtime with declining Slack sentiment",
      "Manager 1-on-1 dropped to once per month"
    ],
    recommendedAction: "Authorize immediate out-of-cycle compensation adjustment (+16%) + schedule succession mapping 1-on-1 with VP Engineering.",
    estimatedReplacementCost: "$185,000 (Recruitment + ramp-up friction)"
  },
  {
    id: "EMP-0921",
    name: "Dr. Elena Rostova",
    role: "Lead Machine Learning Scientist",
    department: "AI Research",
    tenureYears: 1.9,
    attritionRiskScore: 78,
    riskLevel: "HIGH",
    signals: {
      compRatioToMarket: 0.88,
      promotionStagnationMonths: 14,
      engagementSentiment: -0.25,
      overtimeHoursPerMonth: 38,
      managerMeetingFrequencyDays: 14,
    },
    keyDrivers: [
      "Targeted headhunter activity spike on LinkedIn (profile updates detected)",
      "Expressed frustration with internal GPU cluster availability",
      "Sentiment dip during last 2 quarterly retrospective summaries"
    ],
    recommendedAction: "Fast-track compute allocation budget + assign Principal Research Track sponsor.",
    estimatedReplacementCost: "$240,000"
  },
  {
    id: "EMP-1405",
    name: "Marcus Vance",
    role: "Staff Product Designer",
    department: "Product & Experience",
    tenureYears: 3.4,
    attritionRiskScore: 68,
    riskLevel: "HIGH",
    signals: {
      compRatioToMarket: 0.94,
      promotionStagnationMonths: 18,
      engagementSentiment: -0.15,
      overtimeHoursPerMonth: 18,
      managerMeetingFrequencyDays: 21,
    },
    keyDrivers: [
      "Cross-functional friction between design system and frontend timelines",
      "Disengaged attendance signals on optional townhalls"
    ],
    recommendedAction: "Rotate leadership to Enterprise Design System Initiative + schedule design sprint autonomy review.",
    estimatedReplacementCost: "$120,000"
  },
  {
    id: "EMP-2104",
    name: "Priya Sharma",
    role: "Full Stack Software Engineer II",
    department: "Core Applications",
    tenureYears: 1.2,
    attritionRiskScore: 34,
    riskLevel: "LOW",
    signals: {
      compRatioToMarket: 1.02,
      promotionStagnationMonths: 6,
      engagementSentiment: 0.68,
      overtimeHoursPerMonth: 8,
      managerMeetingFrequencyDays: 7,
    },
    keyDrivers: [
      "Consistent weekly manager touchpoints with positive peer recognition",
      "Compensation aligned at 75th percentile of regional benchmark"
    ],
    recommendedAction: "Maintain trajectory; evaluate for fast-track Senior Engineer review in Q4.",
    estimatedReplacementCost: "$85,000"
  },
  {
    id: "EMP-1889",
    name: "Tariq Mansoor",
    role: "Senior Security Operations Analyst",
    department: "InfoSec & Governance",
    tenureYears: 2.1,
    attritionRiskScore: 58,
    riskLevel: "MEDIUM",
    signals: {
      compRatioToMarket: 0.90,
      promotionStagnationMonths: 15,
      engagementSentiment: -0.05,
      overtimeHoursPerMonth: 32,
      managerMeetingFrequencyDays: 14,
    },
    keyDrivers: [
      "Alert fatigue observed from overnight SOC triage rotations",
      "Comp baseline slightly lagging FinTech peer group"
    ],
    recommendedAction: "Implement automated Tier-1 SIEM alert triage + grant $4k advanced SANS GIAC certification budget.",
    estimatedReplacementCost: "$130,000"
  }
];

export const SKILL_GRAPH_DATA: SkillNode[] = [
  {
    id: "SK-1",
    name: "Generative AI & LLM Systems",
    category: "AI & ML",
    currentMastery: 52,
    orgDemandTarget: 90,
    gap: -38,
    topEmployees: ["Dr. Elena Rostova", "Devon Wu", "Priya Sharma"],
    suggestedUpskillingProgram: "Executive LLM Architect Immersion (8-week sprint with internal sandbox)"
  },
  {
    id: "SK-2",
    name: "Cloud-Native Kubernetes & Istio",
    category: "Cloud & Systems",
    currentMastery: 74,
    orgDemandTarget: 85,
    gap: -11,
    topEmployees: ["Alex Rivera", "Kenji Sato"],
    suggestedUpskillingProgram: "Certified Kubernetes Security Specialist (CKS) Cohort"
  },
  {
    id: "SK-3",
    name: "Enterprise Data Governance & SOC2",
    category: "Security",
    currentMastery: 60,
    orgDemandTarget: 95,
    gap: -35,
    topEmployees: ["Tariq Mansoor", "Sandra Bullock-Jones"],
    suggestedUpskillingProgram: "Automated Compliance & ISO/IEC 27001 AI audit training"
  },
  {
    id: "SK-4",
    name: "Cross-Functional Product Discovery",
    category: "Product & Data",
    currentMastery: 68,
    orgDemandTarget: 80,
    gap: -12,
    topEmployees: ["Marcus Vance", "Alicia Keys"],
    suggestedUpskillingProgram: "Continuous Discovery Habits Workshop by Teresa Torres methodology"
  },
  {
    id: "SK-5",
    name: "Distributed Vector Databases & Graph RAG",
    category: "AI & ML",
    currentMastery: 38,
    orgDemandTarget: 82,
    gap: -44,
    topEmployees: ["Dr. Elena Rostova"],
    suggestedUpskillingProgram: "Advanced Vector Search & Retrieval Engine Masterclass"
  },
  {
    id: "SK-6",
    name: "Engineering Mentorship & Technical Leadership",
    category: "Leadership",
    currentMastery: 64,
    orgDemandTarget: 78,
    gap: -14,
    topEmployees: ["Alex Rivera", "Priya Sharma"],
    suggestedUpskillingProgram: "LeadDev Leadership Cohort for Senior ICs"
  }
];

export const CANDIDATES_DATA: CandidateProfile[] = [
  {
    id: "CAN-501",
    name: "Nikhil Chawla",
    targetRole: "Staff AI Infrastructure Engineer",
    matchScore: 94,
    experienceYears: 7.5,
    matchedSkills: ["PyTorch", "Kubernetes", "Ray clusters", "vLLM", "Distributed Training", "CUDA"],
    missingSkills: ["Terraform v1.8 modules"],
    atsSource: "Greenhouse / Inbound Referral",
    recommendedInterviewQuestions: [
      {
        category: "System Resilience under Load",
        question: "How do you handle node preemption during 500B+ token continuous distributed model fine-tuning?",
        expectedInsight: "Candidate should explain checkpointing strategies, Ray train fault tolerance, and minimal GPU downtime."
      },
      {
        category: "Cost vs Throughput Optimization",
        question: "Describe your strategy for serving dynamic batching with TensorRT-LLM vs vLLM in a high-traffic production API.",
        expectedInsight: "Look for memory footprint reasoning, PagedAttention metrics, and GPU utilization benchmarks."
      }
    ]
  },
  {
    id: "CAN-502",
    name: "Sarah Jenkins",
    targetRole: "Senior People Analytics & Workforce Specialist",
    matchScore: 88,
    experienceYears: 5.0,
    matchedSkills: ["Workday API", "Python Pandas", "Attrition Forecasting", "Organizational Network Analysis (ONA)"],
    missingSkills: ["dbt pipeline orchestration"],
    atsSource: "LinkedIn Enterprise Direct",
    recommendedInterviewQuestions: [
      {
        category: "Ethical AI in HR",
        question: "How do you prevent demographic bias when training predictive flight-risk algorithms on historical HR attrition data?",
        expectedInsight: "Must mention protected class feature stripping, disparate impact ratio validation, and human-in-the-loop audit gates."
      }
    ]
  },
  {
    id: "CAN-503",
    name: "David Kalu",
    targetRole: "Principal Security Architect",
    matchScore: 81,
    experienceYears: 9.0,
    matchedSkills: ["Zero Trust", "AWS IAM Roles", "Threat Modeling", "SOC2 Type II"],
    missingSkills: ["Automated LLM Red Teaming"],
    atsSource: "Executive Search Partner",
    recommendedInterviewQuestions: [
      {
        category: "Agent Security Governance",
        question: "When deploying autonomous HR reasoning agents with access to employee compensation data, how do you enforce strict zero-leakage prompt fences?",
        expectedInsight: "Expect differential privacy, RBAC embeddings filtering, and egress policy tokens."
      }
    ]
  }
];

export const POLICY_KNOWLEDGE_BASE: PolicyKnowledgeItem[] = [
  {
    id: "POL-01",
    topic: "Parental Leave During Probationary Period",
    sourceDoc: "Global Employee Handbook v4.2 (2026)",
    section: "Section 7.4 (Family Care & Parental Entitlements)",
    sampleQuery: "Can an employee take fully paid parental leave if they are still within their 90-day probationary window?",
    answerSummary: "Yes, eligible employees receive 16 weeks of 100% paid parental leave effective on Day 1 of employment, with probation automatically paused during the leave period.",
    fullReasoning: "Under AuraGlobal Policy Section 7.4, parental leave benefits are non-delayed and activate upon the employee's official start date regardless of probationary tenure status. However, to guarantee fair evaluation, the 90-day probationary milestone calendar is automatically frozen and resumes upon return to active duty without penalty.",
    complianceWarning: "Do not reduce bonus or equity vesting schedules during approved statutory parental leave (Violates Equal Opportunity & Fair Labor Practices).",
    actionChecklist: [
      "Notify People Operations to trigger Day-1 Leave Grant in HRIS",
      "Set probation milestone pause in Greenhouse Onboarding",
      "Confirm continuation of full healthcare benefits"
    ]
  },
  {
    id: "POL-02",
    topic: "Remote Work & Cross-Border Tax Nexus",
    sourceDoc: "Work-From-Anywhere International Mobility Guidelines",
    section: "Section 3.1 & 3.2 (Tax Residency & Digital Nomad Limits)",
    sampleQuery: "How many days can a US-based employee work from an international location without triggering corporate tax liability?",
    answerSummary: "Up to 30 calendar days per fiscal year in approved Tier-A countries, requiring prior written authorization from HR Operations and Legal.",
    fullReasoning: "Working beyond 30 calendar days risks establishing a Permanent Establishment (PE) and personal income tax withholding obligations under foreign tax authority frameworks. Security policies also require hardware compliance checks before international border transit.",
    complianceWarning: "Working from countries subject to active ITAR or trade sanctions is strictly prohibited on corporate devices.",
    actionChecklist: [
      "Submit International Remote Work Request via Aura Portal 14 days in advance",
      "Obtain IT InfoSec device profile clearance",
      "Verify export control check on all company-issued laptops"
    ]
  },
  {
    id: "POL-03",
    topic: "Annual Learning & Development (L&D) Reimbursable Stipend",
    sourceDoc: "Total Rewards & Upskilling Policy Handbook",
    section: "Section 11 (Continuous Growth & Education)",
    sampleQuery: "Can the $2,500 L&D budget be used for certifications that are not directly tied to current job duties?",
    answerSummary: "Yes, if the certification aligns with internal workforce skill transition tracks (e.g. software engineer upskilling to AI/ML) and receives Department Head endorsement.",
    fullReasoning: "Aura encourages cross-skilling aligned with the Workforce Skill Graph. Certifications contributing to organizational strategic capabilities (like Cloud AI, Data Engineering, or Systems Architecture) qualify for 100% reimbursement up to $2,500/year upon successful completion certificate submission.",
    actionChecklist: [
      "Submit syllabus via Skill Transition Portal",
      "Provide proof of passing grade or completion credential",
      "Reimbursement processed in subsequent payroll cycle"
    ]
  }
];

export const ONBOARDING_TEMPLATES = [
  {
    role: "Senior AI / Software Engineer",
    durationDays: 30,
    milestones: [
      { day: 1, title: "Day 1 Setup & Compliance", desc: "Hardware Zero-Trust config, Okta access, 1-on-1 with onboarding buddy.", completed: true },
      { day: 7, title: "Week 1 Architecture Immersion", desc: "Clone monorepo, deploy local sandbox container, commit first doc/bug fix.", completed: true },
      { day: 14, title: "Week 2 Deep System Reasoning", desc: "Review production telemetry, shadow on-call rotation, participate in design sprint.", completed: false },
      { day: 30, title: "Month 1 First Production Feature", desc: "Ship end-to-end pull request with test coverage & run performance benchmark.", completed: false },
    ]
  },
  {
    role: "Product & Operations Manager",
    durationDays: 30,
    milestones: [
      { day: 1, title: "Day 1 Org Orientation", desc: "Access Jira, Amplitude, Coda docs, team alignment meeting.", completed: true },
      { day: 7, title: "Week 1 Stakeholder Discovery", desc: "Conduct 15 min discovery chats with 8 cross-functional leads.", completed: true },
      { day: 14, title: "Week 2 Roadmap Deep Dive", desc: "Review Q3/Q4 OKRs, analyze churn metrics, audit customer feedback stream.", completed: false },
      { day: 30, title: "Month 1 Lead First Sprint Grooming", desc: "Deliver feature spec with KPI targets and risk assessment.", completed: false },
    ]
  }
];
