import { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Twitter, 
  Code2, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { UserProfile } from '../types';
import { generateResumePDF } from '../utils/pdfGenerator';

interface HeroProps {
  profile: UserProfile;
}

export function Hero({ profile }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'twitter': return <Twitter className="w-4 h-4" />;
      case 'leetcode': return <Code2 className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-sky-400/10 to-purple-500/10 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 blur-2xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Pill & Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{profile.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                <span>{profile.location.split('(')[0].trim()}</span>
              </div>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {profile.title}
              </p>
            </div>

            {/* Headline / Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profile.headline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={() => generateResumePDF(profile)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Links & Copy Email Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-medium text-xs text-slate-500 uppercase tracking-wider">Profiles:</span>
              
              <div className="flex items-center gap-2">
                {profile.socials.map((social) => {
                  if (social.platform === 'email') return null;
                  return (
                    <a
                      key={social.platform}
                      id={`hero-social-${social.platform}`}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                      aria-label={social.label}
                      title={`${social.label}: ${social.username || social.url}`}
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  );
                })}
              </div>

              <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1 hidden sm:block" />

              {/* Fast Copy Email Button */}
              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-sans font-medium">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Visual Card & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative card */}
              <div className="relative rounded-3xl p-6 bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 shadow-xl">
                
                {/* Tech Badge Floating Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-700/60 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Systems & AI Engineer</span>
                  </div>
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800 text-[11px]">
                    v2026.08
                  </span>
                </div>

                {/* Profile Avatar / Photo */}
                <div className="relative w-32 h-32 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 rotate-6 opacity-40 blur-xs"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-md bg-slate-200 dark:bg-slate-700">
                    <img 
                      src={profile.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"} 
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Micro bio summary inside card */}
                <div className="text-center space-y-1 mb-5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {profile.location}
                  </p>
                </div>

                {/* Mini skill pills */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                  {['TypeScript', 'React', 'Node.js', 'Python', 'Gemini AI', 'Kubernetes', 'PostgreSQL'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct quick action inside card */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Verified Credentials
                  </span>
                  <a 
                    href="#resume" 
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    View Experience &rarr;
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* High-Impact Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {profile.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700/50 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {stat.label}
              </div>
              {stat.change && (
                <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                  {stat.change}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
