# SHTF Bundle Showcase — Interactions & State Management

**Component**: [SHTF_BundleShowcase_HF.html](Hyperframes/BundleShowcase/SHTF_BundleShowcase_HF.html)

## Interactive Elements

### 1. Scroll Position (Primary Controller)

**Trigger**: User scrolls through viewport  
**State Driven By**: ScrollTrigger progress (0 to 1)

| Progress Range | Active Scene | Visual Feedback |
|---|---|---|
| Initial → 0% | Scene 0 | Bundle visible, counter 01/04 |
| 0% → 25% | 0→1 transition | Fade flashlight in, bundle out; counter animates |
| 25% → 50% | 1→2 transition | Fade knife in, flashlight out; counter animates |
| 50% → 75% | 2→3 transition | Fade bag in, knife out; counter animates |
| 75% → 100% | Scene 3 (hold) | Bag visible, counter 04/04 |

**Connected Animations**:
- Counter text increments (tabular-nums for smooth counting feel)
- Progress bar fills from left (`right: 0` to `right: 100%`)
- Image opacity crossfades (current fade out + scale up, next fade in + scale normal)
- Scene text animates (current slide out + fade, next slide in + fade)
- Scroll cue chevron fades out by 25% progress

### 2. Fixed CTA Button

**Element**: `.shtf-hf-fixedcta`  
**Location**: Fixed position, bottom of viewport (2-3 rows above mobile keyboard)  
**Visibility**: Controlled by ScrollTrigger observers

| Trigger | Action | Result |
|---|---|---|
| Section enters viewport (top 85%) | `onEnter` | Add `.is-active` class → slide up, show |
| User scrolls back up past section | `onEnterBack` | Add `.is-active` class → slide up, show |
| Section exits bottom of viewport | `onLeave` | Remove `.is-active` class → slide down, hide |
| User scrolls back into section | `onLeaveBack` | Remove `.is-active` class → slide down, hide |
| Footer reaches 70% of viewport | `onEnter` (footer trigger) | Remove `.is-active` class → hide (in-page CTA now visible) |
| User scrolls back above footer | `onLeaveBack` (footer trigger) | Add `.is-active` class → show fixed CTA |

**Click Handler**:
```javascript
onclick="scrollToForm(event)"
// Targets: #form-target → [data-title="_ORDERFORM"] → .orderformtarget
// Behavior: smooth scroll to ClickFunnels order form
```

### 3. In-Page CTA (Footer)

**Element**: `.shtf-hf-cta` (in Act 3 footer)  
**Visibility**: Controlled by scroll entry into footer

| Trigger | Action | Result |
|---|---|---|
| Footer reaches 75% of viewport | ScrollTrigger `once: true` | Animate in: fade + slide up |
| Animation completes | — | CTA now interactive |

**Click Handler**: Same as fixed CTA  
**Persistent Pulse**: Subtle boxShadow yoyo animation (1.4s cycle) once CTA is visible

### 4. Scroll Cue Chevron

**Element**: `.shtf-hf-scrollcue`  
**Purpose**: Visual hint to encourage scrolling into Act 2

| Trigger | Action | Result |
|---|---|---|
| Section enters viewport (top 85%) | ScrollTrigger `once: true` | Fade in over 0.5s |
| User scrolls | GSAP onUpdate | Opacity driven down by `self.progress` |
| Progress > 25% | — | Fully faded out (visibility driven by scrub) |
| **Arrow sub-element** | — | Continuous bounce animation (yoyo, 0.7s cycle) |

**Reduced Motion**: Hidden with `display: none`

---

## State Variables & Tracking

### Internal GSAP State
- **`sceneTl.progress()`** - Current position in scene sequence (0 to 1)
- **`ScrollTrigger.getAll()[index].progress`** - Scroll progress of each trigger

### Computed Values
```javascript
// Counter display
n = Math.min(sceneCount, Math.floor(self.progress * sceneCount) + 1)
counter.textContent = String(n).padStart(2, '0')  // "01" to "04"

// Progress bar fill
progress.style.right = (100 - self.progress * 100) + '%'

// Scroll cue opacity
op = self.progress < 0.25
    ? Math.max(0, 1 - (self.progress / 0.25))  // Linear fade 0→0.25
    : 0                                         // Hidden after 25%
```

### No Persistent State Machine
This implementation does **not** store state—all visuals are derived from scroll position. Good for:
- Simple linear progressions ✅
- Mobile scroll perfomance (no extra re-renders)

**Future branching patterns** will need explicit state tracking (see "Narrative Branching" section below).

---

## Multi-Instance Safety

Each instance is scoped independently:
```javascript
document.querySelectorAll('.shtf-hf-section').forEach(function(section, idx) {
    // All selectors are .querySelector(section) — scoped to this section
    var images = section.querySelectorAll('.shtf-hf-media img');
    var scenes = section.querySelectorAll('.shtf-hf-scene');
    // ... all child elements are relative to 'section'
    
    // ScrollTrigger events are tied to this section's elements
    // No global variable collisions
});
```

**Important**: Fixed CTA lives outside section in DOM (sibling), found via:
```javascript
var fixedCta = (section.parentNode || document).querySelector('.shtf-hf-fixedcta');
```

---

## Fallbacks & Accessibility

### Reduced Motion
Users with `prefers-reduced-motion: reduce` get:
- All animations disabled
- All elements statically visible
- No pinning (scrolls normally)
- Fixed CTA visible but not animated
- Scroll cue hidden

### No GSAP / CSP Block
If GSAP fails to load:
- Section gets `.shtf-hf-no-gsap` class
- CSS rules override animations → static reveal
- Fixed CTA visible and functional (no animation)
- Progress bar + counter hidden (animation-only)
- Scroll cue hidden

Both fallbacks preserve usability and readability of content.

---

## Future Extensions: Branching Narratives

When you add **form-triggered branching** (e.g., "Choose bundle variant → reveal alternate scenes"), you'll need:

```javascript
// State object tracking user choices
var narrativeState = {
    selectedScene: 0,
    userChoices: {},  // form field values
    activeBranch: 'default'
};

// Form element change → update state → trigger animation
formElement.addEventListener('change', function(e) {
    narrativeState.userChoices[e.target.name] = e.target.value;
    updateNarrative(narrativeState);  // Re-run scene animations
});

// CTA click → branch to different narrative
ctaButton.addEventListener('click', function() {
    narrativeState.activeBranch = 'alternate-path';
    transitionToBranch(narrativeState);  // Animate to new narrative
});
```

**This component is currently linear only.** Branching requires state machine refactor (see pattern migration in CLAUDE.md once established).
