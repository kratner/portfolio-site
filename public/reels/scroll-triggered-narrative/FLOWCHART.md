# SHTF Bundle Showcase — Narrative Flowchart

**Pattern**: Scroll-triggered narrative  
**Component**: [SHTF_BundleShowcase_HF.html](Hyperframes/BundleShowcase/SHTF_BundleShowcase_HF.html)  
**Tech**: GSAP 3.14.2 + ScrollTrigger, 3 animated acts, 4-scene pinned sequencing

## User Journey

```mermaid
graph TD
    A["🔵 User scrolls to section"] --> B["Act 1: Header Reveal"]
    B -->|Eyebrow, title, subtitle fade in| C["Header visible"]
    C --> D["Act 2: Pinned Stage<br/>Scroll Scrub Sequence"]
    
    D --> D1["Scene 0: The Complete Bundle<br/><i>Bundle image, $179 retail"]
    D1 -->|User scrolls| D2["Scene 1: USB Tactical Flashlight<br/><i>Flashlight image, $40 retail"]
    D2 -->|User continues| D3["Scene 2: Tiger Blade Knife<br/><i>Knife image, $39 retail"]
    D3 -->|User advances| D4["Scene 3: Tactical Shoulder Bag<br/><i>Bag image, $100 retail"]
    
    D1 --> CTRL["📊 During scrub:<br/>Counter increments (01/04 → 04/04)<br/>Progress bar fills<br/>Scroll cue fades out<br/>Images crossfade + scale<br/>Scene text animates in/out"]
    CTRL --> D4
    
    D4 --> E["🎬 Act 3: Footer Reveal"]
    E -->|Stack, lines, total, CTA fade in| F["What's In The Box<br/>+ Claim CTA visible"]
    
    F --> G{User Action?}
    G -->|Clicks in-page CTA| H["Smooth scroll to form"]
    G -->|Clicks fixed CTA<br/>while in Act 2| H
    
    H --> I["Order form"]
    
    style A fill:#e1f5ff
    style CTRL fill:#fff3e0
    style G fill:#f3e5f5
    style H fill:#c8e6c9
```

## Scene Sequencing Details

| Scene | Trigger | Content | Animation |
|-------|---------|---------|-----------|
| **0** | Initial state | Bundle image + "Complete Kit" title, $179 | Visible at start |
| **1** | Scroll ~0-25% | Flashlight image + "USB Tactical Flashlight", $40 | Cross-fade + text slide in |
| **2** | Scroll ~25-50% | Knife image + "Tiger Blade Knife", $39 | Cross-fade + text slide in |
| **3** | Scroll ~50-100% | Bag image + "Tactical Shoulder Bag", $100 | Cross-fade + text slide in |

## CTA Flow

**Fixed CTA** (floating button, lower third):
- Appears when section enters viewport (85% from top)
- Visible while user is in Act 2 (pinned stage)
- Hides once Act 3 footer reaches 70% of viewport
- Click → `scrollToForm()`

**In-Page CTA** (Act 3 footer):
- Reveals as footer scrolls into view (75% from top)
- Persistent on page
- Click → `scrollToForm()`

Both target `#form-target` or `[data-title="_ORDERFORM"]` (ClickFunnels order form)

## Responsive Behavior

- **Desktop (968px+)**: Grid layout (image left, info right), full-width hero/footer
- **Tablet/Mobile (<968px)**: Stacked layout (image top, info bottom), narrower CTAs
- **Reduced motion**: All animations disabled, static reveal (all elements visible), pinning disabled
- **No GSAP**: Fallback to static state (all elements visible, no pin, no animations)

## Assets

- Bundle image: `mtp-images.com/pr-photo-1426.webp`
- Flashlight: `mtp-images.com/pr-photo-1398.webp`
- Knife: `mtp-images.com/pr-photo-067.png`
- Bag: `mtp-images.com/pr-photo-664.webp`
- Background: `mtp-images.com/pr-photo-1419.png` (dark overlay, fixed)
