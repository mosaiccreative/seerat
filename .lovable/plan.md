

## Books Page Redesign: Hybrid Bookshelf + Vertical Card Layout

### Overview

You want to combine the best of both worlds:
1. **Keep the interactive bookshelf** but reduce it to a single row with book cover graphics imprinted on the spines
2. **Restore the vertical card layout** from the screenshot below the shelf - book covers on the left (3:4 ratio), detailed content on the right

This creates a visual "gallery entrance" (the shelf) followed by a detailed "catalog" (the cards) - art-first while maintaining readability.

---

### Design Approach

```text
┌─────────────────────────────────────────────────────┐
│                    HERO SECTION                     │
│   "Eight Books, 34 Years, Four Major Awards"       │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│              SINGLE-ROW BOOKSHELF                   │
│   ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐        │
│   │░░│ │░░│ │░░│ │░░│ │░░│ │░░│ │░░│ │░░│        │
│   │░░│ │░░│ │░░│ │░░│ │░░│ │░░│ │░░│ │░░│        │
│   │▓▓│ │▓▓│ │▓▓│ │▓▓│ │▓▓│ │▓▓│ │▓▓│ │▓▓│        │
│   └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ └──┘        │
│   ════════════════════════════════════════         │
│            (wood shelf base + divider)             │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│              VERTICAL BOOK CARDS                    │
│                                                     │
│   ┌─────────┐  Chhallan (1980)                     │
│   │ COVER   │  Free Verse Poems                    │
│   │ IMAGE   │  Foreword by Dr. Kulbir Singh Kaang  │
│   │  (3:4)  │  ───────────────────────             │
│   │         │  "Surinder's debut—raw, unflinching  │
│   │         │  exploration of what it means to     │
│   └─────────┘  wrestle with existence itself..."   │
│                ★ Best Punjabi Book — JKAACL 1982   │
│                                                     │
│   (repeat for each book, oldest to newest)         │
└─────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────┐
│       LITERARY AWARDS + READING PATHS + CTA         │
│            (existing sections remain)               │
└─────────────────────────────────────────────────────┘
```

---

### Implementation Steps

#### 1. Enhance `BookSpine` Component
- Add cover image as a background/overlay on the spine face
- Use `object-cover` with reduced opacity or a gradient overlay so the title remains readable
- Apply subtle vignette/edge darkening for depth
- Keep all existing accessibility features (keyboard nav, ARIA labels)

#### 2. Modify `BookshelfStage` Component  
- Remove the multi-shelf loop - display all 8 books in a single horizontal row
- For mobile: make the shelf horizontally scrollable (rail-style)
- Remove the OpenBookPanel integration (clicking spines can scroll to the card below, or do nothing)

#### 3. Create New `BookListCard` Component
A horizontal card for the vertical list:
- Left side: 3:4 aspect ratio cover image (or typographic fallback)
- Right side: 
  - Gold year badge
  - Title (large display heading)
  - Type/form (e.g., "Free Verse Poems")
  - Foreword attribution (if present)
  - Extended description
  - Award badge (if present)
  - "Read More" link to `/books/{id}`
- "Start Here" indicator for Kirchan and Aroope Akhran da Aks

#### 4. Update `Books.tsx` Page
- Keep the hero section
- Replace multi-row bookshelf with single-row `BookshelfStage`
- Add new vertical book cards section using `BookListCard`
- Keep Literary Awards, Reading Paths, and CTA sections

---

### Technical Details

**BookSpine cover imprint approach:**
```tsx
// Inside BookSpine component
<div className="absolute inset-0 overflow-hidden">
  {coverImage && (
    <img 
      src={coverImage}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover opacity-60"
      style={{ objectPosition: 'center top' }}
    />
  )}
  {/* Gradient overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
  {/* Title text on top */}
</div>
```

**BookListCard structure:**
```tsx
<article className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 py-12 border-b border-border/30">
  {/* Cover */}
  <div className="aspect-[3/4] bg-muted overflow-hidden">
    <img src={coverImage} className="w-full h-full object-cover" />
  </div>
  
  {/* Details */}
  <div className="max-w-[65ch]">
    <YearBadgeGold year={year} />
    <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
    <p className="text-muted-foreground text-sm">{type}</p>
    {foreword && <p className="italic">Foreword by {foreword}</p>}
    <p className="leading-relaxed">{description}</p>
    {award && <AwardBadge award={award} />}
    <ReadMoreLink to={`/books/${id}`} />
  </div>
</article>
```

**Single-row shelf (mobile scrollable):**
```tsx
<div className="overflow-x-auto scrollbar-hide">
  <div className="flex gap-3 min-w-max justify-center">
    {books.map(book => <BookSpine ... />)}
  </div>
</div>
```

---

### Files to Modify/Create

| File | Action |
|------|--------|
| `src/components/bookshelf/BookSpine.tsx` | Modify - add cover image overlay |
| `src/components/bookshelf/BookshelfStage.tsx` | Modify - single row, remove panel integration |
| `src/components/bookshelf/BookListCard.tsx` | Create - new vertical card component |
| `src/pages/Books.tsx` | Modify - add vertical cards section |

---

### Accessibility Preserved

- Keyboard navigation on bookshelf spines
- Focus rings and ARIA labels
- `prefers-reduced-motion` support
- Semantic HTML structure (articles, headings)
- Strong color contrast (gold on dark backgrounds)

---

### Motion Behavior

- **Bookshelf**: Staggered fade-in entrance, subtle hover lift
- **Vertical cards**: Scroll-triggered fade-in with stagger
- **Motion Off**: All animations disabled, instant rendering

