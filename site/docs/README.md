# Final Material Packet

This folder collects the planning, copy, citation, and notebook material needed for the later website build. It does not contain a built website, and it does not replace the original files in `outputs/story/`.

## Files in This Packet

### `artifact_inventory.md`

Catalog of the existing output artifacts. Use this to understand what files already exist, which ones are website candidates, which ones are notebook-only, and which ones are diagnostic or older EDA outputs.

### `key_findings_from_artifacts.md`

The safest numerical findings extracted from the current CSV and JSON artifacts. Use this as the main source for project numbers in the website and notebook.

### `project_requirement_checklist.md`

Checklist against the course/project requirements. Use this to see what is done, mostly done, missing, or unclear.

### `reference_bank.md`

Curated source bank with official NYC sources, research/public-interest sources, and journalism/context sources. Use this for citations and reference links.

### `storyline_bank.md`

Five possible storylines selected from the current artifacts. Use this as background for why the final website sequence was chosen.

### `final_narrative_plan.md`

The final website story structure. This is the main blueprint for the website build: section order, goals, draft text, figures, caveats, and transitions.

### `website_copy_draft.md`

Website-ready public-facing copy in Markdown. This is the main text to adapt into the website.

### `final_figure_captions.md`

Final caption bank for core and optional website figures. Includes short titles, captions, how-to-read notes, takeaways, caveats, source data files, and website placement.

### `explainer_notebook_text.md`

Draft text for the explainer notebook. It includes Motivation, Dataset, Why this dataset, Basic stats, Cleaning, Data analysis, Genre, Visual narrative tools, Narrative structure tools, Discussion, Limitations, Contributions placeholder, and References.

### `claim_citation_map.md`

Claim-by-claim citation map for the website and explainer notebook. Use this to verify that each major claim has support and to avoid overclaiming.

## Website Files

Use these files first when building the website:

1. `final_narrative_plan.md`
2. `website_copy_draft.md`
3. `final_figure_captions.md`
4. `claim_citation_map.md`
5. `reference_bank.md`
6. `key_findings_from_artifacts.md`

The website should be public-facing, concise, and understandable without reading the notebook. It should not include long code or full methods detail.

## Explainer Notebook Files

Use these files for the notebook:

1. `explainer_notebook_text.md`
2. `key_findings_from_artifacts.md`
3. `project_requirement_checklist.md`
4. `artifact_inventory.md`
5. `claim_citation_map.md`
6. `reference_bank.md`

The notebook should contain the technical trail: motivation, dataset description, cleaning, analysis, visualization design choices, discussion, limitations, and references.

## Essential Website Figures

The essential figures are still stored in `outputs/story/`. They were not copied into this packet because this milestone only requested the written material packet.

Use these as the core website visuals:

1. `outputs/story/fig_precinct0_vs_real_precincts.html`
2. `outputs/story/fig_real_precinct_ticket_share_map.html`
3. `outputs/story/fig_real_precinct_concentration_curve.html`
4. `outputs/story/fig_real_precinct_family_specialization_heatmap.html`
5. `outputs/story/fig_dominant_family_by_precinct_map.html`
6. `outputs/story/fig_real_precinct_count_vs_estimated_fine_value.html`
7. `outputs/story/fig_violation_family_hourly_profiles.html`

Optional support figures are listed in `final_figure_captions.md`.

## What Still Needs to Be Done Before Building the Website

1. Choose the website format or framework.
2. Decide whether to embed the HTML figures directly or link to them.
3. Copy the essential figure HTML files into the website asset folder when the website is created.
4. Convert `website_copy_draft.md` into final page sections.
5. Add figure captions and short "how to read this chart" notes from `final_figure_captions.md`.
6. Add references from `reference_bank.md`.
7. Add a clear link to the explainer notebook.
8. Add the real contributions section in the notebook before submission.
9. Test the website locally and check that every interactive figure loads.
10. Re-check the final text against `claim_citation_map.md` before publishing.

## Claim Boundaries

The final project should keep these wording rules:

- Say **issued tickets**, not all violations.
- Say **enforcement footprint**, not illegal-parking risk.
- Say **estimated fine value**, not revenue.
- Say **real mappable precincts** when Precinct 0 is excluded.
- Treat **Precinct 0** as an administrative bucket, not fake data.
- Do not claim demographic inequality, racial targeting, income inequality, or causal unfairness.
