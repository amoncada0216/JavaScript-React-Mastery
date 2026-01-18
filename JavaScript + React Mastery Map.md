# JavaScript → React Learning Path (Capability-Driven, Explicit)

## Phase 0 — Core Programming Foundations (Required First)

- [x] Expressions vs statements
- [x] Control flow (if, switch, loops)
- [x] Truthy / falsy values
- [x] Error handling basics
- [x] Reading stack traces

@ PAUSE & PRACTICE
- Write small programs that intentionally throw errors
- Practice reading stack traces without running the code
- Do not proceed until stack traces feel mechanical

@ Good basic knowledge (imperative, not React-critical):
- [ ] for (classic counter loop)
- [ ] while / do…while
- [ ] for…of
- [ ] for…in

> Do not move forward if stack traces still confuse you.

---

## Phase 1 — JavaScript Core (Non-Negotiable)

- [x] Execution context and call stack
- [x] Lexical scope and scope chain
- [x] Closures (creation and lifetime)
- [x] `this` binding rules
- [x] Primitives vs objects
- [x] Value vs reference
- [x] Immutability vs mutation
- [x] Type coercion rules
- [x] `==` vs `===`
- [x] Destructuring
- [x] Spread & rest operators
- [x] Optional chaining (`?.`)
- [x] Nullish coalescing (`??`)

@ PAUSE & PRACTICE (CRITICAL)
- Predict behavior of code before running it
- Practice identifying mutation vs immutability bugs
- Practice reasoning about references without logging

> If this is weak, React will always feel random.

---

## Phase 2 — Functions (JS → React Bridge)

- [x] Function declarations vs expressions
- [x] Arrow functions (syntax + semantics)
- [x] Higher-order functions
- [x] Pure vs impure functions
- [x] Default parameters
- [x] Closures in practice

@ PAUSE & PRACTICE
- Write functions that accidentally capture stale values
- Rewrite them to be pure
- Be able to explain *why* purity matters

> React components are functions with constraints.

---

## Phase 3 — Data Transformation (Job-Critical)

- [x] `map`
- [x] `filter`
- [x] `reduce`
- [x] String normalization
- [x] Defensive counting logic
- [x] Edge-case handling
- [x] Immutability in transformations

@ PAUSE & PRACTICE (MANDATORY)
- Write transformations from scratch (no prediction-only)
- Combine filtering, mapping, and aggregation
- Handle `0`, `""`, `null`, `"1"` vs `1` explicitly
- Stop only when edge cases stop surprising you

@ Declarative-first rule:
- Prefer `map / filter / reduce` over loops for transformations

> Most React interviews secretly test this phase.

---

## Phase 4 — State Fundamentals (JS + React Boundary)

- [x] `useState` basics
- [x] Functional updates (`prev => next`)
- [x] Batching behavior
- [x] Derived vs source state
- [x] Resetting state correctly
- [x] Avoiding stale closures

@ PAUSE & PRACTICE (MENTAL MODEL)
- Predict state values across renders
- Explain why logs show “old” values
- Do NOT rely on UI yet — reason about renders only

> This is where React stops feeling “magical”.

---

## Phase 5 — Events & Closures (Bug Factory Zone)

- [ ] Passing functions vs calling functions
- [ ] Event objects
- [ ] Closures inside handlers
- [ ] Preventing default behavior
- [ ] Parameterized handlers
- [ ] Shared handlers across elements

@ PAUSE & PRACTICE (VERY IMPORTANT)
- Combine Phase 4 + Phase 5 concepts
- Click-driven state updates
- Identify stale closures in handlers
- This is where understanding *locks in*

> ~50% of real React bugs live here.

---

## Phase 6 — JSX (Syntax Layer)

- [ ] JSX as JavaScript expressions
- [ ] `{}` expression rules
- [ ] Expressions vs statements in JSX
- [ ] Conditional rendering patterns
- [ ] Rendering `null`, `false`, `undefined`
- [ ] JSX fragments
- [ ] Common JSX mistakes

@ PAUSE & PRACTICE
- Rewrite JSX mentally as JavaScript
- Predict rendering outcomes before running
- Intentionally break JSX and explain why

> JSX is JavaScript with rules, not HTML.

---

## Phase 7 — Components (Composition Layer)

- [ ] Function components
- [ ] Props as arguments
- [ ] Props immutability
- [ ] Component composition
- [ ] Children prop
- [ ] Component re-render rules

@ PAUSE & PRACTICE
- Build small component trees
- Predict re-renders
- Practice passing data top-down only

> Components = pure functions + UI.

---

## Phase 8 — Controlled Inputs (Forms)

- [ ] Controlled vs uncontrolled inputs
- [ ] Single source of truth
- [ ] Input → state → UI loop
- [ ] Transforming input safely
- [ ] Avoiding cursor bugs
- [ ] Validation basics

@ PAUSE & PRACTICE (EMPLOYABILITY CHECK)
- Build forms without bugs
- Handle typing, deletion, validation smoothly

> If you can do this cleanly, you are employable.

---

## Phase 9 — Conditional Rendering (UI Logic)

- [ ] Logical `&&`
- [ ] Ternary rendering
- [ ] Empty / loading / error states
- [ ] Truthy/falsy edge cases (`0`, `""`)
- [ ] Conditional component trees

@ PAUSE & PRACTICE
- Design UI states before coding
- Ensure no impossible states exist

---

## Phase 10 — Lists & Keys (Identity & Stability)

- [ ] Rendering arrays
- [ ] Stable keys
- [ ] Why index keys break UI
- [ ] Filtering before render
- [ ] Sorting immutably

@ PAUSE & PRACTICE (INTERVIEW TRAP)
- Break UIs intentionally with bad keys
- Fix them and explain why it works

> Wrong keys = React lies to you.

---

## Phase 11 — Effects & Async (React Runtime)

- [ ] Side effects vs pure logic
- [ ] `useEffect` mental model
- [ ] Dependency arrays
- [ ] Cleanup functions
- [ ] Fetching data
- [ ] Avoiding infinite loops

@ PAUSE & PRACTICE (DO NOT RUSH)
- Effects require time-based reasoning
- Re-run examples mentally
- Debug infinite loops deliberately

> Effects are not lifecycle methods.

---

## Phase 12 — Async JavaScript (Support Layer)

- [ ] Promises lifecycle
- [ ] `async / await`
- [ ] Error handling in async code
- [ ] Sequential vs parallel execution
- [ ] Race conditions (conceptual)

@ PAUSE & PRACTICE
- Predict async order without running code
- Practice failure paths

---

## Phase 13 — Modules & Architecture

- [ ] ES modules (`import` / `export`)
- [ ] Named vs default exports
- [ ] Module boundaries
- [ ] Separation of concerns
- [ ] File organization

@ PAUSE & PRACTICE
- Refactor small projects
- Enforce boundaries intentionally

---

## Phase 14 — Testing & Specs

- [ ] Reading failing tests
- [ ] Inferring requirements
- [ ] Matching exact expectations
- [ ] Debugging off-by-one errors
- [ ] User-centric testing mindset

@ PAUSE & PRACTICE
- Treat tests as specs
- Write code to satisfy tests exactly

---

## Phase 15 — Performance Awareness (Later)

- [ ] Re-render causes
- [ ] Memoization concepts
- [ ] `React.memo`
- [ ] When NOT to optimize

@ PAUSE & PRACTICE
- Optimize only after measuring
- Practice removing unnecessary memoization

> Optimization without understanding is a bug.

---

## Phase 16 — Advanced / JS-Heavy (Do NOT Block On)

- [ ] Prototypes internals
- [ ] Garbage collection details
- [ ] WeakMap / WeakSet
- [ ] Design patterns
- [ ] Advanced memory profiling

@ OPTIONAL PAUSE
- Explore selectively, not sequentially

> Useful, but **not required** for React proficiency.
