import React, { useState } from 'react';
import { ASHLEY_INFO } from '../data/recruitmentData';
import { ContactPurpose } from '../types';
import { ArrowRight, Check, Award, Compass, HeartHandshake, Target, Sparkles, BookOpen } from 'lucide-react';

interface AboutProps {
  onSelectPurpose: (purpose: ContactPurpose) => void;
  onOpenOnePager: () => void;
}

export const About: React.FC<AboutProps> = ({ onSelectPurpose, onOpenOnePager }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'standards'>('overview');

  const scrollToContact = (purpose: ContactPurpose = 'Recruitment Partnership') => {
    onSelectPurpose(purpose);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">About Ashley Morris</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#10233F] leading-snug">
            Recruitment Is About People. Success Is About the Right Connections.
          </h2>
          <p className="mt-3 text-[#697586] text-base md:text-lg leading-relaxed">
            Thoughtful recruitment. Strategic talent solutions. Meaningful connections.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Philosophy Narrative (Left) */}
          <div className="lg:col-span-7 space-y-6 text-[#697586] leading-relaxed">
            <div className="p-6 bg-[#F8F6F1] rounded-lg border-l-4 border-[#C6A15B] shadow-2xs flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <img
                src={ASHLEY_INFO.headshot}
                alt="Ashley Morris"
                className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#C6A15B] shadow-sm shrink-0"
              />
              <div>
                <p className="text-lg md:text-xl text-[#10233F] font-serif italic font-normal">
                  &ldquo;My approach to recruitment is rooted in the belief that great hiring decisions begin with understanding people.&rdquo;
                </p>
                <p className="text-xs uppercase tracking-wider text-[#C6A15B] font-bold mt-2">
                  — Ashley Morris, Senior Recruiter
                </p>
              </div>
            </div>

            <p className="text-base text-[#10233F]/90">
              Beyond matching qualifications to job descriptions, I value the alignment between individual strengths, career aspirations, organizational needs, and long-term business goals.
            </p>

            <p>
              Through a people-centered and strategic approach to talent acquisition, I aim to support meaningful professional connections and help organizations think more intentionally about the talent they bring into their teams.
            </p>

            <p>
              Hiring in evolving industries requires a balance between rigorous competency mapping and mutual cultural resonance. I collaborate directly with executives, hiring managers, and candidates to create a recruitment lifecycle characterized by dignity, analytical rigor, and complete transparency.
            </p>

            {/* Interactive Tab Switcher for Pillars */}
            <div className="pt-4 border-t border-[#E4DFD5]/80">
              <div className="flex gap-2 border-b border-[#E4DFD5] pb-2 mb-4">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer ${
                    activeTab === 'overview' ? 'bg-[#10233F] text-white' : 'text-[#697586] hover:text-[#10233F]'
                  }`}
                >
                  Core Pillars
                </button>
                <button
                  onClick={() => setActiveTab('methodology')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer ${
                    activeTab === 'methodology' ? 'bg-[#10233F] text-white' : 'text-[#697586] hover:text-[#10233F]'
                  }`}
                >
                  The Alignment Method
                </button>
                <button
                  onClick={() => setActiveTab('standards')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded uppercase tracking-wider transition-colors cursor-pointer ${
                    activeTab === 'standards' ? 'bg-[#10233F] text-white' : 'text-[#697586] hover:text-[#10233F]'
                  }`}
                >
                  Ethical Code
                </button>
              </div>

              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn">
                  <div className="p-3.5 bg-white border border-[#E4DFD5] rounded shadow-2xs">
                    <div className="flex items-center gap-2 text-[#10233F] font-semibold text-sm mb-1">
                      <Target className="w-4 h-4 text-[#C6A15B]" />
                      <span>Contextual Calibration</span>
                    </div>
                    <p className="text-xs text-[#697586]">
                      Aligning on team friction points, leadership dynamics, and business milestones before outreach begins.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white border border-[#E4DFD5] rounded shadow-2xs">
                    <div className="flex items-center gap-2 text-[#10233F] font-semibold text-sm mb-1">
                      <HeartHandshake className="w-4 h-4 text-[#C6A15B]" />
                      <span>Dignified Engagement</span>
                    </div>
                    <p className="text-xs text-[#697586]">
                      Consistent, human-first candidate communication with prompt updates and respectful feedback loops.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div className="p-4 bg-white border border-[#E4DFD5] rounded shadow-2xs space-y-2 animate-fadeIn text-xs text-[#697586]">
                  <p className="font-semibold text-[#10233F]">The 3-Dimensional Alignment Matrix:</p>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li><strong className="text-[#10233F]">Competency:</strong> Proven decision-making track record under comparable constraints.</li>
                    <li><strong className="text-[#10233F]">Trajectory:</strong> Does this opportunity genuinely unlock the candidate&apos;s next echelon of growth?</li>
                    <li><strong className="text-[#10233F]">Values Resilience:</strong> Will the leader thrive within the organization&apos;s true operational tempo?</li>
                  </ul>
                </div>
              )}

              {activeTab === 'standards' && (
                <div className="p-4 bg-white border border-[#E4DFD5] rounded shadow-2xs space-y-1.5 animate-fadeIn text-xs text-[#697586]">
                  <p className="font-semibold text-[#10233F] flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C6A15B]" />
                    AESC &amp; SPHR Professional Code:
                  </p>
                  <p>
                    Strict non-solicitation covenants, non-discriminatory blind sourcing protocols, and confidential candidate data protection.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToContact('Recruitment Partnership')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#10233F] text-white hover:bg-[#C6A15B] transition-colors text-xs font-semibold uppercase tracking-widest rounded shadow cursor-pointer"
              >
                <span>Connect With Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenOnePager}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#10233F]/30 hover:border-[#10233F] text-[#10233F] text-xs font-semibold uppercase tracking-widest rounded transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#C6A15B]" />
                <span>Executive Bio Summary</span>
              </button>
            </div>
          </div>

          {/* Structured Credentials & Practice Panel (Right) */}
          <div className="lg:col-span-5 bg-[#F8F6F1] p-8 rounded-lg border border-[#E4DFD5] space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[#E4DFD5]">
              <h3 className="font-serif text-xl text-[#10233F] font-semibold">
                Professional Credentials &amp; Practice
              </h3>
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
            </div>

            {/* Section 1: Professional Background */}
            <div className="space-y-1">
              <p className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> Professional Background
              </p>
              <p className="text-sm text-[#10233F] leading-relaxed">
                Senior Recruiter specializing in end-to-end recruitment lifecycle, strategic talent acquisition roadmaps, executive search execution, and stakeholder alignment.
              </p>
              <p className="text-xs text-[#697586]">
                Over 14 years advising growth-stage innovators and established enterprises on leadership capability and team scaling.
              </p>
            </div>

            {/* Section 2: Recruitment Philosophy */}
            <div className="space-y-1 pt-2 border-t border-[#E4DFD5]/80">
              <p className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Recruitment Philosophy
              </p>
              <p className="text-sm text-[#10233F] leading-relaxed">
                High-touch, high-context engagement. Prioritizing candidate long-term trajectory and organizational health over transactional placement volume.
              </p>
            </div>

            {/* Section 3: Industry Focus */}
            <div className="space-y-2 pt-2 border-t border-[#E4DFD5]/80">
              <p className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider">
                Core Industry Scope
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ASHLEY_INFO.industryFocus.map((focus, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-white border border-[#E4DFD5] text-xs text-[#10233F] rounded shadow-2xs font-medium">
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            {/* Section 4: Certifications & Formal Accreditations */}
            <div className="space-y-2 pt-2 border-t border-[#E4DFD5]/80">
              <p className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Certifications &amp; Accreditations
              </p>
              <div className="space-y-2">
                {ASHLEY_INFO.credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white/70 p-2 rounded border border-[#E4DFD5]/60 text-xs">
                    <Check className="w-3.5 h-3.5 text-[#C6A15B] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-[#10233F]">{cred.label}:</strong>{' '}
                      <span className="text-[#697586]">{cred.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
