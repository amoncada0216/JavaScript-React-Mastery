# JavaScript → React Learning Path (Capability-Driven, Explicit)

---

## Phase 0 — Core Programming Foundations (Required First)

- [x] Expressions vs statements
- [x] Control flow (if, switch, loops)
- [x] Truthy / falsy values
- [x] Error handling basics
- [x] Reading stack traces

@ PAUSE & PRACTICE
- Write small programs that intentionally throw errors
- Practice reading stack traces without running the code

@ Imperative basics (non-React-critical)
- [ ] for (classic counter loop)
- [ ] while / do…while
- [ ] for…of
- [ ] for…in

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

---

## Phase 2 — Language Mechanics & Syntax

- [x] Destructuring
- [x] Spread & rest operators
- [x] Optional chaining (`?.`)
- [x] Nullish coalescing (`??`)
- [ ] Defaulting patterns (`||`, `??`)
- [ ] String → number coercion (`Number()`, `parseInt`)
- [ ] Falsy checks in conditions (`if (!value)`)

---

## Phase 3 — Functions (JS → React Bridge)

- [x] Function declarations vs expressions
- [x] Arrow functions (syntax + semantics)
- [x] Higher-order functions
- [x] Pure vs impure functions
- [x] Default parameters
- [x] Closures in practice

---

## Phase 4 — Data Transformation (Job-Critical)

- [x] `map`
- [x] `filter`
- [x] `reduce`
- [x] Immutability in transformations
- [x] Defensive counting logic
- [x] Edge-case handling
- [x] String normalization

@ Declarative-first rule:
- Prefer `map / filter / reduce` over loops

---

## Phase 4.5 — JavaScript Essentials (Assumed Tools)

### Strings
- [x] `.includes()`
- [x] `.startsWith()` / `.endsWith()`
- [x] `.toLowerCase()` / `.toUpperCase()`
- [x] `.trim()`
- [x] `.length`

### Arrays
- [x] `.includes()`
- [ ] `.some()`
- [ ] `.every()`
- [ ] `.find()`
- [ ] `.findIndex()`
- [ ] `.slice()`
- [ ] `.concat()`
- [ ] `Array.isArray()`

### Objects
- [ ] `Object.keys()`
- [ ] `Object.values()`
- [ ] `Object.entries()`
- [ ] Shallow copy patterns (`{ ...obj }`, `[...arr]`)

> Rule: These are **allowed everywhere** from this point on.

---

## Phase 5 — React Mental Model (Pre-State)

- [ ] “Props/state are snapshots per render”
- [ ] “Derived data is NOT state”
- [ ] “Re-render ≠ DOM update”
- [ ] “Render ≠ commit”

---

## Phase 6 — State Fundamentals (JS + React Boundary)

- [x] `useState` basics
- [x] Functional updates (`prev => next`)
- [x] Batching behavior
- [x] Derived vs source state
- [x] Resetting state correctly
- [x] Avoiding stale closures
- [x] State setters are async (conceptual)

---

## Phase 7 — Events & Closures

- [x] Passing functions vs calling functions
- [x] Event objects
- [x] Closures inside handlers
- [x] Preventing default behavior
- [x] Parameterized handlers
- [x] Shared handlers across elements
- [ ] Synthetic events (conceptual)

---

## Phase 8 — JSX (Syntax Layer)

- [x] JSX as JavaScript expressions
- [x] `{}` expression rules
- [x] Expressions vs statements in JSX
- [x] Rendering `null`, `false`, `undefined`
- [x] JSX fragments
- [x] Common JSX mistakes
- [ ] JSX attribute spreading (`<Comp {...props} />`)

---

## Phase 9 — Components (Composition Layer)

- [x] Function components
- [x] Props as arguments
- [x] Props immutability
- [x] Component composition
- [x] Children prop
- [x] Component re-render rules
- [ ] `key` as identity (not index)

---

## Phase 10 — Controlled Inputs (Forms)

- [x] Controlled vs uncontrolled inputs
- [x] Single source of truth
- [x] Input → state → UI loop
- [x] Transforming input safely
- [x] Avoiding cursor bugs
- [x] Validation basics

> **Employability checkpoint**

---

## Phase 11 — Conditional Rendering (UI Logic)

- [ ] Logical `&&`
- [ ] Ternary rendering
- [ ] Empty / loading / error states
- [ ] Truthy/falsy edge cases (`0`, `""`)
- [ ] Conditional component trees

---

## Phase 12 — Lists & Identity

- [ ] Rendering arrays
- [ ] Stable keys
- [ ] Why index keys break UI
- [ ] Filtering before render
- [ ] Sorting immutably

---

## Phase 13 — Effects & Async (React Runtime)

- [ ] Side effects vs pure logic
- [ ] `useEffect` mental model
- [ ] Dependency arrays
- [ ] Cleanup functions
- [ ] Avoiding infinite loops

---

## Phase 14 — Async JavaScript (Support Layer)

- [ ] Promises lifecycle
- [ ] `async / await`
- [ ] Error handling in async code
- [ ] Sequential vs parallel execution
- [ ] Race conditions

---

## Phase 15 — Modules & Architecture

- [ ] ES modules (`import` / `export`)
- [ ] Named vs default exports
- [ ] Module boundaries
- [ ] Separation of concerns
- [ ] File organization

---

## Phase 16 — Testing & Specs

- [ ] Reading failing tests
- [ ] Inferring requirements
- [ ] Matching exact expectations
- [ ] Debugging off-by-one errors

---

## Phase 17 — Performance Awareness (Later)

- [ ] Re-render causes
- [ ] Memoization concepts
- [ ] `React.memo`
- [ ] When NOT to optimize

---

## Phase 18 — Advanced / JS-Heavy (Optional)

- [ ] Prototypes internals
- [ ] Garbage collection details
- [ ] WeakMap / WeakSet
- [ ] Design patterns
- [ ] Advanced memory profiling
