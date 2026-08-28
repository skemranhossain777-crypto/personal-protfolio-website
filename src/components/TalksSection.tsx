import { useState } from 'react';
import { 
  Presentation as PresentationIcon, 
  Video, 
  FileText, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  ExternalLink,
  Search,
  Mic,
  Radio,
  BookOpen
} from 'lucide-react';
import { Presentation } from '../types';

interface TalksSectionProps {
  presentations?: Presentation[];
}

export function TalksSection({ presentations = [] }: TalksSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = ['All', 'Keynote', 'Conference Talk', 'Workshop', 'Panel / Podcast'];

  const filteredTalks = presentations.filter(talk => {
    const matchesCategory = selectedFilter === 'All' || talk.type === selectedFilter;
    const matchesSearch = 
      talk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talk.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talk.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talk.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const getTypeBadgeStyle = (type: Presentation['type']) => {
    switch (type) {
      case 'Keynote':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'Conference Talk':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
      case 'Workshop':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Panel / Podcast':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const getTypeIcon = (type: Presentation['type']) => {
    switch (type) {
      case 'Keynote':
        return <Sparkles className="w-3.5 h-3.5" />;
      case 'Conference Talk':
        return <Mic className="w-3.5 h-3.5" />;
      case 'Workshop':
        return <BookOpen className="w-3.5 h-3.5" />;
      case 'Panel / Podcast':
        return <Radio className="w-3.5 h-3.5" />;
      default:
        return <PresentationIcon className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="talks" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <PresentationIcon className="w-3.5 h-3.5" />
              <span>Public Speaking & Conferences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Presentations & Tech Talks
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Keynotes, technical conferences, hands-on workshops, and panel discussions on systems architecture, distributed computing, and generative AI.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="bg-white dark:bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">
                  {presentations.length}+
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Recent Talks</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white leading-none">
                  20k+
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Total Audience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls: Search and Categories */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {filterOptions.map(option => (
              <button
                key={option}
                onClick={() => setSelectedFilter(option)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === option
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search talks, events, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Presentations Grid */}
        {filteredTalks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTalks.map(talk => (
              <div
                key={talk.id}
                id={`talk-${talk.id}`}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700/60 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${getTypeBadgeStyle(talk.type)}`}>
                        {getTypeIcon(talk.type)}
                        {talk.type}
                      </span>
                      {talk.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-white">
                          Featured
                        </span>
                      )}
                    </div>

                    {talk.attendees && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <Users className="w-3.5 h-3.5" />
                        {talk.attendees}
                      </span>
                    )}
                  </div>

                  {/* Title & Event */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {talk.title}
                  </h3>

                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1 mb-3">
                    {talk.event}
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {talk.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {talk.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {talk.description}
                  </p>

                  {/* Topic Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {talk.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    {talk.videoUrl && (
                      <a
                        href={talk.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Watch Recording</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                      </a>
                    )}

                    {talk.slidesUrl && (
                      <a
                        href={talk.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Slides</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-medium text-slate-400">
                    Recorded Session
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800">
            <PresentationIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No presentations match your search</h3>
            <p className="text-sm text-slate-500 mt-1">Try resetting the category filter or searching for different keywords.</p>
            <button
              onClick={() => {
                setSelectedFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold cursor-pointer hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Speaking Inquiries CTA Card */}
        <div className="mt-12 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white border border-indigo-800/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-semibold">
              <Mic className="w-3.5 h-3.5" />
              <span>Available for Keynotes & Workshops</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Looking for a speaker at your event or podcast?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              I deliver high-energy, actionable technical presentations on cloud scale, generative AI architecture, and engineering management.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl bg-white text-indigo-900 hover:bg-indigo-50 text-sm font-bold shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            Invite to Speak
          </a>
        </div>

      </div>
    </section>
  );
}
