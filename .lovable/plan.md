

## Consistent "Back to Books" Scroll Behavior

**The Problem:** When you're on a book detail page (e.g., `/books/kirchan`) and click "Back to All Works," you're taken to the top of the `/books` page. But when you use the browser's Back button, the browser tries to restore your previous scroll position. You want both to behave the same way -- returning you to where that book was on the page.

**The Solution:** Two changes:

1. **Replace the "Back to All Works" link with browser-style back navigation** -- instead of navigating forward to `/books`, it will use `navigate(-1)` (equivalent to the browser back button), so the browser restores your scroll position automatically.

2. **Update ScrollToTop to skip back/forward navigation** -- currently it forces scroll-to-top on every route change, even browser back/forward. We'll detect navigation type and only scroll to top on new navigations (clicking links to new pages), not when going back.

---

### Technical Details

**File 1: `src/components/ScrollToTop.tsx`**
- Use `useNavigationType()` from react-router-dom to detect if the navigation is a `PUSH` (new link click) vs `POP` (back/forward button).
- Only call `window.scrollTo(0, 0)` on `PUSH` navigations, letting the browser handle scroll restoration on `POP`.

**File 2: `src/pages/BookDetail.tsx`**
- Replace the `<Link to="/books">` "Back to All Works" with a `<button>` that calls `navigate(-1)`.
- Add a fallback: if there's no history to go back to (user landed directly on the book page), fall back to navigating to `/books`.

These are small, focused changes that won't affect any other page's behavior -- new page visits still scroll to top as expected.

