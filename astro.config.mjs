// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites are served from /{repo}/ — assets must use that base path.
// Custom domain (jazibbashir.com) is served from / — use ASTRO_BASE=/ in CI when deploying for apex only.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'jazibbashir-portfolio';
const baseFromEnv = process.env.ASTRO_BASE?.trim();
const base =
	baseFromEnv !== undefined && baseFromEnv !== ''
		? baseFromEnv.endsWith('/')
			? baseFromEnv
			: `${baseFromEnv}/`
		: process.env.GITHUB_ACTIONS === 'true'
			? `/${repoName}/`
			: '/';

const siteFromEnv = process.env.ASTRO_SITE?.trim();
const site =
	siteFromEnv ||
	(base === '/' ? 'https://jazibbashir.com' : `https://jazib-bashir.github.io/${repoName}`);

// https://astro.build/config
export default defineConfig({
	site,
	base,
});
