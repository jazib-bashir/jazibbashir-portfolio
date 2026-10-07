export type EducationEntry = {
	id: string;
	title: string;
	institution: string;
	period: string;
	detail: string;
};

export type CertificationEntry = {
	id: string;
	name: string;
	issuer: string;
	year: string;
};

export const education: EducationEntry[] = [
	{
		id: 'edu-1',
		title: 'Degree or program',
		institution: 'Institution',
		period: 'Period',
		detail: 'Education details to be added.',
	},
];

export const certifications: CertificationEntry[] = [
	{
		id: 'cert-1',
		name: 'Certification',
		issuer: 'Issuer',
		year: 'Year',
	},
];
