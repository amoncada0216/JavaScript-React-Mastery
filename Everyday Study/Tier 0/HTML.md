# HTML Fundamentals

## 1. HTML Mental Model

### What HTML is

HTML is a **declarative markup language**.

You do not program behavior in HTML.  
You **describe the structure and meaning of content**.

Browsers read HTML and build the DOM from it.

---

### Core idea

HTML describes:

- What content exists
- What that content means
- How content is structured

HTML does NOT:

- Control layout (CSS does)
- Control behavior (JavaScript does)

---

### HTML → DOM

When the browser loads HTML:

1. It parses the document
2. It builds the DOM tree
3. CSS is applied
4. JavaScript can manipulate the DOM

HTML itself does not “run”.

---

### Declarative, not imperative

You do not say:

- Create element
- Append element
- Update element

You say:

- This is a heading
- This is a paragraph
- This is a form

The browser handles the rest.

---

### Structure over appearance

HTML answers:

- What is this content?
- What role does it play?

Not:

- What color is it?
- Where is it positioned?

Example:

    <h1>Title</h1>

Means:

- This is the main heading

It does NOT mean:

- Big text
- Bold text

---

### Nesting and hierarchy

HTML is hierarchical.

    <article>
      <h2>Title</h2>
      <p>Text</p>
    </article>

Hierarchy defines:

- Meaning
- Accessibility
- How CSS and JS target elements

---

### The DOM is a tree

- Elements are nodes
- Parents contain children
- Order matters

Bad structure breaks:

- Styling
- Accessibility
- Scripts

---

### HTML is forgiving (dangerously)

Browsers auto-fix invalid HTML.

This hides bugs.

Example:

- Missing closing tags
- Invalid nesting

Rule:

- Do not rely on browser fixes

---

### Core rules to internalize

- HTML describes meaning, not style
- HTML builds the DOM
- Structure matters more than appearance
- Browsers are forgiving, but you should not be careless

---

### One-sentence recall

HTML declaratively describes the structure and meaning of content, which browsers convert into the DOM.

---

### Daily self-check

- Can you explain HTML without mentioning CSS or JS?
- Can you explain what the DOM is?
- Can you explain why structure matters?

---

## 2. Document Structure

### What document structure is

Document structure defines **the required skeleton of every HTML page**.

Without correct structure:

- Browsers guess
- Accessibility breaks
- SEO degrades

---

### Minimal valid HTML document

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Title</title>
      </head>
      <body>
        Content
      </body>
    </html>

Every HTML page must follow this hierarchy.

---

### DOCTYPE

    <!DOCTYPE html>

Purpose:

- Tells the browser to use standards mode
- Prevents legacy quirks mode

Rule:

- Always include it
- No version numbers needed

---

### html element

Root of the document.

    <html lang="en">

Why `lang` matters:

- Screen readers
- Search engines
- Translation tools

---

### head element

Contains **metadata**, not visible content.

Common elements:

- title
- meta
- link
- style
- script (sometimes)

The head configures the page.

---

### meta charset

    <meta charset="UTF-8" />

Defines:

- Character encoding
- How text is interpreted

Rule:

- Always include it
- Place it early in head

---

### title

    <title>Page Title</title>

Rules:

- Required
- One per page
- Shown in browser tab and search results

---

### body element

Contains **all visible content**.

Includes:

- Text
- Images
- Forms
- Sections

Everything users see lives here.

---

### Script placement

Common pattern:

    <script src="app.js" defer></script>

Why defer:

- HTML parses first
- DOM is ready
- No render blocking

Avoid:

- Inline scripts in body without reason

---

### What not to put in head

- Visible text
- Layout containers
- Content elements

Head is configuration, not content.

---

### Common mistakes

- Missing DOCTYPE
- Missing lang attribute
- Multiple titles
- Content inside head

---

### Core rules to internalize

- Structure is mandatory
- Head configures, body displays
- lang improves accessibility
- DOCTYPE prevents quirks

---

### One-sentence recall

HTML document structure defines the mandatory skeleton that browsers use to correctly interpret content.

---

### Daily self-check

- Can you write a full HTML skeleton from memory?
- Can you explain why lang matters?
- Can you explain what head is for?

---

## 3. Elements & Tags

### What an element is

An HTML element is the **basic building block** of a webpage.

It usually consists of:

- An opening tag
- Content
- A closing tag

Example:

    <p>Hello</p>

---

### Tags vs elements

Tag:

- The markup syntax (`<p>`)

Element:

- The tag + content + meaning

People say “tag” casually, but **element** is the correct term.

---

### Opening and closing tags

Most elements have both:

    <h1>Title</h1>

Some elements are **void elements** (no closing tag):

    <img />
    <input />
    <br />
    <meta />

Void elements cannot contain children.

---

### Nesting elements

Elements can contain other elements.

    <div>
      <p>Text</p>
    </div>

Rules:

- Proper nesting is required
- Tags must close in order

Invalid:

    <p><strong>Text</p></strong>

---

### Block vs inline elements

Block elements:

- Start on a new line
- Can contain other block and inline elements

Examples:

- div
- section
- article
- p
- h1–h6

Inline elements:

- Flow within text
- Cannot contain block elements

Examples:

- span
- a
- strong
- em

---

### Content model matters

Each element has rules about:

- What it can contain
- Where it can appear

Example:

- `<p>` cannot contain `<div>`
- `<ul>` can only contain `<li>`

---

### Self-closing syntax

In HTML:

- `<img>` is valid
- `<img />` is also accepted

HTML is not XML.
Closing slash is optional for void elements.

---

### Whitespace behavior

HTML collapses whitespace.

    <p>Hello     world</p>

Renders as:

- "Hello world"

Line breaks in code do not equal line breaks on screen.

---

### Comments

    <!-- This is a comment -->

Comments:

- Are ignored by the browser
- Should not contain sensitive info

---

### Common mistakes

- Invalid nesting
- Using div for everything
- Forgetting void elements have no children

---

### Core rules to internalize

- Elements define structure and meaning
- Nesting must be valid
- Block and inline behave differently
- Whitespace is collapsed

---

### One-sentence recall

HTML elements define structured content through tags, nesting rules, and content models.

---

### Daily self-check

- Can you explain block vs inline?
- Can you explain void elements?
- Can you spot invalid nesting?

---

## 4. Attributes

### What attributes are

Attributes provide **additional information** about an element.

They modify:

- Behavior
- Meaning
- Metadata

Syntax:

    <tag attribute="value">content</tag>

---

### Common attributes

- id
- class
- title
- style
- hidden
- data-\*

Example:

    <p id="intro" class="lead">Text</p>

---

### id

- Must be unique per page
- Used for:
  - Anchors
  - CSS
  - JavaScript targeting

    <section id="about"></section>

Rule:

- One id value per element
- No duplicates

---

### class

- Reusable identifier
- Used mainly for CSS

    <div class="card primary"></div>

Multiple classes:

- Space-separated
- Order does not matter

---

### Boolean attributes

Presence = true  
Absence = false

Examples:

    <input disabled>
    <option selected>
    <video controls>

Do NOT write:

    disabled="false"  // still true

---

### Global attributes

Available on all elements:

- id
- class
- style
- title
- hidden
- tabindex

---

### data-\* attributes

Store custom data.

    <div data-user-id="42"></div>

Accessed by JS, ignored by browser semantics.

Use when:

- You need metadata
- Not for styling or behavior logic

---

### Attribute vs property (important)

Attributes:

- Defined in HTML
- Static

Properties:

- Live values in the DOM
- Can change via JS

Example:

- value attribute vs input.value property

---

### Style attribute

Inline CSS.

    <p style="color: red;"></p>

Avoid:

- Hard to maintain
- Breaks separation of concerns

---

### Quoting values

Always quote attribute values.

Valid:
class="box"

Avoid:
class=box

---

### Common mistakes

- Duplicate ids
- Using data-\* instead of proper elements
- Relying on inline styles
- Treating attributes like JS variables

---

### Core rules to internalize

- Attributes add meaning or configuration
- id is unique, class is reusable
- Boolean attributes depend on presence
- data-\* is for metadata only

---

### One-sentence recall

Attributes configure elements by adding metadata, identifiers, and behavior hints.

---

### Daily self-check

- Can you explain id vs class?
- Can you explain boolean attributes?
- Can you explain attribute vs property?

---

## 5. Semantic HTML

### What semantic HTML is

Semantic HTML uses elements that **describe the meaning of content**, not its appearance.

Meaning matters for:

- Accessibility
- SEO
- Maintainability

---

### Semantic vs non-semantic

Non-semantic:

- div
- span

Semantic:

- header
- nav
- main
- section
- article
- footer
- aside

---

### Why semantics matter

Correct semantics:

- Improve screen reader output
- Improve search engine understanding
- Reduce need for ARIA
- Make code self-documenting

---

### Page landmarks

Landmark elements define page regions.

Common layout:

    <header></header>
    <nav></nav>
    <main>
      <section>
        <article></article>
      </section>
    </main>
    <footer></footer>

Rules:

- Only one main per page
- header and footer can appear multiple times

---

### section vs article

article:

- Standalone, reusable content
- Can be syndicated

section:

- Thematic grouping of content
- Not standalone

If it makes sense alone → article.

---

### Headings hierarchy

Headings define document outline.

Rules:

- h1–h6 represent hierarchy
- Do not skip levels
- Do not use headings for styling

Example:

    <h1>Page</h1>
      <h2>Section</h2>
        <h3>Subsection</h3>

---

### nav

Use nav for:

- Primary navigation
- Major link groups

Not for:

- Every link list

---

### figure and figcaption

Used for self-contained media.

    <figure>
      <img src="img.png" alt="..." />
      <figcaption>Description</figcaption>
    </figure>

---

### When to use div

Use div only when:

- No semantic element fits
- You need a styling or grouping hook

div has no meaning.

---

### ARIA vs semantic HTML

Rule:

- Use semantic HTML first
- Use ARIA only when semantics are missing

ARIA does not fix bad HTML.

---

### Common mistakes

- Using div for everything
- Breaking heading order
- Overusing ARIA roles

---

### Core rules to internalize

- Semantics describe meaning
- Headings create structure
- Landmarks aid navigation
- div is a last resort

---

### One-sentence recall

Semantic HTML uses meaningful elements to describe content structure and purpose.

---

### Daily self-check

- Can you choose section vs article?
- Can you explain why headings matter?
- Can you explain why ARIA is secondary?

---

## 6. Text Content

### Text in HTML

Text content conveys **meaning and hierarchy**, not just characters on a screen.

HTML provides specific elements for different types of text.

---

### Headings

Used to define document structure.

    <h1>Main title</h1>
    <h2>Section</h2>
    <h3>Subsection</h3>

Rules:

- Use in order
- Do not skip levels
- One h1 per page (practical rule)

---

### Paragraphs

Used for blocks of text.

    <p>This is a paragraph.</p>

Rules:

- Do not nest paragraphs
- Do not use <br> for spacing

---

### Inline text semantics

Used to give meaning within text.

Common elements:

- strong → strong importance
- em → emphasis
- mark → highlighted text
- code → code fragment
- small → fine print

Example:

    <p><strong>Warning:</strong> Read carefully.</p>

---

### strong vs b

strong:

- Semantic importance

b:

- Visual styling only

Prefer strong.

---

### em vs i

em:

- Emphasis that changes meaning

i:

- Alternate voice or mood

Prefer em.

---

### line breaks

    <br>

Used for:

- Addresses
- Poems
- Line-specific formatting

Not for layout or spacing.

---

### Preformatted text

Preserves whitespace.

    <pre>
      Line one
      Line two
    </pre>

Often used with:

    <code></code>

---

### Quotes

Inline quote:

    <q>Quote</q>

Block quote:

    <blockquote>
      <p>Quote text</p>
    </blockquote>

---

### Whitespace rules

- Multiple spaces collapse into one
- New lines are ignored
- Use CSS to control spacing

---

### Common mistakes

- Using div instead of p
- Using br for layout
- Using b and i for meaning

---

### Core rules to internalize

- Use headings for structure
- Use p for paragraphs
- Use semantic inline elements
- Whitespace is controlled by CSS

---

### One-sentence recall

HTML text elements convey structure and meaning beyond visual appearance.

---

### Daily self-check

- Can you explain strong vs b?
- Can you explain when to use br?
- Can you explain why p cannot contain p?

---

## 7. Links & Navigation

### What links are

Links connect documents and resources on the web.

They define **navigation and relationships**, not just clickable text.

---

### Anchor element

    <a href="https://example.com">Visit</a>

Required:

- href attribute

Without href:

- Not a link
- Not focusable

---

### Relative vs absolute URLs

Absolute:
https://example.com/page

Relative:
/page
./page
../page

Relative URLs depend on current location.

---

### Internal navigation

Linking within the same page:

    <a href="#section1">Go</a>

Target:

    <section id="section1"></section>

---

### target attribute

    <a href="..." target="_blank">Open</a>

Rule:

- Use sparingly
- Add rel for security

  rel="noopener noreferrer"

---

### Link text matters

Bad:
<a href="...">Click here</a>

Good:
<a href="...">Read documentation</a>

Why:

- Accessibility
- Screen readers
- SEO

---

### Navigation landmarks

Use nav for primary navigation.

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>

Do not use nav for:

- Footer links
- Every group of links

---

### Download links

    <a href="file.pdf" download>Download PDF</a>

---

### Email and phone links

Email:
<a href="mailto:test@example.com">Email</a>

Phone:
<a href="tel:+123456789">Call</a>

---

### Styling links

Do not remove focus styles without replacing them.

Keyboard users rely on focus indication.

---

### Common mistakes

- Missing href
- Poor link text
- Overusing target="\_blank"
- Removing focus outline

---

### Core rules to internalize

- href defines a real link
- Link text must be meaningful
- nav defines navigation regions
- Focus styles are critical

---

### One-sentence recall

Links define navigation and relationships between resources and must remain accessible.

---

### Daily self-check

- Can you explain absolute vs relative URLs?
- Can you explain why link text matters?
- Can you explain nav usage rules?

---

## 8. Images & Media

### Images in HTML

Images are **content**, not decoration.

They must always be meaningful or explicitly marked as decorative.

---

### img element

    <img src="photo.jpg" alt="Description">

Required:

- src
- alt

There is no closing tag.

---

### alt attribute (critical)

alt describes the image **for users who cannot see it**.

Rules:

- Informative image → descriptive alt
- Decorative image → empty alt

Decorative:

    <img src="bg.png" alt="">

Never:

- Omit alt
- Use filenames as alt text

---

### Image dimensions

Always provide size (directly or via CSS).

Why:

- Prevents layout shifts
- Improves performance

Example:

    <img src="img.jpg" alt="..." width="400" height="300">

---

### Responsive images

Use when image size depends on viewport.

Basic pattern:

    <img
      src="small.jpg"
      srcset="small.jpg 480w, large.jpg 1024w"
      sizes="(max-width: 600px) 100vw, 600px"
      alt="..."
    >

Browser chooses the best image.

---

### figure and figcaption

Use for images with captions.

    <figure>
      <img src="chart.png" alt="Sales chart">
      <figcaption>Sales over time</figcaption>
    </figure>

---

### Audio

    <audio controls>
      <source src="audio.mp3" type="audio/mpeg">
    </audio>

Rules:

- controls recommended
- Provide fallback text

---

### Video

    <video controls width="400">
      <source src="video.mp4" type="video/mp4">
    </video>

Rules:

- Avoid autoplay
- Avoid sound on load
- Include controls

---

### Autoplay restrictions

Browsers block:

- Autoplay with sound

Muted autoplay may work:

    <video autoplay muted loop></video>

Use sparingly.

---

### Accessibility rules

- Media must be controllable
- Avoid flashing content
- Provide captions when needed

---

### Common mistakes

- Missing alt
- Using images for text
- Autoplaying media with sound
- Oversized images

---

### Core rules to internalize

- alt is mandatory
- Images are content
- Size images explicitly
- Media must be user-controlled

---

### One-sentence recall

Images and media must be accessible, properly described, and sized to avoid layout and usability issues.

---

### Daily self-check

- Can you write good alt text?
- Can you explain decorative vs informative images?
- Can you explain why dimensions matter?

---

## 9. Lists

### What lists are

Lists group related items in a meaningful order.

They communicate:

- Sequence
- Grouping
- Hierarchy

---

### Unordered lists

Used when order does not matter.

    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>

---

### Ordered lists

Used when order matters.

    <ol>
      <li>Step one</li>
      <li>Step two</li>
    </ol>

---

### List items

li elements:

- Must be children of ul or ol
- Cannot exist alone

Invalid:

    <li>Item</li>

---

### Description lists

Used for name–value pairs.

    <dl>
      <dt>HTML</dt>
      <dd>Markup language</dd>
    </dl>

Used for:

- Definitions
- Metadata
- FAQs

---

### Nesting lists

Lists can be nested.

    <ul>
      <li>Item
        <ul>
          <li>Subitem</li>
        </ul>
      </li>
    </ul>

---

### Styling lists

Do not remove list semantics.

Avoid:

- Replacing lists with divs
- Removing bullets without reason

Use CSS for appearance, not structure.

---

### Lists in navigation

Navigation menus should be lists.

    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>

---

### Common mistakes

- Using divs instead of lists
- Incorrect nesting
- Breaking semantics for styling

---

### Core rules to internalize

- ul = unordered
- ol = ordered
- dl = description
- li must live inside ul/ol

---

### One-sentence recall

HTML lists group related content with clear semantic meaning.

---

### Daily self-check

- Can you choose ul vs ol?
- Can you explain when to use dl?
- Can you spot invalid list markup?

---

## 10. Tables

### What tables are for

Tables are used for **tabular data**.

They are NOT for:

- Layout
- Page structure

Use tables only when data has rows and columns.

---

### Basic table structure

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alice</td>
          <td>30</td>
        </tr>
      </tbody>
    </table>

Hierarchy matters.

---

### Core table elements

- table → container
- thead → header rows
- tbody → body rows
- tfoot → footer rows
- tr → table row
- th → header cell
- td → data cell

---

### th vs td

th:

- Header cell
- Describes a column or row
- Is semantic and accessible

    <th scope="col">Age</th>

scope values:

- col
- row

---

### Captions

Describe what the table represents.

    <table>
      <caption>User data</caption>
      ...
    </table>

Caption:

- Improves accessibility
- Is read by screen readers first

---

### Table accessibility basics

Rules:

- Always use th for headers
- Use scope when needed
- Avoid complex merged cells

Avoid:

- colspan / rowspan when possible

---

### Table layout is CSS’s job

Do not use tables to:

- Align content
- Create columns for layout

Use CSS Grid or Flexbox instead.

---

### Styling tables

Use CSS:

- Borders
- Spacing
- Alignment

HTML defines structure only.

---

### Common mistakes

- Using tables for layout
- Missing th
- No caption
- Overusing colspan/rowspan

---

### Core rules to internalize

- Tables are for data
- th gives meaning
- Caption explains purpose
- Structure over layout

---

### One-sentence recall

HTML tables semantically represent tabular data using rows, columns, and headers.

---

### Daily self-check

- Can you explain th vs td?
- Can you explain why tables are bad for layout?
- Can you explain when caption is needed?

---

## 11. Forms

### What forms are

Forms collect **user input** and submit it to a server or JavaScript.

Forms define:

- What data is collected
- How it is grouped
- How it is submitted

---

### form element

    <form action="/submit" method="post">
      ...
    </form>

Attributes:

- action → where data is sent
- method → how it is sent (get or post)

---

### Form controls

Common controls:

- input
- textarea
- select
- button

Controls must be inside a form to submit automatically.

---

### Labels (critical)

Labels associate text with inputs.

    <label for="email">Email</label>
    <input id="email" type="email">

Rules:

- Every input should have a label
- Improves accessibility and usability

Alternative (wrapped):

    <label>
      Email
      <input type="email">
    </label>

---

### name attribute

The name attribute defines the **key** sent to the server.

    <input name="email">

Without name:

- Value is not submitted

---

### GET vs POST

GET:

- Data in URL
- Bookmarkable
- Limited length

POST:

- Data in request body
- Used for sensitive or large data

---

### Buttons

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button">Click</button>

Rule:

- Always specify type

Default type is submit.

---

### Grouping controls

Use fieldset and legend.

    <fieldset>
      <legend>Account</legend>
      <input>
    </fieldset>

Improves accessibility.

---

### Validation (HTML-level)

Basic validation without JS.

    <input type="email" required>

Common attributes:

- required
- minlength / maxlength
- pattern

Browser handles validation UI.

---

### Disabling controls

    <input disabled>

Disabled inputs:

- Are not submitted
- Are skipped by focus

---

### Common mistakes

- Missing labels
- Missing name attributes
- Wrong button type
- Relying only on JS validation

---

### Core rules to internalize

- Forms group inputs
- Labels are mandatory
- name controls submission
- HTML validation is free and useful

---

### One-sentence recall

HTML forms define how user input is collected, labeled, validated, and submitted.

---

### Daily self-check

- Can you explain label vs placeholder?
- Can you explain why name is required?
- Can you explain GET vs POST?

---

## 12. Input Types

### What input types are

Input types tell the browser **what kind of data is expected**.

They affect:

- Keyboard type
- Validation
- Accessibility
- User experience

---

### Common input types

    text
    email
    password
    number
    checkbox
    radio
    date
    file
    submit

---

### text

Default type.

    <input type="text">

Used for:

- Free-form text

---

### email

    <input type="email">

Features:

- Email keyboard on mobile
- Built-in validation

---

### password

    <input type="password">

Features:

- Masked input
- Not encrypted by default

---

### number

    <input type="number">

Attributes:

- min
- max
- step

Use sparingly:

- Many numeric inputs are better as text

---

### checkbox

    <input type="checkbox">

Represents:

- True / false
- Multiple selections

Label clicking toggles it.

---

### radio

    <input type="radio" name="group">

Rules:

- Radios with same name form a group
- Only one can be selected

---

### date and time

    <input type="date">
    <input type="time">

Browser provides picker UI.

---

### file

    <input type="file">

Attributes:

- accept
- multiple

---

### submit

    <input type="submit" value="Send">

Usually replaced by button.

---

### Input attributes

Common attributes:

- placeholder (hint, not label)
- required
- disabled
- readonly
- autocomplete

---

### Accessibility rules

- Placeholder is not a label
- Use labels always
- Use correct types for better UX

---

### Common mistakes

- Using text instead of email
- Using placeholder as label
- Overusing number input
- Missing name attribute

---

### Core rules to internalize

- Input type affects UX
- Browser validation is free
- Label is mandatory
- Name controls submission

---

### One-sentence recall

Input types communicate expected data and enable better validation and user experience.

---

### Daily self-check

- Can you choose the correct input type?
- Can you explain placeholder vs label?
- Can you explain radio grouping?

---

## 13. Accessibility (A11y) Basics

### What accessibility is

Accessibility ensures content is usable by **everyone**, including users with:

- Screen readers
- Keyboards only
- Vision, motor, or cognitive impairments

Accessibility is not optional. It is part of correct HTML.

---

### The core principle

If you use **proper semantic HTML**, most accessibility comes for free.

Bad HTML requires ARIA.  
Good HTML often does not.

---

### Keyboard accessibility

Everything interactive must be usable with a keyboard.

Rules:

- Links and buttons must be focusable
- Focus order must be logical
- Visible focus indicator must exist

Do not remove focus styles unless you replace them.

---

### Labels and form controls

Every form control must have an accessible name.

Good:
<label for="email">Email</label>

Bad:
<input placeholder="Email">

Placeholder is not a label.

---

### Images and alt text

Screen readers read alt text.

Rules:

- Informative image → meaningful alt
- Decorative image → empty alt (`alt=""`)
- Never omit alt

---

### Headings and landmarks

Screen readers navigate by:

- Headings
- Landmarks (header, nav, main, footer)

Rules:

- Use heading hierarchy correctly
- One main landmark per page

---

### Buttons vs links

Buttons:

- Trigger actions

Links:

- Navigate to resources

Do not mix them.

Bad:
<a onclick="submit()">Submit</a>

Good:
<button>Submit</button>

---

### ARIA (use sparingly)

ARIA adds meaning when HTML cannot.

Rules:

- Do not replace semantic HTML with ARIA
- ARIA does not fix bad structure

Example:

- Use <button>, not role="button"

---

### Color and contrast

Rules:

- Text must have sufficient contrast
- Color alone must not convey meaning

Example:

- Error messages need text, not just red color

---

### Common mistakes

- Missing labels
- Skipping heading levels
- Using divs as buttons
- Removing focus outlines
- Overusing ARIA

---

### Core rules to internalize

- Semantic HTML is accessibility
- Keyboard users matter
- Labels and alt text are mandatory
- ARIA is a last resort

---

### One-sentence recall

Accessibility means using correct HTML so all users can navigate, understand, and interact with content.

---

### Daily self-check

- Can you use your site with only a keyboard?
- Can a screen reader understand your structure?
- Did you use HTML before ARIA?

---

## 14. Metadata & SEO Basics

### What metadata is

Metadata is information **about the document**, not visible page content.

It helps:

- Browsers
- Search engines
- Social platforms
- Accessibility tools

Metadata lives in the head.

---

### title (SEO critical)

    <title>Page Title</title>

Rules:

- Required
- One per page
- Descriptive and concise

Title is used for:

- Browser tabs
- Search results

---

### meta description

    <meta name="description" content="Page summary">

Purpose:

- Search result snippet
- Improves click-through rate

Rules:

- One per page
- Human-readable
- Not a ranking factor, but important

---

### charset

    <meta charset="UTF-8">

Defines how text is interpreted.
Always include it.

---

### viewport

    <meta name="viewport" content="width=device-width, initial-scale=1">

Critical for:

- Mobile layouts
- Responsive design

Without it:

- Pages render incorrectly on mobile

---

### Robots meta

Controls indexing behavior.

    <meta name="robots" content="index, follow">

Common values:

- index / noindex
- follow / nofollow

---

### Open Graph (social sharing)

Used by platforms like Facebook, LinkedIn.

    <meta property="og:title" content="Title">
    <meta property="og:description" content="Description">
    <meta property="og:image" content="image.jpg">

Controls link previews.

---

### Twitter cards

    <meta name="twitter:card" content="summary_large_image">

Used for Twitter previews.

---

### Link metadata

Used for external resources.

    <link rel="icon" href="/favicon.ico">
    <link rel="canonical" href="https://example.com/page">

Canonical:

- Prevents duplicate content issues

---

### SEO basics (HTML-level)

HTML SEO fundamentals:

- Correct title
- Proper headings
- Semantic elements
- Descriptive links
- Accessible images

SEO is not keywords stuffing.

---

### Common mistakes

- Missing title
- Duplicate titles
- Missing viewport
- Misusing meta keywords (obsolete)

---

### Core rules to internalize

- Metadata configures how pages are interpreted
- Title and description matter most
- Viewport is mandatory
- SEO starts with good HTML

---

### One-sentence recall

Metadata defines how documents are interpreted, indexed, and previewed across platforms.

---

### Daily self-check

- Can you explain title vs description?
- Can you explain why viewport matters?
- Can you explain canonical URLs?

---

## 15. HTML vs CSS vs JavaScript (Separation of Concerns)

### The core principle

Each technology has a **single responsibility**.

- HTML → structure and meaning
- CSS → presentation and layout
- JavaScript → behavior and logic

Mixing responsibilities causes fragile code.

---

### HTML’s responsibility

HTML answers:

- What is this content?
- What role does it play?

HTML does NOT:

- Control layout
- Control interaction logic

Bad:

- Using divs to simulate buttons
- Encoding layout in markup

---

### CSS’s responsibility

CSS answers:

- How does it look?
- How is it laid out?

CSS does NOT:

- Define meaning
- Contain business logic

Bad:

- Styling based on content meaning
- Using inline styles everywhere

---

### JavaScript’s responsibility

JavaScript answers:

- What happens when users interact?
- How does data change?
- When should UI update?

JavaScript does NOT:

- Define structure
- Replace semantics

Bad:

- Building UI entirely with JS when HTML exists

---

### Why separation matters

Good separation:

- Improves maintainability
- Improves accessibility
- Improves performance
- Improves collaboration

Bad separation:

- Makes bugs harder to find
- Breaks accessibility
- Creates tight coupling

---

### Example of good separation

HTML:
<button class="btn">Save</button>

CSS:
.btn { color: white; }

JS:
button.addEventListener("click", save);

---

### Progressive enhancement

Start with:

1. Functional HTML
2. Enhanced with CSS
3. Enhanced with JS

Page should still work without JS when possible.

---

### Inline usage rules

HTML:

- Avoid inline styles
- Avoid inline scripts

Use:

- External CSS
- External JS

---

### Frameworks do not remove responsibility

React, Vue, etc:

- Still produce HTML
- Still rely on CSS
- Still run JS

Fundamentals do not change.

---

### Common mistakes

- Styling instead of structuring
- JS-generated everything
- Ignoring semantics due to frameworks

---

### Core rules to internalize

- One responsibility per layer
- HTML first, JS last
- Semantics survive frameworks

---

### One-sentence recall

Separation of concerns keeps structure, presentation, and behavior independent and maintainable.

---

### Daily self-check

- Can you justify each line’s responsibility?
- Can you remove JS and still read content?
- Can you remove CSS and still understand structure?

---

## 16. Common HTML Pitfalls

### Using div for everything

Mistake:

- Replacing semantic elements with divs

Why it’s bad:

- Loses meaning
- Hurts accessibility
- Makes code harder to understand

Fix:

- Use semantic elements first
- Use div only when nothing fits

---

### Missing or bad alt text

Mistake:

- Omitting alt
- Using filenames as alt

Why it’s bad:

- Screen readers lose information
- Fails accessibility

Fix:

- Descriptive alt for content
- Empty alt for decorative images

---

### Skipping heading levels

Mistake:

<h1>
<h3>

Why it’s bad:

- Breaks document outline
- Confuses screen readers

Fix:

- Use headings in order

---

### Using links as buttons (and vice versa)

Mistake:
<a onclick="submit()">Submit</a>

Why it’s bad:

- Incorrect semantics
- Keyboard and screen reader issues

Fix:

- Use button for actions
- Use a for navigation

---

### Missing labels on inputs

Mistake:

- Relying on placeholder

Why it’s bad:

- Placeholder disappears
- Screen readers fail

Fix:

- Always use label

---

### Tables for layout

Mistake:

- Using tables to position content

Why it’s bad:

- Breaks semantics
- Hard to maintain
- Poor accessibility

Fix:

- Use CSS layout systems

---

### Invalid nesting

Mistake:

- p inside p
- div inside ul

Why it’s bad:

- Browser auto-fixes hide bugs

Fix:

- Follow content model rules

---

### Inline styles and scripts

Mistake:

- style=""
- onclick=""

Why it’s bad:

- Breaks separation of concerns
- Hard to scale

Fix:

- External CSS and JS

---

### Ignoring validation

Mistake:

- Never checking HTML validity

Why it’s bad:

- Hidden layout and accessibility bugs

Fix:

- Use HTML validators

---

### Core rules to internalize

- Semantics first
- Accessibility is not optional
- Structure before style
- Valid HTML matters

---

### One-sentence recall

Most HTML bugs come from ignoring semantics, accessibility, and structural rules.

---

### Daily self-check

- Can you spot div abuse?
- Can you spot missing labels or alt?
- Can you spot layout misuse?

---

## 17. Daily HTML Practice

### Purpose

This section is reviewed **every day** to force active recall and correct mental models.

Answer without looking at code.

---

### HTML mental model

- Explain HTML without mentioning CSS or JavaScript
- Explain what the DOM is
- Explain why HTML does not “run”

---

### Document structure

- Write a full HTML skeleton from memory
- Explain why DOCTYPE matters
- Explain what belongs in head vs body

---

### Elements & semantics

- Explain block vs inline
- Explain semantic vs non-semantic
- Explain when to use div

---

### Attributes

- Explain id vs class
- Explain boolean attributes
- Explain attribute vs property

---

### Text content

- Explain strong vs b
- Explain em vs i
- Explain why p cannot contain p

---

### Links & navigation

- Explain absolute vs relative URLs
- Explain why link text matters
- Explain nav usage rules

---

### Images & media

- Explain informative vs decorative images
- Write good alt text
- Explain why width/height matter

---

### Lists & tables

- Choose ul vs ol vs dl
- Explain th vs td
- Explain why tables are not for layout

---

### Forms & inputs

- Explain label vs placeholder
- Explain name attribute
- Choose correct input types

---

### Accessibility

- Explain keyboard navigation
- Explain heading hierarchy
- Explain when ARIA is appropriate

---

### Metadata & SEO

- Explain title vs description
- Explain viewport
- Explain canonical URLs

---

### Separation of concerns

- Assign responsibility to HTML/CSS/JS
- Explain progressive enhancement

---

### Final rule

If you cannot explain it in one sentence,
you do not understand it yet.

Review daily until explanations are automatic.
