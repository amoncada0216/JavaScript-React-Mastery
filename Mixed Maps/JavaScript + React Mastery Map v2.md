# JavaScript → React Learning Path (PRO-GRADE, CLOSED SYSTEM)

## Phase 0 — Programming Foundations (Absolute Required)

- [x] Expressions vs statements
- [x] Control flow (if, switch, loops)
- [x] Truthy / falsy values
- [x] Error handling basics
- [x] Reading stack traces

@ Imperative basics (must be readable fluently)

- [x] for
- [x] while / do…while
- [x] for…of
- [x] for…in

---

## Phase 1 — JavaScript Execution Model

- [x] Execution context creation
- [x] Call stack mechanics
- [x] Lexical scope & scope chain
- [ ] Hoisting (functions vs variables)
- [ ] Temporal Dead Zone (TDZ)

---

## Phase 2 — JavaScript Runtime & Event Loop

- [ ] Single-threaded execution model
- [ ] Event loop responsibilities
- [ ] Call stack vs task queue
- [ ] Microtasks vs macrotasks
- [ ] Promise queue priority
- [ ] `setTimeout` vs Promise ordering
- [ ] Why `await` yields control
- [ ] Blocking vs non-blocking execution

---

## Phase 3 — Core JavaScript Semantics

- [x] Closures (creation + lifetime)
- [x] `this` binding rules
- [x] Primitives vs objects
- [x] Value vs reference
- [x] Immutability vs mutation
- [x] Type coercion rules
- [x] `==` vs `===`
- [x] Object / array equality (reference vs value)
- [ ] Function value capture (not reference)

---

## Phase 4 — Language Mechanics & Operators

- [x] Destructuring
- [x] Spread & rest operators
- [x] Optional chaining (`?.`)
- [x] Nullish coalescing (`??`)
- [x] Defaulting patterns (`||` vs `??`)
- [x] String → number coercion
- [x] Falsy guards (`if (!value)`)

---

## Phase 5 — Functions (JS → React Bridge)

- [x] Function declarations vs expressions
- [x] Arrow functions (syntax + semantics)
- [x] Higher-order functions
- [x] Pure vs impure functions
- [x] Default parameters
- [x] Closures in practice
- [x] Avoiding stale closures (JS-level)
- [ ] Referential transparency (formal)

---

## Phase 6 — Data Transformation (Critical)

- [x] `map`
- [x] `filter`
- [x] `reduce`
- [x] Immutability in transformations
- [x] Defensive counting logic
- [x] Edge-case handling
- [x] String normalization

---

## Phase 6.5 — JavaScript Essentials (Assumed Everywhere)

### Strings

- [x] `.includes()`
- [x] `.startsWith()` / `.endsWith()`
- [x] `.toLowerCase()` / `.toUpperCase()`
- [x] `.trim()`
- [x] `.length`

### Arrays

- [x] `.includes()`
- [x] `.some()`
- [x] `.every()`
- [x] `.find()`
- [x] `.findIndex()`
- [x] `.slice()`
- [x] `.concat()`
- [x] `Array.isArray()`

### Objects

- [x] `Object.keys()`
- [x] `Object.values()`
- [x] `Object.entries()`
- [x] Shallow copy patterns

---

## Phase 7 — JS ↔ React Constraint Layer

- [ ] React as a constraint system
- [ ] Why mutation is forbidden
- [ ] Snapshot semantics per render
- [ ] Why variables don’t persist
- [ ] Closures vs renders
- [ ] Referential equality vs value equality
- [ ] Identity across renders
- [ ] Why React re-renders

---

## Phase 8 — React Mental Model

- [x] Props/state are snapshots per render
- [ ] Render phase vs commit phase
- [ ] Render must be pure
- [ ] Commit may touch the DOM
- [ ] Re-render ≠ DOM update
- [ ] State setters are async & batched
- [ ] Why React renders more than once

---

## Phase 9 — Update Scheduling (Internal React)

- [ ] Update priority
- [ ] Urgent vs non-urgent updates
- [ ] Scheduling vs execution
- [ ] Interruptible rendering
- [ ] Bail-out conditions

---

## Phase 10 — State Fundamentals

- [x] `useState` basics
- [x] Functional updates
- [x] Batching behavior
- [x] Derived vs source state
- [x] Resetting state correctly
- [x] Avoiding stale closures (React-level)
- [ ] Multiple updates ordering
- [ ] Equality checks in setters
- [ ] Derived-state anti-patterns

---

## Phase 11 — Referential Equality & Identity

- [ ] Props identity
- [ ] `{}` / `[]` instability
- [ ] Stable vs unstable references
- [ ] Function identity vs capture
- [ ] When identity matters

---

## Phase 12 — Events & Closures

- [x] Passing vs calling functions
- [x] Event objects
- [x] Closures inside handlers
- [x] Preventing default behavior
- [x] Parameterized handlers
- [x] Shared handlers
- [ ] Synthetic events (conceptual)

---

## Phase 13 — JSX

- [x] JSX as expressions
- [x] `{}` expression rules
- [x] Expressions vs statements in JSX
- [x] Rendering `null`, `false`, `undefined`
- [x] JSX fragments
- [x] Common JSX mistakes
- [ ] JSX attribute spreading

---

## Phase 14 — Components & Composition

- [x] Function components
- [x] Props as arguments
- [x] Props immutability
- [x] Component composition
- [x] Children prop
- [x] Component re-render rules
- [ ] Component lifecycle semantics

---

## Phase 15 — Lists & Reconciliation

- [ ] Rendering arrays
- [ ] Stable keys
- [ ] Why index keys break UI
- [ ] Filtering before render
- [ ] Sorting immutably
- [ ] Reconciliation intent

---

## Phase 16 — Controlled Inputs & Forms

- [x] Controlled vs uncontrolled
- [x] Single source of truth
- [x] Input → state → UI loop
- [x] Transforming input safely
- [x] Avoiding cursor bugs
- [x] Validation basics
- [ ] Derived validation state
- [ ] Number input edge cases
- [ ] Debounced inputs

---

## Phase 17 — Conditional Rendering

- [ ] Logical `&&`
- [ ] Ternary rendering
- [ ] Empty / loading / error states
- [ ] Truthy/falsy edge cases
- [ ] Conditional component trees

---

## Phase 18 — Effects & Side Effects

- [ ] Side effects vs pure logic
- [ ] `useEffect` mental model
- [ ] Dependency array guarantees
- [ ] Cleanup timing
- [ ] Effect ordering
- [ ] Avoiding infinite loops
- [ ] Data fetching patterns
- [ ] Error handling in effects

---

## Phase 19 — Error Model

- [ ] Render-time errors
- [ ] Effect-time errors
- [ ] Error propagation
- [ ] Error boundaries behavior

---

## Phase 20 — Async JavaScript (React-Aware)

- [ ] Promise lifecycle
- [ ] `async / await`
- [ ] Async error handling
- [ ] Sequential vs parallel execution
- [ ] Race conditions
- [ ] Cancellation patterns

---

## Phase 21 — Refs & Escape Hatches

- [ ] `useRef` vs state
- [ ] Persistent mutable values
- [ ] DOM access without re-render
- [ ] Legitimate vs smelly ref usage

---

## Phase 22 — Modules & Architecture

- [ ] ES modules
- [ ] Named vs default exports
- [ ] Module boundaries
- [ ] Separation of concerns
- [ ] File organization
- [ ] Lifting vs colocating state
- [ ] Custom hooks as composition

---

## Phase 23 — Performance Awareness

- [ ] Why components re-render
- [ ] Referential equality in practice
- [ ] Memoization concepts
- [ ] `React.memo`
- [ ] When NOT to optimize

---

## Phase 24 — Advanced JavaScript

- [ ] Prototypes (mental model)
- [ ] Garbage collection basics
- [ ] WeakMap / WeakSet
- [ ] Design patterns
- [ ] State machines (conceptual)

---

## Phase 25 — Professional Judgment Layer

- [ ] React as deterministic system
- [ ] Idempotence over control
- [ ] When duplication is acceptable
- [ ] When abstraction is harmful
- [ ] Shipping vs refactoring timing
