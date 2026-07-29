# RV Litigation Group PC — Website Project

## Project Path
`/home/codebox/Desktop/work/rvlitigation_Website-main/`

## Current State (July 28-29, 2026 — fourth session, pushed)
- **Floating CTA button** (bottom-right "CONTACT A LAWYER" pill, previously only on the 66 V2 practice-detail pages, each with its own embedded `.floating-cta` CSS in a page-level `<style>` block) now has a **global** base definition in `css/styles.css` too — `display: none` by default, `display: flex` inside `@media (max-width: 1286px)`. This makes it **mobile-only by default** for any page relying on the shared stylesheet. The 66 existing V2 pages are unaffected: their own embedded `<style>` block loads after the linked stylesheet in the cascade, so their local always-visible `display: flex` (no media guard) still wins on desktop — verified by checking `<link rel="stylesheet">` precedes `<style>` in every V2 page's `<head>`.
- **Floating CTA markup added** (mobile-only, via the new global CSS) to `index.html`, `reviews.html`, `about.html`, `civil-litigation/index.html`, `criminal-defense/index.html` — placed right after `</footer>`, before the `main.js` script tag, using the exact same markup as the V2 pages (identical SVG phone icon, `href="https://rvlitigation.com/contact"`, `<span>CONTACT A LAWYER</span>`) so the JS below treats them uniformly.
- **Floating CTA now acts as a call button on mobile, sitewide** — new JS block in `js/main.js` (added right before the Intersection Observer block) reads `window.innerWidth` on load and on resize: at ≤1286px it swaps the button to `href="tel:+14157977591"` and relabels it "CALL US" (matching the nav's plain tel: link — no copy-to-clipboard/tooltip; that's a separate, unrelated `.contact-link` component used only on the contact page for the email/phone display). Above 1286px it stays `href="https://rvlitigation.com/contact"` / "CONTACT A LAWYER". Applies everywhere `.floating-cta` exists — the 66 pre-existing V2 pages included.
- **4 new civil-litigation practice pages added**, all full V2 template (FAQPage + LegalService + BreadcrumbList schema, sticky TOC, statute blocks, examples, "how we help", FAQ accordion, related-areas, CTA):
  - `civil-litigation/employment-workplace-litigation.html` — **Employer-side only.** Prominent filter banner: "Employment matters are accepted on an hourly and retainer basis. The firm does not accept employee-side contingency cases." Deliberately does NOT mention PAGA or class-action defense as a marketed service — user flagged that as a staffing-risk area not to advertise until confirmed the firm can handle it. Covers FEHA discrimination/harassment/retaliation defense, wage/hour, B&P 16600 non-compete nuance, Labor Code 2775 ABC-test misclassification, executive agreements, trade secrets.
  - `civil-litigation/civil-lawsuit-defense.html` — "Have You Been Sued?" framing for private individuals/guarantors/business principals. Filter banner: "Private-client civil defense is handled on an hourly and retainer basis. We do not accept contingency matters or civil-rights cases." Also linked as a **homepage card** (see below), per explicit user request that this one be visible on the homepage, not just its own page.
  - `civil-litigation/urgent-injunctions-tros.html` — Narrowly scoped to TROs/preliminary injunctions/receivership/business emergencies (CCP 526/527/529/564). User explicitly said this should **replace** the site's old broad "same-day representation" positioning — that old positioning already existed only as an orphaned, unlinked `noindex` redirect stub at `same-day-onsite-representation/index.html` (removed in an earlier session, never relinked), so no cleanup was needed there; the instruction was really "keep this new page narrow, don't repeat that old broad framing."
  - `civil-litigation/outside-litigation-counsel.html` — Ongoing dispute-management retainer service for growing businesses, positioned as a middle tier between ad-hoc counsel and full in-house counsel. Less statute-heavy than the others by design (it's a service/relationship page, not a cause-of-action page) — kept the same visual scaffolding (schema, TOC, FAQ) but swapped statute blocks for an "engagement structure" comparison table.
- **Civil-litigation hub grid** (`civil-litigation/index.html`) — added all 4 as new `.practice-detail-card` entries at the end of the grid (now 22 cards total), reusing the shared `/images/Icons/CIvil_icon.png` icon like every other card in that grid.
- **Homepage** (`index.html`) — added a new "Have You Been Sued?" two-column section between the existing "Why Choose Us" and "Commitments" sections, linking to `civil-lawsuit-defense.html`. Only this one of the four gets homepage placement — the other three are reachable via the hub grid only, matching what the user actually asked for.
- **Sitemap** — all 4 URLs added under `civil-litigation/`, priority 0.8, monthly changefreq, matching sibling civil-litigation pages.
- **Nav dropdown NOT touched** — the 6-item curated Corporate & Commercial Law dropdown (set in a prior session) was left as-is; these 4 new pages are discoverable via "View All Corporate & Commercial Law →" and the new homepage card, not the dropdown preview. Revisit only if the user asks to feature any of these 4 more prominently in nav.
- Validated before handoff: HTML tag-balance parser (0 errors across all touched/new files), JSON-LD schema blocks all `json.loads()`-valid, internal `/civil-litigation/...` links all resolve to real files, all 4 new pages + the two edited index pages return HTTP 200 from a local server.

## Prior State (July 28, 2026 — third session same day, commit `66c30ff`, live on origin/main)
- **Reviews page cleanup**: emojis stripped from 4 review texts; 89 review cards reordered by text length (longest → shortest) so the 2-column grid never pairs a long card next to a very short one; `.reviews-grid` got `align-items: start` so short cards can no longer stretch to match a taller row-mate's height. 7 low-signal names (S S, G E, SirKenn SDamasig, EffiN ChriS, A N, Dhare, S "SL" L) anonymized to "Verified Client" (8 total now use that label). All-lowercase reviewer names title-cased; Kyler Kosta shortened to "Kyler K." per user request.
- **Near-miss during this pass**: a first attempt at the length-based reorder used a non-greedy regex (`.*?</div>`) to extract each review card, which matched the *first* nested `</div>` (inside the star-rating markup) instead of the card's own closing tag — silently truncated every card, dropping all review-text/review-author content. Caught via a div-tag balance count before committing; recovered with `git checkout -- reviews.html` (this session's edits weren't committed yet, so nothing was lost) and redid the four review-page edits with a depth-balanced extractor instead. If reviews.html needs card-level scripting again, extract by counting nested `<div`/`</div>` depth from each `<div class="review-card">`, not by non-greedy `.*?</div>`.

## Prior State (July 28, 2026 — late evening session, commit `a14be9c`, live on origin/main)
- **WHY CHOOSE US tagline gold-color bug fixed** — on the homepage it rendered gray because `.column-content p` (specificity 0,1,1) beat `.section-tagline`'s (0,1,0). Added `.column-content .section-tagline { color: var(--color-gold); }` in `css/styles.css`. This also fixes the same latent bug for any other `.section-tagline` sitting inside `.column-content` (e.g. attorney taglines like "FOUNDING PARTNER" on professionals.html), not just the one instance that was reported.
- **Nav hamburger breakpoint moved from 768px to 1286px** — the nav-specific rules (`.navbar`, `.nav-links`, `.dropdown-menu` mobile behavior, `.mobile-menu-btn`, `.nav-buttons`, `.mobile-call`/`.mobile-inquire`) were split out of the old `@media (max-width: 768px)` block into their own `@media (max-width: 1286px)` block in `css/styles.css`, leaving the rest of that 768px block (typography/spacing rules unrelated to nav) untouched. `js/main.js` line ~34 (`window.innerWidth <= 768` gate on dropdown click-to-expand vs hover) updated to match `1286`. If the nav ever needs further breakpoint tuning, both places must move together.
- **Mobile nav dropdown now `min-height: 100vh` when `.nav-links.active`** — background now always covers full viewport height while open, not just wraps link-list content height.
- **Chelsie Liberty reordered above Ryan Murphy** on professionals.html per user request (previously added below him in the prior session).
- **Nav dropdown practice-area links rewritten sitewide** (94 files) — Corporate & Commercial Law dropdown now: Business Litigation, Probate & Trust Litigation, Contract Disputes, Real Estate Disputes, Commercial Lease Disputes, Construction Defects. Criminal Defense dropdown now: DUI/DWI Defense, Assault & Battery Defense, White-Collar Crime, Weapons Charges, Juvenile Crime Defense, Restraining Orders. (Previous lists included Fraud Claims/Partnership Disputes and Domestic Violence/Drug Crimes/Federal Crimes/Fraud Defense — those pages still exist and are linked from the hub pages' full card grids, just no longer in the top-nav dropdown preview.)
- **62 new reviews added to reviews.html** from `~/Downloads/RVLG-Google-Reviews-Website-Export-FINAL.txt` (100 reviews in that export). Dedup logic: the 27 reviews already on the page were matched to their export originals by text content (some had been lightly cleaned/anonymized on-site, e.g. "Verified Client" = export's "Dee The Barber", "Kenyon W." = export's "DOPE AF") — see reviews.html git history for the exact mapping if the export is reprocessed later. 12 export entries had no written text (`[No written review was provided.]`); those were skipped rather than inventing quotes for real reviewers, EXCEPT the one instance already baked into the page pre-session (Natalie Cortez's placeholder "Highly Recommended!") which was left alone since editing/removing it wasn't requested. Reviews page now has 89 cards total.

## Prior State (July 28, 2026 — evening session, commit `4172414`, live on origin/main)
- **Chelsie Liberty added to professionals.html** as Associate Attorney, positioned after Ryan Murphy (Of Counsel). Uses `images/Photos/chelsiel.png`/`.webp` (regenerated to match site convention: png downsized to 800x1111, webp kept at source 1080x1500).
- **Cristy Smith photo updated** — user deleted the old `cristy_smith.png` and uploaded a genuinely new one directly via GitHub's web UI mid-session (commits `30a9d14` + `19db3ea`), separate from this repo workflow. Pulled that in via rebase before pushing, then regenerated `cristy_smith.webp` from the real new photo and downsized the png to 800x1111 to match convention. (An earlier regeneration in this same session was done against the stale photo before the GitHub-side replacement landed — don't trust "same filename" as proof a photo is current; check `git log -- <file>` for out-of-band GitHub-web-UI uploads before assuming a local file is the final version.)
- **"About Us" removed from the top nav sitewide** (94 files) and added instead as a button ("LEARN MORE ABOUT US") under the "8 Superior Service Commitments" section on the homepage. The `about.html` page itself is unchanged/still live, just no longer in nav.
- **Homepage hero copy changed** to "Serious Business Disputes Require Serious Litigation Counsel. We Fight to Protect the Interests of Businesses and Individuals in Court."
- **Homepage practice-area cards**: added an "OUR PRACTICE AREAS" tagline above them; added `.home-practice-cards` class + mobile CSS (`@media max-width: 768px`) so the two cards stack vertically instead of squishing side-by-side on phones. (The site already had a similarly-named `.practice-cards` mobile rule scoped to `max-width: 480px` only, and pointed at a class no HTML file actually used — dead CSS, left in place.)
- **Corporate law (`/civil-litigation/`) and criminal defense (`/criminal-defense/`) hub pages**: (1) trimmed the large gap between `.page-header` and the first `.content-section` by adding `padding-top: 20px` inline override on those two pages only (was ~130px combined, now ~70px) — global `.page-header`/`.content-section` CSS untouched. (2) Reordered sections: the "two-column reverse" narrative block (photo + long-form practice description) now sits *after* the Practice Areas card grid instead of before it — user confirmed this ordering explicitly when asked.
- Pushed to `origin/main` as commit `4172414` — live.

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
