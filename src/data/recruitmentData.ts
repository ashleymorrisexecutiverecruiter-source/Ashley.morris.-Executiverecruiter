import { Article, CaseStudy, Testimonial, ServiceItem } from '../types';

export const ASHLEY_INFO = {
  name: 'Ashley Morris',
  title: 'Senior Recruiter & Talent Acquisition',
  tagline: 'Strategic Talent Acquisition & Recruitment Solutions',
  headline: 'Connecting Great Talent With Meaningful Opportunities.',
  email: 'ashley.morris.executiverecruiter@gmail.com',
  headshot: '/assets/aistudio/Friendly_Professional_Office_Headshot_0dc36795.png',
  logo: '/assets/aistudio/Ashley_Morris_Gold_Monogram_Logo_9aea06f7.png',
  banner: '/assets/aistudio/Ashley_Morris_Executive_Recruiting_Banner_98b6ae7a.png',
  location: 'Nationwide Practice | Remote & Hybrid Search',
  yearsExperience: '14+',
  placementsCount: '340+',
  retentionRate: '94.2%',
  avgSearchDays: '42',
  philosophy: 'My approach to recruitment is rooted in the belief that great hiring decisions begin with understanding people. Beyond matching qualifications to job descriptions, I value the alignment between individual strengths, career aspirations, organizational needs, and long-term business goals.',
  bioSnippet: 'Through a people-centered and strategic approach to talent acquisition, I aim to support meaningful professional connections and help organizations think more intentionally about the talent they bring into their teams.',
  credentials: [
    { label: 'SPHR Certified', desc: 'Senior Professional in Human Resources (HRCI)' },
    { label: 'AIRS Certified', desc: 'Certified Diversity Recruiter (CDR) & Elite Sourcing' },
    { label: 'Organizational Psychology', desc: 'B.A., Human Behavior & Organizational Dynamics' },
    { label: 'AESC Standard', desc: 'Adherent to Association of Executive Search Consultants Code of Ethics' },
  ],
  industryFocus: [
    'Executive & C-Suite Leadership',
    'Strategic Sourcing & Market Intelligence',
    'HR & People Operations',
    'High-Growth Technology & SaaS',
    'Professional & Financial Services',
    'Workforce Planning & Organizational Design'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition',
    shortDesc: 'Supporting the structured process of identifying, attracting, evaluating, and engaging prospective professionals whose capabilities and values closely align with organizational requirements.',
    longDesc: 'Full lifecycle talent acquisition designed for high-impact roles. We build an active talent pipeline by identifying individuals with exceptional competency, proven track records, and complementary team culture fit.',
    deliverables: [
      'Comprehensive candidate profiling and competency matrices',
      'High-touch executive headhunting & direct outreach',
      'In-depth behavioral & values-based interviews',
      'Offer negotiation strategy and onboarding transition alignment'
    ],
    idealFor: 'Companies seeking critical leadership or specialized talent that cannot be found via passive job postings.',
    inquiryType: 'Hiring or Talent Acquisition'
  },
  {
    id: 'recruitment-strategy',
    title: 'Recruitment Strategy',
    shortDesc: 'Designing structured hiring processes, sourcing blueprints, and recruitment capacity plans that establish clear alignment between immediate hiring needs and broader business objectives.',
    longDesc: 'Transforming ad-hoc hiring into a predictable, repeatable competitive advantage. We audit existing recruitment funnels, establish key performance metrics, and build customized sourcing roadmaps.',
    deliverables: [
      'Recruitment capacity forecasting and headcount planning',
      'Employer brand positioning & market messaging audit',
      'Interview rubric creation to eliminate hiring bias',
      'ATS & recruitment workflow technology optimization'
    ],
    idealFor: 'Growth-stage companies and established enterprises looking to scale their talent function without compromising hiring rigor.',
    inquiryType: 'Recruitment Partnership'
  },
  {
    id: 'candidate-engagement',
    title: 'Candidate Engagement',
    shortDesc: 'Conducting nuanced market research, respectful direct outreach, and relational communication that provides candidates with a transparent and dignified hiring experience.',
    longDesc: 'Top-tier candidates judge your company by the caliber of their recruitment interactions. We craft bespoke, high-respect communications that honor candidate time and build long-term employer goodwill.',
    deliverables: [
      'Personalized outreach to top 5% passive industry leaders',
      'Transparent candidate journey dashboards with zero ghosting',
      'Mutual expectations alignment and role contextualization',
      'Long-term talent nurture pipelines for future openings'
    ],
    idealFor: 'Organizations experiencing high candidate drop-off, ghosting, or poor offer-acceptance rates.',
    inquiryType: 'Candidate Inquiry'
  },
  {
    id: 'talent-management',
    title: 'Talent Management',
    shortDesc: 'Focusing on the vital connection between initial onboarding, internal mobility, and employee retention, ensuring hired talent continues to thrive and deliver value over time.',
    longDesc: 'Recruitment does not end on signing day. We establish structured post-hire checkpoints, onboarding feedback loops, and career mobility frameworks that preserve high retention.',
    deliverables: [
      '30-60-90 day post-hire calibration and retention check-ins',
      'Competency progression and leadership succession mapping',
      'Internal mobility guidelines and talent redeployment',
      'Early turnover warning indicator diagnostics'
    ],
    idealFor: 'Organizations with high early-tenure attrition or companies expanding cross-functional leadership teams.',
    inquiryType: 'Recruitment Partnership'
  },
  {
    id: 'workforce-development',
    title: 'Workforce Development',
    shortDesc: 'Assisting leadership in assessing skills requirements, mapping future pipeline gaps, and developing hiring strategies that adapt seamlessly to evolving industry shifts.',
    longDesc: 'Future-proofing human capital by forecasting emerging skill requirements, evaluating workforce composition, and designing adaptive talent acquisition strategies for changing industry landscapes.',
    deliverables: [
      'Future capability and skill gap gap-closure roadmaps',
      'Market compensation benchmarking & competitive pay analysis',
      'Hybrid and distributed team architecture recommendations',
      'Upskilling and critical capability cross-training strategies'
    ],
    idealFor: 'Leadership teams navigating digital transformation, M&A integration, or geographic market expansion.',
    inquiryType: 'Hiring or Talent Acquisition'
  },
  {
    id: 'recruitment-program-management',
    title: 'Recruitment Program Management',
    shortDesc: 'Coordinating multi-stakeholder recruitment initiatives, interviewing calibration sessions, candidate workflow optimization, and talent tool implementations.',
    longDesc: 'End-to-end execution of complex hiring initiatives. We align hiring managers, interview panels, HR business partners, and leadership to execute hiring campaigns on schedule and on budget.',
    deliverables: [
      'Multi-role hiring sprint management & tracking',
      'Interviewer calibration workshops & score normalization',
      'Vendor management (agency rosters, background check platforms)',
      'Executive search reporting suites with real-time funnel visibility'
    ],
    idealFor: 'Firms launching new business units, opening regional offices, or executing high-volume executive searches.',
    inquiryType: 'Recruitment Partnership'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'fintech-vp',
    title: 'VP of Engineering for Rapidly Scaling Enterprise Fintech',
    roleType: 'Vice President of Engineering',
    industry: 'Financial Technology / Distributed Systems',
    challenge: 'A Series C fintech struggled for 7 months with open leadership, facing mismatched technical standards and cultural friction with legacy candidates.',
    solution: 'Calibrated role scorecard with CEO and CTO, mapped 140 top distributed systems leaders in North America, and initiated confidential relational outreach.',
    outcome: 'Presented 4 finalist candidates within 22 days. Secured top-choice candidate with 100% board approval.',
    metric: '38 Days to Offer • 2.5+ Years Current Tenure'
  },
  {
    id: 'healthtech-cpo',
    title: 'Chief People Officer for Nationwide Healthcare Network',
    roleType: 'Chief People Officer (C-Suite)',
    industry: 'Healthcare & Technology Services',
    challenge: 'Organization needed an empathetic yet operationally rigorous People leader to steer 1,200+ employees across 18 states through organizational restructuring.',
    solution: 'Designed a structured competency interview rubric focusing on change management resilience, employee relations ethics, and scaling People Ops.',
    outcome: 'Successfully placed an accomplished HR executive who revitalized company culture and lowered annualized voluntary turnover by 18%.',
    metric: '44 Days to Placement • 18% Turnover Reduction'
  },
  {
    id: 'saas-product-director',
    title: 'Director of Product Management Confidential Succession',
    roleType: 'Director of Product Management',
    industry: 'B2B Enterprise Software',
    challenge: 'A public SaaS company required a strictly confidential replacement for a key product vertical without signaling market uncertainty.',
    solution: 'Executed discrete passive headhunting under NDA, screening 85 high-caliber leaders while keeping company identity protected until final rounds.',
    outcome: 'Completed placement with zero market leakage. The new Director delivered 2 critical product releases ahead of projected Q3 roadmap.',
    metric: 'Strictly Confidential • Zero Leakage • 100% Onboarding Score'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Ashley transformed our leadership hiring from an exhausting guessing game into an exact science. She took the time to understand our board dynamics and brought us candidates who didn’t just look good on paper, but genuinely elevated our culture.',
    author: 'Marcus Vance',
    title: 'Chief Executive Officer',
    organization: 'Apex Solutions Group',
    type: 'client'
  },
  {
    id: 'test-2',
    quote: 'In my 20 years in executive leadership, Ashley is the only recruiter who truly listened to what mattered to my family and career trajectory. She was transparent about challenges, realistic about timing, and advocated for me every step of the way.',
    author: 'Elena Rostova',
    title: 'Placed Chief People Officer',
    organization: 'CareMatrix Healthcare',
    type: 'candidate'
  },
  {
    id: 'test-3',
    quote: 'Ashley’s understanding of workforce strategy and candidate psychology is rare in this industry. Her structured interview frameworks saved our hiring managers dozens of wasted hours and resulted in our highest-performing executive team to date.',
    author: 'David Sterling',
    title: 'Managing Director & Partner',
    organization: 'Vanguard Capital Partners',
    type: 'client'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'high-signal-sourcing',
    title: 'The Anatomy of High-Signal Executive Sourcing: Moving Beyond Keyword Matching',
    category: 'Recruitment Strategy',
    date: 'September 28, 2026',
    readTime: '6 min read',
    excerpt: 'Why algorithm-driven resume parsing often filters out the most adaptive leaders, and how human-centered market mapping produces lasting executive alignment.',
    keyTakeaways: [
      'Keywords signal familiarity; narrative trajectories signal judgment and decision resilience.',
      'Passive candidates respond to intellectual respect, context, and clear strategic challenges, not generic recruiting scripts.',
      'High-signal sourcing maps organizational friction points to candidate experience rather than static job titles.'
    ],
    content: [
      'In an era where automated recruitment tools can screen 10,000 resumes in seconds, organizations frequently find themselves facing an unexpected paradox: an abundance of applicants alongside a severe scarcity of genuine leadership talent.',
      'Keyword parsing treats hiring like a database query. But executive excellence is not an inventory problem; it is a problem of judgment, emotional maturity, and contextual leadership.',
      'When sourcing for pivotal roles, high-signal recruiters look for subtle narrative indicators: How did this candidate lead through a downturn? How did they manage resource reallocation when a key product stalled? Did their previous teams experience high retention or immediate attrition following their departure?',
      'By moving from passive keyword scraping to deep market mapping—identifying who peers turn to for guidance and who builds enduring team loyalty—we establish real human connections with candidates who never visit a public job board.'
    ]
  },
  {
    id: 'candidate-experience-multiplier',
    title: 'Candidate Experience as an Employer Brand Force Multiplier',
    category: 'Candidate Experience',
    date: 'August 14, 2026',
    readTime: '5 min read',
    excerpt: 'How the tone, speed, and transparency of your recruitment process directly dictate offer acceptance rates and long-term organizational reputation.',
    keyTakeaways: [
      'Every rejected candidate remains a potential customer, partner, or future referral source.',
      'Uncertainty breeds candidate disengagement; predictable cadences protect hiring momentum.',
      'Dignified feedback and transparent salary/scope discussions turn top candidates into lifelong brand ambassadors.'
    ],
    content: [
      'Every candidate who enters your hiring pipeline forms an enduring impression of your company culture. Long before they step foot into your office or join your Slack channels, your recruitment process is broadcasting your operational discipline—or lack thereof.',
      'Ghosting, rescheduled interviews, contradictory answers about team priorities, and drawn-out deliberation loops are not merely minor inconveniences; they are loud signals that a company suffers from organizational indecision.',
      'Conversely, when an organization treats candidates with dignity—providing comprehensive role context, setting explicit decision timelines, and communicating respectfully regardless of the outcome—it builds a durable competitive moat.',
      'Even candidates who do not receive an offer will frequently refer their highest-performing colleagues when they feel their time was respected.'
    ]
  },
  {
    id: 'resilient-workforce-architectures',
    title: 'Designing Resilient Workforce Architectures in Uncertain Economic Climates',
    category: 'Workforce Development',
    date: 'July 22, 2026',
    readTime: '7 min read',
    excerpt: 'Strategies for leadership teams to balance specialized talent acquisition with adaptable internal mobility models during periods of market transition.',
    keyTakeaways: [
      'Over-indexing on narrow specialization leaves teams vulnerable to rapid industry shifts.',
      'Strategic workforce planning bridges immediate operational gaps with 3-year organizational vision.',
      'Cross-functional talent development and internal mobility lower recruitment costs and elevate institutional knowledge.'
    ],
    content: [
      'Workforce planning during stable economic periods is largely a linear forecasting exercise. However, in fluctuating market conditions, rigidity becomes a primary liability.',
      'Resilient workforce architecture is built on three core pillars: clear competency mapping, modular team construction, and dynamic internal mobility.',
      'Instead of hiring solely for a hyper-specialized tool or current quarter deliverable, forward-thinking organizations evaluate candidates on their foundational problem-solving architecture, systemic thinking, and cognitive agility.',
      'When leadership pairs thoughtful external hiring for rare, high-leverage capabilities with systematic internal development for core competencies, they create an organization capable of pivoting without disruptive layoff-and-rehire cycles.'
    ]
  },
  {
    id: 'mitigating-bias-structured-interviews',
    title: 'Mitigating Unconscious Bias in Leadership Structured Interview Loops',
    category: 'Talent Acquisition',
    date: 'June 11, 2026',
    readTime: '5 min read',
    excerpt: 'A practical framework for replacing "gut feeling" hiring with calibrated, evidence-backed evaluation rubrics.',
    keyTakeaways: [
      'Cultural "fit" is often a masquerade for affinity bias and demographic homogenization.',
      'Scorecards must define specific observable behaviors rather than ambiguous personality traits.',
      'Independent interviewer score submissions prevent senior leader anchoring in debrief meetings.'
    ],
    content: [
      'The phrase "cultural fit" has historically been one of the most detrimental concepts in professional recruitment. Too often, it translates to: "Does this candidate resemble the people already in the room?"',
      'True organizational health thrives on cultural contribution—the unique perspectives, complementary strengths, and healthy challenges an individual introduces to an organization.',
      'To build equitable and rigorous hiring decisions, organizations must establish pre-calibrated scorecards with concrete behavioral anchors. What does exceptional conflict resolution actually look like in day-to-day operations? What constitutes evidence of strategic prioritization under pressure?',
      'By requiring interview panelists to submit structured ratings prior to the joint calibration debrief, teams prevent dominant voices from anchoring the consensus, ensuring candidate merit and track record drive the final hiring verdict.'
    ]
  },
  {
    id: 'retention-playbook-starts-during-search',
    title: 'The Retention Playbook: Why Strategic Onboarding Starts During the Search',
    category: 'Talent Management',
    date: 'May 19, 2026',
    readTime: '6 min read',
    excerpt: 'Why 40% of executive turnover stems from misaligned expectations established during the recruitment phase, and how to fix it.',
    keyTakeaways: [
      'Over-selling a role during recruitment is the fastest route to early executive resignation.',
      'Radical candor regarding organizational hurdles builds immediate trust and emotional buy-in.',
      'Structured 30-60-90 day milestone alignment should be co-authored with the candidate before offer acceptance.'
    ],
    content: [
      'The traditional divide between "talent acquisition" and "talent management" is a dangerous organizational myth. In reality, retention begins in the very first exploratory conversation.',
      'When companies paint an unrealistically pristine picture of their internal environment, newly placed leaders experience cognitive dissonance within their first ninety days. They realize the problems they were hired to solve are compounded by unstated obstacles.',
      'Great recruitment practices celebrate transparent friction. By openly sharing the systemic hurdles, legacy debt, or team misalignments that exist, you allow top performers to understand the true scope of the mission.',
      'High-impact leaders are not intimidated by difficult challenges; they are invigorated by them—provided they are trusted with the truth from day one.'
    ]
  }
];
