# Build Tools & Bundlers — Mastery Map

## 1 — Why Build Tools Exist (Reality Check)

- [ ] Why browsers can’t run your source code directly (at scale)
- [ ] Dev code vs prod code
- [ ] Human-friendly vs machine-efficient code
- [ ] What problems build tools actually solve
- [ ] When build steps become liabilities

---

## 2 — The Build Pipeline (End-to-End)

- [ ] Entry points
- [ ] Dependency graph construction
- [ ] Module resolution
- [ ] Transpilation
- [ ] Bundling
- [ ] Optimization
- [ ] Output artifacts

---

## 3 — Modules in Practice

- [ ] ES modules in the browser
- [ ] CommonJS vs ESM
- [ ] Static vs dynamic imports
- [ ] Tree-shaking prerequisites
- [ ] Side-effect detection
- [ ] Why some code can’t be tree-shaken

---

## 4 — Transpilation (Code Transformation)

- [ ] Why transpilation exists
- [ ] Syntax vs semantics
- [ ] Target environments
- [ ] Polyfills vs transforms
- [ ] Browserslist
- [ ] Output size tradeoffs

---

## 5 — Bundling (Core Mechanism)

- [ ] What a bundle actually is
- [ ] Single bundle vs multiple bundles
- [ ] Chunking strategy
- [ ] Code splitting
- [ ] Dynamic imports in bundles
- [ ] Bundle graphs

---

## 6 — Development vs Production Builds

- [ ] Dev builds (speed, debuggability)
- [ ] Prod builds (size, performance)
- [ ] Source maps
- [ ] Why prod bugs don’t repro locally
- [ ] Environment-specific behavior

---

## 7 — Optimization Passes (Where Wins Come From)

- [ ] Minification
- [ ] Dead code elimination
- [ ] Constant folding
- [ ] Scope hoisting
- [ ] Asset compression
- [ ] Tradeoffs between size and speed

---

## 8 — Tree Shaking (Often Misunderstood)

- [ ] Static analysis requirement
- [ ] ESM-only constraint
- [ ] Side-effect flags
- [ ] Why tree shaking “fails”
- [ ] Debugging tree-shaking issues

---

## 9 — Load-Time Optimization

- [ ] Entry chunk size
- [ ] Lazy-loaded chunks
- [ ] Route-based splitting
- [ ] Vendor splitting
- [ ] Cache-friendly chunking

---

## 10 — Asset Handling

- [ ] CSS bundling
- [ ] CSS extraction
- [ ] Image handling
- [ ] Font handling
- [ ] Inlining vs emitting files

---

## 11 — Build Caching (Speed Matters)

- [ ] Incremental builds
- [ ] Persistent caching
- [ ] Cache invalidation
- [ ] Why builds randomly get slow
- [ ] CI cache strategies

---

## 12 — Tooling Ecosystem (Conceptual, Not Brand Worship)

- [ ] Bundlers vs build tools vs task runners
- [ ] Why some tools feel “faster”
- [ ] Native ESM dev servers
- [ ] Pre-bundling dependencies
- [ ] Tradeoffs between tools

---

## 13 — Configuration & Control

- [ ] Config files as code
- [ ] Environment variables
- [ ] Mode-based configuration
- [ ] Plugin systems
- [ ] When config becomes technical debt

---

## 14 — Debugging Build Problems

- [ ] Reading build output
- [ ] Source map debugging
- [ ] Dependency resolution errors
- [ ] Version conflicts
- [ ] Non-deterministic builds

---

## 15 — Production Deployment Concerns

- [ ] Content hashing
- [ ] Cache busting
- [ ] Immutable assets
- [ ] Rollback strategies
- [ ] Backward compatibility

---

## 16 — Build Failure Patterns

- [ ] Over-bundling
- [ ] Tool lock-in
- [ ] Excessive configuration
- [ ] Copy-paste configs
- [ ] Blind upgrades

---

## GOD CHECK — Build Tools

You’re done when you can:

- [ ] Explain what your build outputs and why
- [ ] Predict bundle size changes
- [ ] Debug broken prod builds
- [ ] Choose tools intentionally
- [ ] Simplify builds instead of growing them
