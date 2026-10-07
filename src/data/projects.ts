export type Project = {
	slug: string;
	name: string;
	category: string;
	categoryBadgeClass?: 'primary' | 'secondary' | 'tertiary';
	shortDescription: string;
	role: string;
	technologies: string[];
	primaryImage: string;
	imageBadge: string;
	footerLabel: string;
	galleryImages?: string[];
};

export const projects: Project[] = [
	{
		slug: 'saar',
		name: 'Saar by eMushrif',
		category: 'ENTERPRISE OPERATIONS PLATFORM',
		categoryBadgeClass: 'primary',
		shortDescription: 'Case study content to be added.',
		role: 'Senior Frontend Engineer',
		technologies: [],
		primaryImage: '/images/projects/placeholder.svg',
		imageBadge: 'eMushrif Fleet Ops',
		footerLabel: 'Fleet Infrastructure',
	},
	{
		slug: 'opensend',
		name: 'OpenSend',
		category: 'B2B SAAS / CDP',
		categoryBadgeClass: 'secondary',
		shortDescription: 'Case study content to be added.',
		role: 'Full Stack Engineer',
		technologies: [],
		primaryImage: '/images/projects/placeholder.svg',
		imageBadge: 'B2B SaaS / CDP',
		footerLabel: 'Identity Resolution & CDP',
	},
	{
		slug: 'concio',
		name: 'Concio',
		category: 'MENTORING & SCHEDULING SAAS',
		categoryBadgeClass: 'tertiary',
		shortDescription: 'Case study content to be added.',
		role: 'Product Owner & Lead Full Stack Dev',
		technologies: [],
		primaryImage: '/images/projects/placeholder.svg',
		imageBadge: 'Mentoring & Scheduling',
		footerLabel: 'Multi-Tenant Scheduling',
	},
	{
		slug: 'akute-health',
		name: 'Akute Health',
		category: 'HEALTHCARE EHR',
		categoryBadgeClass: 'primary',
		shortDescription: 'Case study content to be added.',
		role: 'Role to be added',
		technologies: [],
		primaryImage: '/images/projects/placeholder.svg',
		imageBadge: 'Healthcare Platform',
		footerLabel: 'Clinical Workflows',
	},
];

/** Two projects per carousel slide (Stitch reference). */
export const projectSlides: Project[][] = [
	[projects[0], projects[1]],
	[projects[2], projects[3]],
];
