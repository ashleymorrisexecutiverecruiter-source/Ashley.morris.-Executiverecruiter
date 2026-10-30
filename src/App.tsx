import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { ForEmployers } from './components/ForEmployers';
import { ForCandidates } from './components/ForCandidates';
import { CaseStudies } from './components/CaseStudies';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ExecutiveOnePagerModal } from './components/ExecutiveOnePagerModal';
import { ContactPurpose } from './types';

export default function App() {
  const [selectedPurpose, setSelectedPurpose] = useState<ContactPurpose>('Recruitment Partnership');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [isOnePagerOpen, setIsOnePagerOpen] = useState<boolean>(false);

  const handleSelectPurpose = (purpose: ContactPurpose) => {
    setSelectedPurpose(purpose);
  };

  const handlePrefillMessage = (msg: string) => {
    setPrefilledMessage(msg);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#10233F] selection:bg-[#C6A15B] selection:text-white">
      {/* Top Sticky Header */}
      <Navbar
        onSelectPurpose={handleSelectPurpose}
        onOpenOnePager={() => setIsOnePagerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onSelectPurpose={handleSelectPurpose}
          onOpenOnePager={() => setIsOnePagerOpen(true)}
        />
        
        <About
          onSelectPurpose={handleSelectPurpose}
          onOpenOnePager={() => setIsOnePagerOpen(true)}
        />

        <Expertise
          onSelectPurpose={handleSelectPurpose}
        />

        <ForEmployers
          onSelectPurpose={handleSelectPurpose}
          onPrefillMessage={handlePrefillMessage}
        />

        <ForCandidates
          onSelectPurpose={handleSelectPurpose}
          onPrefillMessage={handlePrefillMessage}
        />

        <CaseStudies />

        <Insights />

        <Contact
          selectedPurpose={selectedPurpose}
          onSelectPurpose={handleSelectPurpose}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectPurpose={handleSelectPurpose}
        onOpenOnePager={() => setIsOnePagerOpen(true)}
      />

      {/* Executive One-Pager Resume / Summary Modal */}
      <ExecutiveOnePagerModal
        isOpen={isOnePagerOpen}
        onClose={() => setIsOnePagerOpen(false)}
      />
    </div>
  );
}
