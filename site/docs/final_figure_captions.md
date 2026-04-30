# Final Figure Captions

This file covers the final website candidate figures plus optional backup figures that are either referenced in the website draft or explicitly useful for the project narrative. The requested `fig57` to `fig60` files are not present in the current outputs folder; the current final equivalents use descriptive filenames:

- `fig57_precinct_concentration_curve.html` -> `fig_real_precinct_concentration_curve.html`
- `fig58_precinct_family_specialization_heatmap.html` -> `fig_real_precinct_family_specialization_heatmap.html`
- `fig59_precinct_count_vs_estimated_fine_value.html` -> `fig_real_precinct_count_vs_estimated_fine_value.html`
- `fig60_real_precinct_family_time_profiles.html` -> `fig_violation_family_hourly_profiles.html`

## Core Website Figures

### `fig_precinct0_vs_real_precincts.html`

- **Short title:** Precinct 0 Is Different
- **One-sentence caption:** Precinct 0 contains a large share of FY2025 issued tickets, but its violation-family mix looks very different from real precincts.
- **Longer explanatory caption:** This figure compares the administrative bucket labeled Precinct 0 with real precinct records. Precinct 0 is dominated by camera and administrative-style families such as school-zone speed, bus lane / bus stop, red light, and MTA camera double parking, which is why it should be separated before making geographic claims.
- **How to read it:** Compare the family shares for Precinct 0 against the real-precinct group; hover for raw issued-ticket counts and percentages.
- **Key takeaway:** Precinct 0 is analytically important, but it is not normal neighborhood geography.
- **Caveat:** Do not call Precinct 0 fake data; it is an administrative bucket and should not be mapped as a real precinct.
- **Source data file:** `outputs/eda/precinct0_vs_real_precincts_family.csv`; `outputs/story/precinct0_narrative_metrics.json`
- **Website placement:** The Place That Is Not a Place

### `fig_real_precinct_ticket_share_map.html`

- **Short title:** Mapping the Curbside Footprint
- **One-sentence caption:** Among real mappable precincts, FY2025 issued tickets are geographically uneven.
- **Longer explanatory caption:** This map shows the real curbside enforcement footprint after Precinct 0 and unmappable precinct labels are excluded. Each mapped precinct is colored by ticket volume or share, with hover details for ticket count, share of real-precinct tickets, dominant violation family, and average estimated fine where available.
- **How to read it:** Darker or stronger-colored precincts carry a larger share of issued tickets among real mappable precincts.
- **Key takeaway:** The real curbside ticket footprint is concentrated in some precincts more than others.
- **Caveat:** This is not a risk map and is not adjusted for curb length, meter density, population, car ownership, traffic, parking supply, or actual illegal-parking rates.
- **Source data file:** `outputs/eda/real_precinct_map_profile.csv`; NYC Open Data Police Precincts GeoJSON
- **Website placement:** The Real Curb Is Uneven

### `fig_real_precinct_concentration_curve.html`

- **Short title:** How Concentrated Is the Real Curb?
- **One-sentence caption:** A small share of real mappable precincts accounts for a large share of real-precinct issued tickets.
- **Longer explanatory caption:** This curve summarizes the unevenness of issued-ticket volume across 78 real mappable precincts. In the current artifacts, the top 10% of precincts account for 27.2% of real-precinct tickets, and the top 25% account for 49.9%.
- **How to read it:** The diagonal reference line represents an even distribution; the more the curve departs from that line, the more concentrated the ticket footprint is.
- **Key takeaway:** Real-precinct enforcement is concentrated rather than evenly spread.
- **Caveat:** The figure excludes Precinct 0 and unmappable precinct labels, and it is not normalized by exposure measures such as curb length or parking demand.
- **Source data file:** `outputs/eda/real_precinct_concentration_metrics.csv`; `outputs/story/real_precinct_concentration_summary.json`
- **Website placement:** The Real Curb Is Uneven

### `fig_real_precinct_family_specialization_heatmap.html`

- **Short title:** Different Precincts, Different Rules
- **One-sentence caption:** Real precincts differ in which parking-rule families are unusually prominent.
- **Longer explanatory caption:** This heatmap compares each real mappable precinct's violation-family mix with the citywide real-precinct mix. A specialization ratio above 1 means that a family is more prominent in that precinct than it is across real precincts overall.
- **How to read it:** Rows are precincts, columns are violation families, and color shows the specialization ratio centered around 1.
- **Key takeaway:** The curbside ticket system has local rule specializations, not just different ticket totals.
- **Caveat:** "More prominent" does not mean targeted or unfair; the figure describes issued-ticket mix only.
- **Source data file:** `outputs/eda/real_precinct_family_profile.csv`; `outputs/eda/real_precinct_family_specialization_top_examples.csv`
- **Website placement:** Different Precincts, Different Parking Rules

### `fig_dominant_family_by_precinct_map.html`

- **Short title:** Dominant Rule Family by Precinct
- **One-sentence caption:** The leading violation family changes across real mappable precincts.
- **Longer explanatory caption:** This map colors each real mappable precinct by its dominant violation family and includes hover text for the top families by share. It helps readers see whether a precinct's issued-ticket mix is mostly street cleaning, meters, no-standing/no-parking, sticker-related tickets, or another family.
- **How to read it:** Read the color as a category, not as ticket volume; use hover details to see the top family shares.
- **Key takeaway:** Different precincts are shaped by different parking-rule families.
- **Caveat:** A dominant family can be a plurality rather than a majority, and the map does not explain why a rule family dominates.
- **Source data file:** `outputs/eda/real_precinct_map_profile.csv`; `outputs/eda/dominant_family_by_precinct.csv`; NYC Open Data Police Precincts GeoJSON
- **Website placement:** Different Precincts, Different Parking Rules

### `fig_real_precinct_count_vs_estimated_fine_value.html`

- **Short title:** Counts and Estimated Fine Value
- **One-sentence caption:** Ticket counts and estimated fine value are related, but they do not tell exactly the same story.
- **Longer explanatory caption:** Each point is a real mappable precinct. The x-axis shows issued-ticket count and the y-axis shows estimated total fine value. Rank shifts show where violation mix changes the story beyond raw ticket volume.
- **How to read it:** Look for precincts above or below the main pattern; those are places where estimated fine value is higher or lower than ticket count alone might suggest.
- **Key takeaway:** Estimated fine value adds a second layer to the geography of issued tickets.
- **Caveat:** This is estimated fine value from issued tickets, not actual collected revenue; the dataset does not include payments, dismissals, reductions, or final outcomes.
- **Source data file:** `outputs/eda/real_precinct_estimated_fine_value.csv`; `outputs/story/real_precinct_estimated_fine_value_summary.json`
- **Website placement:** Tickets Are Counted Once, But They Do Not Cost the Same

### `fig_violation_family_hourly_profiles.html`

- **Short title:** The Curb Has a Clock
- **One-sentence caption:** Different violation families peak at different times of day.
- **Longer explanatory caption:** This line chart compares hourly profiles by violation family using the share of each family's daily issued tickets. It shows that street cleaning, meters, no-standing/no-parking, hydrants, double parking, and sticker-related tickets follow different daily rhythms.
- **How to read it:** Follow each line across the 24-hour day; the y-axis is each family's share of daily tickets, so the chart compares timing patterns rather than raw family size.
- **Key takeaway:** The ticket system is temporal as well as spatial.
- **Caveat:** Issue time is a recorded ticket timestamp and may not be the exact time a violation began; some camera/admin patterns may include processing artifacts.
- **Source data file:** `outputs/eda/violation_family_hourly_profiles.csv`; `outputs/story/violation_family_hourly_profiles_summary.json`
- **Website placement:** The Uneven Curb Has a Clock

## Optional Website Support Figures

### `fig8_violation_family_totals.html`

- **Short title:** The Biggest Rule Families
- **One-sentence caption:** FY2025 issued tickets are concentrated in a handful of major violation families.
- **Longer explanatory caption:** This figure groups raw violation codes into readable families and shows their total issued-ticket counts across the cleaned FY2025 dataset. It is useful as an early orientation figure before the story splits administrative records from real curbside geography.
- **How to read it:** Larger bars represent violation families with more issued tickets in the cleaned FY2025 data.
- **Key takeaway:** Violation-family grouping makes the large code list readable for a public audience.
- **Caveat:** Citywide family totals mix Precinct 0, camera/admin records, and real precinct records, so they should not be treated as a real-precinct geography chart.
- **Source data file:** `outputs/eda/family_totals.csv`; `outputs/story/family_metrics.json`
- **Website placement:** Optional Dataset Introduction support figure

### `fig9_family_precinct0_share.html`

- **Short title:** Which Families Live in Precinct 0?
- **One-sentence caption:** Some violation families are almost entirely assigned to Precinct 0, while others mostly appear in real precincts.
- **Longer explanatory caption:** This figure shows the share of each violation family assigned to Precinct 0. It supports the idea that Precinct 0 is a different subsystem, especially for camera/admin-style families.
- **How to read it:** Families with high Precinct 0 shares are more strongly associated with the administrative bucket.
- **Key takeaway:** Precinct 0 is not just large; it is also rule-family specific.
- **Caveat:** A high Precinct 0 share does not prove every record in that family is automated; use official rule sources for camera-program details.
- **Source data file:** `outputs/eda/family_channel_summary.csv`; `outputs/story/family_metrics.json`
- **Website placement:** Optional support inside The Place That Is Not a Place

### `fig6_monthly_precinct0_share.html`

- **Short title:** Precinct 0 Over Time
- **One-sentence caption:** The Precinct 0 share changes month by month across FY2025.
- **Longer explanatory caption:** This figure tracks how much of each month's issued-ticket volume belongs to Precinct 0 versus real precincts. It can support the point that administrative and real-precinct systems do not always move together.
- **How to read it:** Compare the Precinct 0 share across months; higher values mean more of that month's tickets came from the administrative bucket.
- **Key takeaway:** The administrative bucket is a persistent and variable part of the dataset.
- **Caveat:** Monthly differences may reflect enforcement, program, processing, or data-timing differences; the chart does not identify a single cause.
- **Source data file:** `outputs/eda/channel_month.csv`; `outputs/story/timing_metrics.json`
- **Website placement:** Optional support inside The Place That Is Not a Place or explainer notebook

### `fig12_dominant_family_by_precinct.html`

- **Short title:** Dominant Family by Real Precinct
- **One-sentence caption:** This earlier precinct figure shows which violation family leads in each real mappable precinct.
- **Longer explanatory caption:** The figure uses the same real-precinct dominant-family idea as the final map, but is better suited as a compact backup or notebook companion. It excludes Precinct 0 and uses the real precinct family profile.
- **How to read it:** Each precinct is represented by its leading violation family; use the values to compare local rule mix.
- **Key takeaway:** Dominant violation families vary across real precincts.
- **Caveat:** Use the newer `fig_dominant_family_by_precinct_map.html` as the main website map because it is more directly tied to the final geographic story.
- **Source data file:** `outputs/eda/dominant_family_by_precinct.csv`
- **Website placement:** Optional support in Different Precincts, Different Parking Rules

### `fig13_street_cleaning_precinct_share.html`

- **Short title:** Street Cleaning's Local Footprint
- **One-sentence caption:** Street-cleaning tickets make up very different shares of issued tickets across real precincts.
- **Longer explanatory caption:** This figure focuses on one rule family rather than all families at once. It is useful if the website wants a concrete example of how one common rule family varies across the city.
- **How to read it:** Higher values mean street cleaning makes up a larger share of that precinct's issued tickets.
- **Key takeaway:** Even a familiar rule like alternate-side street cleaning is not equally prominent everywhere.
- **Caveat:** The figure excludes Precinct 0 and does not normalize by street-cleaning route length, curb supply, or the number of cars parked during ASP windows.
- **Source data file:** `outputs/eda/family_precinct.csv`
- **Website placement:** Optional support in Different Precincts, Different Parking Rules

### `fig15_family_count_vs_fine_value.html`

- **Short title:** Families by Count and Estimated Value
- **One-sentence caption:** Violation families differ in both how many tickets they produce and their estimated fine value.
- **Longer explanatory caption:** This figure compares family-level ticket counts with estimated fine value. It is a useful support figure for explaining why the money layer is not identical to raw ticket volume.
- **How to read it:** Families farther right have more issued tickets; families higher up have larger estimated fine value.
- **Key takeaway:** Rule family mix helps explain why estimated fine value can tell a different story from count alone.
- **Caveat:** Estimated fine value is not revenue and is based on the notebook's fine-estimation logic.
- **Source data file:** `outputs/eda/family_fine_estimates.csv`; `outputs/story/family_fine_metrics.json`
- **Website placement:** Optional support inside Tickets Are Counted Once, But They Do Not Cost the Same

### `fig16_family_average_fine.html`

- **Short title:** Average Estimated Fine by Family
- **One-sentence caption:** Some violation families have higher average estimated fines than others.
- **Longer explanatory caption:** This figure shows the estimated average fine per ticket by violation family. It can help readers understand why two precincts with similar ticket counts may differ in estimated fine value.
- **How to read it:** Higher bars mean higher estimated fine per issued ticket for that family.
- **Key takeaway:** Ticket type matters for the estimated money layer.
- **Caveat:** These are estimated fine amounts, not paid amounts or final adjudicated outcomes.
- **Source data file:** `outputs/eda/family_fine_estimates.csv`; `outputs/story/family_fine_metrics.json`
- **Website placement:** Optional support inside Tickets Are Counted Once, But They Do Not Cost the Same

### `fig11_family_hour_profiles.html`

- **Short title:** Early Family Hour Profiles
- **One-sentence caption:** This earlier hourly figure shows how violation-family ticket counts vary across the day.
- **Longer explanatory caption:** The figure is an earlier version of the family timing analysis. It can remain as a notebook companion, while the final website should prefer `fig_violation_family_hourly_profiles.html` because it uses normalized family shares.
- **How to read it:** Compare hour-by-hour ticket levels across violation families.
- **Key takeaway:** Families do not follow the same daily schedule.
- **Caveat:** Raw hourly counts can be dominated by the largest families, so normalized profiles are better for the public website.
- **Source data file:** `outputs/eda/family_hour.csv`
- **Website placement:** Optional notebook companion for The Uneven Curb Has a Clock

### `fig4_channel_hour_profile.html`

- **Short title:** Administrative and Real-Precinct Hours
- **One-sentence caption:** Precinct 0 and real precinct tickets have different hourly patterns.
- **Longer explanatory caption:** This figure compares ticket counts by hour for the broad channel split between Precinct 0 and real precincts. It supports the layered-system argument but is less central than the violation-family timing figure.
- **How to read it:** Compare the hour profiles for the two broad channels.
- **Key takeaway:** The administrative bucket and real precincts do not have identical daily rhythms.
- **Caveat:** This is a broad channel split, not a detailed enforcement-method classification.
- **Source data file:** `outputs/eda/channel_hour.csv`; `outputs/story/timing_metrics.json`
- **Website placement:** Optional support inside The Uneven Curb Has a Clock

### `fig7_channel_hour_weekday_heatmaps.html`

- **Short title:** Hour and Weekday Patterns
- **One-sentence caption:** Ticket timing differs by hour and weekday across broad enforcement channels.
- **Longer explanatory caption:** This heatmap-style figure adds weekday context to the hour-of-day analysis. It is useful for the explainer notebook or an appendix if the website needs extra timing detail.
- **How to read it:** Darker cells indicate more issued tickets for a channel at a given weekday and hour.
- **Key takeaway:** Timing patterns are structured by both hour and weekday.
- **Caveat:** This is a count heatmap and may reflect data-processing or program timing as well as curbside enforcement routines.
- **Source data file:** `outputs/eda/channel_hour_weekday.csv`
- **Website placement:** Optional support or explainer-notebook-only timing appendix

### `fig19_state_group_precinct0_share.html`

- **Short title:** Precinct 0 by Vehicle State Group
- **One-sentence caption:** Precinct 0 shares differ across broad vehicle state groups.
- **Longer explanatory caption:** This figure connects the administrative bucket to broad registration-state groups. It is useful as a diagnostic or appendix figure, but it is not part of the main website story.
- **How to read it:** Higher shares indicate that more issued tickets for that state group are assigned to Precinct 0 rather than real precincts.
- **Key takeaway:** Precinct 0 patterns also vary by vehicle registration grouping.
- **Caveat:** Do not use this figure to make claims about driver identity, residence, demographics, or fairness.
- **Source data file:** `outputs/eda/vehicle_state_channel.csv`
- **Website placement:** Optional appendix / not recommended for the main website narrative

### `fig20_plate_class_precinct0_share.html`

- **Short title:** Precinct 0 by Plate Class
- **One-sentence caption:** Precinct 0 shares differ across vehicle plate classes.
- **Longer explanatory caption:** This figure shows how the administrative bucket relates to broad plate-class categories. It can support a technical appendix about vehicle fields, but it is not necessary for the main public story.
- **How to read it:** Higher values mean a plate class has a larger share of issued tickets assigned to Precinct 0.
- **Key takeaway:** The administrative bucket is not uniform across vehicle metadata fields.
- **Caveat:** Plate class is not a demographic field and should not be used to infer driver identity or social group.
- **Source data file:** `outputs/eda/vehicle_plate_channel.csv`
- **Website placement:** Optional appendix / not recommended for the main website narrative
