# Love-Centered Therapy™ Launch Page — Design & Project Handoff

_Last updated: September 5, 2026_

This is the **single source of truth** for anyone or any coding agent continuing work on the Love-Centered Therapy™ (LCT) launch page.

---

## 1. What this project is

This is a **single-page launch / landing page** for **Love-Centered Therapy™ (LCT)**. It is intentionally **not** a full website yet.

The immediate goals are to:

1. Introduce LCT clearly and beautifully.
2. Establish that LCT is a serious, published clinical model.
3. Give visitors a concise visual sense of the model.
4. Invite people into the LCT community/newsletter.
5. Create a place to announce **upcoming trainings and workshops**.

### Hard product constraints

- **One page only.**
- **No tabs.**
- Do not add a conventional large navigation bar unless explicitly requested later.
- The page must remain a lightweight static site.
- The user intends to self-host, probably with **GitHub Pages**.
- **Mobile quality is a hard requirement.**

Repository:

`raiseandfall/love-centered-therapy-launch-page`

Current stack:

- `index.html`
- `styles.css`
- `script.js`
- static assets as needed

Do not redirect this project toward a proprietary hosting platform.

---

## 2. Primary design direction

The visual language should be:

- editorial
- warm
- refined
- intellectual
- organic
- tactile
- minimalist
- relational
- scholarly without feeling academic or cold

Think closer to:

- an independent literary or psychology journal
- Kinfolk / Magnolia Journal sensibility
- an elegant therapy institute
- a thoughtful research project
- tactile paper, ink, botanical shadow, hand-drawn marks

Avoid:

- generic SaaS landing-page aesthetics
- bright tech gradients
- excessive cards
- pill-shaped UI everywhere
- stock-photo therapy imagery
- corporate wellness clichés
- busy navigation
- overly polished geometric vector art
- anything cheesy, cute, or generic “self-help brand”

The page should feel soft and relational **without losing seriousness**.

---

## 3. Palette

Current color direction:

- warm cream / off-white background
- black / near-black typography
- dusty blush / terracotta accents
- warm taupe / stone
- restrained, thin borders and rules

Do not introduce a broad brand palette. The design should remain quiet and disciplined.

---

## 4. Typography

Current implementation uses:

- `Libre Caslon Display` for large editorial serif type
- `DM Sans` for supporting text / labels / utility copy

The serif / sans contrast is important.

### Desired behavior

- large serif headings should feel dramatic and spacious
- supporting sans labels can use uppercase + generous tracking sparingly
- body copy must remain comfortably readable
- use responsive `clamp()` or equivalent for major type
- do not shrink text excessively to preserve a desktop composition

---

## 5. Primary visual reference

A generated mockup became the strongest visual reference for this page.

The implementation should match the mockup’s **composition, hierarchy, and feeling**, not merely contain the same words.

The success criterion is:

> It should feel like the mockup came to life on the web, not like a developer reinterpreted it as a generic landing page.

---

## 6. Page anatomy

### A. Hero / header

The desktop hero should feel like an asymmetrical editorial two-column spread.

#### Top row

**Upper left:**

- LCT™ wordmark
- tiny `LOVE-CENTERED THERAPY` label beneath

**Upper right:**

- small italic serif line: **“A more relational world is possible.”**

#### Left hero column

- huge serif title: **Love-Centered Therapy™**
- uppercase / sans descriptor underneath
- short explanatory paragraph
- restrained outlined publication badge with small open-book icon

#### Right hero column

- oversized relational-field artwork
- quote below artwork

Current quote direction:

> “The goal is not to eliminate protection. The goal is to restore the capacity to choose how to relate.”

### Hero artwork: critical visual issue

The current implementation uses clean SVG ellipses. Structurally it is close, but visually it is too geometric.

The preferred artwork should feel like:

- two hand-drawn translucent relational fields / rings
- blush field on the left
- warm taupe / stone field on the right
- a narrow shared overlapping center
- irregular contour lines
- dotted / nested marks around the center
- a small black central dot
- subtle texture and imperfect edges
- almost charcoal / dry-brush / watercolor / pastel in feeling

The artwork should be a signature brand visual, not a decorative diagram.

If pure SVG cannot convincingly achieve this, a custom transparent PNG/WebP asset is acceptable. Keep appropriate alt/description text in the HTML.

---

### B. “The model at a glance”

Use a centered small uppercase heading with a subtle blush rule beneath.

The six-step sequence is:

1. **Implicit relational learning**
2. **Body response**
3. **First Story**
4. **Protection**
5. **Partner response**
6. **Relational field**

On desktop, this is a horizontal flow with arrows between each step.

Each step should contain:

- pale, softly textured circular medallion
- clear black line icon
- compact uppercase title
- concise explanation beneath

### Icon direction

Icons should evoke:

- brain / implicit learning
- torso / body / nervous system
- speech bubble / story
- shield / protection
- two people / partner response
- concentric field / relational field

### Critical issue to fix

The user specifically said the icons were **missing / visually unsuccessful**.

They must visibly render with adequate stroke contrast and correct sizing. They should feel editorial and elegant, not generic UI icons.

### Current step copy

**Implicit relational learning**  
Past experiences shape what we expect and how we protect.

**Body response**  
The nervous system responds before we have words.

**First Story**  
A meaning forms in the moment.

**Protection**  
We do what we've learned to feel safe and connected.

**Partner response**  
Our protection triggers a response in our partner.

**Relational field**  
Together, a shared emotional and autonomic environment is created — and the cycle continues.

---

### C. Framework + community spread

This section should look like a designed magazine spread, not two generic cards.

#### Left side

- warm cream / blush background
- large soft botanical leaf shadow entering from the left edge
- generous whitespace
- large serif statement: **“A framework for a more relational world.”**
- short blush rule
- supporting paragraph beneath

Current supporting direction:

> LCT brings together clinical observations from couples work with insights from attachment, trauma-informed and somatic psychology, interpersonal neurobiology, and decolonial scholarship.

#### Right side

- subtle vertical divider on desktop
- small uppercase heading: **JOIN THE LCT COMMUNITY**
- short blush underline
- concise paragraph
- rectangular First Name field
- rectangular Email Address field
- black full-width rectangular CTA button
- tiny privacy / unsubscribe note

Current community copy direction:

> Be the first to hear about upcoming trainings, workshops, research updates, and new resources. Join a growing community of therapists, researchers, and clinicians shaping the future of relational therapy.

### Critical issue to fix

The user specifically said both the **“A framework for a more relational world” section** and the **newsletter section** do not match the preferred mockup closely enough.

The next visual pass should prioritize fidelity here.

Avoid rounded SaaS-style forms/cards. The form should feel integrated into the editorial composition.

---

### D. Footer

Keep it restrained and editorial.

Suggested 3-part structure:

- LCT wordmark on the left
- italic model description in the center
- copyright and eventual social links on the right

Thin dividers are appropriate.

Legal direction:

`© 2026 Love-Centered Therapy™. All Rights Reserved.`

---

## 7. Mobile responsiveness: non-negotiable

The page must be genuinely mobile-friendly, not merely technically responsive.

### Mobile requirements

- no horizontal overflow
- hero typography scales gracefully
- hero copy first, artwork second
- hero artwork remains large and meaningful on small screens
- quote remains visually connected to artwork
- six model steps reflow vertically or into a comfortable grid
- do not shrink all six into a tiny horizontal strip
- framework and signup stack vertically
- botanical shadow becomes a background accent rather than consuming excessive space
- form fields and CTA are full-width and easy to tap
- section padding reduces intentionally
- whitespace remains editorial, not wasteful
- text never becomes tiny just to preserve the desktop design

### Suggested behavior

#### Tablet

- hero can remain two-column if space permits
- model flow can become 3 × 2
- lower split can stay two-column until cramped

#### Mobile

- stack hero copy and artwork
- stack framework and signup
- adapt arrows / flow indicators for vertical sequence
- preserve visual hierarchy and breathing room

Mobile quality is one of the user's most important implementation constraints.

---

## 8. LCT conceptual context

Love-Centered Therapy™ is a **dyadic relational process model** developed from clinical couples / sex therapy work.

Its central interest is what happens **between people, moment to moment, when protection takes over**.

A core premise is that human beings are deeply organized around **connection and belonging**, while prior relational learning and nervous-system protection can constrain access to:

- curiosity
- accountability
- vulnerability
- choice
- loving responses

LCT does **not** treat protection as pathology or something to eliminate.

Protection is understood as learned, intelligent, and adaptive.

A key line that captures the stance is:

> The goal is not to eliminate protection. The goal is to restore the capacity to choose how to relate.

The model draws from and is in conversation with:

- attachment theory
- trauma-informed psychology
- somatic psychology
- interpersonal neurobiology
- couples therapy
- sex therapy
- decolonial scholarship

A crucial broader frame is that relational patterns are not shaped only by childhood or the individual.

Nervous systems and protective strategies are also shaped by:

- families
- communities
- institutions
- culture
- migration
- racism
- colonialism
- patriarchy
- other social structures

Do **not** flatten LCT into “attachment styles.” It is attachment-informed but is not primarily an anxious / avoidant typology model.

---

## 9. Core process language

### Implicit relational learning

Past relational experiences shape expectations about what happens between people and how a person learns to protect connection, belonging, dignity, or safety.

### Body response

The nervous system / body responds before a fully articulated narrative exists.

### First Story

A rapid meaning forms in the moment.

Examples may involve:

- rejection
- disrespect
- abandonment
- failure
- not mattering
- disconnection

### Protection

The person does what they have learned to do when that meaning / body state is activated.

Protective strategies can include:

- defending
- withdrawing
- attacking
- criticizing
- rescuing
- appeasing
- controlling
- devaluing
- shutting down

### Partner response

One person's protection becomes part of the other person's relational environment and can evoke their own body response, First Story, and protection.

### Relational field

Together, partners create a shared emotional / autonomic relational environment.

The cycle is therefore not simply two isolated individuals reacting. It is organized **between them**.

The broader cycle is often called the **First Story Cycle**.

---

## 10. Positioning and tone

LCT should be presented with confidence but not grandiosity.

The associated scholarship has intentionally moved toward humility about what has and has not been empirically established.

### Good tone

- thoughtful
- curious
- grounded
- relational
- warm
- clinically sophisticated
- scholarly but understandable
- inviting

### Avoid

- “revolutionary new therapy that changes everything”
- universal claims about all people or all cultures
- exaggerated neuroscience claims
- simplistic “heal your attachment style” language
- pathologizing protection
- implying LCT has already been conclusively validated as superior

---

## 11. Publication credibility

LCT has been published in the **Journal of Sex & Marital Therapy**.

This is an important credibility marker and should remain visible on the launch page.

Publication URL:

`https://www.tandfonline.com/doi/full/10.1080/0092623X.2026.2720622`

Use a restrained publication badge / treatment in the hero rather than making the page feel like an academic citation page.

---

## 12. Audience

Likely initial audience includes:

- therapists
- couples therapists
- sex therapists
- clinicians interested in relational work
- supervisors
- researchers
- clinicians interested in trauma / somatic / attachment approaches
- people interested in future LCT training

The site should still be understandable to an intelligent non-specialist.

---

## 13. What visitors should understand quickly

Within seconds, a visitor should understand:

1. This is **Love-Centered Therapy™**.
2. It is a **relational process model**.
3. It helps explain what happens between people when protection takes over.
4. It is clinically and scholarly serious and has been published.
5. There is a recognizable model / process behind it.
6. Training and community opportunities are coming.
7. They can join the community / newsletter now.

---

## 14. Current hero copy direction

Current copy is close to:

> A relational process model for understanding what happens between people when protection takes over.

And:

> Love-Centered Therapy™ (LCT) is a dyadic process model that helps therapists work with the moment-to-moment cycle through which implicit relational learning, autonomic protection, and connection become organized between partners.

This is a useful baseline.

For the current development pass, **visual fidelity matters more than rewriting everything**.

---

## 15. Training context

The user is actively developing LCT training and expects training to become a major part of the project.

Relevant context:

- **LCT Foundations** is a likely foundational training offering.
- The user is thinking toward an eventual LCT institute / more formal training structure.
- Training may initially happen through collaborators or other platforms rather than through a full LCT-owned learning platform.
- The launch page does not need to solve the full training infrastructure yet.
- For now, the site should provide a polished place to gather interest and announce upcoming trainings.

Do not overbuild a course platform into this page.

---

## 16. Newsletter / email provider

The form is currently a placeholder and still needs a real third-party provider.

The user has a WordPress instance that **could** store/send email, but explicitly said this is **not the priority solution** and is open to a better third-party newsletter/signup service.

Desired provider qualities:

- easy embed or form POST from a static GitHub Pages site
- privacy-conscious
- simple audience/list management
- easy newsletter sending
- minimal visual interference so the custom form design can be preserved
- reasonable cost for an early-stage project

Do not tightly couple the page to WordPress unless requested later.

A future agent should compare appropriate providers before wiring the production form.

Current HTML uses:

`data-provider="pending"`

intentionally.

---

## 17. Current repository state

At the time of this handoff, the core implementation already includes:

- responsive viewport metadata
- LCT hero copy
- publication badge
- SVG relational-field illustration
- six model steps with inline SVG icons
- lower framework/community section
- newsletter placeholder form
- footer

### User's latest visual review

The implementation is **not yet faithful enough to the preferred mockup**.

The four immediate issues are:

1. **Model-at-a-glance icons need fixing**
2. **Hero visual needs to match the mockup much more closely**
3. **Framework section needs to match the mockup much more closely**
4. **Newsletter section needs to match the mockup much more closely**

These are the next design tasks.

---

## 18. Highest-priority next pass

Focus on these in this order:

1. **Hero relational-field artwork fidelity**
2. **Model icons visibly and elegantly rendering**
3. **Framework section fidelity to the editorial mockup**
4. **Newsletter section fidelity to the editorial mockup**
5. **Mobile polish across all of the above**

Do **not** spend the next pass adding features.

The user's request is specifically to correct visual fidelity first.

---

## 19. Implementation guidance

Before making a large redesign:

1. Inspect `index.html`, `styles.css`, and `script.js`.
2. Preserve the one-page static architecture.
3. Treat the mockup as the art direction.
4. Fix the four visual mismatches above.
5. Test desktop and mobile together.
6. Keep accessibility basics intact.
7. Avoid unnecessary JavaScript.
8. Keep the page lightweight and GitHub Pages friendly.

### Accessibility basics

Maintain:

- semantic headings
- form labels
- adequate contrast
- keyboard focus states
- sensible alt / descriptive text for artwork
- reduced-motion awareness if animation is introduced

### Artwork implementation

For the hero relational field, consider:

- custom raster/WebP/PNG with transparent background
- advanced SVG filters / texture
- layered hand-drawn vector paths

The current clean ellipse SVG is structurally correct but visually too geometric.

For botanical shadows or paper-like texture, subtle CSS / SVG / raster assets are preferable to generic stock imagery.

---

## 20. Interaction

Keep interaction minimal.

The only essential interactive feature right now is newsletter signup.

Avoid animation unless it genuinely enhances the tactile editorial feeling.

If motion is introduced:

- keep it subtle
- avoid distracting scroll effects
- honor reduced-motion preferences

---

## 21. Things not to accidentally change

Unless explicitly requested:

- Do not make it a multi-page website.
- Do not add tabs.
- Do not add a conventional large navbar.
- Do not bury the newsletter CTA.
- Do not remove the publication credibility marker.
- Do not make the design tech / SaaS-like.
- Do not make the page visually dense.
- Do not use tiny body type.
- Do not sacrifice mobile quality to reproduce the desktop mockup literally.
- Do not treat protection as pathology.
- Do not describe LCT as simply another attachment-style framework.
- Do not overclaim the evidence base.
- Do not overbuild training infrastructure yet.

---

## 22. Brand / legal details

Use **Love-Centered Therapy™** and **LCT** consistently.

The ™ should appear with the full model name where appropriate, but it does not need to clutter every sentence.

Footer/legal direction:

`© 2026 Love-Centered Therapy™. All Rights Reserved.`

---

## 23. Design success test

A successful iteration should answer **yes** to these questions:

- Does the hero have the same editorial drama as the mockup?
- Does the relational field feel tactile and human rather than geometric?
- Are the six model icons immediately visible and elegant?
- Does the model sequence remain easy to understand?
- Does the lower section feel like a magazine spread with soft botanical shadow?
- Does the signup form feel intentionally designed rather than inserted?
- Is the page beautiful and readable on a phone?
- Does it remain fast and static-site friendly?
- Does the copy feel grounded, serious, and relational without overclaiming?

If yes, the project is moving in the right direction.
