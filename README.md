# ENGL 202C IRG Site

This repository now contains a GitHub Pages website built with **Jekyll**.

## What Is Included

- Jekyll configuration in `_config.yml`
- Double-level navigation header (categories with nested pages)
- Landing page at `index.md`
- Six pages split into three categories:
  - Research Foundations (2 pages)
  - Writing Craft (2 pages)
  - Delivery and Impact (2 pages)
- GitHub Pages workflow at `.github/workflows/pages.yml`

## Run Locally (localhost)

1. Create and activate a virtual environment (recommended):

	- Windows PowerShell:

	  ```powershell
	  python -m venv .venv
	  .\.venv\Scripts\Activate.ps1
	  ```

2. Install dependencies:

	```powershell
	bundle install
	```

3. Start local dev server:

	```powershell
	bundle exec jekyll serve
	```

4. Open:

	- `http://127.0.0.1:8000`

## Deploy to GitHub Pages

1. Push to `main`.
2. In GitHub repository settings, ensure Pages is enabled.
3. The workflow `.github/workflows/pages.yml` builds the site with Jekyll and deploys it to GitHub Pages.