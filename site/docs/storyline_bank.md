# Storyline Bank

These are five possible storylines for the final website and explainer notebook. They are selected because the current artifacts support them with real figures, metrics, and clear caveats. The "one city, several ticket machines" idea is kept as framing inside the Precinct 0 story, because the strongest available evidence is the split between Precinct 0 / camera-admin records and real mappable precincts.

## 1. The Place That Is Not a Place

**One-sentence hook:** Almost half of the FY2025 ticket records point to Precinct 0, a category that matters a lot but cannot be treated like a neighborhood on a map.

**What finding from the analysis supports it:** Precinct 0 accounts for 7,524,683 FY2025 tickets, or 46.3% of retained FY2025 records. Its mix is dominated by camera/admin-style families, especially School-zone speed, Bus lane / bus stop, Red light, and MTA camera double parking.

**Which artifact/figure supports it:**

- `outputs/story/fig_precinct0_vs_real_precincts.html`
- `outputs/story/precinct0_narrative_metrics.json`
- `outputs/eda/family_channel_summary.csv`
- `outputs/eda/precinct_zero_codes.csv`
- `outputs/eda/law_section_channel.csv`
- `outputs/eda/legal_code_channel.csv`

**Which external sources support the context:**

- NYC Open Data, `Parking Violations Issued - Fiscal Year 2025`: dataset scope and issued-ticket caveat.
- NYC DOF, `Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2025`: official parking and camera violation context.
- NYC DOT, `Speed Cameras - Frequently Asked Questions`: school-zone speed camera rules.
- NYC311, `Red Light Cameras`: red-light camera context.
- MTA, `Automated Camera Enforcement`: bus-mounted camera enforcement context.
- NYC311, `Bus Lane and MTA Bus Cameras`: bus lane, bus stop, and MTA bus-camera categories.

**What the reader should learn:** A parking-ticket dataset can look geographic before it is actually mappable. Precinct 0 is analytically important because it captures a huge subsystem of records, but it has to be separated before making claims about real curbside precinct geography.

**What we must not overclaim:** Do not call Precinct 0 fake data. Do not say it is an error. Do not map it as a neighborhood. Do not claim every Precinct 0 ticket is automated unless the specific violation family or official source supports that interpretation.

**Best placement:** Main website story.

## 2. The Real Curb Is Uneven

**One-sentence hook:** Once Precinct 0 is removed, the real curbside ticket footprint is still not spread evenly across NYC precincts.

**What finding from the analysis supports it:** Among 78 mappable real precincts, there are 8,724,635 real-precinct tickets. The top 10% of precincts account for 27.2% of those tickets, and the top 25% account for 49.9%. The precinct-count Gini coefficient is 0.3732.

**Which artifact/figure supports it:**

- `outputs/story/fig_real_precinct_concentration_curve.html`
- `outputs/story/fig_real_precinct_ticket_share_map.html`
- `outputs/story/real_precinct_concentration_summary.json`
- `outputs/eda/real_precinct_concentration_metrics.csv`
- `outputs/story/real_precinct_map_summary.json`

**Which external sources support the context:**

- NYC Open Data, `Police Precincts`: precinct boundary source for maps.
- NYC Open Data, `Parking Violations Issued - Fiscal Year 2025`: ticket-record source.
- Urban Institute, `What Parking Ticket Data Can (and Cannot) Tell Us...`: data can show geography, but not who is ticketed or why.
- NACTO, `Curb Management`: curbs are limited, contested public space.
- Manville and Pinski, `The causes and consequences of curb parking management`: curb parking is a managed public-resource problem.

**What the reader should learn:** The map and concentration curve show an enforcement footprint: where issued tickets appear in the data. Some precincts carry much more of that footprint than others.

**What we must not overclaim:** Do not call this a risk map. Do not say these precincts have the worst parking behavior. The analysis is not normalized by curb length, meter supply, traffic volume, population, car ownership, or the number of parked cars.

**Best placement:** Main website story.

## 3. Different Precincts, Different Parking Rules

**One-sentence hook:** The uneven curb is not only about how many tickets places receive; it is also about which parking rules show up most in each place.

**What finding from the analysis supports it:** Among mappable real precincts, Street cleaning is the dominant family in 44 precincts, No standing / no parking in 12, Meter / paid parking in 12, Other in 5, and Registration / inspection sticker in 5. Some precinct-family combinations stand out strongly, such as Precinct 123 with Registration / inspection sticker at a specialization ratio of 5.54.

**Which artifact/figure supports it:**

- `outputs/story/fig_real_precinct_family_specialization_heatmap.html`
- `outputs/story/fig_dominant_family_by_precinct_map.html`
- `outputs/eda/real_precinct_family_profile.csv`
- `outputs/eda/real_precinct_family_specialization_top_examples.csv`
- `outputs/story/real_precinct_family_specialization_summary.json`
- `outputs/eda/dominant_family_by_precinct.csv`

**Which external sources support the context:**

- NYC DOF, `Violation codes, fines, rules, and regulations`: official rule and fine definitions.
- DSNY, `Street Cleaning (ASP)`: street cleaning purpose and ASP context.
- NYC311, `Alternate Side Parking and Street Cleaning`: public-facing ASP rules.
- NYC DOT, `Parking Meters`: meter and curb-turnover context.
- NACTO, `Curb Management`: different curb uses create different rule environments.

**What the reader should learn:** NYC's parking-ticket system is not one rule applied everywhere in the same way. Different precincts have different rule mixes, so the curb can feel like a street-cleaning system in one place, a meter system in another, and a sticker or no-standing system somewhere else.

**What we must not overclaim:** Do not say a precinct is targeted by a rule family. Do not say specialization proves unfairness. A higher specialization ratio means the family is more prominent in that precinct's issued-ticket mix than it is citywide among real precincts.

**Best placement:** Main website story.

## 4. Tickets Are Not All Worth the Same

**One-sentence hook:** Counting tickets tells one story, but estimated fine value adds a second layer because different violations carry different dollar amounts.

**What finding from the analysis supports it:** For mappable real precincts, the estimated fine value is $612,808,346.26, with an average estimated fine of about $70.24 per ticket. High-count precincts are often high estimated-fine-value precincts, but ranks can shift: Precinct 33 moves up 9 places by estimated fine value, while Precinct 78 moves down 10 places.

**Which artifact/figure supports it:**

- `outputs/story/fig_real_precinct_count_vs_estimated_fine_value.html`
- `outputs/eda/real_precinct_estimated_fine_value.csv`
- `outputs/story/real_precinct_estimated_fine_value_summary.json`
- `outputs/story/fig15_family_count_vs_fine_value.html`
- `outputs/story/fig16_family_average_fine.html`
- `outputs/story/family_fine_metrics.json`

**Which external sources support the context:**

- NYC DOF, `Violation codes, fines, rules, and regulations`: official violation-code fine amounts.
- NYC311, `Parking Ticket or Camera Violation Payment`: ticket amount depends on violation code and location.
- NYC official, `NYC parking or camera tickets`: tickets can be paid or disputed.
- NYC DOF, `Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2025`: official context for issued violations and citywide issued-dollar totals.
- Urban Institute, `The Cost of Parking`: parking tickets are part of curb regulation and can have financial consequences.

**What the reader should learn:** The money layer does not replace ticket counts, but it changes the emphasis. Some places and rule families matter more when we look at estimated fine value instead of only raw ticket volume.

**What we must not overclaim:** Do not call estimated fine value revenue. The dataset contains issued tickets, not payment outcomes, collections, dismissals, reductions, or final judgments. The fine estimates are a project-side approximation based on available fine logic.

**Best placement:** Supporting website section.

## 5. Tickets Have Clocks

**One-sentence hook:** Parking tickets do not only vary by place and rule type; different violation families also peak at different times of day.

**What finding from the analysis supports it:** Street cleaning peaks at 9:00, Meter / paid parking at 13:00, No standing / no parking at 13:00, Hydrant at 6:00, Double parking at 13:00, Registration / inspection sticker at 8:00, Bus lane / bus stop at 16:00, and MTA camera double parking at 15:00.

**Which artifact/figure supports it:**

- `outputs/story/fig_violation_family_hourly_profiles.html`
- `outputs/story/violation_family_hourly_profiles_summary.json`
- `outputs/eda/violation_family_hourly_peak_summary.csv`
- `outputs/story/fig11_family_hour_profiles.html`
- `outputs/story/timing_metrics.json`
- `outputs/story/fig4_channel_hour_profile.html`
- `outputs/story/fig7_channel_hour_weekday_heatmaps.html`

**Which external sources support the context:**

- NYC311, `Alternate Side Parking and Street Cleaning`: ASP rules apply during posted windows.
- DSNY, `Street Cleaning (ASP)`: street cleaning depends on scheduled curb access.
- NYC DOT, `Parking Meters`: meter rules vary by posted times and zones.
- MTA, `Automated Camera Enforcement`: camera-admin bus enforcement context.
- Gothamist, `Is double parking legal in NYC? No, but here's how drivers do it politely.`: narrative context for common street-cleaning behavior, with official rule claims still anchored in NYC311.

**What the reader should learn:** The parking-ticket system has a clock. Some rule families behave like morning routines, others like midday curb-management rules, and some camera/admin families follow different timing patterns.

**What we must not overclaim:** Do not say the timestamp always equals when the illegal parking began. The analysis describes issue time in the ticket record, not the full duration of a violation. Some timing patterns may include administrative or camera-processing artifacts.

**Best placement:** Supporting website section.
