# RV Litigation Group PC — Website Project

## Project Path
`/home/codebox/Desktop/work/rvlitigation_Website-main/`

## Current State (July 29, 2026 — commit `0f616d6`, live on origin/main)
- **New top-level section: `/private-civil-matters/`** — a third practice-area hub, parallel to `/civil-litigation/` and `/criminal-defense/`. Built after asking the user two scoping questions: (1) whether overlapping topics should get duplicate pages or link to existing civil-litigation pages — user chose **link to existing** to avoid duplicate/competing SEO content; (2) whether the hub should be a new top-level folder or nested under civil-litigation — user chose **new top-level folder**.
- **`civil-litigation/civil-lawsuit-defense.html` moved** to `private-civil-matters/civil-lawsuit-defense.html` via `git mv` (relative asset paths `../css/`, `../js/` unaffected — same folder depth). Canonical URL, og:url, and BreadcrumbList schema updated to the new path and parent ("Private Civil Matters" instead of "Corporate & Commercial Law"). Its card was removed from the civil-litigation hub grid (now lives only in the new hub) and both homepage links updated (practice card → hub root, "Have You Been Sued?" section CTA → the specific subpage at its new URL).
- **13 brand-new full V2-template pages** added to `private-civil-matters/` (schema, sticky TOC, statute blocks, examples, at-stake table, how-we-help, FAQ, related-areas, CTA) — personal-guarantee-loan-default, property-line-boundary-disputes, hoa-disputes, defamation-slander-libel, debt-collection-defense, civil-harassment-claims, easement-right-of-way-disputes, judgment-enforcement-debtor-exam, nuisance-claims, vehicle-property-damage-claims, wrongful-eviction-defense, elder-financial-abuse, small-claims-appeals. **Wrote the first one by hand, then switched to a Python generator** (`gen_pages.py` + a `pages_content.json` data file, both in scratchpad — not committed to the repo) for the remaining 12, feeding structured content (title/meta/statutes/examples/FAQ/etc.) through the same HTML template — far more reliable than hand-writing 12 near-identical ~600-line pages, and it's how the boilerplate stayed byte-identical across all of them.
- **`private-civil-matters/index.html` hub page** — mirrors the civil-litigation/criminal-defense hub structure (page-header, intro, 21-card practice-detail-cards grid, two-column "Have You Been Sued?" section weaving in civil-lawsuit-defense's key content, Why Choose Us values-list, FAQ, CTA). The 21-card grid = 14 own pages (the moved page + 13 new ones) + 7 cards linking out to existing civil-litigation pages for topics that already had dedicated pages (Contract Disputes, Fraud Claims, Construction Defects, Breach of Fiduciary Duty, Partnership Disputes, Probate & Trust Litigation, Quiet Title) — deliberately NOT duplicated, per the scoping decision above. All cards use the new dedicated `images/Icons/Private_CIvil_icon.png` icon (distinct from `CIvil_icon.png` used on the Corporate & Commercial Law hub), including the 7 that link to civil-litigation pages — this hub's own visual identity, not the icon of the page they link to.
- **Mobile-only nav link added sitewide** (98 files, via the same nav-links `<li>` sitewide find/replace pattern used for earlier nav changes) — `<li class="mobile-private-civil">PRIVATE CIVIL MATTERS</li>` inserted between the Criminal Defense dropdown and Reviews. Per explicit instruction: **no desktop nav-links item** — new `.mobile-private-civil` CSS class added to `css/styles.css` following the exact same `display: none` (base) / `display: block` (inside the existing `@media max-width: 1286px` block) pattern already used for `.mobile-call`/`.mobile-inquire`, so it only ever appears in the mobile hamburger menu.
- **Sitemap** — old `civil-litigation/civil-lawsuit-defense` entry removed, 15 new entries added (hub at priority 0.9, matching other hub pages; 14 subpages at priority 0.8).
- Validated before push: HTML tag-balance parser clean across all 17 touched/new pages, all JSON-LD blocks `json.loads()`-valid, all internal `/private-civil-matters/...` and `/civil-litigation/...` links resolve to real files, all pages return HTTP 200 from a local server, CSS brace count balanced, sitemap.xml parses as valid XML with exactly 15 `private-civil-matters` URLs present.

## Prior State (July 29, 2026 — commit `a2ea613`, live on origin/main)
One long working session across July 28-29, 2026, all pushed and live. User feedback at close: "everything done today was very good."

**Professionals & team:**
- Chelsie Liberty added as Associate Attorney on professionals.html, later reordered above Ryan Murphy. Uses `images/Photos/chelsiel.png`/`.webp`.
- Cristy Smith's photo replaced with a new one (regenerated `.webp`, png downsized to 800x1111 per site convention).

**Navigation:**
- "About Us" removed from the top nav sitewide (94 files), added instead as a "LEARN MORE ABOUT US" button on the homepage under the 8 Commitments section. `about.html` itself is unchanged, just no longer in nav.
- Nav dropdown practice-area sublinks rewritten to a fixed 6-item curated list per category (Corporate & Commercial Law: Business Litigation, Probate & Trust Litigation, Contract Disputes, Real Estate Disputes, Commercial Lease Disputes, Construction Defects; Criminal Defense: DUI/DWI, Assault & Battery, White-Collar Crime, Weapons Charges, Juvenile Crime Defense, Restraining Orders). Dropped items still exist as pages, just not in the dropdown preview.
- Mobile hamburger breakpoint moved from 768px to 1286px — nav-specific CSS split into its own `@media (max-width: 1286px)` block; `js/main.js`'s `window.innerWidth` check updated to match. Mobile dropdown now `min-height: 100vh` when open.
- Floating "CONTACT A LAWYER" button: on mobile (≤1286px) it now acts as a call button (`tel:` link, "CALL US" label) instead of linking to /contact — matches the nav's plain call-button behavior. New global CSS added so the button is mobile-only by default; added (mobile-only) to 5 pages that didn't have it before: home, reviews, about, and both practice hub pages. The 66 pre-existing V2 detail pages keep their original always-visible behavior via their own embedded per-page styles, which win the cascade.

**Homepage:**
- Hero copy changed to "Serious Business Disputes Require Serious Litigation Counsel. We Fight to Protect the Interests of Businesses and Individuals in Court."
- Practice-area cards: added "OUR PRACTICE AREAS" tagline, fixed mobile stacking (was squishing 2-up), then added a 3rd card "Private Civil Matters" → `civil-litigation/civil-lawsuit-defense`, using its own dedicated icon (`images/Icons/Private_CIvil_icon.png`).
- Added a "Have You Been Sued?" two-column section (between Why Choose Us and Commitments) linking to the civil lawsuit defense page.
- Fixed a CSS specificity bug where the "WHY CHOOSE US" tagline rendered gray instead of gold (`.column-content p` was beating `.section-tagline`).

**Practice hub pages (`civil-litigation/index.html`, `criminal-defense/index.html`):**
- Fixed oversized gap between page-header and content (page-scoped `padding-top` override, global CSS untouched).
- Reordered so the "two-column reverse" narrative block sits *after* the Practice Areas grid instead of before it.
- Replaced that two-column section's content with an educational "What Is Civil Litigation in California? / What Happens in a California Criminal Case?" framing (retainer/no-contingency language preserved, folded into the new copy).
- Added, below it, a 6-stage "how the process works" section (reusing the existing `.value-item` numbered-list component) and a 4-card "Key Takeaways" section (new `.takeaways-grid`/`.takeaway-card` CSS) covering strict deadlines, settlement/plea negotiation, ongoing negotiation, and litigation readiness — modeled structurally on a competitor page (wadelitigation.com) but fully original text, deliberately with no awards/accolades language since the firm has none to cite.

**4 new civil-litigation pages** (full V2 template — schema, sticky TOC, statute blocks, FAQ), all added to the hub grid (22 cards) and sitemap:
- `employment-workplace-litigation.html` — employer-side only, explicit no-employee-contingency filter banner, deliberately no PAGA/class-action marketing (staffing-risk area, not confirmed the firm can handle it).
- `civil-lawsuit-defense.html` — "Have You Been Sued?" for private individuals/guarantors/business principals; the only one of the 4 with homepage placement. Later got a "Types of Private Civil Matters We Handle" 20-item list (SEO breadth) added below its "How We Help" section.
- `urgent-injunctions-tros.html` — narrowly scoped to TROs/injunctions/receivership; deliberately not framed as broad "same-day" service (that old positioning was already a removed, orphaned redirect stub with nothing to clean up).
- `outside-litigation-counsel.html` — ongoing retainer service, less statute-heavy, service/process-oriented.
- Nav dropdown NOT updated to include these 4 — reachable via hub grid + homepage card only, per what was actually asked.

**Reviews page:** emojis stripped; 89 cards reordered by text length (longest→shortest) so the 2-col grid never pairs long/short; `align-items: start` added so short cards can't stretch. 7 low-signal names anonymized to "Verified Client" (8 total); lowercase names title-cased; Kyler Kosta → "Kyler K." Added 62 new reviews from a Google-reviews export, deduped against the 27 already live by matching text content.

**Recurring pattern this session — out-of-band GitHub uploads:** several times the user replaced an image file directly via GitHub's web UI mid-session (Cristy's photo, the shared civil icon, and the new Private Civil Matters icon), landing on `origin/main` before local edits were pushed. Always `git fetch` + check `main..origin/main` before pushing — a rejected push isn't the only sign; sometimes a `pull --rebase` is needed mid-task just to pick up an asset the user just added. Don't trust "I added X" to mean it's in the local working copy — check remote.

**Near-miss worth remembering:** a first attempt at the reviews length-based reorder used a non-greedy `.*?</div>` regex to extract each card, which matched the *first* nested `</div>` (inside the star-rating markup) instead of the card's own closing tag — silently truncated every card. Caught via a div-tag balance count before committing, recovered via `git checkout` since nothing was pushed yet. Lesson: extract nested HTML blocks by depth-counting `<div`/`</div>`, never by non-greedy regex.

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
