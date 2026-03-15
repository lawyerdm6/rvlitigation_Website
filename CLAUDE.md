# RV Litigation Group PC — Website Project

## Project Path
`/home/codebox/Desktop/work/rvlitigation_Website-main/`

## Current State (March 10, 2026)
- **All 30 practice area sub-pages** are on V2 template (16 criminal + 12 civil + 2 hub pages)
- **V2 template** = long-form "Shouse-style" article layout with sticky TOC, FAQ accordion, JSON-LD schemas, statute blockquotes, penalty tables, real-world examples, floating CTA
- **Location SEO** expanded to 25 cities + 7 counties across Bay Area, woven naturally into content
- **No pending bugs or broken pages** — all 28 sub-pages verified with valid HTML, nav, footer, CTA, FAQ, schemas
- **Hub pages unified** — Both criminal & civil hub cards use `.practice-detail-card` class with cream bg + gold hover (`#f5f0e0`)

## Key Files
| File | Purpose |
|------|---------|
| `criminal-defense/assault-defense.html` | V2 template reference (the original prototype) |
| `promptdocs/implementation_plan.md` | Full implementation history + conventions + future work |
| `promptdocs/subpage_emplate.md` | Content structure guide (V1-era, still useful for content planning) |
| `css/styles.css` | Global styles (nav, footer, hub pages, V1 components) |
| `js/main.js` | Mobile menu toggle + global JS |
| `sitemap.xml` | 37 URLs (may need update if new pages added) |

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

## What to Work on Next
See `promptdocs/implementation_plan.md` → "Next Steps" section for prioritized backlog.

**Quick summary of high-value next items:**
1. QA pass — visual review of V2 pages in browser, fix any formatting issues
2. Navigation dropdowns — add practice area dropdowns under "OUR PRACTICE"
3. Location pages — `/san-jose/`, `/san-francisco/`, etc.
4. Blog/resources infrastructure
