

# Update Hero Text and Widen Bookshelf

## Overview
Two straightforward changes to the homepage hero section:
1. Change "Sufi" to "Writer" in the headline
2. Make the bookshelf wider so all books display without horizontal scrolling on desktop

---

## Changes

### 1. Text Change in `src/components/sections/home/HeroSection.tsx`

**Line 63** - Update the headline text:
```tsx
// Before
The Sufi.<br />

// After
The Writer.<br />
```

---

### 2. Widen Bookshelf in `src/components/bookshelf/BookshelfStage.tsx`

**Line 53** - Increase the max-width constraint:
```tsx
// Before
className="relative w-full max-w-5xl mx-auto"

// After  
className="relative w-full max-w-6xl mx-auto"
```

This increases the maximum width from `max-w-5xl` (64rem / 1024px) to `max-w-6xl` (72rem / 1152px), giving the books more room to spread out and reducing the need for horizontal scrolling on larger screens.

---

## Summary

| File | Change |
|------|--------|
| `HeroSection.tsx` | "The Sufi." → "The Writer." |
| `BookshelfStage.tsx` | `max-w-5xl` → `max-w-6xl` |

