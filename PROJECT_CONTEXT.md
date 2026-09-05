# Love-Centered Therapy™ Launch Page — Project Context

_Last updated: September 5, 2026_

This document is the handoff/source-of-truth context for anyone or any coding agent continuing work on the Love-Centered Therapy™ (LCT) launch page.

## 1. What this project is

This is a **single-page launch/landing page** for **Love-Centered Therapy™ (LCT)**. It is intentionally not a full website yet.

The immediate goals are:

1. Introduce LCT clearly and beautifully.
2. Establish that LCT is a serious, published clinical model.
3. Give visitors a concise visual sense of the model.
4. Invite people into the LCT community/newsletter.
5. Create a place to announce **upcoming trainings and workshops**.

Do **not** turn this into a multi-page site or add tabs/navigation unless explicitly requested later. The user repeatedly asked for **one page only**.

## 2. Current deployment direction

The repository is intended to contain a simple static bundle:

- `index.html`
- `styles.css`
- `script.js`
- static assets as needed

The user wants to **self-host**, probably with GitHub Pages. Do not redirect the project toward a proprietary hosting solution.

The repo is:

`raiseandfall/love-centered-therapy-launch-page`

The implementation must remain easy to host as a static site.

## 3. Mobile responsiveness is a hard requirement

The page **must be genuinely mobile-friendly**, not merely technically responsive.

When changing the desktop implementation, always inspect the likely mobile behavior as well. Important considerations:

- no horizontal overflow
- large hero typography must scale gracefully
- the hero art must remain legible and attractive on a narrow screen
- the six-step model should reflow rather than becoming tiny
- form fields and CTA should be comfortable to tap
- section padding should reduce appropriately
- editorial whitespace should remain intentional on mobile rather than becoming excessive
- avoid text becoming too small just to preserve a desktop composition

Mobile quality is one of the user's most important implementation constraints.

## 4. Visual direction

The desired visual language is **editorial, refined, warm, intellectual, organic, minimalist, and relational**.

Think closer to:

- an independent literary/psychology journal
- Kinfolk / Magnolia Journal sensibility
- an elegant therapy institute or research project
- tactile paper, ink, botanical shadow, hand-drawn marks

Avoid:

- generic SaaS landing-page aesthetics
- bright tech gradients
- excessive cards
- pill-shaped UI everywhere
- stock-photo therapy imagery
- corporate wellness clichés
- busy navigation
- anything overly cute, cheesy, or “self-help brand” looking

### Palette

The current direction uses:

- warm cream/off-white background
- black/near-black typography
- dusty blush / terracotta accents
- warm taupe/stone
- extremely restrained borders

The visual should feel soft without losing scholarly seriousness.

### Typography

Current implementation uses:

- `Libre Caslon Display` for large editorial serif display type
- `DM Sans` for sans-serif/supporting text

The serif/sans contrast is important. Large headings should feel spacious and editorial.

## 5. Primary visual reference

A generated mockup became the strongest visual reference for the page. The implementation should match its **composition and feeling**, not merely contain the same words.

Key mockup characteristics:

### Header / hero

- LCT wordmark at upper left.
- Small italic line at upper right: **“A more relational world is possible.”**
- Huge serif title on the left: **Love-Centered Therapy™**.
- Short uppercase explanatory line beneath.
- Supporting paragraph beneath that.
- Publication badge beneath the copy.
- Large, tactile relational-field illustration on the right.
- Quote below the illustration.

The user specifically said the **big visual in the header did not match the mockup closely enough** and wants this corrected.

The hero artwork should feel like two hand-drawn, translucent, imperfect fields/rings overlapping around a central relational space. It should not feel like clean geometric SVG ellipses. It needs texture, irregularity, translucency, warmth, and an almost charcoal/watercolor/pastel quality.

### “The model at a glance”

A horizontal sequence of six steps with arrows between them:

1. Implicit relational learning
2. Body response
3. First Story
4. Protection
5. Partner response
6. Relational field

Each step has a circular, softly textured icon medallion above it.

The user specifically reported that the **icons were missing / visually unsuccessful** and asked that they be fixed.

The icons should be simple editorial line drawings, visually present, and close to the mockup. They should not disappear because of stroke contrast, scaling, or layout.

### Lower “framework” section

The mockup uses a warm editorial split section:

- left: a large soft botanical/leaf shadow entering from the edge
- centered/left editorial serif statement: **“A framework for a more relational world.”**
- short supporting paragraph
- right: newsletter/community signup area

The user specifically said the **“A framework for a more relational world” section does not match the mockup** and wants the visual implementation corrected.

Do not replace this with a generic content card. It should feel like a designed magazine spread.

### Newsletter section

The mockup's newsletter treatment is minimal and editorial:

- small uppercase heading: **JOIN THE LCT COMMUNITY**
- concise body copy
- simple rectangular First Name and Email Address fields
- black rectangular CTA button
- small privacy/unsubscribe note

The user specifically said the **newsletter section does not match the mockup** and wants it corrected.

Avoid rounded SaaS-style forms/cards. The form should feel integrated into the editorial composition.

## 6. LCT — conceptual context

Love-Centered Therapy™ is a **dyadic relational process model** developed from clinical couples/sex therapy work.

Its central interest is what happens **between people, moment to moment, when protection takes over**.

A core premise is that human beings are deeply organized around **connection and belonging**, while prior relational learning and nervous-system protection can constrain access to curiosity, accountability, vulnerability, choice, and loving responses.

LCT does not treat protection as pathology or something to eliminate. Protection is understood as intelligent and learned.

A key line that captures the stance is:

> The goal is not to eliminate protection. The goal is to restore the capacity to choose how to relate.

The model draws from / is in conversation with:

- attachment theory
- trauma-informed psychology
- somatic psychology
- interpersonal neurobiology
- couples and sex therapy
- decolonial scholarship

The user's broader frame is that relational patterns are not shaped only by childhood or the individual. Nervous systems and protective strategies are also shaped by families, communities, institutions, culture, migration, racism, colonialism, patriarchy, and other social structures.

Do not flatten LCT into “attachment styles.” It is attachment-informed but is not primarily a typology model of anxious/avoidant partners.

## 7. Core process language

Important LCT constructs include:

### Implicit relational learning

Past relational experiences shape expectations about what happens between people and how a person learns to protect connection, belonging, dignity, or safety.

### Body response

The nervous system/body responds before a fully articulated narrative exists.

### First Story

A rapid meaning forms in the moment. Examples might involve rejection, disrespect, abandonment, failure, not mattering, or disconnection.

### Protection

The person does what they have learned to do when that meaning/body state is activated. Protective strategies can include defending, withdrawing, attacking, criticizing, rescuing, appeasing, controlling, devaluing, shutting down, etc.

### Partner response

One person's protection becomes part of the other person's relational environment and can evoke their own body response, First Story, and protection.

### Relational field

Together, partners create a shared emotional/autonomic relational environment. The cycle is therefore not simply two isolated individuals having reactions; it is organized **between them**.

The broader cycle is often called the **First Story Cycle**.

## 8. Positioning and tone

LCT should be presented with confidence but not grandiosity.

The associated scholarship has intentionally moved toward more humility about what has and has not been empirically established. Avoid marketing claims that imply LCT has already been conclusively validated as superior or universally applicable.

Good tone:

- thoughtful
- curious
- grounded
- relational
- scholarly but understandable
- clinically sophisticated
- warm
- inviting

Avoid:

- “revolutionary new therapy that changes everything”
- universal claims about all people/cultures
- exaggerated neuroscience claims
- simplistic “heal your attachment style” language
- pathologizing protection

## 9. Publication credibility

LCT has been published in the **Journal of Sex & Marital Therapy**.

The publication is an important credibility marker and should remain visible on the launch page.

Current publication URL:

`https://www.tandfonline.com/doi/full/10.1080/0092623X.2026.2720622`

The site can say that the model is published in the Journal of Sex & Marital Therapy. Prefer a restrained publication badge/treatment rather than turning the hero into an academic citation page.

## 10. Audience

Likely initial audience includes:

- therapists
- couples therapists
- sex therapists
- clinicians interested in relational work
- supervisors
- researchers
- clinicians interested in trauma/somatic/attachment approaches
- people interested in future LCT training

The site should still be understandable to an intelligent non-specialist.

## 11. What the launch page should communicate quickly

A visitor should understand, within seconds:

1. This is **Love-Centered Therapy™**.
2. It is a **relational process model**.
3. It helps explain what happens between people when protection takes over.
4. It is clinically/scholarly serious and has been published.
5. There is a recognizable process/model behind it.
6. Training/community opportunities are coming.
7. They can join the community/newsletter now.

## 12. Current content direction

Current hero copy in the repo is close to:

> A relational process model for understanding what happens between people when protection takes over.

And:

> Love-Centered Therapy™ (LCT) is a dyadic process model that helps therapists work with the moment-to-moment cycle through which implicit relational learning, autonomic protection, and connection become organized between partners.

This is a useful baseline, but visual fidelity to the mockup currently matters more than rewriting everything.

### Model-at-a-glance copy

Current concise sequence:

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

### Community copy

Current direction:

> Be the first to hear about upcoming trainings, workshops, research updates, and new resources. Join a growing community of therapists, researchers, and clinicians shaping the future of relational therapy.

This launch page is specifically intended to support **community growth and upcoming trainings**.

## 13. Training context

The user is actively developing LCT training and expects training to become a major part of the project.

Relevant context:

- LCT Foundations is a likely foundational training offering.
- The user is thinking toward an eventual LCT institute / more formal training structure.
- Training may initially happen through collaborators/platforms rather than through a full LCT-owned learning platform.
- The launch page does not need to solve the entire training infrastructure yet.
- For now it should provide a polished place to gather interest and announce upcoming trainings.

Do not overbuild a course platform into this launch page.

## 14. Newsletter / email provider

The form is currently a placeholder and needs a real third-party provider.

The user has a WordPress instance that **could** store/send email, but explicitly said this is **not the priority solution** and is open to a better third-party newsletter/signup service.

Desired qualities:

- easy embed or form POST from a static GitHub Pages site
- privacy-conscious
- simple audience/list management
- easy newsletter sending
- minimal visual interference so the site's custom form design can be preserved
- reasonable cost for an early-stage project

Do not tightly couple the page to WordPress unless later requested.

A future agent should compare suitable providers before wiring the production form. The current HTML uses `data-provider="pending"` intentionally.

## 15. Current repository state

At the time this context file was written, the repo contains:

- `index.html`
- `styles.css`
- `script.js`

The current implementation already includes:

- responsive viewport metadata
- LCT hero copy
- publication badge
- SVG relational-field illustration
- six model steps with inline SVG icons
- lower framework/community section
- newsletter placeholder form
- footer

However, the user's latest review is that the visual implementation is **not yet faithful enough to the preferred mockup**, specifically:

1. model-at-a-glance icons need fixing
2. hero visual needs to match the mockup much more closely
3. framework section needs to match the mockup much more closely
4. newsletter section needs to match the mockup much more closely

These are the immediate next design tasks.

## 16. Implementation guidance for the next agent

Before making a large redesign:

1. Inspect `index.html`, `styles.css`, and `script.js`.
2. Preserve the one-page/static architecture.
3. Treat the mockup as the art direction.
4. Fix the four visual mismatches listed above.
5. Test desktop and mobile together.
6. Keep accessibility basics intact: semantic headings, labels, adequate contrast, focus states, reduced-motion awareness if animation is introduced.
7. Avoid unnecessary JS. This page should remain lightweight.

For the hero relational-field artwork, consider using a purpose-made raster/WebP/PNG asset or a much more sophisticated SVG/filter approach if necessary. The current clean ellipse SVG is structurally correct but visually too geometric compared with the hand-made mockup.

For botanical shadows/textures, subtle CSS/SVG/raster assets are preferable to generic stock imagery.

## 17. Things not to accidentally change

Unless explicitly requested:

- Do not make it a multi-page website.
- Do not add tabs.
- Do not add a conventional large navigation bar.
- Do not bury the newsletter CTA.
- Do not remove the publication credibility marker.
- Do not make the design tech/SaaS-like.
- Do not make the page visually dense.
- Do not use tiny body type.
- Do not sacrifice mobile quality to reproduce the desktop mockup literally.
- Do not treat protection as pathology.
- Do not describe LCT as simply another attachment-style framework.
- Do not overclaim the evidence base.

## 18. Brand/legal details

Use **Love-Centered Therapy™** and **LCT** consistently.

Footer/legal direction:

`© 2026 Love-Centered Therapy™. All Rights Reserved.`

The ™ should be used with the full model name where appropriate, but it does not need to clutter every sentence.

## 19. Design success test

A successful next iteration should feel, at first glance, like the mockup came to life on the web rather than like a developer reinterpreted the mockup as a generic landing page.

Ask:

- Does the hero have the same editorial drama?
- Does the relational field feel tactile and human?
- Are the six model icons immediately visible and elegant?
- Does the lower section feel like a magazine spread with soft botanical shadow?
- Does the signup form feel intentionally designed rather than inserted?
- Is it beautiful on a phone?
- Does it still load quickly and work as a static site?

If yes, the project is moving in the right direction.
