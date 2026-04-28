# ENGL 202C IRG Site

This repository now contains a GitHub Pages website built with **MkDocs** and the **Material** theme.

## What Is Included

- Material-themed site configuration in `mkdocs.yml`
- Double-level navigation header (categories with nested pages)
- Landing page at `docs/index.md`
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
	pip install -r requirements.txt
	```

3. Start local dev server:

	```powershell
	mkdocs serve
	```

4. Open:

	- `http://127.0.0.1:8000`

## Deploy to GitHub Pages

1. Push to `main`.
2. In GitHub repository settings, ensure Pages is enabled.
3. The workflow `.github/workflows/pages.yml` deploys the site automatically using `mkdocs gh-deploy --force`.