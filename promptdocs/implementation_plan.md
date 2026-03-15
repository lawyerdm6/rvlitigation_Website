# RV Litigation SEO Implementation Plan

## Overview
Based on the SEO Strategy Report (`seo_update.pdf`) from American Business Bureau, this plan creates individual practice area landing pages to capture high-intent search traffic, optimize URL slugs, and improve meta data across the site.

**Status: V2 ROLLOUT COMPLETED — March 10, 2026**

---

## What Was Done

### Phase 1: Criminal Defense Sub-Pages (COMPLETE)
Hub page: `/criminal-defense/index.html` → serves at `rvlitigation.com/criminal-defense/`

Created 16 individual practice area pages:

| Page | File | URL Slug | SEO Title |
|------|------|----------|-----------|
| DUI Defense | `dui-defense.html` | `/criminal-defense/dui-defense` | DUI Defense Lawyer San Jose |
| Domestic Violence | `domestic-violence.html` | `/criminal-defense/domestic-violence` | Domestic Violence Lawyer San Jose |
| Drug Crimes | `drug-crimes.html` | `/criminal-defense/drug-crimes` | Drug Crime Lawyer San Jose |
| Theft Crimes | `theft-crimes.html` | `/criminal-defense/theft-crimes` | Theft Crime Lawyer San Jose |
| Assault Defense | `assault-defense.html` | `/criminal-defense/assault-defense` | Assault Defense Lawyer San Jose |
| White-Collar Crimes | `white-collar-crimes.html` | `/criminal-defense/white-collar-crimes` | White-Collar Crime Lawyer San Jose |
| Federal Crimes | `federal-crimes.html` | `/criminal-defense/federal-crimes` | Federal Criminal Defense Lawyer California |
| Vandalism | `vandalism.html` | `/criminal-defense/vandalism` | Vandalism Defense Lawyer San Jose |
| Weapons Charges | `weapons-charges.html` | `/criminal-defense/weapons-charges` | Weapons Charges Lawyer San Jose |
| Fraud Defense | `fraud-defense.html` | `/criminal-defense/fraud-defense` | Fraud Defense Lawyer San Jose |
| Juvenile Crimes | `juvenile-crimes.html` | `/criminal-defense/juvenile-crimes` | Juvenile Crime Lawyer San Jose |
| Sex Crimes | `sex-crimes.html` | `/criminal-defense/sex-crimes` | Sex Crime Defense Lawyer San Jose |
| Hit and Run | `hit-and-run.html` | `/criminal-defense/hit-and-run` | Hit and Run Lawyer San Jose |
| Restraining Orders | `restraining-orders.html` | `/criminal-defense/restraining-orders` | Restraining Order Lawyer San Jose |
| Probation Violations | `probation-violations.html` | `/criminal-defense/probation-violations` | Probation Violation Lawyer San Jose |
| Expungement | `expungement.html` | `/criminal-defense/expungement` | Expungement Lawyer San Jose |

### Phase 2: Civil Litigation Sub-Pages (COMPLETE)
Hub page: `/civil-litigation/index.html` → serves at `rvlitigation.com/civil-litigation/`

Created 12 individual practice area pages:

| Page | File | URL Slug | SEO Title |
|------|------|----------|-----------|
| Contract Disputes | `contract-disputes.html` | `/civil-litigation/contract-disputes` | Contract Dispute Lawyer San Jose |
| Business Litigation | `business-litigation.html` | `/civil-litigation/business-litigation` | Business Litigation Lawyer San Jose |
| Real Estate Disputes | `real-estate-disputes.html` | `/civil-litigation/real-estate-disputes` | Real Estate Dispute Lawyer San Jose |
| Employment Disputes | `employment-disputes.html` | `/civil-litigation/employment-disputes` | Employment Dispute Lawyer San Jose |
| Landlord-Tenant | `landlord-tenant.html` | `/civil-litigation/landlord-tenant` | Landlord Tenant Lawyer San Jose |
| Construction Defects | `construction-defects.html` | `/civil-litigation/construction-defects` | Construction Defect Lawyer San Jose |
| Cannabis/Marijuana Law | `marijuana-law.html` | `/civil-litigation/marijuana-law` | Marijuana Lawyer San Jose |
| Zoning & Land Use | `zoning-land-use.html` | `/civil-litigation/zoning-land-use` | Zoning Lawyer San Jose |
| Insurance Claims | `insurance-claims.html` | `/civil-litigation/insurance-claims` | Insurance Claim Lawyer San Jose |
| Partnership Disputes | `partnership-disputes.html` | `/civil-litigation/partnership-disputes` | Partnership Dispute Lawyer San Jose |
| Intellectual Property | `intellectual-property.html` | `/civil-litigation/intellectual-property` | Intellectual Property Lawyer San Jose |
| Debt Collection | `debt-collection.html` | `/civil-litigation/debt-collection` | Debt Collection Lawyer San Jose |

### Phase 3: SEO Optimizations (COMPLETE)
1. Updated meta titles on ALL existing pages to include "San Jose" location keyword
2. Rewrote meta descriptions with call-to-action language and location keywords
3. Updated OG (Open Graph) tags across all existing pages
4. Updated `sitemap.xml` — expanded from 7 URLs to 37 URLs
5. Updated `our-practice.html` — practice cards now link to hub pages + added "View All Services" buttons
6. Updated `index.html` — practice cards link to hub pages, structured data updated with new URLs
7. Internal cross-linking — each sub-page has a "Related Practice Areas" section linking to 3 sibling pages

### Phase 4: CSS Updates (COMPLETE)
Added new component styles to `css/styles.css`:
- `.practice-links-grid` / `.practice-link-card` — card grids on hub pages
- `.law-info-box` — gold-bordered callout boxes for California law references
- `.penalty-table` — styled tables for charges and penalties
- `.breadcrumb` — breadcrumb navigation on sub-pages
- `.related-practices` / `.related-practice-link` — related practice area cross-links
- All components are responsive (768px breakpoint)
- Fixed pre-existing CSS syntax error (closing `]` instead of `}` on social-icons rule)

---

## Files Modified (Existing)

| File | Changes |
|------|---------|
| `index.html` | Title, meta description, OG tags, practice card links → hub pages, structured data URLs |
| `our-practice.html` | Title, meta description, practice card links → hub pages, "View All Services" buttons on criminal/civil sections |
| `about.html` | Title, meta description |
| `contact.html` | Title, meta description |
| `professionals.html` | Title, meta description |
| `reviews.html` | Title, meta description |
| `css/styles.css` | New component styles + syntax fix |
| `sitemap.xml` | Added 30 new URLs |

## Files Created (New)

| Directory | Count | Description |
|-----------|-------|-------------|
| `criminal-defense/` | 17 files | Hub page + 16 practice area sub-pages |
| `civil-litigation/` | 13 files | Hub page + 12 practice area sub-pages |
| **Total** | **30 files** | |

---

## Page Template Versions

### V1 — Original Template (RETIRED — replaced by V2 on March 10, 2026)

The initial batch of pages uses a simpler brochure-style layout:

```
1. <head> — SEO meta tags, OG tags, canonical URL, Google Fonts
2. <header> — Identical navigation bar
3. <section class="page-header"> — Practice area name + tagline
4. <section class="content-section"> — Overview (two-column with image)
5. <section> — California law specifics (statutes, penalties, paraphrased)
6. <section> — "How We Defend" / our approach (4 strategy items)
7. <section> — Related Practice Areas (3 cross-links)
8. <section> — CTA "Ready to Discuss Your Case?" + INQUIRE NOW button
9. <footer> — Identical footer (logo, social, copyright, disclaimer)
10. <script> — main.js
```

### V2 — Enhanced "Shouse-Style" Template (prototype: `assault-defense.html`)

**Status: ROLLED OUT — March 10, 2026 — applied to all 28 sub-pages (16 criminal + 12 civil)**

This template walks the reader through the charge like a legal guide, inspired by sites like shouselaw.com. It uses a long-form article layout with a sticky sidebar TOC.

```
1.  <head> — SEO meta tags, OG tags, canonical URL, Google Fonts
              + JSON-LD FAQ schema (for Google rich snippets)
              + JSON-LD LegalService schema
              + JSON-LD BreadcrumbList schema
              + <style> block with page-specific component styles
2.  <header> — Navigation bar
3.  <nav class="breadcrumb"> — Home > Criminal Defense > [Page]
4.  <section class="page-header"> — Penal code number + title + tagline
5.  Penalties at a Glance — 4 quick-reference cards (jail time, strike status)
6.  Article layout (two-column: article-body + sticky TOC sidebar)
    6a. "What Are [X] Charges?" — Intro summary + image (two-column)
    6b. "What the Law Says" — Blockquoted statute text for each relevant PC section
                               with <cite> tags + plain-English breakdown after each
    6c. "Real-World Examples" — 3–4 scenario cards showing how charges arise
    6d. "Penalties" — Full HTML table (charge, classification, jail/prison, fine)
                      + paragraph on collateral consequences (strikes, immigration, etc.)
    6e. "Legal Defenses" — 5–6 defenses, each as its own mini-section with heading
                           and detailed explanation of how the defense works
    6f. "Frequently Asked Questions" — 5 Q&As in collapsible accordion
    6g. "Related Offenses" — 4 linked cards to sibling pages
7.  Sticky TOC sidebar — "On This Page" nav with scroll-aware active highlighting
8.  CTA section — "Facing [X] Charges?" + INQUIRE NOW
9.  Footer
10. Floating CTA button — Fixed bottom-right "CONTACT A LAWYER" (gold, always visible)
11. <script> — main.js + FAQ accordion logic + TOC scroll spy
```

#### What V2 adds over V1:
| Feature | V1 | V2 |
|---------|----|----|
| Breadcrumb navigation | No | Yes (with schema) |
| Statute blockquotes | No | Yes (gold left-border, `<cite>` tag) |
| Penalties at a Glance | No | Yes (4 summary cards at top) |
| Penalty table | No | Yes (full HTML table) |
| Real-world examples | No | Yes (3–4 scenario cards) |
| Named defenses with detail | 4 short items | 5–6 full paragraphs |
| Sticky TOC sidebar | No | Yes (scroll-aware, hides on mobile) |
| FAQ accordion | No | Yes (5 Q&As, click to expand) |
| JSON-LD FAQ schema | No | Yes (Google rich snippet eligible) |
| JSON-LD BreadcrumbList | No | Yes |
| Floating CTA button | No | Yes (gold, bottom-right corner) |
| Print-friendly CSS | No | Yes (`@media print` hides nav/footer, white bg) |
| Mobile responsive | Basic (from global CSS) | Full (3 breakpoints: 900/768/480px, scroll table, word-wrap) |
| Content depth | ~700 words | ~2,000+ words |

#### V2 Page-Specific Styles (embedded in `<style>` block)
These styles are scoped to the page via `<style>` in the `<head>`, not in the global `styles.css`:
- `.page-toc` / `.page-toc-wrapper` — Sticky sidebar table of contents
- `.article-layout` / `.article-body` — Two-column article + sidebar grid
- `.statute-block` — Gold-bordered blockquote for statute text
- `.penalty-glance` / `.penalty-glance-item` — Quick-reference penalty cards
- `.example-card` — Scenario example cards
- `.defense-item` — Individual defense sections
- `.penalties-table` — Styled charge/penalty table
- `.faq-section` / `.faq-item` / `.faq-question` / `.faq-answer` — Accordion FAQ
- `.floating-cta` — Fixed bottom-right contact button
- `.table-scroll-wrapper` — Horizontal scroll container for penalties table on mobile
- `.related-offenses-grid` — Grid for related offense cards (single-column on mobile)
- `@media (max-width: 900px)` — Hides sidebar, single-column article layout
- `@media (max-width: 768px)` — Full mobile layout: reduced padding, smaller fonts, word-wrap, scroll wrapper for table, single-column two-column overrides, smaller statute blocks/example cards/FAQ
- `@media (max-width: 480px)` — Small phone: tighter padding, smaller text, floating CTA becomes icon-only circle
- `@media print` — Print stylesheet (hides nav/footer, white bg, expands all FAQs)

#### V2 JavaScript (embedded before `</body>`)
Two small scripts added inline:
1. **FAQ accordion** — Click handler toggles `.open` class on `.faq-item`, sets `aria-expanded`
2. **TOC scroll spy** — `scroll` event listener checks which `h2[id]` is in view, toggles `.active` on matching TOC link

---

## Image Paths

**Convention:** All sub-pages use **absolute paths** (`/images/...`, `/favicon.ico`) for images and favicons. This is the correct approach for GitHub Pages, where the site is served from a domain root.

- Images: `src="/images/Photos/Criminal Defense.png"`
- Favicons: `href="/favicon.ico"`, `href="/images/Favicon/favicon-32x32.png"`
- CSS: `href="../css/styles.css"` (relative — one directory up)
- JS: `src="../js/main.js"` (relative — one directory up)

**Note:** Absolute image paths do NOT work when opening HTML files locally via `file://` protocol. To test locally, use a local server (e.g., `python3 -m http.server` from the project root, or VS Code Live Server extension).

---

## Mobile Responsiveness (V2 Template)

The V2 template (`assault-defense.html`) has three mobile breakpoints:

| Breakpoint | Key Changes |
|------------|-------------|
| `900px` | Article layout goes single-column, TOC sidebar hidden, heading sizes reduced |
| `768px` | Content padding reduced (40px → 20px), text `word-wrap: break-word`, penalties table wrapped in `.table-scroll-wrapper` with `overflow-x: auto`, two-column sections forced to single-column, statute blocks/example cards get smaller padding, font sizes reduced, related offenses grid goes single-column, FAQ question text smaller |
| `480px` | Content padding reduced further (15px), text/heading sizes reduced again, floating CTA becomes icon-only circle |

**Key mobile fix:** The penalties table is wrapped in a `<div class="table-scroll-wrapper">` which allows horizontal scrolling on small screens instead of breaking the page layout. The table itself has `min-width: 540px` so it remains readable when scrolled.

---

## Key Conventions
- CSS path: `../css/styles.css` (pages are one directory deep)
- JS path: `../js/main.js`
- Image paths: `/images/...` (absolute — for GitHub Pages)
- Favicon paths: `/favicon.ico`, `/images/Favicon/...` (absolute)
- Criminal defense pages use `/images/Photos/Criminal Defense.png` as the section image
- Civil litigation pages use `/images/Photos/Civil Litigation.png` as the section image
- All content is original/paraphrased — not copied from any source
- Location keywords woven naturally across 25 cities and 7 counties (see expanded list below)
- V1 pages: 650–850 words | V2 pages: 2,000+ words

### Expanded Location List (V2 Rollout — March 10, 2026)

**Cities (25):** San Jose, San Francisco, Oakland, Gilroy, Morgan Hill, San Martin, Santa Clara, Sunnyvale, Fremont, Palo Alto, Mountain View, Redwood City, Livermore, Pleasanton, Dublin, Hayward, Berkeley, Walnut Creek, Concord, Daly City, San Mateo, Santa Cruz, Salinas, Monterey

**Counties (7):** Santa Clara County, Alameda County, San Mateo County, Marin County, Contra Costa County, Monterey County, San Francisco County

**Integration strategy:**
- Each page's 3–4 example scenarios are set in different cities
- Intro/overview mentions 3–4 key cities + "throughout the Bay Area"
- Law/penalties sections reference counties where courts operate
- No page lists all 25 cities; no city repeated more than 2–3 times per page

---

## How to Add a New Practice Area Page

1. Copy the V2 prototype (`criminal-defense/assault-defense.html`)
2. Update the `<head>` section: title, meta description, keywords, canonical URL, OG tags
3. Update the JSON-LD schemas (FAQ questions/answers, LegalService description, BreadcrumbList)
4. Update the page header — penal code number, `<h1>`, and tagline
5. Update the Penalties at a Glance cards
6. Write new content: overview, statute blockquotes, examples, penalty table, defenses, FAQ
7. Update the "Related Offenses" links at the bottom
8. Update the TOC sidebar links to match section `id`s
9. Add the page to the hub page's card grid (`criminal-defense/index.html` or `civil-litigation/index.html`)
10. Add the URL to `sitemap.xml`

---

## Completed Milestones

| Date | Milestone |
|------|-----------|
| March 9, 2026 | V1 pages created (30 sub-pages), SEO meta updates, sitemap, CSS components |
| March 9, 2026 | V2 template prototyped and approved (`assault-defense.html`) |
| March 10, 2026 | V2 rollout to all 28 sub-pages (16 criminal + 12 civil). Location SEO expanded to 25 cities + 7 counties. Civil pages adapted: "Case Snapshot", "What's at Stake", "How We Help". |
| March 10, 2026 | Hub page unification: criminal hub cards switched from inline dark styles to `.practice-detail-card` class matching civil hub. Added `background-color: #f5f0e0` hover to `.practice-detail-card:hover` in global CSS. |

---

## Next Steps (Prioritized Backlog)

### Priority 1 — QA & Polish
- [ ] **Visual QA pass** — Open each V2 page in a browser (`python3 -m http.server` from project root). Check: images load, layout correct on desktop + mobile, FAQ accordion works, TOC scroll spy works, all links valid
- [ ] **Content QA** — Spot-check 5–6 pages for legal accuracy, grammar, and natural location integration. Ensure no duplicate example scenarios across similar pages
- [ ] **Hub page updates** — Verify `criminal-defense/index.html` and `civil-litigation/index.html` link to all sub-pages with updated descriptions matching V2 content
- [ ] **Move V2 styles to global CSS** — The `<style>` block is currently duplicated in all 28 pages. Consider extracting to a shared `css/v2-article.css` to reduce page weight and make future style changes easier. Low risk — just link the new CSS file and remove inline styles.

### Priority 2 — Navigation & UX
- [ ] **Navigation dropdowns** — Add dropdown menus under "OUR PRACTICE" in the nav bar. Currently links go to hub pages only; dropdowns should show all sub-pages organized by Criminal Defense / Civil Litigation
- [ ] **Breadcrumb styling** — Ensure `.breadcrumb` styles in global `css/styles.css` match the V2 breadcrumb appearance (may need updating since V2 pages define breadcrumb inline)

### Priority 3 — New Content
- [ ] **Location pages** — Create city-specific landing pages: `/san-jose/`, `/san-francisco/`, `/oakland/`, `/santa-clara-county/`, etc. These pages would aggregate all practice areas served in that location, improving local SEO
- [ ] **Blog page** — Create `/blog/` infrastructure for keyword-rich articles and backlink building
- [ ] **Resources page** — California penal codes, jail info, inmate lookup links, court addresses
- [ ] **FAQ page** — Centralized FAQ page pulling from all practice area FAQs, with additional location-targeted questions

### Priority 4 — Nice to Have
- [ ] **Spanish translation** — Full site translation (mentioned as optional in SEO report)
- [ ] **Sitemap update** — If new pages are added (location pages, blog, resources), update `sitemap.xml`
- [ ] **Google Search Console** — Submit updated sitemap, monitor FAQ rich snippet appearance
- [ ] **Performance audit** — Check page load times, image optimization, Core Web Vitals
