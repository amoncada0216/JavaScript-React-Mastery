# Browser Internals — Logical Mastery Map (How the Browser Actually Works)

## 1 — What a Browser Is (Reality First)

- [ ] Browser vs engine vs process
- [ ] Chromium vs Firefox vs WebKit (high level)
- [ ] Why specs ≠ implementations
- [ ] What the browser guarantees (and what it doesn’t)

---

## 2 — Multi-Process Architecture

- [ ] Browser process
- [ ] Renderer process
- [ ] GPU process
- [ ] Network process
- [ ] Site isolation
- [ ] Why tabs don’t usually crash each other

---

## 3 — Navigation & Page Load Lifecycle

- [ ] URL parsing
- [ ] Navigation request
- [ ] Redirect handling
- [ ] Process assignment
- [ ] Document lifecycle states
- [ ] Back/forward cache (bfcache)

---

## 4 — HTML Parsing (Streaming, Not Blocking)

- [ ] Incremental parsing
- [ ] Tokenization
- [ ] DOM tree construction
- [ ] Script tag blocking rules
- [ ] `defer` vs `async` at parser level
- [ ] Parser re-entrancy

---

## 5 — CSS Parsing & Styling

- [ ] CSS parsing pipeline
- [ ] CSSOM construction
- [ ] Selector matching cost
- [ ] Style recalculation triggers
- [ ] Inheritance & cascade resolution

---

## 6 — Render Tree → Pixels

- [ ] DOM + CSSOM → render tree
- [ ] Layout (reflow)
- [ ] Paint
- [ ] Layers
- [ ] Compositing
- [ ] GPU acceleration boundaries

---

## 7 — JavaScript Engine (Inside the Black Box)

- [ ] Parsing JS
- [ ] AST creation
- [ ] Bytecode generation
- [ ] JIT compilation basics
- [ ] Inline caches
- [ ] De-optimization (bailouts)

---

## 8 — The Main Thread Contract

- [ ] Single-threaded execution model
- [ ] What blocks the main thread
- [ ] Long tasks
- [ ] Input latency causes
- [ ] Why “async” doesn’t mean parallel

---

## 9 — Event Loop (Precise Model)

- [ ] Call stack
- [ ] Task queue
- [ ] Microtask queue
- [ ] Render opportunity
- [ ] When the browser paints
- [ ] Promise vs timer ordering

---

## 10 — Events System

- [ ] Event targets
- [ ] Capturing phase
- [ ] Bubbling phase
- [ ] Default actions
- [ ] Event delegation
- [ ] Passive listeners

---

## 11 — Storage & Persistence

- [ ] Cookies
- [ ] localStorage
- [ ] sessionStorage
- [ ] IndexedDB
- [ ] Cache Storage
- [ ] Quotas & eviction policies

---

## 12 — Networking Stack

- [ ] Fetch pipeline
- [ ] CORS enforcement
- [ ] Preflight requests
- [ ] Same-origin policy
- [ ] Connection reuse
- [ ] Request prioritization

---

## 13 — Security Model

- [ ] Sandboxing
- [ ] Origin concept
- [ ] Site isolation
- [ ] CSP basics
- [ ] XSS protection boundaries
- [ ] Why the browser is hostile by design

---

## 14 — Workers & Parallelism

- [ ] Web Workers
- [ ] Shared Workers
- [ ] Service Workers
- [ ] Worker communication cost
- [ ] When workers help (and don’t)

---

## 15 — Scheduling & Timing APIs

- [ ] `setTimeout`
- [ ] `setInterval`
- [ ] `requestAnimationFrame`
- [ ] `requestIdleCallback`
- [ ] Frame budget (16.6ms reality)

---

## 16 — DevTools as X-Ray Vision

- [ ] Elements panel internals
- [ ] Performance panel mental model
- [ ] Memory panel (heap snapshots)
- [ ] Network panel truth reading
- [ ] Sources & breakpoints

---

## 17 — Browser Failure Modes

- [ ] Layout thrashing
- [ ] Forced synchronous layouts
- [ ] JS-driven animations
- [ ] Memory leaks in SPAs
- [ ] Fighting the browser instead of using it

---

## GOD CHECK — Browser Internals

You’re done when you can:

- [ ] Explain a page load step-by-step
- [ ] Predict what blocks rendering
- [ ] Explain why a promise runs before paint
- [ ] Diagnose jank without guessing
- [ ] Use DevTools intentionally, not randomly
