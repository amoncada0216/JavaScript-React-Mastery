# JavaScript → React Learning Path (Fundamental, No-Surprises)

---

## Phase 0 — Programming Foundations (Absolute Required)

- Expressions vs statements
- Control flow (`if`, `switch`, loops)
- Truthy / falsy values
- Error handling (`try/catch`)
- Reading stack traces

Imperative basics (must be readable fluently):

- `for`
- `while / do…while`
- `for…of`
- `for…in`

---

## Phase 1 — JavaScript Core Semantics

- Execution context & call stack
- Lexical scope & scope chain
- Closures (creation + lifetime)
- `this` binding rules
- Primitives vs objects
- Value vs reference
- Immutability vs mutation
- Type coercion rules
- `==` vs `===`
- Object / array equality (reference vs value)

---

## Phase 2 — Language Mechanics & Operators

- Destructuring
- Spread & rest
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- Defaulting (`||` vs `??`)
- Falsy guards (`if (!value)`)
- String → number coercion (`Number`, `parseInt`)

---

## Phase 3 — Functions (JS → React Bridge)

- Function declarations vs expressions
- Arrow functions (syntax + semantics)
- Higher-order functions
- Pure vs impure functions
- Default parameters
- Closures in practice
- Accidental state capture (stale values)

---

## Phase 4 — Data Transformation (Critical)

- `map`
- `filter`
- `reduce`
- Immutability in transformations
- Defensive counting logic
- Edge-case handling
- String normalization

Rule:

- Prefer declarative transforms over loops

---

## Phase 4.5 — JavaScript Essentials (Assumed Everywhere)

### Strings

- `.includes()`
- `.startsWith()` / `.endsWith()`
- `.toLowerCase()` / `.toUpperCase()`
- `.trim()`
- `.length`

### Arrays

- `.includes()`
- `.some()`
- `.every()`
- `.find()`
- `.findIndex()`
- `.slice()`
- `.concat()`
- `Array.isArray()`

### Objects

- `Object.keys()`
- `Object.values()`
- `Object.entries()`
- Shallow copy patterns

---

## Phase 5 — React Mental Model (Critical)

- Props/state are **snapshots per render**
- Derived data is **not state**
- Re-render ≠ DOM update
- Render ≠ commit
- State setters are async & batched

---

## Phase 6 — State Fundamentals

- `useState`
- Functional updates (`prev => next`)
- Batching behavior
- Derived vs source state
- Resetting state correctly
- Avoiding stale state & stale closures

---

## Phase 7 — Events & Closures

- Passing vs calling functions
- Event objects
- Closures inside handlers
- Preventing default behavior
- Parameterized handlers
- Shared handlers
- Synthetic events (conceptual)
- Event pooling (why functional updates matter)

---

## Phase 8 — JSX (Syntax Layer)

- JSX as JavaScript expressions
- `{}` expression rules
- Expressions vs statements
- Rendering `null`, `false`, `undefined`
- JSX fragments
- JSX attribute spreading
- Common JSX mistakes

---

## Phase 9 — Components & Composition

- Function components
- Props as arguments
- Props immutability
- Component composition
- `children`
- Component re-render rules
- Identity via `key` (not index)

---

## Phase 10 — Controlled Inputs & Forms

- Controlled vs uncontrolled
- Single source of truth
- Input → state → UI loop
- Transforming input safely
- Avoiding cursor bugs
- Basic validation
- Derived validation state

> **Junior employability checkpoint**

---

## Phase 11 — Conditional Rendering

- Logical `&&`
- Ternary rendering
- Empty / loading / error states
- Truthy/falsy edge cases (`0`, `""`)
- Conditional component trees

---

## Phase 12 — Lists & Identity

- Rendering arrays
- Stable keys
- Why index keys break UI
- Filtering before render
- Sorting immutably

---

## Phase 13 — Effects & Async React

- Side effects vs pure logic
- `useEffect` mental model
- Dependency arrays
- Cleanup functions
- Avoiding infinite loops
- Error boundaries (conceptual)

---

## Phase 14 — Async JavaScript (Required)

- Promise lifecycle
- `async / await`
- Error handling in async flows
- Sequential vs parallel execution
- Race conditions (conceptual)
- Cancellation awareness (abort patterns)

---

## Phase 15 — Modules & Architecture

- ES modules
- Named vs default exports
- Module boundaries
- Separation of concerns
- File organization

---

## Phase 16 — Testing Mentality (Fundamental)

- Reading failing tests
- Inferring requirements
- Matching exact expectations
- Debugging off-by-one errors
- User-centric testing mindset

---

## Phase 17 — Performance Awareness (Foundational)

- Why components re-render
- Referential equality
- Memoization concepts
- `React.memo`
- When **not** to optimize

---

## Phase 18 — Advanced JS (Optional, Non-Blocking)

- Prototypes (mental model)
- Garbage collection basics
- WeakMap / WeakSet
- Design patterns
