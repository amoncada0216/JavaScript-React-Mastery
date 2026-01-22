# Security — Mastery Map 

## 1 — Security Mental Model (First Principles)

- [ ] What security actually is (risk management)
- [ ] Threats vs vulnerabilities vs exploits
- [ ] Attack surface thinking
- [ ] Trust boundaries
- [ ] “Client is hostile” as a rule
- [ ] Security vs convenience tradeoffs

---

## 2 — The Web Security Model

- [ ] Origins (scheme + host + port)
- [ ] Same-Origin Policy (SOP)
- [ ] Why SOP exists
- [ ] What SOP blocks
- [ ] What SOP does NOT block
- [ ] How browsers enforce it

---

## 3 — Cross-Site Scripting (XSS) — #1 Killer

- [ ] Stored XSS
- [ ] Reflected XSS
- [ ] DOM-based XSS
- [ ] Injection vectors
- [ ] Why escaping works
- [ ] Why sanitization fails
- [ ] Framework protections (and limits)

---

## 4 — Content Security Policy (CSP)

- [ ] What CSP actually does
- [ ] `script-src`
- [ ] `style-src`
- [ ] Nonces vs hashes
- [ ] CSP violation reports
- [ ] CSP failure modes
- [ ] CSP in real production apps

---

## 5 — Cross-Site Request Forgery (CSRF)

- [ ] Why cookies cause CSRF
- [ ] CSRF attack flow
- [ ] SameSite cookies
- [ ] CSRF tokens
- [ ] Double-submit pattern
- [ ] Why CSRF ≠ XSS

---

## 6 — Authentication Fundamentals

- [ ] Authentication vs authorization
- [ ] Password storage (hashing, salting)
- [ ] Password attack vectors
- [ ] Brute force & rate limiting
- [ ] MFA basics
- [ ] Credential stuffing

---

## 7 — Session Management

- [ ] Cookies vs tokens
- [ ] HttpOnly flag
- [ ] Secure flag
- [ ] Session fixation
- [ ] Session expiration
- [ ] Logout semantics

---

## 8 — Tokens & JWT Reality

- [ ] What JWT is
- [ ] JWT structure
- [ ] Signing vs encryption
- [ ] Token expiry handling
- [ ] Refresh tokens
- [ ] Why JWTs are often misused
- [ ] When NOT to use JWT

---

## 9 — Authorization & Access Control

- [ ] Role-based access control (RBAC)
- [ ] Attribute-based access control (ABAC)
- [ ] Authorization at API boundaries
- [ ] Frontend checks ≠ security
- [ ] Horizontal vs vertical privilege escalation

---

## 10 — CORS (The Most Misunderstood Thing)

- [ ] What CORS actually is
- [ ] Preflight requests
- [ ] Allowed origins
- [ ] Credentials mode
- [ ] Why CORS is NOT a security feature
- [ ] Common CORS misconfigs

---

## 11 — Input Handling & Injection Attacks

- [ ] SQL injection (conceptual)
- [ ] Command injection
- [ ] Path traversal
- [ ] Template injection
- [ ] Validation vs sanitization
- [ ] Encoding contexts

---

## 12 — Browser Storage Risks

- [ ] localStorage risks
- [ ] sessionStorage risks
- [ ] IndexedDB risks
- [ ] XSS + storage = full compromise
- [ ] When storage is acceptable

---

## 13 — Dependency & Supply Chain Security

- [ ] Third-party code trust
- [ ] Dependency confusion
- [ ] Malicious packages
- [ ] Lockfiles
- [ ] Version pinning
- [ ] Auditing limits

---

## 14 — HTTPS & Transport Security

- [ ] Why HTTPS matters
- [ ] TLS basics
- [ ] Certificate trust
- [ ] Mixed content
- [ ] HSTS
- [ ] Man-in-the-middle attacks

---

## 15 — Clickjacking & UI Attacks

- [ ] Clickjacking attacks
- [ ] `X-Frame-Options`
- [ ] `frame-ancestors`
- [ ] UI redressing
- [ ] Visual trust abuse

---

## 16 — Rate Limiting & Abuse

- [ ] Why abuse is inevitable
- [ ] Rate limiting strategies
- [ ] Bot detection basics
- [ ] CAPTCHA tradeoffs
- [ ] Throttling vs blocking

---

## 17 — Security Headers (Defense-in-Depth)

- [ ] CSP
- [ ] HSTS
- [ ] X-Content-Type-Options
- [ ] Referrer-Policy
- [ ] Permissions-Policy
- [ ] Why headers are not enough

---

## 18 — Secure Architecture Thinking

- [ ] Least privilege principle
- [ ] Defense in depth
- [ ] Secure defaults
- [ ] Reducing attack surface
- [ ] Designing for compromise

---

## 19 — Security Failure Patterns

- [ ] Trusting the client
- [ ] Rolling your own auth
- [ ] Overexposed APIs
- [ ] Silent auth failures
- [ ] Security through obscurity

---

## GOD CHECK — Security

You’re done when you can:

- [ ] Threat-model a feature before coding
- [ ] Explain why a vuln exists
- [ ] Predict attack paths
- [ ] Know what *not* to store on the client
- [ ] Design systems assuming compromise
