# JavaScript + React Mastery Map (Merged & Overlapping)

## 0. Core Programming Foundations (Shared)
- [x] Expressions vs statements
- [x] Control flow (if, switch, loops)
- [x] Truthy / falsy values
- [x] Error handling basics
- [x] Reading stack traces

## 1. JavaScript Core (REACT-CRITICAL)
- [x] Execution context and call stack
- [x] Lexical scope and scope chain
- [x] Closures (creation and lifetime)
- [x] `this` binding rules
- [x] Primitives vs objects
- [x] Value vs reference
- [x] Immutability vs mutation
- [x] Type coercion rules
- [x] `==` vs `===`
- [x] Destructuring
- [x] Spread & rest operators
- [x] Optional chaining (`?.`)
- [x] Nullish coalescing (`??`)

> ⚠️ If this section is weak, React feels unpredictable.

## 2. Functions (JS → React Bridge)
- [x] Function declarations vs expressions
- [x] Arrow functions (syntax + semantics)
- [x] Higher-order functions
- [x] Pure vs impure functions
- [x] Default parameters
- [ ] Closures in practice

> React components ARE functions.

## 3. Data Transformation (JS → React CORE)
- [ ] `map`
- [ ] `filter`
- [ ] `reduce`
- [ ] String normalization
- [ ] Defensive counting logic
- [ ] Edge-case handling
- [ ] Immutability in transformations

> This is where most React job tests actually live.

## 4. JSX (React-specific, JS-powered)
- [ ] JSX as JavaScript expressions
- [ ] `{}` expression rules
- [ ] Expressions vs statements in JSX
- [ ] Conditional rendering patterns
- [ ] Rendering `null`, `false`, `undefined`
- [ ] JSX fragments
- [ ] Common JSX mistakes

## 5. Components (React on top of JS)
- [ ] Function components
- [ ] Props as arguments
- [ ] Props immutability
- [ ] Component composition
- [ ] Children prop
- [ ] Component re-render rules

> Components = pure functions + UI.

## 6. State (JS + React Boundary)
- [ ] `useState` basics
- [ ] Functional updates (`prev => next`)
- [ ] Batching behavior
- [ ] Derived vs source state
- [ ] Resetting state correctly
- [ ] Avoiding stale closures

> This is React arithmetic.

## 7. Events & Closures (JS + React)
- [ ] Passing functions vs calling functions
- [ ] Event objects
- [ ] Closures inside handlers
- [ ] Preventing default behavior
- [ ] Parameterized handlers
- [ ] Shared handlers across elements

> 50% of React bugs live here.

## 8. Controlled Inputs (JS + React)
- [ ] Controlled vs uncontrolled inputs
- [ ] Single source of truth
- [ ] Input → state → UI loop
- [ ] Transforming input safely
- [ ] Avoiding cursor bugs
- [ ] Validation basics

## 9. Conditional Rendering (Logic Layer)
- [ ] Logical `&&`
- [ ] Ternary rendering
- [ ] Empty / loading / error states
- [ ] Truthy/falsy edge cases (`0`, `""`)
- [ ] Conditional component trees

## 10. Lists & Keys (JS + React)
- [ ] Rendering arrays
- [ ] Stable keys
- [ ] Why index keys break UI
- [ ] Filtering before render
- [ ] Sorting immutably

## 11. Styling & Side Effects
- [ ] Inline styles as objects
- [ ] Conditional styles
- [ ] State-driven styles
- [ ] Separation of logic vs presentation

## 12. Effects & Async (JS → React)
- [ ] Side effects vs pure logic
- [ ] `useEffect` mental model
- [ ] Dependency arrays
- [ ] Cleanup functions
- [ ] Fetching data
- [ ] Avoiding infinite loops

## 13. Async JavaScript (Used by React)
- [ ] Promises lifecycle
- [ ] `async / await`
- [ ] Error handling in async code
- [ ] Sequential vs parallel execution
- [ ] Race conditions (conceptual)

## 14. Modules & Architecture
- [ ] ES modules (`import` / `export`)
- [ ] Named vs default exports
- [ ] Module boundaries
- [ ] Separation of concerns
- [ ] File organization

## 15. Testing & Specs (JS + React)
- [ ] Reading failing tests
- [ ] Inferring requirements
- [ ] Matching exact expectations
- [ ] Debugging off-by-one errors
- [ ] User-centric testing mindset

## 16. Performance Awareness (Later)
- [ ] Re-render causes
- [ ] Memoization concepts
- [ ] `React.memo`
- [ ] When NOT to optimize

## 17. Advanced / JS-Heavy (DO NOT BLOCK ON)
- [ ] Prototypes internals
- [ ] Garbage collection details
- [ ] WeakMap / WeakSet
- [ ] Design patterns
- [ ] Advanced memory profiling

> Important, but **not** required for React proficiency.

