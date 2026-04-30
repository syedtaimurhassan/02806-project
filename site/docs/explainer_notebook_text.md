# Explainer Notebook Text Draft

This file is draft markdown intended to be pasted into the final explainer notebook. It is written for the technical/report version of the project, not the public website.

## 1. Motivation

Parking tickets are one of the most ordinary ways people encounter city rules. They are small, annoying, and familiar. But at the scale of an entire fiscal year, they become a record of how the city manages the curb.

This project studies NYC's FY2025 parking-ticket system through issued ticket records. The goal is not to prove social inequality, demographic targeting, income inequality, or causal unfairness. The dataset alone is not enough for those claims. Instead, the project asks what the issued-ticket data can support directly: how the system changes across administrative space, real precinct geography, violation family, time of day, and estimated fine value.

The central idea is that NYC parking tickets look like one system from far away, but the data behaves like several layered systems when separated carefully. Precinct 0 behaves differently from real mappable precincts. Different precincts have different dominant rule families. Some violation families follow morning routines, while others peak later in the day. Ticket counts and estimated fine value are related, but not identical.

Main research question:

> When we separate administrative/automated enforcement from real curbside precinct enforcement, how unevenly does NYC's FY2025 parking-ticket system operate across precincts, violation families, time, and estimated fine value?

## 2. Dataset

The primary dataset is NYC Open Data's **Parking Violations Issued - Fiscal Year 2025** dataset. The analysis also uses supporting files for interpretation and mapping:

- NYC Open Data: Parking Violations Issued - Fiscal Year 2025.
- NYC Open Data: Police Precincts GeoJSON, used for precinct maps.
- NYC Department of Finance violation-code and fine information, used for rule and fine interpretation.
- `Parking_Violations_Issued_Data_Dictionary.xlsx`, used to understand field meanings.

The raw parking file contains issued ticket records. Each row is a ticket as recorded in the dataset. The file does not represent final payment outcomes, dismissals, reductions, or collected revenue.

The project treats the dataset as a record of issued tickets, not as a complete record of all illegal parking behavior. This distinction matters throughout the analysis.

## 3. Why This Dataset

This dataset is useful because it is public, large, citywide, and connected to an everyday urban experience. It contains enough structure to support several visualization angles: geography, rule type, timing, enforcement channel, estimated fine value, vehicle fields, streets, issuers, and data-quality checks.

It is also interesting because it is messy in a meaningful way. The first simple map does not tell the full story. Precinct 0 has to be understood before real precinct geography can be interpreted. Violation codes have to be grouped into readable families before the story becomes understandable. Estimated fine value has to be treated carefully because issued fines are not the same as actual revenue.

That combination makes the dataset a good fit for a social visualization project. It is large enough to reveal patterns, but limited enough that the final story must be honest about what it can and cannot prove.

## 4. Goal for the End-User Experience

The public website should feel like a short data story for a curious friend who has not taken the course. The reader should not need to know Python, pandas, NYC parking law, or urban policy vocabulary.

The desired end-user experience is:

1. The reader starts with a familiar idea: parking tickets.
2. They learn that the dataset contains issued tickets, not final outcomes.
3. They discover that Precinct 0 is a major administrative bucket and not normal geography.
4. They see that real mappable precincts carry uneven shares of curbside tickets.
5. They explore how different precincts are associated with different rule families.
6. They learn that ticket count, estimated fine value, and time of day add different layers.
7. They leave with a responsible conclusion: the project shows uneven issued-ticket geography, not causal unfairness.

The website should guide the reader through the story, while the interactive figures allow them to inspect details on their own.

## 5. Basic Stats

The following project statistics come from the current analysis artifacts:

- Raw rows inspected: **16,559,243**.
- FY2025 issued tickets retained after cleaning: **16,250,291**.
- FY2025 date range in the daily table: **July 1, 2024 through June 30, 2025**.
- Unique summons numbers in the FY2025 artifact: **16,250,291**.
- Duplicate summons numbers in the FY2025 artifact: **0**.
- Invalid dates removed: **1,470**.
- Rows outside FY2025 removed: **307,482**.
- Missing issue-hour rows: **31,280**, about **0.19%** of FY2025 rows.
- Precinct 0 rows: **7,524,683**, about **46.3%** of FY2025 rows.
- Real mappable precinct tickets: **8,724,635**.
- Number of real mappable precincts: **78**.

Important definition note:

The project uses **8,724,635** as the real mappable precinct total for final maps and concentration analysis. A broader nonzero precinct count differs by 973 records because some nonzero precinct labels cannot be joined to the precinct GeoJSON. For final geography, only real mappable precincts are used.

## 6. Cleaning and Preprocessing

The analysis begins by parsing issue dates and keeping records inside FY2025. Records with invalid issue dates are removed, and rows outside the FY2025 date range are excluded.

Next, the analysis creates compact summary tables so the full 3 GB dataset does not need to be repeatedly scanned. These tables support the rest of the notebook: basic quality checks, ticket counts by time, violation code, borough, precinct, state, plate type, agency, and later story-specific groupings.

The main preprocessing decisions are:

- Parse `issue_date` and keep FY2025 records only.
- Standardize key fields such as precinct, borough, issue hour, violation code, and issuing agency.
- Group violation codes into readable violation families such as Street cleaning, Meter / paid parking, No standing / no parking, Hydrant, Double parking, Registration / inspection sticker, Bus lane / bus stop, School-zone speed, Red light, and Other.
- Treat Precinct 0 as an important administrative bucket, not as a normal mapped precinct.
- Exclude Precinct 0 and unmappable precinct labels from real-precinct maps.
- Join real mappable precincts to the NYC Police Precincts GeoJSON.
- Estimate fine value using violation-code fine logic already developed in the notebook.

The cleaning process intentionally does not delete Precinct 0 from the project. Instead, the analysis separates it from real precinct geography. This keeps the administrative subsystem visible while preventing misleading maps.

Estimated fine value is also handled carefully. The analysis estimates fine value from issued tickets and code-level fine information, but this is not actual revenue.

## 7. Data Analysis

The analysis follows the final story structure of **The Uneven Curb**.

### Precinct 0

Precinct 0 is the first major analytical finding. It contains **7,524,683** FY2025 issued tickets, or **46.3%** of the retained dataset. It is dominated by camera/admin-style families, including:

- School-zone speed: **4,801,690** tickets.
- Bus lane / bus stop: **1,580,066** tickets.
- Red light: **639,934** tickets.
- MTA camera double parking: **491,920** tickets.

This supports the interpretation that Precinct 0 is not normal neighborhood geography. It should be analyzed, but not mapped as a real precinct.

Main figure:

- `outputs/story/fig_precinct0_vs_real_precincts.html`

### Real-Precinct Concentration

After separating Precinct 0 and unmappable labels, the analysis focuses on **78 real mappable precincts** with **8,724,635** issued tickets.

The distribution is concentrated:

- Top 10% of real mappable precincts: **27.2%** of real-precinct tickets.
- Top 25% of real mappable precincts: **49.9%** of real-precinct tickets.
- Gini coefficient of real-precinct ticket counts: **0.3732**.
- Coefficient of variation: **0.7177**.
- Top real precinct by ticket count: **Precinct 19**, with **447,142** tickets.

Main figures:

- `outputs/story/fig_real_precinct_concentration_curve.html`
- `outputs/story/fig_real_precinct_ticket_share_map.html`

### Violation Families and Local Specialization

Violation families make the code list readable and reveal how rule mix varies across the city.

Among real mappable precincts, the largest families are:

- Street cleaning: **1,809,380** tickets.
- No standing / no parking: **1,689,517** tickets.
- Other: **1,646,218** tickets.
- Meter / paid parking: **1,463,555** tickets.
- Registration / inspection sticker: **882,987** tickets.
- Hydrant: **660,484** tickets.

Dominant family counts by real mappable precinct:

- Street cleaning: **44** precincts.
- No standing / no parking: **12** precincts.
- Meter / paid parking: **12** precincts.
- Registration / inspection sticker: **5** precincts.
- Other: **5** precincts.

The strongest specialization example in the current final artifacts is **Precinct 123 / Registration / inspection sticker**, with a specialization ratio of **5.54** and **8,190** tickets.

Main figures:

- `outputs/story/fig_real_precinct_family_specialization_heatmap.html`
- `outputs/story/fig_dominant_family_by_precinct_map.html`

### Estimated Fine Value

Ticket count treats every ticket as one unit, but different violation types have different fine amounts. The estimated fine-value layer adds a second way to compare precincts.

For real mappable precincts:

- Estimated total fine value: **$612,808,346.26**.
- Average estimated fine per ticket: about **$70.24**.
- Top precinct by estimated fine value: **Precinct 19**, about **$31.6 million**.
- Largest upward rank shift from count to estimated fine value: **Precinct 33**, up **9** positions.
- Largest downward rank shift: **Precinct 78**, down **10** positions.
- Highest average estimated fine per ticket: **Precinct 22**, about **$83.00**.
- Lowest average estimated fine per ticket: **Precinct 78**, about **$58.67**.

Main figure:

- `outputs/story/fig_real_precinct_count_vs_estimated_fine_value.html`

Important wording:

This is **estimated fine value**, not revenue. The dataset contains issued tickets, not actual payment or adjudication outcomes.

### Timing

Violation families follow different hourly patterns:

- Street cleaning peaks at **9:00**.
- Meter / paid parking peaks at **13:00**.
- No standing / no parking peaks at **13:00**.
- Double parking peaks at **13:00**.
- Hydrant peaks at **6:00**.
- Registration / inspection sticker peaks at **8:00**.
- Bus lane / bus stop peaks at **16:00**.
- School-zone speed peaks at **12:00**.
- Red light peaks at **14:00**.
- MTA camera double parking peaks at **15:00**.

Main figure:

- `outputs/story/fig_violation_family_hourly_profiles.html`

Issue time is a recorded ticket timestamp. It should not automatically be read as the exact time the parking behavior began.

### Additional Analysis Kept Mainly for the Notebook

The notebook also contains useful supporting analysis that is not central enough for the main website:

- Street concentration.
- Repeat anonymized vehicle-key analysis.
- Issuing agency and issuer-code analysis.
- Observation-duration fields.
- Registration and expiration status checks.
- Legal-code and law-section checks.
- Summons integrity checks.
- Daily anomalies and likely late-file cutoff effects.

These analyses are useful for method transparency and caveats, but the website should remain focused on the main narrative.

## 8. Genre

Recommended genre:

> **Magazine-style narrative with bounded interactivity**

Alternative framing:

> **Martini-glass narrative: guided story first, then optional exploration**

This genre fits the project because the reader needs guidance through several traps: Precinct 0, issued tickets versus actual behavior, estimated fine value versus revenue, and raw maps versus risk maps. If the website were a pure dashboard, many readers would jump straight to a map and miss the most important caveats.

At the same time, the story benefits from interactivity. Hover details let readers inspect precincts, violation families, shares, specialization ratios, and hourly profiles themselves. The interaction should be bounded: enough to explore, not so much that the reader loses the central argument.

In Segel and Heer terms, the project should be mostly author-driven, with reader-driven exploration inside individual figures.

## 9. Visual Narrative Tools

The project uses several visual narrative tools to make the story understandable:

### Consistent Visual Platform

Most final visualizations are interactive HTML charts and maps. This gives the website a consistent visual language: readers can hover, inspect labels, and move through the story without switching between unrelated formats.

### Captions and Headlines

Each major figure needs a short title, a one-sentence caption, and a longer explanatory note. The captions should state exactly what the figure shows: issued tickets, real mappable precincts, estimated fine value, or timing profiles.

### Annotations and Callouts

Annotations should highlight the main reading of each chart:

- Precinct 0 is large and different.
- Real-precinct tickets are concentrated.
- Specialization ratio above 1 means "more prominent than citywide among real precincts."
- Estimated fine value is not revenue.
- Issue time is not always violation start time.

These notes are not decoration. They prevent the most likely misreadings.

### Hover Details

Hover labels are important because many figures contain precinct-level or family-level detail that would clutter a static chart. Hover details should show raw counts, percentages, precinct numbers, dominant families, average estimated fines, and specialization ratios where relevant.

### Filtering and Interactive Exploration

The interactivity should be bounded. Useful interactions include:

- Hovering over map precincts.
- Inspecting top families by precinct.
- Comparing hourly profiles by family.
- Reading rank shifts in the fine-value scatterplot.

The website does not need every notebook filter. It should not become a full dashboard.

### Progress Through Sections

The visual sequence should help the reader move through the argument:

1. See Precinct 0.
2. Separate real geography.
3. Map concentration.
4. Compare rule families.
5. Add estimated fine value.
6. Add time.
7. End with limitations.

This section-by-section progress is the main visual narrative structure.

## 10. Narrative Structure Tools

The project uses narrative structure tools from Segel and Heer by guiding the reader through an ordered story while leaving room for exploration.

### Ordering

The website should not start with the most detailed map. It should start with the framing and then reveal why Precinct 0 matters. The correct order is:

1. Dataset introduction.
2. Precinct 0 reveal.
3. Real precinct concentration.
4. Local rule-family differences.
5. Estimated fine value.
6. Time-of-day patterns.
7. Final limitations and references.

This order prevents naive map reading.

### Overview First

The reader first learns the main claim: NYC's FY2025 parking-ticket system is layered and uneven. Then the sections show the evidence piece by piece.

### Drill-Down

The story drills down from the full dataset to real mappable precincts, then to precinct-family specialization, then to fine value and timing. This makes the analysis feel cumulative rather than like separate charts.

### Repetition of Caveats

Important caveats are repeated because they apply across multiple figures:

- Issued tickets are not all parking violations.
- Estimated fine value is not revenue.
- Precinct 0 is not normal geography.
- Maps show enforcement footprint, not risk.
- Specialization is not targeting.

This repetition is intentional. It keeps the website accurate.

### Final Synthesis

The final synthesis should return to the main claim: NYC parking tickets look like one system, but the data reveals layered subsystems. The project proves uneven issued-ticket geography and timing, but it does not prove demographic inequality or causal unfairness.

## 11. Visualizations

Final website figures:

1. `fig_precinct0_vs_real_precincts.html`
   - Purpose: show why Precinct 0 must be separated.
   - Caveat: Precinct 0 is an administrative bucket, not fake data.

2. `fig_real_precinct_ticket_share_map.html`
   - Purpose: show the real curbside enforcement footprint after excluding Precinct 0 and unmappable precinct labels.
   - Caveat: not a risk map.

3. `fig_real_precinct_concentration_curve.html`
   - Purpose: quantify concentration across real mappable precincts.
   - Caveat: not normalized by curb length, traffic, population, or parking supply.

4. `fig_real_precinct_family_specialization_heatmap.html`
   - Purpose: show which violation families are unusually prominent in different precincts.
   - Caveat: specialization does not mean targeting.

5. `fig_dominant_family_by_precinct_map.html`
   - Purpose: show the leading rule family in each real mappable precinct.
   - Caveat: a dominant family does not explain why that rule appears there.

6. `fig_real_precinct_count_vs_estimated_fine_value.html`
   - Purpose: compare ticket count with estimated fine value.
   - Caveat: estimated fine value is not revenue.

7. `fig_violation_family_hourly_profiles.html`
   - Purpose: show different daily rhythms by violation family.
   - Caveat: issue time is a ticket timestamp, not always violation start time.

Recommended notebook-only or appendix figures:

- `fig8_violation_family_totals.html`
- `fig9_family_precinct0_share.html`
- `fig6_monthly_precinct0_share.html`
- `fig15_family_count_vs_fine_value.html`
- `fig16_family_average_fine.html`
- `fig21_street_concentration_curve.html`
- `fig25_repeat_vehicle_distribution.html`
- `fig33_issuing_agency_totals.html`
- `fig48_summons_integrity_summary.html`
- `fig52_daily_total_anomalies.html`
- `fig53_daily_family_anomalies.html`

## 12. Discussion

The strongest result is not one individual precinct or one specific violation family. The strongest result is the structure of the system. Once the dataset is separated carefully, NYC's FY2025 parking-ticket records show multiple layers: administrative buckets, real curbside geography, local rule-family specialization, timing patterns, and estimated fine-value differences.

The analysis also shows why cleaning choices matter. A naive precinct map would either ignore Precinct 0 or try to force it into geography. Both choices would be misleading. Separating Precinct 0 makes the real curbside geography clearer while still preserving the administrative subsystem as part of the story.

The project works best as a descriptive visualization project. It does not need a predictive model because the research question is not "can we predict tickets?" The question is "how does the issued-ticket system vary across space, rule type, time, and estimated value?" The answer comes from careful grouping, aggregation, mapping, and narrative visualization.

What could improve the project later:

- Normalize ticket counts by curb length, legal parking supply, meter density, or traffic volume.
- Compare issued tickets with land use, commercial density, transit corridors, or street-cleaning schedules.
- Add payment, dismissal, or adjudication outcomes if available.
- Build a small map filter for violation families on the website.
- Add better documentation for issuing agency codes if an official mapping is available.

## 13. Limitations

This project has several important limitations.

First, the dataset contains issued tickets. It does not contain all parking violations that happened in NYC. It only shows violations that became ticket records.

Second, the maps show where issued tickets were assigned, not where illegal parking was most common. A precinct with more tickets may have more curb space, more meters, more traffic, more enforcement, more commercial activity, or more parking demand. The current analysis does not normalize for those denominators.

Third, estimated fine value is not revenue. The dataset does not contain payment, dismissal, reduction, appeal, or collection outcomes.

Fourth, Precinct 0 is analytically important but not normal geography. It likely represents administrative, automated, missing, or non-standard precinct assignment patterns depending on the ticket source. It should be separated, not deleted and not mapped as a neighborhood.

Fifth, the project does not prove demographic inequality, racial targeting, income inequality, or causal unfairness. Those questions would require additional data and a different research design.

Sixth, some artifacts flag data-quality issues, including missing borough rows, missing issue-hour rows, unmappable nonzero precinct labels, and possible late-file cutoff effects near the end of June 2025.

These limitations do not make the project invalid. They define what the project can responsibly claim.

## 14. Contributions Placeholder

Replace this section with real names and responsibilities before submission.

Suggested format:

- **Name 1:** Data cleaning, FY2025 filtering, summary-table generation, and quality checks.
- **Name 2:** Violation-family grouping, Precinct 0 analysis, and fine-estimation logic.
- **Name 3:** Mapping, GeoJSON joins, precinct concentration analysis, and interactive map design.
- **Name 4:** Website narrative, captions, references, and explainer notebook writing.

Do not write "everyone contributed equally" unless the course explicitly allows it. The contribution section should describe actual work.

## 15. References

Primary data and official documentation:

- NYC Open Data. **Parking Violations Issued - Fiscal Year 2025.** https://data.cityofnewyork.us/d/m5vz-tzqv
- NYC Open Data. **Police Precincts.** https://data.cityofnewyork.us/d/y76i-bdw7
- NYC Department of Finance. **Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2025.** https://www.nyc.gov/assets/finance/downloads/pdf/25pdf/2025-local-law-6-report.pdf
- NYC Department of Finance. **Violation codes, fines, rules, and regulations.** https://www.nyc.gov/site/finance/vehicles/services-violation-codes.page
- NYC Department of Sanitation. **Street Cleaning / Alternate Side Parking.** https://www.nyc.gov/site/dsny/what-we-do/cleaning/street-cleaning-asp.page
- NYC311. **Alternate Side Parking and Street Cleaning.** https://portal.311.nyc.gov/article/?kanumber=KA-01011
- NYC Department of Transportation. **Parking Meters.** https://www.nyc.gov/html/dot/html/motorist/parking-rates.shtml
- MTA. **Automated Camera Enforcement.** https://www.mta.info/agency/new-york-city-transit/automated-camera-enforcement
- NYC311. **Bus Lane and MTA Bus Cameras.** https://portal.311.nyc.gov/article/?kanumber=KA-02325
- NYC DOT. **Speed Cameras - Frequently Asked Questions.** https://www.nyc.gov/html/dot/downloads/pdf/speed-camera-faq.pdf
- NYC311. **Red Light Cameras.** https://portal.311.nyc.gov/article/?kanumber=KA-02326

Visualization and narrative design:

- Segel, E., and Heer, J. **Narrative Visualization: Telling Stories with Data.** IEEE Transactions on Visualization and Computer Graphics, 2010. https://idl.cs.washington.edu/files/2010-Narrative-InfoVis.pdf

Context and limitations:

- Urban Institute. **What Parking Ticket Data Can and Cannot Tell Us amid Calls to Reform Fines and Fees.** https://www.urban.org/urban-wire/what-parking-ticket-data-can-and-cannot-tell-us-amid-calls-reform-fines-and-fees
- Urban Institute. **The Cost of Parking.** https://www.urban.org/research/publication/the-cost-of-parking
- Dan Levine. **Look for inequities in parking tickets.** https://danlevine.work/projects/look-for-inequities-in-parking-tickets/
- NACTO. **Curb Management.** https://nacto.org/program/reimagining-city-streets/multimodal-streets/curb-management/
- Manville, M., and Pinski, M. **The causes and consequences of curb parking management.** Transportation Research Part A, 2021. https://www.sciencedirect.com/science/article/pii/S0965856421001890
- Gregg, K., and Maisel, J. **Cutting across the curb.** Transport Policy, 2025. https://www.sciencedirect.com/science/article/pii/S0967070X2500037X

Journalism and public explainers:

- Gothamist. **Is double parking legal in NYC? No, but here's how drivers do it politely.** https://gothamist.com/news/is-it-illegal-to-double-park-in-nyc
- Gothamist. **New push for automated ticketing of drivers who double park in NYC.** https://gothamist.com/news/new-push-for-automated-ticketing-of-drivers-who-double-park-in-nyc
