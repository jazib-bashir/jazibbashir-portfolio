export const site = {
	name: 'Jazib Bashir',
	title: 'Senior Full-Stack & Product Engineer',
	url: 'https://jazibbashir.com',
	description:
		'Portfolio of Jazib Bashir — senior full-stack and product engineer. Selected work, technical expertise, and professional background.',
	cvUrl: '#',
	year: 2026,
	footerRole: 'Senior Full-Stack Engineer • Product Engineer',
	footerTagline: 'Building useful software. Solving hard problems.',
	footerStatus: 'PKT (UTC+5) • Systems Operational',
	footerCopyrightSuffix: 'All rights reserved.',
	heroPill: 'SENIOR FULL-STACK ENGINEER • PRODUCT ENGINEER • 10+ YEARS EXPERIENCE',
	heroEyebrow: 'PROFESSIONAL PORTFOLIO & DIGITAL CV',
	heroSubtitle: 'Senior Full-Stack Engineer • Product Engineer',
	heroSummary:
		'Senior software engineer with 10+ years of experience building and evolving SaaS, healthcare and enterprise software products across frontend, backend and product engineering.',
	heroQuote:
		'I build and improve complex software products — from frontend architecture and user workflows to APIs, integrations, and resilient production systems.',
	linkedInUrl: 'https://www.linkedin.com/in/jazib-bashir/',
	upworkUrl: 'https://upwork.com/freelancers/~01c2669607139a6fba',
	heroRuntime: {
		statusLine: 'PKT (UTC+5) • Senior Full-Stack & Product Engineer',
		role: 'Senior Full-Stack & Product Engineer',
		archFocus: 'Product Engineering',
		coreCoverage: 'Frontend / Backend / Product',
		sysExperience: '10+ Years',
		stackMastery: 'React / Next.js / JavaScript',
	},
	heroQuickFacts: [
		{
			value: '10+ Years',
			category: 'Software Engineering',
			description:
				'Hands-on experience building and evolving production software across SaaS, healthcare and enterprise products.',
			tag: 'Commercial Tenacity',
			accent: 'primary' as const,
		},
		{
			value: 'Full-Stack',
			category: 'Frontend + Backend',
			description:
				'Hands-on experience across frontend applications, APIs, integrations and backend systems.',
			tag: 'End-to-End Delivery',
			accent: 'secondary' as const,
		},
		{
			value: 'Product Eng',
			category: 'SaaS + Enterprise',
			description:
				'Builds, maintains and improves complex software products with real operational workflows.',
			tag: 'Product Engineering',
			accent: 'tertiary' as const,
		},
		{
			value: 'Tech Lead',
			category: 'Product Ownership',
			description:
				'Experienced in translating real-world product problems into structured engineering solutions.',
			tag: 'Outcome Oriented',
			accent: 'primary-container' as const,
		},
	],
} as const;

export type NavItem = {
	label: string;
	href: string;
};

export const navItems: NavItem[] = [
	{ label: 'Work', href: '#selected-projects' },
	{ label: 'Experience', href: '#experience-section' },
	{ label: 'Skills', href: '#skills-section' },
	{ label: 'About', href: '#ethos-section' },
	{ label: 'Contact', href: '#contact-section' },
];

export type FooterLink = {
	label: string;
	href: string;
	external?: boolean;
};

export const footerLinks: FooterLink[] = [
	{ label: 'Work', href: '#selected-projects' },
	{ label: 'Experience', href: '#experience-section' },
	{ label: 'Skills', href: '#skills-section' },
	{ label: 'About', href: '#ethos-section' },
	{ label: 'Download CV', href: '#' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jazib-bashir/', external: true },
	{ label: 'Upwork', href: 'https://upwork.com/freelancers/~01c2669607139a6fba', external: true },
];
