
# Move Year from Title to Badge

## Overview
Move the publication year from being inline with the book title (e.g., "Kirchan (1990)") to a small badge in the metadata row, positioned alongside the form badge (e.g., "Pure ghazal").

## Design Decision
Use a **neutral/subtle badge style** matching the form badge rather than the gold `YearBadgeGold` component. This keeps visual hierarchy intact:
- **Neutral badges**: Year, Form (factual metadata)
- **Gold badges**: Awards, Start Here (highlights/calls-to-action)

## Visual Result

```text
Before:
┌─────────────────────────────────────────────┐
│  [Pure ghazal]  [Award badge]               │
│  Kirchan (1990)                             │
│  Splinters: Pure Ghazal Form                │
└─────────────────────────────────────────────┘

After:
┌─────────────────────────────────────────────┐
│  [1990]  [Pure ghazal]  [Award badge]       │
│  Kirchan                                    │
│  Splinters: Pure Ghazal Form                │
└─────────────────────────────────────────────┘
```

## Technical Changes

### File: `src/components/bookshelf/BookListCard.tsx`

1. **Add year badge as first item in the badges row** (around line 86-92):
   - Insert a new span before the form badge
   - Style: `px-3 py-1 text-xs font-ui tracking-wide border border-border/50 text-muted-foreground` (matching form badge)

2. **Remove year from title** (line 111-112):
   - Change `{title} ({year})` to just `{title}`

### Summary of Edits
- Add 4 lines for year badge in the badges row
- Modify 1 line to remove `({year})` from the title
