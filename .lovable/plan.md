
# Restructure Hero: Dual-Zone Layout (Black Bookshelf + Maroon Text)

## Overview
Split the hero section into two visually distinct zones:
- **Top**: Black background with the bookshelf
- **Bottom**: Maroon/burgundy background with all text content

## Visual Structure

```text
┌─────────────────────────────────────────────────────────────┐
│                    BLACK BACKGROUND                          │
│                                                              │
│    ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│    │      │ │      │ │      │ │      │ │      │ │      │    │
│    │Book  │ │Book  │ │Book  │ │Book  │ │Book  │ │Book  │    │
│    │Spine │ │Spine │ │Spine │ │Spine │ │Spine │ │Spine │    │
│    │      │ │      │ │      │ │      │ │      │ │      │    │
│    └──────┴─┴──────┴─┴──────┴─┴──────┴─┴──────┴─┴──────┘    │
│    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │
│                      (shelf base)                            │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                   MAROON BACKGROUND                          │
│           (with paper texture + gradient overlay)            │
│                                                              │
│        ┌─────────────────────────────────────────┐          │
│        │ AWARD-WINNING PUNJABI GHAZAL WRITER     │          │
│        └─────────────────────────────────────────┘          │
│                                                              │
│                  POET · NOVELIST · CRITIC                    │
│                                                              │
│               The Physicist Who Became a                     │
│                         Poet                                 │
│                                                              │
│                    ───── ◇ ─────                             │
│                                                              │
│          Exploring consciousness, longing, and               │
│       the immigrant experience through the ancient           │
│                   art of the ghazal                          │
│                                                              │
│                        SCROLL                                │
│                          │                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Technical Changes

### File: `src/components/sections/home/HeroSection.tsx`

**1. Remove the outer single-section wrapper** 
Replace the current single `<section>` with a `<>` fragment containing two separate sections.

**2. Create the Bookshelf Zone (Top)**
```tsx
{/* Bookshelf Zone - Black Background */}
<section className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-8">
  <BookshelfStage 
    books={[...books].sort((a, b) => parseInt(a.year) - parseInt(b.year))} 
    motionEnabled={shouldAnimate}
  />
</section>
```
- Uses `bg-background` which is the dark noir black (`240 10% 4%`)
- Padding top accounts for the header space
- Minimal bottom padding since the shelf base provides visual grounding

**3. Create the Text Zone (Bottom)**
```tsx
{/* Text Zone - Maroon Background */}
<section className="relative overflow-hidden bg-burgundy px-6 py-16 md:py-24">
  {/* Background texture - subtle paper grain */}
  <div 
    className="absolute inset-0 opacity-[0.03]"
    style={{ backgroundImage: `url(${bookPages})`, ... }}
    aria-hidden="true"
  />
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/40 via-transparent to-burgundy-dark/60" aria-hidden="true" />
  
  {/* All text content (badge, sub-badge, H1, divider, subhead) */}
  <motion.div className="relative z-10 text-center max-w-3xl mx-auto">
    {/* ... existing content ... */}
  </motion.div>
  
  {/* Scroll cue at bottom */}
  <motion.div className="relative z-10 mt-12 flex justify-center">
    <ScrollCue />
  </motion.div>
</section>
```
- Keeps the paper texture and gradient overlay
- Maintains all existing text content and animations
- Scroll cue positioned at the bottom

**4. Adjust spacing**
- Bookshelf zone: `pt-24 md:pt-32` (top padding for header clearance), `pb-8` (small bottom padding)
- Text zone: `py-16 md:py-24` (balanced vertical padding)

---

## Summary of Changes

| Element | Current | New |
|---------|---------|-----|
| Outer wrapper | Single `<section>` with burgundy bg | Fragment with two sections |
| Bookshelf position | Below text content | **Above** text content |
| Bookshelf background | Inherited burgundy | **Black** (`bg-background`) |
| Text background | Burgundy | Remains burgundy |
| Section structure | One min-h-screen section | Two stacked sections (natural height) |
