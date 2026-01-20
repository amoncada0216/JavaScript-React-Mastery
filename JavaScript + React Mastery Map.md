# JavaScript → React Learning Path (Fundamental, No-Surprises)

## Phase 0 — Programming Foundations (Absolute Required)

- [x] Expressions vs statements
- [x] Control flow (if, switch, loops)
- [x] Truthy / falsy values
- [x] Error handling basics
- [x] Reading stack traces

@ Imperative basics (must be readable fluently)

- [ ] for
- [ ] while / do…while
- [ ] for…of
- [ ] for…in

---

## Phase 1 — JavaScript Core Semantics

- [x] Execution context & call stack
- [x] Lexical scope & scope chain
- [x] Closures (creation + lifetime)
- [x] `this` binding rules
- [x] Primitives vs objects
- [x] Value vs reference
- [x] Immutability vs mutation
- [x] Type coercion rules
- [x] `==` vs `===`
- [ ] Object / array equality (reference vs value)

---

## Phase 2 — Language Mechanics & Operators

- [x] Destructuring
- [x] Spread & rest operators
- [x] Optional chaining (`?.`)
- [x] Nullish coalescing (`??`)
- [ ] Defaulting patterns (`||` vs `??`)
- [ ] String → number coercion (`Number`, `parseInt`)
- [ ] Falsy guards (`if (!value)`)

---

## Phase 3 — Functions (JS → React Bridge)

- [x] Function declarations vs expressions
- [x] Arrow functions (syntax + semantics)
- [x] Higher-order functions
- [x] Pure vs impure functions
- [x] Default parameters
- [x] Closures in practice
- [x] Avoiding stale closures (JS-level)

---

## Phase 4 — Data Transformation (Critical)

- [x] `map`
- [x] `filter`
- [x] `reduce`
- [x] Immutability in transformations
- [x] Defensive counting logic
- [x] Edge-case handling
- [x] String normalization

> Declarative-first rule: prefer transforms over loops

---

## Phase 4.5 — JavaScript Essentials (Assumed Everywhere)

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

---

## Phase 5 — React Mental Model (Critical)

- [ ] Props/state are snapshots per render
- [ ] Derived data is NOT state
- [ ] Re-render ≠ DOM update
- [ ] Render ≠ commit
- [ ] State setters are async & batched

---

## Phase 6 — State Fundamentals

- [x] `useState` basics
- [x] Functional updates (`prev => next`)
- [x] Batching behavior
- [x] Derived vs source state
- [x] Resetting state correctly
- [x] Avoiding stale closures (React-level)

---

## Phase 7 — Events & Closures

- [x] Passing functions vs calling functions
- [x] Event objects
- [x] Closures inside handlers
- [x] Preventing default behavior
- [x] Parameterized handlers
- [x] Shared handlers
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

## Phase 9 — Components & Composition

- [x] Function components
- [x] Props as arguments
- [x] Props immutability
- [x] Component composition
- [x] Children prop
- [x] Component re-render rules
- [ ] `key` as identity (not index)

---

## Phase 10 — Controlled Inputs & Forms

- [x] Controlled vs uncontrolled inputs
- [x] Single source of truth
- [x] Input → state → UI loop
- [x] Transforming input safely
- [x] Avoiding cursor bugs
- [x] Validation basics
- [ ] Derived validation state

> **Junior employability checkpoint**

---

## Phase 11 — Conditional Rendering

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

## Phase 13 — Effects & Async React

- [ ] Side effects vs pure logic
- [ ] `useEffect` mental model
- [ ] Dependency arrays
- [ ] Cleanup functions
- [ ] Avoiding infinite loops
- [ ] Error boundaries (conceptual)

---

## Phase 14 — Async JavaScript

- [ ] Promise lifecycle
- [ ] `async / await`
- [ ] Error handling in async flows
- [ ] Sequential vs parallel execution
- [ ] Race conditions

---

## Phase 15 — Modules & Architecture

- [ ] ES modules
- [ ] Named vs default exports
- [ ] Module boundaries
- [ ] Separation of concerns
- [ ] File organization

---

## Phase 16 — Testing Mentality

- [ ] Reading failing tests
- [ ] Inferring requirements
- [ ] Matching exact expectations
- [ ] Debugging off-by-one errors
- [ ] User-centric testing mindset

---

## Phase 17 — Performance Awareness

- [ ] Why components re-render
- [ ] Referential equality
- [ ] Memoization concepts
- [ ] `React.memo`
- [ ] When NOT to optimize

---

## Phase 18 — Advanced JS (Optional)

- [ ] Prototypes (mental model)
- [ ] Garbage collection basics
- [ ] WeakMap / WeakSet
- [ ] Design patterns
