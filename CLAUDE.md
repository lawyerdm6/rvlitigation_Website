# RV Litigation Group PC — Website Project

## Project Path
`/home/codebox/Desktop/work/rvlitigation_Website-main/`

## Current State (July 28, 2026 — evening session, not yet pushed)
- **Chelsie Liberty added to professionals.html** as Associate Attorney, positioned after Ryan Murphy (Of Counsel). Uses `images/Photos/chelsiel.png`/`.webp` (regenerated to match site convention: png downsized to 800x1111, webp kept at source 1080x1500).
- **Cristy Smith photo updated** — `cristy_smith.png` was overwritten with a new photo (same filename); `cristy_smith.webp` regenerated from it to match.
- **"About Us" removed from the top nav sitewide** (94 files) and added instead as a button ("LEARN MORE ABOUT US") under the "8 Superior Service Commitments" section on the homepage. The `about.html` page itself is unchanged/still live, just no longer in nav.
- **Homepage hero copy changed** to "Serious Business Disputes Require Serious Litigation Counsel. We Fight to Protect the Interests of Businesses and Individuals in Court."
- **Homepage practice-area cards**: added an "OUR PRACTICE AREAS" tagline above them; added `.home-practice-cards` class + mobile CSS (`@media max-width: 768px`) so the two cards stack vertically instead of squishing side-by-side on phones. (The site already had a similarly-named `.practice-cards` mobile rule scoped to `max-width: 480px` only, and pointed at a class no HTML file actually used — dead CSS, left in place.)
- **Corporate law (`/civil-litigation/`) and criminal defense (`/criminal-defense/`) hub pages**: (1) trimmed the large gap between `.page-header` and the first `.content-section` by adding `padding-top: 20px` inline override on those two pages only (was ~130px combined, now ~70px) — global `.page-header`/`.content-section` CSS untouched. (2) Reordered sections: the "two-column reverse" narrative block (photo + long-form practice description) now sits *after* the Practice Areas card grid instead of before it — user confirmed this ordering explicitly when asked.
- Not yet committed/pushed as of this memory update — confirm with user before pushing (this repo's pushes are treated as live-site publishes, see [[rvlitigation-website]] memory).

## Prior State (July 28, 2026, morning — commit `f6aac24`)
- **"Civil Litigation" renamed to "Corporate & Commercial Law" sitewide** (nav, hub page, breadcrumbs, location pages, schema/meta, key paragraphs) — the `/civil-litigation/` URL path was deliberately kept unchanged. Commit `f6aac24`.
- **Homepage refined**: "Why Choose Us" copy replaced with a firm-pedigree quote (old Firm Quote section removed as redundant); hero subhead simplified to "We help individuals and businesses win in court"; reviews section moved higher with a "100+ 5-star Google reviews" callout (also added to reviews page); "Our Practice Areas" links folded into the homepage intro section.
- Live at commit `f6aac24` on `origin/main` as of July 28, 2026. (A same-day follow-up commit `5948bdf` added an image via GitHub's web upload UI, not through this repo workflow.)

## Prior State (July 16, 2026)
- **Site is now civil-litigation-first.** Per `promptdocs/RVLG_Website_Repositioning_Claude_Prompt_Pack.docx` (see `promptdocs/implementation_plan.md` → "Civil-Litigation-First Repositioning" for full detail), the site now leads with Civil Litigation / Business Disputes everywhere — homepage title/meta/hero, top nav order, CTA copy. Criminal Defense is **partially demoted**: still in the top nav (reordered after Civil Litigation) but page content/charge-grid untouched — this was a deliberate lighter-touch choice vs. the source doc's "move to footer only" recommendation.
- **Employment Disputes & Wage/Hour Claims pages removed** (July 16, 2026) — converted to noindex redirect stubs, same pattern as the June 23 removals. Note: these two were *deliberately kept* in the June 23 pass; this later doc reversed that call.
- **Business Litigation / Commercial Lease Disputes / Real Estate Litigation still live under `/civil-litigation/...`** — NOT promoted to top-level URLs (`/business-litigation/` etc.) despite the repositioning doc suggesting it for PPC landing pages. Explicitly deferred — revisit only if dedicated PPC campaigns are planned.
- **Contact form has a practice-area dropdown but NOT a retainer-acknowledgment checkbox** — the checkbox was built per the doc, then explicitly removed before the July 16 push per user instruction. Don't re-add without asking.
- **"Free consultation" language removed sitewide** (contact page + all 15 location pages) — inconsistent with retainer-only positioning.
- Live at commit `dc32ba0` on `origin/main` as of July 16, 2026.

## Prior State (June 23, 2026)
- **Practice areas: Criminal Defense + Civil Litigation ONLY.** Firm no longer does Personal Injury or contingency-fee work.
- **V2 template** = long-form "Shouse-style" article layout with sticky TOC, FAQ accordion, JSON-LD schemas, statute blockquotes, penalty tables, real-world examples, floating CTA
- **Personal Injury PERMANENTLY REMOVED (June 23, 2026)** — The old `PI REMOVED START/END` comment markers were fully stripped (not just hidden). All 11 `/personal-injury/*.html` pages are now `noindex` redirect stubs → `/our-practice`. Every PI link, card, keyword, schema offer, and prose reference removed site-wide. All "contingency / no fee unless we win" language removed too.
- **5 Civil services REMOVED (June 23, 2026)** — `ada-compliance`, `consumer-protection`, `debt-collection`, `intellectual-property`, `fraud-claims` (civil fraud). Pages are now `noindex` redirect stubs → `/civil-litigation/`. Removed from the civil hub (now 23 cards), sibling "Related Practice Areas" blocks, and sitemap. Criminal `fraud-defense.html` is unaffected (kept).
- **Intentionally LEFT (factual/accurate, not service marketing):** generic "consumer protection statute" references describing the UCL/Song-Beverly law on `unfair-business-practices.html` + `breach-of-warranty.html`; "California Civil Rights Department (CRD)" — the actual state agency for FEHA filings — on `employment-disputes.html`.
- **Location pages** — 10 city pages + 5 county pages + hub page live at `/locations/`
- **Hub pages unified** — Both criminal & civil hub cards use `.practice-detail-card` class with cream bg + gold hover (`#f5f0e0`)
- **Location pages** — 10 city pages + 5 county pages + hub page live at `/locations/`
- **Hub pages unified** — Both criminal & civil hub cards use `.practice-detail-card` class with cream bg + gold hover (`#f5f0e0`)

## Key Files
| File | Purpose |
|------|---------|
| `criminal-defense/assault-defense.html` | V2 template reference (the original prototype) |
| `promptdocs/implementation_plan.md` | Full implementation history + conventions + future work |
| `promptdocs/subpage_emplate.md` | Content structure guide (V1-era, still useful for content planning) |
| `css/styles.css` | Global styles (nav, footer, hub pages, V1 components) |
| `js/main.js` | Mobile menu toggle + global JS |
| `sitemap.xml` | All URLs (PI URLs currently commented out) |

## Architecture
```
/ (root)
├── index.html                    # Homepage
├── about.html, contact.html, etc # Top-level pages
├── criminal-defense/
│   ├── index.html                # Hub page (card grid)
│   └── [16 practice pages].html  # All V2 template
├── civil-litigation/
│   ├── index.html                # Hub page (card grid)
│   └── [12 practice pages].html  # All V2 template
├── personal-injury/              # HIDDEN — pages intact but unlinked
│   ├── index.html                # Hub page
│   └── [10 practice pages].html  # All V2 template
├── locations/
│   ├── index.html                # Hub page (city/county grid)
│   └── [15 location pages].html  # 10 cities + 5 counties
├── faq/index.html                # FAQ page (PI section commented out)
├── blog/                         # Blog infrastructure
├── css/styles.css                # Global CSS
├── js/main.js                    # Global JS
└── images/                       # All images (absolute paths: /images/...)
```

## Conventions
- **CSS**: `../css/styles.css` (relative from sub-pages)
- **JS**: `../js/main.js` (relative)
- **Images**: `/images/...` (absolute — for GitHub Pages)
- **V2 page styles**: embedded `<style>` block in each page's `<head>` (not in global CSS)
- **V2 JS**: inline `<script>` before `</body>` (FAQ accordion + TOC scroll spy)
- **Criminal image**: `/images/Photos/Criminal Defense.png`
- **Civil image**: `/images/Photos/Civil Litigation.png`
- **Phone**: (415) 797-7591
- **Fonts**: Cormorant Garamond (serif headings) + Montserrat (sans body)

## Recent Changes (March 23, 2026)
- Fixed nav dropdown disappearing on hover — replaced `margin-top` gap with `padding-top` on `.dropdown-menu`
- Fixed squished contact form on mobile — removed `white-space: nowrap` from `.form-title`, ensured form wrapper/form take full width

## What to Work on Next
See `promptdocs/implementation_plan.md` → "Next Steps" section for the V2/SEO backlog, and → "Civil-Litigation-First Repositioning" for what's still open from the July 16 doc.

**Quick summary of high-value next items:**
1. QA pass — visual review of V2 pages in browser, fix any formatting issues
2. Restore PI when ready — search `PI REMOVED START`, unwrap comments, re-add JSON-LD entries
3. Blog/resources expansion
4. Google Ads negative keyword list (repositioning doc Section 7) — account-level task, not a website change; not started
5. Decide on Business Litigation / Commercial Lease / Real Estate Litigation URL promotion (deferred July 16) if PPC campaigns get planned
6. SEO metadata pass on remaining pages not touched by the July 16 repositioning
