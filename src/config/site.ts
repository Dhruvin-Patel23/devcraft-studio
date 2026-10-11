export const siteConfig = {
  name: 'DevCraft Studio',
  description:
    'A 3-person full-stack development studio that designs and builds modern digital products.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: 'hello@devcraftstudio.com',
  location: 'India',
  
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Process', href: '/process' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  footerNav: {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Process', href: '/process' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Full-Stack Development', href: '/services#full-stack' },
      { label: 'SaaS Development', href: '/services#saas' },
      { label: 'Web Applications', href: '/services#web-apps' },
      { label: 'E-commerce', href: '/services#ecommerce' },
      { label: 'API Development', href: '/services#api' },
    ],
    resources: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },

  social: {
    github: '#', // Replace with actual URL
    linkedin: '#', // Replace with actual URL
    twitter: '#', // Replace with actual URL
  },
} as const;

export const projectCategories = [
  { value: 'WEB_APP', label: 'Web Application' },
  { value: 'SAAS', label: 'SaaS' },
  { value: 'ECOMMERCE', label: 'E-commerce' },
  { value: 'API', label: 'API' },
  { value: 'MOBILE', label: 'Mobile' },
  { value: 'AI', label: 'AI' },
  { value: 'OTHER', label: 'Other' },
] as const;

export const techCategories = [
  { value: 'FRONTEND', label: 'Frontend' },
  { value: 'BACKEND', label: 'Backend' },
  { value: 'DATABASE', label: 'Database' },
  { value: 'DEVOPS', label: 'DevOps' },
  { value: 'DESIGN', label: 'Design' },
  { value: 'AI', label: 'AI' },
  { value: 'OTHER', label: 'Other' },
] as const;

export const budgetOptions = [
  { value: 'UNDER_25K', label: 'Under ₹25,000' },
  { value: 'FROM_25K_TO_50K', label: '₹25,000 – ₹50,000' },
  { value: 'FROM_50K_TO_1L', label: '₹50,000 – ₹1,00,000' },
  { value: 'ABOVE_1L', label: '₹1,00,000+' },
  { value: 'NOT_SURE', label: 'Not sure yet' },
] as const;

export const projectTypeOptions = [
  { value: 'WEBSITE', label: 'Website' },
  { value: 'WEB_APP', label: 'Web Application' },
  { value: 'SAAS', label: 'SaaS Platform' },
  { value: 'ECOMMERCE', label: 'E-commerce' },
  { value: 'API', label: 'API Development' },
  { value: 'AI', label: 'AI Integration' },
  { value: 'OTHER', label: 'Other' },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, goals, target audience, and project requirements through in-depth discussions.',
    details: [
      'Stakeholder interviews',
      'Requirements gathering',
      'Market research',
      'Competitor analysis',
      'Technical feasibility assessment',
    ],
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'We create a detailed project roadmap, define the technical architecture, and establish clear milestones.',
    details: [
      'Project scope definition',
      'Technical architecture design',
      'Database schema planning',
      'API design',
      'Timeline & milestone planning',
    ],
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'We design intuitive, user-centered interfaces that align with your brand and provide excellent user experiences.',
    details: [
      'Wireframing',
      'Visual design',
      'Interactive prototyping',
      'Design system creation',
      'Responsive design planning',
    ],
  },
  {
    number: '04',
    title: 'Development',
    description:
      'We build your product using modern technologies, clean code practices, and iterative development with regular updates.',
    details: [
      'Frontend development',
      'Backend development',
      'Database implementation',
      'API integration',
      'Version control & CI/CD',
    ],
  },
  {
    number: '05',
    title: 'Testing',
    description:
      'We rigorously test every feature to ensure quality, performance, security, and cross-browser compatibility.',
    details: [
      'Unit testing',
      'Integration testing',
      'Performance testing',
      'Security testing',
      'Cross-browser/device testing',
    ],
  },
  {
    number: '06',
    title: 'Deployment',
    description:
      'We deploy your application to production with optimized configurations, monitoring, and zero-downtime strategies.',
    details: [
      'Production setup',
      'Domain & SSL configuration',
      'Performance optimization',
      'Monitoring setup',
      'Launch support',
    ],
  },
  {
    number: '07',
    title: 'Support',
    description:
      'We provide ongoing maintenance, monitoring, and support to keep your application running smoothly and up-to-date.',
    details: [
      'Bug fixes & patches',
      'Performance monitoring',
      'Security updates',
      'Feature enhancements',
      'Technical support',
    ],
  },
] as const;
