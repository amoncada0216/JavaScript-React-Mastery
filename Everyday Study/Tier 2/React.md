# React Fundamentals

## 1. React Mental Model

### What React is

React is a **declarative UI library**.

You do not tell React _how_ to update the UI.  
You tell React _what the UI should look like for a given state_.

React handles the rest.

---

### Core idea

UI = f(state)

When state changes:

- React re-runs your component
- React compares the result
- React updates the real DOM efficiently

You never manually update the DOM.

---

### Declarative vs imperative

Imperative (what you do in vanilla JS):

- Select element
- Change text
- Add/remove classes
- Manually keep UI in sync

Declarative (React):

- Describe UI once
- Change state
- UI updates automatically

You manage **state**, not **DOM mutations**.

---

### Components

A component is a **function that returns UI**.

Key properties:

- Pure with respect to props and state
- Can be re-run many times
- Must not cause side effects during render

Mental shift:
A component is **not** called once.
It is re-executed whenever React decides.

---

### Render ≠ Commit

React work happens in two conceptual steps:

Render phase:

- React calls components
- Builds a virtual UI description
- Must be pure (no side effects)

Commit phase:

- React applies changes to the DOM
- Effects run after this

Render can happen multiple times.
Commit happens only when needed.

---

### Re-rendering

A re-render means:

- The component function runs again

It does NOT mean:

- DOM is fully rebuilt
- Page reloads

Triggers:

- State change
- Props change
- Parent re-render

---

### Virtual DOM (correct mental model)

Virtual DOM is:

- A lightweight description of UI
- Used for comparison, not rendering

React compares:

- Previous virtual tree
- New virtual tree

Then updates only what changed.

---

### One-way data flow

Data flows:

- Parent → Child

Children:

- Cannot modify parent state directly
- Must communicate via callbacks

This constraint is intentional.

---

### What React optimizes

React optimizes:

- DOM updates
- Scheduling
- Batching state changes

React does NOT optimize:

- Bad state design
- Unnecessary re-renders
- Expensive calculations in render

---

### Core rules to internalize

- You describe UI, React executes updates
- Components re-run often
- Rendering must be pure
- State drives everything
- DOM is an implementation detail

---

### One-sentence recall

React is a declarative system where UI is a pure function of state, and React controls when and how updates occur.

---

### Daily self-check

- Can you explain why components re-run?
- Can you explain render vs commit?
- Can you explain why DOM manipulation is forbidden?

---

## 2. Components & JSX

### What a component is

A React component is a **function that returns a UI description**.

It is not:

- A class instance
- A DOM element
- A one-time execution

It is:

- A function that React may run many times

---

### Component example

    function Greeting() {
      return <h1>Hello</h1>;
    }

Rules:

- Component names must be capitalized
- Must return JSX (or null)

---

### JSX (what it really is)

JSX is **syntax sugar** for JavaScript function calls.

This:

    <h1>Hello</h1>

Becomes:

    React.createElement("h1", null, "Hello");

JSX is not HTML.

---

### Embedding JavaScript in JSX

Use curly braces.

    function Greeting() {
      const name = "A";
      return <h1>Hello {name}</h1>;
    }

Inside `{}` you can use:

- Expressions
- Function calls
- Ternaries

Not allowed:

- if statements
- loops (directly)

---

### JSX expressions vs statements

Valid:

    {count + 1}
    {isLoggedIn ? "Yes" : "No"}

Invalid:

    {if (x) {}}
    {for (...) {}}

---

### Returning multiple elements

You must return a **single root**.

Use a wrapper:

    return (
      <div>
        <h1 />
        <p />
      </div>
    );

Or a fragment:

    return (
      <>
        <h1 />
        <p />
      </>
    );

---

### Components composing components

Components are just functions.

    function App() {
      return (
        <>
          <Header />
          <Content />
        </>
      );
    }

---

### Props

Props are **inputs** to components.

    function Greeting({ name }) {
      return <h1>Hello {name}</h1>;
    }

    <Greeting name="A" />

Props are:

- Read-only
- Passed from parent to child

---

### Default behavior

If a component returns:

- null → renders nothing
- false → renders nothing

---

### Common mistakes

- Treating JSX as HTML
- Running side effects inside JSX
- Forgetting components re-run

---

### Core rules to internalize

- JSX is JavaScript
- Components are functions
- Props are immutable
- Components can re-run anytime

---

### One-sentence recall

Components are pure functions that return JSX, which is just JavaScript describing UI.

---

### Daily self-check

- Can you explain why JSX is not HTML?
- Can you explain why components must be pure?
- Can you explain why components re-run?

---

## 3. Props

### What props are

Props are **inputs passed to a component** from its parent.

They represent:

- Configuration
- Data
- Callbacks

Props flow in **one direction**: parent → child.

---

### Basic example

    function Greeting({ name }) {
      return <h1>Hello {name}</h1>;
    }

    <Greeting name="A" />

Props are received as a single object.

---

### Props are read-only

A component must **never modify its props**.

Invalid:

    function Greeting(props) {
      props.name = "B"; // ❌
    }

Why:

- Props belong to the parent
- Mutating breaks predictability

---

### Passing multiple props

    function User({ name, age }) {
      return <p>{name} ({age})</p>;
    }

    <User name="A" age={30} />

---

### Passing functions as props

Used for child → parent communication.

    function Button({ onClick }) {
      return <button onClick={onClick}>Click</button>;
    }

    function App() {
      function handleClick() {
        console.log("clicked");
      }

      return <Button onClick={handleClick} />;
    }

Rule:

- Child calls
- Parent owns the state

---

### Props vs state

Props:

- Passed in
- Controlled by parent
- Immutable

State:

- Owned by component
- Can change
- Triggers re-render

---

### Default props

Using default parameters:

    function Greeting({ name = "Guest" }) {
      return <h1>Hello {name}</h1>;
    }

---

### Children prop

Anything inside a component becomes `children`.

    function Card({ children }) {
      return <div>{children}</div>;
    }

    <Card>
      <p>Hello</p>
    </Card>

---

### Spreading props

Forwarding props:

    function Input(props) {
      return <input {...props} />;
    }

Be careful:

- Can hide bugs
- Can override values

---

### Common mistakes

- Mutating props
- Passing unstable inline functions
- Overusing prop drilling

---

### Core rules to internalize

- Props flow down
- Props are immutable
- Functions enable communication upward
- Children is just a prop

---

### One-sentence recall

Props are read-only inputs that allow components to be configured and composed.

---

### Daily self-check

- Can you explain why props are immutable?
- Can you explain props vs state?
- Can you explain how children works?

---

## 4. State

### What state is

State is **data owned by a component** that can change over time.

When state changes:

- The component re-renders
- The UI updates to reflect the new state

State is what makes React interactive.

---

### Declaring state

State is created with hooks.

    import { useState } from "react";

    function Counter() {
      const [count, setCount] = useState(0);
      return <button>{count}</button>;
    }

`useState` returns:

- Current state value
- State updater function

---

### Updating state

You must use the updater function.

    setCount(1);

Never do this:

    count = 1; // ❌

Why:

- React will not re-render

---

### State updates are asynchronous

State updates do not happen immediately.

    setCount(count + 1);
    setCount(count + 1);

Result:

- count increases by 1, not 2

Correct:

    setCount(c => c + 1);
    setCount(c => c + 1);

---

### Functional updates

Use when new state depends on old state.

    setCount(prev => prev + 1);

This avoids stale values.

---

### State is immutable

You must create new values.

Objects:

    setUser({ ...user, age: 31 });

Arrays:

    setItems([...items, newItem]);

Never mutate:

    user.age = 31; // ❌

---

### Initial state

Initial state is used only on first render.

    useState(expensiveCalculation());

Correct:

    useState(() => expensiveCalculation());

---

### Lifting state up

If multiple components need the same state:

- Move it to the closest common parent
- Pass it down via props

---

### Derived state

Avoid storing values that can be computed.

Bad:

    const [fullName, setFullName] = useState("");

Good:

    const fullName = first + " " + last;

---

### Common mistakes

- Mutating state
- Reading state immediately after setting it
- Storing derived state

---

### Core rules to internalize

- State changes trigger re-renders
- Updates are batched
- State is immutable
- Use functional updates when needed

---

### One-sentence recall

State is component-owned data that drives re-rendering when it changes.

---

### Daily self-check

- Can you explain why state updates are async?
- Can you explain why mutation breaks React?
- Can you explain lifting state up?

---

## 5. Rendering & Reconciliation

### What rendering means in React

Rendering means **React calling your components** to determine what the UI should look like.

Rendering does NOT mean:

- DOM updates
- Painting pixels

It means:

- Executing component functions
- Creating a virtual UI description

---

### When rendering happens

A render is triggered when:

- State changes
- Props change
- Parent re-renders

Rendering can happen multiple times for the same UI.

---

### Render phase rules

During render:

- No side effects
- No async calls
- No subscriptions
- No mutations

Render must be **pure**.

---

### Reconciliation

Reconciliation is how React decides **what actually changed**.

Process:

1. Previous virtual tree
2. New virtual tree
3. Diff them
4. Calculate minimal DOM updates

---

### Keys and reconciliation

Keys help React identify elements between renders.

Bad:

    items.map(item => <li>{item}</li>);

Good:

    items.map(item => <li key={item.id}>{item.name}</li>);

Rules:

- Keys must be stable
- Keys must be unique among siblings
- Index as key is usually wrong

---

### Commit phase

After reconciliation:

- React updates the DOM
- Effects are scheduled

This is when the user sees changes.

---

### Batching

React batches multiple state updates into a single render.

    setA(1);
    setB(2);

One render, not two.

---

### Strict Mode (dev only)

In development:

- React may render components twice
- Used to detect side effects

This does not happen in production.

---

### Common mistakes

- Causing side effects during render
- Using unstable keys
- Assuming render equals DOM update

---

### Core rules to internalize

- Rendering is calculation
- Reconciliation compares trees
- Commit mutates the DOM
- Keys control identity

---

### One-sentence recall

Rendering calculates UI, reconciliation finds differences, and the commit phase applies DOM updates.

---

### Daily self-check

- Can you explain render vs commit?
- Can you explain why keys matter?
- Can you explain why render must be pure?

---

## 6. Hooks Mental Model

### What hooks are

Hooks let you **attach state and behavior to components**.

They are not magic.
They rely on **call order**, not names.

Hooks only work inside React function components.

---

### Why hooks exist

Before hooks:

- Logic was split across lifecycle methods
- Code was harder to reuse

Hooks allow:

- Reusable logic
- Clear separation of concerns
- Function-based components only

---

### Core rule (non-negotiable)

Hooks must be called:

- At the top level
- In the same order on every render

Never call hooks:

- Inside loops
- Inside conditions
- Inside nested functions

Why:

- React matches hook calls by position

---

### Example of broken hooks

    if (isLoggedIn) {
      useState(0); // ❌
    }

This breaks hook order.

---

### Valid usage

    function App() {
      const [count, setCount] = useState(0);
      const [name, setName] = useState("");

      return null;
    }

Order is fixed.

---

### Hooks are tied to renders

- Hooks run during render
- State is stored by React
- Values are returned to the component

Hooks do not persist variables.
React does.

---

### Custom hooks

Custom hooks are functions that call other hooks.

Rules:

- Name starts with `use`
- Follow hook rules

  function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
  }

---

### Hooks vs regular functions

Hooks:

- Can access React internals
- Participate in render cycle

Regular functions:

- Do not persist data between renders

---

### Common mistakes

- Calling hooks conditionally
- Treating hooks as magic variables
- Thinking hooks run once

---

### Core rules to internalize

- Hooks rely on call order
- Hooks run every render
- React owns the state
- Custom hooks reuse logic

---

### One-sentence recall

Hooks work because React tracks them by call order during rendering.

---

### Daily self-check

- Can you explain why hook order matters?
- Can you spot invalid hook usage?
- Can you explain what hooks actually return?

---

## 7. Effects (useEffect)

### What an effect is

An effect is a way to run **side effects after rendering**.

Side effects include:

- Data fetching
- Subscriptions
- Timers
- Manual DOM interaction

Effects do NOT run during render.

---

### Basic effect

    import { useEffect } from "react";

    useEffect(() => {
      console.log("effect ran");
    });

Runs:

- After every commit

---

### Dependency array

Controls when the effect runs.

Run once (on mount):

    useEffect(() => {
      console.log("mount");
    }, []);

Run when value changes:

    useEffect(() => {
      console.log(count);
    }, [count]);

---

### Cleanup function

Used to clean up resources.

    useEffect(() => {
      const id = setInterval(() => {
        console.log("tick");
      }, 1000);

      return () => clearInterval(id);
    }, []);

Cleanup runs:

- Before next effect
- On unmount

---

### Effect mental model

Effect lifecycle:

1. Render
2. Commit
3. Run effect
4. Cleanup (if needed)
5. Repeat

---

### Dependency rules

Dependencies must include:

- Every value from render used inside effect

Wrong:

    useEffect(() => {
      console.log(count);
    }, []);

Correct:

    useEffect(() => {
      console.log(count);
    }, [count]);

---

### Avoiding infinite loops

This causes a loop:

    useEffect(() => {
      setCount(count + 1);
    }, [count]);

Fix by:

- Rethinking logic
- Using conditions
- Moving logic to event handlers

---

### useEffect is not lifecycle

Do not think:

- componentDidMount
- componentDidUpdate
- componentWillUnmount

Think:

- Synchronize external systems with state

---

### Common mistakes

- Missing dependencies
- Overusing useEffect
- Doing data transformation in effects
- Using effects instead of events

---

### Core rules to internalize

- Effects run after render
- Dependencies control re-runs
- Cleanup prevents leaks
- Effects sync with external systems

---

### One-sentence recall

useEffect runs side effects after rendering to keep external systems in sync with state.

---

### Daily self-check

- Can you explain why effects don’t run during render?
- Can you explain cleanup timing?
- Can you explain dependency arrays?

---

## 8. Events & Forms

### Events in React

React events are **synthetic events**.
They wrap native browser events with consistent behavior.

They behave like normal events but are managed by React.

---

### Basic event handling

    function Button() {
      function handleClick() {
        console.log("clicked");
      }

      return <button onClick={handleClick}>Click</button>;
    }

Rule:

- Pass a function reference
- Do not call it during render

Wrong:

    <button onClick={handleClick()} /> // ❌

---

### Event handlers and state

Events are the **correct place** to update state.

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <button onClick={() => setCount(c => c + 1)}>
          {count}
        </button>
      );
    }

---

### Forms in React

Forms usually use **controlled components**.

Controlled means:

- React owns the state
- Input value comes from state

---

### Controlled input example

    function Form() {
      const [name, setName] = useState("");

      return (
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      );
    }

---

### Why controlled inputs matter

- Single source of truth
- Validation is easy
- UI always reflects state

---

### Uncontrolled inputs

State lives in the DOM, accessed via refs.

    const inputRef = useRef(null);

    <input ref={inputRef} />

Used when:

- Integrating non-React code
- Simple, throwaway inputs

---

### Form submission

    function Form() {
      function handleSubmit(e) {
        e.preventDefault();
      }

      return <form onSubmit={handleSubmit} />;
    }

---

### Common mistakes

- Forgetting preventDefault
- Mixing controlled and uncontrolled
- Doing validation during render

---

### Core rules to internalize

- Events trigger state changes
- Handlers run after render
- Controlled inputs are preferred
- Forms should not reload the page

---

### One-sentence recall

Events update state, and controlled forms keep inputs fully driven by React state.

---

### Daily self-check

- Can you explain controlled vs uncontrolled?
- Can you explain why handlers shouldn’t be called in JSX?
- Can you explain preventDefault?

---

## 9. Lists & Keys

### Rendering lists

Lists are rendered by mapping data to elements.

    const items = ["a", "b", "c"];

    items.map(item => <li>{item}</li>);

This works, but it is incomplete.

---

### What keys are

Keys are **stable identifiers** used by React during reconciliation.

They help React understand:

- Which item stayed the same
- Which item moved
- Which item was added or removed

---

### Correct usage

    items.map(item => (
      <li key={item.id}>{item.name}</li>
    ));

Rules:

- Keys must be unique among siblings
- Keys must be stable across renders

---

### Why index is usually wrong

    items.map((item, index) => (
      <li key={index}>{item}</li>
    ));

Problem:

- Reordering breaks identity
- State can jump between items

Index keys are only safe when:

- List never changes
- List order is static

---

### Keys affect state

React uses keys to preserve component state.

Bad keys cause:

- Input values jumping
- Wrong items updating
- Subtle UI bugs

---

### Keys are not props

You cannot access keys inside components.

    function Item(props) {
      console.log(props.key); // undefined
    }

---

### Conditional rendering in lists

You can filter before mapping.

    items
      .filter(item => item.active)
      .map(item => <Item key={item.id} />);

---

### Common mistakes

- Missing keys
- Using unstable values as keys
- Assuming keys are optional

---

### Core rules to internalize

- Keys control identity
- Index keys break reordering
- Stable IDs prevent bugs

---

### One-sentence recall

Keys allow React to correctly match list items between renders.

---

### Daily self-check

- Can you explain how keys affect state?
- Can you explain why index keys are dangerous?
- Can you spot unstable keys?

---

## 10. Context

### What context is

Context provides a way to share values **without passing props through every level**.

It solves:

- Prop drilling
- Global-ish state needs

It does NOT replace:

- Local state
- Proper component design

---

### Creating context

    import { createContext } from "react";

    const ThemeContext = createContext("light");

---

### Providing context

A Provider makes a value available to all descendants.

    <ThemeContext.Provider value="dark">
      <App />
    </ThemeContext.Provider>

---

### Consuming context

    import { useContext } from "react";

    function Button() {
      const theme = useContext(ThemeContext);
      return <button>{theme}</button>;
    }

---

### Context re-render behavior

When context value changes:

- All consuming components re-render

Even if:

- They only use part of the value

---

### Context value identity

Objects cause re-renders if recreated.

Bad:

    <Provider value={{ theme }}>

Better:

    const value = useMemo(() => ({ theme }), [theme]);

---

### When to use context

Good use cases:

- Theme
- Auth user
- Locale
- Feature flags

Bad use cases:

- Frequently changing values
- Large, complex state

---

### Context vs props

Props:

- Explicit
- Easier to trace
- Preferred for local data

Context:

- Implicit
- Harder to debug
- Use sparingly

---

### Common mistakes

- Overusing context
- Storing rapidly changing state
- Forgetting memoization

---

### Core rules to internalize

- Context avoids prop drilling
- Context triggers re-renders
- Value identity matters
- Use context sparingly

---

### One-sentence recall

Context shares values globally within a tree but re-renders all consumers when the value changes.

---

### Daily self-check

- Can you explain why context re-renders?
- Can you explain when not to use context?
- Can you explain value identity?

---

## 11. Refs

### What refs are

Refs provide a way to **access values that persist across renders without causing re-renders**.

They are an escape hatch from React’s state model.

---

### Creating a ref

    import { useRef } from "react";

    const inputRef = useRef(null);

`useRef` returns:

- An object with a `.current` property
- The same object on every render

---

### Accessing DOM elements

    function Input() {
      const inputRef = useRef(null);

      return <input ref={inputRef} />;
    }

Later:

    inputRef.current.focus();

---

### Refs vs state

State:

- Triggers re-render
- Used for UI data

Refs:

- Does not trigger re-render
- Used for imperative access

---

### Storing mutable values

    const renderCount = useRef(0);

    renderCount.current++;

Used for:

- Previous values
- Timers
- Instance-like variables

---

### Forwarding refs

    const Input = forwardRef((props, ref) => {
      return <input ref={ref} />;
    });

Used when:

- Parent needs DOM access inside child

---

### When to use refs

Good:

- Focus management
- Measuring DOM
- Integrating third-party libraries

Bad:

- UI state
- Data that affects rendering

---

### Common mistakes

- Using refs instead of state
- Reading refs during render for UI
- Mutating DOM unnecessarily

---

### Core rules to internalize

- Refs persist across renders
- Refs do not trigger renders
- State drives UI, refs do not

---

### One-sentence recall

Refs store mutable values and DOM references without participating in rendering.

---

### Daily self-check

- Can you explain refs vs state?
- Can you explain why refs don’t re-render?
- Can you explain when refs are appropriate?

---

## 12. Performance Basics

### What performance means in React

Performance issues usually come from:

- Unnecessary re-renders
- Expensive calculations during render
- Changing object/function identities

React is fast by default.
You usually slow it down.

---

### Re-renders are not bad

A re-render means:

- Component function runs again

It does NOT mean:

- DOM updates happened

Avoid optimizing too early.

---

### When performance becomes a problem

Optimize only when:

- You see lag
- You measure slow renders
- You have large lists or heavy calculations

---

### React.memo

Prevents re-render if props are the same.

    const Button = React.memo(function Button({ label }) {
      return <button>{label}</button>;
    });

Use when:

- Component renders often
- Props rarely change

---

### useCallback

Stabilizes function identity.

    const handleClick = useCallback(() => {
      console.log("click");
    }, []);

Used to:

- Prevent unnecessary child re-renders

---

### useMemo

Memoizes expensive calculations.

    const total = useMemo(() => {
      return items.reduce((a, b) => a + b, 0);
    }, [items]);

Do NOT use for:

- Simple calculations
- Everything by default

---

### Why identity matters

New objects/functions cause re-renders.

Bad:

    <Child options={{ a: 1 }} />

Good:

    const options = useMemo(() => ({ a: 1 }), []);

---

### Lists and performance

- Use stable keys
- Avoid re-creating large lists
- Virtualize long lists when needed

---

### Common mistakes

- Memoizing everything
- Using useMemo as cache
- Optimizing before measuring

---

### Core rules to internalize

- Measure before optimizing
- Identity triggers renders
- Memoization has a cost
- Re-render ≠ DOM update

---

### One-sentence recall

React performance depends mostly on controlling unnecessary re-renders and unstable identities.

---

### Daily self-check

- Can you explain when memo helps?
- Can you explain identity changes?
- Can you explain why over-memoization is bad?

---

## 13. Common React Pitfalls

### Mutating state directly

Mistake:

    state.value = 1;

Why it breaks:

- React does not detect the change
- No re-render occurs

Correct:

- Always create new values

---

### Using effects for everything

Mistake:

- Putting all logic in useEffect

Why it's bad:

- Makes data flow harder to follow
- Causes unnecessary re-renders

Rule:

- Use effects only for synchronization
- Use events for user actions

---

### Calling hooks incorrectly

Mistake:

- Hooks inside conditions or loops

Why it breaks:

- React relies on call order

Rule:

- Hooks at top level only

---

### Missing dependencies in effects

Mistake:

- Ignoring dependency warnings

Why it breaks:

- Stale values
- Inconsistent behavior

---

### Using index as key

Mistake:

- key={index}

Why it breaks:

- State mismatch during reordering

---

### Overusing context

Mistake:

- Putting all state in context

Why it's bad:

- Causes widespread re-renders
- Harder to debug

---

### Unstable identities

Mistake:

- Inline objects/functions passed as props

Why it hurts:

- Triggers unnecessary renders

---

### Assuming render happens once

Mistake:

- Writing code that depends on single execution

Reality:

- Components can re-render anytime

---

### Core rules to internalize

- Never mutate state
- Effects are not event handlers
- Hooks have strict rules
- Identity matters
- React may re-run code anytime

---

### One-sentence recall

Most React bugs come from breaking React’s rules around state, hooks, and identity.

---

### Daily self-check

- Can you spot hidden mutation?
- Can you spot bad effects?
- Can you spot hook violations?

---

## 14. Daily React Practice

### Purpose

This section is reviewed every day to force **active recall**, not passive reading.

Answer without running code.

---

### React mental model

- Explain “UI = f(state)” in one sentence
- Explain why React controls rendering
- Explain render vs commit

---

### Components & JSX

- Explain why JSX is not HTML
- Explain why components must be pure
- Explain why components can re-run

---

### Props

- Explain one-way data flow
- Explain why props are immutable
- Explain how children works

---

### State

- Explain why state updates are async
- Explain why mutation breaks React
- Explain lifting state up

---

### Rendering & reconciliation

- Explain how React decides what to update
- Explain why keys matter
- Explain why render must be pure

---

### Hooks

- Explain why hook order matters
- Explain what hooks actually store
- Explain custom hooks

---

### Effects

- Explain what useEffect is for
- Explain dependency arrays
- Explain cleanup timing

---

### Events & forms

- Explain controlled vs uncontrolled
- Explain why handlers belong in events
- Explain preventDefault

---

### Lists & keys

- Explain index key problems
- Explain identity preservation
- Explain state jumping bugs

---

### Context

- Explain when context is appropriate
- Explain why context causes re-renders
- Explain value identity

---

### Refs

- Explain refs vs state
- Explain why refs don’t re-render
- Explain valid ref use cases

---

### Performance

- Explain when to optimize
- Explain memo vs useMemo vs useCallback
- Explain identity-driven re-renders

---

### Pitfall detection

- Spot hidden mutation
- Spot bad effects
- Spot incorrect hook usage

---

### Final rule

If you cannot explain it in one sentence,
you do not understand it yet.

Review daily until explanations are automatic.
