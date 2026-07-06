# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Motion Graphics Reels Gallery section showcasing interactive components
  - Scroll-Triggered Bundle Showcase (GSAP + ScrollTrigger)
  - Image Carousel (Vanilla JavaScript)
  - Responsive iframe embeds with custom heights
  - Dark theme styled gallery (`_reels.scss`)
  - IntersectionObserver fade-in animation on scroll

### Changed
- HomePage now includes ReelsGallery section between portfolio-list and artwork-slider
- Updated styling imports to include motion graphics theme

### Technical Details
- New components: `ReelsGallery`, `ComponentCard`
- Added Vite BASE_URL resolution for GitHub Pages deployment
- Iframe sandbox attributes for security
- Mobile-responsive at 375px, 768px, 1024px breakpoints
- Build size impact: ~9KB overhead (components + styling)

---

## [0.1.0] - Initial Release
- React portfolio site with hero header, features, services, portfolio items
- Artwork slider showcase
- Testimonials carousel
- Contact information section
- Deployed to GitHub Pages at https://kratner.github.io/portfolio-site/
