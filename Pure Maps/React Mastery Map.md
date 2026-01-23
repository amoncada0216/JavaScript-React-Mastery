# React — MASTER MAP

## PHASE 0 — React Prerequisites (Mental Readiness)

- [x] JSX as JavaScript
- [x] Functions as values
- [x] Immutability by instinct
- [x] Referential equality awareness
- [x] Declarative thinking (describe UI, not steps)

---

## PHASE 1 — React Core Mental Model (NON-NEGOTIABLE)

- [ ] React is a **renderer**, not a framework
- [ ] UI = function(state)
- [ ] Components are **pure functions**
- [ ] Render ≠ DOM update
- [ ] Re-render ≠ re-mount
- [ ] Commit phase vs render phase
- [ ] State & props are **snapshots**
- [ ] React controls when functions run
- [ ] Reconciliation (diffing concept)

---

## PHASE 2 — JSX (Syntax Layer, No Magic)

- [x] JSX compiles to `React.createElement`
- [x] JSX expressions vs statements
- [x] `{}` rules
- [x] Rendering `null`, `false`, `undefined`
- [x] Fragments
- [x] Conditional JSX mistakes
- [ ] JSX attribute spreading
- [ ] Children normalization
- [ ] JSX is NOT HTML

---

## PHASE 3 — Components (Structural Mastery)

- [x] Function components
- [x] Props as arguments
- [x] Props immutability
- [x] Component composition
- [x] Children prop
- [x] Re-render rules
- [ ] Component identity
- [ ] Mount vs update vs unmount
- [ ] When components remount unexpectedly

---

## PHASE 4 — State Fundamentals (`useState`)

- [x] `useState` basics
- [x] Initial state evaluation
- [x] Functional updates
- [x] Batching behavior
- [x] Async nature of setters
- [x] Resetting state correctly
- [x] Derived state vs source state
- [ ] Lazy initialization edge cases

---

## PHASE 5 — Events & Closures

- [x] Passing functions vs calling
- [x] Event objects
- [x] Preventing default
- [x] Parameterized handlers
- [x] Shared handlers
- [x] Closures inside handlers
- [ ] Synthetic events (internals)
- [ ] Event pooling (legacy knowledge)

---

## PHASE 6 — Rendering Logic & Control Flow

- [ ] Conditional rendering (`&&`)
- [ ] Ternary rendering
- [ ] Guard rendering
- [ ] Empty / loading / error states
- [ ] Rendering fallbacks
- [ ] Boolean edge cases (`0`, `""`)
- [ ] Conditional component trees

---

## PHASE 7 — Lists & Identity (CRITICAL)

- [ ] Rendering arrays
- [ ] `key` as identity (NOT index)
- [ ] Why index keys break UI
- [ ] Stable vs unstable keys
- [ ] Filtering before render
- [ ] Sorting immutably
- [ ] Reconciliation failures due to keys

---

## PHASE 8 — Controlled Inputs & Forms

- [x] Controlled vs uncontrolled inputs
- [x] Single source of truth
- [x] Input → state → UI loop
- [x] Transforming input safely
- [x] Avoiding cursor bugs
- [x] Validation basics
- [ ] Derived validation state
- [ ] Form submission lifecycle

---

## PHASE 9 — Effects (`useEffect`) — THE HARD PART

- [ ] Side effects vs pure render logic
- [ ] Effect execution timing
- [ ] Dependency arrays (truth, not myth)
- [ ] Cleanup functions
- [ ] Mount vs update effects
- [ ] Avoiding infinite loops
- [ ] Stale closures in effects
- [ ] Effect vs event logic separation

---

## PHASE 10 — Advanced State Hooks

- [ ] `useReducer`
- [ ] Reducer purity rules
- [ ] Action design
- [ ] Local vs global reducers
- [ ] `useRef` (escape hatch)
- [ ] Mutable refs vs state
- [ ] `useImperativeHandle`

---

## PHASE 11 — Context API

- [ ] Context mental model
- [ ] Provider re-render behavior
- [ ] Avoiding over-rendering
- [ ] Context vs props
- [ ] Context as dependency injection
- [ ] Context misuse patterns

---

## PHASE 12 — Performance & Re-renders

- [ ] Why components re-render
- [ ] Referential equality traps
- [ ] `React.memo`
- [ ] `useCallback`
- [ ] `useMemo`
- [ ] When memoization hurts
- [ ] Render profiling mindset

---

## PHASE 13 — Reconciliation & Fiber (Internals)

- [ ] Fiber architecture (conceptual)
- [ ] Incremental rendering
- [ ] Priority lanes
- [ ] Interruptible rendering
- [ ] Concurrent rendering basics

---

## PHASE 14 — Async React & Concurrency

- [ ] Concurrent rendering model
- [ ] Transitions
- [ ] `useTransition`
- [ ] `useDeferredValue`
- [ ] Tearing prevention
- [ ] Scheduling vs rendering

---

## PHASE 15 — Error Handling

- [ ] Error boundaries
- [ ] Render errors vs event errors
- [ ] Recovery strategies
- [ ] Fallback UIs
- [ ] Logging patterns

---

## PHASE 16 — Architecture & Scaling

- [ ] Component responsibility boundaries
- [ ] Smart vs dumb components
- [ ] Feature-based structure
- [ ] State colocation
- [ ] Lifting state correctly
- [ ] Avoiding prop drilling
- [ ] Avoiding global state abuse

---

## PHASE 17 — Data Fetching Patterns

- [ ] Fetch in effects
- [ ] Loading & error states
- [ ] Request cancellation
- [ ] Race condition handling
- [ ] Cache mental model
- [ ] Stale data strategies

---

## PHASE 18 — Testing Mentality (React-Specific)

- [ ] Test behavior, not implementation
- [ ] Rendering states
- [ ] User-event driven tests
- [ ] Async test pitfalls
- [ ] Debugging failing tests

---

## PHASE 19 — Ecosystem Awareness (Not Libraries)

- [ ] React DevTools mastery
- [ ] Strict Mode behavior
- [ ] Double-invocation understanding
- [ ] Dev vs prod differences
- [ ] Version upgrade mindset

---

## PHASE 20 — GOD CHECK (React)

You are a React god when you can:

- [ ] Predict re-renders without tools
- [ ] Explain effects timing verbally
- [ ] Fix infinite loops instantly
- [ ] Design state without refactors
- [ ] Explain why a bug exists, not just fix it
- [ ] Read React source without panic
