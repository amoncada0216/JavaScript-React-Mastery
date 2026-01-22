# TypeScript — MASTER MAP

## PHASE 0 — Why TypeScript Exists (Truth First)

- [ ] What problems TS actually solves
- [ ] Static vs dynamic typing tradeoffs
- [ ] Compile-time vs runtime reality
- [ ] TypeScript is erased at runtime
- [ ] When TypeScript makes things worse

---

## PHASE 1 — Type System Fundamentals

- [ ] Type annotations
- [ ] Type inference
- [ ] Explicit vs implicit typing
- [ ] Structural typing (duck typing)
- [ ] Nominal vs structural comparison
- [ ] Type widening & narrowing

---

## PHASE 2 — Primitive & Basic Types

- [ ] `string`
- [ ] `number`
- [ ] `boolean`
- [ ] `null` / `undefined`
- [ ] `void`
- [ ] `any`
- [ ] `unknown`
- [ ] `never`
- [ ] Literal types

---

## PHASE 3 — Objects & Shapes

- [ ] Object type annotations
- [ ] Optional properties
- [ ] Readonly properties
- [ ] Excess property checks
- [ ] Index signatures
- [ ] Nested object typing

---

## PHASE 4 — Arrays, Tuples, and Collections

- [ ] Array typing (`T[]` vs `Array<T>`)
- [ ] Tuples
- [ ] Readonly arrays
- [ ] Variadic tuples
- [ ] Typing `Map` / `Set`

---

## PHASE 5 — Functions (Type-Level Control)

- [ ] Function type annotations
- [ ] Parameter typing
- [ ] Return types
- [ ] Optional & default params
- [ ] Rest parameters
- [ ] Function overloads
- [ ] `this` parameter typing
- [ ] Void vs never in functions

---

## PHASE 6 — Unions & Narrowing (CRITICAL)

- [ ] Union types
- [ ] Type narrowing
- [ ] Control flow analysis
- [ ] `typeof` guards
- [ ] `instanceof` guards
- [ ] `in` operator narrowing
- [ ] Custom type guards
- [ ] Exhaustiveness checking

---

## PHASE 7 — Intersections & Composition

- [ ] Intersection types
- [ ] Type composition patterns
- [ ] Mixing unions & intersections
- [ ] Conflict resolution
- [ ] Practical composition pitfalls

---

## PHASE 8 — Enums (And Why to Avoid Them)

- [ ] Numeric enums
- [ ] String enums
- [ ] Const enums
- [ ] Enum runtime cost
- [ ] Union alternatives

---

## PHASE 9 — Generics (The Real Power)

- [ ] Generic functions
- [ ] Generic interfaces
- [ ] Generic constraints
- [ ] Multiple generics
- [ ] Default generic types
- [ ] Generic inference
- [ ] Generic anti-patterns

---

## PHASE 10 — Advanced Type Operators

- [ ] `keyof`
- [ ] `typeof` (type context)
- [ ] Indexed access types
- [ ] Mapped types
- [ ] Conditional types
- [ ] Distributive conditional types
- [ ] `infer`

---

## PHASE 11 — Utility Types (Mastery Required)

- [ ] `Partial`
- [ ] `Required`
- [ ] `Readonly`
- [ ] `Pick`
- [ ] `Omit`
- [ ] `Record`
- [ ] `Exclude`
- [ ] `Extract`
- [ ] `NonNullable`
- [ ] `ReturnType`
- [ ] `Parameters`

---

## PHASE 12 — Type Aliases vs Interfaces

- [ ] Differences & similarities
- [ ] Declaration merging
- [ ] Extension patterns
- [ ] When to prefer each
- [ ] Library author choices

---

## PHASE 13 — Type Assertions & Escapes

- [ ] `as` assertions
- [ ] Double assertions
- [ ] Assertion dangers
- [ ] Safe assertion patterns
- [ ] When assertions are acceptable

---

## PHASE 14 — Classes & OOP Typing

- [ ] Class typing
- [ ] Public / private / protected
- [ ] Parameter properties
- [ ] Abstract classes
- [ ] Implementing interfaces
- [ ] `this` typing in classes

---

## PHASE 15 — Modules & Declarations

- [ ] Typing ES modules
- [ ] Default vs named exports
- [ ] `declare`
- [ ] Ambient declarations
- [ ] `.d.ts` files
- [ ] Global augmentation
- [ ] Module augmentation

---

## PHASE 16 — Strictness & Compiler Behavior

- [ ] `strict` mode
- [ ] `strictNullChecks`
- [ ] `noImplicitAny`
- [ ] `exactOptionalPropertyTypes`
- [ ] Compiler error interpretation
- [ ] When to loosen rules (rare)

---

## PHASE 17 — Tooling & Build Integration

- [ ] `tsconfig.json`
- [ ] Target & lib
- [ ] Module resolution
- [ ] Source maps
- [ ] TS + bundlers
- [ ] Incremental builds

---

## PHASE 18 — Type-Driven Design

- [ ] Designing APIs with types
- [ ] Making invalid states unrepresentable
- [ ] Modeling domain constraints
- [ ] Type-first development
- [ ] Refactoring with confidence

---

## PHASE 19 — TypeScript Failure Modes

- [ ] Over-typing
- [ ] `any` creep
- [ ] Lying types
- [ ] Runtime/type mismatch
- [ ] False sense of safety

---

## PHASE 20 — GOD CHECK (TypeScript)

You are a TypeScript god when you can:

- [ ] Predict inference without hovering
- [ ] Write zero-`any` code
- [ ] Model complex domains cleanly
- [ ] Read advanced `.d.ts` files
- [ ] Refactor fearlessly with compiler trust
