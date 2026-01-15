+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Definitions

> Type coercion is the automatic or implicit conversion of values from one data type to another (e.g., from string to number). This happens when the language expects a specific data type for an operation but receives a different one, and attempts to make the operation work without throwing an error. 

> A method is a function that is stored as a property on an object and is called through that object.

> A handler is a function whose purpose is to be called later in response to something else
(an event, a callback, a condition, a loop, a framework trigger).

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

1 === 1               // true
1 === "1"             // false
false === 0           // false
null === undefined    // false

Use this by default.

> == (loose equality)

Allows type coercion before comparing

JavaScript tries to make both sides the same type.

1 == "1"            // true
false == 0          // true
"" == 0             // true
null == undefined   // true

This is why it’s dangerous.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Operators && || ??

&& (AND) — “return the first falsy, otherwise the last”
|| (OR) — “return the first truthy, otherwise the last”
?? (Nullish coalescing) — “fallback ONLY on null or undefined”

true && "hello"     // "hello" ✅
false && "hello"   // false   ✅  

0 || 10     // 10   ❌ (falsy)
0 ?? 10     // 0    ✅ (valid value)

"" || "x"  // "x"  ❌
"" ?? "x"  // ""   ✅

false || true // true ❌
false ?? true // false ✅

"" || "Unknown"     // "Unknown" ❌
0 || "Unknown"      // "Unknown" ❌
false || "Unknown"  // "Unknown" ❌

"" ?? "Unknown"     // "" ✅
0 ?? "Unknown"      // 0 ✅
false ?? "Unknown"  // false ✅
null ?? "Unknown"   // "Unknown" ✅
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
  return x * 2;
}

const result = apply(double, 5);

console.log(result); // 10

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Pure Functions

A pure function is a function where:

 1. The output depends only on its inputs
 2. It does not change anything outside itself

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
  return price * tax;
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

greet("Ana");     // "Ana"
greet();          // "Guest"

No argument → name === undefined → default used.

> Example 2:

function show(count = 10) {
  return count;
}

show(0);          // 0
show(null);       // null
show(undefined);  // 10

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

Example 1 — basic transform

