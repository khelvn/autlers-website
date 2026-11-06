# Autler’s website

Responsive static landing page. Plain HTML, CSS and JavaScript; no dependency installation needed. Generated illustrations are included locally. The page follows the approved turquoise concept, with recreated rather than pixel-identical artwork.

## Run locally

Install Node.js 22+. Open this folder in VS Code, then run:

```sh
npm run check
npm run dev
```

Open http://localhost:5173. Alternatively use VS Code Live Server on dist/index.html.

## Files

- dist/index.html — page content, resource links, accessible navigation
- dist/styles.css — design tokens, layouts and mobile styles
- dist/app.js — feedback draft interaction
- dist/assets/ — generated illustrations
- scripts/check.mjs — validates local assets and section links
- .github/workflows/check.yml — automated checks on pushes and pull requests

## Contact before public launch

No email address has been provided. Share your thoughts currently opens a clearly labelled local draft/copy tool. It does not send or store feedback. Before launching publicly, replace the panel with your verified contact email or connect a real form service and provide an appropriate privacy notice. Do not represent drafts as delivered feedback.

## GitHub setup

1. Create an empty private repository named autlers-website in your GitHub organization. Do not initialize it with a README.
2. Extract this source archive and open its folder in a terminal.
3. Run the following commands, replacing YOUR-ORG with your actual organization handle:

```sh
git init
git add .
git commit -m "feat: create Autler’s landing page"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/autlers-website.git
git push -u origin main
```

Authenticate using your GitHub account or GitHub CLI, never shared credentials.

## Working together

Create an issue with acceptance criteria. Create a branch such as feat/footer-links. Commit a small change, push, and open a pull request. Ask your partner to review. Run checks, test mobile and keyboard navigation, and merge when ready. Keep main deployable. Enforced branch protection for private organization repositories depends on your GitHub plan.

## Recommended hosting: Cloudflare Pages

Connect your GitHub account in Cloudflare Workers & Pages and create a Pages project from this repository. Select no framework. Build command: npm run build. Build output directory: dist. Production branch: main. Grant access only to the intended repository. Check the generated pages.dev URL before connecting your domain. Enable preview deployments for other branches to review changes before merge.

Attach your domain through the project's Custom domains page and follow its exact DNS instructions. An apex domain requires adding the domain as a Cloudflare zone and using its nameservers; a subdomain can use the instructed CNAME with external DNS. Preserve existing email MX/TXT and other records before changing DNS. Your domain registration can remain at its current registrar.

Do not guess DNS records or change nameservers before copying all existing records. HTTPS is managed by the host; do not buy a separate certificate for this site.

## First tasks for a collaborator

- Review mobile layout at 375px width and keyboard focus.
- Replace decorative resource symbols with consistent inline SVG icons.
- Verify resource descriptions and links.
- Configure the verified contact channel.

## Content and assets

Use the CSS custom properties at the top of styles.css to maintain the palette. Keep important wording as HTML text, not embedded in images. The decorative contact and product imagery illustrates areas being explored; no products are represented as available. No analytics, tracking cookies or external font services are included.
