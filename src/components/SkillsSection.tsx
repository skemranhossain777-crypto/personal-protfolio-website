import { useState, useMemo } from 'react';
import { 
  Wrench, 
  Code2, 
  Server, 
  Cpu, 
  Cloud, 
  Database, 
  Layers, 
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Frontend',
    'Backend & APIs',
    'AI & LLM Systems',
    'Cloud & DevOps',
    'Databases & Infra',
    'Architecture & Tools'
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Code2 className="w-4 h-4 text-indigo-500" />;
      case 'Backend & APIs': return <Server className="w-4 h-4 text-emerald-500" />;
      case 'AI & LLM Systems': return <Cpu className="w-4 h-4 text-purple-500" />;
      case 'Cloud & DevOps': return <Cloud className="w-4 h-4 text-sky-500" />;
      case 'Databases & Infra': return <Database className="w-4 h-4 text-amber-500" />;
      case 'Architecture & Tools': return <Layers className="w-4 h-4 text-blue-500" />;
      default: return <Wrench className="w-4 h-4 text-slate-500" />;
    }
  };

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      const matchesSearch = searchQuery === '' || skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchQuery]);

  // Group filtered skills by category for matrix display
  const groupedSkills = useMemo(() => {
    const groups: { [key: string]: SkillItem[] } = {};
    filteredSkills.forEach((skill) => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });
    return groups;
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technical Ecosystem
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3">
            Comprehensive breakdown of my engineering competencies, tooling proficiency, and domain expertise.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-2xl border border-slate-300/60 dark:border-slate-700/60 overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Filter skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.entries(groupedSkills) as [string, SkillItem[]][]).map(([catName, catSkills]) => (
            <div
              key={catName}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-colors"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
                  {getCategoryIcon(catName)}
                  <span>{catName}</span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  {catSkills.length} skills
                </span>
              </div>

              {/* Skills list inside category */}
              <div className="space-y-3.5 pt-1">
                {catSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <span>{skill.name}</span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" title="Core Specialty" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                        <span>{skill.experienceYears}y exp</span>
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Highlights Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-indigo-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-indigo-600/20">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 mx-auto md:mx-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Continuous Learning & Architecture Evolution</h3>
              <p className="text-xs text-indigo-100 max-w-xl mt-0.5">
                Always evaluating emerging frameworks, AI models, zero-trust security patterns, and cloud-native scaling paradigms.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-semibold text-xs transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            Discuss a Technical Project &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
