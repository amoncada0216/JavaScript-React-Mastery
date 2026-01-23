# Git & Version Control — Logical Mastery Map (Professional Survival Skill)

## 1 — What Git Actually Is

- [ ] Git as a snapshot database (not diffs)
- [ ] Local-first design
- [ ] Why Git exists (coordination + rollback)
- [ ] Repository vs working directory
- [ ] What Git does NOT track

---

## 2 — Core Mental Model (Non-Negotiable)

- [ ] Working tree
- [ ] Staging area (index)
- [ ] Commit objects
- [ ] Commit graph (DAG)
- [ ] HEAD pointer
- [ ] Why understanding this prevents panic

---

## 3 — Basic Workflow (Daily Use)

- [ ] `git status`
- [ ] `git add` (what it really stages)
- [ ] `git commit`
- [ ] Atomic commits
- [ ] Writing meaningful commit messages
- [ ] Undoing mistakes safely

---

## 4 — Branching (How Teams Actually Work)

- [ ] Branches as pointers
- [ ] Creating & switching branches
- [ ] Feature branches
- [ ] Long-lived vs short-lived branches
- [ ] Why branches are cheap

---

## 5 — Merging (History Choices)

- [ ] Fast-forward merges
- [ ] Three-way merges
- [ ] Merge commits
- [ ] Conflict creation (why they happen)
- [ ] Conflict resolution strategy
- [ ] When merges are the right choice

---

## 6 — Rebasing (Power Tool, Sharp Edges)

- [ ] What rebase does to history
- [ ] Interactive rebase
- [ ] Squashing commits
- [ ] Reordering commits
- [ ] Rebase vs merge (decision rule)
- [ ] When rebasing is dangerous

---

## 7 — Remote Repositories

- [ ] `origin` concept
- [ ] Fetch vs pull
- [ ] Push mechanics
- [ ] Tracking branches
- [ ] Upstream configuration
- [ ] Syncing without breaking things

---

## 8 — Collaboration Patterns

- [ ] Pull requests / merge requests
- [ ] Code review workflow
- [ ] Keeping branches up to date
- [ ] Avoiding “merge hell”
- [ ] Resolving conflicts with teammates

---

## 9 — Undoing & Recovery (Critical)

- [ ] `git restore`
- [ ] `git reset` (soft / mixed / hard)
- [ ] `git revert`
- [ ] Detached HEAD
- [ ] Recovering lost commits
- [ ] When NOT to force-push

---

## 10 — History Inspection & Debugging

- [ ] `git log`
- [ ] `git diff`
- [ ] `git blame`
- [ ] Bisecting bugs
- [ ] Reading history to understand intent

---

## 11 — Stashing & Work-in-Progress

- [ ] `git stash` mental model
- [ ] Partial stashes
- [ ] Applying vs popping
- [ ] When stashing is appropriate
- [ ] When it’s a smell

---

## 12 — Ignoring & Repository Hygiene

- [ ] `.gitignore`
- [ ] Tracked vs untracked files
- [ ] Removing tracked files safely
- [ ] Keeping repos clean
- [ ] Secrets management basics

---

## 13 — Git in Teams & CI

- [ ] Branch protection rules
- [ ] Required reviews
- [ ] CI checks on PRs
- [ ] Failing builds vs failing merges
- [ ] Git as enforcement mechanism

---

## 14 — Git Anti-Patterns

- [ ] Giant commits
- [ ] Meaningless commit messages
- [ ] Force-pushing shared branches
- [ ] Treating Git as backup only
- [ ] Fear-driven workflows

---

## GOD CHECK — Git & Version Control

You’re done when you can:

- [ ] Recover from mistakes calmly
- [ ] Explain what a command will do before running it
- [ ] Resolve conflicts without guessing
- [ ] Read history to understand decisions
- [ ] Work in teams without breaking flow
