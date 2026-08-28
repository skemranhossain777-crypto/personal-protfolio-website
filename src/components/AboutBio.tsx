import { useState } from 'react';
import { 
  User, 
  Briefcase, 
  ShieldCheck, 
  Sparkles, 
  BrainCircuit, 
  Rocket, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ChevronRight,
  Terminal
} from 'lucide-react';
import { UserProfile } from '../types';

interface AboutBioProps {
  profile: UserProfile;
}

export function AboutBio({ profile }: AboutBioProps) {
  const [activeTab, setActiveTab] = useState<'story' | 'timeline' | 'principles'>('story');

  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-indigo-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-sky-500" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-emerald-500" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Biography & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Crafting Resilient Systems & Intuitive Products
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
            A look into my journey, core technical philosophy, and experience scaling mission-critical applications.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700/60 shadow-xs">
            <button
              id="about-tab-story"
              onClick={() => setActiveTab('story')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'story'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Story & Vision</span>
            </button>

            <button
              id="about-tab-timeline"
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Career Milestones</span>
            </button>

            <button
              id="about-tab-principles"
              onClick={() => setActiveTab('principles')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'principles'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Engineering Tenets</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Story & Vision */}
        {activeTab === 'story' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            {/* Left bio text */}
            <div className="lg:col-span-7 space-y-5 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>My Journey in Engineering</span>
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {profile.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Highlight callout */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                  Primary Focus in 2026
                </div>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Building low-latency agentic workflows, deterministic code execution sandboxes, and high-throughput real-time web infrastructure.
                </div>
              </div>
            </div>

            {/* Right Quick Facts & Education */}
            <div className="lg:col-span-5 space-y-6">
              {/* Education Card */}
              {profile.education.map((edu) => (
                <div 
                  key={edu.id}
                  className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                    <GraduationCap className="w-5 h-5" />
                    <span>Education & Background</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
                      {edu.period} • {edu.grade}
                    </p>
                  </div>
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {edu.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Certifications Card */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <Award className="w-5 h-5" />
                  <span>Industry Certifications</span>
                </div>
                <div className="space-y-2.5 pt-1">
                  {profile.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {cert.name}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400">
                          {cert.issuer}
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 shrink-0 ml-2 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {cert.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Career Milestones Timeline */}
        {activeTab === 'timeline' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
            {profile.experiences.map((exp, idx) => (
              <div 
                key={exp.id}
                className="relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
              >
                {/* Top Role & Company Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 mb-1.5">
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="flex items-center gap-1 font-normal text-slate-500 dark:text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-2 mb-5">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Key Outcomes & Impact:
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used in role */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 font-medium mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Core Architectural Principles */}
        {activeTab === 'principles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {profile.coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center">
                    {getPrincipleIcon(val.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  <span>Standard in all production deployments</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
