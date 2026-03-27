# Community Research Notes for Database Design

This note captures research directions and source ideas for expanding stool's database beyond salary/package data.

The focus here is on:
- what community platforms reveal that formal recruitment materials usually hide
- what database entities or fields stool could eventually model
- what source streams may support future research and validation

## 1. Academic Research Using Reddit Data

Researchers are increasingly using teacher and mobility forums as datasets for studying global mobility, identity, and professional survival.

### University of Edinburgh study
- Researcher: Dr. Laura Cariola
- Study: `Digital Belonging and Global Mobility`
- Platform mentioned: `r/ThirdCultureKids`
- Method: Natural Language Processing (NLP)
- Reported focus:
  - identity negotiation
  - rootlessness
  - digital belonging
  - how globally mobile people use forums to make sense of movement and self

### Research on teacher online communities
- Research published in places such as `Frontiers in Education` and `ERIC` identifies online teacher communities as important support systems.
- These communities function as online learning communities (`OLCs`).
- Reported value:
  - emotional support
  - professional survival
  - peer advice in high-pressure or isolated teaching contexts

### Database implications
- Add a `source_type` field for future research records:
  - `reddit`
  - `facebook_group`
  - `formal_research`
  - `teacher_publication`
  - `community_site`
- Add a `research_theme` field:
  - `identity`
  - `belonging`
  - `teacher_support`
  - `family_viability`
  - `exit_risk`
  - `safeguarding`

## 2. Crowdsourced Family-First Insights

Reddit and Facebook groups surface factors that rarely appear in recruitment brochures or official school materials.

### The "Unicorn School" fallacy
- Community discussions in places like `r/Internationalteachers` describe a `K-shaped` split in the sector.
- Reported pattern:
  - some "Grand Olde" schools still offer full family packages
  - a growing group of for-profit schools are reducing dependent benefits
  - some schools may avoid hiring teachers with children because of cost

### TCK social health
- Communities discuss whether staff children are truly integrated.
- Reported concern:
  - some schools market themselves as international
  - in reality, the student body may be overwhelmingly local elite families
  - staff children can become racial or cultural outcasts rather than part of a real international community

### Spouse identity risk
- Community and qualitative research point to `trailing spouse` or `accompanying spouse` risk.
- Reported concern:
  - spouses lose professional agency because of visa restrictions
  - this risk is especially discussed in places such as:
    - South Korea
    - Japan
    - Saudi Arabia

### Database implications
- Add future school- or city-level fields such as:
  - `family_package_strength`
  - `dependent_tuition_support`
  - `children_welcome_signal`
  - `staff_child_integration`
  - `spouse_work_viability`
  - `spouse_identity_risk`
  - `school_demographic_reality`
  - `expat_family_friendliness`

## 3. Emerging Research-Based Feature Modules

These are high-value modules suggested by community evidence and repeated teacher concerns.

### A. Notice Period Metric
- Reported community fear: `Reference Weaponization`
- Teachers worry about:
  - how mid-contract resignations are handled
  - whether schools punish departures through references
  - whether exit is survivable if a posting turns bad

Potential derived product:
- `Exit Safety Score`

Potential database fields:
- `notice_period_days`
- `mid_contract_exit_risk`
- `reference_weaponization_risk`
- `completion_bonus_dependency`
- `exit_policy_clarity`
- `renewal_pressure`

### B. Family Viability Index
- Community reports suggest that simple salary vs. cost-of-living comparisons are too shallow.
- Example given:
  - very long commute times, such as `3 hours a day in Riyadh traffic`
  - childcare costs eroding savings

Potential derived product:
- `Real-World Household Savings`

Potential database fields:
- `commute_time_minutes`
- `traffic_burden`
- `childcare_monthly_cost`
- `household_savings_single`
- `household_savings_with_children`
- `family_viability_score`
- `allowance_reality_gap`

### C. Affluent Neglect Filter
- Formal safeguarding research and teacher communities both suggest a risk pattern in elite schools.
- Reported issue:
  - parental pressure
  - customer-service culture toward parents
  - student behaviour standards being undermined
  - affluent neglect

Potential derived product:
- `Affluent Neglect Risk`

Potential database fields:
- `parental_pressure_level`
- `discipline_override_by_parents`
- `customer_service_school_culture`
- `student_behavior_boundary_strength`
- `affluent_neglect_risk`
- `safeguarding_pressure`

## 4. Suggested Source Streams for a Research Section

### International Teaching Families
- Type: website/community resource
- Relevance:
  - teachers with children
  - family-specific viability questions
  - frequently discussed in community forums

Potential use:
- source for family-benefit patterns
- source for dependent-schooling and spouse-risk themes

### The International Educator (TIE Online)
- Type: formal practitioner publication
- Relevance:
  - affluent neglect
  - multilingual pedagogy
  - international school practice

Potential use:
- source for formal article references
- source for safer framing of school-culture risk

### TES International Safeguarding Report (2025)
- Type: formal report
- Relevance:
  - changing safeguarding landscape
  - parent resistance
  - affluent neglect
  - pressure points in international schools

Potential use:
- source for formal evidence behind safeguarding-related filters

## 5. Candidate Database Tables

These are not implementation decisions, just possible directions.

### `research_sources`
Purpose:
- track where a claim or pattern came from

Suggested fields:
- `id`
- `source_name`
- `source_type`
- `year`
- `link`
- `notes`
- `reliability_level`

### `research_claims`
Purpose:
- store structured claims or repeated patterns from sources

Suggested fields:
- `id`
- `source_id`
- `theme`
- `claim_title`
- `claim_summary`
- `evidence_type`
- `region`
- `country`
- `school_type`
- `family_relevance`

### `school_risk_signals`
Purpose:
- attach repeated community risk signals to schools

Suggested fields:
- `id`
- `school_name`
- `country`
- `dependent_benefit_risk`
- `staff_child_integration`
- `parental_pressure_level`
- `reference_weaponization_risk`
- `affluent_neglect_risk`
- `notes`

### `city_family_viability`
Purpose:
- model off-campus viability for families

Suggested fields:
- `id`
- `city`
- `country`
- `avg_commute_minutes`
- `traffic_burden`
- `childcare_cost_level`
- `spouse_work_viability`
- `family_viability_score`
- `notes`

## 6. High-Value Tag System

If stool begins storing qualitative research notes, a tag system could help normalize themes:

- `family-package`
- `staff-children`
- `local-elite-school`
- `spouse-visa-risk`
- `exit-risk`
- `reference-weaponization`
- `commute-burden`
- `childcare-cost`
- `affluent-neglect`
- `parental-resistance`
- `safeguarding`
- `teacher-isolation`
- `digital-belonging`
- `identity`

## 7. Practical Build Priorities

If this research is used to shape the next database layer, the strongest priorities appear to be:

1. `Exit safety`
   - notice periods
   - references
   - mid-contract resignation risk

2. `Family viability`
   - commute
   - childcare
   - dependent benefits
   - spouse work restrictions

3. `School reality vs brochure reality`
   - true student demographic mix
   - whether staff children are integrated
   - whether parent pressure overrides standards

4. `Safeguarding pressure`
   - affluent neglect
   - parental resistance
   - customer-service culture

## 8. Source Notes From User Brief

This file is based on user-provided research notes and should be treated as a planning brief, not yet as a verified literature review.

Named items to verify later if needed:
- University of Edinburgh / Laura Cariola / `Digital Belonging and Global Mobility`
- `Frontiers in Education` and `ERIC` references to online teacher learning communities
- `International Teaching Families`
- `TIE Online`
- `TES International Safeguarding Report (2025)`
