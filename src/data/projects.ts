import type { IconName } from '../types/icons';

export type GallerySlide = {
	image: string;
	alt: string;
	tag: string;
	title: string;
	description: string;
	thumbCode: string;
	thumbTitle: string;
};

export type ContributionModule = {
	module: string;
	icon: IconName;
	title: string;
	description: string;
	status?: string;
	technologies?: string[];
};

export type TechnicalHighlightGroup = {
	label: string;
	icon: IconName;
	accent: 'primary' | 'secondary' | 'tertiary' | 'engineering';
	description?: string;
	items: string[];
};

export type ProjectNavRef = {
	slug: string;
	name: string;
	subtitle: string;
};

export const selectedProjectsSection = {
	label: 'ENGINEERING CASE STUDIES ———',
	title: 'Selected Projects',
	description:
		'Selected work across complex operational software, multi-tenant SaaS and healthcare platforms.',
} as const;

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
	caseId: string;
	heroDescription: string;
	overviewTitle: string;
	overviewBody: string;
	roleContributionTitle: string;
	roleContributionBody: string;
	contributionsIntro: string;
	contributions: ContributionModule[];
	gallery: GallerySlide[];
	technicalHighlights: TechnicalHighlightGroup[];
};

const placeholderContribution = (n: number): ContributionModule => ({
	module: `MODULE ${String(n).padStart(2, '0')}`,
	icon: 'engineering',
	title: 'Contribution details to be added.',
	description: 'Module scope to be documented.',
});

const placeholderGallery = (project: Pick<Project, 'name' | 'primaryImage'>): GallerySlide[] => [
	{
		image: project.primaryImage,
		alt: `${project.name} interface preview`,
		tag: '01 — PREVIEW',
		title: 'Project interface preview',
		description: 'Gallery assets to be added.',
		thumbCode: '01 — Preview',
		thumbTitle: 'Interface',
	},
];

const placeholderTech = (): TechnicalHighlightGroup[] => [
	{
		label: 'FRONTEND',
		icon: 'frontend',
		accent: 'primary',
		items: ['Details to be added.'],
	},
	{
		label: 'DATA & API',
		icon: 'data',
		accent: 'secondary',
		items: ['Details to be added.'],
	},
	{
		label: 'INTERACTION',
		icon: 'product',
		accent: 'tertiary',
		items: ['Details to be added.'],
	},
	{
		label: 'ENGINEERING',
		icon: 'engineering',
		accent: 'engineering',
		items: ['Details to be added.'],
	},
];

export const projects: Project[] = [
	{
		slug: 'saar',
		name: 'Saar by eMushrif',
		category: 'Enterprise Operations Platform',
		categoryBadgeClass: 'primary',
		shortDescription:
			'School transportation operations platform covering registrations, students, trips, routes, scheduling and fleet operations.',
		role: 'Senior Frontend Engineer',
		technologies: ['React', 'Next.js', 'TypeScript', 'Material UI', 'GraphQL'],
		primaryImage:
			'https://lh3.googleusercontent.com/aida/AEtjO1W6d_SNjmYWuSbPOYEu_0o5lR4XWqpIOnfB0cnzJLoKF0_Ck9LD6qQTAYSgKVGJQuxohj0ExtSFHjtGOUOWnJjHxhlywe-tPpnTvc-95UwYOBI-YQC_-SMDMHNbpkQXlY4mdNtDzH2pHKnYRuQGSqfCL-GStpxImRoRMMHYgdy6R-YpA3zty6zzdBgiMoLa7z816_1xHo10X1mv7NbM0nFNSz7Sj7vNry36HtUnGVwcfA',
		imageBadge: 'eMushrif Fleet Ops',
		footerLabel: 'Fleet Infrastructure',
		caseId: 'SAAR // EMUSHRIF',
		heroDescription:
			'An enterprise school transportation operations platform covering registrations, students, trips, routes, and live fleet management.',
		overviewTitle: 'District-Scale Transport Logistics',
		overviewBody:
			'Saar by eMushrif is an enterprise logistics and school transportation operations platform engineered to manage regional fleet dispatching, student safety tracking, route calculation, and multi-school administrative workflows across thousands of daily journeys.',
		roleContributionTitle: 'Core UI Architecture & Real-Time Systems',
		roleContributionBody:
			'Engineered core web application modules across student route assignments, live fleet dispatching, and school registration. Built high-performance data tables with virtualized scrolling, integrated GraphQL subscriptions for real-time tracking, and implemented responsive Google Maps interfaces for route planning.',
		contributionsIntro:
			'Core production modules and user interfaces engineered for multi-district scale operations.',
		contributions: [
			{
				module: 'MODULE 01',
				icon: 'register',
				title: 'School Registration Workflows',
				description:
					'Architected multi-step registration flows and bulk student onboarding interfaces with validation logic.',
			},
			{
				module: 'MODULE 02',
				icon: 'group',
				title: 'Student Management',
				description:
					'Built high-density data tables with multi-criteria filtering, student attendance records, and batch status assignment.',
			},
			{
				module: 'MODULE 03',
				icon: 'route',
				title: 'Route Planning & Map Interactions',
				description:
					'Engineered waypoint route calculation UI, pickup/drop-off sequence ordering, and interactive polyline rendering via Google Maps.',
			},
			{
				module: 'MODULE 04',
				icon: 'radar',
				title: 'Live Fleet Tracking',
				description:
					'Implemented real-time bus location tracking with geofencing boundaries, speed telemetry badges, and live dispatch alerts.',
			},
			{
				module: 'MODULE 05',
				icon: 'calendar',
				title: 'Scheduling & Schedule Groups',
				description:
					'Developed morning and afternoon transit shift planners, recurring calendar patterns, and driver assignment workflows.',
			},
			{
				module: 'MODULE 06',
				icon: 'sync',
				title: 'GraphQL & Realtime UI Workflows',
				description:
					'Connected Apollo Client subscriptions and optimistic UI caching to handle high-frequency vehicle telemetry without UI jank.',
			},
		],
		gallery: [
			{
				image:
					'https://lh3.googleusercontent.com/aida/AEtjO1W6d_SNjmYWuSbPOYEu_0o5lR4XWqpIOnfB0cnzJLoKF0_Ck9LD6qQTAYSgKVGJQuxohj0ExtSFHjtGOUOWnJjHxhlywe-tPpnTvc-95UwYOBI-YQC_-SMDMHNbpkQXlY4mdNtDzH2pHKnYRuQGSqfCL-GStpxImRoRMMHYgdy6R-YpA3zty6zzdBgiMoLa7z816_1xHo10X1mv7NbM0nFNSz7Sj7vNry36HtUnGVwcfA',
				alt: 'Saar by eMushrif student route assignments screen with high-density data grid',
				tag: '01 — SCHOOL REGISTRATION',
				title: 'School Registration & Student Route Assignments',
				description:
					'High-density operational data grid with batch assignments, search, and live route status.',
				thumbCode: '01 — School Registration',
				thumbTitle: 'Route Assignments',
			},
			{
				image:
					'https://lh3.googleusercontent.com/aida-public/AB6AXuDmmIYby8PyQIj8cEXaeVKFoUCqU0h2SCv7mpxkv15zGcCfAEjkWW8q6l743VTxO8Oen00B_kwBpfzfPqz9R6G6vrxR4WUDgFyqNJNS-q3HhhTzoKL1cPP7XhDwGicITSyCeTjkg8qsaVxzddvxznBViFcbXdJ7k6Bm9e4-Im0wp276FEhkUpoLVvLOtEtzoIPbUnyD58paFD5bir7-rmXZAJO-R6Q31TN4kyRe9ABF',
				alt: 'Trips operations dashboard',
				tag: '02 — TRIPS OPERATIONS',
				title: 'Trips Operations & Fleet Dispatch Schedule',
				description:
					'Live trip monitoring Gantt timelines, driver check-in verifications, and progress flags.',
				thumbCode: '02 — Trips Operations',
				thumbTitle: 'Dispatch & Shifts',
			},
			{
				image:
					'https://lh3.googleusercontent.com/aida-public/AB6AXuBsTpabOstbZku4KdG30-K2uffl21QM2V34O7wOK61GMAMxG2gOCIrw1-MTNHAaqR8UgzyIktvrSNAW9IN7-zee11cVyWn9v63nOWtfRnFai99xUihh0MxPwY4liHjX24ArZe2tMcmpeqEru8hTOVuDQP54B22WHf2bLljVvdoH5o71PAZR0Atr3P69PrOzB0grBhavJWr1hy3c8RplqF23ABPv8nzwk8Ahq04eskPi',
				alt: 'Google Maps route path optimization view',
				tag: '03 — ROUTE PLANNING',
				title: 'Dynamic Multi-Stop Route Path Optimization',
				description:
					'Interactive Google Maps polyline routing with sequenced student pickup waypoints.',
				thumbCode: '03 — Route Planning',
				thumbTitle: 'Map & Stops',
			},
			{
				image:
					'https://lh3.googleusercontent.com/aida-public/AB6AXuDXHUgWvvYxMOOESZZz3z-ae8pKo6sWvKphng8P1VN5MWJtywVr7nxvCmjUtVofv4V7WP-CNYsnzfUC5h-ZpnxtqwNsB6Hg3xYcYNmjG2wqL5DO6-c5j0Mza3SAzG53Vv0BzrQmJhOAAM2ZaATS5o7rrSMMXoSFatNLtl4zCWKjLpJF-jvJ9aL2DDMujrhzUoLlFuhqscZ2iHx4tV1E-GEsOVeo65RRwNPmUXLzueJe',
				alt: 'Student roster and guardian directory records',
				tag: '04 — STUDENTS MANAGEMENT',
				title: 'Student Roster & Guardian Records Directory',
				description:
					'Verified student records with emergency contact linkage, school mapping, and transit safety logs.',
				thumbCode: '04 — Students Management',
				thumbTitle: 'Roster & Guardians',
			},
			{
				image:
					'https://lh3.googleusercontent.com/aida-public/AB6AXuBM2tsyYJWxSQ78_QOY8OkPFeG37pILwIZ6HjAWSR8laRq8QiwOhMKg3T3ZZFob06N7oom7v-GbYiWIL-Njp0r6kXxqiyBldQ20GfhLioPIBAcG6NcNtaCoCVARm_375CpEJxlgDz_HNeRgLPCx-kN7cNQmjcIkpIXx5lFSGZ5KWxPEhdV8t2pDnSTr5D8pbI6BhHb1RmtRNVZVEG2_6FS9FmT2HE5pclZaZ30RMJX2',
				alt: 'Frontend architecture and system data flow',
				tag: '05 — ARCHITECTURE',
				title: 'System Topology & Frontend Architecture Tree',
				description:
					'Modular Next.js component directory structure, Apollo cache layers, and event subscriptions.',
				thumbCode: '05 — Architecture',
				thumbTitle: 'System Topology',
			},
		],
		technicalHighlights: [
			{
				label: 'FRONTEND',
				icon: 'web',
				accent: 'primary',
				items: ['React', 'Next.js', 'TypeScript', 'Material UI'],
			},
			{
				label: 'DATA & API',
				icon: 'database',
				accent: 'secondary',
				items: ['GraphQL', 'Apollo Client', 'GraphQL Subscriptions', 'In-Memory Cache'],
			},
			{
				label: 'INTERACTION',
				icon: 'touch',
				accent: 'tertiary',
				items: ['Google Maps Platform', 'Real-time Updates', 'Complex Forms', 'Route Polylines'],
			},
			{
				label: 'ENGINEERING',
				icon: 'settings',
				accent: 'engineering',
				items: [
					'Feature Flags',
					'Reusable Component Library',
					'UI Virtualization',
					'Production Stability',
				],
			},
		],
	},
	{
		slug: 'opensend',
		name: 'OpenSend',
		category: 'B2B SaaS / CDP',
		categoryBadgeClass: 'secondary',
		shortDescription:
			'Multi-tenant SaaS platform for identity resolution, customer data and marketing-platform integrations with admin and billing workflows.',
		role: 'Full-Stack Engineer',
		technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Stripe'],
		primaryImage: '/images/projects/placeholder.svg',
		imageBadge: 'B2B SaaS / CDP',
		footerLabel: 'Identity Resolution & CDP',
		caseId: 'OPENSEND // CASE',
		heroDescription: 'Case study content to be added.',
		overviewTitle: 'Project overview to be added.',
		overviewBody: 'Overview content to be added.',
		roleContributionTitle: 'Role and contribution to be added.',
		roleContributionBody: 'Contribution details to be added.',
		contributionsIntro: 'Verified scope to be documented.',
		contributions: Array.from({ length: 6 }, (_, i) => placeholderContribution(i + 1)),
		gallery: placeholderGallery({ name: 'OpenSend', primaryImage: '/images/projects/placeholder.svg' }),
		technicalHighlights: placeholderTech(),
	},
	{
		slug: 'concio',
		name: 'Concio',
		category: 'Scheduling & Booking Platform',
		categoryBadgeClass: 'tertiary',
		shortDescription:
			'Scheduling and booking platform for creating public booking pages, managing appointments and handling calendar-based workflows.',
		role: 'Product Owner & Full-Stack Developer',
		technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
		primaryImage: '/images/projects/placeholder.svg',
		imageBadge: 'Mentoring & Scheduling',
		footerLabel: 'Multi-Tenant Scheduling',
		caseId: 'CONCIO // CASE',
		heroDescription: 'Case study content to be added.',
		overviewTitle: 'Project overview to be added.',
		overviewBody: 'Overview content to be added.',
		roleContributionTitle: 'Role and contribution to be added.',
		roleContributionBody: 'Contribution details to be added.',
		contributionsIntro: 'Verified scope to be documented.',
		contributions: Array.from({ length: 6 }, (_, i) => placeholderContribution(i + 1)),
		gallery: placeholderGallery({ name: 'Concio', primaryImage: '/images/projects/placeholder.svg' }),
		technicalHighlights: placeholderTech(),
	},
	{
		slug: 'akute-health',
		name: 'Akute Health',
		category: 'Healthcare SaaS',
		categoryBadgeClass: 'primary',
		shortDescription:
			'Multi-tenant clinical software covering patient workflows, clinical documentation, scheduling, labs, prescribing, communication and telemedicine.',
		role: 'Full-Stack Engineer',
		technologies: ['React', 'Node.js', 'FHIR', 'MongoDB', 'Zoom'],
		primaryImage: '/images/projects/akute-health/01-patient-chart.png',
		imageBadge: 'Clinical SaaS',
		footerLabel: 'Clinical Workflows',
		caseId: 'AKUTE // HEALTH',
		heroDescription:
			'Contributed to an existing multi-tenant clinical software platform across clinician workflows, backend APIs, clinical integrations and telemedicine.',
		overviewTitle: 'Project Overview',
		overviewBody:
			'Akute Health is a multi-tenant clinical software platform supporting modern healthcare practices. The product includes clinician workflows for patient charts, clinical documentation, scheduling, labs, prescribing, documents, tasks, communication and telemedicine, with supporting patient-facing applications and healthcare integrations.\n\nAkute Health uses a React-based clinician application backed by a Node.js FHIR/API layer and MongoDB. The platform integrates with healthcare and communication services including prescribing, messaging, scheduling and telemedicine providers.\n\nMy contributions touched the clinician frontend, selected API/server workflows and telemedicine application rather than the entire platform architecture.',
		roleContributionTitle: 'Production Feature Engineering Across Clinical Workflows',
		roleContributionBody:
			'Worked across the existing React clinician application and Node/FHIR API codebase, contributing production features across patient workflows, clinical communication, documents, prescribing and telemedicine. Also worked on larger clinical platform improvements including lab timeline and AI scribe integrations on development branches.',
		contributionsIntro:
			'Shipped production features across telemedicine, documents, pharmacy, scheduling and clinical communication. Lab timeline and related clinical platform work remained on development branches and is called out separately below.',
		contributions: [
			{
				module: 'MODULE 01',
				icon: 'web',
				title: 'Telemedicine & Zoom Migration',
				description:
					'Migrated the telemedicine experience to the Zoom Video SDK and addressed session, browser compatibility and media-permission issues.',
				status: 'Production',
				technologies: ['React', 'TypeScript', 'Zoom Video SDK'],
			},
			{
				module: 'MODULE 02',
				icon: 'database',
				title: 'Clinical Document Sharing',
				description:
					'Implemented document-sharing workflows that allow selected patient documents to be shared through the patient portal based on document tags.',
				status: 'Production',
				technologies: ['React', 'Node.js', 'FHIR', 'Patient Portal'],
			},
			{
				module: 'MODULE 03',
				icon: 'register',
				title: 'Pharmacy Workflow',
				description:
					'Added the default pharmacy workflow to the patient summary and integrated the existing DoseSpot prescribing flow.',
				status: 'Production',
				technologies: ['React', 'DoseSpot', 'Clinical Workflows'],
			},
			{
				module: 'MODULE 04',
				icon: 'calendar',
				title: 'Appointment Notification Consent',
				description:
					'Implemented appointment notification consent handling within the scheduling and reminder workflow.',
				status: 'Production',
				technologies: ['React', 'Node.js', 'Appointments'],
			},
			{
				module: 'MODULE 05',
				icon: 'group',
				title: 'Clinical Inbox & Task Workflows',
				description:
					'Improved clinical communication and task workflows with conversation filters, loading behavior and task search across the existing application.',
				status: 'Production',
				technologies: ['React', 'Redux', 'Node.js'],
			},
			{
				module: 'MODULE 06',
				icon: 'touch',
				title: 'FHIR Lab Timeline',
				description:
					'Developed a lab categorization and timeline engine that groups FHIR Observation results using panel structure and LOINC classification.',
				status: 'Development / Unreleased',
				technologies: ['FHIR', 'LOINC', 'Clinical Data', 'React'],
			},
		],
		gallery: [
			{
				image: '/images/projects/akute-health/01-patient-chart.png',
				alt: 'Akute Health patient chart and clinical workflow dashboard',
				tag: '01 — PATIENT CHART',
				title: 'Patient Chart',
				description:
					'Representative clinician workspace showing patient information, clinical summary, vitals, medications, conditions, lab results and care-team workflows.',
				thumbCode: '01 — Patient Chart',
				thumbTitle: 'Clinical patient chart and care-management workspace',
			},
			{
				image: '/images/projects/akute-health/02-clinical-dashboard.png',
				alt: 'Akute Health clinical operations dashboard portfolio visual',
				tag: '02 — CLINICAL DASHBOARD',
				title: 'Clinical Dashboard',
				description:
					'Representative dashboard showing patient activity, appointments, tasks and clinical document workflows.',
				thumbCode: '02 — Clinical Dashboard',
				thumbTitle: 'Clinical operations dashboard',
			},
			{
				image: '/images/projects/akute-health/03-patient-documents.png',
				alt: 'Akute Health patient documents and sharing workflow portfolio visual',
				tag: '03 — PATIENT DOCUMENTS',
				title: 'Patient Documents',
				description:
					'Document workflow covering clinical records, lab results, imaging, forms and patient-portal sharing controls.',
				thumbCode: '03 — Patient Documents',
				thumbTitle: 'Clinical document management and patient sharing',
			},
			{
				image: '/images/projects/akute-health/04-telemedicine.png',
				alt: 'Akute Health telemedicine visit workflow portfolio visual',
				tag: '04 — TELEMEDICINE',
				title: 'Telemedicine Visit',
				description:
					'Representative telemedicine experience with video visit controls, visit details, patient context and clinical communication.',
				thumbCode: '04 — Telemedicine Visit',
				thumbTitle: 'Integrated telemedicine workflow',
			},
			{
				image: '/images/projects/akute-health/05-lab-results.png',
				alt: 'Akute Health FHIR lab timeline portfolio visual (development work)',
				tag: '05 — LAB RESULTS',
				title: 'Lab Results',
				description:
					'Representative lab timeline interface grouping clinical observations into categories and longitudinal result views. Portfolio visual for development-branch lab timeline work, not a shipped production feature.',
				thumbCode: '05 — Lab Results',
				thumbTitle: 'FHIR-based clinical lab timeline (development)',
			},
		],
		technicalHighlights: [
			{
				label: 'FRONTEND',
				icon: 'web',
				accent: 'primary',
				description:
					'Worked within the existing React clinician application across complex patient, clinical and communication workflows.',
				items: ['React', 'React Router', 'Redux / Redux-Saga', 'Material UI', 'Formik / Yup'],
			},
			{
				label: 'DATA & API',
				icon: 'database',
				accent: 'secondary',
				description:
					'Worked across FHIR-shaped clinical resources and Node.js API workflows in a multi-tenant healthcare application.',
				items: ['FHIR', 'Node.js', 'MongoDB', 'REST APIs', 'Mongoose'],
			},
			{
				label: 'CLINICAL INTEGRATIONS',
				icon: 'sync',
				accent: 'tertiary',
				description:
					'Integrated with existing healthcare and communication services across prescribing, messaging, scheduling and document workflows.',
				items: ['DoseSpot', 'Twilio', 'Health Gorilla', 'Google Calendar', 'Phaxio'],
			},
			{
				label: 'TELEMEDICINE & PLATFORM',
				icon: 'settings',
				accent: 'engineering',
				description:
					'Worked across realtime application behavior, telemedicine sessions and production observability within the existing platform.',
				items: ['Zoom Video SDK', 'Socket.io', 'Redis', 'Sentry', 'Elastic APM'],
			},
		],
	},
];

export const projectOrder = projects.map((p) => p.slug);

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getProjectNeighbors(slug: string): {
	previous: ProjectNavRef;
	next: ProjectNavRef;
} {
	const index = projectOrder.indexOf(slug);
	const prevSlug = projectOrder[(index - 1 + projectOrder.length) % projectOrder.length];
	const nextSlug = projectOrder[(index + 1) % projectOrder.length];
	const prev = getProjectBySlug(prevSlug)!;
	const next = getProjectBySlug(nextSlug)!;
	return {
		previous: { slug: prev.slug, name: prev.name, subtitle: prev.footerLabel },
		next: { slug: next.slug, name: next.name, subtitle: next.footerLabel },
	};
}

/** Two projects per carousel slide (Stitch reference). */
export const projectSlides: Project[][] = [
	[projects[0], projects[1]],
	[projects[2], projects[3]],
];
