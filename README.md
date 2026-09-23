# AuraHR - Autonomous AI Workforce Intelligence Platform

> **Track 1: Human Resources (HR)**
> **Challenge**: Build an AI-driven intelligent workforce management platform that reasons over multiple HR data sources and recommends proactive actions across the employee lifecycle.

---

## 🌟 Executive Overview

**AuraHR** is an enterprise workforce intelligence platform that moves beyond shallow chatbots to deliver **predictive, multi-source workforce reasoning**. By synthesizing signals across HRIS (Workday), ATS (Greenhouse), collaboration channels (Slack sentiment & pulse), performance OKRs, and code velocity (GitHub/Jira), AuraHR detects attrition risks **60–90 days before formal notices** and prescribes automated retention workflows.

---

## 🚀 Core MVP Modules

### 1. Executive Workforce Command Hub
- Cross-silo workforce health telemetry and real-time inference monitoring.
- Unified view of flight-risk exposure, organizational capability deficits, and recruitment pipeline velocity.

### 2. Predictive Flight-Risk & Attrition Retention Engine
- **Multi-Signal Telemetry**: Correlates compensation delta vs. market, promotion stagnation duration, NLP sentiment drift from 1-on-1s, and after-hours burnout overtime.
- **Prescriptive Retentions**: 1-click execution for out-of-cycle comp adjustments, project rotations, and executive sponsorship.
- **Interactive Compensation Simulator**: Real-time slider forecasting retention probability increases based on budget allocation.

### 3. Workforce Dynamic Skill Graph
- Maps employee competencies against forward-looking enterprise capability targets (GenAI, Kubernetes, SOC2 Governance, Cloud Architecture).
- Automatically identifies organizational capability deficits and links employees to structured 8-week upskilling cohorts.

### 4. Contextual HR Policy Reasoning Agent (RAG)
- Multi-document retrieval with citation grounding.
- Answers complex compliance questions (e.g. parental leave during probation, international tax residency rules, and educational reimbursement) with exact clause citations and statutory risk alerts.

### 5. AI Recruitment Intelligence & Interview Assistant
- Evaluates candidate resumes against job requisitions to compute semantic match scores.
- Automatically generates role-specific behavioral and architectural interview questions with explicit evaluation rubrics.

### 6. Adaptive Onboarding Journey Architect
- Personalized 30-day onboarding pathways tailored to candidate seniority, department, and skill gaps.
- Interactive milestone verification and velocity tracking.

---

## 🛠 Tech Stack

- **Frontend / Framework**: Next.js 14, React 18, TypeScript
- **Styling & Aesthetics**: Tailwind CSS, Glassmorphic enterprise dark theme
- **Icons & Visuals**: Lucide React
- **Architecture**: App Router, Clean Component Architecture, Multi-Signal Reasoning Layer

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/sharmaa-abhi/AuraHR.git
cd AuraHR

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the interactive dashboard.
