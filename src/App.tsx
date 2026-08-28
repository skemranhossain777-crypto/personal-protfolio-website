import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { initialProfileData } from './data/portfolioData';
import { UserProfile } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutBio } from './components/AboutBio';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsSection } from './components/SkillsSection';
import { TalksSection } from './components/TalksSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProfileEditorModal } from './components/ProfileEditorModal';

export default function App() {
  // Theme state: dark / light
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Profile data state with local storage persistence
  const [profile, setProfile] = useState<UserProfile>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_user_profile');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return initialProfileData;
        }
      }
    }
    return initialProfileData;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync dark mode class with html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  const handleSaveProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    localStorage.setItem('portfolio_user_profile', JSON.stringify(updatedProfile));
  };

  const handleResetProfile = () => {
    setProfile(initialProfileData);
    localStorage.removeItem('portfolio_user_profile');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      
      {/* Sticky Header Navbar */}
      <Navbar 
        profile={profile} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Introduction */}
        <Hero profile={profile} />

        {/* 2. Biography & Career Milestones */}
        <AboutBio profile={profile} />

        {/* 3. Projects Showcase & Case Studies */}
        <ProjectsShowcase projects={profile.projects} />

        {/* 4. Skills & Technical Matrix */}
        <SkillsSection skills={profile.skills} />

        {/* 5. Presentations & Tech Talks */}
        <TalksSection presentations={profile.presentations || []} />

        {/* 6. Downloadable PDF Resume & Interactive Viewer */}
        <ResumeSection 
          profile={profile} 
          onOpenEditor={() => setIsEditorOpen(true)}
        />

        {/* 7. Contact Form & Professional Profiles */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Floating Dark Mode Toggle Quick Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="floating-theme-toggle"
          onClick={() => setDarkMode(prev => !prev)}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-label="Toggle dark mode"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur-md hover:scale-105 active:scale-95 transition-all text-xs font-semibold cursor-pointer group"
        >
          {darkMode ? (
            <>
              <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span>Light</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform" />
              <span>Dark</span>
            </>
          )}
        </button>
      </div>

      {/* In-Place Profile Customization Modal */}
      <ProfileEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetProfile={handleResetProfile}
      />

    </div>
  );
}
