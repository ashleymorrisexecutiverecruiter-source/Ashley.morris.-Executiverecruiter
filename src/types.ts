export type ContactPurpose = 
  | 'Hiring or Talent Acquisition'
  | 'Recruitment Partnership'
  | 'Candidate Inquiry'
  | 'General Inquiries';

export interface Article {
  id: string;
  title: string;
  category: 'Talent Acquisition' | 'Recruitment Strategy' | 'Candidate Experience' | 'Workforce Development' | 'Talent Management';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  roleType: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  type: 'client' | 'candidate';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  idealFor: string;
  inquiryType: ContactPurpose;
}
