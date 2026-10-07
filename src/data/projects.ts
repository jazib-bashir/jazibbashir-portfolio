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
			'School transportation operations platform covering school registrations, student management, trip operations, route planning, scheduling and fleet workflows.',
		role: 'Senior Frontend Engineer',
		technologies: ['React', 'Next.js', 'TypeScript', 'Material UI', 'GraphQL'],
		primaryImage: '/images/projects/saar/00-portfolio-thumbnail.jpg',
		imageBadge: 'eMushrif Fleet Ops',
		footerLabel: 'Fleet Infrastructure',
		caseId: 'SAAR // EMUSHRIF',
		heroDescription:
			'A school transportation operations platform used to manage schools, students, registrations, trips, routes, scheduling and fleet operations.',
		overviewTitle: 'Project Overview',
		overviewBody:
			'Saar is an enterprise school transportation platform with operational workflows spanning school management, student transportation, route planning, trip monitoring and fleet operations.\n\nI worked primarily across the frontend using React, Next.js, TypeScript, Material UI and GraphQL, building complex workflows, reusable interfaces and real-time operational experiences.',
		roleContributionTitle: 'Senior Frontend Engineering Across Operational Workflows',
		roleContributionBody:
			'As a Senior Frontend Engineer, I worked across multiple operational areas of Saar, owning and significantly contributing to complex frontend workflows. My work included school registrations, student management, trip operations, route planning, scheduling, fleet interfaces and shared UI infrastructure. I worked with GraphQL APIs, real-time subscriptions, maps, complex application state, role-based access, feature flags and major UI library upgrades.',
		contributionsIntro:
			'Selected frontend modules and workflows across school transportation operations.',
		contributions: [
			{
				module: 'MODULE 01',
				icon: 'register',
				title: 'School Registration Workflows',
				description:
					'Built and enhanced school registration workflows including eligibility, registration actions, academic-year handling, validation and operational data flows.',
			},
			{
				module: 'MODULE 02',
				icon: 'group',
				title: 'Student Management',
				description:
					'Built and maintained student management interfaces covering student profiles, school assignments, transportation details, routes and parent/guardian relationships.',
			},
			{
				module: 'MODULE 03',
				icon: 'route',
				title: 'Route Planning & Optimization',
				description:
					'Contributed significantly to route planning workflows including map-based interactions, route filtering, stop management, optimizer configuration and safeguards around route regeneration.',
			},
			{
				module: 'MODULE 04',
				icon: 'radar',
				title: 'Trip Operations & Fleet',
				description:
					'Worked on operational trip interfaces and the fleet live-location experience, including map views, vehicle data and real-time updates.',
			},
			{
				module: 'MODULE 05',
				icon: 'calendar',
				title: 'Scheduling & Schedule Groups',
				description:
					'Owned frontend workflows for semester and schedule-group management, including drag-and-drop scheduling, search, validation and GraphQL mutations.',
			},
			{
				module: 'MODULE 06',
				icon: 'settings',
				title: 'Frontend Platform Improvements',
				description:
					'Contributed to reusable table infrastructure, MUI X upgrades, feature flags, role-based UI behavior, image uploads, CSV exports and production fixes.',
			},
		],
		gallery: [
			{
				image: '/images/projects/saar/01-school-registrations.png',
				alt: 'Saar school registration and workflow management dashboard',
				tag: '01 — SCHOOL REGISTRATIONS',
				title: 'School Registrations',
				description: 'School registration and workflow management dashboard.',
				thumbCode: '01 — School Registrations',
				thumbTitle: 'School Registrations',
			},
			{
				image: '/images/projects/saar/02-trips-operations.png',
				alt: 'Saar trips operations dashboard',
				tag: '02 — TRIPS OPERATIONS',
				title: 'Trips Operations',
				description:
					'Operational trip dashboard showing trip status, live tracking, routes and student transportation activity.',
				thumbCode: '02 — Trips Operations',
				thumbTitle: 'Trips Operations',
			},
			{
				image: '/images/projects/saar/03-route-planning.png',
				alt: 'Saar route planning and optimization interface',
				tag: '03 — ROUTE PLANNING',
				title: 'Route Planning & Optimization',
				description:
					'Route planning interface with map-based route management, stop sequencing and optimization workflows.',
				thumbCode: '03 — Route Planning',
				thumbTitle: 'Route Planning & Optimization',
			},
			{
				image: '/images/projects/saar/04-student-management.png',
				alt: 'Saar student management dashboard',
				tag: '04 — STUDENT MANAGEMENT',
				title: 'Student Management',
				description:
					'Student management dashboard covering profiles, school assignments, transportation details and parent or guardian information.',
				thumbCode: '04 — Student Management',
				thumbTitle: 'Student Management',
			},
			{
				image: '/images/projects/saar/05-platform-architecture.png',
				alt: 'Saar platform architecture overview diagram',
				tag: '05 — PLATFORM ARCHITECTURE',
				title: 'Platform Architecture',
				description:
					'High-level Saar platform architecture and application components. Platform context overview — not personal ownership of the full backend or infrastructure shown.',
				thumbCode: '05 — Platform Architecture',
				thumbTitle: 'Platform Architecture',
			},
		],
		technicalHighlights: [
			{
				label: 'GRAPHQL & REAL-TIME UI',
				icon: 'database',
				accent: 'secondary',
				description: 'GraphQL-powered frontend workflows with subscriptions for live operational updates.',
				items: ['GraphQL', 'Subscriptions', 'Apollo Client'],
			},
			{
				label: 'MAPS & OPERATIONAL INTERFACES',
				icon: 'touch',
				accent: 'tertiary',
				description:
					'Complex map-based workflows for fleet tracking, route planning and transportation operations.',
				items: ['Map Views', 'Route Planning', 'Fleet Operations'],
			},
			{
				label: 'REUSABLE FRONTEND SYSTEMS',
				icon: 'web',
				accent: 'primary',
				description:
					'Reusable tables, forms, filters, dialogs and shared operational components across multiple modules.',
				items: ['Data Grids', 'Shared Forms', 'Operational UI'],
			},
			{
				label: 'LARGE UI LIBRARY UPGRADES',
				icon: 'settings',
				accent: 'engineering',
				description:
					'Major Material UI / MUI X upgrades including Data Grid and Date Picker migrations.',
				items: ['Material UI', 'MUI X', 'Data Grid'],
			},
		],
	},
	{
		slug: 'opensend',
		name: 'OpenSend',
		category: 'B2B SaaS / Customer Data Platform',
		categoryBadgeClass: 'secondary',
		shortDescription:
			'Multi-tenant SaaS platform for customer identity resolution, data activation, marketing integrations and subscription billing.',
		role: 'Full Stack Engineer',
		technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
		primaryImage: '/images/projects/opensend/00-portfolio-thumbnail.jpg',
		imageBadge: 'B2B SaaS / CDP',
		footerLabel: 'Identity Resolution & CDP',
		caseId: 'OPENSEND // SAAS',
		heroDescription:
			'A multi-tenant SaaS platform that resolves customer identities, manages customer data, connects marketing platforms and handles subscription and billing workflows for online stores.',
		overviewTitle: 'Project Overview',
		overviewBody:
			'OpenSend is a B2B SaaS platform for online stores that combines customer identity resolution, customer data management, marketing activation and subscription billing.\n\nI worked across both the React frontend and Node.js backend, delivering production features involving subscription lifecycle management, billing, Stripe payments, receipt generation, onboarding and third-party integrations.',
		roleContributionTitle: 'Full Stack Engineering Across Subscription & Billing',
		roleContributionBody:
			'I worked as a Full Stack Engineer across the React frontend and Node.js backend, contributing to production features in subscription management, billing, customer onboarding and third-party integrations. My strongest work involved extending subscription plans, handling billing lifecycle workflows, generating and storing Stripe receipts, improving onboarding flows and integrating external business services.',
		contributionsIntro:
			'Selected production features across subscription, billing and integration workflows.',
		contributions: [
			{
				module: 'MODULE 01',
				icon: 'calendar',
				title: 'Subscription Plan Extension',
				description:
					'Built the plan-extension workflow allowing administrators to extend an active subscription while handling billing-cycle dates, duration rules and subscription state.',
			},
			{
				module: 'MODULE 02',
				icon: 'download',
				title: 'Stripe Receipt Generation',
				description:
					'Implemented PDF receipt generation for Stripe transactions using Puppeteer and added secure receipt storage in AWS S3.',
			},
			{
				module: 'MODULE 03',
				icon: 'mail',
				title: 'Subscription Lifecycle Emails',
				description:
					'Worked on automated subscription and billing emails covering events such as payment failures, plan changes, renewals and subscription lifecycle changes.',
			},
			{
				module: 'MODULE 04',
				icon: 'register',
				title: 'Onboarding & Plan Preview',
				description:
					'Built the onboarding plan-preview experience allowing customers to review plan information during the onboarding flow.',
			},
			{
				module: 'MODULE 05',
				icon: 'sync',
				title: 'Third-Party Integrations',
				description:
					'Worked with external services including PartnerStack and Shopify as part of customer, referral and store-management workflows.',
			},
			{
				module: 'MODULE 06',
				icon: 'engineering',
				title: 'Full-Stack Production Delivery',
				description:
					'Delivered features across React, Redux-Saga, Node.js, Express, Prisma and PostgreSQL, working through both frontend workflows and backend APIs.',
			},
		],
		gallery: [
			{
				image: '/images/projects/opensend/01-subscription-extension.png',
				alt: 'OpenSend subscription plan extension interface',
				tag: '01 — SUBSCRIPTION EXTENSION',
				title: 'Subscription Plan Extension',
				description:
					'Admin subscription management interface for extending an active plan and calculating the new subscription period.',
				thumbCode: '01 — Subscription Extension',
				thumbTitle: 'Subscription Plan Extension',
			},
			{
				image: '/images/projects/opensend/02-analytics.png',
				alt: 'OpenSend customer data and analytics dashboard',
				tag: '02 — ANALYTICS',
				title: 'Customer Data & Analytics',
				description:
					'OpenSend customer data and analytics dashboard showing resolved identities, email activity, revenue and customer engagement metrics. Product context overview — not personal ownership of the entire analytics system.',
				thumbCode: '02 — Customer Data & Analytics',
				thumbTitle: 'Customer Data & Analytics',
			},
			{
				image: '/images/projects/opensend/03-billing-receipts.png',
				alt: 'OpenSend billing and receipt generation workflow',
				tag: '03 — BILLING & RECEIPTS',
				title: 'Billing & Receipt Generation',
				description:
					'Billing workflow showing subscription invoices, Stripe payment processing, PDF receipt generation and AWS S3 receipt storage.',
				thumbCode: '03 — Billing & Receipts',
				thumbTitle: 'Billing & Receipt Generation',
			},
			{
				image: '/images/projects/opensend/04-integrations-lifecycle.png',
				alt: 'OpenSend integrations and lifecycle dashboard',
				tag: '04 — INTEGRATIONS',
				title: 'Integrations & Lifecycle',
				description:
					'Customer data activation workflow connecting store events and customer data with external marketing platforms and subscription lifecycle events. Platform context — not ownership of the full identity-resolution or integration platform.',
				thumbCode: '04 — Integrations & Lifecycle',
				thumbTitle: 'Integrations & Lifecycle',
			},
		],
		technicalHighlights: [
			{
				label: 'FRONTEND ENGINEERING',
				icon: 'web',
				accent: 'primary',
				items: ['React', 'Redux Toolkit', 'Redux-Saga', 'Ant Design', 'Formik / Yup'],
			},
			{
				label: 'BACKEND & APIS',
				icon: 'database',
				accent: 'secondary',
				items: ['Node.js', 'Express', 'TypeScript', 'REST APIs', 'Prisma'],
			},
			{
				label: 'BILLING & PAYMENTS',
				icon: 'settings',
				accent: 'engineering',
				items: [
					'Stripe',
					'Subscription lifecycle',
					'Billing workflows',
					'PDF receipt generation',
					'AWS S3',
				],
			},
			{
				label: 'THIRD-PARTY INTEGRATIONS',
				icon: 'sync',
				accent: 'tertiary',
				items: ['Shopify', 'PartnerStack', 'Marketing platforms', 'Webhooks', 'External service APIs'],
			},
		],
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
		primaryImage: '/images/projects/concio/00-portfolio-thumbnail.jpg',
		imageBadge: 'Mentoring & Scheduling',
		footerLabel: 'Multi-Tenant Scheduling',
		caseId: 'CONCIO // SCHEDULING',
		heroDescription:
			'A multi-tenant scheduling and booking platform for mentors and organizations, covering public booking pages, calendar availability, appointments, payments and operational dashboards.',
		overviewTitle: 'Project Overview',
		overviewBody:
			'Concio is a scheduling and booking platform that allows experts and organizations to create services, publish booking pages, manage availability and handle appointments.\n\nThe platform includes customer-facing booking flows, mentor dashboards, organization management, calendar integrations, payment workflows and backend services.\n\nI worked as the main product developer and owner, working directly with the client and leading a development team while contributing across the frontend, backend, integrations and deployment workflow.',
		roleContributionTitle: 'Product Ownership & Full-Stack Delivery',
		roleContributionBody:
			'I was the main product developer and owner for Concio, working directly with the client and leading a development team. I was responsible for full-stack product development across Angular, Node.js, Express and PostgreSQL, including booking workflows, scheduling, user and organization management, integrations and production deployment. I also set up and maintained the CI/CD workflow used to build and deploy the frontend, backend and database changes.',
		contributionsIntro:
			'Core product areas across booking, dashboards, integrations and production delivery.',
		contributions: [
			{
				module: 'MODULE 01',
				icon: 'calendar',
				title: 'Booking & Scheduling Platform',
				description:
					'Built and maintained the core booking experience covering service selection, availability, appointment scheduling and booking confirmation.',
			},
			{
				module: 'MODULE 02',
				icon: 'web',
				title: 'Public Booking Experience',
				description:
					'Worked on public-facing booking pages where customers can discover services, select available time slots and complete bookings.',
			},
			{
				module: 'MODULE 03',
				icon: 'group',
				title: 'Mentor & Organization Dashboards',
				description:
					'Developed operational dashboards for managing users, services, bookings, earnings, organizations and scheduling workflows.',
			},
			{
				module: 'MODULE 04',
				icon: 'sync',
				title: 'Calendar & External Integrations',
				description:
					'Worked with calendar and external service integrations including Google Calendar, Google Meet and other platform services.',
			},
			{
				module: 'MODULE 05',
				icon: 'register',
				title: 'Payments & Transactions',
				description:
					'Implemented and maintained payment-related workflows supporting platform transactions and subscription/payment integrations.',
			},
			{
				module: 'MODULE 06',
				icon: 'settings',
				title: 'CI/CD & Production Delivery',
				description:
					'Set up and maintained automated build and deployment workflows for the Angular frontend, Node.js backend and database migrations, supporting production delivery on AWS.',
			},
		],
		gallery: [
			{
				image: '/images/projects/concio/01-mentor-dashboard.png',
				alt: 'Concio mentor dashboard overview',
				tag: '01 — MENTOR DASHBOARD',
				title: 'Mentor Dashboard',
				description:
					'Concio mentor dashboard for managing bookings, services, earnings, clients and calendar activity.',
				thumbCode: '01 — Mentor Dashboard',
				thumbTitle: 'Mentor Dashboard',
			},
			{
				image: '/images/projects/concio/02-booking-flow.png',
				alt: 'Concio end-to-end booking and scheduling flow',
				tag: '02 — BOOKING FLOW',
				title: 'Booking & Scheduling Flow',
				description:
					'End-to-end booking workflow covering service selection, date and time selection, customer details, payment and booking confirmation.',
				thumbCode: '02 — Booking & Scheduling Flow',
				thumbTitle: 'Booking & Scheduling Flow',
			},
			{
				image: '/images/projects/concio/03-mentor-booking.png',
				alt: 'Concio mentor booking experience',
				tag: '03 — MENTOR BOOKING',
				title: 'Mentor Booking Experience',
				description:
					'Mentor-facing booking experience for selecting services, managing availability and scheduling sessions.',
				thumbCode: '03 — Mentor Booking Experience',
				thumbTitle: 'Mentor Booking Experience',
			},
			{
				image: '/images/projects/concio/04-onboarding.png',
				alt: 'Concio product onboarding journey',
				tag: '04 — ONBOARDING',
				title: 'Product Onboarding',
				description:
					'Multi-step onboarding flow covering account creation, profile setup, calendar connection, service configuration and publishing.',
				thumbCode: '04 — Product Onboarding',
				thumbTitle: 'Product Onboarding',
			},
			{
				image: '/images/projects/concio/05-architecture-cicd.png',
				alt: 'Concio system architecture and CI/CD pipeline',
				tag: '05 — ARCHITECTURE & CI/CD',
				title: 'System Architecture & CI/CD',
				description:
					'Concio application architecture and deployment pipeline covering frontend applications, backend APIs, PostgreSQL, Redis, external integrations and AWS production delivery.',
				thumbCode: '05 — System Architecture & CI/CD',
				thumbTitle: 'System Architecture & CI/CD',
			},
		],
		technicalHighlights: [
			{
				label: 'FRONTEND ENGINEERING',
				icon: 'web',
				accent: 'primary',
				items: [
					'Angular',
					'TypeScript',
					'Angular Universal / SSR',
					'Customer and admin applications',
					'Booking interfaces',
				],
			},
			{
				label: 'BACKEND & APIS',
				icon: 'database',
				accent: 'secondary',
				items: [
					'Node.js',
					'Express',
					'REST APIs',
					'Authentication & authorization',
					'Multi-tenant backend services',
				],
			},
			{
				label: 'DATA & INFRASTRUCTURE',
				icon: 'engineering',
				accent: 'engineering',
				items: ['PostgreSQL', 'Sequelize', 'Redis', 'Database migrations', 'AWS'],
			},
			{
				label: 'INTEGRATIONS & REAL-TIME',
				icon: 'sync',
				accent: 'tertiary',
				items: [
					'Google Calendar',
					'Google Meet',
					'Stripe',
					'PayPal',
					'Zoom',
					'Socket.IO',
					'SendGrid',
				],
			},
		],
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
		primaryImage: '/images/projects/akute-health/00-portfolio-thumbnail.jpg',
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
