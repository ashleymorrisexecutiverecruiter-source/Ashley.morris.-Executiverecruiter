import React, { useState } from 'react';
import { ContactPurpose } from '../types';
import { Check, ArrowRight, Sliders, Calendar, Sparkles } from 'lucide-react';

interface ForEmployersProps {
  onSelectPurpose: (purpose: ContactPurpose) => void;
  onPrefillMessage?: (msg: string) => void;
}

export const ForEmployers: React.FC<ForEmployersProps> = ({ onSelectPurpose, onPrefillMessage }) => {
  // Interactive search scoping calculator
  const [roleTier, setRoleTier] = useState<'csuite' | 'vp' | 'director' | 'specialized'>('csuite');
  const [timeline, setTimeline] = useState<'urgent' | 'standard' | 'pipeline'>('standard');

  const scrollToContact = (customMessage?: string) => {
    onSelectPurpose('Hiring or Talent Acquisition');
    if (customMessage && onPrefillMessage) {
      onPrefillMessage(customMessage);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTierDetails = () => {
    switch (roleTier) {
      case 'csuite':
        return {
          title: 'Executive & C-Suite Search',
          targetPool: 'Top 3-5% nationwide executive leaders',
          avgDuration: timeline === 'urgent' ? '30-40 Days' : '45-60 Days',
          focus: 'Discrete market mapping, board alignment, leadership resilience evaluation',
          candidateTouchpoint: '100% direct confidential headhunting by Ashley Morris'
        };
      case 'vp':
        return {
          title: 'Vice President & Head of Function',
          targetPool: 'Seasoned functional executives with high-growth track records',
          avgDuration: timeline === 'urgent' ? '25-35 Days' : '35-50 Days',
          focus: 'Strategic roadmapping capability, team building capacity, execution rigour',
          candidateTouchpoint: 'Relational outreach with contextual pitch briefings'
        };
      case 'director':
        return {
          title: 'Director & Senior Leadership',
          targetPool: 'High-performing operational directors and managers ready for expansion',
          avgDuration: timeline === 'urgent' ? '20-30 Days' : '30-45 Days',
          focus: 'Domain mastery, team velocity acceleration, cross-functional bridge-building',
          candidateTouchpoint: 'Targeted sourcing sprints with structured scoring rubrics'
        };
      case 'specialized':
        return {
          title: 'Specialized & Hard-to-Fill Roles',
          targetPool: 'Niche technical experts, principal contributors, specialized researchers',
          avgDuration: timeline === 'urgent' ? '25-35 Days' : '40-55 Days',
          focus: 'Deep technical competency verification, compensation benchmark calibration',
          candidateTouchpoint: 'Direct talent community relationship mapping'
        };
    }
  };

  const currentDetails = getTierDetails();

  return (
    <section id="for-employers" className="py-20 md:py-28 bg-white border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#C6A15B]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Partnership for Hiring Leaders</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[#10233F] leading-tight">
              Let&apos;s Find the Talent That Moves Your Organization Forward.
            </h2>
            
            <div className="space-y-4 text-[#697586] text-base leading-relaxed">
              <p>
                Every organization has unique hiring priorities. Understanding your business, team dynamics, and talent requirements is an important first step toward identifying the right people.
              </p>
              <p>
                I value clear communication, thoughtful candidate engagement, and a recruitment approach that considers both immediate hiring needs and broader organizational goals.
              </p>
            </div>

            {/* Checkpoints */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-2.5 rounded bg-[#F8F6F1]/80 border border-[#E4DFD5]/60">
                <span className="mt-0.5 text-[#C6A15B] font-bold">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-sm text-[#10233F] font-medium">
                  Clarify authentic role requirements and core success competencies
                </span>
              </div>
              <div className="flex items-start gap-3 p-2.5 rounded bg-[#F8F6F1]/80 border border-[#E4DFD5]/60">
                <span className="mt-0.5 text-[#C6A15B] font-bold">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-sm text-[#10233F] font-medium">
                  Engage passive talent through tailored, respectful representation
                </span>
              </div>
              <div className="flex items-start gap-3 p-2.5 rounded bg-[#F8F6F1]/80 border border-[#E4DFD5]/60">
                <span className="mt-0.5 text-[#C6A15B] font-bold">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-sm text-[#10233F] font-medium">
                  Streamline interview protocols to preserve momentum and candidate interest
                </span>
              </div>
              <div className="flex items-start gap-3 p-2.5 rounded bg-[#F8F6F1]/80 border border-[#E4DFD5]/60">
                <span className="mt-0.5 text-[#C6A15B] font-bold">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-sm text-[#10233F] font-medium">
                  Ensure organizational culture and strategic vision are articulated accurately
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => scrollToContact('Inquiry: Discussing hiring needs for our team.')}
                className="px-8 py-3.5 bg-[#10233F] hover:bg-[#C6A15B] text-white font-medium text-xs uppercase tracking-widest transition-colors rounded shadow-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Hiring Needs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Strategic Collaboration Framework */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#F8F6F1] p-8 md:p-10 rounded-lg border border-[#E4DFD5] space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#E4DFD5]">
                <h3 className="font-serif text-2xl text-[#10233F]">Strategic Collaboration Framework</h3>
                <span className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider">3-Phase Model</span>
              </div>
              <p className="text-sm text-[#697586] leading-relaxed">
                A collaborative approach ensures your brand is represented in the market with the highest degree of professionalism:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border border-[#E4DFD5] shadow-2xs hover:border-[#C6A15B] transition-colors">
                  <span className="text-xs font-bold uppercase text-[#C6A15B] tracking-wider block">Phase 01: Discovery &amp; Profile Calibration</span>
                  <p className="text-xs text-[#10233F] mt-1.5 leading-relaxed">
                    Deep-dive discovery with hiring leaders to define required capabilities, team culture, and business targets. We co-create the role scorecard before contacting candidates.
                  </p>
                </div>

                <div className="p-4 bg-white rounded border border-[#E4DFD5] shadow-2xs hover:border-[#C6A15B] transition-colors">
                  <span className="text-xs font-bold uppercase text-[#C6A15B] tracking-wider block">Phase 02: Market Mapping &amp; Thoughtful Outreach</span>
                  <p className="text-xs text-[#10233F] mt-1.5 leading-relaxed">
                    Targeted research into relevant talent pools with authentic, customized engagement. Ashley conducts direct headhunting to present candidates aligned in skill and ethos.
                  </p>
                </div>

                <div className="p-4 bg-white rounded border border-[#E4DFD5] shadow-2xs hover:border-[#C6A15B] transition-colors">
                  <span className="text-xs font-bold uppercase text-[#C6A15B] tracking-wider block">Phase 03: Structured Evaluation &amp; Alignment</span>
                  <p className="text-xs text-[#10233F] mt-1.5 leading-relaxed">
                    Rigorous, multi-faceted evaluations focused on long-term mutual alignment between both parties, offer navigation, and seamless 90-day onboarding checkpoints.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Search Scoping Assistant */}
            <div className="bg-white p-6 rounded-lg border border-[#C6A15B]/40 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10233F] flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#C6A15B]" />
                  Search Scope Simulator
                </span>
                <span className="text-[10px] text-[#C6A15B] font-semibold bg-[#C6A15B]/10 px-2 py-0.5 rounded">
                  Instant Alignment
                </span>
              </div>

              {/* Selector Tiers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {(['csuite', 'vp', 'director', 'specialized'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setRoleTier(tier)}
                    className={`py-2 px-2.5 rounded text-center border font-semibold transition-all cursor-pointer ${
                      roleTier === tier
                        ? 'bg-[#10233F] text-[#C6A15B] border-[#10233F]'
                        : 'bg-[#F8F6F1] text-[#697586] border-[#E4DFD5] hover:border-[#C6A15B]'
                    }`}
                  >
                    {tier === 'csuite' ? 'C-Suite' : tier === 'vp' ? 'VP Level' : tier === 'director' ? 'Director' : 'Niche Role'}
                  </button>
                ))}
              </div>

              {/* Scope Result Box */}
              <div className="p-3.5 bg-[#F8F6F1] rounded border border-[#E4DFD5] space-y-1.5 text-xs">
                <div className="flex justify-between font-semibold text-[#10233F]">
                  <span>{currentDetails.title}</span>
                  <span className="text-[#C6A15B]">{currentDetails.avgDuration}</span>
                </div>
                <p className="text-[#697586] text-[11px] leading-relaxed">
                  <strong className="text-[#10233F]">Focus:</strong> {currentDetails.focus}
                </p>
                <p className="text-[#697586] text-[11px] leading-relaxed">
                  <strong className="text-[#10233F]">Target Talent:</strong> {currentDetails.targetPool}
                </p>
              </div>

              <button
                onClick={() => scrollToContact(`Inquiry regarding ${currentDetails.title} with estimated timeline ${currentDetails.avgDuration}.`)}
                className="w-full py-2 bg-[#10233F] hover:bg-[#C6A15B] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Initiate This Search with Ashley</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
