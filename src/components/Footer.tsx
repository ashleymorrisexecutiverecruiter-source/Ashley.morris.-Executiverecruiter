import React from 'react';
import { ASHLEY_INFO } from '../data/recruitmentData';
import { ContactPurpose } from '../types';
import { ArrowUp, Mail, Shield, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onSelectPurpose: (purpose: ContactPurpose) => void;
  onOpenOnePager: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPurpose, onOpenOnePager }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnectClick = (purpose: ContactPurpose) => {
    onSelectPurpose(purpose);
    handleNavClick('contact');
  };

  return (
    <footer className="bg-[#10233F] text-white border-t border-[#C6A15B]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={ASHLEY_INFO.logo}
                alt="Ashley Morris Executive Recruiter Logo"
                className="w-11 h-11 object-contain rounded bg-white p-0.5 border border-[#C6A15B]"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider font-semibold text-white">ASHLEY MORRIS</span>
                <span className="text-[10px] tracking-widest text-[#C6A15B] uppercase font-medium">Executive Recruiter</span>
              </div>
            </div>

            <p className="text-xs text-[#F1EFEA]/75 leading-relaxed max-w-sm">
              Connecting exceptional talent with transformative opportunities. High-signal recruitment strategy, executive search, and human-centered workforce advisory.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C6A15B]">
              <Shield className="w-4 h-4" />
              <span>Adherent to AESC Standards &amp; Ethical Search Practices</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Navigation</p>
            <ul className="space-y-2 text-xs text-[#F1EFEA]/80">
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-[#C6A15B] transition-colors cursor-pointer">
                  About Ashley
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('expertise')} className="hover:text-[#C6A15B] transition-colors cursor-pointer">
                  Areas of Expertise
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('for-employers')} className="hover:text-[#C6A15B] transition-colors cursor-pointer">
                  For Employers &amp; Hiring Leaders
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('for-candidates')} className="hover:text-[#C6A15B] transition-colors cursor-pointer">
                  For Executive Candidates
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('track-record')} className="hover:text-[#C6A15B] transition-colors cursor-pointer">
                  Track Record &amp; Metrics
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('insights')} className="hover:text-[#C6A15B] transition-colors cursor-pointer">
                  Insights &amp; Perspectives
                </button>
              </li>
            </ul>
          </div>

          {/* Engagement Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Engage Directly</p>
            <p className="text-xs text-[#F1EFEA]/80 leading-relaxed">
              Available for retained search partnerships, interim leadership talent strategy, and confidential candidate conversations.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <a
                href={`mailto:${ASHLEY_INFO.email}`}
                className="flex items-center gap-2 text-[#C6A15B] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate">{ASHLEY_INFO.email}</span>
              </a>
              <p className="text-[11px] text-[#F1EFEA]/60">
                Response guarantee: Within 24 business hours
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOnePager}
                className="px-4 py-2 border border-white/20 hover:border-[#C6A15B] text-white hover:text-[#C6A15B] text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                View Executive One-Pager
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F1EFEA]/60">
          <p>© 2026 Ashley Morris. All rights reserved. Strategic Talent Acquisition.</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleConnectClick('Candidate Inquiry')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              Candidate Privacy
            </button>
            <button
              onClick={() => handleConnectClick('Recruitment Partnership')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-[#C6A15B] hover:text-[#10233F] rounded transition-colors text-white cursor-pointer"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
