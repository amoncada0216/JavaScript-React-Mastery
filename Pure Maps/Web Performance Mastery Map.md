# Web Performance — Mastery Map

## 1 — What Performance Really Is

- [ ] User-perceived performance vs metrics
- [ ] Latency vs throughput
- [ ] CPU vs network vs memory bottlenecks
- [ ] Cold start vs warm cache
- [ ] Why “fast locally” means nothing

---

## 2 — The Request Lifecycle (Ground Truth)

- [ ] DNS lookup
- [ ] TCP handshake
- [ ] TLS negotiation
- [ ] HTTP request / response
- [ ] Connection reuse (keep-alive)
- [ ] Where time is actually spent

---

## 3 — HTTP & Transfer Cost

- [ ] HTTP/1.1 vs HTTP/2 vs HTTP/3
- [ ] Request multiplexing
- [ ] Header size impact
- [ ] Compression (gzip, brotli)
- [ ] Payload size economics
- [ ] Caching headers (`Cache-Control`, `ETag`)

---

## 4 — Browser Critical Path

- [ ] HTML parsing
- [ ] DOM construction
- [ ] CSS parsing
- [ ] CSSOM creation
- [ ] Render tree construction
- [ ] Layout
- [ ] Paint
- [ ] Composite
- [ ] What blocks what

---

## 5 — JavaScript Execution Cost

- [ ] Parse time
- [ ] Compile time
- [ ] Execution time
- [ ] Main thread blocking
- [ ] Long tasks
- [ ] JIT basics (why code shape matters)

---

## 6 — Loading Strategy (Massive Wins)

- [ ] `defer` vs `async`
- [ ] Script ordering
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Dynamic imports
- [ ] Route-based loading

---

## 7 — Rendering Performance

- [ ] Reflows (layout thrashing)
- [ ] Repaints
- [ ] Composite-only changes
- [ ] CSS properties that trigger layout
- [ ] Animating with transforms
- [ ] `will-change` abuse

---

## 8 — Images & Media

- [ ] Image formats (JPEG, PNG, WebP, AVIF)
- [ ] Responsive images (`srcset`, `sizes`)
- [ ] Lazy loading images
- [ ] Image decoding cost
- [ ] Video performance basics

---

## 9 — Fonts & Text Rendering

- [ ] Font loading behavior
- [ ] FOIT vs FOUT
- [ ] `font-display`
- [ ] Subsetting fonts
- [ ] System fonts vs web fonts

---

## 10 — Memory & Leaks (Silent Killers)

- [ ] JS heap basics
- [ ] Detached DOM nodes
- [ ] Event listener leaks
- [ ] Closure retention
- [ ] Memory growth patterns

---

## 11 — Browser Caching Strategy

- [ ] HTTP cache vs memory cache
- [ ] Service workers (conceptual)
- [ ] Cache invalidation reality
- [ ] Versioned assets
- [ ] Stale-while-revalidate

---

## 12 — Runtime Scheduling

- [ ] Main thread vs workers
- [ ] Web Workers basics
- [ ] `requestAnimationFrame`
- [ ] `requestIdleCallback`
- [ ] Scheduling non-critical work

---

## 13 — Measuring Performance (No Guessing)

- [ ] Chrome DevTools Performance tab
- [ ] Network waterfall reading
- [ ] CPU flame charts
- [ ] Lighthouse (what it’s good for)
- [ ] Lab vs field data

---

## 14 — Core Web Vitals (Reality Check)

- [ ] LCP (Largest Contentful Paint)
- [ ] CLS (Cumulative Layout Shift)
- [ ] INP (Interaction to Next Paint)
- [ ] What actually improves each
- [ ] What _doesn’t_ matter

---

## 15 — Production Performance Strategy

- [ ] Performance budgets
- [ ] Preventing regressions
- [ ] Perf testing in CI
- [ ] Tradeoffs (DX vs UX)
- [ ] Knowing when to stop optimizing

---

## 16 — Performance Failure Patterns

- [ ] Over-bundling
- [ ] Too much JS
- [ ] Blocking rendering accidentally
- [ ] Premature optimization
- [ ] Blind Lighthouse chasing

---

## GOD CHECK — Web Performance

You’re done when you can:

- [ ] Predict bottlenecks before profiling
- [ ] Read a waterfall and explain delays
- [ ] Reduce load time without touching code
- [ ] Explain why something is slow, precisely
- [ ] Improve UX without chasing fake metrics
