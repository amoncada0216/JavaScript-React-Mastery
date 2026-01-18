+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Definitions

> Type coercion is the automatic or implicit conversion of values from one data type to another (e.g., from string to number). This happens when the language expects a specific data type for an operation but receives a different one, and attempts to make the operation work without throwing an error. 

> A method is a function that is stored as a property on an object and is called through that object.

> A handler is a function whose purpose is to be called later in response to something else
(an event, a callback, a condition, a loop, a framework trigger).

> Memoization is a technique that caches the result of a computation so that when the same inputs occur again, the cached result is returned instead of recomputing.

+++

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Expressions

Produces a value.

2 + 2

foo()

a ? b : c

# Statement

Performs an action, no value.

if (...) {}

for (...) {}

let x = 3;

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Control Flow

> if / else: conditional branching

> switch: value-based branching

> loops (for, while): repetition

All control flow is explicit. No implicit jumps.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Falsy Values

false
0
-0
""
null
undefined
NaN

# Truthy Values

Everything that is not falsy

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Undefined

> Undefined happens automatically.

- Missing property
  obj.missing // undefined

- Variable declared but not assigned
  let x;
  x // undefined

- Function with no return
  function f() {}
  f() // undefined

- Explicit assignment
  x = undefined;

undefined usually means:

“This value was never provided.”

undefined is what JavaScript gives you when nothing was provided.

# Null

> Null is never automatic. It is always intentional.

- Explicit assignment
  x = null;

- API / backend response
  {
  user: null
  }

- Resetting a value on purpose
  currentUser = null;

- Libraries / frameworks signaling ‘empty’
  Common in JSON, databases, APIs.

null usually means:

“This value exists, and it is intentionally empty.”

null is what humans or systems use to say “nothing, on purpose”.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Errors

SyntaxError

- Code is grammatically invalid
- Happens before execution

ReferenceError

- Variable does not exist
- Happens at runtime

TypeError

- Value exists but is used incorrectly
- Happens at runtime

> throw creates an error

> try / catch intercepts it

> Uncaught errors stop execution

Errors propagate up the call stack until caught.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Precedence Rule

?? cannot be mixed with || or && without parentheses.

Doing so causes a SyntaxError.

❌ Not allowed:

a || b ?? c
a ?? b || c

✅ Allowed:

(a || b) ?? c
a || (b ?? c)

Why

- || works on falsy values

- ?? works only on null / undefined

- Mixing them implicitly is ambiguous, so JS forces explicit grouping.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Reading Stack Traces

> Read top to bottom

> The first user-land frame is usually the bug

Stack trace = call history, not execution order

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# == and ===

> === (strict equality)

Same value AND same type

No coercion. No surprises.

1 === 1 // true
1 === "1" // false
false === 0 // false
null === undefined // false

Use this by default.

> == (loose equality)

Allows type coercion before comparing

JavaScript tries to make both sides the same type.

1 == "1" // true
false == 0 // true
"" == 0 // true
null == undefined // true

This is why it’s dangerous.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Operators && || ??

&& (AND) — “return the first falsy, otherwise the last”
|| (OR) — “return the first truthy, otherwise the last”
?? (Nullish coalescing) — “fallback ONLY on null or undefined”

true && "hello" // "hello" ✅
false && "hello" // false ✅

0 || 10 // 10 ❌ (falsy)
0 ?? 10 // 0 ✅ (valid value)

"" || "x" // "x" ❌
"" ?? "x" // "" ✅

false || true // true ❌
false ?? true // false ✅

"" || "Unknown" // "Unknown" ❌
0 || "Unknown" // "Unknown" ❌
false || "Unknown" // "Unknown" ❌

"" ?? "Unknown" // "" ✅
0 ?? "Unknown" // 0 ✅
false ?? "Unknown" // false ✅
null ?? "Unknown" // "Unknown" ✅
undefined ?? "Unknown" // "Unknown" ✅

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# For Loop

for (let i = 0; i < 3; i++) {
console.log(i);
}

# While Loop

let i = 0;

while (i < 3) {
console.log(i);
i++;
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Function Declaration

function add(a, b) {
return a + b;
};

Only function declarations are hoisted and callable before definition. Everything else is not.

// ✅ works

sayHi();

function sayHi() {}

Use when:

- You want stable, named functions
- Order should not matter

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Function Expression

const add = function (a, b) {
return a + b;
};

// ❌ ReferenceError

sayHi();

const sayHi = function () {};

// ❌ ReferenceError

sayHi();

const sayHi = () => {};

Use when:

- Function is a value
- You want conditional or dynamic assignment

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Arrow Functions (Basic behavior)

const add1 = function (a, b) {
return a + b;
};

const add2 = (a, b) => {
return a + b;
};

console.log(add1(2, 3)); // 5
console.log(add2(2, 3)); // 5

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Arrow Functions (With multiple statements)

const logAndAdd = (a, b) => {
console.log(a);
return a + b;
};

console.log(logAndAdd(2, 3)); // 2 5

> When you use {} in an arrow function:

- You must use return

- There is no implicit return

> Multiple statements require an explicit return

# Arrow Functions (Implicit return)

const add = (a, b) => a + b;

console.log(add(2, 3)); // 5

# Arrow Functions (Implicit return of an object)

const makeUser = () => ({ name: "Ana" });

console.log(makeUser()); // { name: "Ana" }

> Arrow functions with implicit return need parentheses to return an object.

> If no ( ) added, console will log: undefined

> Or shorter:

{} → function body

({}) → object literal

# Bind rule

> Regular functions:

- Bind this when they are called

> Arrow functions:

- Never bind this

- Capture this from their surrounding scope

If the surrounding scope is a regular function that already bound this, the arrow will reuse it.

Regular functions decide what this is.
Arrow functions inherit what this already is.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Higher-Order Functions

Is a function that takes another function as an argument or returns a function.

Higher-order function = function that treats functions as data

function apply(fn, value) {
return fn(value);
}

function double(x) {
return x \* 2;
}

const result = apply(double, 5);

console.log(result); // 10

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Pure Functions

A pure function is a function where:

1.  The output depends only on its inputs
2.  It does not change anything outside itself

Both conditions must be true.

function add(a, b) {
return a + b;
}

- Same inputs → same output
- No external reads
- No external writes

# Impure Functions

An impure function breaks at least one of those rules.

> Example (external read):

let tax = 0.2;

function calculate(price) {
return price \* tax;
}

- Output depends on tax
- If tax changes, result changes
- Function behavior is not self-contained

> Example (external write):

let total = 0;

function addToTotal(x) {
total += x;
}

- Modifies external state
- Causes side effects

# Side Effects

It is any change that happens outside the function’s local scope.

Common side effects:

- Mutating objects
- Changing variables
- Logging
- Making network calls
- Reading the current time

Why this matters (especially for React)

- Pure functions are predictable
- Impure functions are context-dependent
- React components are expected to behave as if they were pure

This is why:

- State updates are isolated
- Mutations cause bugs
- Predictability matters more than cleverness

Pure = math function.
Impure = function with memory or effects.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Default Parameters

Default parameters assign a value only when an argument is undefined.

They do not trigger for:

- null
- 0
- ""
- false
- Only for undefined.

> Example 1:

function greet(name = "Guest") {
return name;
}

greet("Ana"); // "Ana"
greet(); // "Guest"

No argument → name === undefined → default used.

> Example 2:

function show(count = 10) {
return count;
}

show(0); // 0
show(null); // null
show(undefined); // 10

Defaults trigger only on undefined.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Closures in Practice

A closure is a function that remembers variables from where it was created, even after that outer function has finished running.

> Example 1 — basic closure

function makeCounter() {
let count = 0;

return function () {
count += 1;
return count;
};
}

const counter = makeCounter();
counter(); // 1
counter(); // 2

Why this works:

- makeCounter runs once
- It returns a function
- That function keeps access to count
- count stays alive because the inner function still references it

> Example 2 — multiple closures, separate memory

const a = makeCounter();
const b = makeCounter();

a(); // 1
a(); // 2
b(); // 1

Why:

- Each call to makeCounter creates a new scope
- Each returned function closes over its own count

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Map

Map "map" creates a new array by applying a function to each element of an existing array.

Key rules:

- Same length in → same length out
- Does not mutate the original array
- The callback’s return value becomes the new element

> Example 1 — simple value transformation

const nums = [1, 2, 3];

const doubled = nums.map(n => n \* 2);

console.log(nums); // [1, 2, 3]

console.log(doubled); // [2, 4, 6]

> Example 2 — mapping objects to derived values

const users = [ { name: "Ana", age: 20 }, { name: "Luis", age: 30 }];

const ages = users.map(u => u.age + 1);

console.log(users); // [{ name: "Ana", age: 20 }, { name: "Luis", age: 30 }]

console.log(ages); // [21, 31]

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Filter

Creates a new array containing only the elements for which the callback returns a truthy value.

Key rules

- Returns a new array
- Length can be shorter or equal to the original
- Does not mutate the original array
- Callback return value is coerced to boolean

> Example 1 — filtering primitive values

const nums = [1, 2, 3, 4];

const evens = nums.filter(n => n % 2 === 0);

console.log(nums);
// [1, 2, 3, 4]

console.log(evens);
// [2, 4]

> Example 2 — filtering objects by condition

const users = [
{ name: "Ana", active: true },
{ name: "Luis", active: false }
];

const activeUsers = users.filter(u => u.active);

console.log(users);
// [{ name: "Ana", active: true }, { name: "Luis", active: false }]

console.log(activeUsers);
// [{ name: "Ana", active: true }]

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Remainder

a % b = a - (floor(a / b) × b)

Example 1:

10 % 3 = 1 → floor(10 / 3) = 3 → 10 − 3 × 3 = 1

Example 2:

1243 % 53 = 24 → floor(1243 / 53) = 23 → 1243 − 23 × 53 = 24

# Is Number Odd?

obj.n % 2 === 1

Example 1:

2554 % 2 === 1 // false, remainder = 0

Example 2:

9 % 2 === 1 // true, remainder = 1

# Is Number Even?

obj.n % 2 === 0

Example 1:

2554 % 2 === 0 // true, remainder = 0

Example 2:

9 % 2 === 1 // false, remainder = 1

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Reduce

Reduces an array to a single accumulated value by repeatedly applying a reducer function.

> Syntax: array.reduce((accumulator, element, index, array) => newAccumulator, initialValue)

Key rules

- Returns one value (any type)
- Accumulator carries state across iterations
- Callback must return the new accumulator
- Initial value controls accumulator type and first step

> Example 1 — summing numbers

const nums = [1, 2, 3];

const sum = nums.reduce((acc, n) => acc + n, 0);

console.log(nums);
// [1, 2, 3]

console.log(sum);
// 6

> Example 2 — building an object

const items = ["a", "b", "a"];

const counts = items.reduce((acc, item) => {
acc[item] = (acc[item] ?? 0) + 1;
return acc;
}, {});

console.log(items);
// ["a", "b", "a"]

console.log(counts);
// { a: 2, b: 1 }

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# String Normalization

Transforming strings into a consistent, comparable format by applying deterministic rules.

1. Trimming (remove outer whitespace)

> Purpose: remove accidental leading/trailing spaces.

const raw = " hello ";
const trimmed = raw.trim();

console.log(trimmed); // "hello"

2. Case normalization (lowercase)

> Purpose: make comparisons case-insensitive.

const raw = "HeLLo";
const lower = raw.toLowerCase();

console.log(lower); // "hello"

3. Whitespace collapsing

> Purpose: treat multiple spaces as one.

const raw = "hello world again";
const collapsed = raw.replace(/\s+/g, " ");

console.log(collapsed); // "hello world again"

4. Separator normalization (spaces → hyphens)

> Purpose: URLs, slugs, IDs.

const raw = "hello world again";
const dashed = raw.replace(/\s+/g, "-");

console.log(dashed); // "hello-world-again"

5. Underscore normalization

> Purpose: collapse repeated separators.

const raw = "user**name\_**id";
const normalized = raw.replace(/_+/g, "_");

console.log(normalized); // "user_name_id"

6. Accent / diacritic removal (Unicode normalization)

> Purpose: make user input comparable across locales.

const raw = "João";
const ascii = raw
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "");

console.log(ascii); // "Joao"

7. Full normalization pipeline example

const raw = " João\_\_Silva ";

const normalized = raw
.trim()
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/\_+/g, "-");

console.log(normalized); // "joao-silva"

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Defensive Counting Logic

A pattern that increments or aggregates counts while guarding against invalid, missing, or unexpected values.

> Syntax: count = condition ? count + 1 : count

Key rules

- Always validate inputs before counting
- Define explicit defaults for absent values
- Avoid accidental NaN propagation
- Keep counting logic side-effect aware

> Example 1 — counting only valid numbers

const data = [1, 2, null, 2, "2", undefined];

const counts = data.reduce((acc, x) => {
if (typeof x !== "number") return acc;
return { ...acc, total: (acc.total ?? 0) + 1 };
}, {});

console.log(counts); // { total: 3 }

console.log(count); // 4

> Example 2 — defensive frequency map

const data = ["a", "b", "a", "", null, "b"];

const freq = data.reduce((acc, x) => {
if (!x) return acc;
return { ...acc, [x]: (acc[x] ?? 0) + 1 };
}, {});

console.log(freq); // { a: 2, b: 2 }

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Edge-Case Handling

A discipline of explicitly accounting for values that behave differently from the “normal” case during data transformation.

> Syntax: result = data.reduce((acc, item) => guardedNextAcc, initialAcc)

Key rules

- Never assume inputs are clean or consistent
- Handle falsy values intentionally (0, "", false)
- Guard against null, undefined, and type mismatches
- Make edge handling explicit in logic, not implicit

> Example 1 — handling 0 vs falsy

const data = [0, 1, 2];

const result = data.reduce((acc, x) => {
if (typeof x !== "number") return acc;
if (x === 0) return acc;
return acc + x;
}, 0);

console.log(result); // 3

> Example 2 — skipping null and undefined

const data = [1, null, 2, undefined, 3];

const result = data.reduce((acc, x) => {
if (x == null) return acc;
return acc + x;
}, 0);

console.log(result); // 6

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Immutability in Trandformations

A discipline of producing new data structures instead of modifying existing ones during transformations.

> Syntax: next = { ...prev, updatedKey: newValue }

Key rules

- Never mutate the input data
- Avoid mutating accumulators unless explicitly intended
- Prefer returning new objects/arrays
- Reference sharing must be intentional and visible

> Example 1 — immutable accumulator

const data = [1, 2, 2];

const result = data.reduce((acc, x) => {
return { ...acc, [x]: (acc[x] ?? 0) + 1 };
}, {});

console.log(result); // { 1: 1, 2: 2 }

> Example 2 — mutation vs immutability contrast

const data = [1, 2];

const a = data.reduce((acc, x) => {
acc[x] = x;
return acc;
}, {});

const b = data.reduce((acc, x) => {
return { ...acc, [x]: x };
}, {});

console.log(a); // { 1: 1, 2: 2 }
console.log(b); // { 1: 1, 2: 2 }

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# useState Basics

A React hook that stores component-local state and schedules re-renders when updated.

> Syntax: const [state, setState] = useState(initial)

Key rules

- State updates are asynchronous and batched
- Updating state replaces the value, it does not merge
- Reading state gives the value from the render that created it
- Setting state triggers a re-render

> Example 1 — basic state update

function Counter() {
const [count, setCount] = React.useState(0);
setCount(count + 1);
console.log(count); // 0
}

> Example 2 — multiple updates in one render

function Counter() {
const [count, setCount] = React.useState(0);
setCount(count + 1);
setCount(count + 1);
console.log(count); // 0
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Functional Updates

A state update form that computes the next state from the most recent committed state.

> Syntax: setState(prev => next)

Key rules

- Use when the next state depends on the previous state
- Multiple functional updates are applied in order
- Avoids stale closures
- Works correctly with batched updates

> Example 1 — avoiding stale state

function Counter() {
const [n, setN] = React.useState(0);
setN(prev => prev + 1);
setN(prev => prev + 1);
console.log(n); // 0
}

> Example 2 — value update vs functional update

function Counter() {
const [n, setN] = React.useState(0);
setN(n + 1);
setN(n + 1);
console.log(n); // 0
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Batching Behavior

React groups multiple state updates into a single re-render for performance.

> Mental Model:

setState(a)
setState(b)
→ one re-render

Key rules

- Updates in the same event are batched
- Functional updates are applied in order
- Batching does not change render-time snapshots
- One batch → one re-render

> Example 1 — batched value updates

function Example() {
const [n, setN] = React.useState(0);

function run() {
setN(1);
setN(2);
}

run();
console.log(n);
}
// 0

> Example 2 — batched functional updates

function Example() {
const [n, setN] = React.useState(0);

function run() {
setN(prev => prev + 1);
setN(prev => prev + 1);
}

run();
console.log(n);
}
// 0

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Derived vs Source State

A distinction between state that must be stored (source) and values that should be computed from it (derived).

> Syntax: derived = compute(source)

Key rules

- Store the minimum necessary state
- Do not store values that can be computed from existing state
- Derived values should be calculated during render
- Duplicated state causes inconsistencies and bugs

Example 1 — derived value during render

function Example() {
const [items, setItems] = React.useState([1, 2, 3]);
const count = items.length;
console.log(count);
}
// 3

Example 2 — duplicated state (anti-pattern)

function Example() {
const [items, setItems] = React.useState([1, 2, 3]);
const [count, setCount] = React.useState(3);
console.log(count);
}
// 3

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Resetting State Correctly

The practice of returning component state to a known baseline without relying on stale values or accidental side effects.

> Syntax: setState(initialValue)

Key rules

- Reset state by setting explicit values, not by “undoing”
- Prefer resetting from source of truth, not derived state
- Resetting state always schedules a new render
- Reset logic must not depend on current render snapshots unless intentional

> Example 1 — explicit reset

function Example() {
const [n, setN] = React.useState(5);
setN(0);
console.log(n);
}
// 5

> Example 2 — reset from source

function Example() {
const initial = 0;
const [n, setN] = React.useState(initial);
setN(initial);
console.log(n);
}
// 0

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Avoiding Stale Closures

The problem where a function “remembers” outdated state or props because it was created in an earlier render.

> Syntax: setState(prev => next)

Key rules

- Functions capture values from the render they were created in
- State updates do not retroactively update existing closures
- Functional updates avoid stale state reads
- Re-created functions get fresh state snapshots

> Example 1 — stale closure

function Example() {
const [n, setN] = React.useState(0);

function inc() {
setN(n + 1);
}

setN(5);
inc();
console.log(n);
}
// 0

> Example 2 — avoiding staleness

function Example() {
  const [n, setN] = React.useState(0);

  function inc() {
    setN(prev => prev + 1);
  }

  setN(5);
  inc();
  console.log(n);
}
// 0
