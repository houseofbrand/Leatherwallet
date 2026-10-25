# LeatherWalletManufacturer.com

Production-ready static marketing site for House Of Brands Fashion LLP. The project uses a small Node-based static generator: source content and templates live in `src/` and `scripts/build.mjs`, while `dist/` is generated for deployment.

The site includes a stated catalogue range of 500+ leather wallet and accessories designs, a dedicated wallet-and-belt gift set collection with 18 colour-combination concepts, ten premium gift-box concepts, eight branded individual-wallet box concepts, qualified 72-piece/set MOQ messaging, contextual WhatsApp links and responsive WhatsApp quotation builders.

## Run locally

```bash
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs
```

The same commands remain available as `npm run build`, `npm run check` and `npm run dev` when npm is installed. Codex QA used the bundled Node runtime because Node is not currently exposed on this machine’s shell `PATH`.

Open `http://localhost:4173`.

## Deployment

GitHub Pages deployment is defined in `.github/workflows/deploy-pages.yml`. Every push to `main` runs the build and validation scripts, uploads `dist/`, and deploys the generated static site. The build emits `CNAME` for `leatherwalletmanufacturer.com` and `.nojekyll` for predictable static asset handling.

GoDaddy DNS records and launch verification steps are documented in `GODADDY-DNS.md`.

Before launch:

1. Have legal counsel review the privacy and terms pages.
2. Decide whether a CRM or secure server-side form endpoint is needed. The current contact and gift-set forms validate in the browser and prepare a WhatsApp message from the visitor’s real selections; nothing is stored or sent automatically.
3. If a server-side enquiry endpoint is added, configure spam protection, validation, rate limiting and secure handling.
4. Add GA4 and Search Console IDs only after consent and production configuration.
5. Verify all product capabilities, materials, current MOQ eligibility and shipping terms for each live enquiry.
6. Review the AI-generated private-label wallet and packaging concepts and replace them with approved company photography when available. Fictional demonstration marks—including NORTH & HIDE and monograms—are illustrative, not client identities. The founder photograph is genuine and sourced from RajanMehta.in.
7. Review the individual-wallet boxes, wallet-and-belt combinations and gift-box concepts against current suppliers before presenting any direction as orderable. The interface labels these assets as concept visuals.

## SEO

Every route is emitted as static crawlable HTML with a unique title, description, canonical URL, Open Graph data, one H1, breadcrumbs and JSON-LD. The build generates `sitemap.xml` and `robots.txt`.

The site contains 24 routes, including focused pages for OEM development, trifolds, slim wallets, long wallets and zip-around wallets. `keyword-map.csv` assigns the complete 100-keyword target library by intent and avoids creating separate pages for minor wording variations.

Quantitative keyword data was unavailable; volume and difficulty remain explicitly marked unverified. Validate priorities with Google Keyword Planner and real Search Console query data after launch.

The front end is prepared to push `whatsapp_enquiry`, `quotation_request` and `lead_form_generated` events into `window.dataLayer` when a consent-aware GA4 or tag-manager implementation is configured. No tracking ID is invented or shipped.

## Product image presentation

Product sheets use their native grid proportions so complete wallets, belts, buckles, branding and packaging remain visible. Responsive rules preserve those ratios rather than forcing fixed-height crops, and a readable fallback appears if an image cannot load.

## Environment placeholders

See `.env.example`. No secrets or tracking IDs are committed.

## Image generation record

The refreshed product campaign was created with the built-in ImageGen tool using photorealistic studio-product prompts. It includes a branded wallet hero, a nine-cell branded wallet catalogue, a coordinated wallet-and-box image, eight individual-wallet box concepts, a branded wallet-and-belt hero, two nine-cell gift-set colour sheets and ten gift-box concepts. The fictional names and monograms demonstrate plausible blind embossing, debossing and foil treatments; no real client relationship is implied.

WhatsApp links use `https://wa.me/917303681194?text=...`. Static links are encoded at build time. Both structured forms validate required fields in the browser and compose a fresh encoded message from actual selections; the main form is positioned as a request for the 500+ design catalogue, and the visitor must still review and send it in WhatsApp.
