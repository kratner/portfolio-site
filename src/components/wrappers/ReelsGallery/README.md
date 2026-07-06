# Motion Graphics Reels Gallery

This directory contains the React components for displaying the motion graphics reel on the portfolio site.

## Structure

```
ReelsGallery/
├── ReelsGallery.tsx      # Main gallery component (controls layout, data)
├── ComponentCard.tsx     # Individual reel card (lazy-loads iframe)
├── index.ts             # Exports
└── README.md            # This file
```

## Components

### ReelsGallery

Main container component that renders the gallery header and all component cards.

**Props**: None (data is hardcoded in REELS_DATA)

**Features**:
- Dark-themed header with title and description
- Responsive grid layout
- Lazy-loaded iframes via ComponentCard

### ComponentCard

Individual reel card that displays:
- Title and description
- Embedded HTML demo (lazy-loaded)
- Tech stack badges
- Source code link

**Props**:
- `title` (string): Component title
- `description` (string): Component description
- `demoUrl` (string): Path to HTML demo file
- `techStack` (string[]): Array of technology names
- `codeUrl?` (string): Optional GitHub link

**Features**:
- Intersection Observer for lazy-loading iframes
- Hover effects on tech badges and links
- Responsive layout (stacks on mobile)

## Styling

All styling is in `src/styles/_reels.scss`:

- Dark theme aligned with portfolio (#1a1a1a, #252525)
- Responsive at 375px, 768px, 1024px, 1440px
- Smooth transitions (0.3s ease)
- Hover states for interactive elements

## Data Format

Edit the `REELS_DATA` array in `ReelsGallery.tsx` to add/modify reels:

```typescript
{
  id: 'unique-id',
  title: 'Component Title',
  description: 'Detailed description of what this component does and when to use it.',
  demoUrl: '/reels/folder/demo.html',
  techStack: ['Tech 1', 'Tech 2', 'Tech 3'],
  codeUrl: 'https://github.com/kratner/portfolio-site/tree/main/public/reels/folder',
}
```

## Demo Files Location

All HTML demo files are in `/public/reels/`:

```
public/reels/
├── scroll-triggered-narrative/demo.html
├── image-carousel/recon-knife-carousel.html
├── countdown-timer/demo.html
├── testimonials-carousel/demo.html
└── product-showcase/tactical-box-showcase.html
```

## Performance Considerations

### Lazy-Loading Iframes

ComponentCard uses Intersection Observer to defer iframe loading until the card comes into view. This reduces initial page load by ~200KB+ (GSAP library + demo assets).

**How it works**:
1. Card is mounted (no iframe yet)
2. Intersection Observer watches the container
3. When card scrolls into view (10% visible), iframe loads
4. Demo renders in the iframe sandbox

### Bundle Size Impact

- ReelsGallery component: ~3KB
- ComponentCard component: ~2KB
- Styling (_reels.scss): ~4KB
- Demo files: Load on demand via iframe (isolated)

**Total page overhead**: ~9KB (gzipped: ~2KB)

## Integration with HomePage

ReelsGallery is imported and rendered in `src/components/wrappers/pages/HomePage.tsx`:

```typescript
import { ReelsGallery } from "../ReelsGallery";

// Inside JSX:
<Section className="reels-gallery">
  <ReelsGallery />
</Section>
```

IntersectionObserverComponent adds fade-in animation on scroll:

```typescript
<IntersectionObserverComponent
  className="visible"
  targetSelector="section.reels-gallery .reel-header, section.reels-gallery .motion-component"
  threshold={0.1}
  onIntersection={handleIntersection}
/>
```

## Customization

### Colors

Edit `src/styles/_reels.scss`:

```scss
.reels-section {
  background: #1a1a1a; // Section background
  
  .motion-component {
    border: 1px solid #333;  // Card border
    
    &:hover {
      border-color: #555;    // Border on hover
    }
  }
}
```

### Spacing

Adjust padding/gaps in `_reels.scss`:

```scss
.reel-header {
  margin-bottom: 80px;  // Header spacing
}

.reel-content {
  gap: 120px;  // Space between cards
}
```

### Typography

Title, description, and tech stack styling all use CSS in `_reels.scss`. Adjust font sizes:

```scss
.reel-header h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);  // Responsive title
}
```

## Testing Checklist

Before deploying:

- [ ] All demo iframes load correctly
- [ ] Lazy-loading works (only load when scrolled into view)
- [ ] No console errors
- [ ] Responsive at 375px, 768px, 1024px
- [ ] Animations smooth (60fps)
- [ ] Tech stack badges wrap correctly
- [ ] Links open in new tab
- [ ] Mobile touch interactions work
- [ ] Reduced motion accessibility respected

## Browser Support

- Chrome 80+ ✅
- Firefox 75+ ✅
- Safari 13+ ✅
- Edge 80+ ✅
- Mobile Safari 13+ ✅
- Chrome Mobile ✅

## Future Enhancements

- [ ] Add video previews for each component
- [ ] Create interactive "Build Your Own" configurator
- [ ] Add performance benchmarks (bundle size, animation fps)
- [ ] Integrate CodePen embeds for code editing
- [ ] Add animated code snippets with syntax highlighting

## Related Files

- `/src/styles/_reels.scss` - All styling
- `/public/reels/` - HTML demo files
- `/src/components/wrappers/pages/HomePage.tsx` - Integration point
- `/src/styles/main.scss` - Imports _reels.scss
