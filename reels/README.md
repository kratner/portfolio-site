# Code Examples & Demos

This directory contains production-ready code examples for each motion graphics component. Each example is standalone and can be embedded as an iframe or opened directly in a browser.

## Quick Navigation

### 1. Scroll-Triggered Narrative
**Best For**: Product bundle showcases, cinematic reveals, feature storytelling

**Files**:
- `scroll-triggered-narrative/demo.html` - Full working demo (28KB)
- `scroll-triggered-narrative/FLOWCHART.md` - User journey flowchart
- `scroll-triggered-narrative/INTERACTIONS.md` - Detailed interaction specs

**Tech**: GSAP 3.14.2 + ScrollTrigger, CSS3, JavaScript

**Live Example**: SHTF Bundle Showcase (Funnels/SHTF Survival Kit - 13692137)

**Integration**: Drop the HTML directly into a ClickFunnels Custom HTML element or embed as iframe

---

### 2. Image Carousel
**Best For**: Product galleries, feature showcases, hero rotations

**Files**:
- `image-carousel/recon-knife-carousel.html` - 3-slide carousel demo (17KB)
- `image-carousel/military-watch-carousel.html` - Product showcase variant (17KB)

**Tech**: Vanilla JavaScript, CSS Transforms, HTML5

**Features**:
- Prev/Next navigation
- Keyboard navigation (arrow keys)
- Optional auto-advance
- Responsive aspect ratios
- Multi-instance safe

**Live Examples**: 
- Recon Knife Carousel (Tactical Recon Bundle - 13683458)
- Military Watch Carousel (Tactical Recon Bundle - 13683458)

---

### 3. Countdown Timer
**Best For**: Limited-time offers, scarcity driving, deadline countdowns

**Files**:
- `countdown-timer/demo.html` - Multi-instance timer (10.7KB)
- `countdown-timer/single-instance.html` - Single timer example (10.7KB)

**Tech**: Vanilla JavaScript, CSS Animations, HTML5

**Features**:
- Multiple independent instances on one page
- Flexible date/time formats (HH:MM:SS, DD:HH:MM, DAYS)
- Custom callbacks on expiration
- Pulse animations on tick
- Responsive design

**Configuration via Data Attributes**:
```html
<div class="countdown-wrapper" 
     data-deadline="2026-07-05T23:59:59Z"
     data-format="HH:MM:SS">
  ...
</div>
```

---

### 4. Testimonials Carousel
**Best For**: Social proof, customer reviews, trust building

**Files**:
- `testimonials-carousel/demo.html` - Multi-testimonial carousel (8KB)

**Tech**: Vanilla JavaScript, CSS Grid/Flexbox, HTML5

**Features**:
- Auto-scroll with pause-on-hover
- Mixed-length testimonial support
- Star ratings (1-5)
- Responsive grid (1-3 columns)
- Smooth transitions

**Live Example**: Trauma First Aid Kit testimonials (Funnels/Trauma First Aid Kit - 13487478)

---

### 5. Product Showcase
**Best For**: Product lineups, feature highlights, bundle breakdowns

**Files**:
- `product-showcase/tactical-box-showcase.html` - Product grid with animations (12KB)

**Tech**: CSS Grid, Stagger Animations, HTML5

**Features**:
- Responsive grid (1-4 columns)
- Staggered entrance animations
- Hover effects (zoom, shadow)
- Image overlays
- Optional filtering

**Live Example**: Tactical Box Product Showcase (multiple variants)

---

## How to Use These Examples

### Option 1: Direct Embedding (iframes)
```html
<iframe 
  src="/reels/scroll-triggered-narrative/demo.html"
  title="Scroll-Triggered Narrative Demo"
  width="100%"
  height="800"
  style="border: none; border-radius: 8px;">
</iframe>
```

### Option 2: Copy & Customize
1. Copy the HTML file to your project
2. Adjust image URLs, text, colors
3. Test in browser
4. Deploy to your server

### Option 3: Extract Component Code
If you only need the component (without the demo styling):
1. Open the HTML file in a text editor
2. Extract the `<style>` section (CSS)
3. Extract the `<script>` section (JavaScript)
4. Copy the relevant HTML structure
5. Integrate into your page

---

## File Sizes (Unminified)

| Component | File Size | With Dependencies |
|---|---|---|
| Scroll-Triggered Narrative | 28KB | +30KB (GSAP) |
| Image Carousel | 17KB | None |
| Countdown Timer | 10.7KB | None |
| Testimonials Carousel | 8KB | None |
| Product Showcase | 12KB | None |

**Production Sizes** (minified, gzipped):
- Scroll-Triggered: ~8KB (GSAP: ~30KB)
- Image Carousel: ~2KB
- Countdown Timer: ~1.5KB
- Testimonials: ~1.8KB
- Product Showcase: ~1.5KB (CSS only)

---

## Browser Compatibility

All examples tested and working in:
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile Safari 13+
- ✅ Chrome Mobile

---

## Dependencies

### Scroll-Triggered Narrative
- **Required**: GSAP 3.14.2 (loaded from CDN)
- **Optional**: None

### All Other Components
- **Required**: None
- **External dependencies**: Vanilla JS, CSS only

---

## Customization

Each example includes multiple customization points:

### Colors
Most examples use CSS variables or inline styles that can be changed:
```css
:root {
  --color-primary: #E31C23;      /* Brand red */
  --color-accent: #FF6B35;       /* Accent orange */
  --color-text: #333;            /* Text color */
}
```

### Images
Replace image URLs in the HTML:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Description" />
```

### Text
All text is hardcoded in the HTML and can be changed directly:
```html
<h2>Your Custom Title</h2>
<p>Your custom description</p>
```

### Timing
Animation durations are in CSS `transition` or JavaScript intervals:
```css
transition: transform 0.6s ease-in-out;  /* Change 0.6s to your preference */
```

---

## Testing Checklist

Before using these examples in production:

- [ ] **Visual**: Check colors, fonts, layout
- [ ] **Responsive**: Test at 375px, 768px, 1024px widths
- [ ] **Performance**: Check animation smoothness (60fps)
- [ ] **Browsers**: Test in Chrome, Firefox, Safari
- [ ] **Mobile**: Test touch interactions if applicable
- [ ] **Accessibility**: Check keyboard navigation, screen reader
- [ ] **Console**: No JavaScript errors
- [ ] **Load Time**: Page loads smoothly (measure with Lighthouse)

---

## Integration with Portfolio Site

To add these to your portfolio site (github.com/kratner/portfolio-site):

1. Copy this entire `code-examples/` directory to `portfolio-site/public/reels/`
2. Update references in portfolio pages to point to `/reels/[component]/demo.html`
3. See `../INTEGRATION.md` for detailed steps

---

## Original Sources

All code examples are extracted from production Ace Media funnels. Original sources:

| Component | Funnel | File |
|---|---|---|
| Scroll-Triggered Narrative | SHTF Survival Kit (13692137) | SHTF_BundleShowcase_HF.html |
| Image Carousel | Tactical Recon Bundle (13683458) | recon-knife-carousel.html |
| Countdown Timer | Gold Faith Bundle (13684052) | CountdownTimer_multiinstance.html |
| Testimonials | Trauma First Aid Kit (13487478) | testimonials-block.html |
| Product Showcase | Tactical Box | TB_ProductShowcase.html |

---

## Support & Documentation

- **Component Guides**: See `../components/` folder for detailed guides
- **Specs**: See `../specs.json` for machine-readable metadata
- **Integration Guide**: See `../INTEGRATION.md` for portfolio site setup

---

## License & Usage

All code examples are:
- ✅ Original work (no copied third-party code)
- ✅ Production-tested on live funnels
- ✅ Fully documented
- ✅ Safe for portfolio showcase
- ✅ Can be used as reference for new projects

---

**Last Updated**: July 5, 2026  
**Version**: 1.0.0
