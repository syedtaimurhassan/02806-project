# Final Narrative Plan

## Project Title

**The Uneven Curb**

## Subtitle

**How NYC's Parking-Ticket System Changes Depending on Where You Stand**

## Main Claim

NYC's FY2025 parking-ticket system is not one uniform machine. It is a layered system: administrative/automated records, real curbside precinct enforcement, local rule specializations, daily timing patterns, and uneven estimated fine value.

## Website Section Order

1. Opening hook
2. Dataset introduction
3. Precinct 0 / non-place reveal
4. Real precinct concentration
5. Different precincts, different rules
6. Fine value layer
7. Time-of-day layer
8. What this proves and does not prove
9. Methods / notebook link / references

## 1. Opening Hook

**Section goal:** Pull the reader into the idea that a parking ticket is not just a boring slip of paper. It is a trace of a city rule system that changes depending on where and when someone meets the curb.

**Draft text:**

NYC parking tickets look simple from the outside. A car is parked somewhere, a rule is broken, and a ticket appears. Easy story, right?

Not quite. In FY2025, NYC's parking-ticket data behaves less like one giant machine and more like several machines stacked together. Some records come from camera and administrative systems. Some come from real curbside precinct enforcement. Some places are mostly street-cleaning stories. Others are meter, hydrant, no-standing, sticker, bus-lane, or speed-camera stories.

This project follows that split. It does not ask whether NYC parking enforcement is socially fair. It asks a question the dataset can answer directly: how does the issued-ticket system change across administrative space, real precinct geography, parking-rule type, time of day, and estimated fine value?

**Main artifact/figure:** `outputs/story/fig_precinct0_vs_real_precincts.html`

**Supporting artifact/figure:** `outputs/story/fig_real_precinct_ticket_share_map.html`

**Sources to cite:**

- NYC Open Data, `Parking Violations Issued - Fiscal Year 2025`
- NYC DOF, `Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2025`
- Urban Institute, `What Parking Ticket Data Can (and Cannot) Tell Us...`

**Caveat to include:** The data shows issued ticket records, not all illegal parking, final payments, dismissals, driver demographics, or causal fairness.

**Transition sentence:** Before mapping anything, we need to understand what is actually inside the FY2025 ticket file.

## 2. Dataset Introduction

**Section goal:** Explain the dataset in plain language: what it contains, the cleaned FY2025 scope, and why issued-ticket data is useful but limited.

**Draft text:**

The analysis starts with NYC's FY2025 parking violations dataset. After basic date cleaning, the project keeps 16,250,291 FY2025 ticket records from July 1, 2024 through June 30, 2025. The file is huge, but each row is still a very specific thing: a ticket record at the time it was issued.

That distinction matters. An issued ticket is not the same as a paid ticket. It is not the same as collected revenue. It is also not a perfect count of every parking violation that happened in the city. Some violations may never be ticketed, and the file does not include the denominator we would need for risk: how many cars were parked, how much curb exists, how much meter supply each precinct has, or how much traffic moved through each area.

So the project uses the dataset for what it can support well. It can show the geography of issued records, the rule families that appear in different places, the timing of ticket issuance, and an estimated fine-value layer based on violation types. That is enough to tell a strong story, as long as the story stays honest.

**Main artifact/figure:** `outputs/story/key_findings_from_artifacts.md`

**Supporting artifact/figure:** `outputs/eda/quality.csv`

**Sources to cite:**

- NYC Open Data, `Parking Violations Issued - Fiscal Year 2025`
- NYC official, `NYC parking or camera tickets`
- NYC311, `Parking Ticket or Camera Violation Payment`
- Urban Institute, `What Parking Ticket Data Can (and Cannot) Tell Us...`

**Caveat to include:** The cleaned project total differs from the official DOF report total because this analysis filters and cleans the dataset for FY2025 analysis; use project artifacts for project numbers and DOF reports for official citywide context.

**Transition sentence:** Once the file is cleaned, the first surprise is that one of the biggest "places" in the data is not really a place at all.

## 3. Precinct 0 / Non-Place Reveal

**Section goal:** Make Precinct 0 the first major reveal and explain why it must be separated before making spatial claims.

**Draft text:**

The biggest trap in the dataset is Precinct 0. It sounds like a precinct, but it should not be read like a neighborhood. In the cleaned FY2025 records, Precinct 0 contains 7,524,683 tickets, or 46.3% of the retained dataset.

Its rule mix also gives away that it is a different subsystem. Precinct 0 is dominated by families such as School-zone speed, Bus lane / bus stop, Red light, and MTA camera double parking. Those are not the same as a traffic agent walking a curb and writing a street-cleaning or hydrant ticket inside a normal police precinct.

That does not make Precinct 0 bad data. It makes it analytically important. It is part of the parking-ticket system, but it is not normal geography. If we drop it completely, we lose almost half the system. If we map it like a neighborhood, we mislead the reader. The right move is to separate it.

**Main artifact/figure:** `outputs/story/fig_precinct0_vs_real_precincts.html`

**Supporting artifact/figure:**

- `outputs/story/precinct0_narrative_metrics.json`
- `outputs/eda/family_channel_summary.csv`
- `outputs/eda/precinct_zero_codes.csv`

**Sources to cite:**

- NYC DOF, `Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2025`
- NYC DOT, `Speed Cameras - Frequently Asked Questions`
- NYC311, `Red Light Cameras`
- MTA, `Automated Camera Enforcement`
- NYC311, `Bus Lane and MTA Bus Cameras`

**Caveat to include:** Do not call Precinct 0 fake data. It likely reflects administrative, automated, missing, or non-standard precinct assignment patterns depending on the ticket source.

**Transition sentence:** With the non-place separated, the actual curbside geography becomes much clearer.

## 4. Real Precinct Concentration

**Section goal:** Show that real mappable precinct enforcement is uneven, using both a map and a concentration curve.

**Draft text:**

After Precinct 0 and unmappable precinct labels are separated, the analysis focuses on 78 mappable real precincts. These precincts account for 8,724,635 real-precinct ticket records. This is the best version of the data for asking a geographic question: where does the curbside ticket footprint appear?

The answer is not "everywhere equally." The top 10% of mappable precincts account for 27.2% of real-precinct tickets, and the top 25% account for 49.9%. The top precinct, Precinct 19, has 447,142 tickets, which is about 5.1% of the mappable real-precinct total.

This is where the website should slow down and let the reader explore. The map shows where tickets are concentrated; the concentration curve explains the pattern without requiring the reader to know every precinct number.

**Main artifact/figure:** `outputs/story/fig_real_precinct_ticket_share_map.html`

**Supporting artifact/figure:** `outputs/story/fig_real_precinct_concentration_curve.html`

**Sources to cite:**

- NYC Open Data, `Police Precincts`
- NYC Open Data, `Parking Violations Issued - Fiscal Year 2025`
- NACTO, `Curb Management`
- Manville and Pinski, `The causes and consequences of curb parking management`
- Urban Institute, `What Parking Ticket Data Can (and Cannot) Tell Us...`

**Caveat to include:** This is an enforcement-footprint measure, not a risk measure. It is not adjusted for curb length, meter density, parking supply, population, car ownership, traffic, or the number of vehicles parked.

**Transition sentence:** But ticket volume is only the first layer; the next question is what kinds of rules dominate in different places.

## 5. Different Precincts, Different Rules

**Section goal:** Show that precincts differ not only in ticket volume, but in rule mix and specialization.

**Draft text:**

Once we look at violation families, the city starts to split into different curb personalities. Among mappable real precincts, Street cleaning is the dominant family in 44 precincts. No standing / no parking leads in 12 precincts. Meter / paid parking leads in 12. Registration / inspection sticker leads in 5, and Other leads in 5.

The heatmap makes this more specific. A specialization ratio above 1 means a family is more prominent in that precinct than it is citywide among real precincts. Some examples stand out: Precinct 123 has a Registration / inspection sticker specialization ratio of 5.54, and several other Staten Island precincts also stand out on sticker-related tickets. Precincts 34 and 44 stand out for Double parking.

This is the part where the story gets local. The same citywide ticket system can feel different depending on the rules that dominate the curb around you.

**Main artifact/figure:** `outputs/story/fig_real_precinct_family_specialization_heatmap.html`

**Supporting artifact/figure:** `outputs/story/fig_dominant_family_by_precinct_map.html`

**Sources to cite:**

- NYC DOF, `Violation codes, fines, rules, and regulations`
- DSNY, `Street Cleaning (ASP)`
- NYC311, `Alternate Side Parking and Street Cleaning`
- NYC DOT, `Parking Meters`
- NACTO, `Curb Management`

**Caveat to include:** "More prominent" does not mean "targeted." The ratio describes the issued-ticket mix, not motive, fairness, or the true rate of illegal parking.

**Transition sentence:** Rule type also matters because not every ticket carries the same estimated dollar amount.

## 6. Fine Value Layer

**Section goal:** Add the money layer while being very careful to say estimated fine value, not revenue.

**Draft text:**

A ticket count treats every record as one unit. But tickets do not all cost the same. A street-cleaning ticket, a hydrant ticket, a meter ticket, and a school-zone camera ticket can carry different fine amounts. So the project adds an estimated fine-value layer.

Across mappable real precincts, the estimated fine value is $612,808,346.26, with an average estimated fine of about $70.24 per ticket. The highest ticket-count precincts are often also high estimated-fine-value precincts, but the order is not identical. Precinct 33 moves up 9 rank positions when comparing ticket-count rank to estimated-fine-value rank, while Precinct 78 moves down 10.

That rank shift is the point. The money layer does not replace the geography layer. It changes what we notice inside it.

**Main artifact/figure:** `outputs/story/fig_real_precinct_count_vs_estimated_fine_value.html`

**Supporting artifact/figure:**

- `outputs/story/fig15_family_count_vs_fine_value.html`
- `outputs/story/fig16_family_average_fine.html`

**Sources to cite:**

- NYC DOF, `Violation codes, fines, rules, and regulations`
- NYC311, `Parking Ticket or Camera Violation Payment`
- NYC official, `NYC parking or camera tickets`
- NYC DOF, `Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2025`
- Urban Institute, `The Cost of Parking`

**Caveat to include:** This is estimated fine value from issued tickets, not collected revenue. The dataset does not show payments, dismissals, reductions, or final outcomes.

**Transition sentence:** The curb also changes across the day, so the next layer is time.

## 7. Time-of-Day Layer

**Section goal:** Show that violation families have different daily rhythms and that the ticket system is temporal as well as spatial.

**Draft text:**

The uneven curb has a clock. Street cleaning tickets peak at 9:00, which matches the feeling of morning alternate-side routines. Meter / paid parking, No standing / no parking, and Double parking all peak around 13:00. Hydrant tickets peak at 6:00. Registration / inspection sticker tickets peak at 8:00.

Camera/admin-style families have their own rhythms too. Bus lane / bus stop tickets peak at 16:00, and MTA camera double parking peaks at 15:00. This is another reminder that the parking-ticket file is layered: some patterns look like curbside enforcement routines, while others look more like automated or administrative systems.

The website figure should let readers compare families rather than stare at one giant average. The average day is less interesting than the way each rule family has its own schedule.

**Main artifact/figure:** `outputs/story/fig_violation_family_hourly_profiles.html`

**Supporting artifact/figure:**

- `outputs/story/fig11_family_hour_profiles.html`
- `outputs/story/fig4_channel_hour_profile.html`
- `outputs/story/fig7_channel_hour_weekday_heatmaps.html`

**Sources to cite:**

- NYC311, `Alternate Side Parking and Street Cleaning`
- DSNY, `Street Cleaning (ASP)`
- NYC DOT, `Parking Meters`
- MTA, `Automated Camera Enforcement`
- Gothamist, `Is double parking legal in NYC? No, but here's how drivers do it politely.`

**Caveat to include:** Issue time is the recorded ticket timestamp. It may not always be the exact time a violation began, and some timing patterns may include administrative or camera-processing artifacts.

**Transition sentence:** The final step is to be explicit about what this story proves and where it stops.

## 8. What This Proves and Does Not Prove

**Section goal:** Close the argument responsibly by separating supported claims from tempting but unsupported claims.

**Draft text:**

This project proves a specific thing: NYC's FY2025 issued-ticket system is uneven across administrative space, real precinct geography, parking-rule family, time of day, and estimated fine value. It is not one smooth citywide machine.

It also proves why careful cleaning matters. If Precinct 0 is mapped as if it were a normal place, the geography gets confused. If every ticket is counted without rule family, the local differences disappear. If estimated fine value is called revenue, the money story becomes misleading.

But this project does not prove demographic inequality, racial targeting, income inequality, or causal unfairness. Those are different questions, and they would need different data: population, car ownership, curb supply, parking demand, traffic, legal parking capacity, neighborhood demographics, payment outcomes, and maybe direct observation of violations.

**Main artifact/figure:** `outputs/story/final_website_asset_plan.md`

**Supporting artifact/figure:** `outputs/story/key_findings_from_artifacts.md`

**Sources to cite:**

- Urban Institute, `What Parking Ticket Data Can (and Cannot) Tell Us...`
- Dan Levine, `Look for inequities in parking tickets`
- Urban Institute, `The Cost of Parking`
- NYC Open Data, `Parking Violations Issued - Fiscal Year 2025`

**Caveat to include:** Keep the central claim about uneven issued-ticket geography and system layers. Do not expand it into claims about who is targeted or whether enforcement is socially fair.

**Transition sentence:** For readers who want the technical trail, the final section points to the notebook, artifacts, and sources.

## 9. Methods / Notebook Link / References

**Section goal:** Give readers a clean path to the explainer notebook, methods, artifacts, limitations, and references without interrupting the public story.

**Draft text:**

The website is the short version. The explainer notebook is the full workshop table: cleaning decisions, row counts, rule-family mapping, precinct handling, map joins, fine-estimation logic, timing analysis, and extra diagnostics.

The main preprocessing choices are simple but important. The analysis keeps FY2025 records, separates Precinct 0 from real mappable precincts, uses violation families to make the code list readable, joins only mappable precincts to the precinct GeoJSON, and treats estimated fine value as an analytical estimate rather than revenue.

The references below support the rule definitions, official dataset context, camera and meter systems, curb-management framing, and limitations around what parking-ticket data can and cannot prove.

**Main artifact/figure:** `outputs/story/reference_bank.md`

**Supporting artifact/figure:**

- `analysis.ipynb`
- `outputs/story/notebook_section_audit.md`
- `outputs/story/project_requirement_checklist.md`
- `outputs/story/artifact_inventory.md`

**Sources to cite:**

- NYC Open Data, `Parking Violations Issued - Fiscal Year 2025`
- NYC Open Data, `Police Precincts`
- NYC DOF, `Violation codes, fines, rules, and regulations`
- NYC DOF, `Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2025`
- DSNY, `Street Cleaning (ASP)`
- NYC311, `Alternate Side Parking and Street Cleaning`
- NYC DOT, `Parking Meters`
- MTA, `Automated Camera Enforcement`
- Urban Institute, `What Parking Ticket Data Can (and Cannot) Tell Us...`
- NACTO, `Curb Management`

**Caveat to include:** The notebook is the authority for methods and exact artifact-backed numbers; the website should simplify language but not simplify claims past what the evidence supports.

**Transition sentence:** End the website with a short invitation to explore the notebook and sources: the curb story is readable on the page, but the receipts live in the analysis.
