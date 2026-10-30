import React, { useState } from 'react';
import { ContactPurpose } from '../types';
import { ShieldCheck, MessageSquare, Briefcase, Compass, Lock, CheckCircle2, Send, ArrowRight } from 'lucide-react';

interface ForCandidatesProps {
  onSelectPurpose: (purpose: ContactPurpose) => void;
  onPrefillMessage?: (msg: string) => void;
}

export const ForCandidates: React.FC<ForCandidatesProps> = ({ onSelectPurpose, onPrefillMessage }) => {
  const [showPortalModal, setShowPortalModal] = useState(false);
  const [candidateFunction, setCandidateFunction] = useState('Executive Leadership / C-Suite');
  const [candidateWorkModel, setCandidateWorkModel] = useState('Remote or Hybrid');
  const [portalSubmitted, setPortalSubmitted] = useState(false);

  const handleOpenContact = () => {
    onSelectPurpose('Candidate Inquiry');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPortalSubmitted(true);
    if (onPrefillMessage) {
      onPrefillMessage(`Confidential Candidate Inquiry: Function - ${candidateFunction}, Preferred Model - ${candidateWorkModel}`);
    }
  };

  return (
    <section id="for-candidates" className="py-20 md:py-28 bg-[#F8F6F1] border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-[#C6A15B]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Career Progression</span>
            <span className="w-4 h-[1.5px] bg-[#C6A15B]"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#10233F]">
            Your Next Opportunity Should Align With Your Potential.
          </h2>
          <p className="mt-4 text-[#697586] text-base leading-relaxed">
            Finding the right opportunity involves more than submitting an application. It is about understanding your strengths, professional goals, and the environments in which you can contribute and grow.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white p-8 rounded border border-[#E4DFD5] space-y-4 hover:border-[#C6A15B] transition-all gold-glow">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl font-bold text-[#C6A15B]">01</span>
              <div className="w-9 h-9 rounded-full bg-[#F8F6F1] flex items-center justify-center text-[#10233F]">
                <MessageSquare className="w-4 h-4 text-[#C6A15B]" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#10233F]">Clear Communication</h3>
            <p className="text-sm text-[#697586] leading-relaxed">
              Transparent updates at every stage of consideration. No ambiguous timelines or unanswered inquiries. You are treated with the professional respect your experience commands.
            </p>
          </div>

          <div className="bg-white p-8 rounded border border-[#E4DFD5] space-y-4 hover:border-[#C6A15B] transition-all gold-glow">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl font-bold text-[#C6A15B]">02</span>
              <div className="w-9 h-9 rounded-full bg-[#F8F6F1] flex items-center justify-center text-[#10233F]">
                <Briefcase className="w-4 h-4 text-[#C6A15B]" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#10233F]">Contextual Role Briefings</h3>
            <p className="text-sm text-[#697586] leading-relaxed">
              In-depth discussions about team priorities, cultural environment, unstated challenges, and genuine scope, far beyond simple boilerplate job bulletins.
            </p>
          </div>

          <div className="bg-white p-8 rounded border border-[#E4DFD5] space-y-4 hover:border-[#C6A15B] transition-all gold-glow">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl font-bold text-[#C6A15B]">03</span>
              <div className="w-9 h-9 rounded-full bg-[#F8F6F1] flex items-center justify-center text-[#10233F]">
                <Compass className="w-4 h-4 text-[#C6A15B]" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#10233F]">Career Alignment</h3>
            <p className="text-sm text-[#697586] leading-relaxed">
              Advocacy for roles that genuinely serve your long-term ambitions rather than brief transactional placements. Your trajectory and life goals are foundational to our dialogue.
            </p>
          </div>

        </div>

        {/* Candidate Connection Portal Banner */}
        <div className="bg-[#10233F] text-white rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-[#C6A15B]/30 relative overflow-hidden">
          {/* Subtle gold decorative glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none"></div>

          <span className="px-3 py-1 bg-[#C6A15B]/20 text-[#C6A15B] text-xs uppercase font-bold tracking-widest rounded-full inline-block border border-[#C6A15B]/30">
            Talent Community &amp; Confidential Registry
          </span>

          <h3 className="font-serif text-2xl md:text-3xl text-white">
            Exploring Professional Opportunities?
          </h3>
          
          <p className="text-sm md:text-base text-[#F1EFEA]/85 max-w-2xl mx-auto leading-relaxed">
            While current openings vary, I consistently welcome connections with driven professionals seeking strategic opportunities. Let&apos;s connect and establish a professional dialogue for future openings.
          </p>
          
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleOpenContact}
              className="px-8 py-3.5 bg-[#C6A15B] hover:bg-[#B38F46] text-[#10233F] font-semibold text-xs uppercase tracking-widest transition-colors rounded shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Connect About Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowPortalModal(true)}
              className="px-6 py-3.5 border border-white/30 hover:border-white text-white font-semibold text-xs uppercase tracking-widest transition-colors rounded cursor-pointer"
            >
              Confidential Profile Drop
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#F1EFEA]/70">
            <Lock className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Privacy Assurance: Candidate data and career details are treated with strict confidentiality. No details are ever shared without explicit prior consent.</span>
          </div>
        </div>

      </div>

      {/* Confidential Profile Drop Modal */}
      {showPortalModal && (
        <div className="fixed inset-0 z-50 bg-[#10233F]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 md:p-8 border border-[#E4DFD5] shadow-2xl relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">Confidential Inquiry</span>
                <h4 className="font-serif text-2xl font-semibold text-[#10233F]">Register Executive Interest</h4>
              </div>
              <button
                onClick={() => { setShowPortalModal(false); setPortalSubmitted(false); }}
                className="text-xs text-[#697586] hover:text-[#10233F] p-1 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            {!portalSubmitted ? (
              <form onSubmit={handlePortalSubmit} className="space-y-4 text-xs">
                <p className="text-[#697586] leading-relaxed">
                  Share your career parameters directly with Ashley Morris. We review executive profiles on an ongoing basis for confidential mandates.
                </p>

                <div>
                  <label className="block font-semibold text-[#10233F] mb-1">Primary Discipline / Function</label>
                  <select
                    value={candidateFunction}
                    onChange={(e) => setCandidateFunction(e.target.value)}
                    className="w-full p-2.5 bg-[#F8F6F1] border border-[#E4DFD5] rounded text-[#10233F] focus:outline-none focus:border-[#C6A15B]"
                  >
                    <option>Executive Leadership / C-Suite</option>
                    <option>People Operations &amp; HR Strategy</option>
                    <option>Engineering &amp; Technical Leadership</option>
                    <option>Product &amp; Design Management</option>
                    <option>Operations, Finance &amp; Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#10233F] mb-1">Preferred Work Model</label>
                  <select
                    value={candidateWorkModel}
                    onChange={(e) => setCandidateWorkModel(e.target.value)}
                    className="w-full p-2.5 bg-[#F8F6F1] border border-[#E4DFD5] rounded text-[#10233F] focus:outline-none focus:border-[#C6A15B]"
                  >
                    <option>Remote or Hybrid</option>
                    <option>Hybrid (Specific Metro)</option>
                    <option>Flexible / Relocation Considered</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#10233F] mb-1">LinkedIn Profile or Portfolio Link</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    required
                    className="w-full p-2.5 bg-[#F8F6F1] border border-[#E4DFD5] rounded text-[#10233F] focus:outline-none focus:border-[#C6A15B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#10233F] hover:bg-[#C6A15B] text-white font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Confidential Profile</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h5 className="font-serif text-xl font-semibold text-[#10233F]">Profile Received in Confidence</h5>
                <p className="text-xs text-[#697586] max-w-sm mx-auto leading-relaxed">
                  Thank you. Ashley will review your parameters against current confidential searches and reach out directly when an aligned opportunity emerges.
                </p>
                <button
                  onClick={() => { setShowPortalModal(false); setPortalSubmitted(false); }}
                  className="px-6 py-2 bg-[#10233F] text-white text-xs font-semibold uppercase tracking-wider rounded cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
