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

# Immutability in Transformations

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

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Passing Functions vs Calling Functions

The distinction between giving React a function to run later versus executing it immediately during render.

> Syntax: onClick={handler}

Key rules

 - Pass a function reference to event handlers
 - Calling a function executes it during render
 - Event handlers must be functions, not results
 - Calling during render can cause unintended side effects

> Example 1 — passing a function

function Example() {
  function handleClick() {
    console.log("clicked");
  }

  return <button onClick={handleClick} />;
}

// Output when clicked:
// clicked

> Example 2 — calling a function

function Example() {
  function handleClick() {
    console.log("clicked");
  }

  return <button onClick={handleClick()} />;
}

// Output during render:
// clicked

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Event Objects

An object React passes to event handlers containing information about the user interaction.

> Syntax: function handler(event) { ... }

Key rules

 - The event is provided as the first argument to the handler
 - Access data via properties on the event object
 - Do not assume the event exists unless a handler is invoked
 - Event handling does not change render-time state snapshots

Example 1 — reading from the event

function Example() {
  function handleClick(e) {
    console.log(e.type);
  }

  handleClick({ type: "click" });
}
// click

> Example 2 — event argument is not automatic

function Example() {
  function handleClick(e) {
    console.log(e);
  }

  handleClick();
}
// undefined

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Closures Inside Handlers

Event handlers capture variables from the render in which they were created, which can lead to stale values when state changes later.

>Syntax: handler = () => uses(renderSnapshot)

Key rules

 - Handlers close over render-time snapshots
 - State updates do not update existing closures
 - Functional updates read the latest state at update time
 - Re-rendering recreates handlers with fresh closures

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Preventing Default Behavior

Stopping the browser’s built-in action for an event so your handler controls what happens.
 
> Syntax: 

 function handler(e) {
  e.preventDefault()
}

Key rules

 - Default behavior is a browser action, not a React action
 - Call event.preventDefault() inside the handler
 - Preventing default does not stop React state updates by itself
 - Use it mainly with forms, links, and keyboard events

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Parameterized Handlers

A pattern for passing data into an event handler without executing it during render.

> Syntax: onClick={() => handler(param)}

Key rules

 - Event handlers must be functions, not function calls
 - Parameters are supplied by wrapping the handler in another function
 - Calling the handler during render causes immediate execution
 - Wrapped handlers are recreated on each render

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Shared Handlers Across Elements

Using one handler function for multiple elements, with behavior determined by data passed at call time.

> Syntax: onClick={(e) => handler(param, e)}

Key rules

 - A single handler can serve many elements
 - Data is supplied via parameters or event properties
 - Avoid creating many near-duplicate handlers
 - Beware of stale closures when the handler reads state

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# JSX as JavaScript Expressions

JSX is syntax that evaluates to JavaScript expressions producing React elements.

> Syntax: const element = <Component prop={expression} />

Key rules

 - JSX can appear anywhere a JavaScript expression is allowed
 - JSX must evaluate to a single value
 - Statements are not allowed directly inside JSX
 - Expressions are evaluated before rendering

> Example 1 — JSX assigned from expression

const value = 2 * 3;
const element = <span>{value}</span>;

console.log(value);
// 6

> Example 2 — JSX returned from function

function render(value) {
  return <div>{value + 1}</div>;
}

const result = render(4);

console.log(result.props.children);
// 5

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# `{}` Expression Rules

Curly braces in JSX delimit a JavaScript expression whose evaluated value is embedded into the JSX output.

> Syntax: <JSX>{expression}</JSX>

Key rules

 - Only expressions are allowed, not statements
 - The expression must resolve to a single value
 - undefined, null, and false render nothing
 - The expression is evaluated immediately during render

> Example 1 — valid expressions

const a = 2;
const b = 3;

const el = <div>{a * b}</div>;

console.log(el.props.children);
// 6

> Example 2 — expression returning nothing

const value = null;

const el = <span>{value}</span>;

console.log(el.props.children);
// null

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Expressions vs Statements in JSX

JSX accepts JavaScript expressions but rejects statements because it must evaluate to a value.

> Syntax: <JSX>{expression}</JSX>

Key rules

 - Statements do not return values
 - Expressions always resolve to a value
 - Control flow must be expressed via expressions, not keywords
 - Invalid JSX fails at compile time

> Example 1 — ternary expression

const flag = true;

const el = <div>{flag ? 1 : 2}</div>;

console.log(el.props.children);
// 1

> Example 2 — logical expression

const value = 0;

const el = <span>{value && 10}</span>;

console.log(el.props.children);
// 0

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Conditional Rendering Patterns

Conditional rendering uses JavaScript expressions to decide which JSX value is produced.

> Syntax: condition ? <A /> : <B />

Key rules

 - Conditions must be expressed as expressions
 - Logical operators return values, not booleans
 - Ternaries always return one of two values
 - Non-rendered values evaluate to null, false, or undefined

> Example 1 — logical AND rendering

const show = true;

const el = <div>{show && "OK"}</div>;

console.log(el.props.children);
// OK

> Example 2 — ternary rendering

const count = 0;

const el = <span>{count ? count : "empty"}</span>;

console.log(el.props.children);
// empty

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Rendering null, false, undefined

In JSX, null, false, and undefined are valid expression results that produce no rendered output.

> Syntax: <JSX>{expressionReturningNullish}</JSX>

Key rules

 - These values render nothing
 - They do not create DOM nodes
 - They can appear as children safely
 - Other falsy values like 0 and "" do render

> Example 1 — null does not render

const value = null;

const el = <div>{value}</div>;

console.log(el.props.children);
// null


> Example 2 — false does not render

const flag = false;

const el = <span>{flag && "X"}</span>;

console.log(el.props.children);
// false

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# JSX Fragments

JSX fragments let you return multiple JSX elements as a single expression without adding an extra DOM node.

> Syntax: 

<>
  <A />
  <B />
</>

Key rules

 - A fragment evaluates to one JSX value
 - Fragments do not render wrapper elements
 - Short syntax <>...</> cannot take props
 - Fragment content follows normal JSX expression rules

> Example 1 — fragment as single expression

const el = (
  <>
    <span>1</span>
    <span>2</span>
  </>
);

console.log(el.props.children.length);
// 2

> Example 2 — fragment returned from function

function render() {
  return (
    <>
      <div>A</div>
      <div>B</div>
    </>
  );
}

const result = render();

console.log(result.props.children[0].props.children);
// A

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Common JSX Mistakes

Frequent errors caused by misunderstanding how JSX expressions are evaluated and constrained.

> Syntax: <JSX>{expression}</JSX>

Key rules

 - Statements are not allowed inside JSX
 - Logical operators return values, not booleans
 - Falsy values like 0 still render
 - JSX evaluates expressions immediately, not reactively

> Example 1 — accidental rendering of 0

const count = 0;

const el = <div>{count && "A"}</div>;

console.log(el.props.children);
// 0

> Example 2 — expression evaluated once

let n = 0;

const first = <div>{n && n + 1}</div>;

n = 2;

console.log(first.props.children);
console.log(n);

const second = <div>{n > 1 && n - 1}</div>;

n = 0;

console.log(second.props.children);

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Function Components

A function component is a JavaScript function that returns a JSX expression or null.

> Syntax:

function Component(props) {
  return <JSX />
}

Key rules

 - Invoked by React, not manually
 - Receives props as a single argument
 - Must return JSX or null
 - Must be pure with respect to props

> Example 1 — function returns JSX

function Box(props) {
  return <div>{props.value}</div>;
}

const el = Box({ value: 3 });

console.log(el.props.children);
// 3

> Example 2 — function returns null

function Maybe(props) {
  return props.show ? <span>OK</span> : null;
}

const el = Maybe({ show: false });

console.log(el);
// null

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Props as Arguments

Props are plain JavaScript arguments passed into a function component when it is called.

> Syntax:

function Component(props) {
  return <JSX />
}

Key rules

 - Props are received as a single object
 - Passing props is equivalent to passing function arguments
 - Destructuring does not create copies
 - Props values are fixed for that invocation

> Example 1 — props as object argument

function Label(props) {
  return <span>{props.text}</span>;
}

const el = Label({ text: "A" });

console.log(el.props.children);
// A

> Example 2 — destructured props

function Add({ a, b }) {
  return <div>{a + b}</div>;
}

const el = Add({ a: 2, b: 3 });

console.log(el.props.children);
// 5

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Props Immutability 

Props immutability means a function component must treat its props as read-only inputs.

> Syntax:

function Component(props) {
  return <JSX />
}

Key rules

 - Props must not be reassigned or mutated
 - Object props share references
 - Mutating props causes side effects outside the component
 - React assumes props are immutable

Example 1 — immutable read

function Show(props) {
  return <span>{props.value}</span>;
}

const el = Show({ value: 5 });

console.log(el.props.children);
// 5

Example 2 — mutating object prop

function Bad(props) {
  props.obj.count++;
  return <div>{props.obj.count}</div>;
}

const data = { count: 1 };
const el = Bad({ obj: data });

console.log(el.props.children);
// 2

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Components Composition

Component composition is building components by combining other components through JSX.

> Syntax:

<Parent>
  <Child />
</Parent>

Key rules

 - Components are composed by nesting
 - Parent controls what children are rendered
 - Data flows top-down via props
 - Composition does not merge component state

> Example 1 — simple composition

function Child(props) {
  return <span>{props.value}</span>;
}

function Parent() {
  return <div><Child value={3} /></div>;
}

const el = Parent();

console.log(el.props.children.props.children.props.children);
// 3

> Example 2 — multiple children

function A() {
  return <i>A</i>;
}

function B() {
  return <b>B</b>;
}

function Wrap() {
  return (
    <div>
      <A />
      <B />
    </div>
  );
}

const el = Wrap();

console.log(el.props.children.length);
// 2

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Children Prop

children is a special prop that represents whatever is nested between a component’s opening and closing tags.

> Syntax:

function Component(props) {
  return <JSX>{props.children}</JSX>;
}

Key rules

 - children can be a value, an element, or an array
 - children is passed like any other prop
 - Parent controls the structure of children
 - Components must not mutate children

> Example 1 — single child

function Box(props) {
  return <div>{props.children}</div>;
}

const el = Box({ children: "A" });

console.log(el.props.children);
// A

> Example 2 — multiple children

function Wrap(props) {
  return <section>{props.children}</section>;
}

const el = Wrap({
  children: [
    <span key="1">X</span>,
    <span key="2">Y</span>
  ]
});

console.log(el.props.children.length);
// 2

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Component Re-Render Rules

Re-render rules define when a function component is executed again to produce new JSX.

> Syntax: 

Component(props) -> JSX

> Example 1 — new props trigger re-execution

function Show(props) {
  return <span>{props.value}</span>;
}

const a = Show({ value: 1 });
const b = Show({ value: 2 });

console.log(a.props.children);
// 1
console.log(b.props.children);
// 2

> Example 2 — same props still re-run

function Count(props) {
  return <div>{props.n}</div>;
}

const x = Count({ n: 3 });
const y = Count({ n: 3 });

console.log(x.props.children);
// 3
console.log(y.props.children);
// 3

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Controlled vs Uncontrolled Inputs

A controlled input is an input whose value is fully driven by React state and updated through events.

> Syntax: 

const [state, setState] = useState(initial)
<input value={state} onChange={e => setState(e.target.value)} />

Key rules

 - State is the single source of truth
 - onChange updates state, not variables
 - Every state update causes a re-render
 - Input value always reflects current state

> Example 1 — controlled input

function Field() {
  const [text, setText] = React.useState("");

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <span>{text}</span>
    </>
  );
}

// Initial render
text === ""

// After typing "a"
text === "a"

// After typing "ab"
text === "ab"

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Includes

Checks whether something exists inside something else and returns a boolean.

> Strings

"apple".includes("ap");    // true
"apple".includes("pp");    // true
"apple".includes("z");     // false

Rules:

 - Case-sensitive
 - Partial match
 - Returns true or false

"Apple".includes("ap");    // false
"Apple".toLowerCase().includes("ap"); // true

> Arrays

["a", "b", "c"].includes("b"); // true
["a", "b", "c"].includes("x"); // false

Rules:

 - Checks exact values
 - Uses strict equality (===)
 - No partial matching
 
[1, 2, 3].includes("1"); // false

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# .some

.some() checks whether at least one element in an array satisfies a condition. Returns boolean.

const cart = [
  { id: 1, qty: 2 },
  { id: 3, qty: 1 }
];

const product = { id: 3 };

const exists = cart.some(item => item.id === product.id); 

> Mechanically:

It iterates over the array from start to end.
For each element, it runs the provided test function.

If the test returns true for any element:
 - iteration stops immediately
 - .some() returns true
If no element passes the test:
 - .some() returns false

[1, 3, 5].some(n => n > 4)   // true
[1, 3, 5].some(n => n > 10)  // false

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# .find

 - Iterates over an array
 - Returns the first element that satisfies a condition
 - Stops immediately when it finds a match

> Syntax: array.find(element => condition)

const item = cart.find(i => i.id === targetId);

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# while Loop

Repeats a block of code
As long as a condition is true
The condition is checked before every iteration

> Syntax: 

while (condition) {
  // code
}

Something inside the loop must eventually make the condition false. If not → infinite loop.

> Example (simple counter)

let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# do…while Loop

 - Executes the loop body first
 - Checks the condition after the body runs
 - Therefore, it runs at least once, even if the condition is false

> Syntax:

do {
  // code
} while (condition);

> Key difference vs while

 - while	    before first run
 - do…while	  after first run

> Example (condition false at start)

let i = 3;

do {
  console.log(i);
  i--;
} while (i < 0);

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# for…of Loop

Iterates over values in an iterable.

> Syntax:

for (const value of iterable) {
  // code
}

> Example (array)

const arr = [10, 20, 30];

for (const n of arr) {
  console.log(n);
}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# for…in Loop

Iterates over keys of an object.

> Syntax:

for (const key in object) {
  // code
}

> Example (object)

const user = {
  name: "Ana",
  age: 30
};

for (const key in user) {
  console.log(key, user[key]);
}

// name Ana
// age 30

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Number() and parseInt()

> Number() — strict

Number("5")     // 5
Number("5.2")   // 5.2
Number("")      // 0
Number("abc")   // NaN

>parseInt() — forgiving

parseInt("5")      // 5
parseInt("5px")    // 5
parseInt("5.9")    // 5
parseInt("abc")    // NaN

Number("10px")   // NaN
parseInt("10px") // 10

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# .every()

Returns true if all elements satisfy a condition.
Returns false if any one fails.

> Syntax: 

array.every(item => condition)

> Examples:

[2, 4, 6].every(n => n % 2 === 0)   // true
[2, 3, 6].every(n => n % 2 === 0)   // false

> Edge case (important):

[].every(() => false) // true

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# .find()

Returns the first element that matches a condition.
Returns undefined if none match.

> Syntax: 

array.find(item => condition)

> Examples:

[1, 3, 5].find(n => n > 2)   // 3
[1, 3, 5].find(n => n > 10)  // undefined

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# .findIndex()

Returns the index of the first element that matches a condition.
Returns -1 if none match.

> Syntax: 

array.findIndex(item => condition)

> Examples:

[1, 3, 5].findIndex(n => n === 3)  // 1
[1, 3, 5].findIndex(n => n === 9)  // -1

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# .slice()

Returns a shallow copy of part (or all) of an array.
Does NOT mutate the original array.

> Syntax: 

array.slice(start, end)

> Examples:

[1, 2, 3].slice()        // [1, 2, 3]
[1, 2, 3].slice(1)       // [2, 3]
[1, 2, 3].slice(0, 2)    // [1, 2]

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# .concat()

Returns a new array by joining arrays or values.
Does not mutate the original array.

> Syntax: 

array.concat(valueOrArray)

> Examples:

[1, 2].concat(3)        // [1, 2, 3]
[1, 2].concat([3, 4])   // [1, 2, 3, 4]

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Array.isArray()

Checks if a value is an array.

> Examples:

Array.isArray([])        // true
Array.isArray({})        // false
Array.isArray("hi")      // false
Array.isArray(null)      // false

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Object.keys()

Returns an array of a given object’s own enumerable string-keyed property names.

 - Only includes own properties, not inherited ones
 - Ignores symbol keys
 - Order follows property insertion rules
 - Always returns a new array

> Example 1 — basic object

const obj = { a: 1, b: 2, c: 3 }

console.log(Object.keys(obj))

// ["a", "b", "c"]

> Example 2 — numeric-like keys ordering

const obj = {
  2: "b",
  1: "a",
  x: "c"
}

console.log(Object.keys(obj))

// ["1", "2", "x"]


> Example 3 — array input

const arr = ["a", "b", "c"]

console.log(Object.keys(arr))

// ["0", "1", "2"]

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Object.values()

Returns an array of a given object’s own enumerable string-keyed property values.

 - Only own enumerable properties are included
 - Order matches Object.keys() for the same object
 - Symbol-keyed properties are ignored
 - Always returns a new array

> Example 1 — plain object

const obj = { a: 1, b: 2 }

console.log(Object.values(obj))

// [1, 2]

> Example 2 — numeric-like keys ordering

const obj = { 2: "b", 1: "a", c: "x" }

console.log(Object.values(obj))

// ["a", "b", "x"]

> Example 3 — array as object

const arr = ["x", "y"]

console.log(Object.values(arr))

// ["x", "y"]

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Object.entries()

Returns an array of a given object’s own enumerable string-keyed property [key, value] pairs.

 - Only own enumerable properties are included
 - Order matches Object.keys() / Object.values()
 - Each entry is a two-item array
 - Always returns a new array

> Example 1 — plain object

const obj = { a: 1, b: 2 }

console.log(Object.entries(obj))

// [["a", 1], ["b", 2]]

> Example 2 — numeric-like keys ordering

const obj = { 2: "b", 1: "a", c: "x" }

console.log(Object.entries(obj))

// [["1", "a"], ["2", "b"], ["c", "x"]]

> Example 3 — array as object

const arr = ["x", "y"]

console.log(Object.entries(arr))

// [["0", "x"], ["1", "y"]]

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Shallow copy patterns ({ ...obj }, [...arr])

Creates a new object or array with copied top-level references from the original.

 - Only the first level is copied
 - Nested objects/arrays keep the same references
 - Original container is not mutated
 - Referential equality changes at the top level only

> Example 1 — object shallow copy

const original = { a: 1, b: 2 }
const copy = { ...original }

copy.a = 10

console.log(original)
console.log(copy)

// { a: 1, b: 2 }
// { a: 10, b: 2 }

> Example 2 — nested object reference

const original = { a: { x: 1 } }
const copy = { ...original }

copy.a.x = 99

console.log(original.a.x)
console.log(copy.a.x)

// 99
// 99

> Example 3 — array shallow copy

const original = [1, 2, 3]
const copy = [...original]

copy.push(4)

console.log(original)
console.log(copy)

// [1, 2, 3]
// [1, 2, 3, 4]

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Call Stack vs Task Queue

The call stack executes synchronous code immediately, while the task queue holds asynchronous callbacks waiting for the stack to become empty.

 - Only the call stack executes code
 - Tasks never run directly from the queue
 - The event loop moves tasks to the stack only when it is empty
 - Stack always has priority over the task queue

> Example 1 — synchronous stack first

console.log("A")

setTimeout(() => {
  console.log("B")
}, 0)

console.log("C")

// A
// C
// B

> Example 2 — blocking the stack

setTimeout(() => {
  console.log("timeout")
}, 0)

for (let i = 0; i < 1e7; i++) {}

console.log("done")

// done
// timeout

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Promise lifecycle

A Promise is an object that represents a future value that will settle exactly once.

A Promise has three possible states:

 - Pending
 - Fulfilled
 - Rejected

Once it leaves pending, it is immutable forever.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# async / await

This is syntax over Promises, not a new async model. Everything it does maps directly to the Promise lifecycle you just learned.

Declaring a function async means:

 - The function always returns a Promise
 - A returned value becomes a fulfilled Promise
 - A thrown error becomes a rejected Promise

So: 

async function f() {
  return 1
}

Is equivalent to:

function f() {
  return Promise.resolve(1)
}

And:

async function f() {
  throw new Error("fail")
}

Is equivalent to:

function f() {
  return Promise.reject(new Error("fail"))
}

Mechanics:

 - Pause the async function
 - Exit the call stack
 - Wait for the Promise to settle
 - Resume the function later with:
    - the fulfilled value, or
    - a thrown error if rejected

Important:

 - await does not block JavaScript
 - It only pauses this async function
 - Resumption happens as a microtask

> The hidden rewrite (critical)

This:

async function f() {
  const x = await p
  return x + 1
}

Is equivalent to:

function f() {
  return p.then(x => x + 1)
}

This equivalence explains:

 - error propagation
 - ordering
 - why try / catch works
 - why race conditions exist

Error handling with await

async function f() {
  try {
    const x = await p
    return x
  } catch (e) {
    return "fallback"
  }
}

Mechanics:

 - Rejected Promise → thrown error at await
 - try / catch works only because await unwraps the Promise

Without await, try / catch does nothing:

try {
  p.then(...)
} catch (e) {
  // never runs
}

async / await is Promise chaining with pauses, not parallelism or blocking.

Why this matters for React (preview)

 - Effects often contain async functions
 - Errors must be caught with try / catch
 - await yields control, enabling React scheduling
 - Race conditions appear when multiple awaits overlap

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Async Error Handling

 - Async errors live inside Promises, not in normal control flow.
 - try / catch only works with async code when you use await.
 - A rejected Promise is invisible until it is awaited or .catched.
 - Every Promise must be handled somewhere, or you get unhandled rejections.
 - In React effects, you catch errors and store them in state — you do not throw them.

Async errors don’t throw until you await them, and React can’t catch them for you.