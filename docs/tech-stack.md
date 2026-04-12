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
| `web-vitals` | ^2.1.0 | Core Web Vitals measurement |

## Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `vite` | ^6.3.4 | Build toolchain; replaces react-scripts |
| `@vitejs/plugin-react` | ^4.4.1 | React Fast Refresh + JSX transforms |
| `vite-plugin-svgr` | ^4.3.0 | SVG → React component import support |
| `typescript` | ^5.8.3 | Type checking |
| `ts-jest` | ^29.2.5 | Jest TypeScript transform |
| `jest-environment-jsdom` | ^29.7.0 | Browser-like test environment for Jest |
| `@types/react` | ^18.3.0 | React type declarations |
| `@types/react-dom` | ^18.3.0 | React DOM type declarations |
| `@testing-library/react` | ^14.1.2 | Component testing utilities |
| `@testing-library/jest-dom` | ^6.1.4 | DOM assertion matchers |
| `@testing-library/user-event` | ^13.2.1 | User interaction simulation |
| `jest` | ^29.7.0 | Test runner |
| `prettier` | 2.8.8 | Code formatter |
| `gh-pages` | ^5.0.0 | GitHub Pages deployment |

## Build & Deployment

### Commands

```bash
npm start          # Dev server (Vite, http://localhost:5173/portfolio-site/)
npm run build      # Type-check (tsc -b) + production build → /build
npm run preview    # Serve the production build locally
npm test           # Jest test runner
npm run deploy     # Build + push build/ to gh-pages branch
```

### Vite Configuration

`vite.config.ts` configures `@vitejs/plugin-react` (Fast Refresh + JSX) and `vite-plugin-svgr` (SVG-as-component imports):
```tsx
import MyIcon from './icon.svg';
```
`base: "/portfolio-site/"` is set so all asset paths in `build/` are prefixed correctly for GitHub Pages.

### Deployment Target

**GitHub Pages** → `https://kratner.github.io/portfolio-site`

The `build/` directory is committed to the repo and deployed via the `gh-pages` npm package to the `gh-pages` branch.

## Known Issues & Future Work

### IntersectionObserver in Tests
`App.test.js` renders the full `App` component tree, which triggers `IntersectionObserver` usage in jsdom (which lacks this browser API). The test also checks for a "learn react" string removed during app customization. This test should be rewritten to reflect current content and mock `IntersectionObserver`. See [testing.md](testing.md).

### Future Work
- **Vitest migration (0.3.0):** Replace Jest + ts-jest with Vitest — same API, better Vite integration, faster HMR-aware test runs

## Vulnerability Status

_As of April 2026 after audit cleanup:_

| Severity | Count | Root Cause |
|---|---|---|
| Critical | 0 | — |
| High | 0 | — |
| Moderate | 0 | — |
| Low | 4 | npm package internals (build-time only) |

None of the remaining vulnerabilities affect the production bundle served to users.
