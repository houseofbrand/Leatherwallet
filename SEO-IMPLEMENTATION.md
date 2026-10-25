# SEO implementation summary

## Search-intent architecture

The 100 supplied keywords are mapped in `keyword-map.csv`. Close variants share one authoritative landing page; new pages were created only for materially different search intent.

| Landing page | Primary intent |
| --- | --- |
| `/` | leather wallet manufacturer |
| `/leather-wallet-manufacturer-india/` | leather wallet manufacturer India and international sourcing |
| `/private-label-wallet-manufacturer/` | private label wallet manufacturer |
| `/oem-wallet-manufacturer/` | OEM wallet manufacturer and deeper custom development |
| `/custom-logo-wallets/` | custom logo leather wallets and embossed/debossed branding |
| `/low-moq-wallet-manufacturer/` | low MOQ wallet manufacturer |
| `/wholesale-wallets/` | wholesale leather wallet manufacturer |
| `/wallet-collection/` | leather wallets wholesale and 500+ catalogue discovery |
| `/mens-wallet-manufacturer/` | men's leather wallet manufacturer |
| `/womens-wallet-manufacturer/` | women's wallet manufacturer |
| `/bifold-wallet-manufacturer/` | bifold wallet manufacturer |
| `/trifold-wallet-manufacturer/` | trifold wallet manufacturer |
| `/slim-wallet-manufacturer/` | slim wallet manufacturer |
| `/cardholder-manufacturer/` | leather cardholder manufacturer |
| `/leather-long-wallet-manufacturer/` | leather long wallet manufacturer |
| `/zip-around-wallet-manufacturer/` | zip around wallet manufacturer |
| `/custom-wallet-packaging/` | custom wallet packaging and branded wallet boxes |
| `/leather-wallet-belt-gift-set-manufacturer/` | leather wallet and belt gift set manufacturer |
| `/corporate-gift-wallets/` | corporate leather wallet gifts wholesale |
| `/resources/` | buyer education for private label, MOQ, branding, packaging and bulk ordering |

## Technical implementation

- Unique titles, descriptions, canonical URLs and H1 headings are validated during the build check.
- Important pages explicitly use `index,follow,max-image-preview:large`.
- Open Graph and Twitter card metadata use absolute image URLs.
- Organization, WebSite and BreadcrumbList structured data are emitted globally. WebSite SearchAction points to the functional catalogue query experience.
- The About page adds visible Person data; the FAQ page adds FAQPage data matching visible answers.
- The sitemap contains every generated route and `robots.txt` links to it.
- Internal references, mapped landing pages, JSON-LD, image assets and WhatsApp destinations are checked automatically.
- Contextual WhatsApp links include a relevant pre-filled message and the visitor must send it.
- Conversion elements expose optional data-layer events without inventing GA4 or Search Console IDs.
- The collection’s search and filters operate on verified category directions while the broader 500+ range remains a qualified catalogue-request claim.

## Remaining launch actions

1. Verify the production domain in Google Search Console and submit `/sitemap.xml` after deployment.
2. Configure consent-aware GA4 or Tag Manager only after the real measurement ID is available.
3. Mark outbound WhatsApp and generated enquiry events as lead indicators, not confirmed sales.
4. Validate the 100-keyword priorities using Keyword Planner and actual Search Console impressions, clicks and queries.
5. Review index coverage, Core Web Vitals and conversion rate by landing page after sufficient real traffic exists.
