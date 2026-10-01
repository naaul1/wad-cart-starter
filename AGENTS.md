# AGENTS.md — wad-cart-starter harness

Project-specific rules for any assistant or contributor working in this repo.
A stranger should be able to follow this file and reach a green gate.

## Stack

- Node.js 20+ (repo currently runs Node 26), ESM (`"type": "module"`).
- Plain JavaScript, **no dependencies at all** — no `dependencies`, no `devDependencies`.
- Tests: `node:test` + `node:assert/strict`, run with `node --test`.
- Lint: Node-only (`node --check` + `git diff --check`), run with `npm run lint`.

## Layout

- `src/cart.js` — implement `cartTotal(items, options)` here. Only file with logic.
- `test/cart.test.js` — specification tests. Add cases here, never weaken an existing assertion to force green.
- `BRIEF.md` — the exact brief given to the assistant. Keep it in sync with behaviour.
- `.github/workflows/ci.yml` — CI, runs the gate on every push.

## Commands

```bash
npm test        # run node:test suite (must be green)
npm run lint    # Node-only lint: node --check + git diff --check (must be green)
npm run gate    # gate: test + lint (must be green before push)
```

CI runs `npm run gate` on every `push` and `pull_request` (no install step — zero dependencies).

## Contract

See [`BRIEF.md`](BRIEF.md) (contract, error cases, acceptance).

## Never

- NEVER add any dependency — no `dependencies`, no `devDependencies`. Plain JS + Node built-ins only.
- NEVER change the exported signature `cartTotal(items, options)` or return a string (e.g. bare `toFixed()` without `Number(...)`).
- NEVER edit a test expectation to make red go green — fix the implementation or add a new covering test.
- NEVER push with a red local gate — run `npm run gate` first; red CI counts as red even if local was green.

## Workflow

1. Read `README.md` + `BRIEF.md` + `test/cart.test.js`.
2. Implement in `src/cart.js` only (add tests in `test/cart.test.js` if an edge case is uncovered).
3. Run `npm run gate` until green, then push so CI confirms it.
