# Redux — MASTER MAP

## PHASE 0 — Why Redux Exists (Foundational Truth)

- [ ] The problem Redux solves (shared mutable state chaos)
- [ ] Why lifting state fails at scale
- [ ] Why prop drilling is a symptom, not a cause
- [ ] Centralized state as a constraint, not convenience
- [ ] Redux ≠ global variables
- [ ] When Redux should NOT be used

---

## PHASE 1 — Core Principles (Non-Negotiable)

- [ ] Single source of truth
- [ ] State is read-only
- [ ] Changes via pure functions
- [ ] Deterministic state transitions
- [ ] Predictability over convenience
- [ ] Time-travel debugging concept

---

## PHASE 2 — Store Fundamentals

- [ ] What the store actually is
- [ ] `createStore` (legacy knowledge)
- [ ] `configureStore` (modern)
- [ ] Store lifecycle
- [ ] `getState`
- [ ] `dispatch`
- [ ] `subscribe`
- [ ] Store ownership boundaries

---

## PHASE 3 — Actions (Intent, Not Logic)

- [ ] Actions as plain objects
- [ ] `type` as event identity
- [ ] Payload design
- [ ] Action creators
- [ ] FSA (Flux Standard Action)
- [ ] Semantic action naming
- [ ] Actions vs events vs commands

---

## PHASE 4 — Reducers (The Core Engine)

- [ ] Reducers as pure functions
- [ ] `(state, action) → nextState`
- [ ] Initial state patterns
- [ ] Default case discipline
- [ ] Immutability enforcement
- [ ] Reducer composition
- [ ] Reducer anti-patterns
- [ ] Why reducers must be synchronous

---

## PHASE 5 — Immutability at Scale

- [ ] Structural sharing
- [ ] Shallow vs deep updates
- [ ] Updating nested state safely
- [ ] Normalizing state shape
- [ ] Avoiding accidental mutation
- [ ] Performance implications
- [ ] Immutable update patterns by instinct

---

## PHASE 6 — Redux Toolkit (RTK) — The Correct Way

- [ ] Why RTK exists
- [ ] `configureStore`
- [ ] `createSlice`
- [ ] Slice structure
- [ ] Auto-generated actions
- [ ] Reducer + actions coupling
- [ ] Feature-based slicing
- [ ] RTK conventions

---

## PHASE 7 — Immer (Mutation That Isn’t)

- [ ] Immer mental model
- [ ] Draft state
- [ ] How Immer tracks changes
- [ ] What you CAN mutate
- [ ] What you CANNOT mutate
- [ ] Performance trade-offs
- [ ] Escaping Immer correctly

---

## PHASE 8 — Selectors (Read Model Mastery)

- [ ] Selectors as queries
- [ ] Avoiding derived state in store
- [ ] Selector purity
- [ ] Selector composition
- [ ] Memoization rationale
- [ ] `reselect` basics
- [ ] Preventing unnecessary re-renders

---

## PHASE 9 — React-Redux Binding (Critical Layer)

- [ ] `Provider`
- [ ] Store context
- [ ] `useSelector`
- [ ] Selector equality checks
- [ ] `useDispatch`
- [ ] Why components re-render
- [ ] Subscription model
- [ ] React-Redux performance traps

---

## PHASE 10 — Async Redux (The Hard Truth)

- [ ] Why reducers must stay sync
- [ ] Side effects outside reducers
- [ ] Async flow modeling
- [ ] Request lifecycle modeling
- [ ] Loading / success / error state
- [ ] Race conditions
- [ ] Cancellation concepts

---

## PHASE 11 — Thunks (Baseline Async)

- [ ] What a thunk really is
- [ ] `redux-thunk` mental model
- [ ] Thunk signature
- [ ] Accessing `dispatch` and `getState`
- [ ] Thunks vs action creators
- [ ] Error handling in thunks
- [ ] Thunk anti-patterns

---

## PHASE 12 — RTK Async (`createAsyncThunk`)

- [ ] Why `createAsyncThunk` exists
- [ ] Pending / fulfilled / rejected actions
- [ ] Async lifecycle auto-actions
- [ ] Error serialization
- [ ] Abort handling
- [ ] Extra reducers
- [ ] Async state modeling discipline

---

## PHASE 13 — Normalization & Entity Management

- [ ] Why normalization matters
- [ ] Entity IDs as truth
- [ ] `createEntityAdapter`
- [ ] CRUD reducers
- [ ] Selector generation
- [ ] Sorting & filtering entities
- [ ] Large-scale state efficiency

---

## PHASE 14 — Middleware (Interception Layer)

- [ ] What middleware is
- [ ] Middleware execution chain
- [ ] Logging middleware
- [ ] Side-effect middleware
- [ ] Custom middleware creation
- [ ] Middleware ordering
- [ ] Middleware vs enhancers

---

## PHASE 15 — DevTools & Debugging

- [ ] Redux DevTools mental model
- [ ] Action inspection
- [ ] State diffing
- [ ] Time-travel debugging
- [ ] Action replay
- [ ] Debugging async flows

---

## PHASE 16 — Performance & Scaling

- [ ] State size management
- [ ] Selector-driven rendering
- [ ] Avoiding over-dispatching
- [ ] Slice boundary decisions
- [ ] Store splitting (advanced)
- [ ] Memory considerations

---

## PHASE 17 — Architecture & Boundaries

- [ ] Feature-based slices
- [ ] UI state vs server state
- [ ] What belongs in Redux
- [ ] What should NEVER be in Redux
- [ ] Redux vs Context
- [ ] Redux vs local state

---

## PHASE 18 — Server State Reality

- [ ] Server state vs client state
- [ ] Cache invalidation concepts
- [ ] Why Redux is bad at server state
- [ ] RTK Query mental model
- [ ] When to use RTK Query
- [ ] When NOT to use Redux at all

---

## PHASE 19 — RTK Query (Modern Standard)

- [ ] API slices
- [ ] Endpoint definitions
- [ ] Auto-generated hooks
- [ ] Cache lifecycle
- [ ] Refetching logic
- [ ] Invalidations
- [ ] Background updates

---

## PHASE 20 — Anti-Patterns & Failure Modes

- [ ] Over-normalization
- [ ] Over-globalization
- [ ] Fat reducers
- [ ] Business logic in components
- [ ] Async logic sprawl
- [ ] Blind copy-paste Redux

---

## PHASE 21 — GOD CHECK (Redux)

You are a Redux god when you can:

- [ ] Design state shape before coding
- [ ] Predict re-renders from selectors
- [ ] Model async without bugs
- [ ] Explain why Redux is needed (or not)
- [ ] Debug state changes without console logs
- [ ] Refactor Redux without fear
