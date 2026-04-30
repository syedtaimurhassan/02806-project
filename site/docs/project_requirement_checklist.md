# Project Requirement Checklist

Source read: `project-req.rtf`

This checklist is honest about the current state of the project. "Done" means there is already a clear artifact or notebook section that satisfies the requirement. "Mostly done" means the material exists, but still needs to be assembled, polished, linked, or made explicit in the final deliverable. "Missing" means the requirement still needs content. "Unclear" means the artifact may exist outside this workspace, such as a video upload, but it is not visible here.

## Website Requirements

| Requirement | Status | Artifact or notebook section that satisfies it | What still needs to be written or built | Belongs on |
|---|---|---|---|---|
| Self-contained data story | mostly done | `outputs/story/final_website_story_material.md`; `outputs/story/final_website_asset_plan.md`; notebook section `Final Narrative Spine` | Build the actual website page and make sure it can be understood without opening the notebook. | website |
| Visualizations with accompanying text | mostly done | `outputs/story/final_website_story_material.md`; `outputs/story/final_website_asset_plan.md`; final named figures in `outputs/story/` | Assemble figures and captions into the website. Keep captions short and caveats visible. | website |
| Some interactive visualizations | mostly done | Interactive HTML figures: `fig_real_precinct_ticket_share_map.html`, `fig_dominant_family_by_precinct_map.html`, `fig_real_precinct_family_specialization_heatmap.html`, `fig_real_precinct_count_vs_estimated_fine_value.html`, `fig_violation_family_hourly_profiles.html` | Embed or link the interactive figures from the website. Test that they load after publishing. | website |
| Understandable to a non-scientific reader | mostly done | `outputs/story/final_website_story_material.md` uses public-facing language; `outputs/story/final_website_asset_plan.md` says the audience is a friend who has not taken the course | Final website still needs to be written in this tone. Avoid code, methods detail, and unsupported causal claims on the website. | website |
| Link to explainer notebook | missing | No built website exists yet; no website link to notebook visible in current artifacts | Add a clear "Explainer notebook" link once the notebook is finalized and hosted or included in the project site. | website |

## Explainer Notebook Requirements

| Requirement | Status | Artifact or notebook section that satisfies it | What still needs to be written or built | Belongs on |
|---|---|---|---|---|
| Motivation | mostly done | `outputs/story/final_explainer_notebook_material.md` section `Motivation`; notebook section `The Uneven Curb` | Add a polished Motivation section to the final explainer notebook if not already moved there. | notebook |
| Dataset description | mostly done | notebook section `Where the Analysis Already Stands`; `outputs/story/key_findings_from_artifacts.md`; `outputs/story/final_explainer_notebook_material.md` section `Dataset Description` | Consolidate source, rows, date range, variables, and supporting GeoJSON/data dictionary into one clean notebook section. | notebook |
| Why this dataset | mostly done | `outputs/story/final_explainer_notebook_material.md` section `Why This Dataset` | Move or rewrite this into the explainer notebook in first-person project language. | notebook |
| End-user experience goal | mostly done | `outputs/story/final_explainer_notebook_material.md` section `End-User Experience Goal`; `outputs/story/final_website_asset_plan.md` | Add this explicitly to the notebook, not only to planning files. | notebook |
| Basic stats | done | `outputs/story/key_findings_from_artifacts.md`; notebook section `Where the Analysis Already Stands`; `outputs/eda/quality.csv`; `outputs/eda/summons_quality.csv` | Use the key stats table in the final notebook and cite generated artifacts. | notebook |
| Cleaning and preprocessing | mostly done | notebook section `Build Compact EDA Tables`; notebook section `Where the Analysis Already Stands`; `outputs/story/notebook_section_audit.md` | Write a concise prose explanation of cleaning choices: FY2025 filter, date parsing, Precinct 0 treatment, mappable precinct filter, family grouping, anonymized vehicle keys, and fine estimation caveats. | notebook |
| Short dataset stats / EDA section | done | notebook sections `First Findings`, `Draft-Aligned Analysis`, and `Where the Analysis Already Stands`; `outputs/story/key_findings_from_artifacts.md` | For the final notebook, keep this short and focused. Do not paste every EDA chart. | notebook |
| Data analysis | done | notebook sections from `Investigating The Next Questions` through final `The Uneven Curb` sections; `outputs/story/notebook_section_audit.md` | Reorder or summarize if the final notebook becomes too long, but the analysis exists. | notebook |
| Machine learning, if relevant | unclear | No ML section found in `analysis.ipynb`; project appears to be EDA/narrative visualization rather than ML | Add one sentence saying machine learning was not used because the research question is descriptive and artifact-based. | notebook |
| Genre | mostly done | `outputs/story/final_website_asset_plan.md` section `Suggested Genre`; `outputs/story/final_explainer_notebook_material.md` section `Visualization And Genre Plan`; notebook section `Final Narrative Spine` | Add a direct explainer-notebook section naming the genre: "Magazine-style narrative with bounded interactivity." | notebook |
| Visual Narrative tools from Segel and Heer Figure 7 | mostly done | `outputs/story/final_explainer_notebook_material.md` mentions author-driven narrative with reader-driven exploration | Write this explicitly by Figure 7 category: visual structuring, highlighting, and transition guidance. Name the concrete tools used, such as section ordering, maps, hover labels, callout captions, and caveat boxes. | notebook |
| Narrative Structure tools from Segel and Heer Figure 7 | mostly done | `outputs/story/final_explainer_notebook_material.md` mentions magazine-style narrative and bounded interactivity | Write this explicitly by Figure 7 category: ordering, interactivity, and messaging. Explain linear section order, hover/map exploration, and repeated caveats about what the data can and cannot prove. | notebook |
| Visualization explanations | mostly done | `outputs/story/final_website_asset_plan.md` figure list; `outputs/story/final_website_story_material.md`; `outputs/story/final_explainer_notebook_material.md` sections `Recommended Website Figures` and `Recommended Notebook-Only Figures` | Add a notebook section explaining why each final website visualization was chosen and what caveat belongs with it. | notebook |
| Discussion | mostly done | `outputs/story/final_explainer_notebook_material.md` section `Discussion Points`; notebook section `Final Narrative Spine` includes limitations | Turn the bullet points into a final discussion section: what worked, what is missing, and what could be improved. | notebook |
| Contributions | missing | No contribution section found in the inspected artifacts | Add a brief contribution section with actual group member names and responsibilities. Do not write "all contributed equally." | notebook |
| References | mostly done | `outputs/story/final_explainer_notebook_material.md` references; `outputs/story/final_project_artifact_inventory.md` external source list | Add final references to the notebook and website. Include NYC Open Data, NYC precinct GeoJSON, NYC DOF fine/code page, and Segel and Heer. | notebook |

## Assignment A / Video Requirements

These may already have been submitted outside this workspace. The checklist below only describes visible project material.

| Requirement | Status | Artifact or notebook section that satisfies it | What still needs to be written or built | Belongs on |
|---|---|---|---|---|
| Central idea | done | notebook section `The Uneven Curb`; `outputs/story/final_website_story_material.md`; `outputs/story/final_website_asset_plan.md` | If Assignment A still matters, use the safe project claim from the website material. | video / website / notebook |
| Datasets needed | mostly done | `outputs/story/final_explainer_notebook_material.md` section `Dataset Description`; `outputs/story/final_project_artifact_inventory.md`; notebook section `Where the Analysis Already Stands` | For a video or final notebook, state primary dataset, precinct GeoJSON, data dictionary, and NYC DOF fine information. | video / notebook |
| Why interesting | done | `outputs/story/final_website_story_material.md`; `outputs/story/final_explainer_notebook_material.md` section `Why This Dataset` | Keep the explanation simple: one city system behaves like several layered systems depending on place, rule, time, and estimated fine value. | video / website / notebook |
| Visualization mockup | unclear | Final HTML figures and `outputs/story/final_website_asset_plan.md` exist, but no original one-minute-video mockup artifact is visible | If the video is still required, use the final website asset plan and figures as the mockup source. | video |
| Genre | mostly done | `outputs/story/final_website_asset_plan.md` section `Suggested Genre`; `outputs/story/final_explainer_notebook_material.md` section `Visualization And Genre Plan` | In a video or notebook, explicitly say why magazine-style narrative with bounded interactivity fits the story. | video / notebook |
| Preliminary data analysis | done | `analysis.ipynb`; `outputs/story/notebook_section_audit.md`; `outputs/story/key_findings_from_artifacts.md` | For a video, only show the headline findings, not the full analysis chain. | video / notebook |
| Size, date range, and fundamental distributions | done | `outputs/story/key_findings_from_artifacts.md`; `outputs/eda/quality.csv`; `outputs/eda/family_totals.csv`; `outputs/eda/hours.csv`; `outputs/eda/months.csv`; `outputs/eda/precincts.csv` | Use exact values from `key_findings_from_artifacts.md`: 16,559,243 raw rows, 16,250,291 FY2025 rows, 2024-07-01 to 2025-06-30. | video / notebook |

## Practical Next Steps

1. Build the website using `outputs/story/final_website_story_material.md` and the final named figures.
2. Add a notebook link to the website.
3. Convert `outputs/story/final_explainer_notebook_material.md` into final notebook sections.
4. Add explicit Segel and Heer Figure 7 subsections for Visual Narrative and Narrative Structure tools.
5. Add a real contributions section with group member names and responsibilities.
6. Add final references to both the notebook and website.

