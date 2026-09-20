# Deploying this portfolio to Netlify

The site uses server-side rendering (SSR) via a Netlify Function, which the
included `netlify.toml` and the Nitro `netlify` build preset (already set in
`vite.config.ts`) configure automatically. Everything — including the profile
photo — is bundled into the build, so no external assets are needed.

## Option A — GitHub + Netlify (recommended, auto-redeploys on every push)

1. Put this folder into a GitHub repository (create one at github.com, then
   upload the files — or use Git to push).
2. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
   → pick your GitHub repo.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy". First build takes a few minutes. Netlify gives you a
   `your-site-name.netlify.app` URL.

## Option B — Netlify CLI (no GitHub needed)

```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

(First run asks you to log in and link/create a site.)

## After deploying

- Contact form: works anywhere — EmailJS keys are baked into the page.
- Custom domain: Netlify → Site configuration → Domain management.

## Updating the site

Change the code, commit/push to GitHub (Option A) and Netlify rebuilds
automatically — or re-run the CLI command (Option B).
