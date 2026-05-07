# The Uneven Curb

DTU Social Visualization (course 02806) final project. A data story about NYC's FY2025 parking enforcement.

- Public website: <https://syedtaimurhassan.github.io/02806-project/site/>
- Explainer notebook: `explainer_notebook.ipynb`

The root `index.html` redirects to `site/` so GitHub Pages can serve the site from the repository root.

## Repository layout

- `index.html` — root redirect for GitHub Pages
- `site/` — the public website
  - `site/index.html`, `site/styles.css`, `site/script.js`
  - `site/figures/` — Plotly HTML figures embedded in the site
  - `site/assets/` — images, logos, favicon
- `explainer_notebook.ipynb` — the explainer notebook (the technical companion to the website)
- `Parking_Violations_Issued_Data_Dictionary.xlsx` — NYC field reference for the dataset

The raw FY2025 parking violations CSV (~3 GB) is not in the repository. The link is in Section 8 of the explainer notebook and in the references section of the website.

## Running the explainer notebook

The notebook is shipped without cell outputs to keep the file small. To regenerate the figures:

1. Install the dependencies: `pip install pandas plotly numpy`
2. (Optional) Download the raw FY2025 CSV from the NYC Open Data link in Section 8 only if you want to rebuild the EDA tables. The repo already includes the small summary CSVs and JSON files needed by the figure cells.
3. Open `explainer_notebook.ipynb` and run all cells. Plotly is configured with the `iframe_connected` renderer, so figures will appear inline in classic Jupyter, JupyterLab, or VS Code. A folder named `iframe_figures/` will be created next to the notebook (it is gitignored).
