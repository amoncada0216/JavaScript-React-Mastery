# Accessibility (a11y) — Mastery Map (Usable by Everyone, Correct by Design)

## 1 — What Accessibility Actually Is

- [ ] Accessibility vs usability vs UX
- [ ] Permanent, temporary, situational disabilities
- [ ] Legal & ethical baseline (high level)
- [ ] “Keyboard-only” as a forcing function
- [ ] Accessibility as a system property

---

## 2 — The Web’s Built-In Accessibility Contract

- [ ] Native HTML is accessible by default
- [ ] Browser accessibility tree
- [ ] How assistive tech reads the page
- [ ] Why divs break accessibility
- [ ] Progressive enhancement mindset

---

## 3 — Semantics (The Foundation)

- [ ] Semantic HTML elements
- [ ] Headings as document outline
- [ ] Landmarks (`main`, `nav`, `header`, `footer`)
- [ ] Lists vs paragraphs
- [ ] Buttons vs links (behavioral meaning)
- [ ] When semantics replace ARIA

---

## 4 — Keyboard Navigation (Non-Negotiable)

- [ ] Tab order
- [ ] Focus order vs DOM order
- [ ] Focus visibility
- [ ] Keyboard traps
- [ ] Custom components & keyboard support
- [ ] Escape key behavior

---

## 5 — Focus Management

- [ ] Programmatic focus
- [ ] Focus on navigation changes
- [ ] Focus restoration
- [ ] Modal focus containment
- [ ] Focus vs hover mental model

---

## 6 — Forms & Inputs (Where Most Fail)

- [ ] Labels and accessible names
- [ ] `label` vs `aria-label`
- [ ] Grouping controls (`fieldset`, `legend`)
- [ ] Error messaging
- [ ] Required vs optional indicators
- [ ] Validation timing

---

## 7 — ARIA (Dangerous If Misused)

- [ ] What ARIA is (and isn’t)
- [ ] ARIA roles
- [ ] ARIA states & properties
- [ ] Name / role / value model
- [ ] When ARIA is required
- [ ] ARIA anti-patterns

---

## 8 — Screen Readers (Mental Model)

- [ ] How screen readers navigate
- [ ] Reading order
- [ ] Announcements vs focus
- [ ] Live regions
- [ ] Polite vs assertive updates
- [ ] Common screen reader failures

---

## 9 — Visual Accessibility

- [ ] Color contrast requirements
- [ ] Color as the only signal (anti-pattern)
- [ ] Text sizing & zoom
- [ ] Responsive text
- [ ] Dark mode considerations

---

## 10 — Media Accessibility

- [ ] Alt text (purpose-driven)
- [ ] Decorative vs informative images
- [ ] Captions for video
- [ ] Transcripts for audio
- [ ] Autoplay restrictions

---

## 11 — Motion & Cognitive Load

- [ ] Reduced motion preferences
- [ ] Animation triggers
- [ ] Avoiding vestibular issues
- [ ] Timing & timeouts
- [ ] Clear, predictable interactions

---

## 12 — Dynamic Content & SPAs

- [ ] Announcing route changes
- [ ] Updating content without reloads
- [ ] Focus after async updates
- [ ] Live region usage
- [ ] Avoiding silent UI changes

---

## 13 — Accessibility APIs & Tools

- [ ] Accessibility tree inspection
- [ ] DevTools a11y panels
- [ ] Screen reader testing basics
- [ ] Automated tooling limits
- [ ] Manual testing necessity

---

## 14 — WCAG (As a Reference, Not Religion)

- [ ] WCAG principles (POUR)
- [ ] A / AA / AAA levels
- [ ] Mapping guidelines to real UI
- [ ] Avoiding checkbox compliance
- [ ] Documenting accessibility decisions

---

## 15 — Common Failure Patterns

- [ ] Click-only interactions
- [ ] Div-based buttons
- [ ] Invisible focus
- [ ] Broken modals
- [ ] ARIA overuse
- [ ] “We’ll fix it later”

---

## GOD CHECK — Accessibility

You’re done when you can:

- [ ] Use your app fully with keyboard only
- [ ] Explain what a screen reader will announce
- [ ] Choose semantics before ARIA
- [ ] Catch a11y bugs during development
- [ ] Build features that don’t need retrofitting
