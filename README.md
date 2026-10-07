# jazibbashir-portfolio

Personal portfolio site for Jazib Bashir.

## Tech stack

- [Astro](https://astro.build/)
- GitHub Pages (static hosting)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, which builds with Astro and deploys via the official `upload-pages-artifact` / `deploy-pages` flow.

**One-time repository setup (required):** If the deploy job fails with `Failed to create deployment (status: 404)`, GitHub Pages is not enabled for Actions deploys yet.

1. Open [Repository Settings → Pages](https://github.com/jazib-bashir/jazibbashir-portfolio/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Re-run the latest **Deploy to GitHub Pages** workflow from the Actions tab.

Custom domain: `public/CNAME` contains `jazibbashir.com`. After the first successful deploy, confirm the domain under **Pages → Custom domain** and configure DNS at your registrar (not in this repo).

**Asset paths:** The CI build sets `ASTRO_BASE=/jazibbashir-portfolio/` so CSS and images load on `https://jazib-bashir.github.io/jazibbashir-portfolio/`. If you serve only from a custom domain at the site root, change the workflow env to `ASTRO_BASE=/` and `ASTRO_SITE=https://jazibbashir.com`.
