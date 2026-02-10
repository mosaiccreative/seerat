

## Kirchan Cover: Reduce Cropping

**Problem:** The Kirchan book cover is displayed with `object-cover`, which fills the 3:4 container by cropping the top and bottom. `coverPosition` only shifts the crop center -- it cannot reduce how much is cropped.

**Solution:** Add a new optional `coverFit` property to the Book data model. When set to `"contain"`, the image will fit entirely within the frame (no cropping) with a matching background color. The default remains `"cover"` (current behavior).

---

### Steps

1. **Add `coverFit` to the Book interface** in `src/data/books.ts`
   - New optional field: `coverFit?: "cover" | "contain"`
   - Set `coverFit: "contain"` on the Kirchan entry

2. **Update BookListCard** (`src/components/bookshelf/BookListCard.tsx`)
   - Accept the new `coverFit` prop
   - Apply `object-contain` instead of `object-cover` when `coverFit` is `"contain"`
   - Add a dark background behind the image so letterboxing looks intentional

3. **Update BookSpine and BookCard** if they also display covers
   - Same logic: respect `coverFit` when rendering cover images

### Technical Details

The key CSS change per component:

```tsx
// Before
className="w-full h-full object-cover"

// After
className={cn("w-full h-full", coverFit === "contain" ? "object-contain" : "object-cover")}
```

The contain mode will show the full image with dark bars (letterboxing) on the sides or top/bottom, matching the existing fallback background color.

