

# Widen Bookshelf & Improve Scroll Experience

## Overview
This plan addresses two issues on the homepage bookshelf:
1. Making the bookshelf wider to fit more books without scrolling on desktop
2. Improving the horizontal scroll experience on mobile with proper scrollbar hiding and visual scroll indicators

---

## Current State Analysis

| Aspect | Current Value | Issue |
|--------|---------------|-------|
| Max width | `max-w-6xl` (1152px) | Constrains 8 books |
| Scrollbar hiding | Class used but undefined | Scrollbars visible |
| Scroll indicators | None | Users don't know content scrolls |
| Book spine widths | 48-60px each | ~450px total needed |

---

## Changes

### 1. Remove Max-Width Constraint on Bookshelf

**File:** `src/components/bookshelf/BookshelfStage.tsx`

Remove the `max-w-6xl` constraint so the bookshelf can expand to fill available space in the hero's grid column.

```tsx
// Before (line 53)
className="relative w-full max-w-6xl mx-auto"

// After
className="relative w-full mx-auto"
```

This allows the bookshelf to use the full width of its container (the right column of the hero grid), which on large screens is roughly half of `max-w-7xl` (640px).

---

### 2. Add Scrollbar-Hide CSS Utility

**File:** `src/index.css`

Add the missing `scrollbar-hide` utility class that hides scrollbars while maintaining scroll functionality.

```css
/* Add to @layer utilities */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}
```

---

### 3. Add Subtle Scroll Fade Indicators

**File:** `src/components/bookshelf/BookshelfStage.tsx`

Add gradient fade overlays on the left/right edges that hint at scrollable content on smaller screens.

```tsx
{/* Scroll fade indicators - visible only when scrollable */}
<div 
  className="absolute left-0 top-0 bottom-4 w-8 pointer-events-none md:hidden"
  style={{
    background: 'linear-gradient(to right, hsl(var(--background)), transparent)'
  }}
  aria-hidden="true"
/>
<div 
  className="absolute right-0 top-0 bottom-4 w-8 pointer-events-none md:hidden"
  style={{
    background: 'linear-gradient(to left, hsl(var(--background)), transparent)'
  }}
  aria-hidden="true"
/>
```

These overlays:
- Only show on mobile (`md:hidden`)
- Create a subtle fade effect indicating more content exists
- Are non-interactive (`pointer-events-none`)

---

### 4. Improve Book Container Centering

**File:** `src/components/bookshelf/BookshelfStage.tsx`

Adjust the inner container to better center books when they don't need to scroll.

```tsx
// Before (line 66)
<div className="flex items-end justify-center gap-2 md:gap-4 min-w-max mx-auto">

// After
<div className="flex items-end justify-start md:justify-center gap-2 md:gap-4 min-w-max md:min-w-0 mx-auto">
```

This change:
- On mobile: left-align books for natural scroll start position
- On desktop: center books when no scroll is needed
- `md:min-w-0` allows books to wrap/fit naturally on larger screens

---

## Summary of File Changes

| File | Changes |
|------|---------|
| `BookshelfStage.tsx` | Remove max-width, add scroll fade indicators, adjust centering |
| `index.css` | Add `.scrollbar-hide` utility class |

---

## Technical Details

**Width Calculation:**
- 8 books × ~55px average spine width = ~440px
- Plus gaps (7 × 16px on desktop) = ~112px
- Total needed: ~550px
- Hero right column on desktop: ~640px at `max-w-7xl`
- Result: All 8 books should fit without scrolling on desktop ≥1024px

**Accessibility:**
- Scroll fade indicators are decorative (`aria-hidden`)
- Keyboard navigation already supported via arrow keys
- Focus states preserved on book spines

