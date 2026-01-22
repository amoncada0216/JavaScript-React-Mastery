# CSS Architecture — Mastery Map (From Chaos to Control)

## 1 — What CSS Actually Is

- [ ] CSS is a global, cascading system
- [ ] Declarative, not imperative
- [ ] Why CSS is hard at scale
- [ ] CSS ≠ layout only
- [ ] The cost of “just add a class”

---

## 2 — The Cascade (The Core Mechanism)

- [ ] Cascade order
- [ ] Origin (user agent, user, author)
- [ ] Importance (`!important`)
- [ ] Specificity calculation
- [ ] Source order
- [ ] Why the cascade exists

---

## 3 — Specificity (Control or Suffering)

- [ ] Specificity rules
- [ ] Class vs ID vs element selectors
- [ ] Inline styles
- [ ] Specificity wars
- [ ] Why increasing specificity is a trap
- [ ] How to reset specificity safely

---

## 4 — Inheritance & Defaults

- [ ] What properties inherit
- [ ] What doesn’t inherit
- [ ] `inherit`, `initial`, `unset`, `revert`
- [ ] Browser default styles
- [ ] CSS reset vs normalize

---

## 5 — The Box Model (Non-Negotiable)

- [ ] Content box
- [ ] Padding
- [ ] Border
- [ ] Margin
- [ ] `box-sizing`
- [ ] Margin collapsing

---

## 6 — Layout Systems (Mental Models)

- [ ] Normal document flow
- [ ] Positioning (`static`, `relative`, `absolute`, `fixed`, `sticky`)
- [ ] Flexbox (1D layout)
- [ ] Grid (2D layout)
- [ ] Choosing the right layout tool
- [ ] Layout anti-patterns

---

## 7 — Sizing & Units

- [ ] `px`, `%`
- [ ] `em` vs `rem`
- [ ] `vw` / `vh`
- [ ] `min-*` / `max-*`
- [ ] Intrinsic sizing
- [ ] Responsive sizing strategies

---

## 8 — Responsive Design (Systematically)

- [ ] Mobile-first vs desktop-first
- [ ] Media queries
- [ ] Container queries
- [ ] Breakpoint strategy
- [ ] Avoiding breakpoint explosion

---

## 9 — Typography Architecture

- [ ] Font stacks
- [ ] Line height
- [ ] Vertical rhythm
- [ ] Responsive typography
- [ ] Readability vs aesthetics

---

## 10 — Color & Theme Systems

- [ ] Color models (RGB, HSL)
- [ ] Contrast requirements
- [ ] Semantic color naming
- [ ] Theme variables
- [ ] Dark mode strategies

---

## 11 — CSS Variables (Custom Properties)

- [ ] Runtime vs build-time variables
- [ ] Scope of variables
- [ ] Fallback values
- [ ] Theming with variables
- [ ] Variables vs preprocessors

---

## 12 — Architecture Patterns (Scale Control)

- [ ] Global CSS risks
- [ ] Utility-first approach
- [ ] Component-scoped styles
- [ ] Design systems
- [ ] Layered CSS strategies

---

## 13 — Naming Conventions (Prevent Entropy)

- [ ] Why naming matters
- [ ] Flat vs nested naming
- [ ] Semantic vs visual naming
- [ ] Refactor-friendly names
- [ ] Avoiding naming collisions

---

## 14 — CSS Methodologies (Conceptual)

- [ ] BEM (what it solves, what it doesn’t)
- [ ] OOCSS principles
- [ ] SMACSS ideas
- [ ] Utility CSS tradeoffs
- [ ] Why no methodology “wins”

---

## 15 — Component Styling in Apps

- [ ] Local vs global styles
- [ ] Styling components safely
- [ ] State-based styling
- [ ] Avoiding style leakage
- [ ] Styling third-party components

---

## 16 — Animations & Transitions

- [ ] Transitions vs animations
- [ ] GPU-friendly properties
- [ ] Layout-thrashing animations
- [ ] Timing functions
- [ ] Motion design discipline

---

## 17 — Performance & Rendering

- [ ] CSS parsing cost
- [ ] Selector performance
- [ ] Reflow vs repaint
- [ ] Critical CSS
- [ ] Removing unused styles

---

## 18 — Maintainability & Refactoring

- [ ] Deleting CSS safely
- [ ] Refactoring without regressions
- [ ] Dead CSS detection
- [ ] Style audits
- [ ] Long-term CSS health

---

## GOD CHECK — CSS Architecture

You’re done when you can:

- [ ] Predict which rule wins without testing
- [ ] Scale styles without specificity hacks
- [ ] Delete CSS confidently
- [ ] Design a theming system cleanly
- [ ] Keep CSS boring and stable
