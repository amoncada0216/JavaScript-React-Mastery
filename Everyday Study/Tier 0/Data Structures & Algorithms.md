# Data Structures & Algorithms — Everyday Fundamentals Review

## 1. Big-O Notation (Time & Space Complexity)

### What Big-O Is

Big-O notation describes how an algorithm **scales** as the input size grows.
It does not measure exact time, but **growth rate**.

It answers:

- How does execution time grow?
- How does memory usage grow?

Big-O ignores:

- Hardware differences
- Programming language
- Constant factors

---

### Why Big-O Matters

- Inefficient algorithms may appear fast on small inputs
- Large inputs expose poor scalability
- Big-O allows objective comparison between solutions

Core rule:
Correct but scalable beats fast but unscalable.

---

### Dominant Term Rule

Only the **fastest-growing term** matters.

Examples:

- n + 10 → O(n)
- 3n → O(n)
- n² + n + 1 → O(n²)

Constants and smaller terms are ignored.

---

### Common Time Complexities (Best → Worst)

- O(1) Constant
- O(log n) Logarithmic
- O(n) Linear
- O(n log n) Linearithmic
- O(n²) Quadratic
- O(2ⁿ) Exponential
- O(n!) Factorial

---

### O(1) — Constant Time

Time does not depend on input size.

Examples:

- Accessing an array element by index
- Hash table lookup (average case)

Key idea:
Same cost no matter how large the input is.

---

### O(n) — Linear Time

Time grows proportionally with input size.

Examples:

- Looping through an array
- Searching an unsorted list

Key idea:
One operation per element.

---

### O(n²) — Quadratic Time

Time grows with the square of input size.

Examples:

- Nested loops over the same dataset
- Comparing every pair of elements

Key idea:
Growth becomes expensive very quickly.

---

### Space Complexity

Measures **extra memory used**, not input size itself.

Examples:

- O(1): fixed number of variables
- O(n): auxiliary array of size n
- O(n²): matrix or table n × n

---

### How to Analyze Big-O

1. Count loops
2. Identify nesting
3. Ignore constants
4. Keep the dominant term
5. Consider worst-case scenario

---

### Common Mistakes

- Counting exact operations instead of growth
- Forgetting space complexity
- Including constants in final Big-O

---

### One-Line Summary

Big-O describes how badly time or memory grows as input becomes large.

---

### Daily Self-Check

- Can I explain Big-O without mentioning seconds or milliseconds?
- Can I reduce n² + n + 10 to its Big-O form?
- Can I identify time vs space complexity in an algorithm?
- Can I spot nested loops and predict their impact?
- Can I order common Big-O classes from best to worst?

---

## 2. Arrays

### What an Array Is

An array is a **linear data structure** that stores elements in **contiguous memory locations**.
Each element is accessed using an **index**.

Indexes typically start at 0.

Core properties:

- Ordered
- Index-based access
- Fixed-size (static arrays) or resizable (dynamic arrays)

---

### Why Arrays Matter

Arrays are the foundation of many data structures:

- Strings
- Matrices
- Lists
- Stacks
- Queues

Understanding arrays deeply simplifies most algorithm problems.

---

### Indexing and Access

Accessing an element by index is **constant time**.

Example concept:

- Get element at position i

Time complexity:

- Access → O(1)

Reason:
Memory address is calculated directly.

---

### Traversal

Visiting each element sequentially.

Typical pattern:

- Start at index 0
- Move to index n − 1

Time complexity:

- Traversal → O(n)

Key idea:
Each element is visited once.

---

### Insertion

Cost depends on position.

- Insert at end:
  - O(1) (amortized for dynamic arrays)
- Insert at beginning or middle:
  - O(n)

Reason:
Elements must be shifted to make space.

---

### Deletion

Same behavior as insertion.

- Delete at end:
  - O(1)
- Delete at beginning or middle:
  - O(n)

Reason:
Remaining elements must shift to fill the gap.

---

### Searching

- Unsorted array:
  - Linear search → O(n)
- Sorted array:
  - Binary search → O(log n)

Binary search requires sorted data.

---

### Space Complexity

- Stores n elements → O(n)
- No extra space needed for indexing or traversal

---

### Strengths

- Fast random access
- Cache-friendly memory layout
- Simple implementation

---

### Weaknesses

- Slow insertions and deletions in the middle
- Fixed size in static arrays

---

### Common Mistakes

- Off-by-one indexing errors
- Assuming insert/delete is always O(1)
- Using arrays where frequent middle operations are required

---

### When to Use Arrays

Use arrays when:

- You need fast access by index
- Order matters
- Data size is known or mostly stable

Avoid arrays when:

- Frequent insertions or deletions occur in the middle

---

### One-Line Summary

Arrays provide fast indexed access but slow middle modifications.

---

### Daily Self-Check

- Can I explain why array access is O(1)?
- Do I know which operations cause shifting?
- Can I choose between linear and binary search correctly?
- Can I predict the cost of inserting at index 0?
- Can I explain when arrays are a bad choice?

---

## 3. Strings

### What a String Is

A string is a **sequence of characters** stored in memory.
Conceptually, it behaves like an array of characters.

Key properties:

- Ordered
- Indexable
- Fixed length in many low-level implementations
- Often immutable

---

### Why Strings Matter

Strings appear everywhere:

- User input
- File data
- URLs
- Source code
- Logs

Many algorithm problems are string problems in disguise.

---

### Strings vs Arrays

Similarities:

- Indexed access
- Traversal
- Length-based operations

Differences:

- Strings are often **immutable**
- Modifying a string usually creates a new one

Implication:
String modifications may cost more than array modifications.

---

### Accessing Characters

Access by index is constant time.

Concept:

- Get character at position i

Time complexity:

- Access → O(1)

---

### Traversing a String

Visiting each character once.

Time complexity:

- Traversal → O(n)

Used in:

- Counting characters
- Validation
- Searching patterns

---

### String Concatenation

Combining strings.

Cost depends on implementation:

- Concatenating in a loop can be O(n²)
- Using buffers or builders can reduce cost

Key idea:
Repeated concatenation creates new strings.

---

### Common String Operations and Costs

- Length → O(1)
- Access by index → O(1)
- Compare two strings → O(n)
- Substring → O(n)
- Search for pattern → O(n) or more (advanced algorithms)

---

### Searching in Strings

Basic search:

- Check each position → O(n × m) in worst case

Advanced approaches:

- Prefix-based or hash-based methods
- Reduce repeated comparisons

---

### Space Complexity

- Storing n characters → O(n)
- Creating modified copies → additional O(n)

---

### Common Mistakes

- Assuming strings are mutable
- Using repeated concatenation in loops
- Forgetting string comparisons are linear time

---

### When to Use Strings Directly

Use strings when:

- Data is textual
- Order matters
- Direct indexing is useful

Be cautious when:

- Performing many modifications
- Building strings incrementally

---

### One-Line Summary

Strings are character arrays with expensive modifications due to immutability.

---

### Daily Self-Check

- Can I explain why strings are often immutable?
- Do I know the cost of comparing two strings?
- Can I identify when string concatenation becomes expensive?
- Can I treat a string as an array when analyzing complexity?
- Can I spot hidden O(n²) string operations?

---

## 4. Linked Lists

### What a Linked List Is

A linked list is a **linear data structure** where elements are stored in **nodes**.
Each node contains:

- A value
- A reference (pointer) to the next node

Nodes are **not stored contiguously** in memory.

---

### Why Linked Lists Matter

Linked lists solve a key limitation of arrays:

- Expensive insertions and deletions in the middle

They trade fast indexing for flexible structure.

---

### Types of Linked Lists

- Singly linked list (next pointer only)
- Doubly linked list (previous and next pointers)
- Circular linked list (tail connects to head)

Most fundamentals focus on singly linked lists.

---

### Accessing Elements

To reach the i-th element:

- Start from the head
- Traverse node by node

Time complexity:

- Access → O(n)

Key idea:
No direct indexing.

---

### Traversal

Visit each node starting from the head.

Time complexity:

- Traversal → O(n)

Same cost as array traversal, but different memory behavior.

---

### Insertion

Insertion does **not require shifting elements**.

- Insert at head:
  - O(1)
- Insert after a known node:
  - O(1)
- Insert at position i (unknown node):
  - O(n)

---

### Deletion

Similar to insertion.

- Delete head:
  - O(1)
- Delete after a known node:
  - O(1)
- Delete by value or index:
  - O(n)

---

### Searching

Must traverse node by node.

Time complexity:

- Search → O(n)

---

### Space Complexity

- Stores n nodes → O(n)
- Extra memory for pointers in each node

---

### Strengths

- Efficient insertions and deletions
- Dynamic size
- No wasted contiguous memory

---

### Weaknesses

- No random access
- Higher memory overhead
- Poor cache locality

---

### Common Mistakes

- Forgetting to update pointers
- Losing the head reference
- Assuming linked lists are always faster than arrays

---

### When to Use Linked Lists

Use linked lists when:

- Frequent insertions or deletions are required
- Size changes often
- Random access is not needed

Avoid when:

- Fast indexing is important
- Memory usage must be minimal

---

### One-Line Summary

Linked lists trade fast access for efficient insertions and deletions.

---

### Daily Self-Check

- Can I explain why access is O(n)?
- Do I know when insertion is truly O(1)?
- Can I explain the memory trade-off vs arrays?
- Can I mentally trace pointer changes during insertion?
- Can I justify choosing a linked list over an array?

---

## 5. Stacks

### What a Stack Is

A stack is a **linear data structure** that follows **LIFO**:
Last In, First Out.

You can only interact with **one end**, called the top.

Core operations:

- Push (add)
- Pop (remove)
- Peek (inspect top)

---

### Why Stacks Matter

Stacks model many real-world and system behaviors:

- Function calls (call stack)
- Undo / redo
- Expression evaluation
- Backtracking

They appear constantly in algorithm problems.

---

### Stack Operations and Costs

All core operations occur at the top.

- Push → O(1)
- Pop → O(1)
- Peek → O(1)

Reason:
No shifting or traversal required.

---

### Implementation Options

Stacks can be implemented using:

- Arrays
- Linked lists

Array-based stack:

- Simpler
- May need resizing

Linked-list stack:

- Dynamic size
- Extra pointer memory

---

### Stack Overflow and Underflow

- Overflow: pushing onto a full stack
- Underflow: popping from an empty stack

Important in low-level and system design contexts.

---

### Common Stack Use Cases

- Reversing data
- Checking balanced parentheses
- Depth-first search
- Syntax parsing

---

### Stack vs Array

Stack:

- Restricted access
- Controlled operations
- Enforced order

Array:

- Random access
- More flexible but less constrained

---

### Common Mistakes

- Confusing stack with queue
- Accessing elements other than the top
- Forgetting edge cases (empty stack)

---

### When to Use Stacks

Use stacks when:

- Order of reversal matters
- Last operation must be undone first
- You need controlled access

Avoid stacks when:

- Random access is required

---

### One-Line Summary

Stacks enforce LIFO order with constant-time operations.

---

### Daily Self-Check

- Can I explain LIFO without examples?
- Do I know why all operations are O(1)?
- Can I identify problems naturally solved by stacks?
- Can I explain stack overflow vs underflow?
- Can I choose array vs linked list stack correctly?

---

## 6. Queues

### What a Queue Is

A queue is a **linear data structure** that follows **FIFO**:
First In, First Out.

Elements are added at the **rear** and removed from the **front**.

Core operations:

- Enqueue (add)
- Dequeue (remove)
- Peek (inspect front)

---

### Why Queues Matter

Queues model real-world waiting systems:

- Task scheduling
- Message queues
- Buffers
- Breadth-first search

They are essential in system and algorithm design.

---

### Queue Operations and Costs

With a proper implementation:

- Enqueue → O(1)
- Dequeue → O(1)
- Peek → O(1)

Poor implementations (e.g., shifting arrays) can degrade performance.

---

### Implementation Options

Queues can be implemented using:

- Arrays (with front/rear indices)
- Circular arrays
- Linked lists

Circular queues avoid wasted space in arrays.

---

### Variants of Queues

- Simple queue
- Circular queue
- Deque (double-ended queue)
- Priority queue (handled separately)

---

### Queue vs Stack

Queue:

- FIFO
- Fair ordering
- Used for scheduling

Stack:

- LIFO
- Reversal and backtracking

---

### Common Queue Use Cases

- Breadth-first search
- Producer-consumer problems
- Task execution order
- Streaming data

---

### Space Complexity

- Stores n elements → O(n)
- Additional pointers or indices → O(1)

---

### Common Mistakes

- Implementing dequeue with array shifting
- Confusing FIFO with LIFO
- Forgetting to handle empty queue cases

---

### When to Use Queues

Use queues when:

- Order of arrival must be preserved
- Fair processing is required

Avoid queues when:

- You need last-in behavior or random access

---

### One-Line Summary

Queues enforce FIFO order with efficient front and rear operations.

---

### Daily Self-Check

- Can I explain FIFO without examples?
- Do I know why dequeue must be O(1)?
- Can I explain why circular queues exist?
- Can I differentiate queue vs stack use cases?
- Can I spot inefficient queue implementations?

---

## 7. Hash Tables (Hash Maps)

### What a Hash Table Is

A hash table stores **key–value pairs** and allows fast access by key.
It uses a **hash function** to map keys to indices.

Core idea:
Key → hash function → index → value

---

### Why Hash Tables Matter

They provide one of the most powerful guarantees in computer science:

- Fast lookup
- Fast insertion
- Fast deletion

They are everywhere:

- Dictionaries
- Caches
- Indexes
- Sets

---

### Core Operations and Average Costs

- Insert → O(1)
- Lookup → O(1)
- Delete → O(1)

These are **average-case** guarantees.

---

### Hash Function

A hash function:

- Takes a key
- Produces a numeric index
- Must be deterministic

Good hash functions:

- Distribute keys evenly
- Minimize collisions

---

### Collisions

A collision occurs when two keys map to the same index.

Common collision-handling strategies:

- Chaining (linked lists or buckets)
- Open addressing (probing)

Collisions degrade performance.

---

### Worst-Case Complexity

If many collisions occur:

- Insert → O(n)
- Lookup → O(n)
- Delete → O(n)

This happens when many keys share the same hash index.

---

### Load Factor

Load factor = number of elements / number of buckets

High load factor:

- More collisions
- Slower operations

Hash tables resize when load factor exceeds a threshold.

---

### Space Complexity

- Stores n key–value pairs → O(n)
- Extra space for buckets

Trade-off:
Time efficiency at the cost of memory.

---

### Strengths

- Extremely fast average performance
- Flexible key types
- Ideal for membership tests

---

### Weaknesses

- No ordering
- Worst-case degradation
- Extra memory overhead

---

### Common Mistakes

- Assuming hash tables are always O(1)
- Ignoring collision behavior
- Using mutable keys

---

### When to Use Hash Tables

Use hash tables when:

- Fast lookups are required
- Order does not matter
- Keys uniquely identify values

Avoid when:

- Ordered traversal is needed
- Memory is extremely constrained

---

### One-Line Summary

Hash tables trade memory for near-constant-time key access.

---

### Daily Self-Check

- Can I explain how a hash function works?
- Do I understand average vs worst-case behavior?
- Can I explain collisions clearly?
- Do I know what load factor means?
- Can I justify choosing a hash table over an array?

---

## 8. Sets

### What a Set Is

A set is a **collection of unique elements**.
Duplicate values are not allowed.

Sets focus on **membership**, not order or indexing.

---

### Why Sets Matter

Sets simplify problems involving:

- Uniqueness
- Membership checks
- Eliminating duplicates

They are conceptually simpler than hash tables but built on similar ideas.

---

### Core Operations and Costs

Average-case time complexity:

- Add → O(1)
- Remove → O(1)
- Contains → O(1)

These assume a hash-based implementation.

---

### Sets vs Arrays

Set:

- No duplicates
- Fast membership check
- No indexing

Array:

- Allows duplicates
- Slower membership check
- Indexed access

---

### Sets vs Hash Tables

Set:

- Stores values only
- Focused on presence

Hash table:

- Stores key–value pairs
- More flexible but heavier

---

### Common Set Use Cases

- Removing duplicates
- Checking if an element exists
- Finding intersections or unions
- Tracking visited elements

---

### Set Operations

Common mathematical operations:

- Union
- Intersection
- Difference

Each operation usually runs in linear time relative to set size.

---

### Space Complexity

- Stores n unique elements → O(n)
- Additional hashing overhead

---

### Strengths

- Enforces uniqueness automatically
- Clean and expressive logic
- Fast lookups

---

### Weaknesses

- No ordering guarantees (in most implementations)
- No indexed access
- Extra memory usage

---

### Common Mistakes

- Expecting ordered behavior
- Using sets when duplicates are required
- Forgetting set operations are not free

---

### When to Use Sets

Use sets when:

- Uniqueness is required
- Fast existence checks are needed
- Order is irrelevant

Avoid when:

- Indexed access is required
- Duplicate elements matter

---

### One-Line Summary

Sets efficiently track unique elements and fast membership.

---

### Daily Self-Check

- Can I explain how sets differ from arrays?
- Do I know why membership is O(1)?
- Can I choose set vs hash table correctly?
- Can I explain union and intersection costs?
- Can I identify problems that naturally use sets?

---

## 9. Recursion

### What Recursion Is

Recursion is a technique where a function **calls itself** to solve smaller versions of the same problem.

Every recursive solution must have:

- A base case (when to stop)
- A recursive case (problem reduction)

---

### Why Recursion Matters

Recursion provides:

- Clear expression of divide-and-conquer problems
- Natural solutions for trees, graphs, and backtracking

Many algorithms are easier to reason about recursively.

---

### Core Components

1. Base Case
   Stops recursion.
2. Recursive Case
   Reduces problem size.
3. Progress Toward Base Case
   Guarantees termination.

Without all three, recursion breaks.

---

### Call Stack

Each recursive call:

- Is pushed onto the call stack
- Uses additional memory

When a call finishes, it is popped off the stack.

---

### Time Complexity

Depends on:

- Number of recursive calls
- Work done per call

Examples:

- Linear recursion → O(n)
- Binary recursion → O(2ⁿ) or O(n log n) depending on structure

---

### Space Complexity

- O(n) stack space for recursion depth n
- Even if no extra data structures are used

This is a common hidden cost.

---

### Tail Recursion

A recursive call that is the **last operation** in a function.

Some languages optimize this.
Do not assume optimization exists.

---

### Recursion vs Iteration

Recursion:

- Clear and expressive
- Higher memory cost

Iteration:

- More efficient
- Sometimes harder to reason about

---

### Common Mistakes

- Missing or incorrect base case
- Infinite recursion
- Ignoring stack memory cost
- Solving problems recursively when iteration is better

---

### When to Use Recursion

Use recursion when:

- Problem is naturally recursive
- Tree or graph traversal is required
- Divide-and-conquer fits well

Avoid when:

- Deep recursion causes stack overflow
- Simple loops suffice

---

### One-Line Summary

Recursion solves problems by reducing them until a base case is reached.

---

### Daily Self-Check

- Can I identify the base case instantly?
- Can I predict recursion depth?
- Do I account for stack space?
- Can I convert recursion to iteration?
- Can I explain why infinite recursion happens?

---

## 10. Searching Algorithms

### What Searching Is

Searching algorithms locate a **target element** within a data structure.

The strategy depends on:

- Data organization
- Constraints on time and space

---

### Why Searching Matters

Searching is one of the most common operations:

- Databases
- File systems
- User interfaces
- Algorithms and systems

Choosing the right search method is critical for performance.

---

### Linear Search

Checks each element one by one.

Requirements:

- None (data can be unsorted)

Time complexity:

- Best case → O(1)
- Worst case → O(n)

Use when:

- Data is small
- Data is unsorted
- Simplicity matters

---

### Binary Search

Repeatedly divides the search space in half.

Requirements:

- Data must be sorted
- Random access available

Time complexity:

- O(log n)

Key idea:
Eliminate half of remaining elements each step.

---

### Binary Search Process

1. Check middle element
2. If target is smaller, search left half
3. If larger, search right half
4. Repeat until found or empty

---

### Comparison of Search Methods

Linear search:

- Works everywhere
- Slow on large data

Binary search:

- Extremely fast
- Requires sorted data

---

### Space Complexity

- Iterative binary search → O(1)
- Recursive binary search → O(log n)

---

### Common Mistakes

- Using binary search on unsorted data
- Off-by-one index errors
- Forgetting termination conditions

---

### When to Use Which

Use linear search when:

- Data is unsorted
- Dataset is small

Use binary search when:

- Data is sorted
- Fast lookup is required

---

### One-Line Summary

Searching finds elements; sorting enables fast searching.

---

### Daily Self-Check

- Can I explain why binary search is O(log n)?
- Do I know when linear search is acceptable?
- Can I list binary search prerequisites?
- Can I avoid off-by-one errors mentally?
- Can I choose search strategy correctly?

---

## 11. Sorting Algorithms

### What Sorting Is

Sorting arranges elements in a **specific order** (usually ascending or descending).

Sorting is often a **precondition** for faster algorithms.

---

### Why Sorting Matters

Sorting enables:

- Binary search
- Efficient duplicate detection
- Ordered traversal
- Easier comparison and merging

Many algorithms become simpler once data is sorted.

---

### Comparison-Based Sorting

Most classic sorts compare elements.

Lower bound:

- Any comparison-based sort is at least O(n log n)

---

### Common Sorting Algorithms

Bubble Sort:

- Repeatedly swaps adjacent elements
- Time → O(n²)
- Educational, not practical

Insertion Sort:

- Builds sorted portion gradually
- Best → O(n)
- Worst → O(n²)
- Good for small or nearly sorted data

Selection Sort:

- Selects minimum each pass
- Time → O(n²)
- Minimal swaps

Merge Sort:

- Divide and conquer
- Time → O(n log n)
- Space → O(n)
- Stable

Quick Sort:

- Partition-based
- Average → O(n log n)
- Worst → O(n²)
- In-place

---

### Stability

A stable sort preserves relative order of equal elements.

Important when:

- Sorting by multiple keys

---

### In-Place vs Not In-Place

In-place:

- Uses O(1) extra space
- Example: Quick Sort

Not in-place:

- Uses extra memory
- Example: Merge Sort

---

### Choosing a Sorting Algorithm

Depends on:

- Data size
- Memory constraints
- Stability requirement
- Worst-case guarantees

---

### Common Mistakes

- Using O(n²) sorts on large data
- Ignoring space complexity
- Assuming library sort is always optimal

---

### One-Line Summary

Sorting organizes data to unlock faster and simpler algorithms.

---

### Daily Self-Check

- Can I explain why n log n is the lower bound?
- Do I know which sorts are stable?
- Can I choose merge vs quick sort correctly?
- Can I explain in-place vs extra space?
- Do I know when insertion sort is ideal?

---

## 12. Two-Pointer Technique

### What the Two-Pointer Technique Is

The two-pointer technique uses **two indices** to iterate over a data structure in a coordinated way.

Pointers usually:

- Move toward each other
- Move at different speeds
- Track a window or relationship

---

### Why It Matters

Two-pointer techniques:

- Reduce time complexity
- Avoid nested loops
- Turn O(n²) problems into O(n)

It is a core optimization pattern.

---

### Common Pointer Patterns

- Left and right pointers
- Slow and fast pointers
- Start and end of array
- Adjacent pointers

---

### Typical Use Cases

- Pair sum problems
- Removing duplicates
- Reversing arrays
- Palindrome checks
- Cycle detection

---

### Time Complexity

Most two-pointer solutions run in:

- O(n)

Each pointer moves at most n steps.

---

### Space Complexity

- O(1) extra space

Only indices or references are used.

---

### Requirements

Often requires:

- Sorted data
- Linear data structures

Not always mandatory, but common.

---

### Two-Pointer vs Nested Loops

Nested loops:

- O(n²)

Two-pointer:

- O(n)

Key idea:
Reuse information from previous comparisons.

---

### Common Mistakes

- Moving the wrong pointer
- Missing termination conditions
- Forgetting sorting prerequisites

---

### When to Use Two Pointers

Use when:

- Order matters
- You compare elements relative to each other
- You need linear-time optimization

Avoid when:

- Data is not linear or indexable
- Relationships are not sequential

---

### One-Line Summary

Two pointers efficiently solve linear problems without nested loops.

---

### Daily Self-Check

- Can I identify problems suited for two pointers?
- Do I know when sorting is required?
- Can I track pointer movement mentally?
- Can I avoid infinite loops?
- Can I explain why complexity is O(n)?

---

## 13. Sliding Window Technique

### What the Sliding Window Technique Is

The sliding window technique maintains a **window of elements** that moves across the data structure.

Instead of recomputing from scratch, the window is **updated incrementally**.

---

### Why It Matters

Sliding window:

- Optimizes repeated range calculations
- Reduces O(n²) problems to O(n)
- Is essential for substring and subarray problems

---

### Window Types

- Fixed-size window
- Variable-size window

Each has different use cases.

---

### Fixed-Size Window

Window size remains constant.

Used for:

- Maximum/minimum in subarrays
- Moving averages

Process:

- Add incoming element
- Remove outgoing element

---

### Variable-Size Window

Window size changes dynamically.

Used for:

- Longest/shortest subarray problems
- Constraint-based problems

Window expands and shrinks based on conditions.

---

### Time Complexity

- O(n)

Each element enters and leaves the window at most once.

---

### Space Complexity

- O(1) or O(k), where k is window size

---

### Sliding Window vs Two Pointers

Sliding window is a **specialized two-pointer technique** with a maintained range.

---

### Common Mistakes

- Recomputing window values
- Failing to shrink window correctly
- Mixing fixed and variable window logic

---

### When to Use Sliding Window

Use when:

- Dealing with contiguous subarrays or substrings
- Repeated range-based calculations are required

Avoid when:

- Data is not contiguous
- Non-linear relationships dominate

---

### One-Line Summary

Sliding window efficiently processes contiguous ranges in linear time.

---

### Daily Self-Check

- Can I tell fixed vs variable window apart?
- Do I know why complexity stays O(n)?
- Can I update window state incrementally?
- Can I detect when to shrink the window?
- Can I recognize sliding window problems quickly?

---

## 14. Trees

### What a Tree Is

A tree is a **non-linear data structure** consisting of nodes connected by edges.
It has:

- A root node
- Parent–child relationships
- No cycles

---

### Why Trees Matter

Trees model hierarchical data:

- File systems
- Organization charts
- HTML DOM
- Databases and indexes

Many advanced algorithms rely on trees.

---

### Tree Terminology

- Root: top node
- Parent / Child
- Leaf: node with no children
- Depth: distance from root
- Height: longest path to a leaf
- Subtree: tree within a tree

---

### Binary Trees

Each node has **at most two children**:

- Left child
- Right child

Binary trees are the foundation for many tree variants.

---

### Binary Search Trees (BST)

A BST maintains ordering:

- Left subtree < node
- Right subtree > node

Operations:

- Search → O(log n) average
- Insert → O(log n) average
- Delete → O(log n) average

Worst case (skewed tree):

- O(n)

---

### Tree Traversals

Ways to visit nodes:

Depth-first:

- Preorder
- Inorder
- Postorder

Breadth-first:

- Level order

Traversal cost:

- O(n)

---

### Recursion in Trees

Trees are naturally recursive structures.

Most tree algorithms:

- Use recursion
- Use stack implicitly

---

### Space Complexity

- O(n) for storing nodes
- O(h) for recursion stack, where h is tree height

---

### Strengths

- Efficient hierarchical representation
- Fast searches in balanced trees

---

### Weaknesses

- Can degrade if unbalanced
- More complex than linear structures

---

### Common Mistakes

- Forgetting worst-case BST behavior
- Confusing tree height and depth
- Ignoring balancing

---

### When to Use Trees

Use trees when:

- Data is hierarchical
- Ordered searches are needed
- Range queries are common

Avoid when:

- Data is flat or sequential

---

### One-Line Summary

Trees efficiently represent hierarchical data with structured relationships.

---

### Daily Self-Check

- Can I explain BST ordering rules?
- Do I know all traversal types?
- Can I predict worst-case tree behavior?
- Can I explain height vs depth?
- Can I choose tree over array or hash table?

---

## 15. Heaps / Priority Queues

### What a Heap Is

A heap is a **specialized binary tree** that satisfies the **heap property**.

Types:

- Min-heap: parent ≤ children
- Max-heap: parent ≥ children

Heaps are typically implemented using arrays.

---

### Why Heaps Matter

Heaps provide efficient access to:

- Minimum element
- Maximum element

They are essential for:

- Priority queues
- Scheduling
- Graph algorithms

---

### Heap Properties

- Complete binary tree
- Partially ordered
- Root is always min or max

Heaps are **not fully sorted**.

---

### Core Operations and Costs

- Insert → O(log n)
- Remove min/max → O(log n)
- Peek → O(1)
- Build heap → O(n)

---

### Heap vs Binary Search Tree

Heap:

- Fast min/max access
- No ordered traversal

BST:

- Ordered structure
- Slower min/max if unbalanced

---

### Priority Queue

A priority queue:

- Processes elements by priority
- Often implemented using heaps

Not FIFO or LIFO.

---

### Space Complexity

- Stores n elements → O(n)
- Array-based representation

---

### Common Mistakes

- Assuming heaps are sorted
- Trying to search arbitrary elements efficiently
- Confusing heap with BST

---

### When to Use Heaps

Use heaps when:

- You need repeated access to min or max
- Priority determines processing order

Avoid when:

- Ordered traversal is required

---

### One-Line Summary

Heaps efficiently manage priorities with fast min/max access.

---

### Daily Self-Check

- Can I explain heap property clearly?
- Do I know why insert is O(log n)?
- Can I explain why build heap is O(n)?
- Can I differentiate heap vs BST?
- Can I identify priority queue use cases?

---

## 16. Graphs

### What a Graph Is

A graph is a **non-linear data structure** made of:

- Vertices (nodes)
- Edges (connections)

Graphs model relationships rather than hierarchy or sequence.

---

### Why Graphs Matter

Graphs represent real-world systems:

- Social networks
- Road maps
- Computer networks
- Dependencies

Many complex problems reduce to graph problems.

---

### Types of Graphs

- Directed vs Undirected
- Weighted vs Unweighted
- Cyclic vs Acyclic
- Connected vs Disconnected

Each type changes how algorithms behave.

---

### Graph Representation

Common ways to store graphs:

Adjacency List:

- Space → O(V + E)
- Efficient for sparse graphs

Adjacency Matrix:

- Space → O(V²)
- Fast edge lookup

---

### Traversal Basics

Graph traversal means visiting all reachable nodes.

Two primary methods:

- Breadth-First Search (BFS)
- Depth-First Search (DFS)

Both run in:

- O(V + E)

---

### Cycles and Visited Tracking

Graphs may contain cycles.
Traversal must track visited nodes to avoid infinite loops.

---

### Space Complexity

- Depends on representation
- Adjacency list is usually more space-efficient

---

### Strengths

- Extremely flexible
- Models complex relationships

---

### Weaknesses

- More complex than trees
- Harder to reason about without structure

---

### Common Mistakes

- Forgetting visited tracking
- Choosing wrong representation
- Assuming graphs are trees

---

### When to Use Graphs

Use graphs when:

- Relationships are many-to-many
- Paths, connectivity, or dependencies matter

Avoid when:

- Data is strictly hierarchical or linear

---

### One-Line Summary

Graphs model complex relationships between connected entities.

---

### Daily Self-Check

- Can I explain vertex vs edge?
- Do I know graph type differences?
- Can I choose adjacency list vs matrix?
- Do I understand why visited tracking is required?
- Can I recognize graph problems quickly?

---

## 17. Breadth-First Search (BFS) and Depth-First Search (DFS)

### What BFS and DFS Are

BFS and DFS are **graph and tree traversal algorithms**.
They define the **order** in which nodes are visited.

Both ensure every reachable node is visited exactly once.

---

### Breadth-First Search (BFS)

BFS explores nodes **level by level**.

Process:

- Start from a source node
- Visit all neighbors first
- Then move outward

Data structure used:

- Queue

---

### BFS Characteristics

- Finds shortest path in unweighted graphs
- Explores closest nodes first
- Uses more memory in wide graphs

Time complexity:

- O(V + E)

Space complexity:

- O(V)

---

### Depth-First Search (DFS)

DFS explores **as deep as possible** before backtracking.

Process:

- Start from a node
- Go deep into one path
- Backtrack when no further moves exist

Data structure used:

- Stack (explicit or recursion)

---

### DFS Characteristics

- Good for exploring full paths
- Uses less memory in wide graphs
- Natural for recursion

Time complexity:

- O(V + E)

Space complexity:

- O(V) worst case

---

### BFS vs DFS

BFS:

- Shortest paths
- Level order
- More memory

DFS:

- Deep exploration
- Backtracking
- Simpler recursion

---

### Typical Use Cases

BFS:

- Shortest path (unweighted)
- Level traversal
- Broadcasting problems

DFS:

- Cycle detection
- Topological sorting
- Path existence
- Backtracking problems

---

### Common Mistakes

- Forgetting visited tracking
- Using DFS when BFS guarantees shortest path
- Stack overflow with deep DFS recursion

---

### When to Use Which

Use BFS when:

- Shortest path matters
- Levels matter

Use DFS when:

- Exploring all possibilities
- Memory is constrained
- Recursive structure fits naturally

---

### One-Line Summary

BFS explores wide, DFS explores deep—both traverse graphs completely.

---

### Daily Self-Check

- Can I explain BFS without mentioning recursion?
- Can I explain DFS without mentioning queues?
- Do I know which guarantees shortest path?
- Can I predict memory usage differences?
- Can I choose BFS vs DFS correctly?

---

## 18. Greedy Algorithms

### What a Greedy Algorithm Is

A greedy algorithm builds a solution by making the **locally optimal choice** at each step.

It never revisits previous decisions.

---

### Why Greedy Matters

Greedy algorithms:

- Are fast
- Are simple
- Work extremely well for specific problems

But they **do not always produce optimal solutions**.

---

### Greedy Strategy

At each step:

- Choose the best immediate option
- Assume it leads to a global optimum

This assumption must be proven.

---

### Common Greedy Problems

- Interval scheduling
- Activity selection
- Huffman encoding
- Minimum spanning tree (Kruskal, Prim)
- Coin change (with specific coin systems)

---

### Time Complexity

Usually depends on:

- Sorting → O(n log n)
- Single pass → O(n)

Greedy logic itself is often linear.

---

### Correctness Requirement

A greedy algorithm is valid only if:

- Greedy-choice property holds
- Optimal substructure exists

Without proof, greedy is unsafe.

---

### Greedy vs Dynamic Programming

Greedy:

- Faster
- Simpler
- No backtracking

Dynamic Programming:

- Slower
- Guaranteed optimal
- Explores multiple paths

---

### Common Mistakes

- Assuming greedy always works
- Ignoring proof of correctness
- Applying greedy to optimization blindly

---

### When to Use Greedy Algorithms

Use greedy when:

- Problem structure supports greedy choice
- Optimal substructure exists
- Performance is critical

Avoid when:

- Local optimum does not lead to global optimum

---

### One-Line Summary

Greedy algorithms choose fast local optimals—but must be proven correct.

---

### Daily Self-Check

- Can I explain greedy-choice property?
- Do I know problems where greedy fails?
- Can I justify greedy correctness?
- Can I compare greedy vs DP?
- Can I identify greedy-appropriate problems?

---

## 19. Dynamic Programming

### What Dynamic Programming Is

Dynamic Programming (DP) is a technique for solving problems by:

- Breaking them into overlapping subproblems
- Solving each subproblem once
- Storing results for reuse

It is **optimization via memory**.

---

### Why Dynamic Programming Matters

DP:

- Converts exponential-time problems into polynomial-time
- Guarantees optimal solutions
- Handles problems greedy cannot

Many hard problems become tractable with DP.

---

### Core Properties

A problem is suitable for DP if it has:

- Optimal substructure
- Overlapping subproblems

Both must exist.

---

### DP Approaches

Top-Down (Memoization):

- Recursive
- Cache results
- Easier to reason about

Bottom-Up (Tabulation):

- Iterative
- Build solution from base cases
- More efficient memory usage

---

### DP State

The DP state represents:

- What subproblem is being solved
- What information uniquely defines it

Correct state definition is critical.

---

### Transition

A transition defines:

- How one state depends on smaller states

Bad transitions break correctness.

---

### Time Complexity

DP time depends on:

- Number of states
- Cost per state

Total time = states × transition cost

---

### Space Complexity

- O(number of states)
- Can often be optimized

Space optimization is common in DP.

---

### Common DP Problems

- Fibonacci
- Knapsack
- Longest common subsequence
- Coin change
- Matrix path problems

---

### Common Mistakes

- Wrong state definition
- Missing base cases
- Overcomplicating transitions
- Forgetting space optimization

---

### When to Use Dynamic Programming

Use DP when:

- Brute force is exponential
- Greedy fails
- Problem has overlapping subproblems

Avoid when:

- Problem is simple or greedy-solvable

---

### One-Line Summary

Dynamic programming trades memory for guaranteed optimal solutions.

---

### Daily Self-Check

- Can I identify DP-suitable problems?
- Can I define correct DP states?
- Do I know top-down vs bottom-up?
- Can I calculate DP complexity?
- Can I optimize DP space usage?

---

## 20. Bit Manipulation

### What Bit Manipulation Is

Bit manipulation works directly on the **binary representation** of numbers.
It uses bitwise operations to achieve fast, low-level control.

---

### Why Bit Manipulation Matters

Bit manipulation:

- Enables highly efficient algorithms
- Is used in systems, graphics, cryptography
- Appears in interview and competitive programming problems

---

### Binary Basics

Each integer is represented in base 2.
Each position is a power of two.

Understanding binary is mandatory.

---

### Common Bitwise Operations

- AND (&)
- OR (|)
- XOR (^)
- NOT (~)
- Left shift (<<)
- Right shift (>>)

Each operates at the bit level.

---

### Core Bit Tricks

- Check if a number is even or odd
- Set, clear, toggle a bit
- Check if a bit is set
- Count set bits
- Isolate lowest set bit

---

### XOR Properties

XOR is especially powerful:

- a ^ a = 0
- a ^ 0 = a
- XOR is commutative and associative

Used for:

- Finding unique elements
- Swapping values (conceptually)

---

### Time Complexity

Bit operations run in:

- O(1)

They are constant-time operations.

---

### Space Complexity

- O(1)
- No additional memory required

---

### Common Mistakes

- Confusing bitwise and logical operators
- Forgetting operator precedence
- Not understanding two’s complement

---

### When to Use Bit Manipulation

Use when:

- Performance is critical
- Memory must be minimized
- Problem naturally fits binary logic

Avoid when:

- Code clarity is more important
- Simpler solutions exist

---

### One-Line Summary

Bit manipulation provides constant-time control over binary data.

---

### Daily Self-Check

- Can I explain XOR without examples?
- Do I know all basic bitwise operators?
- Can I predict bit shifts mentally?
- Can I identify problems solvable with bits?
- Can I avoid confusing logical vs bitwise ops?

---

## 21. Common Pitfalls in Data Structures & Algorithms

### What This Fundamental Is

This section consolidates **recurring mistakes** that slow learning, break solutions, or cause wrong complexity analysis.

These are patterns of failure, not concepts.

---

### Complexity Pitfalls

- Focusing on best case instead of worst case
- Forgetting space complexity
- Counting operations instead of growth rate
- Assuming O(1) always means “fast enough”

---

### Data Structure Misuse

- Using arrays when frequent middle insertions are needed
- Using hash tables when order matters
- Using trees when simple arrays suffice
- Treating sets as ordered structures

---

### Algorithmic Mistakes

- Applying greedy without proof
- Using binary search on unsorted data
- Using recursion without tracking stack depth
- Ignoring edge cases (empty, single element)

---

### Traversal Errors

- Forgetting visited tracking in graphs
- Mixing BFS and DFS use cases
- Off-by-one errors in loops
- Infinite loops due to bad termination

---

### Optimization Traps

- Premature optimization
- Optimizing before correctness
- Using complex techniques unnecessarily
- Ignoring readability and maintainability

---

### Mental Model Failures

- Confusing reference vs value behavior
- Forgetting worst-case degradation
- Over-trusting library defaults
- Not validating assumptions

---

### One-Line Summary

Most DS&A errors come from misuse, not lack of knowledge.

---

### Daily Self-Check

- Did I choose the right data structure?
- Did I analyze worst-case complexity?
- Did I handle edge cases?
- Did I assume something without proof?
- Did I prioritize correctness first?

---

## 22. Daily Structures & Algorithms Practice

### Purpose

This is the **daily ritual** to internalize DS&A fundamentals.
Consistency matters more than duration.

---

### Daily Time Commitment

- 10–20 minutes
- No exceptions
- No skipping fundamentals

---

### Step 1: Recall (3–5 min)

Without looking:

- Name today’s fundamental
- State its purpose
- State its core complexity
- State when to use and avoid it

---

### Step 2: Mental Simulation (3–5 min)

- Pick a small example
- Walk through operations mentally
- Track time and space cost
- Identify edge cases

---

### Step 3: Compare (2–4 min)

Ask:

- What would I use instead?
- Why is this better or worse?
- What trade-off am I accepting?

---

### Step 4: One Problem (5–10 min)

- Solve one small problem related to the fundamental
- Focus on reasoning, not speed
- Stop when logic is clear

---

### Weekly Reinforcement

Once per week:

- Re-read all fundamentals
- Rewrite summaries from memory
- Identify weak areas

---

### Long-Term Rule

Do not add advanced topics until:

- Fundamentals feel automatic
- Trade-offs are instinctive
- Complexity estimation is immediate

---

### One-Line Summary

Daily repetition turns fundamentals into instinct.

---

### Daily Self-Check

- Can I recall fundamentals without notes?
- Can I predict complexity instantly?
- Can I explain trade-offs out loud?
- Can I choose the right structure naturally?
- Am I practicing consistently?

---
