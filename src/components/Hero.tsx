import React from 'react';
import { ASHLEY_INFO } from '../data/recruitmentData';
import { ContactPurpose } from '../types';
import { ArrowRight, CheckCircle2, Shield, Award, Users, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onSelectPurpose: (purpose: ContactPurpose) => void;
  onOpenOnePager: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectPurpose, onOpenOnePager }) => {
  const scrollToContact = (purpose: ContactPurpose) => {
    onSelectPurpose(purpose);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExpertise = () => {
    const element = document.getElementById('expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-10 md:py-16 lg:py-20 overflow-hidden bg-[#F8F6F1] border-b border-[#E4DFD5]">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#10233F_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Official Executive Recruiting Banner Showcase */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-[#E4DFD5] shadow-xl hover:shadow-2xl transition-all duration-500 bg-white relative group">
          <img
            src={ASHLEY_INFO.banner}
            alt="Ashley Morris - Executive Recruiter - Talent Acquisition & Recruitment Strategy"
            className="w-full h-auto object-cover max-h-[380px] md:max-h-[460px] transition-transform duration-700 group-hover:scale-[1.006]"
          />
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C6A15B]/40 rounded-2xl transition-colors pointer-events-none"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-[#C6A15B]/40 rounded-full shadow-2xs">
              <img
                src={ASHLEY_INFO.logo}
                alt="AM Emblem"
                className="w-4 h-4 object-contain"
              />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">
                People Build Possibilities
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#10233F] leading-[1.15] tracking-tight">
              Connecting Great Talent With Meaningful Opportunities.
            </h1>

            <p className="text-lg md:text-xl font-serif text-[#C6A15B] italic font-medium">
              Strategic Talent Acquisition &amp; Recruitment Solutions.
            </p>

            <div className="space-y-4 text-[#697586] text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              <p>
                I&apos;m <strong className="text-[#10233F] font-semibold">Ashley Morris</strong>, a Senior Recruiter focused on talent acquisition, recruitment strategy, and building meaningful connections between people and opportunities.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#10233F]/80">
                I believe effective recruitment starts with understanding people, business priorities, and the qualities that help individuals and organizations succeed together. My approach combines thoughtful talent sourcing, strategic hiring, and relationship-driven recruitment.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToContact('Hiring or Talent Acquisition')}
                className="px-7 py-3.5 bg-[#10233F] hover:bg-[#C6A15B] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Connect With Ashley</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToExpertise}
                className="px-7 py-3.5 border border-[#10233F]/30 hover:border-[#10233F] text-[#10233F] hover:bg-white/60 font-semibold text-xs uppercase tracking-widest transition-colors duration-300 rounded cursor-pointer"
              >
                Explore My Expertise
              </button>

              <button
                onClick={onOpenOnePager}
                className="px-4 py-3.5 text-xs text-[#697586] hover:text-[#10233F] uppercase tracking-wider font-semibold underline underline-offset-4 cursor-pointer"
              >
                View Bio Summary &rarr;
              </button>
            </div>

            {/* Value Prop Pills */}
            <div className="pt-6 border-t border-[#E4DFD5]/90 flex flex-wrap gap-y-3 gap-x-6 text-xs text-[#697586] font-medium">
              <span className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded border border-[#E4DFD5]/60">
                <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
                <strong className="text-[#10233F]">Strategic Sourcing:</strong> Top 5% Passive Talent
              </span>
              <span className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded border border-[#E4DFD5]/60">
                <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
                <strong className="text-[#10233F]">Structured Alignment:</strong> Rigorous Competency Rubrics
              </span>
              <span className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded border border-[#E4DFD5]/60">
                <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
                <strong className="text-[#10233F]">Relationship-First:</strong> Dignified Candidate Care
              </span>
            </div>
          </div>

          {/* Visual Column (Right: Portrait & Verified Credentials Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Backing Geometry */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C6A15B]/40 rounded pointer-events-none transform -rotate-1"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#10233F]/5 rounded pointer-events-none"></div>

              <div className="relative bg-white p-4 rounded shadow-xl border border-[#E4DFD5]">
                
                {/* Portrait Container */}
                <div className="relative aspect-[4/5] rounded overflow-hidden flex flex-col justify-between p-5 border border-[#E4DFD5]/70 shadow-inner group">
                  
                  {/* Actual Professional Headshot Background Image */}
                  <img
                    src={ASHLEY_INFO.headshot}
                    alt="Ashley Morris - Senior Executive Recruiter"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlays for readability and luxury feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10233F]/90 via-[#10233F]/20 to-[#10233F]/40 pointer-events-none"></div>

                  {/* Top Bar inside card */}
                  <div className="flex justify-between items-start z-10 relative">
                    <div className="flex items-center gap-2">
                      <img
                        src={ASHLEY_INFO.logo}
                        alt="AM Monogram Emblem"
                        className="w-7 h-7 object-contain bg-white rounded p-0.5 border border-[#C6A15B]/50 shadow-xs"
                      />
                      <span className="px-2.5 py-1 bg-[#10233F]/95 backdrop-blur-xs text-[#C6A15B] text-[10px] uppercase font-bold tracking-wider rounded flex items-center gap-1.5 shadow-md border border-[#C6A15B]/30">
                        <Shield className="w-3 h-3 text-[#C6A15B]" />
                        Executive Search Standard
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#10233F]/80 backdrop-blur-xs border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] shadow-md">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Info & Stats Card */}
                  <div className="z-10 relative space-y-3">
                    <div className="bg-[#10233F]/85 backdrop-blur-md p-3.5 rounded border border-[#C6A15B]/30 shadow-xl">
                      <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                        <div>
                          <p className="font-serif text-base font-semibold text-white tracking-wide">Ashley Morris</p>
                          <p className="text-[11px] text-[#C6A15B] font-medium tracking-wide">
                            Senior Executive Recruiter &amp; Talent Advisor
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-[#C6A15B] text-[#10233F] flex items-center justify-center shadow" title="Verified Recruiter">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Stats grid */}
                      <div className="grid grid-cols-3 gap-1.5 text-center divide-x divide-white/10 pt-0.5">
                        <div>
                          <p className="text-xs font-serif font-bold text-[#C6A15B]">{ASHLEY_INFO.yearsExperience}</p>
                          <p className="text-[9px] uppercase tracking-wider text-white/70">Experience</p>
                        </div>
                        <div>
                          <p className="text-xs font-serif font-bold text-[#C6A15B]">{ASHLEY_INFO.retentionRate}</p>
                          <p className="text-[9px] uppercase tracking-wider text-white/70">2-Yr Retention</p>
                        </div>
                        <div>
                          <p className="text-xs font-serif font-bold text-[#C6A15B]">{ASHLEY_INFO.placementsCount}</p>
                          <p className="text-[9px] uppercase tracking-wider text-white/70">Placements</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Sub-card footer */}
                <div className="mt-3 pt-3 border-t border-[#E4DFD5]/80 flex items-center justify-between text-xs text-[#697586] px-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Award className="w-3.5 h-3.5 text-[#C6A15B]" /> SPHR &amp; AIRS Certified
                  </span>
                  <span className="text-[11px] font-semibold text-[#10233F]">
                    {ASHLEY_INFO.location}
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
