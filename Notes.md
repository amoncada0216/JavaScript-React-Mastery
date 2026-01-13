+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Definitions

> Type coercion is the automatic or implicit conversion of values from one data type to another (e.g., from string to number). This happens when the language expects a specific data type for an operation but receives a different one, and attempts to make the operation work without throwing an error. 

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

Only function declarations are hoisted and callable before definition. Everything else is not.

// ✅ works

sayHi();

function sayHi() {}

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Function Expression

// ❌ ReferenceError

sayHi();

const sayHi = function () {};

// ❌ ReferenceError

sayHi();

const sayHi = () => {};

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


