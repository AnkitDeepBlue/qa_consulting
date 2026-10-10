// Single source of truth for profile content. Edit here, every page updates.

export const site = {
  brand: 'Ankit Tripathi QA Consulting',
  shortBrand: 'Ankit Tripathi',
  tagline: 'QA & Test Automation Consulting',
  title: 'Ankit Tripathi | QA Consultant & Test Automation Architect',
  description:
    'Independent QA consulting by Ankit Tripathi: test strategy, QA process setup, automation frameworks and AI-driven testing for startups and established organizations.',
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
  { value: '25+', label: 'QA engineers led across concurrent projects' },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  forWho: string;
  deliverables: string[];
  icon: string; // inline SVG path data (24x24, stroke)
};

export const services: Service[] = [
  {
    slug: 'qa-setup',
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
    slug: 'mentoring',
    title: 'Training & Mentoring',
    summary:
      'Upskill your QA team, from manual testers moving to automation (SQA to SDET) to leads learning test architecture and AI in testing.',
    forWho: 'QA teams and individual engineers',
    deliverables: [
      'Hands-on automation workshops (Python, Selenium, Playwright)',
      'SQA → SDET career transition coaching',
      'Code reviews and framework design sessions',
      'ISTQB-aligned fundamentals and test design techniques',
    ],
    icon: 'M3 8l9-4 9 4-9 4-9-4z M7 10v5c3 2 7 2 10 0v-5',
  },
];

export const process = [
  { step: '01', title: 'Discovery call', text: 'A free 30-minute call to understand your product, team and quality pain points.' },
  { step: '02', title: 'Assessment', text: 'I review your process, tooling and coverage and share clear findings.' },
  { step: '03', title: 'Roadmap', text: 'A prioritized plan with scope, timeline and measurable outcomes.' },
  { step: '04', title: 'Execution', text: 'I build, coach and hand over, so the quality engine keeps running without me.' },
];

export const experience = [
  {
    role: 'Consultant · Senior Lead SDET & Test Architect',
    company: 'GlobalLogic',
    period: 'Mar 2025 – Present',
    points: [
      'Own QA, test strategy and test architecture for an enterprise AI/ML SaaS platform',
      'Designed a hybrid UI + API framework with Python, Playwright, Selenium and Pytest-BDD',
      'Integrated agentic AI and self-healing tests into CI/CD, cutting regression time ~80%',
    ],
  },
  {
    role: 'Senior Lead Quality Engineer · SDET & Automation Lead',
    company: 'Persistent Systems',
    period: 'Dec 2022 – Jan 2025',
    points: [
      'Led QA teams across concurrent projects in regulated healthcare and genomics',
      'Built a DSL-driven framework that turns Jama test cases into executable pytest-bdd tests',
      'Introduced shift-left quality gates in Jenkins and GitHub Actions',
    ],
  },
  {
    role: 'Lead QA Analyst · Test Automation Lead',
    company: 'Iris Software',
    period: 'Feb 2022 – Dec 2022',
    points: [
      'Led QA for a compliance-driven clinical research platform (21 CFR Part 11)',
      'Built keyword-driven and BDD frameworks with Robot Framework, Selenium and Python',
    ],
  },
  {
    role: 'Associate Consultant · QA Lead',
    company: 'GlobalLogic',
    period: 'Apr 2021 – Jan 2022',
    points: [
      'Owned the QA stream for a health insurance platform, from POC to production automation',
      'Established QA best practices that measurably improved team productivity',
    ],
  },
  {
    role: 'Senior Quality Analyst · QA Automation Engineer',
    company: 'Newgen Software',
    period: 'Nov 2013 – Apr 2021',
    points: [
      'Delivered enterprise releases across banking, KYC, loan origination and automobile platforms',
      'Replaced unmanageable Postman collections with a Python API framework, adopted team-wide',
      'Trained campus-hired QA engineers in manual testing and Selenium Python',
    ],
  },
];

export const certifications = [
  'ISTQB® Certified Tester',
  'SAFe® POPM (Product Owner / Product Manager)',
  'PCAP™ Certified Associate in Python Programming',
  'AI Developer',
  'Agentic AI (LangChain)',
  'Subject Matter Expert, Test Automation Python (Level 4)',
  'Six Sigma White Belt',
  'Data Science',
  'Lambda Selenium Python 101',
  'Functionize AI Testing',
];

export const awards = [
  'Two-time Spotlight of the Month, GlobalLogic',
  'Bravo Team Award for Leadership, Persistent Systems',
  'Excellence Award and Pat on the Back recognitions',
];

export const domains = ['AI/ML & Forecasting', 'BFSI', 'Healthcare & Genomics', 'Big Data', 'Automobile', 'Networking'];

export const skills = {
  'Test Automation': ['Python', 'Playwright', 'Selenium', 'Robot Framework', 'Pytest', 'Pytest-BDD', 'POM', 'DSL frameworks'],
  'API & Backend': ['REST', 'SOAP', 'python-requests', 'Postman', 'SoapUI', 'Microservices', 'ETL', 'Allure'],
  'AI in Testing': ['Agentic AI', 'LLM test generation', 'Self-healing tests', 'MCP', 'Claude', 'OpenAI'],
  'CI/CD & Cloud': ['Jenkins', 'GitHub Actions', 'Azure DevOps', 'AWS', 'Airflow', 'Grafana'],
  'Process & Leadership': ['Test strategy', 'QA audits', 'SAFe / Scrum', 'Shift-left', 'STLC', 'Mentoring'],
};

export const education = [
  { title: 'B.Tech, Information Technology', place: 'Dr. A.P.J. Abdul Kalam Technical University', year: '2013' },
  { title: 'Post Graduate Diploma in Software Testing', place: 'QACampus', year: '2013' },
];

// Comments & reactions on blog/news posts (https://giscus.app).
// Fill repoId/categoryId from giscus.app after enabling Discussions on the repo.
export const giscus = {
  repo: 'AnkitDeepBlue/qa_consulting',
  repoId: 'R_kgDOVDZIyg',
  category: 'Announcements',
  categoryId: 'DIC_kwDOVDZIys4DHec1',
};
