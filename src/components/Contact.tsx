import React, { useState, useEffect } from 'react';
import { ASHLEY_INFO } from '../data/recruitmentData';
import { ContactPurpose } from '../types';
import { Mail, Clock, Shield, Send, CheckCircle2, Copy, Calendar, Phone, MapPin, Sparkles, AlertCircle } from 'lucide-react';

interface ContactProps {
  selectedPurpose: ContactPurpose;
  onSelectPurpose: (purpose: ContactPurpose) => void;
  prefilledMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({
  selectedPurpose,
  onSelectPurpose,
  prefilledMessage = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    urgency: 'Next 30-60 Days',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>('Tuesday, 10:00 AM EST');
  const [scheduleSuccess, setScheduleSuccess] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage
      }));
    }
  }, [prefilledMessage]);

  const purposes: ContactPurpose[] = [
    'Hiring or Talent Acquisition',
    'Recruitment Partnership',
    'Candidate Inquiry',
    'General Inquiries'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ASHLEY_INFO.email);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  const mailtoLink = `mailto:${ASHLEY_INFO.email}?subject=${encodeURIComponent(
    `[${selectedPurpose}] Inquiring with Ashley Morris`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTimeline: ${formData.urgency}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8F6F1] border-b border-[#E4DFD5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#C6A15B]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B]">Direct Dialogue</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#10233F]">
            Let&apos;s Discuss Your Talent Needs &amp; Strategic Goals
          </h2>
          <p className="mt-3 text-[#697586] text-base leading-relaxed">
            Whether you are an executive leader planning a critical search or a seasoned professional exploring future opportunities, I welcome an introductory conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Value Cards (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-white p-7 rounded-lg border border-[#E4DFD5] space-y-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6A15B]">Direct Channel</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={ASHLEY_INFO.headshot}
                  alt="Ashley Morris"
                  className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#C6A15B] shadow-sm shrink-0"
                />
                <div>
                  <p className="font-serif text-lg font-semibold text-[#10233F]">Ashley Morris</p>
                  <p className="text-xs text-[#697586]">Executive Recruiter &amp; Strategic Talent Advisor</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#E4DFD5]/70 text-xs">
                <div className="flex items-center justify-between p-3 bg-[#F8F6F1] rounded border border-[#E4DFD5]/80">
                  <div className="flex items-center gap-2 text-[#10233F] font-medium truncate mr-2">
                    <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span className="truncate">{ASHLEY_INFO.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-xs text-[#10233F] hover:text-[#C6A15B] rounded border border-[#E4DFD5] hover:bg-white transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copyFeedback ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2.5 text-[#697586] px-1">
                  <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>{ASHLEY_INFO.location}</span>
                </div>

                <div className="flex items-center gap-2.5 text-[#697586] px-1">
                  <Clock className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Prompt Response SLA: Within 24 Business Hours</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowScheduleModal(true)}
                  className="w-full py-2.5 bg-[#10233F] hover:bg-[#C6A15B] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Schedule 20-Min Discovery Call</span>
                </button>
              </div>
            </div>

            {/* Confidentiality & Ethics Card */}
            <div className="bg-[#10233F] text-white p-7 rounded-lg border border-[#C6A15B]/30 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-[#C6A15B]">
                <Shield className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Confidentiality Guarantee</span>
              </div>
              <p className="text-xs text-[#F1EFEA]/80 leading-relaxed">
                All communications, search mandates, and candidate resumes are safeguarded by strict confidentiality protocols in accordance with the Association of Executive Search Consultants (AESC) Code of Ethics.
              </p>
              <div className="pt-1 text-[11px] text-[#C6A15B] flex items-center gap-1.5 font-medium">
                <span>✓ Non-disclosure protected</span>
                <span>•</span>
                <span>✓ Zero unsolicited resume submissions</span>
              </div>
            </div>

          </div>

          {/* Interactive Form Panel (Right 7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-lg border border-[#E4DFD5] shadow-sm">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Purpose Selection Tabs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10233F] mb-2.5">
                    Select Nature of Inquiry
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {purposes.map((purpose) => (
                      <button
                        type="button"
                        key={purpose}
                        onClick={() => onSelectPurpose(purpose)}
                        className={`p-3 rounded text-left text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                          selectedPurpose === purpose
                            ? 'bg-[#10233F] text-white border-[#10233F] shadow-2xs'
                            : 'bg-[#F8F6F1] text-[#697586] border-[#E4DFD5] hover:border-[#C6A15B]'
                        }`}
                      >
                        <span>{purpose}</span>
                        {selectedPurpose === purpose && <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#10233F] mb-1.5">
                      Your Full Name <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#F8F6F1] border border-[#E4DFD5] rounded text-xs text-[#10233F] focus:outline-none focus:border-[#C6A15B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#10233F] mb-1.5">
                      Email Address <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-[#F8F6F1] border border-[#E4DFD5] rounded text-xs text-[#10233F] focus:outline-none focus:border-[#C6A15B] transition-colors"
                    />
                  </div>
                </div>

                {/* Organization & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#10233F] mb-1.5">
                      Organization / Current Role
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health / VP Operations"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full p-3 bg-[#F8F6F1] border border-[#E4DFD5] rounded text-xs text-[#10233F] focus:outline-none focus:border-[#C6A15B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#10233F] mb-1.5">
                      Timeline / Search Urgency
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full p-3 bg-[#F8F6F1] border border-[#E4DFD5] rounded text-xs text-[#10233F] focus:outline-none focus:border-[#C6A15B] transition-colors"
                    >
                      <option>Immediate (Kickoff in 1-2 Weeks)</option>
                      <option>Next 30-60 Days</option>
                      <option>Future Headcount Planning (Q1/Q2)</option>
                      <option>Confidential Executive Inquiries</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#10233F] mb-1.5">
                    Message / Role Scope Overview <span className="text-[#C6A15B]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please outline the key objectives, required competencies, or career questions you'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#F8F6F1] border border-[#E4DFD5] rounded text-xs text-[#10233F] focus:outline-none focus:border-[#C6A15B] transition-colors"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#10233F] hover:bg-[#C6A15B] text-white text-xs font-semibold uppercase tracking-widest rounded transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Ashley</span>
                  </button>

                  <a
                    href={mailtoLink}
                    className="w-full sm:w-auto text-center px-4 py-3.5 text-xs text-[#697586] hover:text-[#10233F] font-semibold uppercase tracking-wider underline cursor-pointer"
                  >
                    Open in Your Email Client &rarr;
                  </a>
                </div>

              </form>
            ) : (
              /* Success State */
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl text-[#10233F]">
                  Thank You, {formData.name || 'Partner'}
                </h3>

                <p className="text-sm text-[#697586] max-w-md mx-auto leading-relaxed">
                  Your inquiry regarding <strong className="text-[#10233F]">&ldquo;{selectedPurpose}&rdquo;</strong> has been prepared for Ashley Morris.
                </p>

                <div className="p-4 bg-[#F8F6F1] rounded border border-[#E4DFD5] max-w-md mx-auto text-left text-xs space-y-1.5">
                  <p className="font-semibold text-[#10233F]">Inquiry Summary:</p>
                  <p className="text-[#697586]"><strong className="text-[#10233F]">Email:</strong> {formData.email}</p>
                  {formData.organization && <p className="text-[#697586]"><strong className="text-[#10233F]">Organization:</strong> {formData.organization}</p>}
                  <p className="text-[#697586]"><strong className="text-[#10233F]">Timeline:</strong> {formData.urgency}</p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={mailtoLink}
                    className="px-6 py-3 bg-[#10233F] hover:bg-[#C6A15B] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Send via Email Client</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', phone: '', urgency: 'Next 30-60 Days', message: '' });
                    }}
                    className="px-5 py-3 border border-[#E4DFD5] text-[#10233F] hover:bg-[#F8F6F1] text-xs font-semibold uppercase tracking-wider rounded cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Discovery Call Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 bg-[#10233F]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 md:p-8 border border-[#E4DFD5] shadow-2xl relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6A15B]">Direct Calendar</span>
                <h4 className="font-serif text-2xl font-semibold text-[#10233F]">Book 20-Min Intro Call</h4>
              </div>
              <button
                onClick={() => { setShowScheduleModal(false); setScheduleSuccess(false); }}
                className="text-xs text-[#697586] hover:text-[#10233F] p-1 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            {!scheduleSuccess ? (
              <div className="space-y-4 text-xs">
                <p className="text-[#697586]">
                  Select an available preliminary slot for an intro consultation with Ashley Morris.
                </p>

                <div className="space-y-2">
                  {[
                    'Tuesday, Nov 03 • 10:00 AM EST',
                    'Tuesday, Nov 03 • 2:30 PM EST',
                    'Wednesday, Nov 04 • 11:00 AM EST',
                    'Thursday, Nov 05 • 3:00 PM EST'
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full p-3 rounded text-left border flex items-center justify-between transition-colors cursor-pointer ${
                        selectedSlot === slot
                          ? 'bg-[#10233F] text-white border-[#10233F]'
                          : 'bg-[#F8F6F1] text-[#10233F] border-[#E4DFD5] hover:border-[#C6A15B]'
                      }`}
                    >
                      <span className="font-medium">{slot}</span>
                      {selectedSlot === slot && <span className="text-[#C6A15B] font-bold">Selected ✓</span>}
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setScheduleSuccess(true)}
                    className="w-full py-3 bg-[#10233F] hover:bg-[#C6A15B] text-white font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer"
                  >
                    Confirm Consultation Slot
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h5 className="font-serif text-xl font-semibold text-[#10233F]">Slot Reserved</h5>
                <p className="text-xs text-[#697586] max-w-xs mx-auto">
                  Your intro consultation request for <strong className="text-[#10233F]">{selectedSlot}</strong> has been logged. Ashley will send a calendar invite to your email shortly.
                </p>
                <button
                  onClick={() => { setShowScheduleModal(false); setScheduleSuccess(false); }}
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
