# Testing — Mastery Map

## 1 — Why Testing Exists (Mental Reset)

- [ ] What tests are for (and what they are not)
- [ ] Confidence vs coverage
- [ ] Cost of bugs vs cost of tests
- [ ] Tests as executable documentation
- [ ] When tests slow teams down

---

## 2 — Types of Tests (Clear Separation)

- [ ] Unit tests (scope & limits)
- [ ] Integration tests
- [ ] End-to-end (E2E) tests
- [ ] Contract tests
- [ ] Visual regression tests
- [ ] Pyramid vs trophy models

---

## 3 — What to Test (Critical Judgment)

- [ ] Business logic vs implementation
- [ ] Happy paths vs edge cases
- [ ] Invariants and guarantees
- [ ] Boundaries and failure modes
- [ ] Bugs as test cases

---

## 4 — Unit Testing Fundamentals

- [ ] Pure function testing
- [ ] Input → output assertions
- [ ] Table-driven tests
- [ ] Avoiding over-mocking
- [ ] Deterministic tests
- [ ] Testing error cases

---

## 5 — Assertions & Expectations

- [ ] Equality vs identity assertions
- [ ] Deep equality pitfalls
- [ ] Floating-point assertions
- [ ] Partial matching
- [ ] Custom matchers
- [ ] Assertion readability

---

## 6 — Test Structure & Hygiene

- [ ] Arrange / Act / Assert
- [ ] Test naming conventions
- [ ] One behavior per test
- [ ] Avoiding shared state
- [ ] Setup vs teardown discipline

---

## 7 — Mocking, Stubbing, Spying (Danger Zone)

- [ ] What mocking actually does
- [ ] Stubs vs mocks vs spies
- [ ] When mocking is justified
- [ ] Mocking time
- [ ] Mocking randomness
- [ ] Mocking network calls
- [ ] Mocking anti-patterns

---

## 8 — Testing Async Code

- [ ] Promises in tests
- [ ] `async / await` in tests
- [ ] Handling race conditions
- [ ] Testing retries
- [ ] Fake timers
- [ ] Flaky async tests

---

## 9 — Integration Testing Reality

- [ ] Testing modules together
- [ ] Testing side effects
- [ ] Database integration basics
- [ ] Network integration tests
- [ ] Controlled test environments

---

## 10 — UI & Component Testing

- [ ] Testing behavior, not structure
- [ ] User-centric testing
- [ ] Accessibility-first assertions
- [ ] Event simulation vs real events
- [ ] Avoiding snapshot abuse

---

## 11 — End-to-End (E2E) Testing

- [ ] What E2E actually validates
- [ ] Test environments
- [ ] Data seeding
- [ ] Handling flakiness
- [ ] Speed vs confidence tradeoff
- [ ] When E2E is too much

---

## 12 — Test Data & Fixtures

- [ ] Minimal test data
- [ ] Factories vs fixtures
- [ ] Randomized data (and limits)
- [ ] Cleaning up state
- [ ] Test isolation guarantees

---

## 13 — Coverage & Metrics (Lies Explained)

- [ ] Line coverage
- [ ] Branch coverage
- [ ] Statement coverage
- [ ] Why 100% coverage is meaningless
- [ ] Coverage as a signal, not a goal

---

## 14 — Debugging Failing Tests

- [ ] Reading failure output
- [ ] Reproducing locally
- [ ] Isolating flaky tests
- [ ] Timing-related failures
- [ ] Fixing tests vs fixing code

---

## 15 — Test Architecture at Scale

- [ ] Test folder organization
- [ ] Test naming conventions
- [ ] Fast vs slow test separation
- [ ] CI-friendly test design
- [ ] Parallel test execution

---

## 16 — Testing Anti-Patterns

- [ ] Testing implementation details
- [ ] Brittle snapshots
- [ ] Over-mocking everything
- [ ] Slow test suites
- [ ] Tests nobody trusts

---

## 17 — Testing in CI/CD

- [ ] Running tests in pipelines
- [ ] Test order independence
- [ ] Failing fast
- [ ] Reporting failures clearly
- [ ] Preventing flaky merges

---

## GOD CHECK — Testing

You’re done when you can:

- [ ] Decide _not_ to write a test
- [ ] Write tests that survive refactors
- [ ] Diagnose flaky tests quickly
- [ ] Trust test failures
- [ ] Design code that is easy to test
