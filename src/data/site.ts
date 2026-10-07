export const site = {
	name: 'Jazib Bashir',
	title: 'Senior Full-Stack & Product Engineer',
	url: 'https://jazibbashir.com',
	description:
		'Portfolio of Jazib Bashir — senior full-stack and product engineer. Selected work, technical expertise, and professional background.',
	cvUrl: '#',
	email: '#contact',
	year: new Date().getFullYear(),
	heroPill:
		'SENIOR FULL-STACK ENGINEER • PRODUCT ENGINEER • 10+ YEARS EXPERIENCE',
	heroEyebrow: 'PROFESSIONAL PORTFOLIO & DIGITAL CV',
	heroSubtitle: 'Senior Full-Stack Engineer • Product Engineer',
	heroSummary:
		'Senior full-stack engineer with 10+ years of experience building and evolving SaaS, healthcare and enterprise software products across frontend, backend and product engineering.',
	heroQuote:
		'I build and improve complex software products — from frontend architecture and user workflows to APIs, integrations, and resilient production systems.',
	linkedInUrl: 'https://linkedin.com',
	upworkUrl: 'https://upwork.com',
	emailAddress: 'contact@jazib.dev',
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
