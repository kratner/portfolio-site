# Planning Log

Tracks planned and completed engineering work. Add new entries at the top. Mark status as the work progresses.

---

## [COMPLETED] CRA → Vite Migration
**Date:** April 2026  
**Version target:** 0.2.0  
**Status:** Complete — merged to master  
**Related docs:** [tech-stack.md](tech-stack.md)

### Motivation
`react-scripts` (Create React App) is unmaintained as of 2023. It is the root cause of all 27 remaining audit vulnerabilities (all build-time only). Vite replaces the entire webpack-based toolchain with a faster, actively maintained alternative.

### Scope
- 6 new files, 4 modified files, 3 deleted files
- No changes to components or prop interfaces
- TypeScript upgraded from 4.9.x → 5.8.x

### Files to Create

| File | Purpose |
|---|---|
| `vite.config.ts` | Replaces `config-overrides.js`; configures `@vitejs/plugin-react` + `vite-plugin-svgr` |
| `index.html` | Vite requires HTML at project root (not in `public/`); adapted from `public/index.html` |
| `src/index.tsx` | Typed entry point; replaces `src/index.js` |
| `jest.config.js` | Standalone Jest config (CRA previously provided this internally) |
| `src/__mocks__/fileMock.js` | Stubs SVG/image imports in Jest context |
| `src/__mocks__/styleMock.js` | Stubs CSS/SCSS imports in Jest context |

### Files to Modify

| File | Change |
|---|---|
| `tsconfig.json` | Replace with Vite+TS5 config: `jsx: react-jsx`, `module: ESNext`, `moduleResolution: bundler`, `noEmit: true`, `isolatedModules: true` |
| `src/custom.d.ts` | Update SVG type declaration to match `vite-plugin-svgr` output signature |
| `package.json` | Update scripts, remove CRA deps, add Vite deps (see below) |
| `docs/tech-stack.md` | Update vulnerability status, build commands, known issues |

### `package.json` Script Changes

| Script | Old | New |
|---|---|---|
| `start` | `react-app-rewired start` | `vite` |
| `build` | `react-app-rewired build` | `tsc -b && vite build` |
| `test` | `react-app-rewired test` | `jest` |
| `preview` | _(none)_ | `vite preview` |

### Dependency Changes

**Remove:**
- `customize-cra` (dependency)
- `react-scripts`, `react-app-rewired`, `@svgr/webpack`, `file-loader`, `url-loader`, `react-svg`, `react-qr-code` (devDependencies)

  > **Note on QR code packages:** Two packages exist. `react-qr-code` (devDependency, removed) is entirely unused — only ever appeared in commented-out imports. `qrcode.react` (dependency, **retained**) is the one actively imported and rendered in `HomePage.tsx` and `VenmoQRCode.tsx`. These are distinct packages; removing `react-qr-code` is safe.

**Add (devDependencies):**
- `vite@^6.3.4`
- `@vitejs/plugin-react@^4.4.1`
- `vite-plugin-svgr@^4.3.0`
- `ts-jest@^29.2.5`
- `jest-environment-jsdom@^29.7.0`

**Upgrade:**
- `typescript@^4.9.5` → `^5.8.3`

### Files to Delete (⚠️ destructive — confirm before deleting)

| File | Reason |
|---|---|
| `config-overrides.js` | Entirely replaced by `vite.config.ts` |
| `src/index.js` | Replaced by `src/index.tsx` |
| `public/index.html` | **Critical:** Vite copies `public/` verbatim to `build/`; leaving this file would overwrite the generated `build/index.html` and break the deployed app |

### Key Implementation Notes

- `base: "/portfolio-site/"` in `vite.config.ts` is required — without it, GitHub Pages sub-path deployment will 404 on all assets
- `svgr({ include: "**/*.svg" })` preserves backward-compatible SVG-as-component imports
- `allowJs: true` in tsconfig is needed to handle existing `.js` source files (`reportWebVitals.js`, `setupTests.js`, etc.) without renaming them
- `allowImportingTsExtensions: true` requires `noEmit: true` — fine since Vite handles emit
- Jest is retained (not replaced by Vitest) — Vitest migration is a separate future step

### Verification Checklist

- [x] `npm run build` succeeds; `build/index.html` references `/portfolio-site/` base path
- [x] `npm start` serves at `http://localhost:5173/portfolio-site/`
- [x] `npm test -- --watchAll=false` runs without setup errors (pre-existing `App.test.js` failure is unrelated to migration)
- [ ] `npm run deploy` pushes to `gh-pages` branch
- [x] `npm audit` shows 0 critical/high vulnerabilities

### Post-merge fix: `process.env.PUBLIC_URL` → `import.meta.env.BASE_URL`

Discovered after initial migration: Vite does not polyfill Node's `process` global, causing a runtime crash on load.

**Scope:** 10 usages across 8 files — all were `process.env.PUBLIC_URL`. No `REACT_APP_*` variables or `NODE_ENV` checks existed. No `.env` files required changes.

**Two replacement patterns, depending on path format:**

| Context | Before | After |
|---|---|---|
| Template literals with explicit `/images/` | `` `${process.env.PUBLIC_URL}/images/foo` `` | `` `${import.meta.env.BASE_URL}images/foo` `` |
| Variable assigned then concatenated with leading-slash paths | `const PUBLIC_URL = process.env.PUBLIC_URL` | `const PUBLIC_URL = import.meta.env.BASE_URL.replace(/\/$/, "")` |

`BASE_URL` has a trailing slash (`/portfolio-site/`); `PUBLIC_URL` in CRA did not. The `.replace(/\/$/, "")` strips the trailing slash to keep existing `PUBLIC_URL + panel.someSlashPrefixedPath` patterns correct.

**Files changed:** `Header.tsx`, `HomePage.tsx`, `Slider.tsx`, `ColumnarList.tsx`, `prototypes/__slider.tsx`, `prototypes/FeaturesList.tsx`, `prototypes/ImageCrossFader.tsx`, `prototypes/PortfolioList.tsx`

---

## [COMPLETED] Security: Remove svg-react-loader; apply npm audit fixes
**Date:** April 2026  
**Version:** 0.1.1  
**Status:** Complete — merged to master

- Removed unused `svg-react-loader` (was source of critical `loader-utils` + `json5` vulnerabilities)
- Ran `npm audit fix` to apply all non-breaking fixes
- Result: 4 critical → 0, 54 high → 14 (all remaining are inside `react-scripts` internals, build-time only)

---

## [COMPLETED] Add .gitattributes — normalize line endings to LF
**Date:** April 2026  
**Version:** 0.1.1  
**Status:** Complete — merged to master

- Added `docs/` folder with `architecture.md`, `tech-stack.md`, `testing.md`
- Added `.gitattributes` with `text=auto` + per-extension `eol=lf` rules
- Normalized 22 SVG files from CRLF → LF
- Eliminated 90+ spurious "modified" file diffs caused by CRLF line endings

---

## [FUTURE] Jest → Vitest Migration
**Date:** —  
**Version target:** 0.3.0  
**Status:** Not started — awaiting Vite migration (0.2.0)

After the CRA → Vite migration, swap Jest for Vitest:
- Same `describe`/`it`/`expect` API — no test rewrites required
- Runs inside Vite's dev pipeline (native ESM, no transpilation)
- Removes `ts-jest`, `jest-environment-jsdom` added in 0.2.0
- See [testing.md](testing.md) for full rationale

---

## [FUTURE] Add Playwright E2E Tests
**Date:** —  
**Version target:** 0.3.0  
**Status:** Not started

Install Playwright and write critical path E2E tests. See [testing.md](testing.md) for scope and rationale.

---

## [FUTURE] TypeScript Strict Mode Cleanup
**Date:** —  
**Version target:** TBD  
**Status:** Not started

Several components have implicit `any` or loose typing inherited from the CRA boilerplate era. After TS 5 upgrade, incrementally tighten.
