
# Center Bookshelf on Mobile/Tablet View

## The Issue
When the screen size causes the layout to stack (books above H1 text), the bookshelf appears left-aligned instead of centered. This happens because:
1. The Embla carousel uses `align: 'start'` which left-aligns the book spines
2. On mobile, the carousel container spans the full width but content starts from the left

## Solution
Apply responsive centering to the bookshelf so that on mobile/tablet (when it stacks above the H1), the books are centered, while maintaining the current behavior on larger screens.

---

## Technical Changes

### 1. Update BookshelfStage Component
**File:** `src/components/bookshelf/BookshelfStage.tsx`

Change the Embla carousel alignment to be responsive:
- On mobile/tablet (`lg:` breakpoint and below): Use `align: 'center'` to center the books
- On desktop: Keep `align: 'start'` for the current left-to-right scrolling behavior

Since Embla doesn't support responsive options out of the box, we'll:
- Add a `centered` prop to `BookshelfStage`
- Use CSS flexbox centering as a fallback for the inner container on smaller screens

**Changes:**
```text
Line 90: Change from:
  <div className="flex items-end gap-2 md:gap-4">

To:
  <div className="flex items-end gap-2 md:gap-4 justify-center lg:justify-start">
```

### 2. Update HeroSection to Pass Centering Context
**File:** `src/components/sections/home/HeroSection.tsx`

Ensure the bookshelf container properly constrains width on mobile for centering:
- The current setup already has `justify-center`, but we may need to adjust overflow behavior

---

## Visual Outcome
- **Mobile/Tablet (stacked layout):** Books will be horizontally centered above the H1 text
- **Desktop (side-by-side layout):** Books remain left-aligned with drag-to-scroll behavior intact
