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
- [x] Hoisting (functions vs variables)
- [x] Temporal Dead Zone (TDZ)

---

## Phase 2 — JavaScript Runtime & Event Loop

- [x] Single-threaded execution model
- [x] Event loop responsibilities
- [x] Call stack vs task queue
- [x] Microtasks vs macrotasks
- [x] Promise queue priority
- [x] `setTimeout` vs Promise ordering
- [x] Why `await` yields control
- [x] Blocking vs non-blocking execution

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
- [x] Function value capture (not reference)

---

## Phase 4 — Language Mechanics & OperatorsT

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
- [x] Referential transparency (formal)

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

- [x] React as a constraint system
- [x] Why mutation is forbidden
- [x] Snapshot semantics per render
- [x] Why variables don’t persist
- [x] Closures vs renders
- [x] Referential equality vs value equality
- [x] Identity across renders
- [x] Why React re-renders

---

## Phase 8 — React Mental Model

- [x] Props/state are snapshots per render
- [x] Render phase vs commit phase
- [x] Render must be pure
- [x] Commit may touch the DOM
- [x] Re-render ≠ DOM update
- [x] State setters are async & batched
- [x] Why React renders more than once

---

## Phase 9 — Update Scheduling (Internal React)

- [x] Update priority
- [x] Urgent vs non-urgent updates
- [x] Scheduling vs execution
- [x] Interruptible rendering
- [x] Bail-out conditions

---

## Phase 10 — State Fundamentals

- [x] `useState` basics
- [x] Functional updates
- [x] Batching behavior
- [x] Derived vs source state
- [x] Resetting state correctly
- [x] Avoiding stale closures (React-level)
- [x] Multiple updates ordering
- [x] Equality checks in setters
- [x] Derived-state anti-patterns

---

## Phase 11 — Referential Equality & Identity

- [x] Props identity
- [x] `{}` / `[]` instability
- [x] Stable vs unstable references
- [x] Function identity vs capture
- [x] When identity matters

---

## Phase 12 — Events & Closures

- [x] Passing vs calling functions
- [x] Event objects
- [x] Closures inside handlers
- [x] Preventing default behavior
- [x] Parameterized handlers
- [x] Shared handlers
- [x] Synthetic events (conceptual)

---

## Phase 13 — JSX

- [x] JSX as expressions
- [x] `{}` expression rules
- [x] Expressions vs statements in JSX
- [x] Rendering `null`, `false`, `undefined`
- [x] JSX fragments
- [x] Common JSX mistakes
- [x] JSX attribute spreading

---

## Phase 14 — Components & Composition

- [x] Function components
- [x] Props as arguments
- [x] Props immutability
- [x] Component composition
- [x] Children prop
- [x] Component re-render rules
- [x] Component lifecycle semantics

---

## Phase 15 — Lists & Reconciliation

- [x] Rendering arrays
- [x] Stable keys
- [x] Why index keys break UI
- [x] Filtering before render
- [x] Sorting immutably
- [x] Reconciliation intent

---

## Phase 16 — Controlled Inputs & Forms

- [x] Controlled vs uncontrolled
- [x] Single source of truth
- [x] Input → state → UI loop
- [x] Transforming input safely
- [x] Avoiding cursor bugs
- [x] Validation basics
- [x] Derived validation state
- [x] Number input edge cases
- [x] Debounced inputs

---

## Phase 17 — Conditional Rendering

- [x] Logical `&&`
- [x] Ternary rendering
- [x] Empty / loading / error states
- [x] Truthy/falsy edge cases
- [x] Conditional component trees

---

## Phase 18 — Effects & Side Effects

- [x] Side effects vs pure logic
- [x] `useEffect` mental model
- [x] Dependency array guarantees
- [x] Cleanup timing
- [x] Effect ordering
- [x] Avoiding infinite loops
- [x] Data fetching patterns
- [x] Error handling in effects

---

## Phase 19 — Error Model

- [x] Render-time errors
- [x] Effect-time errors
- [x] Error propagation
- [x] Error boundaries behavior

---

## Phase 20 — Async JavaScript (React-Aware)

- [x] Promise lifecycle
- [x] `async / await`
- [x] Async error handling
- [x] Sequential vs parallel execution
- [x] Race conditions
- [x] Cancellation patterns

---

## Phase 21 — Refs & Escape Hatches

- [x] `useRef` vs state
- [x] Persistent mutable values
- [x] DOM access without re-render
- [x] Legitimate vs smelly ref usage

---

## Phase 22 — Modules & Architecture

- [x] ES modules
- [x] Named vs default exports
- [x] Module boundaries
- [x] Separation of concerns
- [x] File organization
- [x] Lifting vs colocating state
- [x] Custom hooks as composition

---

## Phase 23 — Performance Awareness

- [x] Why components re-render
- [x] Referential equality in practice
- [x] Memoization concepts
- [x] `React.memo`
- [x] When NOT to optimize

---

## Phase 24 — Advanced JavaScript

- [x] Prototypes (mental model)
- [x] Garbage collection basics
- [x] WeakMap / WeakSet
- [x] Design patterns
- [x] State machines (conceptual)

---

## Phase 25 — Professional Judgment Layer

- [x] React as deterministic system
- [x] Idempotence over control
- [x] When duplication is acceptable
- [x] When abstraction is harmful
- [x] Shipping vs refactoring timing
