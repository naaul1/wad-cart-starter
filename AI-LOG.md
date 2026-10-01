## 2026-10-01 — set up the harness
Tool: OpenCode
Asked for: generate AGENTS.md from README.md.
Kept: Stack and Layout sections.
Changed: Removed the Contract section, since it's not repo universal and should be declared in BRIEF.md instead.
Rejected: None.
By hand: Workflow section.


## 2026-10-01 — write the brief
Tool: OpenCode
Asked for: generate BRIEF.md from README.md and the rubric.
Kept: Almost everything, except for the Acceptance section.
Changed: Mildly rewrote the Contract section to simplify it down.
Rejected: The Acceptance section, it's redundant since AGENTS.md already covers it.
By hand: Part of the Contract section above.


## 2026-10-01 — implement the cartTotal function
Tool: None. Implement by hand to deeper learn JS.


## 2026-10-01 — write extra test cases
Tool: OpenCode
Asked for: generate some edge cases for cartTotal, including when cart is empty, freeShipping threshold, negative price, negative qty, fractional qty, or zero qty.
Kept: Everything.
Changed: None.
Rejected: None.
By hand: None.


## 2026-10-01 — write github CI
Tool: OpenCode
Asked for: github pipeline CI to run tests and lint on push (and PR).
Kept: Almost everything, except for the commands run by the job `gate`.
Changed: Only run `npm run gate` instead of test, lint and gate.
Rejected: None.
By hand: None.
