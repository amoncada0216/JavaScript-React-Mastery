# Regex Crash Course (Practical, React-Relevant)

This is a **practical regex overview** focused on what you actually need for JavaScript, React, and string normalization. No deep theory.

## 1. What regex is (mechanically)

A **pattern** for matching characters in a string.

In JavaScript, a regex literal looks like:

    /pattern/flags

Common methods you will actually use:

    string.replace(regex, replacement)
    string.match(regex)
    regex.test(string)

## 2. Characters & character classes

### Literal characters

    /abc/

Matches the string "abc" exactly.

### Character class [] (one character from a set)

    /[abc]/

Matches one of: a, b, or c.

    /[a-z]/

Any lowercase letter.

    /[0-9]/

Any digit.

    /[a-z0-9]/i

Letter or digit, case-insensitive.

### Negated character class [^ ]

    /[^a-z]/

Matches anything except lowercase letters.

Used often for sanitization.

## 3. Shorthand character classes

    \d   digit        same as [0-9]
    \w   word char    same as [a-zA-Z0-9_]
    \s   whitespace   space, tab, newline

Negated versions:

    \D   not digit
    \W   not word char
    \S   not whitespace

Examples:

    /\s+/g   collapse multiple spaces
    /\d+/g   match number sequences

## 4. Quantifiers (how many)

    +   one or more
    *   zero or more
    ?   zero or one

Examples:

    /_+/g      "__", "___", etc
    /\s+/g     collapse spaces

Specific counts:

    {2}      exactly 2
    {2,}     two or more
    {2,4}    between 2 and 4

## 5. Anchors (position-based)

    ^   start of string
    $   end of string

Examples:

    /^hello/     starts with "hello"
    /world$/     ends with "world"

## 6. Groups ()

    /(ab)+/

Matches: ab, abab, ababab.

Capturing example:

    const m = "abc".match(/(a)(b)(c)/);
    m[1] === "a"

In frontend work, groups are mostly used for grouping, not capturing.

## 7. Flags

    g   global (all matches)
    i   case-insensitive
    m   multiline

Examples:

    /hello/g
    /hello/i
    /hello/gi

If you forget g in replace, only the first match is replaced.

## 8. Regex in replace (most common use)

Collapse whitespace:

    str.replace(/\s+/g, " ")

Normalize underscores:

    str.replace(/_+/g, "_")

Remove accents (with normalize):

    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

Slug generation:

    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")

## 9. Regex you should memorize

    /\s+/g
    /_+/g
    /-+/g
    /[^a-z0-9]/gi
    /[\u0300-\u036f]/g

These cover most frontend needs.

## 10. Mental model (lock this)

- []   what characters
- +*?  how many
- ^$   where
- gi   how often / how sensitive

Regex is not magic. It is compressed conditional logic over characters.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Regex Learning — Progressive, Example-Driven Crash Course

This guide teaches regex by **examples + outputs**, from simple to complex.  
No theory dumps. Regex is learned by exposure.

---

## Level 0 — Literal matching

### Example 0.1
Pattern:
    /a/

String:
    "cat"

Result:
- matches `"a"`

---

### Example 0.2
Pattern:
    /cat/

String:
    "concatenate"

Result:
- matches `"cat"`

Mental lock:
Plain characters match themselves.

---

## Level 1 — Character classes `[]`

### Example 1.1 — one of many
Pattern:
    /[aeiou]/

String:
    "sky"

Result:
- no match

String:
    "cat"

Result:
- matches `"a"`

---

### Example 1.2 — ranges
Pattern:
    /[a-z]/

String:
    "HELLO"

Result:
- no match

String:
    "Hello"

Result:
- matches `"e"`

---

### Example 1.3 — digits
Pattern:
    /[0-9]/

String:
    "age: 42"

Result:
- matches `"4"`

---

## Level 2 — Quantifiers (`+ * ?`)

### Example 2.1 — `+` (one or more)
Pattern:
    /_+/

String:
    "user__name___id"

Matches:
- `"__"`
- `"___"`

---

### Example 2.2 — collapsing
Replace:
    "user__name___id".replace(/_+/g, "_")

Output:
    "user_name_id"

Mental lock:
`+` collapses repetition.

---

### Example 2.3 — `*` (zero or more)
Pattern:
    /a*/

String:
    "bbb"

Result:
- matches `""` (empty match)

Note:
This is why `*` can be dangerous in replace.

---

## Level 3 — Whitespace `\s`

### Example 3.1
Pattern:
    /\s+/

String:
    "hello    world"

Matches:
- `"    "`

---

### Example 3.2 — normalization
Replace:
    "hello    world   again".replace(/\s+/g, " ")

Output:
    "hello world again"

---

## Level 4 — Anchors `^` and `$`

### Example 4.1 — start of string
Pattern:
    /^hello/

String:
    "hello world"

Matches:
- `"hello"`

String:
    "say hello"

Result:
- no match

---

### Example 4.2 — end of string
Pattern:
    /world$/

String:
    "hello world"

Matches:
- `"world"`

---

### Example 4.3 — trimming symbols
Replace:
    "--hello--".replace(/^-+|-+$/g, "")

Output:
    "hello"

Mental lock:
`^` and `$` target **edges only**.

---

## Level 5 — OR operator `|`

### Example 5.1
Pattern:
    /cat|dog/

String:
    "I have a dog"

Matches:
- `"dog"`

---

### Example 5.2 — edge cleanup
Pattern:
    /^-+|-+$/

Meaning:
- dashes at the start **OR**
- dashes at the end

---

## Level 6 — Negated classes `[^ ]`

### Example 6.1
Pattern:
    /[^a-z]/

String:
    "abcDEF"

Matches:
- `"D"`

---

### Example 6.2 — sanitization
Replace:
    "user@name!".replace(/[^a-z0-9]/gi, "-")

Output:
    "user-name-"

---

## Level 7 — Flags (`g`, `i`)

### Example 7.1 — without `g`
    "aaa".replace(/a/, "b")

Output:
    "baa"

---

### Example 7.2 — with `g`
    "aaa".replace(/a/g, "b")

Output:
    "bbb"

---

### Example 7.3 — case-insensitive
    "Hello".replace(/h/i, "y")

Output:
    "yello"

---

## Level 8 — Unicode normalization

### Example 8.1
    "João".normalize("NFD")

Internal form:
    "João"

(`a` + combining accent)

---

### Example 8.2 — remove accents
    "João"
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

Output:
    "Joao"

---

## Level 9 — Full normalization pipeline

### Example 9.1
Input:
    "  Crème__Brûlée--DEL__Mar  "

Pipeline:
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/_+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "")

Output:
    "creme-brulee-del-mar"

---

## Final mental model (lock this)

Read regex left to right:

- `[]` → what characters
- `+ * ?` → how many
- `^ $` → where
- `|` → alternatives
- `g i` → how often / case

Regex is **compressed conditional logic over characters**.
