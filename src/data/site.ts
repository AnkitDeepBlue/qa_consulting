// Single source of truth for profile content. Edit here, every page updates.

export const site = {
  brand: 'Ankit Tripathi QA Consulting',
  shortBrand: 'Ankit Tripathi',
  tagline: 'QA & Test Automation Consulting',
  title: 'Ankit Tripathi | QA Consultant & AI-Driven Test Automation Architect',
  description:
    'Independent QA consulting by Ankit Tripathi: test strategy, QA process setup, AI-driven test automation, QA audits, team training and interview prep for startups, enterprises and QA professionals.',
  email: 'ankit.deepblue@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ankit-tripathi-b8b63a103',
  pypi: 'https://pypi.org/project/selenium-python-ai-agent/',
  location: 'Noida, India · Working with teams worldwide (remote)',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/news', label: 'QA News' },
  { href: '/courses', label: 'Courses' },
];

export const stats = [
  { value: '12+', label: 'Years in QA & Quality Engineering' },
  { value: '~90%', label: 'Manual testing effort reduced with AI-driven automation' },
  { value: '~80%', label: 'Faster regression cycles with self-healing tests in CI/CD' },
  { value: '100+', label: 'QA engineers led and mentored' },
];

// Employers. Text only (no logos) to avoid implying endorsement.
export const companies = [
  { name: 'GlobalLogic', note: 'A Hitachi Group Company' },
  { name: 'LTIMindtree', note: 'Larsen & Toubro Group' },
  { name: 'Persistent Systems', note: 'Global IT services' },
  { name: 'Iris Software', note: 'Enterprise IT services' },
  { name: 'Newgen Software', note: 'Enterprise BFSI products' },
];

export const innovations = [
  {
    kind: 'Open Source · PyPI',
    title: 'selenium-python-ai-agent',
    text: 'An open-source multi-agent LLM framework that plans, generates and self-heals Selenium Python test suites. It writes maintainable Page Object Model code (pytest / pytest-bdd), runs from CLI or CI, and verifies every self-heal against the live DOM.',
    tags: ['Planner', 'Generator', 'Healer', 'Claude & OpenAI', 'CI-ready'],
    code: 'pip install selenium-python-ai-agent',
    link: { href: 'https://pypi.org/project/selenium-python-ai-agent/', label: 'View on PyPI' } as { href: string; label: string } | null,
    source: 'https://github.com/AnkitDeepBlue/selenium-python-ai-agent' as string | null,
  },
  {
    kind: 'Peer-reviewed · Quest Journals',
    title: 'Reverse Build Testing',
    text: 'A peer-reviewed white paper I authored and published in Quest Journals, contributing original research on software testing practice to the wider QA community.',
    tags: ['White paper', 'Research', 'Published'],
    code: '',
    link: null as { href: string; label: string } | null,
    source: null as string | null,
  },
];

export type Service = {
  slug: string;
  audience: 'organizations' | 'professionals';
  title: string;
  summary: string;
  forWho: string;
  deliverables: string[];
  icon: string; // inline SVG path data (24x24, stroke)
  href?: string; // optional dedicated page
};

export const services: Service[] = [
  {
    slug: 'qa-setup',
    audience: 'organizations',
    title: 'QA Setup from Scratch',
    summary:
      'Building a product with no formal QA? I set up the whole quality function: strategy, process, tooling and the first automation suite, so your team ships with confidence from day one.',
    forWho: 'Startups and new product teams',
    deliverables: [
      'Test strategy and QA process aligned to your release cadence',
      'Tooling stack selection (test management, automation, CI)',
      'Definition of Done, bug lifecycle and quality gates',
      'Hiring plan and onboarding guide for your first QA engineers',
    ],
    icon: 'M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z M9 12l2 2 4-4',
  },
  {
    slug: 'qa-audit',
    audience: 'organizations',
    title: 'QA Audit & Process Rebuild',
    summary:
      'Releases slipping, bugs escaping, flaky suites nobody trusts? I audit your current QA practice end to end and hand you a prioritized roadmap to fix it.',
    forWho: 'Established teams and organizations',
    deliverables: [
      'Audit of process, coverage, tooling and team skills',
      'Gap analysis with measurable quality metrics',
      'Prioritized 30/60/90-day improvement roadmap',
      'Hands-on support while the changes land',
    ],
    icon: 'M10 4a6 6 0 104.24 10.24L20 20 M10 7v3l2 2',
  },
  {
    slug: 'automation-framework',
    audience: 'organizations',
    title: 'Test Automation Framework',
    summary:
      'Enterprise-grade UI and API automation built from the ground up, POC to production, using the stack that fits your product.',
    forWho: 'Teams with manual-heavy regression',
    deliverables: [
      'Python · Playwright · Selenium · Robot Framework · Pytest-BDD',
      'REST/SOAP API and microservice test suites',
      'Page Object Model, data-driven and BDD design',
      'Reporting (Allure) and team handover documentation',
    ],
    icon: 'M8 9l-4 3 4 3 M16 9l4 3-4 3 M13 6l-2 12',
  },
  {
    slug: 'ai-testing',
    audience: 'organizations',
    title: 'AI-Driven & Agentic Testing',
    summary:
      'Layer LLM-powered test generation and self-healing automation on top of solid QA foundations, and test your own AI/ML features properly.',
    forWho: 'Teams ready to scale quality with AI',
    deliverables: [
      'LLM test generation and self-healing locators',
      'Agentic workflows (planner, generator, healer) and MCP integration',
      'Testing strategies for AI/ML products and model outputs',
      'Built on my open-source selenium-python-ai-agent framework',
    ],
    icon: 'M12 3v3 M12 18v3 M3 12h3 M18 12h3 M7 7h10v10H7z M10 10h4v4h-4z',
  },
  {
    slug: 'cicd-quality-gates',
    audience: 'organizations',
    title: 'CI/CD Quality Gates',
    summary:
      'Shift-left testing wired into your pipelines so defects are caught early and every release is backed by evidence.',
    forWho: 'Teams moving to continuous delivery',
    deliverables: [
      'Jenkins, GitHub Actions and Azure DevOps integration',
      'Smoke, nightly and regression pipeline design',
      'Flaky-test triage and failure root-cause workflows',
      'Quality dashboards and release readiness metrics',
    ],
    icon: 'M4 12h4l2-5 4 10 2-5h4',
  },
  {
    slug: 'team-training',
    audience: 'organizations',
    title: 'Team Training & Workshops',
    summary:
      'Hands-on workshops that upskill your QA team on the stack you actually use, from automation fundamentals to AI in testing.',
    forWho: 'QA and engineering teams',
    deliverables: [
      'Python, Selenium, Playwright and API automation workshops',
      'AI-assisted testing and agentic automation sessions',
      'ISTQB-aligned test design techniques',
      'Online or on-site, tailored to your codebase',
    ],
    icon: 'M3 8l9-4 9 4-9 4-9-4z M7 10v5c3 2 7 2 10 0v-5',
  },
  {
    slug: 'zero-to-hero-bootcamp',
    audience: 'professionals',
    title: 'QA Zero to Hero Bootcamp',
    summary:
      'SQA Concepts to Automation to AI Testing to Live Project: personal 1:1 coaching that takes you from testing fundamentals to a job-ready QA automation profile.',
    forWho: 'Freshers, professionals after a career gap and QA job seekers',
    deliverables: [
      'SQA concepts, test design and Agile',
      'Python, Selenium, Playwright and API automation',
      'AI testing: self-healing, agents and MCP',
      'Live project with your own framework on GitHub',
      'Resume, LinkedIn and mock interviews; material included',
    ],
    icon: 'M12 3l2.5 5 5.5.8-4 3.9 1 5.5L12 15.6 7 18.2l1-5.5-4-3.9 5.5-.8z',
    href: '/courses/qa-zero-to-hero-bootcamp',
  },
  {
    slug: 'mock-interviews',
    audience: 'professionals',
    title: 'Mock Interviews & Interview Prep',
    summary:
      'Preparing for a QA, SDET or Test Lead role? Practise with someone who has hired and led QA teams, and walk into the real interview confident.',
    forWho: 'QA engineers, SDETs and leads switching jobs',
    deliverables: [
      'Realistic mock rounds: manual QA, automation, SDET and lead',
      'Live coding practice: Python, Selenium, Playwright, API testing',
      'Detailed feedback with a personal improvement plan',
      'Resume and LinkedIn profile review',
      'Prep material included: question bank, coding exercises and checklists',
    ],
    icon: 'M4 5h16v11H8l-4 4V5z M8 9h8 M8 12h5',
  },
  {
    slug: 'career-mentoring',
    audience: 'professionals',
    title: 'Career Mentoring (SQA → SDET)',
    summary:
      'Moving from manual testing to automation, or stepping up to a lead role? Get a clear roadmap and regular 1:1 guidance from a practitioner.',
    forWho: 'Manual testers and growing SDETs',
    deliverables: [
      'Personalised learning roadmap for your target role',
      'Regular 1:1 sessions and progress check-ins',
      'Code and framework reviews on your own projects',
      'Guidance on certifications such as ISTQB',
    ],
    icon: 'M12 4a4 4 0 110 8 4 4 0 010-8z M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6',
  },
  {
    slug: 'online-courses',
    audience: 'professionals',
    title: 'Online Courses',
    summary:
      'Self-paced, hands-on courses on Selenium, Playwright and AI-driven test automation, built from 12+ years of real projects.',
    forWho: 'Anyone learning test automation',
    deliverables: [
      'Project-based lessons you can apply at work',
      'Beginner to advanced tracks',
      'Real framework code, not toy examples',
      'Early-bird access for waitlist members',
    ],
    icon: 'M4 5h16v11H4z M9 20h6 M12 16v4 M10 8.5l4 2-4 2z',
    href: '/courses',
  },
];

export const process = [
  { step: '01', title: 'Discovery call', text: 'A free 30-minute call to understand your product, team and quality pain points.' },
  { step: '02', title: 'Assessment', text: 'I review your process, tooling and coverage and share clear findings.' },
  { step: '03', title: 'Roadmap', text: 'A prioritized plan with scope, timeline and measurable outcomes.' },
  { step: '04', title: 'Execution', text: 'I build, coach and hand over, so the quality engine keeps running without me.' },
];

// Project impact stories for the portfolio (About page). Client names withheld.
export const highlights = [
  {
    domain: 'AI/ML SaaS',
    title: 'Enterprise AI/ML forecasting platform',
    text: 'Owned QA and test architecture end to end. Designed a hybrid UI + API framework (Python, Playwright, Selenium, Pytest-BDD) and wired agentic, self-healing tests into nightly and regression pipelines.',
    result: '~80% faster regression cycles',
  },
  {
    domain: 'Healthcare & Genomics',
    title: 'Regulated genomics programs',
    text: 'Led QA teams across concurrent projects. Built a DSL-driven framework that turns Jama test cases into executable pytest-bdd tests, plus shift-left quality gates in Jenkins and GitHub Actions.',
    result: 'Traceable, automated compliance testing',
  },
  {
    domain: 'Clinical Research',
    title: '21 CFR Part 11 clinical platform',
    text: 'Owned the full STLC for a compliance-driven platform. Built keyword-driven and BDD frameworks with Robot Framework and Python, with API validations aligned to regulatory standards.',
    result: 'Continuous testing in a regulated domain',
  },
  {
    domain: 'BFSI',
    title: 'Banking, KYC & loan origination products',
    text: 'Replaced hard-to-manage Postman collections across interdependent microservices with a Python API framework, Allure reporting and CI/CD integration.',
    result: 'Adopted as the team-wide API standard',
  },
];

export const experience = [
  {
    role: 'Consultant · Senior Lead SDET & Test Architect',
    company: 'GlobalLogic (Hitachi Group)',
    period: 'Mar 2025 – Present',
    points: [
      'Own QA, test strategy and test architecture for an enterprise AI/ML SaaS platform',
      'Integrated agentic AI and self-healing tests into CI/CD, cutting regression time ~80%',
    ],
  },
  {
    role: 'Senior Specialist · Software Engineer',
    company: 'LTIMindtree',
    period: 'Jan 2025 – Mar 2025',
    points: ['Built an automation tool for big data testing'],
  },
  {
    role: 'Senior Lead Quality Engineer · SDET & Automation Lead',
    company: 'Persistent Systems',
    period: 'Dec 2022 – Jan 2025',
    points: [
      'Led QA teams across concurrent projects in regulated healthcare and genomics',
      'Built a DSL-driven framework that turns Jama test cases into executable tests',
    ],
  },
  {
    role: 'Lead QA Analyst · Test Automation Lead',
    company: 'Iris Software',
    period: 'Feb 2022 – Dec 2022',
    points: ['Led QA for a compliance-driven clinical research platform (21 CFR Part 11)'],
  },
  {
    role: 'Associate Consultant · QA Lead',
    company: 'GlobalLogic (Hitachi Group)',
    period: 'Apr 2021 – Jan 2022',
    points: ['Owned the QA stream for a health insurance platform, POC to production automation'],
  },
  {
    role: 'Senior Quality Analyst · QA Automation Engineer',
    company: 'Newgen Software',
    period: 'Nov 2013 – Apr 2021',
    points: ['Delivered enterprise BFSI and automobile releases; trained campus-hired QA engineers'],
  },
];

export const certifications: { name: string; issuer: string; verify?: string }[] = [
  { name: 'ISTQB® Certified Tester', issuer: 'ISTQB' },
  { name: 'SAFe® 6 Product Owner / Product Manager', issuer: 'Scaled Agile' },
  { name: 'PCAP™ Certified Associate Python Programmer', issuer: 'Python Institute' },
  { name: 'GL Certified AI Professional: Agentic AI (LangChain)', issuer: 'GlobalLogic' },
  { name: 'GL Certified AI Professional: Data Science', issuer: 'GlobalLogic' },
  { name: 'GL Certified AI Associate: Developers', issuer: 'GlobalLogic' },
  { name: 'Test Automation (Python) Competency, Level 4', issuer: 'Persistent University' },
  { name: 'GenAI Foundation: GenAI-Assisted Coding', issuer: 'Persistent University' },
  { name: 'Ethics in the Age of Generative AI', issuer: 'LinkedIn Learning' },
  { name: 'Selenium Python 101', issuer: 'LambdaTest' },
  { name: 'Six Sigma White Belt', issuer: 'Council for Six Sigma Certification' },
  { name: 'Functionize AI Testing Certification', issuer: 'Functionize · Dec 2023', verify: 'https://certification.functionize.com/certificate/ODYxMzhfMTYzMjU1OA' },
];

export const awards = [
  'Two-time Spotlight of the Month, GlobalLogic (Jan & Jun 2026)',
  'Bravo Team Award for Leadership, Persistent Systems',
  'Excellence Award and Pat on the Back recognitions',
];

// Certificate & award gallery. `file` = image name in src/assets/credentials (without .jpg).
export const credentials = [
  { kind: 'award', file: 'globallogic-spotlight-jun-2026', title: 'Spotlight of the Month', issuer: 'GlobalLogic', date: 'Jun 2026' },
  { kind: 'award', file: 'globallogic-spotlight-jan-2026', title: 'Spotlight of the Month', issuer: 'GlobalLogic', date: 'Jan 2026' },
  { kind: 'award', file: 'persistent-bravo-award', title: 'Bravo Team Award for Leadership', issuer: 'Persistent Systems', date: '' },
  { kind: 'certification', file: 'gl-ai-203a-agentic-ai', title: 'Certified AI Professional: Agentic AI (LangChain)', issuer: 'GlobalLogic', date: 'Apr 2026' },
  { kind: 'certification', file: 'gl-ai-201-data-science', title: 'Certified AI Professional: Data Science', issuer: 'GlobalLogic', date: 'May 2026' },
  { kind: 'certification', file: 'gl-ai-101-ai-associate', title: 'Certified AI Associate: Developers', issuer: 'GlobalLogic', date: 'Apr 2026' },
  { kind: 'certification', file: 'pcap-python', title: 'PCAP™ Certified Associate Python Programmer', issuer: 'Python Institute', date: 'Jan 2025' },
  { kind: 'certification', file: 'safe-popm', title: 'Certified SAFe® 6 Product Owner / Product Manager', issuer: 'Scaled Agile', date: '' },
  { kind: 'certification', file: 'persistent-test-automation-python-l4', title: 'Test Automation (Python) Competency, Level 4', issuer: 'Persistent University', date: 'FY 2024' },
  { kind: 'certification', file: 'persistent-genai-foundation', title: 'GenAI Foundation: GenAI-Assisted Coding', issuer: 'Persistent University', date: 'FY 2023' },
  { kind: 'certification', file: 'linkedin-ethics-genai', title: 'Ethics in the Age of Generative AI', issuer: 'LinkedIn Learning', date: 'Nov 2025' },
  { kind: 'certification', file: 'six-sigma-white-belt', title: 'Six Sigma White Belt', issuer: 'Council for Six Sigma Certification', date: 'Jun 2024' },
  { kind: 'certification', file: 'lambdatest-selenium-python-101', title: 'Selenium Python 101', issuer: 'LambdaTest', date: 'Aug 2023' },
] as const;

export const domains = [
  { name: 'AI/ML & Forecasting', icon: 'M4 19h16 M5 15l4-4 3 3 6-7' },
  { name: 'BFSI', icon: 'M3 10l9-5 9 5 M5 10v8 M9.5 10v8 M14.5 10v8 M19 10v8 M3 20h18' },
  { name: 'Healthcare & Genomics', icon: 'M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z' },
  { name: 'Big Data', icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3' },
  { name: 'Automobile', icon: 'M5 16h14 M6 16l1.5-5h9L18 16 M7 16v2 M17 16v2' },
  { name: 'Networking', icon: 'M9 3h6v6H9z M12 9v4 M5 15v-2h14v2 M3 15h4v5H3z M10 15h4v5h-4z M17 15h4v5h-4z' },
];

export const skills = {
  'Test Automation': ['Python', 'Playwright', 'Selenium', 'Robot Framework', 'Pytest', 'Pytest-BDD', 'POM', 'DSL frameworks'],
  'AI in Testing': ['Agentic AI', 'LLM test generation', 'Self-healing tests', 'MCP', 'LangChain', 'Claude', 'OpenAI'],
  'API & Backend': ['REST', 'SOAP', 'python-requests', 'Postman', 'SoapUI', 'Microservices', 'ETL', 'Allure'],
  'CI/CD & Cloud': ['Jenkins', 'GitHub Actions', 'Azure DevOps', 'AWS', 'Airflow', 'Grafana'],
  'QA Leadership': ['Test strategy', 'QA audits', 'SAFe / Scrum', 'Shift-left', 'STLC', 'Stakeholder management', 'Mentoring'],
};

export const education = [
  { title: 'B.Tech, Information Technology', place: 'Dr. A.P.J. Abdul Kalam Technical University', year: '2013' },
  { title: 'Post Graduate Diploma in Software Testing', place: 'QACampus', year: '2013' },
];
