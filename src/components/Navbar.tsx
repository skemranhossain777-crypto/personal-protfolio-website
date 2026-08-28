import { useState, useEffect } from 'react';
import { 
  FileDown, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Sparkles, 
  Send,
  UserCheck,
  Edit3
} from 'lucide-react';
import { UserProfile } from '../types';
import { generateResumePDF } from '../utils/pdfGenerator';

interface NavbarProps {
  profile: UserProfile;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenEditor: () => void;
}

export function Navbar({ profile, darkMode, setDarkMode, onOpenEditor }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'talks', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'talks', label: 'Talks' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className="flex items-center gap-2.5 group cursor-pointer"
          id="navbar-brand-link"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div className="font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5 text-base">
              {profile.name}
              {profile.openToWork && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                  Available
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-normal hidden sm:block">
              {profile.title.split('&')[0].trim()}
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-slate-700/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Edit Profile Trigger */}
          <button
            id="navbar-edit-profile-btn"
            onClick={onOpenEditor}
            title="Customize Portfolio & Resume Info"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800 hidden sm:flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden lg:inline">Edit Details</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            id="navbar-theme-toggle"
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle dark mode"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 transition-all border border-slate-200 dark:border-slate-700 text-xs font-semibold cursor-pointer select-none shadow-xs"
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-600" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* Quick PDF Download Button */}
          <button
            id="navbar-download-resume-btn"
            onClick={() => generateResumePDF(profile)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <FileDown className="w-4 h-4" />
            <span>PDF Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="navbar-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              id="mobile-theme-toggle-btn"
              onClick={() => setDarkMode(prev => !prev)}
              className="flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
                <span>Theme: {darkMode ? 'Dark Mode' : 'Light Mode'}</span>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                Switch
              </span>
            </button>
            <button
              id="mobile-edit-profile-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditor();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"
            >
              <Edit3 className="w-4 h-4 text-indigo-500" />
              Customize Portfolio & Resume
            </button>
            <button
              id="mobile-download-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                generateResumePDF(profile);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold bg-indigo-600 text-white shadow-xs"
            >
              <FileDown className="w-4 h-4" />
              Download PDF Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
