# SoundCloud Link & Placeholder Fixes Report
**Date:** 2026-02-21
**Status:** Completed

---

## 1. SoundCloud Link Fix

**Issue:** The SoundCloud URL `soundcloud.com/surinder-seerat` (with hyphen) was returning 404.
**Correct URL:** `soundcloud.com/surinderseerat` (no hyphen)

### Files Updated

| File | Line | Change |
|------|------|--------|
| `data/structured-data.ts` | 19 | `surinder-seerat` → `surinderseerat` |
| `components/pages/MediaPageContent.tsx` | 121 | `surinder-seerat` → `surinderseerat` |

### Already Correct (no changes needed)

| File | Line | URL |
|------|------|-----|
| `components/layout/SiteFooter.tsx` | 14 | `soundcloud.com/surinderseerat` ✓ |
| `components/pages/TishnagiPageContent.tsx` | 75 | `soundcloud.com/surinderseerat` ✓ |

---

## 2. Store Page Placeholder Cleanup

**File:** `components/pages/StorePageContent.tsx`

### Before (lines 139-146)
```tsx
{/* Trust */}
<section className="py-16 px-6 md:px-12 border-t border-border/30">
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-muted-foreground text-sm">
      [PLACEHOLDER: Trust badges, secure checkout, shipping info]
    </p>
  </div>
</section>
```

### After
```tsx
{/* Trust & Info */}
<section className="py-16 px-6 md:px-12 border-t border-border/30">
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-muted-foreground text-sm leading-relaxed">
      Our collection of books, ebooks, and audiobooks is being curated for you.
      Join the waitlist above to be the first to know when the store opens —
      plus get exclusive early access and launch-day offers.
    </p>
  </div>
</section>
```

---

## 3. Course Page Placeholder Cleanup

**File:** `components/pages/CoursePageContent.tsx`

### Self-Paced Option (line 192)

**Before:**
```tsx
<p className="font-display text-2xl mb-6">[PLACEHOLDER PRICE]</p>
<Button variant="outline" ...>Learn More</Button>
```

**After:**
```tsx
<p className="font-display text-xl text-muted-foreground mb-6">Pricing announced at launch</p>
<Button variant="outline" ... disabled>Coming Soon</Button>
```

### Cohort Option (line 229)

**Before:**
```tsx
<p className="font-display text-2xl mb-6">[PLACEHOLDER PRICE]</p>
<Button ...>Learn More</Button>
```

**After:**
```tsx
<p className="font-display text-xl text-muted-foreground mb-6">Pricing announced at launch</p>
<Button ... disabled>Coming Soon</Button>
```

---

## 4. ProductCard Default Price

**File:** `components/sections/ProductCard.tsx`

### Before (line 20)
```tsx
price = '[PLACEHOLDER]',
```

### After
```tsx
price = 'Coming Soon',
```

---

## Summary

| Category | Files Changed | Changes Made |
|----------|---------------|--------------|
| SoundCloud links | 2 | Fixed broken URL (404 → 200) |
| Store placeholders | 1 | Replaced placeholder with polished copy |
| Course placeholders | 1 | Replaced `[PLACEHOLDER PRICE]` × 2, disabled buttons |
| ProductCard default | 1 | Changed default price text |

**Total files modified:** 5

---

## IndexNow Notification

Submitted 10 URLs to search engines:
- Response: **200 OK**
- Engines notified: Bing, DuckDuckGo, Yandex, and others

---

## Verification

```bash
# Confirm no more placeholder text in source
grep -r "PLACEHOLDER" --include="*.tsx" next-app/components
# Result: No matches (clean)

# Confirm SoundCloud links are correct
grep -r "soundcloud.com/surinder" --include="*.tsx" next-app/
# All should show: soundcloud.com/surinderseerat
```
