import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/recruitmentData';
import { ContactPurpose, ServiceItem } from '../types';
import { Search, BarChart3, Users, TrendingUp, Network, FolderKanban, ArrowRight, Check, X } from 'lucide-react';

interface ExpertiseProps {
  onSelectPurpose: (purpose: ContactPurpose) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onSelectPurpose }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'talent-acquisition':
        return <Search className="w-6 h-6 text-[#C6A15B]" />;
      case 'recruitment-strategy':
        return <BarChart3 className="w-6 h-6 text-[#C6A15B]" />;
      case 'candidate-engagement':
        return <Users className="w-6 h-6 text-[#C6A15B]" />;
      case 'talent-management':
        return <TrendingUp className="w-6 h-6 text-[#C6A15B]" />;
      case 'workforce-development':
        return <Network className="w-6 h-6 text-[#C6A15B]" />;
      case 'recruitment-program-management':
        return <FolderKanban className="w-6 h-6 text-[#C6A15B]" />;
      default:
        return <Search className="w-6 h-6 text-[#C6A15B]" />;
    }
  };

  const handleInquiry = (service: ServiceItem) => {
    onSelectPurpose(service.inquiryType);
    setSelectedService(null);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="expertise" className="py-20 md:py-28 bg-[#F8F6F1] border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-[#C6A15B]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Areas of Expertise</span>
            <span className="w-4 h-[1.5px] bg-[#C6A15B]"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#10233F]">
            Talent Solutions Built Around People and Business Priorities
          </h2>
          <p className="mt-4 text-[#697586] text-sm md:text-base leading-relaxed">
            These focus areas represent core capabilities developed through professional recruitment practice, designed to adapt flexibly to individual organizational needs.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded border border-[#E4DFD5] hover:border-[#C6A15B] transition-all duration-300 gold-glow flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded bg-[#F8F6F1] border border-[#E4DFD5] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.id)}
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#10233F] mb-3 group-hover:text-[#C6A15B] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#697586] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#E4DFD5]/70">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">Core Deliverables:</span>
                  <ul className="space-y-1.5 text-xs text-[#10233F]">
                    {service.deliverables.slice(0, 2).map((deliv, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] mt-0.5 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4DFD5]/50 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#697586] hover:text-[#10233F] underline underline-offset-2 cursor-pointer"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleInquiry(service)}
                  className="text-xs font-bold uppercase tracking-wider text-[#C6A15B] hover:text-[#10233F] transition-colors inline-flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white border border-[#E4DFD5] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg font-semibold text-[#10233F]">
              Need a bespoke recruitment blueprint for your executive team?
            </h4>
            <p className="text-xs text-[#697586]">
              Ashley offers customized retained search, talent advisory, and interim recruitment leadership.
            </p>
          </div>
          <button
            onClick={() => handleInquiry(SERVICES_DATA[1])}
            className="px-6 py-3 bg-[#10233F] hover:bg-[#C6A15B] text-white text-xs font-semibold uppercase tracking-widest rounded transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Request Strategic Consultation
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-[#10233F]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-xl w-full p-6 md:p-8 border border-[#E4DFD5] shadow-2xl relative animate-scaleIn">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 text-[#697586] hover:text-[#10233F] rounded-full border border-[#E4DFD5] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-[#F8F6F1] border border-[#E4DFD5] flex items-center justify-center">
                {getServiceIcon(selectedService.id)}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">Practice Area</span>
                <h3 className="font-serif text-2xl font-semibold text-[#10233F]">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-[#697586] leading-relaxed mb-6">
              {selectedService.longDesc}
            </p>

            <div className="bg-[#F8F6F1] p-4 rounded border border-[#E4DFD5] mb-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10233F]">Key Scope &amp; Deliverables:</span>
              <ul className="space-y-2 text-xs text-[#10233F]">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C6A15B] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B] block mb-1">Ideal Engagement:</span>
              <p className="text-xs text-[#697586] italic">{selectedService.idealFor}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E4DFD5]">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#697586] hover:text-[#10233F] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => handleInquiry(selectedService)}
                className="px-6 py-2.5 bg-[#10233F] hover:bg-[#C6A15B] text-white text-xs font-semibold uppercase tracking-widest rounded transition-colors cursor-pointer"
              >
                Inquire About {selectedService.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
