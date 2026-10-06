# Current instruction — approved surgical draft, October 5, 2026

- Kris is supervising and explicitly authorized implementation in this conversation. Future discussions with David alone do not authorize website changes. Ask for Kris's confirmation when a new session starts or the person supervising changes. If Kris leaves, pause website work.
- If the user sends `looch` as an override command, record its activation time and allow work without Kris for 24 hours. Merely quoting or defining the command does not activate it. No override is active as of this draft.
- Work only on `draft/practice-areas-2026-10-05`, based on restored main `9f28afa1be945ebeb4ec7ede1d0decdf7bac799c`. Keep `backup/pre-rebuild-2026-10-05` immutable. Do not publish or merge without a final preview and explicit approval from Kris (or an active override).
- Latest user instructions supersede the attached handoff where they differ: PREPEND Business Litigation, Business Transactions, Tax Law and White-Collar Defense cards; RETAIN Corporate & Commercial Law, Criminal Defense and Private Matters cards and their retained services. Do not retire the general criminal library or reduce private services to small claims alone.
- Preserve the hero/video, photos, portraits, reviews, typography, colors and existing components. Use original hub and V2 service templates. One Practice Areas dropdown links the four priority hubs and View All Practice Areas. Outside practice pages, only targeted text/link/intake-choice updates are authorized.
- Remove named services only: probate, personal guarantees, debt defense, defamation, HOA/boundary matters, residential eviction and elder abuse. Preserve commercial leases, employer-side employment, small-claims advice/appeals, and private services not individually approved for removal.
- Reduce "civil" in marketing text while retaining accurate legal terms. Keep existing service URLs where no actual content move is needed. Moved content needs a direct immediate HTML redirect and destination canonical; unrelated removals should return 404. Never redirect private services indiscriminately to tax or small claims.
- Preserve the FormSubmit recipient and address: 28 Geary St, Suite 650, San Francisco, CA 94108. Do not submit real test inquiries, invent qualifications/results, promise free consultations, or reintroduce the retainer checkbox.
- Draft implementation and verification are complete. Review PR #3: https://github.com/lawyerdm6/rvlitigation_Website/pull/3 . It is a draft, has not been merged, and has no deployment. Publication approval is still required.

## Statewide SEO and qualified inquiries — October 5, 2026

Kris authorized implementing the statewide SEO recommendation and additional targeted SEO improvements for higher-value clients. These changes remain a separate unpublished draft; prior instructions to preserve design and require publication approval still apply.

- Reconciled local-only titles, descriptions and firm introductions across active practice/service pages with California service coverage and the actual San Francisco office. Preserved local examples and court-specific discussion. Existing service and location URLs, canonicals and sitemap membership are unchanged; substantive edits received the actual October 5 lastmod date.
- Reworked all 16 existing location pages within their original layouts. The hub describes statewide service and links the original city/county resources. Local pages distinguish service areas from the single real office, prioritize business/transactions/tax/white-collar links, retain appropriate criminal/private services, and use official court directories for location resources. Removed inherited free-consultation, 24/7, unsupported local-experience and retired-service promises.
- Improved business-service descriptions, cross-links between related disputes and transactions, and inquiry prompts for client role, parties, business issue and deadlines. Contact links to the service-area hub and FAQs; homepage and About copy link to statewide coverage. About no longer advertises personal injury. Employer-side employment copy consistently excludes individual employee representation, including executives as employees; employer-side executive-agreement disputes remain.
- Consolidated homepage firm structured data under `https://rvlitigation.com/#firm`, with its actual San Francisco address and California service area. Service pages reference that provider rather than implying separate offices. Replaced the incorrect business-type schema for David with Person and a link to his actual biography; linked his verified State Bar profile (Bar No. 338954) from the existing admission line. No credentials, review labels, results, offices or specialty certifications were invented.
- Aligned existing FAQ structured answers with the visible text, resolving 23 inherited mismatches. This is consistency maintenance, not an FAQ-rich-result promise. Google discontinued FAQ rich results in May 2026. The remaining inherited substantive legal content has not received an exhaustive attorney audit.
- Made robots rules consistent so crawlers can retrieve the thank-you page's existing noindex directive. Added the existing Contact title as its H1 with the same class/style. A single min-width rule prevents the form wrapper from overflowing at 320px.
- Added a lossless WebP alternative for the existing below-fold on-site photograph, with lazy loading and dimensions. Decoded pixels and dimensions are identical; bytes decrease from 1,528,336 to 941,012 (38.43%). Original PNG remains. Homepage hero/video and general visual design are unchanged.
- Verification: 145 HTML files and 120 canonical indexable URLs; no introduced errors/warnings, 16 inherited low-priority notices remain. No duplicate/empty active titles or descriptions; all Service provider references and local firm addresses are consistent. Representative 12-page browser checks at 320/390/1366px confirmed images and responsive content; the Contact overflow was corrected. About's inherited Instagram placeholder embeds still need real post URLs or the user's choice to retain only the profile link; their small-phone overflow is not claimed fixed.
- Search Console availability has been requested, so no search-performance baseline or ranking/lead improvements are claimed. No analytics vendor, account settings, new city pages, live deployment, merge or paid promotion was added. The user was also asked which real Instagram posts to feature or whether to keep only the existing profile link.

Sources: Google Search Essentials; title-link and LocalBusiness documentation; Google noindex guidance; Schema.org Service/Attorney definitions; https://apps.calbar.ca.gov/attorney/Licensee/Detail/338954 . Business-litigation state-court process wording references official California Courts guidance linked in the page. Location resource URLs come from the relevant official court directories. Draft PR #3 remains the review/publishing boundary.

## Centered practice service cards — October 5, 2026

Kris requested centered service-card rows on every practice hub. The shared `.practice-detail-cards` component now uses wrapping flex with centered rows and consistent card widths, including incomplete final rows. Existing three-column desktop, two-column tablet and one-column phone breakpoints, spacing, colors, typography, content and links are preserved. This applies to Business Litigation, Business Transactions, Tax Law, White-Collar Defense, Corporate & Commercial Law, Criminal Defense and Private Matters; homepage and Our Practice directory components are separate.

- Browser measurements passed for all seven hubs at 320, 390, 768, 1024 and 1366px: centered final rows, consistent card widths, centered content and no horizontal document overflow. Tax Law's final row was visually inspected.
- Full source validation: 145 HTML files, 120 canonical sitemap URLs, zero introduced errors or warnings; `git diff --check` passes.
- User separately asked whether statewide California SEO needs more location references and required an answer before implementation. No geographic wording, metadata, schema, location pages or URLs were changed. Recommended reconciling older Bay Area-only statements with truthful statewide availability, preserving the actual San Francisco office and useful local content, rather than inserting city lists.
- Saved on the existing draft branch and PR #3 only. Main and the immutable backup remain unchanged; no merge or deployment is authorized.

## Our Practice page refinement — October 5, 2026

Kris explicitly requested two new `two-column reverse` sections on `/our-practice`, appropriate imagery for those sections and Corporate & Commercial Law, and uniform centered directory cards.

- Added Business Litigation and White-Collar Defense sections before the existing Criminal Defense section, using the same reverse two-column component, typography and service-link buttons. Their blurbs describe already-listed services and link directly to the respective hubs.
- Added three optimized, illustrative photographs: `images/Photos/practice-business-litigation.webp` (courthouse architecture), `practice-white-collar-defense.webp` (financial-records review), and `practice-corporate-law.webp` (agreement in a conference setting), each with a JPEG fallback. They were generated with the built-in image tool and do not depict the firm's real offices, personnel, clients or case documents. Original images remain in the repository; the corporate section's chess image reference was replaced only on this page. Each new image has descriptive alternative text, intrinsic dimensions and lazy loading.
- The seven Our Practice directory cards now use wrapping flex, equal 280px minimum heights and a shared title area, with the last card centered. The page's obsolete `services-grid` class was removed so its mobile overrides do not conflict with the scoped directory layout. Homepage card styling is unchanged.
- Shortened the existing corporate button's mobile label to `CORPORATE LAW SERVICES` to prevent overflow at 320px; its destination and desktop label are unchanged.
- Validation: full source checker passes with 145 HTML files, 120 canonical sitemap URLs and zero introduced errors/warnings. Browser checks at 320/390/768/1024/1366px show equal card heights and centered final row. All three section photos load, mobile layouts stack image before text, and the three practice-section buttons reach their intended hubs. At 320px the document has no horizontal overflow. URLs, canonicals and sitemap membership are unchanged; the current Our Practice `lastmod` already equals the edit date.
- These changes remain in draft PR #3. Main, backup, homepage hero, existing portraits, navigation and form destinations remain unchanged. No merge or deployment is authorized or performed.

## Requested refinement — October 5, 2026 evening review

Kris reviewed the local draft and requested uniform centered homepage cards, the selected icons, more services in the new practices, and working dropdown links. These refinements remain on the same separate unpublished draft and PR #3; no publication approval has been given.

- Homepage cards now use a centered wrapping flex layout with consistent 240px square cards. Wide screens show the four priority cards above the three retained cards; narrower rows remain centered. Introductory text retains its prior 820px width. Existing card colors, type, borders and hover styling remain.
- Installed four selected transparent 256px PNG assets: `images/Icons/business-litigation.png` (briefcase/gavel), `business-transactions.png` (contract/pen), `tax-law.png` (tax document/scales), and `white-collar-defense.png` (suit/shield). Homepage, practice directory, business overview and the four primary hubs use the appropriate icons. Original category icons remain for the three retained homepage practices.
- Fixed desktop dropdown focus CSS. The previous focus rule replaced horizontal centering with a vertical transform, moving the menu under the pointer during clicks. Desktop focus now reveals the menu without changing its position; mobile behavior is unchanged. No JavaScript change was needed.
- Added nine service pages using the existing V2 format and unique service-focused content: Commercial Lease Agreements; Confidentiality & Nondisclosure Agreements; Business Buyouts & Owner Exits; Tax Penalty Relief; Tax Liens, Levies & Collection Appeals; Payroll Tax Disputes; Grand Jury Subpoenas & Testimony; Wire & Mail Fraud Defense; False Statements & Obstruction Defense. Three hubs and six existing parent articles link the additions. Litigation retains its existing 19 services; transactions has six service cards, tax seven, and white-collar seven including the shared criminal-tax page. There are now four new hubs and nineteen new service pages in the full draft.
- Static validation: 145 HTML files, 120 unique canonical sitemap URLs, zero introduced errors or warnings. New pages retain the original V2 CSS, each has one H1/canonical and matching visible FAQ/schema content. Prior baseline issues remain separately recorded; no exhaustive inherited legal-content audit is claimed.
- Browser checks: all seven homepage cards are uniform and centered at 320/390/768/1366px with no horizontal overflow. Desktop pointer and keyboard dropdown navigation and mobile submenu links resolve correctly. Selected icons load; the new Payroll Tax Disputes link opens a 390px page with no horizontal overflow. The longer Tax Liens, Levies & Collection Appeals title and layout were visually checked at 320px, and its FAQ button expanded correctly.
- Preserve main, the immutable backup, existing redirect mappings, form recipients and publication gate. Do not merge or deploy without Kris's explicit approval of the revised preview.

## Draft implementation checkpoint — October 5, 2026

This checkpoint records the approved implementation on the separate draft branch. It does **not** record a merge, publication, or live deployment. Final visual review, presentation to Kris, and publication approval are still pending.

### Scope implemented

- Homepage: four priority practice cards precede all three retained cards. Original hero/video, photos, portraits, reviews, typography, and design components remain. A scoped responsive grid accommodates the additional cards; new cards use the temporary `images/Icons/practice-placeholder.svg` asset.
- Navigation: the original menu components now contain one Practice Areas dropdown with Business Litigation, Business Transactions, Tax Law, White-Collar Defense, and View All Practice Areas. Professionals, Reviews, mobile call/inquire entries, and existing navbar buttons remain. The obsolete separate mobile Private Matters entry is removed.
- Four primary hub pages and ten service pages were added using existing hub and V2 service-page templates. Business Litigation links to retained commercial service pages at their established URLs. Corporate & Commercial Law remains at `/civil-litigation/` as the two-practice business overview. Criminal Defense and Private Matters remain available through the retained homepage cards and practice directory.
- Business Transactions includes business contracts, ownership/operating agreements, and business purchases/sales. Tax Law includes IRS audits/appeals, California tax disputes, tax litigation/appeals, and criminal tax defense. White-Collar Defense includes investigations/subpoenas, financial fraud, and embezzlement, and links to the single criminal-tax page under Tax Law.
- Private Matters retains lawsuit defense, harassment restraining-order proceedings, easement/right-of-way disputes, judgment enforcement/debtor exams, nuisance, vehicle/property damage, small-claims advice/appeals, and relevant shared services. The retained fraud-claims page is active and linked; old historical notes below saying it was retired do not describe the current restored source.
- Named exclusions were removed from cards, related links, and marketing in mixed pages without retiring their unrelated services. Business/employer employment scope remains explicit. Accurate legal terms such as Code of Civil Procedure remain; broad public labels use Private Matters or Lawsuit Defense.
- Targeted text/link/intake-choice changes cover the homepage, practice directory, contact form, FAQs, and location pages. The FormSubmit recipient remains unchanged, and no real inquiry has been sent. Schema office addresses were corrected to 28 Geary St, Suite 650, San Francisco, CA 94108; unverified old coordinates were removed.
- Small-claims preparation advice explicitly excludes attorney representation at the initial hearing. The inherited appeal-deadline text was corrected to run from delivery/mailing of the Notice of Entry of Judgment, consistent with California Courts: https://selfhelp.courts.ca.gov/small-claims/after-trial/appeal-pay . Existing mixed service pages have not received an exhaustive audit of all inherited legal assertions.

### URL moves and retirements

The following four aliases remain crawlable, each with an immediate zero-second HTML refresh, matching destination canonical, and visible fallback link. They are not HTTP 301 responses. All active internal links point directly to their final destinations:

| Old URL | Destination |
| --- | --- |
| `/civil-litigation/business-litigation` | `/business-litigation/` |
| `/criminal-defense/white-collar-crimes` | `/white-collar-defense/` |
| `/criminal-defense/fraud-defense` | `/white-collar-defense/financial-fraud` |
| `/criminal-defense/embezzlement` | `/white-collar-defense/embezzlement` |

These 11 files were removed so unrelated retired routes return genuine not-found responses on GitHub Pages. They have no replacement redirects:

- `civil-litigation/probate-trust-litigation.html`
- `civil-litigation/hoa-disputes.html`
- `civil-litigation/wrongful-eviction.html`
- `civil-litigation/landlord-tenant.html` (residential eviction/habitability/rent-control marketing; commercial lease disputes remain)
- `private-civil-matters/personal-guarantee-loan-default.html`
- `private-civil-matters/debt-collection-defense.html`
- `private-civil-matters/defamation-slander-libel.html`
- `private-civil-matters/hoa-disputes.html`
- `private-civil-matters/property-line-boundary-disputes.html`
- `private-civil-matters/wrongful-eviction-defense.html`
- `private-civil-matters/elder-financial-abuse.html`

### Draft verification completed; release approval pending

- 136 HTML files parse with balanced element nesting; all JSON-LD blocks parse as JSON.
- 111 active indexable pages have exactly 111 matching canonical sitemap entries; no duplicate, missing, redirect, noncanonical, or noindex sitemap entries. Fourteen new canonical URLs were added; thirteen moved/retired entries present in the previous sitemap were removed. Existing `lastmod` values were preserved for navigation-only changes and updated for substantive page changes.
- All internal page links, referenced assets, and linked anchors resolve in the local source. Four inherited broken criminal related-service links were repaired to the existing DUI page or migrated financial-fraud page.
- All 113 full pages share one navigation variant. No active links point to the four new redirect aliases or the 11 retired routes.
- The seven revised business/tax FAQ answers match their visible text and FAQ structured data. All four new aliases have matching destinations, canonicals, and fallback links, without `noindex`.
- `git diff --check` passes. Chrome visual checks passed for the seven homepage cards at 320px/390px and desktop, mobile navigation, Tax Law hub, IRS service page, sticky desktop contents panel and FAQ interactions. Original hero, reviews, existing images and form endpoints are unchanged. Source validation found no introduced errors or warnings; inherited legal content has not received an exhaustive audit. No forms were submitted.
- Preview routing supports the existing extensionless HTML paths. Production response codes and trailing-slash behavior must be checked after an approved deployment; a local server is not evidence of GitHub Pages behavior. Destinations and aliases must ship together. Keep aliases for at least one year.
- All 208 repository files at draft source checkpoint `d25d032ab1451968f2fe057603ab5f4bf97edb38` were verified byte-for-byte against the tested local draft. This subsequent documentation-only update records completion and PR #3. Main remains `9f28afa1be945ebeb4ec7ede1d0decdf7bac799c`; the backup remains `68ee25edd8b0ceebda15f235ef52f03b1c506fbf`. Final review and explicit approval are still required before publication.
- The immutable backup and live `main` must remain untouched until Kris approves publication after reviewing the final preview. Keep destination pages and aliases together if later reverting presentation changes; do not blindly restore an old sitemap after new URLs have been indexed.

## Previous restoration checkpoint

- User rejected the full redesign and explicitly requested restoration of the pre-rebuild backup.
- Website files restored exactly from backup commit `68ee25edd8b0ceebda15f235ef52f03b1c506fbf` (branch `backup/pre-rebuild-2026-10-05`). Only this AI documentation differs from the backup.
- Restore through a new commit on main, preserving history; keep the backup branch immutable.
- **Future changes must preserve the original design, layout, visual style, and existing components.** Add the approved new service content and remove or revise obsolete content with targeted edits. Do not perform another full redesign.
- The business/transactions/tax/white-collar content plan must be revisited with the user after restoration. Do not reapply the rejected rebuild automatically.
- User requires AI documentation to be updated with every website change, including checks and deployment status.
- Rejected rebuild remains in Git history and on `rebuild/business-tax-white-collar`; it is not the live source to use for future content edits.
- Verification: rollback tree uses the exact backup tree as its base with only CLAUDE.md updated. GitHub Pages deployment for rollback commit `64d452a051f05df846f6363dfe7b516fcfa86025` succeeded. The refreshed live homepage was verified: original `.main-header`, original firm-name H1s and original Corporate & Commercial Law title are present; the redesign `.rv-header` is absent. All repository website blobs match the backup exactly.

---

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
