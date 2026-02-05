
# Plan: Homepage Book Experience & Color Fixes

## Overview
Make the 3D floating book always appear when visiting the homepage, enhance the book-opening transition, and fix the washed-out color issues throughout the site.

---

## Changes

### 1. Always Show Book on Homepage Visit
**File: `src/pages/Index.tsx`**

Remove the `sessionStorage` check that skips the book animation for returning visitors. The book intro will play every time someone visits the homepage (`/`).

- Remove the `useEffect` that checks for `book-opened` in sessionStorage (lines 21-27)
- Remove the `sessionStorage.setItem` call in `handleOpenBook` (line 31)
- Initialize `bookOpened` and `showContent` to `false` so the book always shows first

---

### 2. Improve Book Opening Transition
**File: `src/components/BookCover.tsx`**

Enhance the book opening animation to feel more like pages spreading open:

- Add a "page spread" effect where the book scales up and fades to white/cream before revealing content
- Increase the opening animation duration for a more cinematic feel
- Add a subtle page-turning visual effect

---

### 3. Fix Header Color Issues
**File: `src/components/layout/SiteHeader.tsx`**

The `mix-blend-difference` is causing inverted/washed-out colors:

- Remove `mix-blend-difference` from the header
- Use a semi-transparent dark background with backdrop blur for better legibility
- Ensure the header is hidden during the book cover phase (only show after book opens)

---

### 4. Fix BookCover Background Colors
**File: `src/components/BookCover.tsx`**

Replace hardcoded HSL values with CSS variables for consistency:

- Change the radial gradient background to use `var(--ink)` and proper dark tones
- Update the ambient glow to use `var(--gold)` variable
- Ensure the "cream" text color uses the CSS variable

---

### 5. Adjust Site Header Visibility During Book Phase
**File: `src/pages/Index.tsx`**

Move the `PageLayout` (which includes `SiteHeader`) so it only renders after the book has opened:

- The header should not be visible while the book cover is displayed
- This prevents the header from bleeding through the book animation

---

## Technical Details

### Index.tsx State Flow
```text
Initial Load
     |
     v
[bookOpened=false, showContent=false]
     |
     v
Show BookCover (3D floating book)
     |
     v  (User clicks book)
[isOpening=true] --> Animation plays
     |
     v  (After 2 seconds)
[bookOpened=true] --> BookCover exits via AnimatePresence
     |
     v  (After 100ms)
[showContent=true] --> PageLayout + content fades in
```

### Color Variables Being Used
- `--background: 20 10% 4%` (near-black)
- `--foreground: 40 20% 92%` (cream text)
- `--gold: 38 75% 55%` (accent gold)
- `--ink: 20 10% 4%` (same as background)
- `--cream: 40 20% 92%` (same as foreground)

---

## Files to Modify
1. `src/pages/Index.tsx` - Remove sessionStorage logic
2. `src/components/BookCover.tsx` - Use CSS variables, enhance animation
3. `src/components/layout/SiteHeader.tsx` - Remove mix-blend-difference, add proper background

---

## Result
- The 3D book will appear every time someone visits the homepage
- Clicking the book triggers a cinematic opening animation
- After the animation, the main website content is revealed
- Colors will be consistent and properly themed throughout
