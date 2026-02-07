
# Replace Book Cover with New Premium 3D Book Asset

## Overview
Replace the current book cover implementation with the user's provided premium leather-bound book image. The new image already contains all three scripts (Gurmukhi, Urdu, English) embedded directly, so we'll remove the text overlays and simplify the background to a pure matte black as requested.

## Changes Required

### 1. Add New Book Asset
- Copy the uploaded image (`IMG_9891.png`) to `src/assets/` as a new book image (e.g., `seerat-book-cover.png`)
- Update the import in BookCover.tsx to use the new asset

### 2. Simplify Background
- Remove the radial gradient overlay (currently lines 21-27)
- Remove the ambient warm glow effect (currently lines 29-42)
- Set background to pure matte black (`bg-black` or `#000000`)

### 3. Remove Text Overlays
- Remove all three text overlay spans (Gurmukhi, Urdu, English) since they're now baked into the image (lines 123-156)

### 4. Simplify Lighting Effects
- Remove the "warm glow behind the book" effect (lines 83-95)
- Keep the subtle book shadow for depth, but make it more subtle
- Maintain the 3D floating animation for premium feel

### 5. Keep Essential Elements
- Preserve the 3D perspective and floating animation
- Keep the "Open the book" call-to-action
- Keep the corner accent decorations
- Maintain the opening transition animation

## File Changes

| File | Action |
|------|--------|
| `src/assets/seerat-book-cover.png` | Create (copy from upload) |
| `src/components/BookCover.tsx` | Modify |

---

## Technical Details

### BookCover.tsx Changes

```text
Key modifications:
1. Import: leather-book.png -> seerat-book-cover.png
2. Background: Remove gradient, use pure bg-black
3. Remove: Ambient glow div, warm glow behind book div
4. Remove: All text overlay spans
5. Simplify: Drop shadow to be more subtle/cinematic
6. Keep: 3D transform, floating animation, CTA, corner accents
```

### Updated Structure
- Pure black background container
- 3D floating book with subtle shadow
- Book image (no additional overlays)
- "Open the book" CTA at bottom
- Corner gold accents

The result will be a clean, museum-quality presentation matching the user's specifications: a single floating 3D book centered on a pure black page, clean, minimal, and premium.
