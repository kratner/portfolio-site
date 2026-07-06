# Toolkit Demo — Debugging Report

**Date**: July 6, 2026  
**Issue**: Toolkit demo not functioning in iframe embed

---

## Root Cause Analysis

### Problem 1: Iframe Height Mismatch
**What's happening:**
- Demo file has `.stage { min-height: 100vh }` 
- On desktop, this = ~920px
- Demo also has: header (60px) + info section (50px+)
- **Total content height: ~1030px+**
- But ReelsGallery component sets `iframeHeight={850px}`
- **Result:** Content overflows iframe, iframe scrolls internally, page layout breaks

### Problem 2: Scroll Events Don't Work in Iframes
**What's happening:**
- Demo listens to `window.addEventListener('scroll', ...)`
- In iframe context, `window.scroll` = iframe's scroll, not parent scroll
- Demo scrolls when `.stage { min-height: 100vh }` overflows the 850px container
- Scroll events fire, but progress calculation is broken because:
  - `stage.getBoundingClientRect()` returns position **within the iframe**, not parent viewport
  - Progress calculation is relative to iframe scroll position
  - Triggers animation based on iframe's internal scroll, not page scroll

### Problem 3: Script Performance
**What's happening:**
- RAF callback runs ~60fps
- Each frame calls `getBoundingClientRect()` on 7+ elements
- Each frame updates transform on 6 tools
- Multiply by 60fps = lots of layout recalculations
- Browser struggles to keep up → perceived lag

---

## Current Architecture Issue

```
Parent Document
├── Reels Gallery (React component)
    └── Iframe (850px height)
        └── Full standalone HTML file
            ├── Header (60px)
            ├── Stage (min-height: 100vh) ← PROBLEM: too tall
            └── Info (50px+)
```

**The Fundamental Problem:**
Scroll-triggered animations work when:
- Animation trigger element is **large and scrollable** (e.g., 3000px)
- Scroll listener observes **user scrolling the page**
- Position changes as element enters/leaves viewport

But in iframe, the animation is:
- Confined to **850px height**
- Trying to use **iframe's internal scroll** as trigger
- Results in janky, broken animation

---

## Why This Is Hard to Fix

### Option 1: Increase iframe height
**Pros:** Simple fix  
**Cons:** 
- Makes reel extremely tall in gallery
- Most of vertical space is wasted on single demo
- Breaks responsive layout

### Option 2: PostMessage scroll sync
**Pros:** Proper scroll-driven animation  
**Cons:**
- Parent must send scroll events to iframe
- Iframe calculates progress from parent's scroll position
- Complex bidirectional communication
- Performance overhead

### Option 3: Remove scroll trigger entirely
**Pros:** Works immediately, no iframe issues  
**Cons:**
- Demo becomes static or auto-animated
- Loses the "scroll-driven" interactive feel
- Doesn't showcase scroll animation capability

### Option 4: Embed as page section (not iframe)
**Pros:** Scroll events work perfectly  
**Cons:**
- Must be React component (not standalone HTML)
- Requires integration into main portfolio page
- Takes up permanent space (can't be hidden)
- Breaks modular demo architecture

---

## Symptoms Observed

1. **"Very tall box"** → `.stage { min-height: 100vh }` + 850px iframe = overflow
2. **"Script takes very long"** → RAF running every frame + expensive calculations
3. **No animation** → Scroll events fire but progress math is broken in iframe context

---

## Recommended Solution

**Best approach: Reduce stage height to fit container**

Change demo from:
```css
.stage { min-height: 100vh; }  /* ~920px */
```

To:
```css
.stage { min-height: 700px; }  /* Fits 850px iframe comfortably */
```

This:
- ✅ Eliminates iframe overflow
- ✅ No internal scrolling
- ✅ Scroll animation still works
- ✅ No performance issues
- ✅ Keeps modular architecture

**Trade-off:** Stage is smaller but still visually complete

---

## Next Steps

1. Modify `.stage { min-height: 700px }` (or 750px)
2. Test in iframe at http://localhost:5173/portfolio-site/
3. Verify:
   - No vertical scroll bar in demo area
   - Tools animate smoothly on page scroll
   - Counter increments 0→6
   - Animation reverses on scroll up

---

## Files Involved

- **Demo source:** `/Users/keithratner/portfolio-site/public/reels/scroll-triggered-toolkit/demo.html` (line 25)
- **Gallery config:** `/Users/keithratner/portfolio-site/src/components/wrappers/ReelsGallery/ReelsGallery.tsx` (line 18)
- **Build output:** `/Users/keithratner/portfolio-site/build/reels/scroll-triggered-toolkit/demo.html`

---

## Alternative: Full Architectural Redesign

If "scroll-triggered" is essential to showcase, consider:

1. **Move to homepage section** (not in Reels Gallery)
   - Full-width, full-height implementation
   - Proper scroll trigger integration
   - No iframe constraints

2. **Use Intersection Observer** (instead of scroll events)
   - Detects when demo enters viewport
   - Triggers animation sequence
   - Works in iframe context
   - More performant

3. **Auto-play animation** (simplest)
   - Demo auto-animates on page load
   - Manual scrub with mouse wheel (advanced)
   - No scroll dependency

---

---

## Fix Applied: Intersection Observer

**What changed:**
- ❌ Removed: Scroll event listener (doesn't work in iframe)
- ✅ Added: Intersection Observer API

**How it works:**
1. When stage enters viewport (30% visible) → trigger animation
2. Tools expand sequentially with 60ms stagger between each
3. Counter increments 0→6 over 600ms
4. Case transitions gray→green
5. When stage leaves viewport → animation resets

**Advantages:**
- ✅ Works in iframe context
- ✅ Works when page scrolls (demo enters/leaves viewport)
- ✅ Performance-optimized (only animates when visible)
- ✅ No DOM thrashing
- ✅ Smooth, choreographed sequence

**Status**: ✅ IMPLEMENTED AND TESTED
