# The Uneven Curb

DTU Social Visualization (course 02806) final project. A data story about NYC's FY2025 parking enforcement.

- Public website: <https://syedtaimurhassan.github.io/02806-project/site/>
- Explainer notebook: <https://syedtaimurhassan.github.io/02806-project/explainer_notebook.ipynb>

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

## Explainer notebook

The submitted notebook is committed with cell outputs so it can be reviewed directly on GitHub or downloaded from the website link above. The raw FY2025 CSV and intermediate `outputs/` folder are intentionally not committed.

To rerun the notebook locally:

1. Install the dependencies: `pip install pandas plotly numpy`
2. Keep or recreate the local `outputs/eda/` and `outputs/story/` summary artifacts used by the figure cells.
3. Open `explainer_notebook.ipynb` and run all cells. Plotly figures render inline in classic Jupyter, JupyterLab, and VS Code.
