import React, { useState } from 'react';
import { ARTICLES_DATA, ASHLEY_INFO } from '../data/recruitmentData';
import { Article } from '../types';
import { Clock, Calendar, ArrowRight, X, Search, BookOpen, Check, Share2, Copy } from 'lucide-react';

export const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const categories = [
    'All Categories',
    'Talent Acquisition',
    'Recruitment Strategy',
    'Candidate Experience',
    'Workforce Development',
    'Talent Management'
  ];

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'All Categories' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="insights" className="py-20 md:py-28 bg-white border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C6A15B]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Recruitment Perspectives</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#10233F]">
              Perspectives on Talent, Hiring, and Professional Growth
            </h2>
          </div>
          <p className="text-xs text-[#697586] uppercase tracking-wider mt-4 md:mt-0 font-medium">
            Thought Leadership &amp; Sourcing Strategy
          </p>
        </div>

        {/* Category Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#E4DFD5]">
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#10233F] text-white shadow-2xs'
                    : 'bg-[#F8F6F1] text-[#10233F] border border-[#E4DFD5] hover:border-[#C6A15B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#697586] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search perspectives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#F8F6F1] border border-[#E4DFD5] rounded-full text-xs text-[#10233F] focus:outline-none focus:border-[#C6A15B]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-[#F8F6F1] rounded border border-[#E4DFD5] overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#C6A15B] transition-all group"
            >
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#697586]">
                  <span className="text-[#C6A15B] font-bold uppercase tracking-wider text-[11px]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Clock className="w-3 h-3 text-[#697586]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#10233F] group-hover:text-[#C6A15B] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs md:text-sm text-[#697586] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Key Takeaways preview pill */}
                <div className="bg-white/80 p-3 rounded border border-[#E4DFD5]/80 space-y-1 text-xs">
                  <span className="text-[10px] font-bold uppercase text-[#10233F] tracking-wider block">Key Insight:</span>
                  <p className="text-[#697586] text-[11px] line-clamp-2">
                    {article.keyTakeaways[0]}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-[#E4DFD5]/40 mt-4 flex items-center justify-between">
                <time className="text-[11px] text-[#697586] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </time>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-bold uppercase tracking-wider text-[#10233F] group-hover:text-[#C6A15B] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-[#F8F6F1] rounded border border-[#E4DFD5] mt-8">
            <BookOpen className="w-8 h-8 text-[#697586] mx-auto mb-2 opacity-50" />
            <p className="font-serif text-lg text-[#10233F]">No articles found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Categories'); }}
              className="mt-3 text-xs text-[#C6A15B] font-semibold uppercase tracking-wider underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Full Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-[#10233F]/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 border border-[#E4DFD5] shadow-2xl relative animate-scaleIn my-8">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 text-[#697586] hover:text-[#10233F] rounded-full border border-[#E4DFD5] hover:bg-[#F8F6F1] cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 mb-8 pr-8">
              <div className="flex items-center gap-3 text-xs text-[#697586]">
                <span className="px-3 py-1 bg-[#F8F6F1] text-[#C6A15B] font-bold uppercase tracking-wider rounded border border-[#E4DFD5]">
                  {activeArticle.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activeArticle.readTime}
                </span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-[#10233F] leading-tight">
                {activeArticle.title}
              </h2>
            </div>

            {/* Author Byline */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E4DFD5]">
              <div className="flex items-center gap-3">
                <img
                  src={ASHLEY_INFO.headshot}
                  alt="Ashley Morris"
                  className="w-11 h-11 rounded-full object-cover object-top border border-[#C6A15B] shadow-2xs shrink-0"
                />
                <div>
                  <p className="font-serif text-sm font-semibold text-[#10233F]">Ashley Morris</p>
                  <p className="text-[11px] text-[#697586]">Senior Recruiter &amp; Strategic Talent Advisor</p>
                </div>
              </div>

              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 text-xs text-[#10233F] border border-[#E4DFD5] hover:border-[#C6A15B] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#C6A15B]" />}
                <span>{copied ? 'Link Copied' : 'Share'}</span>
              </button>
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-[#F8F6F1] p-6 rounded-lg border border-[#E4DFD5] mb-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B] flex items-center gap-1.5">
                Strategic Takeaways
              </span>
              <ul className="space-y-2 text-xs md:text-sm text-[#10233F]">
                {activeArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C6A15B] font-bold mt-0.5">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Article Body */}
            <div className="space-y-5 text-sm md:text-base text-[#10233F]/90 leading-relaxed font-normal">
              {activeArticle.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer with Contact Action */}
            <div className="mt-10 pt-6 border-t border-[#E4DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#697586] text-center sm:text-left">
                Discussing how these recruitment principles apply to your team?
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#697586] hover:text-[#10233F] cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 bg-[#10233F] hover:bg-[#C6A15B] text-white text-xs font-semibold uppercase tracking-widest rounded transition-colors"
                >
                  Connect with Ashley
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
