import React from 'react';
import { CASE_STUDIES_DATA, TESTIMONIALS_DATA, ASHLEY_INFO } from '../data/recruitmentData';
import { Award, CheckCircle2, Quote, ArrowUpRight, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section id="track-record" className="py-20 md:py-28 bg-white border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Proven Track Record</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#10233F]">
            Measurable Impact Across Critical Leadership Searches
          </h2>
          <p className="mt-3 text-[#697586] text-base leading-relaxed">
            Executive recruitment measured by long-term organizational stability, mutual cultural alignment, and executive tenure.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-[#F8F6F1] rounded-lg border border-[#E4DFD5] text-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-white mx-auto flex items-center justify-center text-[#C6A15B] mb-2 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="font-serif text-3xl md:text-4xl font-bold text-[#10233F]">{ASHLEY_INFO.retentionRate}</p>
            <p className="text-xs uppercase font-semibold tracking-wider text-[#C6A15B]">2-Year Retention</p>
            <p className="text-[11px] text-[#697586]">Well above industry average (68%)</p>
          </div>

          <div className="p-6 bg-[#F8F6F1] rounded-lg border border-[#E4DFD5] text-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-white mx-auto flex items-center justify-center text-[#C6A15B] mb-2 shadow-2xs">
              <Clock className="w-5 h-5" />
            </div>
            <p className="font-serif text-3xl md:text-4xl font-bold text-[#10233F]">42 Days</p>
            <p className="text-xs uppercase font-semibold tracking-wider text-[#C6A15B]">Average Search Cycle</p>
            <p className="text-[11px] text-[#697586]">From kickoff to accepted offer</p>
          </div>

          <div className="p-6 bg-[#F8F6F1] rounded-lg border border-[#E4DFD5] text-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-white mx-auto flex items-center justify-center text-[#C6A15B] mb-2 shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <p className="font-serif text-3xl md:text-4xl font-bold text-[#10233F]">340+</p>
            <p className="text-xs uppercase font-semibold tracking-wider text-[#C6A15B]">Leadership Placements</p>
            <p className="text-[11px] text-[#697586]">Across tech, healthcare, and finance</p>
          </div>

          <div className="p-6 bg-[#F8F6F1] rounded-lg border border-[#E4DFD5] text-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-white mx-auto flex items-center justify-center text-[#C6A15B] mb-2 shadow-2xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="font-serif text-3xl md:text-4xl font-bold text-[#10233F]">98%</p>
            <p className="text-xs uppercase font-semibold tracking-wider text-[#C6A15B]">Satisfaction Score</p>
            <p className="text-[11px] text-[#697586]">Candidate and client feedback</p>
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-8 mb-20">
          <h3 className="font-serif text-2xl text-[#10233F]">Representative Search Mandates</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES_DATA.map((cs) => (
              <div key={cs.id} className="bg-[#F8F6F1] p-7 rounded-lg border border-[#E4DFD5] flex flex-col justify-between space-y-5 hover:border-[#C6A15B] transition-colors shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6A15B] bg-white px-2.5 py-1 rounded border border-[#E4DFD5]">
                      {cs.industry}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-semibold text-[#10233F] leading-snug">
                    {cs.title}
                  </h4>

                  <div className="space-y-2 text-xs text-[#697586]">
                    <p><strong className="text-[#10233F]">Challenge:</strong> {cs.challenge}</p>
                    <p><strong className="text-[#10233F]">Strategy:</strong> {cs.solution}</p>
                    <p><strong className="text-[#10233F]">Outcome:</strong> {cs.outcome}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E4DFD5] flex items-center justify-between text-xs font-semibold text-[#10233F]">
                  <span className="text-[#C6A15B]">{cs.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-[#10233F] text-white rounded-xl p-8 md:p-12 border border-[#C6A15B]/30 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Client &amp; Candidate Endorsements</span>
            <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
              Words From Leaders We&apos;ve Partnered With
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="bg-white/5 p-6 rounded-lg border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-[#C6A15B] opacity-80" />
                  <p className="text-xs md:text-sm text-[#F1EFEA]/85 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <p className="font-serif text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-[11px] text-[#C6A15B]">{t.title}</p>
                  <p className="text-[10px] text-white/50">{t.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
