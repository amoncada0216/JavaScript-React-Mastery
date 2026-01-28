```md
# React — MASTER MAP (UPDATED)

## PHASE 0 — React Prerequisites (Mental Readiness)

- [x] JSX as JavaScript
- [x] Functions as values
- [x] Immutability by instinct
- [x] Referential equality awareness
- [x] Declarative thinking (describe UI, not steps)

---

## PHASE 1 — React Core Mental Model (NON-NEGOTIABLE)

- [x] React is a **renderer**, not a framework
- [x] UI = function(state)
- [x] Components are **pure functions**
- [x] Render ≠ DOM update
- [x] Re-render ≠ re-mount
- [x] Commit phase vs render phase
- [x] State & props are **snapshots**
- [x] React controls when functions run
- [x] Reconciliation (diffing concept)

---

## PHASE 2 — JSX (Syntax Layer, No Magic)

- [x] JSX compiles to `React.createElement`
- [x] JSX expressions vs statements
- [x] `{}` rules
- [x] Rendering `null`, `false`, `undefined`
- [x] Fragments
- [x] Conditional JSX mistakes
- [x] JSX attribute spreading
- [x] Children normalization
- [x] JSX is NOT HTML

---

## PHASE 3 — Components (Structural Mastery)

- [x] Function components
- [x] Props as arguments
- [x] Props immutability
- [x] Component composition
- [x] Children prop
- [x] Re-render rules
- [x] Component identity
- [x] Mount vs update vs unmount
- [x] When components remount unexpectedly

---

## PHASE 4 — State Fundamentals (`useState`)

- [x] `useState` basics
- [x] Initial state evaluation
- [x] Functional updates
- [x] Batching behavior
- [x] Async nature of setters
- [x] Resetting state correctly
- [x] Derived state vs source state
- [x] Lazy initialization edge cases

---

## PHASE 5 — Events & Closures

- [x] Passing functions vs calling
- [x] Event objects
- [x] Preventing default
- [x] Parameterized handlers
- [x] Shared handlers
- [x] Closures inside handlers
- [x] Synthetic events (internals)
- [x] Event pooling (legacy knowledge)

---

## PHASE 6 — Rendering Logic & Control Flow

- [x] Conditional rendering (`&&`)
- [x] Ternary rendering
- [x] Guard rendering
- [x] Empty / loading / error states
- [x] Rendering fallbacks
- [x] Boolean edge cases (`0`, `""`)
- [x] Conditional component trees

---

## PHASE 7 — Lists & Identity (CRITICAL)

- [x] Rendering arrays
- [x] `key` as identity (NOT index)
- [x] Why index keys break UI
- [x] Stable vs unstable keys
- [x] Filtering before render
- [x] Sorting immutably
- [x] Reconciliation failures due to keys

---

## PHASE 8 — Controlled Inputs & Forms

- [x] Controlled vs uncontrolled inputs
- [x] Single source of truth
- [x] Input → state → UI loop
- [x] Transforming input safely
- [x] Avoiding cursor bugs
- [x] Validation basics
- [x] Derived validation state
- [x] Form submission lifecycle

---

## PHASE 9 — Effects (`useEffect`) — THE HARD PART

- [x] Side effects vs pure render logic
- [x] Effect execution timing
- [x] Dependency arrays (truth, not myth)
- [x] Cleanup functions
- [x] Mount vs update effects
- [x] Avoiding infinite loops
- [x] Stale closures in effects
- [x] Effect vs event logic separation

---

## PHASE 10 — Advanced State Hooks

- [x] `useReducer`
- [x] Reducer purity rules
- [x] Action design
- [x] Local vs global reducers
- [x] `useRef` (escape hatch)
- [x] Mutable refs vs state
- [x] `useImperativeHandle`

---

## PHASE 11 — Context API

- [x] Context mental model
- [x] Provider re-render behavior
- [x] Avoiding over-rendering
- [x] Context vs props
- [x] Context as dependency injection
- [x] Context misuse patterns

---

## PHASE 12 — Performance & Re-renders

- [x] Why components re-render
- [x] Referential equality traps
- [x] `React.memo`
- [x] `useCallback`
- [x] `useMemo`
- [x] When memoization hurts
- [x] Render profiling mindset

---

## PHASE 13 — Reconciliation & Fiber (Internals)

- [x] Fiber architecture (conceptual)
- [x] Incremental rendering
- [x] Priority lanes
- [x] Interruptible rendering
- [x] Concurrent rendering basics

---

## PHASE 14 — Async React & Concurrency

- [x] Concurrent rendering model
- [x] Transitions
- [x] `useTransition`
- [x] `useDeferredValue`
- [x] Tearing prevention
- [x] Scheduling vs rendering

---

## PHASE 15 — Error Handling

- [x] Error boundaries
- [x] Render errors vs event errors
- [x] Recovery strategies
- [x] Fallback UIs
- [x] Logging patterns

---

## PHASE 16 — Architecture & Scaling

- [x] Component responsibility boundaries
- [x] Smart vs dumb components
- [x] Feature-based structure
- [x] State colocation
- [x] Lifting state correctly
- [x] Avoiding prop drilling
- [x] Avoiding global state abuse

---

## PHASE 17 — Data Fetching Patterns

- [x] Fetch in effects
- [x] Loading & error states
- [x] Request cancellation
- [x] Race condition handling
- [x] Cache mental model
- [x] Stale data strategies

---

## PHASE 18 — Testing Mentality (React-Specific)

- [x] Test behavior, not implementation
- [x] Rendering states
- [x] User-event driven tests
- [x] Async test pitfalls
- [x] Debugging failing tests

---

## PHASE 19 — Ecosystem Awareness (Not Libraries)

- [x] React DevTools mastery
- [x] Strict Mode behavior
- [x] Double-invocation understanding
- [x] Dev vs prod differences
- [x] Version upgrade mindset

---

## PHASE 20 — GOD CHECK (React)

You are a React god when you can:

- [x] Predict re-renders without tools
- [x] Explain effects timing verbally
- [x] Fix infinite loops instantly
- [x] Design state without refactors
- [x] Explain why a bug exists, not just fix it
- [x] Read React source without panic
```
