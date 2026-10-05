# RV Litigation Group PC — instructions for future AI work

## Required workflow
- Read this file and inspect the current branch/files before editing. The user requires AI documentation to be updated with every website change, including verification and deployment status.
- Repository: `lawyerdm6/rvlitigation_Website`. GitHub Pages publishes `main` at https://rvlitigation.com/. GoDaddy is the domain registrar; this rebuild does not change DNS or hosting.
- Do not assume a dated status below proves that a deploy succeeded. Verify GitHub and the live site.
- Preserve backup refs. Make rollback changes through a new commit; never reset/force-push main to roll back.
- Do not publish additional future changes without the user's authorization. The October 5 rebuild was explicitly authorized for implementation and publication.

## Rollback checkpoint — immutable
- Branch: `backup/pre-rebuild-2026-10-05`
- Exact commit: `68ee25edd8b0ceebda15f235ef52f03b1c506fbf`
- Restore that commit's website file state through a new commit on main if rollback is requested. Keep history and this backup intact. It covers repository files, not email, DNS or third-party settings.

## Approved scope — October 5, 2026
The 17-page `RV_Litigation_Website_Repositioning_Developer_Brief.pdf` was reviewed. Subsequent user decisions override it:
- Primary practice areas: Business Litigation, Business Transactions, Tax Law, White-Collar Defense.
- Matthew Williams is the existing Matt. New tax and transaction scopes were confirmed. Preserve documented biographies/admissions; do not invent tax experience, credentials, specialist certification, fees, or results.
- Criminal defense remains available as a secondary path. Retire general-crime detail pages for now; migrate relevant white-collar pages.
- Retain small-claims advice and appeals. Other former private-matter offerings discussed with the user can go. Do not restore their broad library automatically.
- Remove probate, residential/neighborhood and unrelated individual-service marketing. Employment representation is exclusively for businesses/employers, not employees.
- Reduce the word “civil” in public copy and active URLs to reduce unwanted civil-rights calls. The firm does not handle civil-rights cases. Do not distort legally necessary terminology or promise keyword removal alone eliminates inquiries.
- Keep the address: 28 Geary St, Suite 650, San Francisco, CA 94108. Location pages describe service areas, not extra offices. Old San Martin schema was inaccurate and is replaced.
- Business litigation is retainer-based, not contingency. Do not add a retainer acknowledgement checkbox: it was previously removed at the user's request. Do not invent transaction/tax fee terms or promise free consultations.

## Architecture and authoring
- Plain static HTML, CSS and JS. No app runtime or npm build is required for production.
- `scripts/build_site.py` is the standard-library Python authoring source for the shared layout, core practice copy, homepage, contact, FAQ, resources, location pages and migration. Run from any directory with `python scripts/build_site.py`.
- Retained supporting-page fragments live in `content/professionals.html`, `content/reviews.html`, `content/privacy-policy.html`; selected exact published quotations in `content/testimonials.json`.
- Generated HTML is checked in and published. Modify the generator/fragments first, then rebuild; direct edits to generated HTML will otherwise be overwritten.
- `css/styles.css` retains legacy supporting-page styles. `css/rebuild.css` supplies the rebuilt layout, navigation, responsive breakpoints, form and accessibility styles. `js/main.js` handles navigation/conditional intake without a splash delay.
- `_config.yml` excludes `content`, `scripts`, and AI documentation from the public GitHub Pages output. Keep authoring fragments excluded to prevent duplicate indexable content. Do not add `.nojekyll` without replacing this exclusion mechanism.
- Shared appearance: dark background, muted gold, off-white sections, Cormorant Garamond headings, Montserrat body; existing bridge imagery and current portraits. Homepage uses a static bridge image, no delayed splash/video.
- Nav: Business Litigation, Business Transactions, Tax Law, White-Collar Defense, Attorneys, Contact. Secondary footer: About, Reviews, Resources, Areas We Serve, Selected Criminal Defense, Small Claims, FAQ.
- Root supporting URLs keep their existing extensionless form (e.g. `/contact`, `/professionals`). New practice pages use directory URLs with trailing slashes.
- Canonical criminal tax page: `/tax-law/criminal-tax-defense/`, cross-linked from both tax and white-collar practices.
- Every active page has unique title/description, canonical, social metadata, favicon and firm/WebPage JSON-LD. Sitemap includes only active canonical indexable pages. Thank-you and 404 are noindex.
- Favicon fix from September remains: existing 192×192 PNG `/images/Favicon/android-chrome-192x192.png` and corrected manifest paths. Do not replace with a different competing favicon.

## URL migration and retirement
- User explicitly approved zero-second HTML meta refresh redirects with destination canonical and visible fallback link. These return HTTP 200, **not HTTP 301**. No GoDaddy/DNS configuration is needed.
- `content/url-migration.json` records exact moved and retired URLs; `content/legacy-paths.json` is the pre-rebuild path inventory.
- Each moved old source has both its `.html` file and a directory `index.html` alias to cover extensionless/trailing-slash requests. Old hub aliases include `.html` and directory index. All redirect directly to a working canonical destination, with no chains.
- Retired unrelated pages are deleted and removed from sitemap/internal links; they should return genuine GitHub Pages 404 responses. Do not redirect unrelated retired services to homepage or Tax Law.
- Keep moved aliases crawlable through at least October 5, 2027, preferably longer. Redirects may still contain “civil” in their old source path; these are preserved migration endpoints, not active marketing pages.
- Small-claims wording was checked against California Courts official guidance: initial hearing generally without attorney representation, attorney involvement permitted at appeal/new trial; notice-of-appeal deadline generally measured from mailing/handing Notice of Entry of Judgment. Do not substitute the old “30 days from judgment” shorthand.

## Contact and privacy
- Native POST endpoint remains `https://formsubmit.co/David@RVLitigation.com`. Success redirect remains `https://rvlitigation.com/thank-you.html`. Do not change recipients or send real test emails without authorization.
- Required: name, email, phone, matter type, brief summary. Optional: business, preferred contact, city/state, deadline. Tax/dispute conditional fields are enabled only for the selected matter.
- Matter choices include business disputes, transactions, tax, white-collar, selected criminal, small claims, unsure.
- Do not request sensitive tax/account identifiers or documents in initial web intake. Inquiry does not create representation or mean a deadline will be handled.
- Existing FormSubmit privacy disclosure retained; policy updated to describe new intake fields.
- The homepage and reviews page use two exact, previously published general-service comments with original attribution. The detailed case-review archive is preserved in the backup, rather than republished in the rebuild. Automatic approval review rejected the old archive payload because it contained named clients’ sensitive legal-case details and outcomes; the safer selected-comments version removes those details. No live rating/count claims or invented testimonials are used.

## Implementation / validation status — October 5, 2026
- Implementation prepared on `rebuild/business-tax-white-collar`; user explicitly requested publication.
- Rebuilt homepage, core practices/subpages, intake, About, resources/FAQ, service-area pages, shared nav/footer, bios, schema, metadata and sitemap. General-crime, private-matter, legacy injury and unrelated pages retired per the approved scope.
- Automated validator: `python scripts/validate_site.py`. Checks page H1/canonical/description/title uniqueness, JSON-LD parsing, sitemap, asset/internal-link/fragment existence, FormSubmit endpoint, direct redirect targets and retired-file removal.
- Automated validation passed: 93 HTML files, 53 indexable canonical sitemap pages, 19 moved source URLs (38 redirect aliases), and 86 retired paths. Local browser verification was attempted but blocked by the execution runtime (Chromium processes fail; cloud browser cannot open localhost). Form endpoint/markup and conditional-field logic were checked in source, but an intercepted browser submission has not yet completed. Publication/live browser verification is pending at this status entry. Update this section before ending the task.
- Search Console, Bing Webmaster Tools, Google Business Profile, Ads and analytics were not accessed. The account owner/employee should submit the new sitemap, request indexing of the core pages, review service descriptions/categories, and monitor indexing/inquiry quality. Do not claim these external steps are complete.

## External SEO follow-up
- Removing unrelated pages intentionally reduces their search visibility. Relevant moved pages have immediate HTML redirects; search engines must recrawl to consolidate URLs. Ranking stability is not guaranteed.
- Request indexing of homepage/four practice hubs and submit https://rvlitigation.com/sitemap.xml in Google Search Console and Bing Webmaster Tools after deployment.
- Update Google Business Profile services/description to align with the new practices; use only accurate available categories. Keep address/contact details aligned. This requires account access and was not changed by this site deployment.
- No baseline Search Console/analytics export was available, so record the deployment date and compare post-change traffic, indexed pages and lead quality with existing account reports.
