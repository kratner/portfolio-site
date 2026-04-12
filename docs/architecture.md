# Architecture

_Last updated: April 2026_

## Component Tree

```
App
├── Header                              (no props)
│   ├── SiteLogo                        (anchorProps, imageProps)
│   └── NavigationMenu                  (iconSize, links[])
├── main
│   └── HomePage                        (no props)
│       ├── Section ×8                  (className?, children)
│       │   ├── HeroHeader              (headingText, bodyText, heroImage?)
│       │   ├── ColumnarList ×3         (data: Project[])
│       │   ├── Slider ×2              (slides[], sliderHeading?, autoPlay?, autoPlayInterval?)
│       │   ├── ContactInformation      (primaryHeading, bodyText, contactMethods[], iconSize?)
│       │   └── <QRCode />             (qrcode.react — inline, no wrapper component)
│       └── IntersectionObserverComponent ×7  (targetSelector, className, threshold?, onIntersection)
└── GoogleAnalytics                     (measurementId)
```

## Active Components

| Component | File | Props |
|---|---|---|
| `App` | `src/App.tsx` | — |
| `Header` | `src/components/wrappers/Header.tsx` | — |
| `SiteLogo` | `src/components/SiteLogo.tsx` | `anchorProps`, `imageProps` |
| `NavigationMenu` | `src/components/wrappers/sections/NavigationMenu.tsx` | `iconSize: IconSize`, `links: Link[]` |
| `HomePage` | `src/components/wrappers/pages/HomePage.tsx` | — |
| `Section` | `src/components/wrappers/Section.tsx` | `className?`, `children` |
| `HeroHeader` | `src/components/wrappers/sections/HeroHeader.tsx` | `headingText`, `bodyText`, `heroImage?` |
| `ColumnarList` | `src/components/wrappers/sections/ColumnarList.tsx` | `data: Project[]` |
| `Slider` | `src/components/Slider.tsx` | `slides[]`, `sliderHeading?`, `autoPlay?`, `autoPlayInterval?` |
| `ContactInformation` | `src/components/wrappers/sections/ContactInformation.tsx` | `primaryHeading`, `bodyText`, `contactMethods[]`, `iconSize?` |
| `IntersectionObserverComponent` | `src/components/IntersectionObserverComponent.tsx` | `targetSelector`, `className`, `threshold?`, `onIntersection` |
| `GoogleAnalytics` | `src/components/utils/GoogleAnalytics.tsx` | `measurementId: string` |

## Dormant Components

Defined but not currently rendered anywhere in the tree.

| Component | File | Notes |
|---|---|---|
| `ErrorBoundary` | `src/components/ErrorBoundary.tsx` | Available; not wired up to any subtree |
| `GlowingText` | `src/components/GlowingText.tsx` | CSS glow animation effect |
| `PopupWindow` | `src/components/PopupWindow.tsx` | Modal wrapper |
| `SocialMediaIcons` | `src/components/SocialMediaIcons.tsx` | Hardcoded Twitter/IG/YT/LinkedIn |
| `VenmoQRCode` | `src/components/VenmoQRCode.tsx` | Venmo QR code generator |
| `YouTubePlaylist` | `src/components/YouTubePlaylist.tsx` | YouTube iframe embed; commented out in HomePage |

## Key Prop Interfaces

```typescript
// NavigationMenu
interface Link {
  icon?: IconDefinition;
  title: string;
  linktext: string;
  url: string;
  target?: Target;              // enum: _self | _blank | _parent | _top
}

// ColumnarList
interface Project {
  primaryHeading?: string;
  subHeading?: string;
  bodyText?: string;
  panels?: Panel[];
}

interface Panel {
  image?: { src: string; alt: string };
  heading: string;
  subHeading?: string;
  bodyText?: string;
  avatarImgSrc?: string;
  avatarImgAlt?: string;
  authorName?: string;
  postDate?: string;
  readingTime?: string;
  textLink?: { linkText: string; linkTitle: string; linkURL: string; linkTarget?: string };
  cta?: { text: string; url: string; title?: string; target?: string };
}

// Slider
interface Slide {
  imgSrc?: string;
  imgAltText?: string;
  heading?: string;
  subheading?: string;
  bodyText?: string;
  avatarSrc?: string;
  avatarAltText?: string;
  avatarHeading?: string;
  avatarSubheading?: string;
  ctaButtonText?: string;
  ctaButtonURL?: string;
  ctaButtonTarget?: string;
}

// ContactInformation
interface ContactMethod {
  heading: string;
  linkText: string;
  linkTitle: string;
  linkURL: string;
  linkID: string;
  linkTarget?: string;
  icon?: IconProp;
  iconSize?: IconSize;
}
```

## Utility Types

```typescript
// src/components/utils/IconSize.ts
enum IconSize { ExtraSmall = "xs", Small = "sm", Normal = "1x", TwoTimes = "2x", Large = "lg", ... }

// src/components/utils/Target.ts
enum Target { Self = "_self", Blank = "_blank", Parent = "_parent", Top = "_top" }
```

## Data Flow

All data is **static** — JSON or TypeScript files imported directly. No API calls, no server state, no global state management library.

```
src/data/linkData.ts           → Header → NavigationMenu
src/data/contactData.ts        → HomePage → ContactInformation
src/data/featuresData.json     → HomePage → ColumnarList (section: features-list)
src/data/servicesData.json     → HomePage → ColumnarList (section: services)
src/data/portfolioListData.json → HomePage → ColumnarList (section: portfolio-list)
src/data/artworkSliderData.json → HomePage → Slider (section: artwork-slider)
src/data/testimonialsSliderData.json → HomePage → Slider (section: testimonials-slider)
```

## Project Structure

```
/
├── docs/                  Project documentation (this folder)
├── public/                Static assets served as-is
│   └── images/            SVG illustrations used in production
├── src/
│   ├── App.tsx            Root component
│   ├── assets/            Source assets (images, SVG, sample data)
│   ├── components/
│   │   ├── prototypes/    Experimental/unused components (not in production tree)
│   │   ├── utils/         Shared enums and utility components
│   │   └── wrappers/      Layout wrappers: Header, Section, pages/, sections/
│   ├── data/              Static content data (JSON + TypeScript)
│   └── styles/            SCSS partials (imported via main.scss)
├── build/                 Production build output (git-tracked, deployed to gh-pages)
├── config-overrides.js    react-app-rewired webpack customizations (@svgr/webpack)
├── .gitattributes         Line ending normalization rules (LF for all text files)
└── package.json
```
