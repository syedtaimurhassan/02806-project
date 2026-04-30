# Final Quality Check

Reviewed folder: `outputs/final_material_packet/`

Files reviewed:

- `README.md`
- `artifact_inventory.md`
- `key_findings_from_artifacts.md`
- `project_requirement_checklist.md`
- `reference_bank.md`
- `storyline_bank.md`
- `final_narrative_plan.md`
- `website_copy_draft.md`
- `final_figure_captions.md`
- `explainer_notebook_text.md`
- `claim_citation_map.md`

## 1. Accuracy

**Status: Pass, with minor final-polish notes.**

The major numbers used in the website and explainer material are tied to project artifacts:

- Raw rows inspected: `outputs/eda/quality.csv`
- FY2025 retained rows: `outputs/eda/quality.csv`
- Date range: `outputs/eda/daily_total.csv` and NYC Open Data
- Precinct 0 count/share: `outputs/story/precinct0_narrative_metrics.json`
- Real mappable precinct count and ticket total: `outputs/story/real_precinct_concentration_summary.json`
- Top 10% and top 25% concentration shares: `outputs/story/real_precinct_concentration_summary.json`
- Dominant-family counts by precinct: `outputs/story/real_precinct_map_summary.json` and `outputs/eda/dominant_family_by_precinct.csv`
- Specialization examples: `outputs/story/real_precinct_family_specialization_summary.json` and `outputs/eda/real_precinct_family_specialization_top_examples.csv`
- Estimated fine value: `outputs/story/real_precinct_estimated_fine_value_summary.json`
- Hourly peaks: `outputs/story/violation_family_hourly_profiles_summary.json`

External facts are linked to sources in `reference_bank.md` and `claim_citation_map.md`. Official NYC sources are used for dataset scope, precinct boundaries, violation codes/fines, ASP/street cleaning, meters, camera enforcement, and payment/dispute caveats.

No invented project numbers were found in the packet. The material consistently points readers back to artifact files for numerical claims.

Minor note:

- The phrase "more than sixteen million ticket records" is supported by the cleaned project count of 16,250,291, but the exact number should appear soon after it, as it does in `website_copy_draft.md`.

## 2. Safety of Claims

**Status: Pass.**

The packet avoids unsupported demographic or causal claims:

- No positive claim says the project proves demographic inequality.
- No positive claim says the project proves racial targeting.
- No positive claim says the project proves income inequality.
- No positive claim says the project proves causal unfairness.
- "Targeted," "unfair," "income," and "racial" appear as caveats, forbidden claims, or limitation language.

Fine-value language is safe:

- The packet repeatedly says **estimated fine value**, not revenue.
- Where "revenue" or "collected" appears, it is used as a warning or limitation.
- `claim_citation_map.md` explicitly flags "Estimated fine value is revenue" as a claim not to use.

Issued-ticket and illegal-parking language is mostly safe:

- The packet consistently says **issued tickets** or **ticket records** for project findings.
- "Illegal parking" appears mainly in limitation language, such as explaining that the dataset does not show all illegal parking or where illegal parking is most common.
- `claim_citation_map.md` explicitly flags "The maps show where illegal parking is most common" as unsupported.

Precinct 0 language is safe:

- The packet says Precinct 0 is not fake data.
- It frames Precinct 0 as analytically important but not normal geography.
- The only "maybe" claim in the citation map is the phrase "administrative bucket," which is safe if described as the project's analytical framing rather than an official NYC label.

Minor final-polish note:

- In final public copy, prefer "shows" over "proves" except in the limitations section. For example, "This project shows uneven issued-ticket geography" is softer than "This project proves..."

## 3. Project Requirement Alignment

**Status: Mostly pass.**

Website requirements:

- Website story exists: `website_copy_draft.md`
- Final section order exists: `final_narrative_plan.md`
- Figure captions exist: `final_figure_captions.md`
- References exist: `reference_bank.md`
- Claim/citation mapping exists: `claim_citation_map.md`
- Essential figures are identified in `README.md`

Explainer notebook requirements:

- Notebook draft text exists: `explainer_notebook_text.md`
- Motivation, dataset, why this dataset, user experience goal, basic stats, cleaning, analysis, genre, visual narrative tools, narrative structure tools, visualizations, discussion, limitations, contributions placeholder, and references are all present.
- Genre is explicitly explained as **Magazine-style narrative with bounded interactivity** and **Martini-glass narrative: guided story first, then optional exploration**.
- Segel and Heer narrative design language is included in the genre/tool sections.

Remaining requirement gaps:

- The actual website has not been built yet.
- The website still needs a real link to the final explainer notebook.
- The contributions section is still a placeholder and must be replaced with real names/responsibilities.

## 4. Readability

**Status: Pass.**

Website copy:

- `website_copy_draft.md` is non-technical and readable for a general audience.
- It avoids code and long methods blocks.
- It uses project language consistently: issued tickets, enforcement footprint, estimated fine value, administrative bucket, and real mappable precincts.

Captions:

- `final_figure_captions.md` explains what each figure shows.
- Captions include "how to read it" notes.
- Caveats are attached directly to figures where readers are most likely to overinterpret.

Tone:

- The tone is clear and slightly playful without becoming unserious.
- Caveats are repeated enough to protect the claims, but they do not overwhelm the main story.

Minor final-polish note:

- When converting to the website, keep the caveats visually compact. Good pattern: one short caveat line below each chart rather than a long warning box after every section.

## 5. Website Readiness

**Status: Ready for content build, not yet a built website.**

Essential figures identified:

1. `outputs/story/fig_precinct0_vs_real_precincts.html`
2. `outputs/story/fig_real_precinct_ticket_share_map.html`
3. `outputs/story/fig_real_precinct_concentration_curve.html`
4. `outputs/story/fig_real_precinct_family_specialization_heatmap.html`
5. `outputs/story/fig_dominant_family_by_precinct_map.html`
6. `outputs/story/fig_real_precinct_count_vs_estimated_fine_value.html`
7. `outputs/story/fig_violation_family_hourly_profiles.html`

Website materials ready:

- Section order: `final_narrative_plan.md`
- Public copy: `website_copy_draft.md`
- Captions: `final_figure_captions.md`
- References: `reference_bank.md`
- Claim safety check: `claim_citation_map.md`
- Key numbers: `key_findings_from_artifacts.md`

The packet is ready to guide the website implementation.

## Ready for Website Build

**Yes, with content-risk safeguards.**

The written material is ready to turn into a website. The remaining work is implementation, not analysis.

## Biggest Remaining Risks

1. **Contribution section is still incomplete.**  
   `explainer_notebook_text.md` has a placeholder. Replace it with real group member names and responsibilities before submission.

2. **Website/notebook link does not exist yet.**  
   The website must link to the final explainer notebook once both are finalized and hosted or packaged.

3. **Figure files are not copied into the packet.**  
   The README intentionally points to figures in `outputs/story/`. When building the website, copy or embed those HTML files into the website asset structure.

4. **Some source links may be external or paywalled.**  
   Official NYC links are strongest for rules and dataset facts. Academic and journalism links should be used as context, not as the only support for core claims.

5. **Old `fig57` to `fig60` names are not present.**  
   The final equivalents use descriptive filenames. Keep using:
   - `fig_real_precinct_concentration_curve.html`
   - `fig_real_precinct_family_specialization_heatmap.html`
   - `fig_real_precinct_count_vs_estimated_fine_value.html`
   - `fig_violation_family_hourly_profiles.html`

6. **Caveat language must survive the website build.**  
   Do not remove the caveats about issued tickets, estimated fine value, Precinct 0, risk maps, and missing denominators.

## Things to Fix Before Coding the Website

1. Replace the contributions placeholder in `explainer_notebook_text.md`.
2. Decide the website framework or format.
3. Decide whether figures will be embedded as HTML iframes, copied into a figures folder, or linked as standalone pages.
4. Copy the 7 essential HTML figures from `outputs/story/` into the website asset folder.
5. Keep the final website text aligned with `website_copy_draft.md`.
6. Use `final_figure_captions.md` for chart captions and "how to read" notes.
7. Use `claim_citation_map.md` as the final text review checklist.
8. Add references from `reference_bank.md`.
9. Add a visible explainer-notebook link.
10. Test all interactive figures locally before publishing.

## Final Verdict

The material packet is coherent, cited, and safe for the project's thesis. It is ready to support website construction as long as the final build keeps the existing claim boundaries:

- issued tickets, not all violations
- enforcement footprint, not risk
- estimated fine value, not revenue
- Precinct 0 as an administrative bucket, not fake data
- uneven issued-ticket geography, not demographic inequality or causal unfairness
