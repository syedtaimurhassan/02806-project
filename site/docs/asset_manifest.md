# Site Asset Manifest

This manifest lists the figure assets used by the current GitHub Pages build.

## Embedded Website Figures

| Copied figure filename | Original path | Website placement | Status |
|---|---|---|---|
| `fig8_violation_family_totals.html` | `outputs/story/fig8_violation_family_totals.html` | Dataset introduction | embedded |
| `fig_precinct0_vs_real_precincts.html` | `outputs/story/fig_precinct0_vs_real_precincts.html` | Precinct 0 / non-place reveal | essential |
| `fig_real_precinct_ticket_share_map.html` | `outputs/story/fig_real_precinct_ticket_share_map.html` | Main real-precinct ticket-share map | essential |
| `fig_real_precinct_family_specialization_heatmap.html` | `outputs/story/fig_real_precinct_family_specialization_heatmap.html` | Different precincts, different rules section | essential |
| `fig_real_precinct_count_vs_estimated_fine_value.html` | `outputs/story/fig_real_precinct_count_vs_estimated_fine_value.html` | Estimated fine value section | essential |
| `fig_violation_family_hourly_profiles.html` | `outputs/story/fig_violation_family_hourly_profiles.html` | Time-of-day layer section | essential |

## Optional Figures Not Embedded In The Current GitHub Page

These files may exist locally, but they are ignored by `.gitignore` to keep the GitHub Pages repository smaller.

| Figure filename | Original path | Possible placement | Status |
|---|---|---|---|
| `fig_real_precinct_concentration_curve.html` | `outputs/story/fig_real_precinct_concentration_curve.html` | Real precinct concentration support | ignored for GitHub build |
| `fig_dominant_family_by_precinct_map.html` | `outputs/story/fig_dominant_family_by_precinct_map.html` | Dominant violation-family map | ignored for GitHub build |
| `fig12_dominant_family_by_precinct.html` | `outputs/story/fig12_dominant_family_by_precinct.html` | Backup for dominant-family geography | optional |
| `fig13_street_cleaning_precinct_share.html` | `outputs/story/fig13_street_cleaning_precinct_share.html` | Optional street-cleaning example | optional |

## Requested But Not Present

The following requested filenames were not present in `outputs/story/`:

- `fig57_precinct_concentration_curve.html`
- `fig58_precinct_family_specialization_heatmap.html`
- `fig59_precinct_count_vs_estimated_fine_value.html`
- `fig60_real_precinct_family_time_profiles.html`

Closest matching copied files:

- `fig_real_precinct_concentration_curve.html`
- `fig_real_precinct_family_specialization_heatmap.html`
- `fig_real_precinct_count_vs_estimated_fine_value.html`
- `fig_violation_family_hourly_profiles.html`

## Narrative Docs Copied

All markdown files from `outputs/final_material_packet/` were copied into `site/docs/`, including:

- `website_copy_draft.md`
- `final_narrative_plan.md`
- `final_figure_captions.md`
- `explainer_notebook_text.md`
- `claim_citation_map.md`
- `reference_bank.md`
- `key_findings_from_artifacts.md`
- `final_quality_check.md`

## Data Support Files Copied

The local `site/data/` folder includes selected lightweight CSV and JSON files from `outputs/story/` for verification or later rebuilds. It is ignored in the GitHub Pages build because the current static page does not load these files at runtime.

- `final_figure_captions.csv`
- `claim_citation_map.csv`
- `key_findings_from_artifacts.json`
- `real_precinct_concentration_summary.json`
- `real_precinct_map_summary.json`
- `real_precinct_family_specialization_summary.json`
- `real_precinct_estimated_fine_value_summary.json`
- `violation_family_hourly_profiles_summary.json`
- `precinct0_narrative_metrics.json`
