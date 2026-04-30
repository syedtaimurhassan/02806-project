# Key Findings From Artifacts

This file extracts story-safe numbers from the current `outputs/eda` CSV artifacts and `outputs/story` JSON artifacts. It does not use the raw dataset directly and does not create synthetic data.

Use these numbers for the website and explainer notebook only with their source paths and caveats.

## Dataset basics

- **Raw rows inspected:** 16,559,243. Source: `outputs/eda/quality.csv`.
- **FY2025 tickets retained:** 16,250,291. Source: `outputs/eda/quality.csv`.
- **FY2025 date range in daily table:** start: 2024-07-01; end: 2025-06-30. Source: `outputs/eda/daily_total.csv`.
- **Number of columns or variables:** not found in current artifacts. Source: not found in current artifacts.
- **Unique summons numbers:** 16,250,291. Source: `outputs/eda/summons_quality.csv`. Note: All FY2025 rows have valid unique summons numbers in this artifact.
- **Duplicate summons numbers:** 0. Source: `outputs/eda/summons_quality.csv`.
- **Invalid dates removed:** 1,470. Source: `outputs/eda/quality.csv`.
- **Rows outside FY2025 removed:** 307,482. Source: `outputs/eda/quality.csv`.
- **Missing borough rows:** 507,413. Source: `outputs/eda/quality.csv`.
- **Missing issue-hour rows:** count: 31,280; share_of_fy_rows: 0.0019. Source: `outputs/eda/quality.csv`, `outputs/story/violation_family_hourly_profiles_summary.json`.
- **Likely late-file cutoff begins:** 2025-06-25. Source: `outputs/story/daily_anomaly_metrics.json`. Note: 6 days are marked as likely cutoff days in the anomaly artifact.

## Precinct 0 / administrative system

- **Precinct 0 ticket count:** 7,524,683. Source: `outputs/eda/quality.csv`.
- **Precinct 0 share of FY2025 tickets:** 0.4630 (46.3%). Source: `outputs/story/precinct0_narrative_metrics.json`.
- **Top Precinct 0 violation families:** School-zone speed 4,801,690 (63.8% of Precinct 0); Bus lane / bus stop 1,580,066 (21.0% of Precinct 0); Red light 639,934 (8.5% of Precinct 0); MTA camera double parking 491,920 (6.5% of Precinct 0); Street cleaning 4,803 (0.1% of Precinct 0); Other 3,822 (0.1% of Precinct 0). Source: `outputs/eda/family_channel_summary.csv`.
- **Top Precinct 0 violation codes:** code 36 PHTO SCHOOL ZN SPEED VIOLATION 4,801,690; code 5 BUS LANE VIOLATION 826,741; code 7 FAILURE TO STOP AT RED LIGHT 639,934; code 43 MTA CAMERA BUS STOP 527,301; code 15 MTA CAMERA DOUBLE PARKING 491,920; code 12 MOBILE BUS LANE VIOLATION 226,018. Source: `outputs/eda/precinct_zero_codes.csv`.
- **Top issuing agencies connected to Precinct 0:** V 6,366,906; M 1,148,315; S 5,257; P 3,653; T 194. Source: `outputs/eda/issuer_agency_channel.csv`. Note: Agency codes are kept as codes because the artifact does not include full agency names.
- **Top law sections connected to Precinct 0 / camera-admin channel:** law_section=1180, channel=Precinct 0 / camera-admin, tickets=4801690; law_section=1111, channel=Precinct 0 / camera-admin, tickets=1692693; law_section=408, channel=Precinct 0 / camera-admin, tickets=1028344; law_section=385, channel=Precinct 0 / camera-admin, tickets=1551; law_section=Missing/0, channel=Precinct 0 / camera-admin, tickets=405. Source: `outputs/eda/law_section_channel.csv`.
- **Top legal-code labels connected to Precinct 0 / camera-admin channel:** violation_legal_code=T, channel=Precinct 0 / camera-admin, tickets=7515155; violation_legal_code=MISSING, channel=Precinct 0 / camera-admin, tickets=9528. Source: `outputs/eda/legal_code_channel.csv`.
- **Richer enforcement-channel labels beyond Precinct 0 versus real precinct:** not found in current artifacts. Source: not found in current artifacts. Note: The current artifacts mostly use a two-channel split plus some camera-admin wording in legal/law-section tables.

## Real precinct concentration

- **Number of mappable real precincts:** 78. Source: `outputs/story/real_precinct_concentration_summary.json`.
- **Total mappable real-precinct tickets:** 8,724,635. Source: `outputs/story/real_precinct_concentration_summary.json`.
- **Top precincts by ticket count:** P19 447,142 (5.1%); P14 332,655 (3.8%); P13 294,290 (3.4%); P6 277,314 (3.2%); P1 270,110 (3.1%); P114 266,369 (3.1%); P18 264,969 (3.0%); P109 220,273 (2.5%); ... 2 more. Source: `outputs/eda/real_precinct_concentration_metrics.csv`.
- **Top 10 percent of precincts ticket share:** 0.2720 (27.2%). Source: `outputs/story/real_precinct_concentration_summary.json`.
- **Top 25 percent of precincts ticket share:** 0.4994 (49.9%). Source: `outputs/story/real_precinct_concentration_summary.json`.
- **Gini coefficient of precinct ticket counts:** 0.3732. Source: `outputs/story/real_precinct_concentration_summary.json`.
- **Coefficient of variation of precinct ticket counts:** 0.7177. Source: `outputs/story/real_precinct_concentration_summary.json`.

## Violation families

- **Top citywide violation families:** family=School-zone speed, tickets=4801690; family=Bus lane / bus stop, tickets=1818983; family=Street cleaning, tickets=1814208; family=No standing / no parking, tickets=1690709; family=Other, tickets=1650518; family=Meter / paid parking, tickets=1463610; family=Registration / inspection sticker, tickets=883127; family=Hydrant, tickets=661352; ... 3 more. Source: `outputs/eda/family_totals.csv`.
- **Top violation families among mappable real precincts:** Street cleaning 1,809,380 (20.7%); No standing / no parking 1,689,517 (19.4%); Other 1,646,218 (18.9%); Meter / paid parking 1,463,555 (16.8%); Registration / inspection sticker 882,987 (10.1%); Hydrant 660,484 (7.6%); Double parking 333,576 (3.8%); Bus lane / bus stop 238,917 (2.7%). Source: `outputs/eda/real_precinct_family_profile.csv`.
- **Dominant family counts by mappable precinct:** No standing / no parking: 12; Street cleaning: 44; Meter / paid parking: 12; Other: 5; Registration / inspection sticker: 5. Source: `outputs/story/real_precinct_map_summary.json`, `outputs/eda/dominant_family_by_precinct.csv`.
- **Strongest specialization-ratio examples:** P123 / Registration / inspection sticker ratio 5.54 (8,190 tickets); P121 / Registration / inspection sticker ratio 5.02 (12,624 tickets); P122 / Registration / inspection sticker ratio 3.68 (14,127 tickets); P120 / Registration / inspection sticker ratio 3.11 (16,045 tickets); P113 / Registration / inspection sticker ratio 3.03 (9,423 tickets); P34 / Double parking ratio 3.00 (11,697 tickets); P44 / Double parking ratio 2.82 (12,819 tickets); P105 / Registration / inspection sticker ratio 2.81 (10,151 tickets); ... 2 more. Source: `outputs/eda/real_precinct_family_specialization_top_examples.csv`.
- **Max specialization summary:** precinct: 123; family: Registration / inspection sticker; ratio: 5.5401; tickets: 8,190. Source: `outputs/story/real_precinct_family_specialization_summary.json`.

## Estimated fine value

- **Total estimated fine value for mappable real precincts:** 612,808,346.2600. Source: `outputs/story/real_precinct_estimated_fine_value_summary.json`. Note: This is estimated fine value from issued tickets, not collected revenue.
- **Average estimated fine per ticket across mappable real precincts:** 70.2400. Source: `outputs/story/real_precinct_estimated_fine_value_summary.json`. Note: Computed from total estimated fine value divided by total mappable real-precinct tickets in the same summary file.
- **Top precincts by estimated fine value:** P19 $31,625,190 (447,142 tickets); P14 $27,182,079 (332,655 tickets); P13 $22,413,060 (294,290 tickets); P1 $22,302,104 (270,110 tickets); P18 $21,725,691 (264,969 tickets); P6 $20,792,196 (277,314 tickets); P114 $16,401,243 (266,369 tickets); P109 $14,569,927 (220,273 tickets). Source: `outputs/eda/real_precinct_estimated_fine_value.csv`.
- **Highest average estimated fine precinct:** precinct: 22; average_estimated_fine: 83.0000. Source: `outputs/story/real_precinct_estimated_fine_value_summary.json`.
- **Lowest average estimated fine precinct:** precinct: 78; average_estimated_fine: 58.6700. Source: `outputs/story/real_precinct_estimated_fine_value_summary.json`.
- **Biggest upward rank shift between ticket count and estimated fine value:** precinct: 33; ticket_count: 84931; estimated_total_fine_value: 6391482.278187015; average_estimated_fine_per_ticket: 75.25499850687046; rank_by_ticket_count: 47; rank_by_estimated_fine_value: 38; rank_shift: 9; dominant_violation_family: Other. Source: `outputs/eda/real_precinct_estimated_fine_value.csv`.
- **Biggest downward rank shift between ticket count and estimated fine value:** precinct: 78; ticket_count: 91403; estimated_total_fine_value: 5362629.830888021; average_estimated_fine_per_ticket: 58.67017308937366; rank_by_ticket_count: 40; rank_by_estimated_fine_value: 50; rank_shift: -10; dominant_violation_family: Street cleaning. Source: `outputs/eda/real_precinct_estimated_fine_value.csv`.
- **Top family by estimated fine value:** family: School-zone speed; estimated_fine_value: 240,084,500.0000. Source: `outputs/story/family_fine_metrics.json`.

## Time patterns

- **Peak hours by violation family:** Bus lane / bus stop: 16:00 (153,722 tickets, 8.5%); Double parking: 13:00 (44,203 tickets, 13.3%); Hydrant: 6:00 (82,279 tickets, 12.5%); MTA camera double parking: 15:00 (43,668 tickets, 8.9%); Meter / paid parking: 13:00 (201,025 tickets, 13.7%); No standing / no parking: 13:00 (179,399 tickets, 10.6%); Red light: 14:00 (49,038 tickets, 7.7%); Registration / inspection sticker: 8:00 (110,980 tickets, 12.6%); ... 2 more. Source: `outputs/eda/violation_family_hourly_peak_summary.csv`, `outputs/story/violation_family_hourly_profiles_summary.json`.
- **Street cleaning peak timing:** hour: 9; tickets: 459,004; share_of_family_daily_tickets: 0.2537. Source: `outputs/story/violation_family_hourly_profiles_summary.json`.
- **Meter / paid parking peak timing:** hour: 13; tickets: 201,025; share_of_family_daily_tickets: 0.1373. Source: `outputs/story/violation_family_hourly_profiles_summary.json`.
- **Hydrant peak timing:** hour: 6; tickets: 82,279; share_of_family_daily_tickets: 0.1254. Source: `outputs/story/violation_family_hourly_profiles_summary.json`.
- **Double parking peak timing:** hour: 13; tickets: 44,203; share_of_family_daily_tickets: 0.1327. Source: `outputs/story/violation_family_hourly_profiles_summary.json`.
- **No standing / no parking peak timing:** hour: 13; tickets: 179,399; share_of_family_daily_tickets: 0.1064. Source: `outputs/story/violation_family_hourly_profiles_summary.json`.
- **Precinct 0 and real-precinct peak hours:** precinct0_peak_hour: 15; real_precinct_peak_hour: 9. Source: `outputs/story/timing_metrics.json`.
- **Precinct 0 and real-precinct peak weekdays:** precinct0_peak_weekday: Sunday; real_precinct_peak_weekday: Tuesday. Source: `outputs/story/timing_metrics.json`.

## Street concentration / repeat vehicle / issuer analysis

- **Streets with tickets:** 46,646. Source: `outputs/story/location_metrics.json`.
- **Top street by ticket count:** street: BROADWAY; tickets: 179,263. Source: `outputs/story/location_metrics.json`, `outputs/eda/street_totals.csv`.
- **Top 10 street share:** 0.0585 (5.9%). Source: `outputs/story/location_metrics.json`.
- **Top 20 street share:** 0.0881 (8.8%). Source: `outputs/story/location_metrics.json`.
- **Top 100 street share:** 0.2224 (22.2%). Source: `outputs/story/location_metrics.json`.
- **Valid anonymized vehicle keys:** 4,050,977. Source: `outputs/story/repeat_vehicle_metrics.json`.
- **Repeat vehicle share:** 0.5659 (56.6%). Source: `outputs/story/repeat_vehicle_metrics.json`.
- **Ticket share from repeat vehicles:** 0.8915 (89.2%). Source: `outputs/story/repeat_vehicle_metrics.json`.
- **Top 1 percent vehicle ticket share:** 0.1491 (14.9%). Source: `outputs/story/repeat_vehicle_metrics.json`.
- **Maximum tickets for one anonymous vehicle key:** 1,088. Source: `outputs/story/repeat_vehicle_metrics.json`.
- **Repeat vehicle bucket distribution:** 1: 1,758,351 vehicles, 1,758,351 tickets; 2: 709,688 vehicles, 1,419,376 tickets; 3-5: 852,022 vehicles, 3,188,985 tickets; 6-10: 430,677 vehicles, 3,236,159 tickets; 11-25: 242,643 vehicles, 3,720,348 tickets; 26-50: 43,755 vehicles, 1,480,930 tickets; 51+: 13,841 vehicles, 1,409,173 tickets. Source: `outputs/eda/repeat_vehicle_distribution.csv`.
- **Top issuing agency by tickets:** agency: T; tickets: 7,877,929. Source: `outputs/story/issuer_metrics.json`.
- **Issuer codes count:** 24,890. Source: `outputs/story/issuer_metrics.json`.
- **Top 1 percent issuer-code ticket share:** 0.2786 (27.9%). Source: `outputs/story/issuer_metrics.json`.
- **Top issuing agencies table:** T 7,877,929; V 6,366,906; M 1,150,804; S 586,602; P 229,641; K 9,872; Y 5,660; 3 4,315. Source: `outputs/eda/issuer_agency_totals.csv`.

## Suspicious Or Inconsistent Numbers To Flag

- **Real-precinct totals use two definitions.** precinct0_narrative_metrics reports 8,725,608 nonzero real-precinct rows, while the mappable real-precinct story outputs report 8,724,635. The difference is 973, matching the 973 tickets in unmappable_nonzero_precincts.csv. Sources: `outputs/story/precinct0_narrative_metrics.json`, `outputs/story/real_precinct_concentration_summary.json`, `outputs/eda/unmappable_nonzero_precincts.csv`. Severity: definition warning.
- **Highest specialization example differs across older and newer summary files.** precinct_family_metrics.json lists precinct 122 with ratio 3.678067360309519, while real_precinct_family_specialization_summary.json lists precinct 123 with ratio 5.540077370313379. The detailed top-examples CSV agrees with the newer real_precinct_* summary. Sources: `outputs/story/precinct_family_metrics.json`, `outputs/story/real_precinct_family_specialization_summary.json`, `outputs/eda/real_precinct_family_specialization_top_examples.csv`. Severity: inconsistency warning.
- **Borough tables contain nonstandard borough labels.** channel_by_borough.csv includes labels ['108', '48', 'Newy', 'Unknown']. Use borough-level claims carefully and rely on cleaned story outputs where possible. Sources: `outputs/eda/channel_by_borough.csv`, `outputs/eda/quality.csv`. Severity: quality warning.

## Safe Usage Notes

- Say "issued tickets" or "ticket records," not actual violations observed.
- Say "estimated fine value," not revenue.
- For maps, use the mappable real-precinct total of 8,724,635 tickets, not the broader nonzero precinct total of 8,725,608.
- Use the newer `real_precinct_*` outputs for the final story when they conflict with older broad EDA summaries.
- Do not use these findings to claim demographic inequality, racial targeting, income inequality, or causal unfairness.
