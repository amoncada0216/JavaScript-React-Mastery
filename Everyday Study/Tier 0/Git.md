# Git Fundamentals

## 1. Git Mental Model

### What Git is

Git is a **distributed version control system**.

It does NOT track files.
It tracks **snapshots of the entire project over time**.

Each snapshot is called a **commit**.

---

### Core idea

Git stores a timeline of snapshots.

You:

- Make changes
- Select changes
- Save a snapshot
- Move forward or backward in history

Nothing is sent anywhere unless you explicitly do it.

---

### Distributed by default

Every Git repository contains:

- The full history
- All commits
- All branches

There is no “central” Git.
Remotes are just copies.

---

### Snapshot vs diff (critical shift)

Most people think Git stores diffs.
It does not.

Git stores:

- A snapshot of the whole project
- With references to unchanged files

This makes branching cheap and fast.

---

### Your local repository is complete

You can:

- Commit
- Branch
- Merge
- Rebase
- Inspect history

All without internet access.

Network is only needed for sharing.

---

### Git is a content graph

Internally, Git is a **directed acyclic graph (DAG)**.

- Commits point to parent commits
- Branches point to commits
- HEAD points to your current position

You are always “somewhere” in the graph.

---

### Nothing is automatic

Git will never:

- Commit for you
- Push for you
- Merge without asking

Every action is explicit.

This is a feature, not a flaw.

---

### Safety model

Git is conservative.

- Most actions are reversible
- Data is rarely deleted immediately
- “Lost” commits usually still exist

Understanding the model makes Git feel safe.

---

### Git ≠ GitHub

Git:

- Tool
- Runs locally

GitHub / GitLab / Bitbucket:

- Hosting services
- Collaboration platforms

You can use Git without any of them.

---

### Core rules to internalize

- Git tracks snapshots, not files
- Your local repo is complete
- Commits form a graph
- You move pointers, not files
- Nothing happens unless you ask

---

### One-sentence recall

Git is a distributed system that tracks project history as snapshots organized in a commit graph.

---

### Daily self-check

- Can you explain Git without mentioning GitHub?
- Can you explain what a commit really is?
- Can you explain why branching is cheap?

---

## 2. Repositories & Working Directory

### What a repository is

A Git repository is a **directory with a history**.

It contains:

- Your project files
- A hidden .git directory
- All commits, branches, and metadata

The .git directory is the repository.

---

### Working directory

The working directory is:

- The files you see and edit
- A checkout of a specific commit

It reflects the current state pointed to by HEAD.

---

### Repository vs working directory

Repository:

- History
- Commits
- Branches
- Objects

Working directory:

- Editable files
- Current snapshot’s content

They are related but not the same.

---

### Creating a repository

Two ways:

Initialize new:

    git init

Clone existing:

    git clone <url>

Both produce a repository with full history.

---

### What .git contains (conceptually)

Inside .git:

- Object database (snapshots)
- References (branches, tags)
- HEAD pointer
- Configuration

You rarely touch this directly.

---

### Tracked vs untracked files

Tracked:

- Known to Git
- Part of history

Untracked:

- New files
- Not yet added

  git status

Shows file states.

---

### File states (high level)

A file can be:

- Untracked
- Modified
- Staged
- Committed

This leads directly to the three-state model.

---

### Deleting files

Deleting a file in the working directory:

- Does not remove it from history
- Only removes it in the next commit

History remains intact.

---

### Common mistakes

- Deleting .git accidentally
- Confusing repository with working directory
- Thinking clone is “linked” live to remote

---

### Core rules to internalize

- .git is the repository
- Working directory is a checkout
- History lives separately from files
- clone gives full history

---

### One-sentence recall

A Git repository stores project history, while the working directory is a mutable checkout of a snapshot.

---

### Daily self-check

- Can you explain what lives in .git?
- Can you explain tracked vs untracked?
- Can you explain what clone actually does?

---

## 3. Snapshots vs Diffs

### The common misconception

Most people think Git stores **diffs between files**.

It does not.

Git stores **snapshots of the entire project** at each commit.

This mental shift is critical.

---

### What a snapshot means

A snapshot is:

- The complete state of the project at a moment in time

When you commit, Git:

- Saves the current state
- Reuses unchanged files by reference
- Does NOT copy everything again

Efficient and fast.

---

### How Git avoids duplication

If a file did not change:

- Git points to the existing object
- No extra storage is used

Only changed content creates new objects.

---

### Why diffs still exist

Diffs are:

- A comparison view
- Generated on demand

Commands like:

    git diff
    git show

Produce diffs for humans.

Internally, Git still works with snapshots.

---

### Visual mental model

Think of commits as nodes:

    A --- B --- C

Each node:

- Represents a full project snapshot
- Points to previous snapshot(s)

Not a list of changes, but a graph of states.

---

### Why this matters

Because Git uses snapshots:

- Branching is cheap
- Merging is predictable
- History is reliable

This is why Git scales so well.

---

### Example comparison

Traditional diff-based thinking:

- File A changed line 3
- File B changed line 10

Git snapshot thinking:

- “This is the project as it looked now”

---

### Practical consequence

You should commit:

- Logical states
- Working checkpoints

Not:

- “one file at a time”
- “tiny line changes without context”

Commits represent **states**, not edits.

---

### Common mistakes

- Thinking commits are patches
- Fear of committing often
- Over-squashing early history

---

### Core rules to internalize

- Commits are snapshots
- Diffs are views, not storage
- Unchanged files are reused
- Git stores states, not edits

---

### One-sentence recall

Git records complete project snapshots and only shows diffs as a way to compare them.

---

### Daily self-check

- Can you explain why Git is not diff-based?
- Can you explain why branching is cheap?
- Can you explain what a commit really stores?

---

## 4. The Three States (Working Tree, Staging, Commit)

### The core workflow

Git has **three distinct states** your files move through.

1. Working Tree
2. Staging Area
3. Commit (Repository)

Understanding this removes 80% of Git confusion.

---

### Working tree

The working tree is:

- Your current files on disk
- What you edit in your editor

Files here can be:

- Modified
- Untracked

Nothing here is saved to history yet.

---

### Staging area (index)

The staging area is:

- A preparation zone
- A place to select exactly what goes into the next commit

You explicitly choose changes.

    git add file.txt

This does NOT commit.
It stages.

---

### Commit

A commit is:

- A snapshot saved to history
- Built from what is in the staging area

  git commit -m "message"

Only staged content becomes part of the commit.

---

### Why staging exists

Staging allows you to:

- Commit related changes together
- Exclude unfinished work
- Craft clean history

Example:

- Fix bug
- Refactor unrelated code
- Commit them separately

---

### Partial staging

You can stage parts of a file.

    git add -p

This lets you:

- Split one file into multiple logical commits

---

### Visual mental model

Working Tree → Staging Area → Commit

You move changes forward intentionally.

---

### git status (your compass)

    git status

Shows:

- What is modified
- What is staged
- What is untracked

Run it often.

---

### Common mistakes

- Thinking git add commits
- Staging everything blindly
- Skipping staging entirely
- Using git commit -a without understanding it

---

### Core rules to internalize

- Editing ≠ staging
- Staging ≠ committing
- Commits only contain staged content
- Staging exists for precision

---

### One-sentence recall

Git changes flow from the working tree to staging and then into commits as snapshots.

---

### Daily self-check

- Can you explain why staging exists?
- Can you explain git add vs git commit?
- Can you explain how partial staging works?

---

## 5. Commits

### What a commit is

A commit is a **snapshot of the entire project** at a specific point in time.

It contains:

- The project snapshot
- A commit message
- Author and timestamp
- A reference to one or more parent commits

A commit is immutable once created.

---

### Creating a commit

A commit is created from the **staging area**.

    git commit -m "Describe the state"

Only staged changes are included.

---

### Commit messages (critical)

Good commit messages describe **why**, not just what.

Structure (recommended):

- Short summary (imperative)
- Optional body explaining context

Example:

- "Fix login validation edge case"
- "Refactor auth flow to reduce duplication"

Avoid:

- "update"
- "fix"
- "changes"

---

### Atomic commits

An atomic commit:

- Does one logical thing
- Can be reverted safely
- Leaves the project in a working state

Bad:

- One commit for many unrelated changes

Good:

- One commit per logical change

---

### Parents and history

Most commits have **one parent**.
Merge commits have **two parents**.

History is a graph, not a line.

---

### Amending commits

Fix the last commit:

    git commit --amend

Used for:

- Fixing commit message
- Adding forgotten changes

Do NOT amend commits already pushed to shared branches.

---

### Commit identity

Each commit has a unique hash (SHA).

    git show <hash>

The hash identifies:

- Content
- History position

If content changes, the hash changes.

---

### What commits are NOT

Commits are NOT:

- Patches
- Diffs
- File changes

They are complete project states.

---

### Common mistakes

- Committing everything blindly
- Writing vague messages
- Amending public commits
- Treating commits as temporary

---

### Core rules to internalize

- Commits are immutable snapshots
- Messages explain intent
- Small, atomic commits are safer
- History is a graph

---

### One-sentence recall

A commit is an immutable snapshot of the project with metadata and links to its history.

---

### Daily self-check

- Can you explain what a commit contains?
- Can you explain why atomic commits matter?
- Can you explain when amend is safe?

---

## 6. Branches

### What a branch is

A branch is **a movable pointer to a commit**.

It is not:

- A copy of files
- A separate folder
- A duplicate repository

It is simply a name that points to a commit in the graph.

---

### Why branches exist

Branches let you:

- Work on features in isolation
- Experiment safely
- Develop in parallel

Because commits are snapshots, branching is cheap.

---

### Creating a branch

    git branch feature-x

This:

- Creates a new pointer
- Does NOT switch to it

---

### Switching branches

    git switch feature-x

Or (older):

    git checkout feature-x

Now:

- HEAD points to feature-x
- Working directory updates to that snapshot

---

### Creating and switching (common)

    git switch -c feature-x

Equivalent to:

- Create branch
- Switch to it

---

### HEAD (preview)

HEAD is:

- A pointer to your current branch
- Or directly to a commit (detached HEAD)

You usually want HEAD pointing to a branch.

---

### Branch divergence

Branches diverge when:

- They point to different commits

Example:

    main:      A --- B --- C
                     \
    feature:           D --- E

Both share history up to B.

---

### Branches and commits

When you commit:

- The current branch pointer moves forward
- Other branches stay where they are

Commits do not belong to branches.
Branches point to commits.

---

### Deleting branches

    git branch -d feature-x

Deletes the pointer, not the commits.

Commits remain if reachable from elsewhere.

---

### Naming conventions

Common patterns:

- feature/login
- bugfix/header
- hotfix/crash

Use meaningful names.

---

### Common mistakes

- Thinking branches copy files
- Working directly on main
- Deleting branches before merging without understanding reachability

---

### Core rules to internalize

- Branches are pointers
- Switching branches changes the working tree
- Commits are independent of branches
- Deleting a branch deletes a pointer, not history

---

### One-sentence recall

A Git branch is a movable pointer that tracks a line of commits in the repository graph.

---

### Daily self-check

- Can you explain what a branch actually points to?
- Can you explain what happens when you commit on a branch?
- Can you explain why deleting a branch doesn’t delete commits?

---

## 7. HEAD

### What HEAD is

HEAD is a **pointer that tells Git where you currently are**.

Most of the time:

- HEAD → current branch → latest commit

HEAD never points to a file.
It points to a commit (directly or indirectly).

---

### HEAD pointing to a branch

Normal state:

    HEAD → main → commit C

When you commit:

- main moves forward
- HEAD moves with it

This is the standard workflow.

---

### Detached HEAD

HEAD can point directly to a commit.

Example:

    git checkout <commit>

Now:

    HEAD → commit B

No branch moves when you commit here.

---

### Why detached HEAD matters

If you commit in detached HEAD:

- The commit exists
- But no branch points to it

If you switch branches:

- That commit can become “lost”

Fix:

- Create a branch

  git switch -c temp-branch

---

### Inspecting HEAD

    git status

Tells you:

- Current branch
- Detached HEAD state

---

### Moving HEAD

Commands that move HEAD:

- git switch
- git checkout
- git reset

They all reposition HEAD differently.

---

### HEAD and history

HEAD defines:

- What snapshot is checked out
- What parent your next commit will have

Next commit always points to where HEAD is.

---

### Common mistakes

- Working in detached HEAD unintentionally
- Losing commits by not branching
- Confusing HEAD with branch names

---

### Core rules to internalize

- HEAD marks your current position
- HEAD usually points to a branch
- Detached HEAD is temporary
- Commits follow HEAD

---

### One-sentence recall

HEAD is Git’s pointer to your current position in the commit graph.

---

### Daily self-check

- Can you explain detached HEAD?
- Can you explain what HEAD points to?
- Can you explain how HEAD affects new commits?

---

## 8. Merging

### What merging is

Merging combines **two lines of history** into one.

It answers:
“How do I bring changes from one branch into another?”

Merging never rewrites existing commits.
It creates a new commit when needed.

---

### Basic merge

You merge **into the current branch**.

    git switch main
    git merge feature-x

Meaning:

- main receives feature-x’s changes
- feature-x itself is unchanged

---

### Fast-forward merge

Occurs when:

- The target branch has not diverged

Example:

    main:     A --- B
                  \
    feature:        C --- D

If main is at B and feature is at D:

- main can move directly to D
- No merge commit is created

This is a fast-forward.

---

### Merge commit

Occurs when branches have diverged.

Example:

    main:     A --- B --- E
                  \     /
    feature:        C --- D

Git creates a new commit (E) with:

- Two parents
- Combined snapshot

History is preserved.

---

### Why merge commits matter

Merge commits:

- Preserve branch history
- Show when integration happened
- Are useful in collaborative workflows

They make history non-linear but honest.

---

### Conflict during merge

A conflict happens when:

- Both branches changed the same lines
- Git cannot decide automatically

Git pauses and asks you to resolve.

---

### Conflict markers

Git marks conflicts in files:

    <<<<<<< HEAD
    code from current branch
    =======
    code from merged branch
    >>>>>>> feature-x

You must:

- Choose or combine changes
- Remove markers
- Stage the result
- Complete the merge

---

### Aborting a merge

If things go wrong:

    git merge --abort

Restores state before the merge.

---

### Merge vs rebase (preview)

Merge:

- Preserves history
- Adds merge commits

Rebase:

- Rewrites history
- Produces a linear timeline

Both are valid when used correctly.

---

### Common mistakes

- Merging the wrong branch
- Forgetting which branch you are on
- Panicking during conflicts
- Editing without understanding conflict markers

---

### Core rules to internalize

- You merge into the current branch
- Fast-forward means no divergence
- Merge commits preserve history
- Conflicts require manual resolution

---

### One-sentence recall

Merging integrates one branch’s history into another, preserving commits and sometimes creating a merge commit.

---

### Daily self-check

- Can you explain fast-forward vs merge commit?
- Can you explain why conflicts happen?
- Can you explain what merge commits represent?

---

## 9. Rebasing

### What rebasing is

Rebasing **replays commits onto a new base**.

It does NOT merge histories.
It **rewrites commit history**.

Think:
“Take my commits and place them somewhere else.”

---

### Basic rebase

You usually rebase the current branch onto another.

    git switch feature-x
    git rebase main

Meaning:

- feature-x commits are replayed on top of main
- feature-x history is rewritten
- main is unchanged

---

### Visual mental model

Before:

    main:     A --- B --- C
                    \
    feature:          D --- E

After rebase:

    main:     A --- B --- C
                          \
    feature:               D' --- E'

D' and E' are **new commits** with new hashes.

---

### Why commits change

Commit hashes include:

- Content
- Parent commit

Change the parent → hash changes.

That is why rebasing rewrites history.

---

### When rebasing is useful

Good use cases:

- Cleaning up local history
- Keeping feature branches up to date
- Avoiding unnecessary merge commits

Common workflow:

- Rebase locally
- Merge to main

---

### Interactive rebase

Used to edit history.

    git rebase -i HEAD~3

Allows you to:

- Reorder commits
- Squash commits
- Edit messages
- Drop commits

Used before sharing.

---

### Conflicts during rebase

Conflicts can occur just like merges.

Difference:

- You resolve conflicts **per commit**
- Then continue the rebase

  git rebase --continue

Abort if needed:

    git rebase --abort

---

### Golden rule (non-negotiable)

**Never rebase commits that have been pushed and shared.**

Why:

- Other people’s history breaks
- Causes duplicated commits
- Forces dangerous fixes

Rebase local, merge shared.

---

### Rebase vs merge (clear contrast)

Merge:

- Preserves history
- Adds merge commits
- Safe for shared branches

Rebase:

- Rewrites history
- Creates linear history
- Safe only for local work

---

### Common mistakes

- Rebasing shared branches
- Not understanding rewritten commits
- Using rebase to “fix” public history
- Panicking during rebase conflicts

---

### Core rules to internalize

- Rebase rewrites history
- Rebasing creates new commits
- Never rebase shared commits
- Interactive rebase is for cleanup

---

### One-sentence recall

Rebasing rewrites commit history by replaying commits onto a new base.

---

### Daily self-check

- Can you explain why rebasing changes hashes?
- Can you explain when rebase is safe?
- Can you explain rebase vs merge?

---

## 10. Remote Repositories

### What a remote is

A remote is a **named reference to another Git repository**.

It is not special.
It is just another copy of a repo, usually on a server.

Common name:

- origin (convention, not magic)

---

### What remotes are for

Remotes allow you to:

- Share commits
- Collaborate
- Back up history

Git itself does not require remotes.

---

### Viewing remotes

    git remote
    git remote -v

Shows:

- Remote names
- Fetch and push URLs

---

### Adding a remote

    git remote add origin https://example.com/repo.git

This:

- Registers a name
- Does not transfer data

---

### Cloning creates a remote

When you clone:

    git clone <url>

Git automatically:

- Creates a remote named origin
- Sets up tracking branches

---

### Remote branches

Remote branches represent **your last known state** of the remote.

Example:

- origin/main

They are:

- Read-only references
- Updated only when you fetch

---

### Local vs remote branches

Local branch:

- main
- feature-x

Remote-tracking branch:

- origin/main
- origin/feature-x

You do not commit directly to remote branches.

---

### Tracking branches

A local branch can track a remote branch.

Meaning:

- Git knows where to push
- Git knows what to compare against

Common setup:

- main tracks origin/main

---

### Multiple remotes

You can have more than one remote.

Example:

- origin (your fork)
- upstream (original repo)

Used in open-source workflows.

---

### Remotes are not live

Important:

- Remotes do not update automatically
- Your view can be outdated

You must fetch to update your knowledge.

---

### Common mistakes

- Thinking origin is special
- Thinking remote branches are writable
- Forgetting to fetch before comparing
- Pushing to the wrong remote

---

### Core rules to internalize

- Remotes are just references
- origin is a convention
- Remote branches are read-only
- Fetch updates your view, not your files

---

### One-sentence recall

A remote is a named reference to another Git repository used for sharing history.

---

### Daily self-check

- Can you explain what origin really is?
- Can you explain local vs remote branches?
- Can you explain what fetch updates?

---

## 11. Fetch vs Pull vs Push

### The three commands (big picture)

These commands control **how history moves between repositories**.

- fetch → download history
- pull → download + integrate
- push → upload history

They do very different things.

---

### git fetch

Fetch downloads commits from a remote **without touching your working directory**.

    git fetch

What it does:

- Updates remote-tracking branches (e.g. origin/main)
- Does NOT merge
- Does NOT change files

Safe command. Always safe.

---

### After fetch (important)

After fetching:

- Your local branches may be behind
- origin/main may be ahead of main

You can inspect differences before integrating.

---

### git pull

Pull is a **combination command**.

    git pull

Equivalent to:
git fetch
git merge (or rebase, depending on config)

Meaning:

- Downloads history
- Immediately integrates it into the current branch

Convenient, but less explicit.

---

### Pull with rebase

Some setups use rebase instead of merge.

    git pull --rebase

Meaning:

- Fetch remote changes
- Rebase your local commits on top

Cleaner history, more risk if misunderstood.

---

### git push

Push sends **your local commits** to a remote.

    git push

What it does:

- Uploads commits
- Moves remote branch pointers
- Never pulls anything

If the remote is ahead:

- Push is rejected
- You must integrate first

---

### Fast-forward requirement

Push succeeds only if:

- Remote branch can fast-forward
- No history is lost

Otherwise:

- Git protects the remote

---

### Typical safe workflow

1. git fetch
2. Inspect differences
3. merge or rebase
4. git push

This avoids surprises.

---

### Common mistakes

- Using pull blindly
- Pushing without fetching
- Confusing fetch with pull
- Thinking push syncs both ways

---

### Core rules to internalize

- fetch is read-only
- pull modifies your branch
- push uploads commits
- Nothing syncs automatically

---

### One-sentence recall

Fetch downloads history, pull integrates it, and push uploads your commits to a remote.

---

### Daily self-check

- Can you explain fetch without mentioning merge?
- Can you explain why pull can be dangerous?
- Can you explain why push can be rejected?

---

## 12. Conflicts

### What a conflict is

A conflict occurs when Git **cannot automatically combine changes**.

This happens when:

- Two branches modify the same lines
- Or one deletes what the other modifies

Git stops and asks you to decide.

---

### When conflicts happen

Most commonly during:

- git merge
- git rebase
- git cherry-pick
- git pull

Conflicts are normal in collaboration.

---

### Conflict markers

Git marks the file with conflict sections:

    <<<<<<< HEAD
    code from current branch
    =======
    code from incoming branch
    >>>>>>> feature-x

Meaning:

- Top = your current branch
- Bottom = changes being applied

---

### Resolving a conflict

Steps:

1. Open the conflicted file
2. Decide what the final code should be
3. Remove conflict markers
4. Save the file
5. Stage the file

   git add file.txt

6. Continue the operation

Merge:
git commit

Rebase:
git rebase --continue

---

### Aborting

If you want to back out:

Merge:
git merge --abort

Rebase:
git rebase --abort

Restores the pre-operation state.

---

### Conflict resolution tools

You may use:

- Your editor’s merge tool
- git mergetool

These help visualize differences.

---

### Important mindset

Git does not know intent.
It only knows text.

Conflicts are **logical decisions**, not errors.

---

### Common mistakes

- Panicking
- Deleting one side blindly
- Leaving conflict markers
- Forgetting to stage resolved files

---

### Core rules to internalize

- Conflicts are expected
- Git pauses and waits
- You decide the final content
- Staging marks resolution

---

### One-sentence recall

A conflict happens when Git cannot decide how to combine changes and requires manual resolution.

---

### Daily self-check

- Can you explain conflict markers?
- Can you explain merge vs rebase conflict resolution?
- Can you explain how to abort safely?

---

## 13. Undoing Changes

### Core idea

Git gives you **multiple ways to undo**, depending on:

- Where the change lives
- Whether it is committed
- Whether it was shared

Undoing is about **moving pointers**, not deleting history.

---

### Undoing working tree changes

Discard local edits (not staged):

    git restore file.txt

This:

- Resets file to last committed state
- Permanently discards local changes

Use carefully.

---

### Unstaging changes

Move changes out of staging back to working tree:

    git restore --staged file.txt

Files remain modified, just not staged.

---

### Amending the last commit

Fix the most recent commit:

    git commit --amend

Use for:

- Fixing commit messages
- Adding forgotten staged changes

Rule:

- Safe only if commit is not shared

---

### Reverting a commit (safe for shared history)

Create a new commit that undoes a previous one:

    git revert <commit>

Result:

- History preserved
- New commit reverses changes

This is the **safe undo** for public branches.

---

### Reset (powerful and dangerous)

Reset moves branch pointers.

Soft reset (keep changes staged):

    git reset --soft <commit>

Mixed reset (default, unstaged):

    git reset <commit>

Hard reset (discard everything):

    git reset --hard <commit>

Hard reset:

- Deletes working tree changes
- Dangerous if misused

---

### Reset vs revert

Reset:

- Rewrites history
- Moves pointers
- Local use only

Revert:

- Adds new commit
- Safe for shared branches

---

### Undoing a merge

Abort before commit:

    git merge --abort

Undo after commit:

- Use revert on the merge commit

---

### Recovering “lost” commits

Git rarely deletes data immediately.

Use:

    git reflog

Shows:

- Recent HEAD positions
- Allows recovery of commits

---

### Common mistakes

- Using reset on shared branches
- Hard resetting without checking
- Forgetting reflog exists

---

### Core rules to internalize

- Undo depends on state
- Reset rewrites history
- Revert preserves history
- Reflog is your safety net

---

### One-sentence recall

Git undo operations work by moving pointers or adding corrective commits, not deleting history.

---

### Daily self-check

- Can you choose reset vs revert?
- Can you explain soft vs hard reset?
- Can you explain how reflog saves you?

---

## 14. History & Logs

### Why history matters

Git history is:

- A record of decisions
- A debugging tool
- A collaboration artifact

Good history makes teams faster.

---

### git log

View commit history:

    git log

Shows:

- Commit hashes
- Author
- Date
- Message

History is shown from newest to oldest.

---

### Compact logs

Readable history:

    git log --oneline --graph --decorate

This shows:

- Branch structure
- Merge points
- HEAD position

Highly recommended.

---

### Viewing a specific commit

    git show <commit>

Displays:

- Commit metadata
- Snapshot diff

---

### Filtering history

By file:

    git log -- file.txt

By author:

    git log --author="Name"

By message:

    git log --grep="keyword"

---

### Blame

Shows who last changed each line.

    git blame file.txt

Used for:

- Understanding context
- Not for blaming people

---

### Following renames

Track file history across renames:

    git log --follow file.txt

---

### Comparing history

Compare branches:

    git log main..feature

Shows commits in feature not in main.

---

### Good history practices

- Clear commit messages
- Logical grouping
- Minimal noise

History is read more than written.

---

### Common mistakes

- Huge, unreadable logs
- Vague messages
- Ignoring history tools

---

### Core rules to internalize

- History is a tool
- log shows commits
- show inspects snapshots
- blame explains lines

---

### One-sentence recall

Git history tools allow you to inspect, understand, and navigate project evolution.

---

### Daily self-check

- Can you read a commit graph?
- Can you find when a bug was introduced?
- Can you explain blame without guilt?

---

## 15. Stashing

### What stashing is

Stashing temporarily **saves uncommitted changes** and cleans your working directory.

It is used when:

- You need to switch branches quickly
- Your work is incomplete
- You do not want to commit yet

Think: “put this aside for later”.

---

### Creating a stash

    git stash

This:

- Saves modified + staged changes
- Resets working directory to last commit

Your changes are not lost.

---

### Stash with message

    git stash push -m "work in progress"

Always name stashes if possible.

---

### Viewing stashes

    git stash list

Each stash has an index:

- stash@{0}
- stash@{1}

---

### Applying a stash

Apply and keep it:

    git stash apply

Apply and remove it:

    git stash pop

Use pop when you are done with it.

---

### Stashing specific files

    git stash push file.txt

Useful for partial work.

---

### Stash conflicts

Stashes can conflict when applied.

Resolution is the same as merge conflicts:

- Fix files
- Stage
- Continue working

---

### What stashing is NOT

Stashing is NOT:

- A backup strategy
- A replacement for commits
- Long-term storage

Stashes are temporary.

---

### Dropping stashes

Remove a stash:

    git stash drop stash@{0}

Clear all stashes:

    git stash clear

---

### Common mistakes

- Keeping stashes too long
- Forgetting what a stash contains
- Using stash instead of commits

---

### Core rules to internalize

- Stash is temporary
- Stashes are local only
- Commits are better than stashes
- Name your stashes

---

### One-sentence recall

Stashing temporarily saves uncommitted work so you can return to a clean working directory.

---

### Daily self-check

- Can you explain stash vs commit?
- Can you explain apply vs pop?
- Can you explain when not to stash?

---

## 16. Tags & Releases

### What tags are

Tags are **named references to specific commits**.

Unlike branches:

- Tags do not move
- They mark important points in history

Common use:

- Versions
- Releases
- Milestones

---

### Lightweight tags

Simple pointer to a commit.

    git tag v1.0.0

Pros:

- Fast
- Simple

Cons:

- No metadata

---

### Annotated tags (recommended)

Tags with metadata.

    git tag -a v1.0.0 -m "First stable release"

Contain:

- Tagger name
- Date
- Message

Use annotated tags for releases.

---

### Viewing tags

    git tag
    git show v1.0.0

---

### Tagging past commits

    git tag v1.0.0 <commit>

Useful for retroactive versioning.

---

### Pushing tags

Tags are NOT pushed automatically.

    git push origin v1.0.0

Push all tags:

    git push origin --tags

---

### Deleting tags

Local delete:

    git tag -d v1.0.0

Remote delete:

    git push origin :v1.0.0

---

### Releases (platform concept)

“Releases” are not a Git feature.
They are provided by platforms like GitHub.

A release typically:

- Points to a tag
- Adds release notes
- Attaches binaries

Git only knows about tags.

---

### Versioning conventions

Common pattern:

- vMAJOR.MINOR.PATCH
- v1.2.3

Meaning:

- MAJOR: breaking changes
- MINOR: new features
- PATCH: bug fixes

---

### Common mistakes

- Using branches instead of tags for versions
- Forgetting to push tags
- Moving tags (bad practice)

---

### Core rules to internalize

- Tags are fixed pointers
- Annotated tags are preferred
- Tags mark releases
- Releases ≠ Git feature

---

### One-sentence recall

Tags are immutable references used to mark important commits like releases.

---

### Daily self-check

- Can you explain tag vs branch?
- Can you explain annotated vs lightweight tags?
- Can you explain why tags don’t move?

---

## 17. .gitignore

### What .gitignore is

.gitignore tells Git **which files to intentionally ignore**.

Ignored files:

- Are not tracked
- Are not staged
- Are not committed

They still exist on disk.

---

### Why .gitignore matters

It prevents committing:

- Build artifacts
- Dependencies
- Secrets
- OS/editor junk

Keeps history clean and safe.

---

### Basic syntax

Patterns match file paths.

Examples:

    node_modules/
    dist/
    *.log
    .env

Rules:

- Lines are patterns
- `#` starts a comment
- Blank lines are ignored

---

### Directory ignores

Trailing slash means directory.

    build/

Ignores the directory and all contents.

---

### File patterns

Ignore by extension:

    *.tmp
    *.log

Ignore specific file:

    secret.txt

---

### Negation

Use ! to re-include.

    *.log
    !important.log

Order matters:

- Later rules override earlier ones

---

### Scope of .gitignore

.gitignore applies only to:

- Untracked files

Important:

- It does NOT affect files already tracked

To stop tracking a file:

    git rm --cached file.txt

Then commit.

---

### Multiple .gitignore files

You can have:

- One at repo root
- Additional ones in subdirectories

Rules apply hierarchically.

---

### Global .gitignore

Ignore files across all repos.

    git config --global core.excludesfile ~/.gitignore_global

Used for:

- OS files
- Editor configs

---

### Checking ignored files

    git status --ignored

Shows ignored files explicitly.

---

### Common mistakes

- Expecting .gitignore to remove tracked files
- Ignoring secrets after committing them
- Overusing broad ignore rules
- Forgetting negation order

---

### Core rules to internalize

- .gitignore affects untracked files only
- Order matters
- Use for generated or sensitive files
- Tracked files must be removed manually

---

### One-sentence recall

.gitignore defines which files Git should intentionally ignore before tracking begins.

---

### Daily self-check

- Can you explain why .gitignore didn’t work?
- Can you explain negation rules?
- Can you explain tracked vs untracked ignores?

---

## 18. Collaboration Workflow

### What collaboration means in Git

Collaboration is about **sharing history safely**.

Git itself is neutral.
Workflows define how teams use it.

---

### Core collaboration rules

In shared work:

- Do not rewrite public history
- Communicate through commits
- Integrate changes intentionally

These rules prevent chaos.

---

### Common branching models

#### Feature branch workflow

Most common.

Flow:

- main is stable
- Create feature branches
- Merge feature into main
- Delete feature branch

Safe and simple.

---

#### GitHub-style workflow

Used with pull requests.

Flow:

- Branch from main
- Push branch to remote
- Open pull request
- Review + merge
- main is protected

PRs are discussion, not just merges.

---

#### Fork-based workflow

Common in open source.

Flow:

- Fork repo
- Work in your fork
- Open PR to upstream
- Maintainers merge

You usually cannot push directly.

---

### Pull requests (conceptual)

PRs are not a Git feature.
They are a platform feature.

They provide:

- Code review
- Discussion
- CI checks

Git only sees the resulting merge.

---

### Syncing with main

Typical update flow:

    git fetch origin
    git switch feature-x
    git rebase origin/main

Or merge if rebasing is not allowed.

---

### Keeping main clean

Rules:

- main should always build
- No direct commits to main
- Use branches + PRs

This protects production.

---

### Resolving conflicts collaboratively

Best practices:

- Communicate
- Resolve locally
- Test before pushing
- Do not panic

Conflicts are normal.

---

### Commit discipline

In teams:

- Clear commit messages
- Small, focused commits
- Avoid “WIP” commits in shared branches

History is shared knowledge.

---

### Common mistakes

- Rebasing shared branches
- Pushing directly to main
- Force-pushing without coordination
- Treating PRs as optional

---

### Core rules to internalize

- Shared history must be stable
- Branches isolate work
- PRs enable review
- Communication matters

---

### One-sentence recall

Git collaboration relies on shared rules for branching, reviewing, and integrating history safely.

---

### Daily self-check

- Can you explain your team’s workflow?
- Can you explain why main is protected?
- Can you explain PRs vs Git itself?

---

### Stop point

Next fundamental: 19. Common Git Pitfalls

## 19. Common Git Pitfalls

### Treating Git like a file sync tool

Mistake:

- Expecting Git to “just sync everything”

Why it’s wrong:

- Git tracks history, not folders
- Nothing syncs automatically

Fix:

- Be explicit: fetch, merge/rebase, push

---

### Committing without intent

Mistake:

- git add .
- git commit -m "update"

Why it’s bad:

- History becomes meaningless
- Hard to revert or debug

Fix:

- Stage intentionally
- Write descriptive messages

---

### Fear of committing

Mistake:

- Avoiding commits until “perfect”

Why it’s wrong:

- Commits are cheap
- Local commits are safe

Fix:

- Commit logical states often
- Clean up later with rebase

---

### Rebasing shared history

Mistake:

- Rebasing after pushing

Why it’s dangerous:

- Breaks other people’s history
- Causes duplicated commits

Fix:

- Rebase locally only
- Merge shared branches

---

### Using reset instead of revert

Mistake:

- git reset on main

Why it’s bad:

- Rewrites public history

Fix:

- Use git revert for shared branches

---

### Ignoring git status

Mistake:

- Running commands blindly

Why it’s bad:

- Easy to lose context

Fix:

- Run git status constantly
- It tells you exactly what’s happening

---

### Losing commits and panicking

Mistake:

- Thinking work is gone forever

Reality:

- Git rarely deletes data immediately

Fix:

- Use git reflog
- Recover commits calmly

---

### Overusing stash

Mistake:

- Stashing instead of committing

Why it’s bad:

- Stashes are temporary
- Easy to forget or lose context

Fix:

- Prefer commits for real work

---

### Confusing Git with GitHub

Mistake:

- Thinking PRs, issues, releases are Git

Reality:

- They are platform features

Fix:

- Learn Git independently of platforms

---

### Core rules to internalize

- Git is explicit
- History matters
- Shared history is sacred
- status and reflog are lifelines

---

### One-sentence recall

Most Git problems come from misunderstanding history, rewriting shared commits, or skipping basic commands.

---

### Daily self-check

- Can you spot unsafe commands?
- Can you recover from a mistake?
- Can you explain what Git will do before running a command?

---

## 20. Daily Git Practice

### Purpose

This section is reviewed **every day** to force internalization of Git’s mental model.

Answer without running commands.

---

### Mental model

- Explain Git without mentioning GitHub
- Explain why commits are snapshots
- Explain why Git is distributed

---

### Repository & states

- Explain working tree vs staging vs commit
- Explain why staging exists
- Explain tracked vs untracked

---

### Commits & history

- Explain what a commit contains
- Explain atomic commits
- Explain why commit hashes change

---

### Branches & HEAD

- Explain what a branch points to
- Explain detached HEAD
- Explain how HEAD affects new commits

---

### Merging & rebasing

- Explain fast-forward merge
- Explain merge commit vs rebase
- Explain why rebasing shared history is bad

---

### Remotes

- Explain what origin is
- Explain local vs remote branches
- Explain what fetch actually does

---

### Syncing

- Explain fetch vs pull vs push
- Explain why push can be rejected
- Explain safe sync workflow

---

### Conflicts

- Explain conflict markers
- Explain how to resolve conflicts
- Explain how to abort safely

---

### Undoing

- Choose reset vs revert
- Explain soft vs hard reset
- Explain reflog recovery

---

### Stash & tags

- Explain stash vs commit
- Explain tag vs branch
- Explain annotated tags

---

### Collaboration

- Explain your team workflow
- Explain why main is protected
- Explain PRs vs Git itself

---

### Final rule

If you cannot explain what a Git command does
_before_ running it,
you do not understand it yet.

Review daily until the model is automatic.


