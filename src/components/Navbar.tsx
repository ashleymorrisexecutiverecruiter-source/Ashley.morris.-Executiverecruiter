import React, { useState } from 'react';
import { ContactPurpose } from '../types';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onSelectPurpose: (purpose: ContactPurpose) => void;
  onOpenOnePager: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectPurpose, onOpenOnePager }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnectClick = (purpose: ContactPurpose = 'Recruitment Partnership') => {
    onSelectPurpose(purpose);
    handleNavClick('contact');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#E4DFD5]/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo / Monogram */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-[#C6A15B] rounded p-1 cursor-pointer"
        >
          <img
            src="/assets/aistudio/Ashley_Morris_Gold_Monogram_Logo_9aea06f7.png"
            alt="Ashley Morris Executive Recruiter Logo"
            className="h-11 w-11 object-contain rounded group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider font-semibold text-[#10233F] leading-tight group-hover:text-[#C6A15B] transition-colors">
              ASHLEY MORRIS
            </span>
            <span className="text-[10px] tracking-widest text-[#697586] uppercase font-semibold">
              Executive Recruiter
            </span>
          </div>
        </button>

        {/* Desktop Nav - Streamlined */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-[#10233F]/85" aria-label="Main Navigation">
          <button onClick={() => handleNavClick('about')} className="hover:text-[#C6A15B] transition-colors py-2 cursor-pointer">
            About
          </button>
          <button onClick={() => handleNavClick('expertise')} className="hover:text-[#C6A15B] transition-colors py-2 cursor-pointer">
            Expertise
          </button>
          <button onClick={() => handleNavClick('track-record')} className="hover:text-[#C6A15B] transition-colors py-2 cursor-pointer">
            Track Record
          </button>
          <button onClick={() => handleNavClick('insights')} className="hover:text-[#C6A15B] transition-colors py-2 cursor-pointer">
            Insights
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenOnePager}
            className="text-xs font-semibold uppercase tracking-wider text-[#697586] hover:text-[#10233F] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            title="View Ashley's Executive One-Pager"
          >
            <FileText className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>One-Pager</span>
          </button>

          <button
            onClick={() => handleConnectClick('Recruitment Partnership')}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-[#10233F] text-white hover:bg-[#C6A15B] transition-all duration-300 rounded shadow-sm hover:shadow inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Let’s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenOnePager}
            className="p-2 text-xs font-semibold text-[#10233F] border border-[#E4DFD5] rounded flex items-center gap-1"
            aria-label="Executive Overview"
          >
            <FileText className="w-4 h-4 text-[#C6A15B]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-[#10233F] hover:text-[#C6A15B] focus:outline-none rounded border border-[#E4DFD5] bg-white/50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4DFD5] bg-[#F8F6F1] px-6 pt-4 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-sm font-semibold uppercase tracking-wider text-[#10233F]">
            <button onClick={() => handleNavClick('about')} className="text-left hover:text-[#C6A15B] py-1 cursor-pointer">
              About
            </button>
            <button onClick={() => handleNavClick('expertise')} className="text-left hover:text-[#C6A15B] py-1 cursor-pointer">
              Expertise
            </button>
            <button onClick={() => handleNavClick('track-record')} className="text-left hover:text-[#C6A15B] py-1 cursor-pointer">
              Track Record
            </button>
            <button onClick={() => handleNavClick('insights')} className="text-left hover:text-[#C6A15B] py-1 cursor-pointer">
              Insights
            </button>
          </nav>
          <div className="pt-3 border-t border-[#E4DFD5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOnePager();
              }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-widest text-[#10233F] border border-[#10233F]/30 hover:border-[#C6A15B] bg-white rounded flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Executive One-Pager Overview</span>
            </button>
            <button
              onClick={() => handleConnectClick('Recruitment Partnership')}
              className="block text-center w-full py-2.5 text-xs font-semibold uppercase tracking-widest bg-[#10233F] text-white rounded hover:bg-[#C6A15B] transition-colors"
            >
              Let’s Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
