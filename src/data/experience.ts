export type ExperienceEntry = {
	id: string;
	role: string;
	organization: string;
	period?: string;
	isCurrent?: boolean;
	summary: string;
	accent: 'primary' | 'secondary' | 'outline';
	orgTone: 'primary' | 'secondary' | 'muted';
};

export const experienceSection = {
	label: 'Professional background',
	title: 'Professional Experience',
	description:
		'Hands-on software engineering, product delivery and technical leadership across SaaS, enterprise and healthcare products.',
	careerSummary:
		'Started my software engineering career in April 2015 and progressed through hands-on software engineering into senior engineering and technical leadership roles.',
	cvButtonLabel: 'Download Full CV (PDF)',
} as const;

export const experience: ExperienceEntry[] = [
	{
		id: 'octek',
		role: 'Engineering Manager / Technical Lead',
		organization: 'Octek',
		period: 'Present',
		isCurrent: true,
		summary:
			'Lead and contribute to software products across frontend, backend, architecture, client delivery and technical problem solving. Manage a team of approximately 5 software engineers while remaining hands-on with complex product and engineering work.',
		accent: 'primary',
		orgTone: 'primary',
	},
	{
		id: 'teknuk',
		role: 'Software Engineer',
		organization: 'Teknuk',
		summary:
			'Built and delivered web and software products across frontend and backend engineering, developing the technical foundation that led into senior engineering and technical leadership roles.',
		accent: 'secondary',
		orgTone: 'secondary',
	},
];
