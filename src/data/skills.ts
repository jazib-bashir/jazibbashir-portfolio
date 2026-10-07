export type SkillCategory = {
	id: string;
	title: string;
	icon: 'frontend' | 'data' | 'product' | 'engineering';
	items: string[];
};

export const skillCategories: SkillCategory[] = [
	{ id: 'frontend', title: 'Frontend', icon: 'frontend', items: [] },
	{ id: 'data', title: 'Data & API', icon: 'data', items: [] },
	{ id: 'product', title: 'Product', icon: 'product', items: [] },
	{ id: 'engineering', title: 'Engineering', icon: 'engineering', items: [] },
];
