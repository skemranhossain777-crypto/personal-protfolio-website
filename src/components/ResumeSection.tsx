import { useState } from 'react';
import { 
  FileText, 
  FileDown, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  Edit3,
  Eye
} from 'lucide-react';
import { UserProfile } from '../types';
import { generateResumePDF } from '../utils/pdfGenerator';

interface ResumeSectionProps {
  profile: UserProfile;
  onOpenEditor: () => void;
}

export function ResumeSection({ profile, onOpenEditor }: ResumeSectionProps) {
  const [copiedText, setCopiedText] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [activeResumeTab, setActiveResumeTab] = useState<'all' | 'experience' | 'education'>('all');

  const handleDownload = () => {
    setDownloading(true);
    try {
      generateResumePDF(profile);
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const handleCopyPlainText = () => {
    const plainText = `
${profile.name.toUpperCase()}
${profile.title}
${profile.location} | ${profile.email} | ${profile.phone}

EXECUTIVE SUMMARY
${profile.summary}

CORE SKILLS
${profile.skills.map(s => s.name).join(', ')}

PROFESSIONAL EXPERIENCE
${profile.experiences.map(e => `
${e.role.toUpperCase()} - ${e.company} (${e.period})
Location: ${e.location} | Type: ${e.type}
${e.highlights.map(h => `• ${h}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`).join('\n')}

EDUCATION
${profile.education.map(ed => `
${ed.institution}
${ed.degree} in ${ed.field} (${ed.period})
${ed.achievements.map(a => `• ${a}`).join('\n')}
`).join('\n')}

CERTIFICATIONS
${profile.certifications.map(c => `• ${c.name} - ${c.issuer} (${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae & Resume</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Executive Resume & Credentials
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
            Download the verified, ATS-compliant PDF resume or review the structured document below.
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          
          {/* Left: ATS Badge */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              ATS-Optimized Formatting
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              Updated August 2026
            </span>
          </div>

          {/* Right: Download, Print, Copy, Edit buttons */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Customize Details */}
            <button
              id="resume-edit-details-btn"
              onClick={onOpenEditor}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Edit resume info in real-time"
            >
              <Edit3 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Customize Info</span>
            </button>

            {/* Copy Plain Text */}
            <button
              id="resume-copy-text-btn"
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Copy plain text for job applications"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Plain Text</span>
                </>
              )}
            </button>

            {/* Print */}
            <button
              id="resume-print-btn"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer hidden md:inline-flex"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Primary Download PDF Button */}
            <button
              id="resume-download-pdf-main-btn"
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FileDown className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
              <span>{downloading ? 'Generating PDF...' : 'Download PDF Resume'}</span>
            </button>
          </div>

        </div>

        {/* Live Resume Document Paper View */}
        <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-xl max-w-4xl mx-auto font-sans">
          
          {/* Resume Paper Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400">
                {profile.title}
              </p>
            </div>

            {/* Contact Line */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-slate-400 mt-2.5 font-normal">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-500" />
                {profile.location.split('(')[0].trim()}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-indigo-500" />
                {profile.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-indigo-500" />
                {profile.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Github className="w-3 h-3 text-indigo-500" />
                github.com/emranhossain
              </span>
            </div>
          </div>

          {/* Section: Executive Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 pb-1.5 border-b border-indigo-200 dark:border-indigo-900 mb-3 flex items-center gap-2">
              <span>Executive Summary</span>
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* Section: Core Competencies */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 pb-1.5 border-b border-indigo-200 dark:border-indigo-900 mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Frontend & Architecture: </span>
                <span className="text-slate-600 dark:text-slate-400">TypeScript, React 19, Next.js, Tailwind CSS, WebSockets, State Management</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Backend & APIs: </span>
                <span className="text-slate-600 dark:text-slate-400">Node.js, Express, Python FastAPI, Go, GraphQL, Microservices, REST</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">AI & LLM Workflows: </span>
                <span className="text-slate-600 dark:text-slate-400">Gemini 2.5 API, RAG Pipelines, Vector DBs (Chroma/Pinecone), Tool Calling</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Cloud & DevOps: </span>
                <span className="text-slate-600 dark:text-slate-400">Kubernetes, Docker, GCP, AWS, CI/CD, Terraform, PostgreSQL, Redis</span>
              </div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="mb-8 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 pb-1.5 border-b border-indigo-200 dark:border-indigo-900 mb-4">
              Professional Work Experience
            </h2>

            {profile.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {exp.company} — {exp.location} ({exp.type})
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section: Education */}
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 pb-1.5 border-b border-indigo-200 dark:border-indigo-900 mb-3">
              Education & Academic Honors
            </h2>

            {profile.education.map((edu) => (
              <div key={edu.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {edu.institution}
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                      {edu.degree} in {edu.field} • {edu.grade}
                    </p>
                  </div>
                  <span className="font-mono text-slate-500 font-semibold">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 pb-1.5 border-b border-indigo-200 dark:border-indigo-900 mb-3">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {profile.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>
                    <strong className="font-semibold text-slate-900 dark:text-white">{cert.name}</strong> — {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Download Bar inside paper */}
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Need a tailored resume or reference check?
            </span>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Clean Vector PDF</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
