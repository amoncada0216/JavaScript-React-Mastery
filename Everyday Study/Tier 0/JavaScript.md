# JavaScript Fundamentals

## 1. Mental Model

### What JavaScript is

JavaScript is a single-threaded, synchronous language that can handle asynchronous tasks through its runtime (browser or Node).

Single-threaded

- One call stack
- One thing executes at a time

Synchronous by default

- Code runs top to bottom
- Each line must finish before the next starts

Asynchronous behavior

- Delegated to the runtime (Web APIs or Node APIs)
- Coordinated by the event loop

---

### How code runs

1. Code is parsed
2. Execution contexts are created
3. Code runs line by line
4. Async work is deferred
5. Event loop schedules async callbacks later

---

### Execution context (high level)

Every time JavaScript runs code, it does so inside an execution context.

Main types:

- Global execution context
- Function execution context
- Eval execution context (ignore)

Each execution context contains:

- Variable environment
- Scope chain
- this value

---

### Call stack

- Stack is LIFO (last in, first out)
- Each function call is pushed
- When a function returns, it is popped

Example:

    function a() {
      b();
    }

    function b() {
      c();
    }

    function c() {
      console.log("done");
    }

    a();

Call stack order:

1. global
2. a()
3. b()
4. c()
5. pop c
6. pop b
7. pop a

---

### Synchronous vs asynchronous example

    console.log("A");

    setTimeout(() => {
      console.log("B");
    }, 0);

    console.log("C");

Output:

    A
    C
    B

Explanation:

- setTimeout is delegated to the runtime
- Callback is queued
- Call stack must be empty first

---

### Core rules to internalize

- JavaScript never pauses the call stack for async code
- Async does not mean parallel
- The call stack must be empty before async callbacks run
- Everything runs inside execution contexts

---

### One-sentence recall

JavaScript runs synchronously on a single call stack, while async tasks are handled by the runtime and scheduled later by the event loop.

---

### Daily self-check

- Can you explain the call stack without examples?
- Can you explain why setTimeout with zero delay is not immediate?
- Can you explain what an execution context contains?

---

## 2. Core Types

### The two categories

JavaScript values fall into **two fundamental categories**:

- Primitives (copied by value)
- Reference types (copied by reference)

This distinction explains most bugs.

---

### Primitive types

Primitives are **immutable** and **copied by value**.

Types:

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

Example (copied by value):

    let a = 10;
    let b = a;

    b = 20;

    console.log(a); // 10
    console.log(b); // 20

Why:

- `a` and `b` hold independent values
- Changing one does not affect the other

Immutability example:

    let s = "hello";
    s[0] = "H";

    console.log(s); // "hello"

Strings cannot be mutated. A new value must be created.

---

### Reference types

Reference types are **mutable** and **copied by reference**.

Types:

- object
- array
- function

Example (copied by reference):

    let obj1 = { x: 1 };
    let obj2 = obj1;

    obj2.x = 2;

    console.log(obj1.x); // 2
    console.log(obj2.x); // 2

Why:

- Both variables point to the same object in memory

Array example:

    let arr1 = [1, 2, 3];
    let arr2 = arr1;

    arr2.push(4);

    console.log(arr1); // [1, 2, 3, 4]

---

### Comparing values

Primitive comparison:

    5 === 5        // true
    "a" === "a"    // true

Reference comparison:

    {} === {}      // false
    [] === []      // false

Why:

- Different memory references, even if contents match

Same reference:

    let a = {};
    let b = a;

    a === b        // true

---

### Passing to functions

Primitives:

    function increment(x) {
      x = x + 1;
    }

    let n = 5;
    increment(n);

    console.log(n); // 5

Objects:

    function increment(obj) {
      obj.x = obj.x + 1;
    }

    let data = { x: 5 };
    increment(data);

    console.log(data.x); // 6

Rule:

- The reference is copied, not the object
- Mutations affect the original

---

### Common mistake

Assuming assignment creates a copy:

    let user = { name: "A" };
    let copy = user;

    copy.name = "B";

    console.log(user.name); // "B"

To copy instead:

    let copy = { ...user };

---

### Core rules to internalize

- Primitives are copied by value
- Objects are copied by reference
- Equality checks references for objects
- Mutating a shared object affects all references

---

### One-sentence recall

Primitives store values directly, while objects store references to values in memory.

---

### Daily self-check

- Can you explain why {} === {} is false?
- Can you explain why changing one object affects another?
- Can you explain what “copied by reference” means without examples?

---

## 3. Variables & Scope

### Variables in JavaScript

Variables are **bindings to values**, not containers.

Three ways to declare:

- var
- let
- const

---

### var

- Function-scoped
- Hoisted and initialized as undefined
- Can be redeclared
- Should be avoided

Example:

    console.log(a); // undefined
    var a = 10;

    var a = 20;     // allowed

Why:

- var is hoisted and initialized during creation phase

Scope behavior:

    function test() {
      if (true) {
        var x = 1;
      }
      console.log(x); // 1
    }

    test();

---

### let

- Block-scoped
- Hoisted but uninitialized
- Exists in the Temporal Dead Zone (TDZ)
- Reassignment allowed

Example:

    console.log(a); // ReferenceError
    let a = 10;

Block scope:

    if (true) {
      let x = 1;
    }

    console.log(x); // ReferenceError

---

### const

- Block-scoped
- Must be initialized
- Cannot be reassigned
- Value can still mutate if reference type

Example:

    const x = 10;
    x = 20; // TypeError

Object mutation:

    const obj = { a: 1 };
    obj.a = 2; // allowed

---

### Scope types

JavaScript has **lexical scope**.

Scopes:

- Global scope
- Function scope
- Block scope

Scope chain:

- Inner scope can access outer scope
- Outer scope cannot access inner scope

Example:

    let a = 1;

    function outer() {
      let b = 2;

      function inner() {
        let c = 3;
        console.log(a, b, c); // 1 2 3
      }

      inner();
      console.log(c); // ReferenceError
    }

    outer();

---

### Hoisting (precise meaning)

Hoisting means:

- Declarations are processed before execution
- Initialization stays in place

Summary:

- var → hoisted + initialized
- let / const → hoisted, not initialized
- functions → hoisted fully

---

### Common mistakes

- Using var inside blocks
- Accessing let/const before declaration
- Thinking const makes values immutable

---

### Core rules to internalize

- Prefer const by default
- Use let when reassignment is needed
- Avoid var
- Scope is determined at write-time, not run-time

---

### One-sentence recall

JavaScript uses lexical scoping where variables are resolved by their position in the source code.

---

### Daily self-check

- Can you explain the TDZ?
- Can you explain why var leaks out of blocks?
- Can you explain why const objects can mutate?

---

## 4. Execution Context

### What an execution context is

An execution context is the environment where JavaScript code is evaluated and executed.

Think of it as a “wrapper” that holds everything the engine needs to run code.

---

### Types of execution contexts

- Global execution context (created first)
- Function execution context (created per function call)
- Eval execution context (ignore)

There is only **one global**, but **many function contexts**.

---

### Lifecycle of an execution context

Each execution context has **two phases**.

1. Creation phase
2. Execution phase

---

### Creation phase (what happens first)

Before any code runs:

- Memory space is allocated
- Variables are registered
- Functions are fully stored
- `this` is determined

Example:

    console.log(x);
    foo();

    var x = 10;

    function foo() {
      console.log("hello");
    }

During creation:

- `x` exists and is `undefined`
- `foo` exists and points to the function
- Code has not executed yet

---

### Execution phase

Now the code runs line by line.

- Variables get assigned actual values
- Functions execute when invoked

From the same example:

- `console.log(x)` → undefined
- `foo()` → logs "hello"
- `x = 10` assigns the value

---

### Function execution contexts

Each function call creates:

- Its own variable environment
- Its own scope
- Its own `this`
- Its own place on the call stack

Example:

    function multiply(a, b) {
      return a * b;
    }

    multiply(2, 3);
    multiply(4, 5);

Two separate execution contexts are created and destroyed.

---

### Execution context vs scope

They are related but not the same.

- Scope is static (defined by code structure)
- Execution context is dynamic (created at runtime)

Scope answers:

- Where can I access this variable?

Execution context answers:

- What is running right now?

---

### Global execution context

Created when the program starts.

Contains:

- Global object (`window` in browser, `global` in Node)
- Global variables
- Global `this`

In strict mode:

- `this` is undefined

---

### Core rules to internalize

- Code runs inside execution contexts
- Execution contexts are created and destroyed dynamically
- Creation phase explains hoisting
- Execution phase explains runtime behavior

---

### One-sentence recall

An execution context is the runtime environment where JavaScript code is created and executed in two phases.

---

### Daily self-check

- Can you explain the two phases without examples?
- Can you explain why functions are available before execution?
- Can you explain the difference between scope and execution context?

---

## 5. The `this` Keyword

### Core rule

`this` is determined by **how a function is called**, not where it is written.

Do not think of `this` as lexical.  
Think of it as **call-site dependent**.

---

### Global context

In the global execution context:

Non-strict mode (browser):

    console.log(this); // window

Strict mode:

    console.log(this); // undefined

---

### Function call

Regular function call:

    function show() {
      console.log(this);
    }

    show();

Result:

- Non-strict → global object
- Strict → undefined

---

### Method call

When a function is called as a method, `this` is the object before the dot.

    const user = {
      name: "A",
      sayName() {
        console.log(this.name);
      }
    };

    user.sayName(); // "A"

Call-site matters:

    const fn = user.sayName;
    fn(); // undefined (or error in strict mode)

---

### Constructor call (`new`)

When a function is called with `new`:

- A new object is created
- `this` points to that object

  function User(name) {
  this.name = name;
  }

  const u = new User("A");
  console.log(u.name); // "A"

---

### Arrow functions

Arrow functions **do not have their own `this`**.

They inherit `this` from the surrounding scope.

    const user = {
      name: "A",
      sayName: () => {
        console.log(this.name);
      }
    };

    user.sayName(); // undefined

Correct usage:

    const user = {
      name: "A",
      sayName() {
        const inner = () => {
          console.log(this.name);
        };
        inner();
      }
    };

    user.sayName(); // "A"

---

### Explicit binding

You can manually set `this`.

    function show() {
      console.log(this.name);
    }

    const obj = { name: "A" };

    show.call(obj);   // "A"
    show.apply(obj); // "A"

Binding once:

    const bound = show.bind(obj);
    bound(); // "A"

---

### Common mistakes

- Using arrow functions as object methods
- Losing `this` by extracting methods
- Assuming `this` refers to the function itself

---

### Core rules to internalize

- `this` is dynamic
- Call-site determines `this`
- Arrow functions capture `this`
- `bind` fixes `this` permanently

---

### One-sentence recall

The value of `this` is determined by how a function is invoked, not where it is defined.

---

### Daily self-check

- Can you determine `this` without running code?
- Can you explain why arrow functions break object methods?
- Can you explain bind vs call?

---

## 6. Functions

### What a function is

A function is a reusable block of code that:

- Accepts input (parameters)
- Performs actions
- Returns a value (explicitly or implicitly)

Functions are **first-class citizens**:

- Stored in variables
- Passed as arguments
- Returned from other functions

---

### Function declaration

- Fully hoisted
- Can be called before definition

  function add(a, b) {
  return a + b;
  }

  add(2, 3); // 5

---

### Function expression

- Not hoisted
- Stored in a variable

  const add = function (a, b) {
  return a + b;
  };

  add(2, 3); // 5

---

### Arrow functions

Arrow functions are a shorter syntax with different behavior.

    const add = (a, b) => {
      return a + b;
    };

Implicit return:

    const add = (a, b) => a + b;

Differences:

- No `this`
- No `arguments`
- Cannot be used with `new`

---

### Parameters vs arguments

Parameters: variables in function definition  
Arguments: actual values passed in

    function greet(name) {
      console.log(name);
    }

    greet("A");

---

### Return behavior

- `return` exits the function immediately
- Without return → `undefined`

  function test() {}
  test(); // undefined

---

### Pure vs impure functions

Pure function:

- No side effects
- Same input → same output

  function double(x) {
  return x \* 2;
  }

Impure function:

    let count = 0;

    function increment() {
      count++;
    }

---

### Default parameters

    function greet(name = "Guest") {
      console.log(name);
    }

    greet(); // "Guest"

---

### Rest parameters

    function sum(...nums) {
      return nums.reduce((a, b) => a + b, 0);
    }

---

### Higher-order functions

A function that:

- Accepts a function
- Returns a function
- Or both

  function repeat(fn) {
  fn();
  fn();
  }

---

### Common mistakes

- Forgetting return
- Using arrow functions incorrectly with `this`
- Mutating external state unintentionally

---

### Core rules to internalize

- Functions are values
- Declarations are hoisted
- Arrow functions change `this`
- Return matters

---

### One-sentence recall

Functions are first-class values that encapsulate behavior and optionally return results.

---

### Daily self-check

- Can you explain hoisting differences?
- Can you explain pure vs impure?
- Can you explain why arrow functions lack `this`?

---

## 7. Control Flow

### What control flow is

Control flow determines **which code runs, when, and how many times**.

By default, JavaScript runs top to bottom.
Control statements change that order.

---

### Conditional statements

#### if / else

    const x = 10;

    if (x > 5) {
      console.log("big");
    } else {
      console.log("small");
    }

#### else if

    if (x > 10) {
      console.log("large");
    } else if (x > 5) {
      console.log("medium");
    } else {
      console.log("small");
    }

---

### Truthy and falsy

Falsy values (memorize):

- false
- 0
- -0
- 0n
- ""
- null
- undefined
- NaN

Everything else is truthy.

Example:
if (" ") {
console.log("runs");
}

---

### switch

Used when comparing the same value.

    const day = 1;

    switch (day) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      default:
        console.log("Other");
    }

Without `break`, execution falls through.

---

### Loops

#### for loop

    for (let i = 0; i < 3; i++) {
      console.log(i);
    }

#### while loop

    let i = 0;

    while (i < 3) {
      console.log(i);
      i++;
    }

#### do...while

    let i = 0;

    do {
      console.log(i);
      i++;
    } while (i < 3);

Runs at least once.

---

### break and continue

    for (let i = 0; i < 5; i++) {
      if (i === 2) continue;
      if (i === 4) break;
      console.log(i);
    }

---

### Common mistakes

- Forgetting break in switch
- Infinite loops
- Using complex conditions instead of early returns

---

### Core rules to internalize

- Conditions rely on truthy/falsy
- break stops loops
- continue skips iteration
- switch compares strictly

---

### One-sentence recall

Control flow statements determine how and when code execution branches or repeats.

---

### Daily self-check

- Can you list all falsy values?
- Can you explain switch fallthrough?
- Can you rewrite loops using early returns?

---

## 8. Operators

### What operators do

Operators manipulate values and produce a result.

Some operators return **values**, not booleans.

---

### Arithmetic operators

    +   -   *   /   %
    **

Example:
5 % 2 // 1
2 \*\* 3 // 8

---

### Assignment operators

    =   +=   -=   *=   /=

Example:
let x = 5;
x += 2; // 7

---

### Comparison operators

Always prefer **strict comparison**.

    ===   !==
    >     >=
    <     <=

Examples:
5 === 5 // true
5 === "5" // false
5 == "5" // true (avoid)

---

### Logical operators

Logical operators return the **actual value**, not true/false.

#### AND (&&)

Returns the first falsy value or the last value.

    0 && "a"     // 0
    "a" && "b"   // "b"

#### OR (||)

Returns the first truthy value.

    "" || "a"    // "a"
    "a" || "b"   // "a"

#### Nullish coalescing (??)

Only checks null or undefined.

    0 ?? 10      // 0
    null ?? 10   // 10

---

### Short-circuiting

Evaluation stops as soon as the result is known.

    isLoggedIn && showDashboard();

---

### Unary operators

    typeof
    !
    +   -

Examples:
typeof 5 // "number"
!true // false
+"10" // 10

---

### Ternary operator

    condition ? a : b

Example:
const status = isOnline ? "on" : "off";

---

### Operator precedence

Some operators execute before others.

Example:
2 + 3 \* 4 // 14

Use parentheses to be explicit.

---

### Common mistakes

- Using == instead of ===
- Misunderstanding || vs ??
- Forgetting logical operators return values

---

### Core rules to internalize

- === avoids coercion
- Logical operators return values
- ?? ignores falsy except null/undefined
- Parentheses clarify intent

---

### One-sentence recall

Operators transform values and follow strict precedence rules that affect evaluation order.

---

### Daily self-check

- Can you explain the difference between || and ???
- Can you predict && results without running code?
- Can you explain why == is dangerous?

---

## 9. Objects

### What an object is

An object is a collection of **key–value pairs**.

Keys are strings (or symbols).  
Values can be any type.

---

### Creating objects

Object literal:

    const user = {
      name: "A",
      age: 30
    };

Constructor:

    const user = new Object();

---

### Accessing properties

Dot notation:

    user.name;

Bracket notation:

    user["name"];

Bracket notation is required when:

- Property name has spaces
- Property name is dynamic

  const key = "age";
  user[key];

---

### Adding, updating, deleting

    user.city = "NY";
    user.age = 31;
    delete user.city;

---

### Methods

Functions stored on objects.

    const user = {
      name: "A",
      greet() {
        console.log("hi " + this.name);
      }
    };

    user.greet();

---

### Objects and references

Objects are copied by reference.

    const a = { x: 1 };
    const b = a;

    b.x = 2;

    a.x; // 2

---

### Destructuring

Extract properties into variables.

    const user = { name: "A", age: 30 };

    const { name, age } = user;

Rename:

    const { name: username } = user;

Default value:

    const { city = "NA" } = user;

---

### Spread operator

Creates a shallow copy.

    const user2 = { ...user };

Override:

    const user3 = { ...user, age: 40 };

---

### Property existence

    "name" in user;
    user.hasOwnProperty("name");

---

### Object iteration

    for (const key in user) {
      console.log(key, user[key]);
    }

---

### Common mistakes

- Assuming spread creates deep copy
- Losing this inside methods
- Mutating shared objects

---

### Core rules to internalize

- Objects are reference types
- Spread is shallow
- Methods depend on call-site
- Keys are strings

---

### One-sentence recall

Objects store related data and behavior using key–value pairs accessed by reference.

---

### Daily self-check

- Can you explain shallow vs deep copy?
- Can you explain when bracket notation is required?
- Can you explain why mutating one object affects another?

---

## 10. Arrays

### What an array is

An array is an ordered list of values.

Arrays are:

- Zero-indexed
- Mutable
- Reference types

---

### Creating arrays

    const nums = [1, 2, 3];
    const empty = [];

---

### Accessing elements

    nums[0]; // 1
    nums[nums.length - 1]; // last element

---

### Mutating arrays

    nums.push(4);    // add end
    nums.pop();      // remove end
    nums.unshift(0); // add start
    nums.shift();    // remove start

---

### Iteration

    for (let i = 0; i < nums.length; i++) {
      console.log(nums[i]);
    }

    for (const n of nums) {
      console.log(n);
    }

---

### map

Transforms each element and returns a new array.

    const doubled = nums.map(n => n * 2);

---

### filter

Selects elements that match a condition.

    const evens = nums.filter(n => n % 2 === 0);

---

### reduce

Accumulates values into a single result.

    const sum = nums.reduce((total, n) => total + n, 0);

---

### Chaining

    const result = nums
      .filter(n => n > 1)
      .map(n => n * 2);

---

### slice vs splice

slice (non-mutating):

    nums.slice(1, 3);

splice (mutating):

    nums.splice(1, 1);

---

### Common mistakes

- Forgetting return in map
- Mutating when expecting a copy
- Using forEach when a value is needed

---

### Core rules to internalize

- Arrays are objects
- map/filter/reduce return new arrays
- splice mutates, slice does not
- Length is dynamic

---

### One-sentence recall

Arrays store ordered collections and provide higher-order methods for transformation.

---

### Daily self-check

- Can you explain map vs forEach?
- Can you explain slice vs splice?
- Can you write reduce from memory?

---

## 11. Asynchronous JavaScript

### What async means in JavaScript

Asynchronous code allows long-running tasks to start now and finish later,
without blocking the main thread.

Important:

- JavaScript itself is synchronous
- Async behavior is provided by the runtime

---

### The pieces involved

- Call stack (executes code)
- Web APIs / Node APIs (handle async work)
- Task queue (macrotasks)
- Microtask queue (promises)
- Event loop (orchestrates)

---

### Call stack rule

Only synchronous code runs on the call stack.
Async callbacks run **only after** the stack is empty.

---

### setTimeout example

    console.log("A");

    setTimeout(() => {
      console.log("B");
    }, 0);

    console.log("C");

Output:

    A
    C
    B

Why:

- setTimeout callback goes to task queue
- Call stack must finish first

---

### Promises

A Promise represents a value that will exist in the future.

States:

- pending
- fulfilled
- rejected

Example:

    const p = new Promise((resolve, reject) => {
      resolve(10);
    });

    p.then(value => {
      console.log(value);
    });

---

### Microtasks vs macrotasks

Microtasks run **before** macrotasks.

Example:

    setTimeout(() => {
      console.log("timeout");
    }, 0);

    Promise.resolve().then(() => {
      console.log("promise");
    });

Output:

    promise
    timeout

---

### async / await

Syntax sugar over Promises.

    async function getData() {
      const result = await Promise.resolve(5);
      return result;
    }

    getData().then(console.log); // 5

Rules:

- await pauses the function, not the program
- async functions always return a Promise

---

### Error handling with async

Use try/catch with await.

    async function load() {
      try {
        await Promise.reject("error");
      } catch (e) {
        console.log(e);
      }
    }

---

### Common mistakes

- Thinking async means parallel
- Forgetting await
- Mixing callbacks and promises
- Not handling rejected promises

---

### Core rules to internalize

- Call stack always runs first
- Promises use microtask queue
- setTimeout uses task queue
- await pauses only the async function

---

### One-sentence recall

Asynchronous JavaScript defers work to the runtime and schedules callbacks through the event loop.

---

### Daily self-check

- Can you explain microtasks vs macrotasks?
- Can you predict promise vs setTimeout order?
- Can you explain what await actually pauses?

---

## 12. Error Handling

### What an error is

An error is a runtime event that interrupts normal execution.

Errors occur when JavaScript cannot proceed safely.

---

### Types of errors

- SyntaxError (parse time)
- ReferenceError (invalid variable access)
- TypeError (invalid operation)
- Custom errors (thrown manually)

---

### try / catch

Used to handle **runtime errors only**.

    try {
      const x = y + 1;
    } catch (err) {
      console.log(err.message);
    }

If no error occurs, catch is skipped.

---

### finally

Always runs, whether an error occurred or not.

    try {
      console.log("try");
    } catch (e) {
      console.log("catch");
    } finally {
      console.log("finally");
    }

---

### Throwing errors

You can create errors intentionally.

    function withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Invalid amount");
      }
    }

---

### Error propagation

Errors bubble up the call stack until caught.

    function a() {
      b();
    }

    function b() {
      throw new Error("fail");
    }

    a(); // uncaught if not wrapped in try/catch

---

### Async error handling

With promises:

    Promise.reject("fail")
      .catch(err => console.log(err));

With async/await:

    async function run() {
      try {
        await Promise.reject("fail");
      } catch (e) {
        console.log(e);
      }
    }

---

### What try/catch cannot do

- Cannot catch syntax errors
- Cannot catch async errors without await or .catch

---

### Common mistakes

- Catching errors and doing nothing
- Throwing strings instead of Error objects
- Assuming try/catch works across async boundaries

---

### Core rules to internalize

- try/catch handles runtime errors
- Errors propagate upward
- async errors require await or .catch
- Fail fast, fail clearly

---

### One-sentence recall

Error handling allows programs to recover or fail gracefully when runtime issues occur.

---

### Daily self-check

- Can you explain error bubbling?
- Can you explain why try/catch fails without await?
- Can you explain when to throw errors?

---

## 13. Common Pitfalls

### Reference vs value confusion

Mistake:
Assuming assignment creates a copy.

    const a = { x: 1 };
    const b = a;
    b.x = 2;

    console.log(a.x); // 2

Why it happens:

- Objects are copied by reference

Correction:
const b = { ...a };

---

### Accidental mutation

Mistake:
Mutating shared state unintentionally.

    function addItem(arr) {
      arr.push(4);
    }

Why it happens:

- Arrays and objects are mutable

Correction:
function addItem(arr) {
return [...arr, 4];
}

---

### Forgetting return

Mistake:
Using map without returning a value.

    const nums = [1, 2, 3];

    const doubled = nums.map(n => {
      n * 2;
    });

Result:

- doubled = [undefined, undefined, undefined]

Correction:
const doubled = nums.map(n => n \* 2);

---

### Misunderstanding `this`

Mistake:
Using arrow functions as methods.

    const user = {
      name: "A",
      say() {
        setTimeout(() => {
          console.log(this.name);
        }, 0);
      }
    };

Correct here, but broken if arrow is the method itself.

Rule:

- Arrow functions inherit `this`
- Methods need dynamic `this`

---

### Using == instead of ===

Mistake:
0 == false // true

Why it happens:

- Type coercion

Correction:
Always use === unless coercion is explicitly desired.

---

### Assuming async is parallel

Mistake:
Thinking async code runs at the same time.

Reality:

- JavaScript executes one thing at a time
- Async tasks are scheduled, not parallelized

---

### Overusing try/catch

Mistake:
Wrapping everything in try/catch.

Why it's bad:

- Hides bugs
- Makes debugging harder

Rule:

- Catch where you can recover
- Let crashes happen otherwise

---

### Core rules to internalize

- Objects are shared by default
- Mutation spreads silently
- map must return
- this depends on call-site
- Async does not mean parallel

---

### One-sentence recall

Most JavaScript bugs come from misunderstanding references, mutation, this, or async behavior.

---

### Daily self-check

- Can you spot mutation instantly?
- Can you predict this without running code?
- Can you tell if async code is ordered correctly?

---

## 14. Daily Practice

### Purpose

This section is reviewed **every day** to force recall, not recognition.

Answer out loud or on paper.  
Do not run code unless stuck.

---

### Mental model recall

- Explain the call stack in one sentence
- Explain why JavaScript is single-threaded
- Explain what the event loop does

---

### Types & memory

- Explain value vs reference without examples
- Explain why objects mutate across variables
- Explain why {} === {} is false

---

### Variables & scope

- Explain hoisting in one sentence
- Explain the Temporal Dead Zone
- Explain why var leaks out of blocks

---

### Execution context

- Name the two phases
- Explain what exists before execution
- Explain the difference between scope and execution context

---

### this keyword

- Determine this without running code
- Explain arrow function this
- Explain bind vs call vs apply

---

### Functions

- Explain hoisting differences
- Explain pure vs impure functions
- Explain why forgetting return breaks map

---

### Control flow

- List all falsy values
- Explain switch fallthrough
- Explain break vs continue

---

### Operators

- Explain || vs ??
- Explain short-circuiting
- Explain operator precedence

---

### Objects

- Explain shallow vs deep copy
- Explain when to use bracket notation
- Explain why mutating one object affects another

---

### Arrays

- Explain map vs forEach
- Explain slice vs splice
- Write reduce from memory

---

### Async JavaScript

- Predict promise vs setTimeout order
- Explain what await pauses
- Explain microtasks vs macrotasks

---

### Error handling

- Explain error propagation
- Explain try/catch limitations
- Explain async error handling

---

### Pitfall detection

- Spot hidden mutation
- Spot incorrect this
- Spot missing await

---

### Final rule

If you cannot explain it in one sentence,
you do not understand it yet.

Review daily until explanations are automatic.
