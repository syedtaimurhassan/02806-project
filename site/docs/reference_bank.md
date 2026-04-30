# Reference Bank

This bank collects legitimate outside sources that can support the final website and explainer notebook. Use official NYC sources for legal, rule, fine, and dataset claims. Use academic, public-interest, and journalism sources only for context and interpretation.

Important boundary: these sources should not be used to claim that this project proves demographic inequality, racial targeting, income inequality, or causal unfairness. If an outside source discusses equity, frame it as external context, not as a finding from this FY2025 parking-ticket analysis.

## Official NYC Sources

| Source | Type | What it supports | Paraphrase-worthy fact or short quote | Citation note |
|---|---|---|---|---|
| NYC Open Data / Data.gov, `Parking Violations Issued - Fiscal Year 2025` | official | Dataset scope, FY2025 date range, issued-ticket limitation | The dataset covers parking violations issued from July 1, 2024 to June 30, 2025. It represents records at issuance and is not updated for payment, dismissal, or later status changes. | Use for dataset description and the key "issued tickets, not outcomes" caveat. |
| NYC Open Data / Data.gov, `Police Precincts` | official | Precinct GeoJSON/boundary source for maps | The dataset provides boundaries of NYC police precincts and is maintained through NYC/DCP open data. | Use for map data source and mappable-precinct caveats. |
| NYC Department of Finance, `Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2025` | official | Official FY2025 issued violation totals, camera/parking system context, ACE expansion | FY2025 report says DOF counted 16,547,590 parking tickets and camera violations issued, with $1,127,494,699 in issued violations. It also notes a 551% increase in MTA camera violations compared with FY2024. | Use as official context. Keep separate from our artifact count because our cleaned dataset has a slightly different row count. |
| NYC Department of Finance, `Annual Report of New York City Parking Tickets and Camera Violations: Fiscal Year 2024` | official | Prior-year comparison for DOF totals and payment/adjudication context | FY2024 report says issued violations decreased from FY2023 to FY2024 and payments collected for FY2024 violations were about $894.9 million. | Use only as background year-over-year context, not as a substitute for FY2025 analysis. |
| NYC DOF, `Violation codes, fines, rules, and regulations` | official | Fine table and violation-code definitions | DOF defines NYC parking violation codes and lists fine amounts. The page includes code 21 street cleaning, code 36 school-zone speed, code 40 hydrant, code 46 double parking, and meter codes. | Primary source for any rule or fine claim. |
| DSNY, `Street Cleaning (ASP)` | official | Street cleaning purpose and ASP rule interpretation | DSNY says ASP allows street cleaning and that vehicles may be fined up to $65 if they are not moved while ASP rules are in effect. | Use for street-cleaning family context. |
| NYC311, `Alternate Side Parking and Street Cleaning` | official | ASP signs, suspensions, grace period, double-parking rule | NYC311 explains that ASP rules apply for the full posted time, even if the sweeper has already passed, and that passenger-vehicle double parking is illegal. | Use for reader-friendly explanation of street-cleaning rules. |
| NYC DOT, `Parking Meters` | official | Meter policy, meter zones, rates, Pay-By-Plate transition | NYC DOT says meters support curb efficiency by encouraging turnover and reducing double parking. Rates vary by zone and posted rules. | Use for meter/paid-parking family context. |
| MTA, `Automated Camera Enforcement` | official | MTA ACE program, bus lane/bus stop/double-parking camera rules | MTA describes ACE as bus-mounted camera enforcement for bus lanes, bus stops, and double parking along bus routes; fines start at $50 and can rise to $250. | Use for administrative/automated enforcement context. |
| NYC311, `Bus Lane and MTA Bus Cameras` | official | Bus lane and MTA bus-camera NOL categories | NYC311 says bus lane camera violations can be issued for driving, parking, or standing in a bus lane, and MTA bus cameras can cover bus lanes, bus stops, and double parking. | Use for bus-lane/bus-stop/MTA camera family explanation. |
| NYC DOT, `Speed Cameras - Frequently Asked Questions` | official | School-zone speed camera scope and fine amount | DOT says speed cameras are used within school speed zones, and the penalty for a speed-camera violation is $50. | Use for school-zone speed family and Precinct 0/admin discussion. |
| NYC311, `Red Light Cameras` | official | Red-light camera rules and fine amount | NYC311 says red-light cameras are placed at intersections and the fine for a red-light camera violation is $50. | Use for red-light camera family context. |
| NYC official, `NYC parking or camera tickets` / Parking Ticket Guide | official | Payment/dispute process, status caveats | NYC says parking and camera tickets can be paid or disputed and that drivers should request a hearing within 30 days to avoid penalties. | Use to explain why issued tickets are not the same as paid tickets or final outcomes. |
| NYC311, `Parking Ticket or Camera Violation Payment` | official | Penalties, judgment timing, payment plans, camera fine categories | NYC311 says parking-ticket amount depends on violation code and location; camera violations include bus lane, red light, speed camera, and weigh-in-motion fines. | Use for payment process caveats, not for our estimated fine-value calculations. |

## Research / Public-Interest Analysis

| Source | Type | What it supports | Paraphrase-worthy fact or short quote | Citation note |
|---|---|---|---|---|
| Dan Levine, `Look for inequities in parking tickets` | analysis | Why geographic ticket analysis is hard; why issued-ticket locations are an imperfect proxy | Levine notes that NYC parking records are not geolocated points and that where tickets were issued is not the same as knowing who was ticketed. | Use as external context only. Do not use it to claim our project proves inequity. |
| Urban Institute, `The Cost of Parking` | analysis | Parking tickets as curb regulation and financial burden context | Urban Institute describes parking tickets as tools for regulating curbside access and city services, while also warning that more research is needed to assess who receives tickets. | Good caveat source for what parking-ticket data can and cannot answer. |
| Urban Institute, `What Parking Ticket Data Can (and Cannot) Tell Us...` | analysis | Limits of public parking-ticket data and need for better denominators | The piece says public data can show scale and geography, but often cannot answer who is ticketed most or why. | Very useful for limitations section. |
| Manville and Pinski, `The causes and consequences of curb parking management` | academic | Curb parking as a public-resource management problem | The paper argues the curb is city-owned infrastructure often allocated with meters, time limits, permits, and fines. | Use for framing the curb as a managed public resource, not just a parking space. |
| Gregg and Maisel, `Cutting across the curb` | academic | Modern curb management policy and competing curb uses | The article reviews recent municipal curb policies and argues curb demand is increasingly shaped by freight, ride-hailing, transit, and technology. | Use for broader curb-management discussion in notebook or references. |
| NACTO, `Curb Management` | analysis | Curb space as limited and contested | NACTO frames the curb as a limited resource used for parking, bus stops, loading, delivery, bike lanes, pickup/dropoff, dining, and more. | Use for public-facing explanation of why curb rules differ across places. |
| NACTO, `Curb Appeal` | analysis | Curb management and transit reliability | NACTO argues cities are increasingly treating curbsides as flexible zones and prioritizing reliable transit and safe streets. | Use for context around bus lanes, bus stops, and curb prioritization. |
| Urban Institute, `Fines, Fees, and Financial Strain` | analysis | Broader fines/fees context and ability-to-pay caution | Urban Institute says fines and fees include civil infractions such as traffic and parking tickets, and may deepen hardship for some households. | Use carefully as broad context. Do not turn it into a claim about this dataset unless directly analyzed. |

## Reputable Journalism / Explainers

| Source | Type | What it supports | Paraphrase-worthy fact or short quote | Citation note |
|---|---|---|---|---|
| Gothamist, `New push for automated ticketing of drivers who double park in NYC` | journalism | Public debate around automated parking enforcement | Gothamist reports on a proposed pilot for cameras that would ticket double parking and other illegal parking. | Use only as context that automated parking enforcement is politically active. |
| Gothamist, `Is double parking legal in NYC? No, but here's how drivers do it politely.` | journalism | Everyday double-parking culture and confusion | The article explains that passenger-vehicle double parking is illegal, even though it is a common street-cleaning behavior. | Use as human-readable context; official rule claims should cite NYC311/DOF instead. |
| Streetsblog NYC, `Go ACE! Bus Stops Are Clearer Than Ever Thanks To MTA's Bus-Mounted Camera Enforcement` | journalism | Reporting on ACE impacts and bus-stop clearing | Streetsblog reports that bus-mounted camera enforcement is associated with fewer bus-stop blocking incidents, citing MTA data. | Use as journalism context; official program details should cite MTA. |
| The New Yorker, `No-Parking Zone: The Perils of Finding a Spot in N.Y.C.` | journalism | Broader cultural context of NYC curbside parking and ASP routines | The article describes NYC street parking as deeply shaped by alternate-side rules, free curb space, and neighborhood routines. | Use sparingly for narrative color, not quantitative claims unless independently supported. |

## How To Use This Bank

- For dataset facts, cite NYC Open Data / Data.gov and the project artifacts.
- For official citywide totals and issued-dollar context, cite the DOF Local Law 6 reports.
- For fine amounts and code meanings, cite the NYC DOF violation code page.
- For ASP, meter, bus lane, school-zone speed, and red-light rules, cite NYC311, NYC DOT, DSNY, MTA, or DOF.
- For interpretation, use Urban Institute, Manville/Pinski, Gregg/Maisel, NACTO, and Dan Levine.
- For public-facing texture, use Gothamist, Streetsblog, and The New Yorker, but keep claims anchored in official sources whenever possible.

