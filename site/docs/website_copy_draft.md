# The Uneven Curb

## How NYC's Parking-Ticket System Changes Depending on Where You Stand

One parking ticket is annoying. More than sixteen million ticket records are a map of how a city manages its curb.

This project does not try to prove that NYC parking enforcement is socially fair or unfair. It asks a smaller, cleaner question: what can the FY2025 issued-ticket dataset show directly?

The answer is still interesting. NYC's parking-ticket system is not one uniform machine. It is a layered system made of administrative buckets, automated camera records, real curbside precinct enforcement, different parking-rule families, daily timing patterns, and uneven estimated fine value.

In other words: the curb changes depending on where and when you meet it.

## The Dataset

This project uses NYC's FY2025 Parking Violations Issued dataset. After basic cleaning, the analysis keeps **16,250,291 issued ticket records** from **July 1, 2024 through June 30, 2025**.

Each row is an issued ticket record. That is important. An issued ticket is not the same as a paid ticket. It is not the same as collected revenue. It is also not a perfect count of every illegal parking event in the city. Some violations may never be ticketed, and the dataset does not tell us how many cars were parked legally or illegally in each place.

So this project uses the data for what it can show well: the enforcement footprint of issued tickets across administrative space, real mappable precincts, rule types, time of day, and estimated fine value.

**Data note:** The project count comes from the cleaned analysis artifacts. Official NYC Department of Finance reports use their own official reporting totals, which are useful for context but should not be mixed with the cleaned project total.

## The Place That Is Not a Place

The first surprise in the data is **Precinct 0**.

It sounds like a normal precinct, but it should not be read like a neighborhood. In the cleaned FY2025 data, Precinct 0 contains **7,524,683 issued tickets**, or **46.3%** of the retained records. That is almost half the dataset sitting in a category that cannot be mapped like a regular place.

Its rule mix also looks different. Precinct 0 is dominated by camera and administrative-style families: **School-zone speed**, **Bus lane / bus stop**, **Red light**, and **MTA camera double parking**. That is not the same as a person walking a curb and writing a street-cleaning, hydrant, or meter ticket inside a normal precinct.

Precinct 0 is not fake data. It is better understood as an **administrative bucket**: important records that belong in the parking-ticket system, but not in a neighborhood choropleth.

**Figure:** `outputs/story/fig_precinct0_vs_real_precincts.html`

**Caption:** Precinct 0 contains a large share of FY2025 issued tickets, but its rule mix looks very different from real precincts.

**How to read this chart:** Compare Precinct 0 against real precincts by violation family. Large differences suggest that Precinct 0 is part of a different subsystem, not a normal geographic precinct.

**Key takeaway:** Before mapping the curbside ticket footprint, Precinct 0 has to be separated.

## The Real Curb Is Uneven

After separating Precinct 0 and unmappable precinct labels, the analysis focuses on **78 real mappable precincts**. These precincts contain **8,724,635 issued tickets**.

The real curbside ticket footprint is not spread evenly. The top **10%** of mappable precincts account for **27.2%** of real-precinct tickets. The top **25%** account for **49.9%**. Precinct 19 alone has **447,142 tickets**, about **5.1%** of the mappable real-precinct total.

That does not mean those precincts have the worst parking behavior. It means the issued-ticket footprint is concentrated there.

**Figure:** `outputs/story/fig_real_precinct_ticket_share_map.html`

**Caption:** Real mappable precincts do not carry equal shares of the FY2025 curbside ticket footprint.

**How to read this map:** Darker or stronger-colored precincts have more issued tickets or a larger share of real-precinct tickets. Hover over a precinct to see its ticket count, share, dominant violation family, and average estimated fine if available.

**Supporting figure:** `outputs/story/fig_real_precinct_concentration_curve.html`

**Caption:** A small share of precincts carries a large share of real curbside tickets.

**How to read this chart:** The diagonal line is the "perfectly even" reference. The farther the ticket curve bends away from that line, the more concentrated the enforcement footprint is.

**Important caveat:** This is not a risk map. It is not adjusted for curb length, meter density, parking supply, population, car ownership, traffic volume, or the number of cars parked in each precinct.

## Different Precincts, Different Parking Rules

Ticket volume is only one layer. The next question is what kinds of parking rules show up in different places.

Among real mappable precincts, **Street cleaning** is the dominant family in **44 precincts**. **No standing / no parking** leads in **12 precincts**. **Meter / paid parking** leads in **12 precincts**. **Registration / inspection sticker** leads in **5 precincts**, and **Other** leads in **5 precincts**.

That means the curb can feel different depending on where you stand. In one precinct, the parking-ticket story may mostly be street cleaning. In another, it may be meters. Somewhere else, it may be stickers, hydrants, no-standing rules, or double parking.

The specialization heatmap makes this local flavor easier to see. A specialization ratio above 1 means that a violation family is more prominent in that precinct than it is citywide among real precincts. For example, Precinct 123 stands out for **Registration / inspection sticker** tickets with a specialization ratio of **5.54**. Precincts 34 and 44 stand out for **Double parking**.

**Figure:** `outputs/story/fig_real_precinct_family_specialization_heatmap.html`

**Caption:** Different real precincts specialize in different parking-rule families.

**How to read this chart:** Rows are precincts. Columns are top violation families. Values above 1 mean that family is more prominent in that precinct than it is across real precincts overall.

**Supporting figure:** `outputs/story/fig_dominant_family_by_precinct_map.html`

**Caption:** The dominant parking-rule family changes across the city.

**How to read this map:** Each precinct is colored by its largest violation family. Hover to see the top families and their shares.

**Important caveat:** "More prominent" does not mean "targeted." These figures describe issued-ticket patterns, not motive, fairness, or the true rate of illegal parking.

## Tickets Are Counted Once, But They Do Not Cost the Same

A ticket count treats every ticket as one unit. But not every ticket has the same dollar value.

To add that layer, the analysis estimates fine value using the existing fine-estimation logic from the notebook. Across real mappable precincts, the estimated fine value is **$612,808,346.26**, with an average estimated fine of about **$70.24 per ticket**.

High-ticket precincts are often also high estimated-fine-value precincts. But the rankings are not identical. Precinct 33 moves up **9 rank positions** when comparing ticket count to estimated fine value. Precinct 78 moves down **10 positions**.

That difference matters because rule mix matters. A precinct with fewer tickets can still rise in estimated fine value if its tickets tend to come from higher-fine violation families.

**Figure:** `outputs/story/fig_real_precinct_count_vs_estimated_fine_value.html`

**Caption:** Ticket counts and estimated fine value are related, but they do not tell exactly the same story.

**How to read this chart:** Each point is a real mappable precinct. The x-axis shows ticket count. The y-axis shows estimated fine value. Points above or below the main pattern are precincts where the dollar layer adds something beyond count alone.

**Supporting figures:**

- `outputs/story/fig15_family_count_vs_fine_value.html`
- `outputs/story/fig16_family_average_fine.html`

**Important caveat:** This is **estimated fine value**, not revenue. The dataset contains issued tickets, not payment outcomes, dismissals, reductions, or collected money.

## The Uneven Curb Has a Clock

The curb also changes across the day.

Different violation families peak at different hours. **Street cleaning** peaks at **9:00**. **Meter / paid parking**, **No standing / no parking**, and **Double parking** peak around **13:00**. **Hydrant** tickets peak at **6:00**. **Registration / inspection sticker** tickets peak at **8:00**.

Camera and administrative-style families have their own rhythms. **Bus lane / bus stop** tickets peak at **16:00**, while **MTA camera double parking** peaks at **15:00**.

This is why the average ticket is not very useful. There is no single "parking-ticket time." Each rule family has its own daily pattern.

**Figure:** `outputs/story/fig_violation_family_hourly_profiles.html`

**Caption:** Different parking-rule families follow different daily rhythms.

**How to read this chart:** Each line shows one violation family's hourly profile. The y-axis is the share of that family's daily tickets, so the chart compares timing patterns rather than just raw size.

**Supporting figures:**

- `outputs/story/fig11_family_hour_profiles.html`
- `outputs/story/fig4_channel_hour_profile.html`
- `outputs/story/fig7_channel_hour_weekday_heatmaps.html`

**Important caveat:** Issue time is the timestamp recorded on the ticket. It may not always be the exact moment a violation began. Some timing patterns may also reflect administrative or camera-processing systems.

## What This Dataset Can Show

This dataset can show how NYC's FY2025 issued-ticket system changes across:

- administrative buckets such as Precinct 0
- real mappable precincts
- violation families
- time of day
- estimated fine value

It can show the **enforcement footprint** of issued tickets. It can show that different parts of the system behave differently. It can show that maps change when administrative records are separated from real precinct geography.

That is the main story: NYC parking tickets look like one system from far away, but up close the system has layers.

## What This Dataset Cannot Show

This project does not prove demographic inequality, racial targeting, income inequality, or causal unfairness.

It also does not prove where illegal parking is most common. To answer that, we would need denominators the dataset does not include: curb length, legal parking spaces, meter density, traffic volume, car ownership, population, parking demand, and direct observation of how many violations actually happened.

It does not show final money collected. The fine-value layer is estimated from issued tickets. Actual revenue would require payment, dismissal, reduction, and judgment data.

The safest reading is this: the dataset shows how the issued-ticket system appears in records. It does not show the full world of parking behavior behind those records.

## Methods and Notebook Link

The website is the short version. The explainer notebook contains the full technical trail: data loading, cleaning, rule-family mapping, Precinct 0 treatment, real-precinct filtering, GeoJSON joins, fine estimation, timing analysis, and extra diagnostic checks.

Main project artifacts:

- `analysis.ipynb`
- `outputs/story/final_narrative_plan.md`
- `outputs/story/key_findings_from_artifacts.md`
- `outputs/story/artifact_inventory.md`
- `outputs/story/reference_bank.md`

Short version of the method:

1. Keep FY2025 issued-ticket records.
2. Separate Precinct 0 from real mappable precincts.
3. Group violation codes into readable violation families.
4. Map only precinct records that can be joined to the precinct GeoJSON.
5. Estimate fine value from the notebook's fine logic.
6. Use issue time to compare daily rhythms by violation family.

## References

- [NYC Open Data: Parking Violations Issued - Fiscal Year 2025](https://data.cityofnewyork.us/d/m5vz-tzqv)
- [NYC Open Data: Police Precincts](https://data.cityofnewyork.us/d/y76i-bdw7)
- [NYC Department of Finance: FY2025 Local Law 6 Report](https://www.nyc.gov/assets/finance/downloads/pdf/25pdf/2025-local-law-6-report.pdf)
- [NYC Department of Finance: Violation Codes, Fines, Rules, and Regulations](https://www.nyc.gov/site/finance/vehicles/services-violation-codes.page)
- [NYC Department of Sanitation: Street Cleaning / Alternate Side Parking](https://www.nyc.gov/site/dsny/what-we-do/cleaning/street-cleaning-asp.page)
- [NYC311: Alternate Side Parking and Street Cleaning](https://portal.311.nyc.gov/article/?kanumber=KA-01011)
- [NYC Department of Transportation: Parking Meters](https://www.nyc.gov/html/dot/html/motorist/parking-rates.shtml)
- [MTA: Automated Camera Enforcement](https://www.mta.info/agency/new-york-city-transit/automated-camera-enforcement)
- [NYC311: Bus Lane and MTA Bus Cameras](https://portal.311.nyc.gov/article/?kanumber=KA-02325)
- [NYC DOT: Speed Cameras FAQ](https://www.nyc.gov/html/dot/downloads/pdf/speed-camera-faq.pdf)
- [NYC311: Red Light Cameras](https://portal.311.nyc.gov/article/?kanumber=KA-02326)
- [Urban Institute: What Parking Ticket Data Can and Cannot Tell Us](https://www.urban.org/urban-wire/what-parking-ticket-data-can-and-cannot-tell-us-amid-calls-reform-fines-and-fees)
- [Urban Institute: The Cost of Parking](https://www.urban.org/research/publication/the-cost-of-parking)
- [Dan Levine: Look for Inequities in Parking Tickets](https://danlevine.work/projects/look-for-inequities-in-parking-tickets/)
- [NACTO: Curb Management](https://nacto.org/program/reimagining-city-streets/multimodal-streets/curb-management/)
- [Manville and Pinski: The Causes and Consequences of Curb Parking Management](https://www.sciencedirect.com/science/article/pii/S0965856421001890)
- [Gothamist: Is Double Parking Legal in NYC?](https://gothamist.com/news/is-it-illegal-to-double-park-in-nyc)
