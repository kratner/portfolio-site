# Testing

_Last updated: April 2026_

## Current State

### Framework
**Jest** (via `react-scripts`) + **React Testing Library** + **jest-dom**

All three are already installed. The test runner is invoked via `react-app-rewired test` which wraps `react-scripts test`.

### Existing Tests

| File | Status | Notes |
|---|---|---|
| `src/App.test.js` | ❌ Broken | Tests for text "learn react" — CRA boilerplate, never updated |
| `src/components/wrappers/pages/HomePage.test.tsx` | ⚠️ Fragile | Smoke test only; asserts on specific hardcoded strings |

**Test coverage: effectively zero.** No tests for any individual component, interaction, or data shape.

### Running Tests

```bash
npm test              # Watch mode
npm test -- --watchAll=false   # Single run (CI)
npm test -- --coverage         # With coverage report
```

---

## Testing Framework Recommendations

### Current Stack (short-term, zero migration cost)

Stay on **Jest + React Testing Library**. They're already installed and configured.

**What to test right now:**

| Component | Test Type | Priority |
|---|---|---|
| `Slider` | Unit — prev/next state, autoPlay timer | High |
| `NavigationMenu` | Unit — mobile menu open/close, link rendering | High |
| `ColumnarList` | Unit — renders correct number of panels, handles empty data | High |
| `ContactInformation` | Unit — renders all contact methods, icon presence | Medium |
| `HeroHeader` | Unit — heading and body text render | Medium |
| `Section` | Unit — className passthrough, children render | Low |
| `IntersectionObserverComponent` | Unit — observer instantiation (mock IntersectionObserver) | Medium |
| `ErrorBoundary` | Unit — renders fallback on error | Medium |

**Fix first:** Delete or rewrite `App.test.js` — it will fail immediately since the page no longer contains "learn react".

---

### End-to-End Testing (medium-term)

For a portfolio site, E2E tests provide the highest value: they verify the real user experience, not implementation details.

**Recommended: [Playwright](https://playwright.dev/)**

| | Playwright | Cypress |
|---|---|---|
| Speed | Fast (parallel, multi-browser) | Slower (Electron-based) |
| Browser support | Chromium, Firefox, WebKit | Chromium, Firefox, Edge |
| Mobile emulation | Built-in | Partial |
| CI integration | Excellent | Good |
| Bundle size | Smaller | Larger |
| API style | async/await | Chained (unique) |

Playwright is the stronger choice for a static site deployed to GitHub Pages — it can test against the live deployed URL or a local build.

**What to E2E test:**

```
- Navigation links scroll to correct sections
- Mobile hamburger menu opens and closes
- Slider advances manually and via autoPlay
- Contact links are present and have correct href attributes
- QR code renders
- Page is accessible (keyboard nav, contrast — via @axe-core/playwright)
```

**Setup:**
```bash
npm init playwright@latest
```

Adds `playwright.config.ts` and a `tests/` or `e2e/` directory. Does not affect the existing Jest setup.

---

### Long-term: Vite + Vitest

When migrating from CRA to Vite (see [tech-stack.md](tech-stack.md)):

- Replace Jest with **[Vitest](https://vitest.dev/)** — identical API (`describe`, `it`, `expect`), no test rewrites needed
- Same React Testing Library tests work unchanged
- Significantly faster: Vitest runs in Vite's dev pipeline (native ESM, no transpilation)
- Native TypeScript support without `@types/jest`

Migration is essentially: swap `jest` → `vitest` in `package.json` and update the config file.

---

## Recommended Testing Roadmap

| Phase | Action | Effort |
|---|---|---|
| **Now** | Fix `App.test.js` (delete boilerplate, write real smoke test) | 30 min |
| **Now** | Write unit tests for `Slider`, `NavigationMenu`, `ColumnarList` | 2–3 hrs |
| **Soon** | Add `IntersectionObserver` mock to `setupTests.js`; test `IntersectionObserverComponent` | 1 hr |
| **Soon** | Install Playwright; write 5–10 critical E2E tests | 2–3 hrs |
| **Future** | Add `@axe-core/playwright` for accessibility assertions | 1 hr |
| **Future** | On CRA→Vite migration, swap Jest → Vitest | 1 hr |

## IntersectionObserver Mock

The built-in test environment (`jsdom`) doesn't implement `IntersectionObserver`. Add this to `src/setupTests.js` before writing any observer tests:

```javascript
global.IntersectionObserver = class {
  constructor(callback) { this.callback = callback; }
  observe() {}
  unobserve() {}
  disconnect() {}
};
```
