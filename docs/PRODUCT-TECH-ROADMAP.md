# Ag Forum Africa — Product & Tech Roadmap

**Purpose:** Turn the platform into the central intelligence and convening layer for African agriculture (capital, policy, operators).  
**Principle:** One primary product and one primary audience per phase. No feature sprawl.

---

## Strategic Anchors

| Decision | Choice |
|----------|--------|
| **Primary category** | Institutional intelligence + convening (not “community platform”) |
| **Phase 1 audience** | DFIs and policy-oriented institutions |
| **Phase 1 product** | Curated research + one data product (e.g. capital or regulatory) |
| **Core differentiator** | Proprietary or uniquely curated intelligence + access, not open forums |

---

## Phase 1: Foundation (0–18 months)

**Goal:** One credible intelligence product, one audience, one data product, tiered access.

### Build order

1. **Identity & access**
   - Org + user + role model; membership tiers (e.g. Public / Member / Institutional).
   - Auth (email/password + optional magic link); design for SSO from day one (one SAML or OIDC path).
   - Audit log for sensitive views and exports (who, what, when).

2. **Content system (research)**
   - Headless CMS with structured content model: document type, blocks, metadata, citations, versioning.
   - Editorial workflow: draft → review → publish. Publish via API; web and future AI consume same store.
   - Research templates: policy brief (exec summary, findings, recommendations), full report (TOC, sections, annexes).
   - Outputs: web reading view + PDF export. Clear byline, institution, date, methodology link.

3. **Data product (intelligence)**
   - One dashboard to start (e.g. capital flows **or** regulatory tracker — not both in v1).
   - Datasets as first-class objects: definition, source, methodology, last updated.
   - Simple pipeline: source → transform → store (e.g. Postgres + optional blob). No data lake in v1.
   - Dashboard: config-driven KPIs/widgets (e.g. Recharts + config), not logic buried in UI only.

4. **Information architecture**
   - Split surfaces: **Intelligence** (Research + Data), **Convening** (Events), **Community** (secondary).
   - Home and main nav designed for DFI/policy: intelligence-first, no “trending” or forums as hero.
   - Persona-aware entry: optional “For policymakers” / “For investors” / “For founders” with same content, different framing.

5. **Events**
   - Events as structured records (title, date, type, audience, registration link, recording).
   - Single source of truth; integrate with one calendar/registration provider. List and detail pages consume it.

6. **Tiered access**
   - Gating by tier (e.g. public vs member vs institutional). No “everything free” for core intelligence.
   - Clear upgrade path and, where relevant, “Request institutional access.”

### Cuts (do not build in Phase 1)

- Open forums as primary product or hero.
- Success stories as a top-level product surface.
- Multiple dashboards or multiple data products.
- Deal rooms / matching.
- Data APIs (design the boundary, implement in Phase 2+).
- AI features (summarisation, chat, etc.).
- Real-time dashboards or custom ML.

### Tech choices (concise)

- **App:** Keep Next.js App Router; add API routes or BFF for CMS and data.
- **Content:** Headless CMS (e.g. Payload, Strapi, or Sanity) with structured schema and API.
- **Data:** Postgres for relational data; dashboard config in DB or config layer.
- **Auth:** NextAuth or similar; design for SSO and org/role from the start.
- **Hosting:** Current stack (e.g. Vercel) is fine; ensure env-based config and secrets for CMS and DB.

---

## Phase 2: Expand & Lock-in (18–36 months)

**Goal:** More research and data products; institutional stickiness; first closed-door convening; optional AI.

### Build order

1. **Second (and optionally third) data product** — same patterns: definition, pipeline, dashboard, access rules.
2. **API exposure** — Read-only APIs for research and data (key or OAuth), versioned (e.g. `/v1/...`). Rate limits and usage visibility.
3. **Institutional features** — Org-level contracts, more SSO, usage/audit reporting. “Enterprise” = IAM + compliance, not feature bloat.
4. **Closed-door convening** — First flagship event (physical/hybrid) with clear membership and outcomes. Deal rooms only if there is concrete demand and a clear protocol.
5. **AI layer (optional)** — Summarisation and “digest over our corpus” for members; always labelled (“AI summary”) and linked to sources.

### Cuts (still out of scope)

- Open community as the main value proposition.
- Many dashboards before one is clearly best-in-class.
- Unlabelled or unreferenced AI mixed with human research.

---

## Phase 3: Infrastructure (3–7 years)

**Goal:** Platform as infrastructure — others build on your intelligence; you are source of record for a defined set of data and research.

### Build order

1. **Stable, versioned APIs** for data and (where appropriate) research; used by partners and enterprise.
2. **White-label or embedded** intelligence for third parties (e.g. banks, governments).
3. **Convening as a product** — Annual summit + thematic roundtables with clear membership and measurable outcomes.
4. **Governance and provenance** — Clear ownership of datasets and research; public methodology; no blurring of AI vs human.

### Success criteria

- Capital and policy institutions treat the platform as a must-check source.
- At least one intelligence product is clearly best-in-class and hard to replicate.
- Revenue and retention come from intelligence and access, not from ads or generic community.

---

## One-Page Summary

| Phase   | Timeline   | Primary product              | Primary audience   | Build first                          | Do not build                    |
|---------|------------|------------------------------|---------------------|--------------------------------------|---------------------------------|
| **1**   | 0–18 mo    | Curated research + 1 dashboard| DFIs, policy        | IAM, CMS, 1 data product, IA, tiers  | Forums hero, deal rooms, AI, APIs |
| **2**   | 18–36 mo   | More data + convening        | Same + investors    | 2nd dashboard, APIs, SSO, AI (labelled) | Open community as core         |
| **3**   | 3–7 yr     | Platform / source of record   | Institutions + partners | Versioned APIs, embedding, governance | —                               |

---

## Single Decision That Matters

**Choose the one primary product and one primary audience for the next 18 months. Design and build only for that.** Everything else is Phase 2 or cut. Without that, the product stays a community platform that aspires to be institutional infrastructure and never gets there.
