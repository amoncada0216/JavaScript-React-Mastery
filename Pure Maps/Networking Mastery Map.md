# Networking — Mastery Map 

## 1 — What Networking Really Is

- [ ] Client–server model
- [ ] Request/response lifecycle
- [ ] Stateless vs stateful communication
- [ ] Latency vs bandwidth
- [ ] Reliability vs speed tradeoffs

---

## 2 — The Internet Stack (Mental Model)

- [ ] OSI vs TCP/IP models (why they matter)
- [ ] Application layer
- [ ] Transport layer
- [ ] Network layer
- [ ] Where HTTP actually lives

---

## 3 — IP & Addressing (Foundations)

- [ ] IP addresses (IPv4 vs IPv6)
- [ ] Public vs private IPs
- [ ] NAT basics
- [ ] Ports and services
- [ ] localhost vs 0.0.0.0

---

## 4 — DNS (Name → Address)

- [ ] What DNS solves
- [ ] DNS lookup flow
- [ ] Recursive vs authoritative servers
- [ ] DNS caching
- [ ] TTL implications
- [ ] DNS failure patterns

---

## 5 — TCP (Reliability Engine)

- [ ] TCP handshake
- [ ] Connection lifecycle
- [ ] Reliability guarantees
- [ ] Congestion control (conceptual)
- [ ] Head-of-line blocking
- [ ] Keep-alive behavior

---

## 6 — UDP (Speed & Tradeoffs)

- [ ] UDP vs TCP
- [ ] When UDP is used
- [ ] Packet loss reality
- [ ] QUIC overview
- [ ] Why HTTP/3 exists

---

## 7 — TLS & Secure Transport

- [ ] Why encryption is required
- [ ] TLS handshake (high level)
- [ ] Certificates & trust chains
- [ ] Symmetric vs asymmetric crypto (conceptual)
- [ ] Performance cost of TLS
- [ ] TLS termination

---

## 8 — HTTP Fundamentals (Non-Negotiable)

- [ ] HTTP as a protocol
- [ ] Requests & responses
- [ ] Methods (`GET`, `POST`, etc.)
- [ ] Headers
- [ ] Status codes (semantics, not memorization)
- [ ] Idempotency & safety

---

## 9 — HTTP Versions & Behavior

- [ ] HTTP/1.1 limitations
- [ ] HTTP/2 multiplexing
- [ ] Header compression
- [ ] Server push (and why it failed)
- [ ] HTTP/3 over QUIC

---

## 10 — Caching (Where Speed Actually Comes From)

- [ ] Browser cache
- [ ] HTTP caching headers
- [ ] `Cache-Control`
- [ ] `ETag` vs `Last-Modified`
- [ ] Shared caches (CDNs)
- [ ] Cache invalidation reality

---

## 11 — APIs & Data Transfer

- [ ] REST constraints
- [ ] Resource modeling
- [ ] Versioning strategies
- [ ] Pagination patterns
- [ ] Filtering & sorting
- [ ] Error modeling

---

## 12 — Payload Formats

- [ ] JSON characteristics
- [ ] Serialization cost
- [ ] Binary formats (conceptual)
- [ ] Over-fetching vs under-fetching
- [ ] Compression tradeoffs

---

## 13 — Real-Time Communication

- [ ] Polling
- [ ] Long polling
- [ ] Server-Sent Events (SSE)
- [ ] WebSockets
- [ ] When real-time is justified

---

## 14 — Proxies, Gateways & CDNs

- [ ] Forward proxies
- [ ] Reverse proxies
- [ ] Load balancers
- [ ] CDN request flow
- [ ] Edge caching
- [ ] Origin shielding

---

## 15 — Failure Modes & Resilience

- [ ] Timeouts
- [ ] Retries
- [ ] Exponential backoff
- [ ] Circuit breakers
- [ ] Partial failures
- [ ] Designing for unreliable networks

---

## 16 — Observability & Debugging

- [ ] Reading network waterfalls
- [ ] Inspecting headers
- [ ] Tracing requests
- [ ] Identifying bottlenecks
- [ ] Reproducing network bugs

---

## GOD CHECK — Networking

You’re done when you can:

- [ ] Explain a request from URL to response bytes
- [ ] Predict latency sources
- [ ] Choose the right protocol intentionally
- [ ] Debug network issues without guessing
- [ ] Design APIs that survive real traffic
