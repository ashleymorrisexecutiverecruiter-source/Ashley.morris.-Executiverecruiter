import React from 'react';
import { ASHLEY_INFO, SERVICES_DATA } from '../data/recruitmentData';
import { X, Printer, Mail, MapPin, Award, CheckCircle, ShieldCheck } from 'lucide-react';

interface ExecutiveOnePagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveOnePagerModal: React.FC<ExecutiveOnePagerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#10233F]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-10 border border-[#E4DFD5] shadow-2xl relative my-6">
        
        {/* Top Actions */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E4DFD5] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#10233F]">
              Executive Overview &amp; Practice Profile
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#10233F] border border-[#E4DFD5] hover:border-[#C6A15B] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#697586] hover:text-[#10233F] rounded border border-[#E4DFD5] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document Header */}
        <div className="space-y-4 pb-6 border-b border-[#E4DFD5]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={ASHLEY_INFO.headshot}
                alt="Ashley Morris"
                className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#C6A15B] shadow-sm shrink-0"
              />
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#10233F] font-bold">
                  Ashley Morris
                </h2>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
                  Senior Recruiter &amp; Strategic Talent Acquisition
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end justify-between gap-2">
              <img
                src={ASHLEY_INFO.logo}
                alt="Ashley Morris Logo"
                className="h-10 w-auto object-contain hidden sm:block"
              />
              <div className="text-xs text-[#697586] space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5 text-[#10233F] font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#C6A15B]" /> {ASHLEY_INFO.email}
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" /> {ASHLEY_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="py-6 border-b border-[#E4DFD5] space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">Executive Summary</span>
          <p className="text-sm text-[#10233F] leading-relaxed">
            {ASHLEY_INFO.philosophy}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="py-6 border-b border-[#E4DFD5]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-[#F8F6F1] rounded border border-[#E4DFD5]">
              <p className="font-serif text-xl font-bold text-[#10233F]">{ASHLEY_INFO.yearsExperience}</p>
              <p className="text-[10px] uppercase font-semibold text-[#697586]">Recruiting Practice</p>
            </div>
            <div className="p-3 bg-[#F8F6F1] rounded border border-[#E4DFD5]">
              <p className="font-serif text-xl font-bold text-[#10233F]">{ASHLEY_INFO.retentionRate}</p>
              <p className="text-[10px] uppercase font-semibold text-[#697586]">2-Year Retention</p>
            </div>
            <div className="p-3 bg-[#F8F6F1] rounded border border-[#E4DFD5]">
              <p className="font-serif text-xl font-bold text-[#10233F]">{ASHLEY_INFO.placementsCount}</p>
              <p className="text-[10px] uppercase font-semibold text-[#697586]">Executive Placements</p>
            </div>
            <div className="p-3 bg-[#F8F6F1] rounded border border-[#E4DFD5]">
              <p className="font-serif text-xl font-bold text-[#10233F]">42 Days</p>
              <p className="text-[10px] uppercase font-semibold text-[#697586]">Avg Search Duration</p>
            </div>
          </div>
        </div>

        {/* Core Practice Areas */}
        <div className="py-6 border-b border-[#E4DFD5] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">Areas of Practice &amp; Advisory</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {SERVICES_DATA.map((srv) => (
              <div key={srv.id} className="p-3 bg-[#F8F6F1] rounded border border-[#E4DFD5] space-y-1">
                <p className="font-semibold text-[#10233F]">{srv.title}</p>
                <p className="text-[#697586] text-[11px] leading-relaxed">{srv.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials & Education */}
        <div className="pt-6 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">Credentials &amp; Standards</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {ASHLEY_INFO.credentials.map((cred, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded bg-[#F8F6F1] border border-[#E4DFD5]">
                <CheckCircle className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                <span className="text-[#10233F]"><strong className="text-[#10233F]">{cred.label}:</strong> {cred.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#E4DFD5] flex items-center justify-between text-xs text-[#697586]">
          <span>© 2026 Ashley Morris. All rights reserved.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#10233F] text-white font-semibold uppercase tracking-wider rounded hover:bg-[#C6A15B] transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
