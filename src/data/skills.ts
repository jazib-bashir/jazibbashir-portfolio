import type { IconName } from '../types/icons';

export type SkillCategory = {
	id: string;
	title: string;
	icon: IconName;
	accent: 'primary' | 'secondary' | 'tertiary';
	description: string;
	technologies: string[];
};

export const skillsSection = {
	label: 'SYSTEM COMPETENCIES ———',
	title: 'Technical Expertise',
	description:
		'Full-stack engineering, product delivery, integrations and domain experience across SaaS, enterprise and healthcare software.',
} as const;

export const skillCategories: SkillCategory[] = [
	{
		id: 'frontend',
		title: 'Frontend Architecture',
		icon: 'web',
		accent: 'primary',
		description:
			'Component composition, state management, responsive interfaces and complex frontend workflows.',
		technologies: [
			'React',
			'Next.js',
			'Angular',
			'TypeScript',
			'JavaScript',
			'Material UI',
			'Redux / Context',
		],
	},
	{
		id: 'backend',
		title: 'Backend & Services',
		icon: 'engineering',
		accent: 'primary',
		description:
			'Backend services, API development, integrations, asynchronous workflows and schema-driven application development.',
		technologies: [
			'Node.js',
			'Express',
			'NestJS',
			'REST APIs',
			'GraphQL',
			'Apollo Client / Server',
		],
	},
	{
		id: 'data',
		title: 'Data & Application Modeling',
		icon: 'database',
		accent: 'primary',
		description:
			'Application data modeling, persistence layers, API data flows, caching and working across relational and document databases.',
		technologies: ['PostgreSQL', 'MongoDB', 'Firestore', 'Redis', 'Data / Media Caching'],
	},
	{
		id: 'cloud',
		title: 'Cloud & DevOps',
		icon: 'sync',
		accent: 'primary',
		description:
			'Experience working with cloud services, containerized applications, CI/CD pipelines and deployment workflows.',
		technologies: ['AWS', 'Docker', 'Bitbucket Pipelines', 'CI/CD', 'CloudWatch'],
	},
	{
		id: 'healthcare',
		title: 'Healthcare & Clinical',
		icon: 'touch',
		accent: 'tertiary',
		description:
			'Experience building and integrating clinical software workflows and healthcare data standards.',
		technologies: ['FHIR', 'LOINC', 'Clinical Data Workflows', 'Healthcare Integrations'],
	},
	{
		id: 'product-ai',
		title: 'Product Engineering & AI Integrations',
		icon: 'product',
		accent: 'secondary',
		description:
			'Product-focused engineering across SaaS workflows, third-party integrations and practical AI-enabled features.',
		technologies: [
			'LLM APIs',
			'Function Calling',
			'AI Integrations',
			'Multi-Tenant SaaS',
			'Third-Party Integrations',
			'Product Ownership',
		],
	},
];
