# JavaScript → React Learning Path (Capability-Driven, Explicit)

## Phase 0 — Core Programming Foundations (Required First)

- [x] Expressions vs statements
- [x] Control flow (if, switch, loops)
- [x] Truthy / falsy values
- [x] Error handling basics
- [x] Reading stack traces

@ Good basic knowledge (imperative, not React-critical):
- [ ] for (classic counter loop)
- [ ] while / do…while
- [ ] for…of
- [ ] for…in

> Do not move forward if stack traces still confuse you.

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

> If this is weak, React will always feel random.

## Phase 2 — Functions (JS → React Bridge)

- [x] Function declarations vs expressions
- [x] Arrow functions (syntax + semantics)
- [x] Higher-order functions
- [x] Pure vs impure functions
- [x] Default parameters
- [x] Closures in practice

> React components are functions with constraints.

## Phase 3 — Data Transformation (Job-Critical)

- [x] `map`
- [x] `filter`
- [x] `reduce`
- [x] String normalization
- [x] Defensive counting logic
- [x] Edge-case handling
- [x] Immutability in transformations

@ Declarative-first rule:
- Prefer `map / filter / reduce` over loops for transformations

> Most React interviews secretly test this phase.

## Phase 4 — State Fundamentals (JS + React Boundary)

- [ ] `useState` basics
- [ ] Functional updates (`prev => next`)
- [ ] Batching behavior
- [ ] Derived vs source state
- [ ] Resetting state correctly
- [ ] Avoiding stale closures

> This is where React stops feeling “magical”.

## Phase 5 — Events & Closures (Bug Factory Zone)

- [ ] Passing functions vs calling functions
- [ ] Event objects
- [ ] Closures inside handlers
- [ ] Preventing default behavior
- [ ] Parameterized handlers
- [ ] Shared handlers across elements

> ~50% of real React bugs live here.

## Phase 6 — JSX (Syntax Layer)

- [ ] JSX as JavaScript expressions
- [ ] `{}` expression rules
- [ ] Expressions vs statements in JSX
- [ ] Conditional rendering patterns
- [ ] Rendering `null`, `false`, `undefined`
- [ ] JSX fragments
- [ ] Common JSX mistakes

> JSX is JavaScript with rules, not HTML.

## Phase 7 — Components (Composition Layer)

- [ ] Function components
- [ ] Props as arguments
- [ ] Props immutability
- [ ] Component composition
- [ ] Children prop
- [ ] Component re-render rules

> Components = pure functions + UI.

## Phase 8 — Controlled Inputs (Forms)

- [ ] Controlled vs uncontrolled inputs
- [ ] Single source of truth
- [ ] Input → state → UI loop
- [ ] Transforming input safely
- [ ] Avoiding cursor bugs
- [ ] Validation basics

> If you can do this cleanly, you are employable.

## Phase 9 — Conditional Rendering (UI Logic)

- [ ] Logical `&&`
- [ ] Ternary rendering
- [ ] Empty / loading / error states
- [ ] Truthy/falsy edge cases (`0`, `""`)
- [ ] Conditional component trees

## Phase 10 — Lists & Keys (Identity & Stability)

- [ ] Rendering arrays
- [ ] Stable keys
- [ ] Why index keys break UI
- [ ] Filtering before render
- [ ] Sorting immutably

> Wrong keys = React lies to you.

## Phase 11 — Effects & Async (React Runtime)

- [ ] Side effects vs pure logic
- [ ] `useEffect` mental model
- [ ] Dependency arrays
- [ ] Cleanup functions
- [ ] Fetching data
- [ ] Avoiding infinite loops

> Effects are not lifecycle methods.

## Phase 12 — Async JavaScript (Support Layer)

- [ ] Promises lifecycle
- [ ] `async / await`
- [ ] Error handling in async code
- [ ] Sequential vs parallel execution
- [ ] Race conditions (conceptual)

## Phase 13 — Modules & Architecture

- [ ] ES modules (`import` / `export`)
- [ ] Named vs default exports
- [ ] Module boundaries
- [ ] Separation of concerns
- [ ] File organization

## Phase 14 — Testing & Specs

- [ ] Reading failing tests
- [ ] Inferring requirements
- [ ] Matching exact expectations
- [ ] Debugging off-by-one errors
- [ ] User-centric testing mindset

## Phase 15 — Performance Awareness (Later)

- [ ] Re-render causes
- [ ] Memoization concepts
- [ ] `React.memo`
- [ ] When NOT to optimize

> Optimization without understanding is a bug.

## Phase 16 — Advanced / JS-Heavy (Do NOT Block On)

- [ ] Prototypes internals
- [ ] Garbage collection details
- [ ] WeakMap / WeakSet
- [ ] Design patterns
- [ ] Advanced memory profiling

> Useful, but **not required** for React proficiency.
