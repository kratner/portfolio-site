# Tech Stack

_Last updated: April 2026_

## Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.2.0 | UI framework |
| `react-dom` | ^18.2.0 | DOM renderer |
| `sass` | ^1.71.1 | SCSS compilation (replaced `node-sass`) |
| `@fortawesome/react-fontawesome` | ^0.2.0 | Icon component |
| `@fortawesome/fontawesome-svg-core` | ^6.4.0 | FA core |
| `@fortawesome/free-brands-svg-icons` | ^6.4.0 | Brand icons |
| `@fortawesome/free-solid-svg-icons` | ^6.4.0 | Solid icons |
| `qrcode.react` | ^3.1.0 | QR code rendering (contact section) |
| `react-image` | ^4.1.0 | Image loading with fallback |
| `customize-cra` | ^1.0.0 | CRA webpack customization helper |
| `web-vitals` | ^2.1.0 | Core Web Vitals measurement |

## Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react-scripts` | ^5.0.1 | CRA build toolchain (**deprecated — no upstream fixes**) |
| `react-app-rewired` | ^2.2.1 | Intercepts CRA webpack config without ejecting |
| `typescript` | ^4.9.5 | Type checking |
| `@svgr/webpack` | ^8.0.1 | SVG → React component import support |
| `@testing-library/react` | ^14.1.2 | Component testing utilities |
| `@testing-library/jest-dom` | ^6.1.4 | DOM assertion matchers |
| `@testing-library/user-event` | ^13.2.1 | User interaction simulation |
| `jest` | ^29.7.0 | Test runner |
| `prettier` | 2.8.8 | Code formatter |
| `gh-pages` | ^5.0.0 | GitHub Pages deployment |
| `file-loader` | ^6.2.0 | Webpack file asset loader |
| `url-loader` | ^4.1.1 | Webpack URL asset loader |

## Build & Deployment

### Commands

```bash
npm start          # Dev server (react-app-rewired start)
npm run build      # Production build → /build
npm test           # Jest test runner (watch mode)
npm run deploy     # Build + push build/ to gh-pages branch
```

### Webpack Customization

`config-overrides.js` uses `react-app-rewired` + `customize-cra` to add `@svgr/webpack` — enables importing SVG files as React components:
```tsx
import { ReactComponent as MyIcon } from './icon.svg';
```

### Deployment Target

**GitHub Pages** → `https://kratner.github.io/portfolio-site`

The `build/` directory is committed to the repo and deployed via the `gh-pages` npm package to the `gh-pages` branch.

## Known Issues & Future Work

### CRA Deprecation
`react-scripts` (Create React App) is **unmaintained** as of 2023. This is the root cause of 27 remaining audit vulnerabilities — all in `react-scripts` internals, build-time only, none in the production bundle.

**Migration path:** Vite + `@vitejs/plugin-react`
- Drops `react-scripts`, `react-app-rewired`, `customize-cra`
- `@svgr/webpack` → `vite-plugin-svgr`
- Eliminates the dependency audit backlog
- Significantly faster dev server and build times
- Enables switching test runner to Vitest (Jest-compatible API)

### TypeScript Version
`typescript@^4.9.5` — TypeScript 5.x is available with additional type-safety features. Upgrade is non-breaking for this codebase.

## Vulnerability Status

_As of April 2026 after audit cleanup:_

| Severity | Count | Root Cause |
|---|---|---|
| Critical | 0 | — |
| High | 14 | `react-scripts` internals (build-time only) |
| Moderate | 4 | `react-scripts` / `webpack-dev-server` (build-time only) |
| Low | 9 | `react-scripts` / `jest` internals |

None of the remaining vulnerabilities affect the production bundle served to users.
