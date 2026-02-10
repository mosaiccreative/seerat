

## Revert coverFit and Adjust Kirchan Cover

### What changed
Revert the `coverFit: "contain"` value on the Kirchan entry back to default (`cover` mode). Remove the `coverFit` property from Kirchan in `src/data/books.ts`. The interface and component support for `coverFit` can stay -- it's useful for other books later.

### Adjustment options for Kirchan
Since the Kirchan cover has text at both the very top ("ਕਿਰਚਾਂ") and very bottom ("ਸੁਰਿੰਦਰ ਸਿੰਘ ਸੀਰਤ"), and the image is taller than the 3:4 display frame, `object-cover` will always crop one end. The options are:

- **`coverPosition: "center 10%"`** — prioritize showing the top title, bottom author gets clipped
- **`coverPosition: "center 90%"`** — prioritize showing the bottom author, top title gets clipped  
- **`coverPosition: "center 50%"`** (default) — center the art, both edges clipped equally
- **Keep `coverFit: "contain"`** — no cropping at all, full image visible with dark background padding

### Properties cheat sheet for other book covers

| Property | What it does | Example values |
|---|---|---|
| `coverPosition` | Pans the image within the frame (which part stays visible when cropped) | `"center top"`, `"center 30%"`, `"left center"` |
| `coverFit` | `"cover"` fills frame and crops; `"contain"` shows full image with padding | `"cover"` (default), `"contain"` |

### Steps

1. In `src/data/books.ts`, remove `coverFit: "contain"` from the Kirchan entry (or replace with desired `coverPosition` value based on your preference)

### What to tell me for other covers

For any book cover, you can say things like:
- "Shift [book] cover up/down to center X%" — adjusts `coverPosition`
- "Show full cover for [book] without cropping" — sets `coverFit: "contain"`
- "Zoom into the middle of [book] cover" — uses default `coverPosition: "center center"`
