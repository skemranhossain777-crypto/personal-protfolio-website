export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website' | 'scholar' | 'leetcode';
  url: string;
  label: string;
  username?: string;
}

export interface Metric {
  label: string;
  value: string;
  change?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'AI & Agents' | 'Cloud & Systems' | 'Open Source & Tools' | 'Mobile';
  technologies: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  role: string;
  date: string;
  challenges: string[];
  solution: string;
  keyFeatures: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend & APIs' | 'AI & LLM Systems' | 'Cloud & DevOps' | 'Databases & Infra' | 'Architecture & Tools';
  experienceYears: number;
  highlight?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Founding';
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  grade?: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface Presentation {
  id: string;
  title: string;
  event: string;
  type: 'Keynote' | 'Conference Talk' | 'Workshop' | 'Panel / Podcast';
  location: string;
  date: string;
  description: string;
  topics: string[];
  attendees?: string;
  slidesUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}

export interface UserProfile {
  name: string;
  title: string;
  headline: string;
  summary: string;
  bioParagraphs: string[];
  email: string;
  phone: string;
  location: string;
  timezone: string;
  status: string;
  openToWork: boolean;
  avatarUrl?: string;
  socials: SocialLink[];
  stats: Metric[];
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillItem[];
  projects: Project[];
  presentations?: Presentation[];
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  inquiryType: 'Full-time Opportunity' | 'Consulting / Contract' | 'Project Collaboration' | 'Mentorship / General';
  budget?: string;
  message: string;
}
