import React, { useState } from 'react';
import { 
  ChevronRight, 
  CheckCircle2, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Cpu, 
  TrendingUp, 
  Clock, 
  Award,
  ChevronDown,
  Building2,
  Globe,
  Briefcase,
  X,
  Mail,
  Send,
  Zap,
  BarChart,
  FileText,
  PieChart,
  Workflow
} from 'lucide-react';

// --- Types ---
type ModalType = 'apply' | 'prospectus' | null;

// --- Sub-components ---

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children?: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-250">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition group">
            <X className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
          </button>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onOpenModal }: { onOpenModal: (type: ModalType) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-18 items-center py-4">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-blue-900">METI</a>
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-semibold text-slate-500">
          <a href="#outcomes" className="hover:text-blue-600 transition">Outcomes</a>
          <a href="#curriculum" className="hover:text-blue-600 transition">Curriculum</a>
          <a href="#who-it-is-for" className="hover:text-blue-600 transition">Who It's For</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => onOpenModal('prospectus')}
            className="hidden sm:block text-sm font-bold text-slate-700 hover:text-blue-600 transition"
          >
            Prospectus
          </button>
          <button 
            onClick={() => onOpenModal('apply')}
            className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-blue-900/10 hover:bg-blue-800 transition transform hover:scale-105"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = ({ onOpenModal }: { onOpenModal: (type: ModalType) => void }) => (
  <header className="relative pt-36 pb-24 lg:pt-56 lg:pb-36 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10 opacity-70"></div>
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest">
            Quarterly Curriculum
          </span>
          <span className="px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-widest">
            AI Revenue Excellence
          </span>
        </div>
        <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
          Design, Deploy & Govern <span className="text-blue-600">AI-Powered Revenue</span>
        </h1>
        <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-medium">
          Equipping executives, commercial leaders, and growth teams with the capability to build commercial systems that deliver measurable ROI.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-50 rounded-lg shrink-0">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">Duration</p>
              <p className="text-slate-600 font-medium">12 Weeks (Quarterly)</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-indigo-50 rounded-lg shrink-0">
              <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">Format</p>
              <p className="text-slate-600 font-medium">Hybrid: Workshops & Applied Labs</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => onOpenModal('apply')}
            className="bg-blue-900 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-blue-900/20 hover:bg-blue-800 hover:scale-[1.02] transition flex items-center justify-center group"
          >
            Apply for Next Cohort
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          <button 
            onClick={() => onOpenModal('prospectus')}
            className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-lg font-black hover:bg-slate-50 transition flex items-center justify-center shadow-sm"
          >
            <FileText className="mr-3 w-5 h-5 text-slate-400" />
            Download Syllabus
          </button>
        </div>
      </div>
    </div>
  </header>
);

const WhoItIsFor = () => (
  <section className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-20" id="who-it-is-for">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Target Audience</h2>
          <p className="text-lg text-slate-600 font-medium">The program is architected for organizations that prioritize commercial excellence through data and AI-led transformation.</p>
        </div>
        <div className="bg-blue-900 text-white p-6 rounded-2xl font-bold text-sm tracking-tight flex items-center shrink-0">
           <ShieldCheck className="w-5 h-5 mr-3 text-blue-300" />
           Certified applied capability for the AI era.
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Users />, title: "CXOs", desc: "CEO, CCO, CMO, CFO" },
          { icon: <Briefcase />, title: "Heads of Functions", desc: "Sales, Marketing, Growth, Commercial Ops" },
          { icon: <TrendingUp />, title: "RevOps Teams", desc: "Revenue Operations & Analytical Specialists" },
          { icon: <ShieldCheck />, title: "Strategy Units", desc: "Transformation & Innovation Leadership" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Outcomes = () => (
  <section className="py-32 bg-white scroll-mt-20" id="outcomes">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 leading-tight tracking-tighter">
            Program Architecture & Deliverables
          </h2>
          <p className="text-slate-600 mb-12 text-lg font-medium leading-relaxed">
            Participants leave with more than knowledge—they walk away with a live, AI-enabled commercial system and a 90–180 day revenue acceleration roadmap.
          </p>
          <div className="space-y-4">
            {[
              "Strategic Frameworks & Decision Models",
              "AI Tooling Selection & Integration Systems",
              "Validated Commercial Use Cases",
              "KPIs & ROI Measurement Frameworks",
              "Enterprise Governance & Risk Controls"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-black shrink-0">
                  {idx + 1}
                </div>
                <span className="text-slate-800 font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 p-12 lg:p-16 rounded-[3.5rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <BarChart className="w-48 h-48" />
          </div>
          <h3 className="text-3xl font-black mb-10 tracking-tight flex items-center">
            <Target className="mr-4 w-8 h-8 text-blue-400" />
            Primary Program KPIs
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: "Revenue uplift (%)", val: "High Impact" },
              { label: "Cost-to-acquire reduction", val: "-15-30%" },
              { label: "Funnel velocity improvement", val: "Accelerated" },
              { label: "Forecast accuracy", val: "Predictable" },
              { label: "ROI multiple achieved", val: "3x - 10x" }
            ].map((kpi, idx) => (
              <div key={idx} className="flex items-center justify-between p-5 bg-slate-800/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">{kpi.label}</span>
                <span className="text-blue-400 font-black text-lg">{kpi.val}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-400 text-sm italic font-medium">
            "This curriculum is designed to be modular, repeatable, and enterprise-scalable."
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Curriculum = ({ onOpenModal }: { onOpenModal: (type: ModalType) => void }) => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: "Commercial Intelligence & AI Foundations",
      objective: "Establish a unified understanding of how AI drives modern revenue systems.",
      topics: ["Evolution of commercial intelligence (BI to AI)", "AI vs automation vs analytics", "Data as a revenue asset", "Revenue system architecture"],
      outputs: ["Commercial Intelligence Map", "Revenue Data Maturity Scorecard"],
      apps: ["Predictive Scoring", "Demand Forecasting", "Pricing Intel"]
    },
    {
      title: "AI Revenue Optimization Program",
      objective: "Systematically increase revenue per customer, per channel, and per cycle.",
      topics: ["Revenue leakage identification", "AI-driven pricing & discount optimization", "CLV modeling", "Cross-sell/upsell intelligence"],
      outputs: ["Revenue Optimization Blueprint", "CLV & Margin Expansion Model"],
      apps: ["Dynamic Pricing", "Offer Optimization Engines"]
    },
    {
      title: "AI-Driven Go-To-Market Excellence",
      objective: "Redesign GTM strategies using AI for precision, speed, and scale.",
      topics: ["AI-powered market entry strategies", "ICP refinement & demand scoring", "Channel performance optimization", "Funnel velocity management"],
      outputs: ["AI-Enabled GTM Strategy", "Funnel Performance Playbook"],
      apps: ["Predictive Lead Qualification", "Sales Pipeline Optimization"]
    },
    {
      title: "Performance & ROI Acceleration",
      objective: "Ensure all commercial activities are tied to measurable financial outcomes.",
      topics: ["Defining performance metrics that matter", "AI-driven attribution modeling", "ROI forecasting & performance simulation", "Optimization loops"],
      outputs: ["Performance KPI Framework", "ROI Acceleration Dashboard"],
      apps: ["Multi-touch Attribution", "Spend Optimization"]
    },
    {
      title: "Commercial Operations & Revenue Systems Engineering",
      objective: "Build scalable, automated, and resilient revenue operations using AI.",
      topics: ["RevOps design", "AI-enabled sales operations", "Marketing-sales-finance alignment", "Workflow intelligence"],
      outputs: ["RevOps AI Architecture", "Commercial Process Automation Map"],
      apps: ["Sales Cycle Optimization", "Churn & Retention Analytics"]
    },
    {
      title: "Governance, Risk & Scalable Execution",
      objective: "Ensure responsible, secure, and scalable deployment of AI in revenue systems.",
      topics: ["AI governance in commercial environments", "Data privacy, compliance & ethics", "Change management & adoption", "Scaling AI across units"],
      outputs: ["AI Commercial Governance Model", "180-Day Revenue Scaling Roadmap"],
      apps: ["Access Control & Audit Trails", "Decision Accountability"]
    }
  ];

  return (
    <section className="py-32 bg-slate-50 border-y border-slate-200 scroll-mt-20" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter">12-Week Track Architecture</h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Six modules spanning 2 weeks each, covering the full spectrum of AI commercial excellence.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Module Selection */}
          <div className="lg:col-span-4 space-y-3">
            {modules.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setActiveModule(idx)}
                className={`w-full text-left p-6 rounded-[1.5rem] border transition-all duration-300 relative overflow-hidden group ${
                  activeModule === idx 
                  ? 'bg-blue-900 text-white border-blue-900 shadow-2xl shadow-blue-900/20' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {activeModule === idx && (
                  <div className="absolute right-0 top-0 h-full w-1 bg-blue-400"></div>
                )}
                <div className={`text-[10px] uppercase tracking-widest font-black mb-2 ${activeModule === idx ? 'text-blue-300' : 'text-slate-400'}`}>Week {(idx * 2) + 1}—{(idx * 2) + 2}</div>
                <div className="font-black text-base leading-tight tracking-tight">{m.title}</div>
              </button>
            ))}
          </div>

          {/* Module Details */}
          <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-200 p-10 lg:p-16 shadow-sm min-h-[500px] flex flex-col justify-between animate-in fade-in duration-300">
            <div>
              <div className="flex items-start justify-between mb-10 gap-6">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{modules[activeModule].title}</h3>
                  <p className="text-blue-600 font-black text-sm uppercase tracking-widest bg-blue-50 inline-block px-3 py-1 rounded-lg">
                    Objective: {modules[activeModule].objective}
                  </p>
                </div>
                <div className="text-6xl font-black text-slate-100 shrink-0">0{activeModule + 1}</div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Key Topics & Applications</h4>
                  <ul className="space-y-4">
                    {modules[activeModule].topics.map((t, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-700 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Core Applications</h4>
                    <div className="flex flex-wrap gap-2">
                       {modules[activeModule].apps.map((app, i) => (
                         <span key={i} className="px-2 py-1 bg-slate-50 rounded-md text-[10px] font-black text-slate-500 border border-slate-100">{app}</span>
                       ))}
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100/50">
                  <h4 className="text-xs font-black text-blue-900 uppercase tracking-widest mb-6 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Executive Outputs
                  </h4>
                  <div className="space-y-4">
                    {modules[activeModule].outputs.map((o, i) => (
                      <div key={i} className="p-4 bg-white border border-blue-200 rounded-2xl text-blue-900 text-sm font-black flex items-center shadow-sm">
                        <Zap className="w-4 h-4 mr-3 text-blue-500" />
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-widest border-t border-slate-100 pt-8">
              <span>Next Phase: Module 0{activeModule + 2 > 6 ? 1 : activeModule + 2}</span>
              <button onClick={() => onOpenModal('prospectus')} className="text-blue-600 hover:underline">Get Detailed PDF</button>
            </div>
          </div>
        </div>

        {/* Capstone Promotion */}
        <div className="mt-20 bg-indigo-900 rounded-[3.5rem] p-12 lg:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-3xl shadow-indigo-900/40">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <span className="text-blue-300 font-black text-xs uppercase tracking-[0.2em] mb-4 block">The Program Finale</span>
              <h3 className="text-4xl font-black mb-6 tracking-tighter">Executive Revenue Transformation Project</h3>
              <p className="text-indigo-100 text-lg font-medium leading-relaxed mb-8">
                The quarter concludes with a live capstone project where participants deploy a production-ready AI performance system into their organization, supported by METI advisors.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                 {["Live System Deployment", "Board Impact Report", "Financial ROI Forecast"].map((item, i) => (
                   <span key={i} className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-xs font-black">{item}</span>
                 ))}
              </div>
           </div>
           <button 
             onClick={() => onOpenModal('apply')}
             className="mt-12 lg:mt-0 relative z-10 bg-white text-indigo-900 px-10 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-white/10 hover:bg-blue-50 transition transform hover:-translate-y-1"
           >
             Enroll in Program
           </button>
        </div>
      </div>
    </section>
  );
};

const Certifications = () => (
  <section className="py-32 bg-white scroll-mt-20" id="certifications">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Validation of Excellence</h2>
      <p className="text-lg text-slate-500 mb-20 max-w-2xl mx-auto font-medium">Participants are certified at three strategic levels based on applied capability and program complexity.</p>
      
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { level: "Level 01", title: "Certified AI Commercial Associate", icon: <Award className="w-10 h-10 text-slate-400" />, focus: "Fundamental Tooling & Systems" },
          { level: "Level 02", title: "Certified AI Revenue Professional", icon: <Award className="w-12 h-12 text-blue-600" />, focus: "Applied Optimization & Analytics" },
          { level: "Level 03", title: "Certified AI Growth Executive", icon: <Award className="w-14 h-14 text-indigo-900" />, focus: "Governance & Scalable Execution" }
        ].map((cert, idx) => (
          <div key={idx} className="p-12 rounded-[3.5rem] border border-slate-200 flex flex-col items-center justify-center hover:bg-slate-50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:border-blue-200 group">
            <div className="mb-8 transform group-hover:scale-110 transition-transform">
              {cert.icon}
            </div>
            <div className="px-4 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">
              {cert.level}
            </div>
            <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4 px-4">{cert.title}</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{cert.focus}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "Is this program technical or strategic?",
      a: "It is built for leaders. While we touch on technical architecture, the focus is on strategic frameworks, AI tooling systems, and commercial use cases. You won't be writing code, but you will be leading those who do."
    },
    {
      q: "What is the expected time commitment?",
      a: "The program is designed for working executives. It requires approximately 4-6 hours per week, including workshops, labs, and asynchronous case work."
    },
    {
      q: "Is this suitable for government or regulated entities?",
      a: "Yes. Module 06 specifically covers governance, risk controls, data privacy, and ethical AI deployment for commercial environments, which is critical for banks, telecoms, and the public sector."
    },
    {
      q: "Are enterprise enrollments supported?",
      a: "Absolutely. We encourage leadership teams to enroll together to foster organization-wide alignment. Group discounts and dedicated project tracks are available."
    }
  ];

  return (
    <section className="py-32 bg-slate-50 scroll-mt-20" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-16 text-center tracking-tighter">Executive FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-[2rem] overflow-hidden bg-white shadow-sm transition hover:shadow-lg">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex justify-between items-center text-left transition"
              >
                <span className="text-xl font-black text-slate-900 pr-10 leading-tight">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform shrink-0 text-slate-400 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    setIsSuccess(false);
    setError(null);
  };

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
    };

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');
      
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setError("We encountered an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProspectusSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
    };

    try {
      const res = await fetch('/api/prospectus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Request failed');
      
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setError("We encountered an error sending the syllabus. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 antialiased">
      <Navbar onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <WhoItIsFor />
        <Outcomes />
        <Curriculum onOpenModal={openModal} />
        <Certifications />
        <FAQ />

        {/* Final CTA */}
        <section className="py-36 relative overflow-hidden bg-slate-900">
          <div className="absolute top-0 right-0 p-32 opacity-10 rotate-12">
             <Cpu className="w-96 h-96 text-blue-500" />
          </div>
          <div className="max-w-7xl mx-auto px-4 relative text-center">
             <h2 className="text-5xl lg:text-8xl font-black text-white mb-10 tracking-tighter">Modernize Your <span className="text-blue-500">Revenue Engine</span>.</h2>
             <p className="text-xl lg:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium">Join the next quarterly cohort and lead the deployment of AI commercial excellence.</p>
             <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <button 
                  onClick={() => openModal('apply')}
                  className="bg-white text-blue-900 px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl hover:bg-slate-100 transition transform hover:-translate-y-1"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => openModal('prospectus')}
                  className="bg-slate-800 text-white border border-slate-700 px-12 py-6 rounded-2xl text-2xl font-black hover:bg-slate-700 transition"
                >
                  Request Briefing
                </button>
             </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-3xl font-black tracking-tighter text-blue-900 mb-6 block">METI</span>
          <p className="text-slate-500 font-bold text-sm mb-4 uppercase tracking-widest">AI Revenue, Performance & Commercial Excellence Track</p>
          <p className="text-slate-400 text-[10px] max-w-2xl mx-auto italic mb-12">
            This quarterly program is designed to equip executives with the capability to design, deploy, and govern AI-powered revenue systems that deliver measurable ROI.
          </p>
          <div className="flex justify-center space-x-12 text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-blue-600 transition">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition">Terms</a>
            <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <Modal 
        isOpen={activeModal === 'apply'} 
        onClose={() => setActiveModal(null)}
        title="Start Your Enrollment"
      >
        {isSuccess ? (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h4 className="text-3xl font-black text-slate-900 mb-4">Application Sent</h4>
            <p className="text-slate-600 font-medium">Our admissions team will reach out within 24 business hours to schedule a discovery call.</p>
          </div>
        ) : (
          <form onSubmit={handleApplySubmit} className="space-y-5">
            {error && <div className="p-3 bg-red-50 text-red-600 text-sm font-bold rounded-xl border border-red-100">{error}</div>}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <input name="name" required type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
              <input name="email" required type="email" placeholder="john@enterprise.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
              <input name="phone" required type="tel" placeholder="+1 (555) 000-0000" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Title / Company</label>
              <input name="company" required type="text" placeholder="CCO at Global Tech" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full py-5 bg-blue-900 text-white font-black rounded-2xl hover:bg-blue-800 transition flex items-center justify-center shadow-2xl shadow-blue-900/20 text-lg mt-8 disabled:opacity-70"
            >
              {isSubmitting ? <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span> : "Submit Application"}
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-2">Applications close 14 days before cohort start.</p>
          </form>
        )}
      </Modal>

      <Modal 
        isOpen={activeModal === 'prospectus'} 
        onClose={() => setActiveModal(null)}
        title="Download Track Prospectus"
      >
        {isSuccess ? (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Mail className="w-12 h-12" />
            </div>
            <h4 className="text-3xl font-black text-slate-900 mb-4">Check Your Inbox</h4>
            <p className="text-slate-600 font-medium">The full 12-week program syllabus and ROI framework has been sent to your work email.</p>
          </div>
        ) : (
          <form onSubmit={handleProspectusSubmit} className="space-y-6">
            <p className="text-slate-500 text-sm font-medium leading-relaxed italic">Enter your professional email to receive the full curriculum architecture, tool recommendations, and certification paths.</p>
            {error && <div className="p-3 bg-red-50 text-red-600 text-sm font-bold rounded-xl border border-red-100">{error}</div>}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <input name="email" required type="email" placeholder="you@company.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full py-5 bg-blue-900 text-white font-black rounded-2xl hover:bg-blue-800 transition flex items-center justify-center space-x-3 text-lg disabled:opacity-70"
            >
              {isSubmitting ? <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span> : <><Send className="w-5 h-5" /><span>Send My Prospectus</span></>}
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
}