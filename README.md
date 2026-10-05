# RV Litigation website

Static website published by GitHub Pages from `main` at https://rvlitigation.com/.

Read `CLAUDE.md` before changes. It records approved scope, deployment status, and the immutable rollback checkpoint.

Edit `scripts/build_site.py`, retained `content/` fragments, CSS, or JS, then run:

```sh
python scripts/build_site.py
python scripts/validate_site.py
```

Commit generated HTML alongside the source. GitHub Pages excludes `content/` and `scripts/` using `_config.yml`.

Old moved URLs use immediate HTML redirects. The exact map and retired URLs are recorded in `content/url-migration.json`. They are not HTTP 301 redirects.
