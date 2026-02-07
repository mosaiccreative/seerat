

# Full-Bleed Bookshelf Hero with Split Editorial Layout

## Concept

Transform the hero into a single, full-viewport black section where the bookshelf is the visual centerpiece, with text arranged in an asymmetric editorial split layout. The subtitle ("Exploring consciousness...") reveals on scroll or user interaction, keeping the initial view ultra-minimal and dramatic.

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                         BLACK FULL-BLEED (100vh)                         │
│                                                                          │
│  ┌────────────────────────────┐   ┌───────────────────────────────────┐  │
│  │                            │   │                                   │  │
│  │      THE                   │   │                                   │  │
│  │      PHYSICIST.            │   │                                   │  │
│  │      THE SUFI.             │   │                                   │  │
│  │      THE POET.             │   │    ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐  │  │
│  │                            │   │    │  │ │  │ │  │ │  │ │  │ │  │  │  │
│  │     ────◇────              │   │    │  │ │  │ │  │ │  │ │  │ │  │  │  │
│  │                            │   │    │  │ │  │ │  │ │  │ │  │ │  │ ◄│  │
│  │  Award-Winning Punjabi     │   │    │  │ │  │ │  │ │  │ │  │ │  │  │  │
│  │  Ghazal Writer             │   │    │  │ │  │ │  │ │  │ │  │ │  │  │  │
│  │                            │   │    └──┴─┴──┴─┴──┴─┴──┴─┴──┴─┴──┘  │  │
│  │  Poet · Novelist · Critic  │   │    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │  │
│  │                            │   │           (shelf base)            │  │
│  └────────────────────────────┘   └───────────────────────────────────┘  │
│                                                                          │
│                              SCROLL                                      │
│                                │                                         │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                    (REVEALED ON SCROLL - subtle fade-in)                  │
│                                                                          │
│         Exploring consciousness, longing, and the immigrant              │
│            experience through the ancient art of the ghazal              │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Key Design Decisions

| Element | Approach |
|---------|----------|
| Background | Full-bleed black (`bg-background`) for entire hero |
| Layout | CSS Grid: 2-column split on desktop, stacked on mobile |
| Left column | Text content, left-aligned for editorial feel |
| Right column | Bookshelf, vertically centered |
| Headline | "The Physicist. The Sufi. The Poet." — stacked lines for drama |
| Subtitle reveal | Hidden initially, fades in after scroll cue or on scroll via Intersection Observer |
| Mobile | Stacked layout (text above, bookshelf below), full-width |

---

## Technical Implementation

### File: `src/components/sections/home/HeroSection.tsx`

**Structure Changes:**
- Single full-viewport section with `min-h-screen bg-background`
- CSS Grid container: `grid-cols-1 lg:grid-cols-2`
- Left column: all text content (headline, badges, divider)
- Right column: `BookshelfStage` component
- Scroll cue positioned at bottom center
- Subtitle lives in a new hidden-by-default element that uses `useInView` or scroll trigger

**Headline Rework:**
```tsx
<h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-left">
  The Physicist.<br />
  The Sufi.<br />
  The <span className="text-gold italic">Poet</span>.
</h1>
```

**Subtitle Reveal:**
- Use `react-intersection-observer` (already installed) to detect when ScrollCue enters viewport
- Alternatively, reveal after a 3-second delay or on first scroll
- Subtitle appears at the bottom of the section with a fade-up animation

**Responsive Behavior:**
- Mobile (`< lg`): Text stacked above bookshelf, both centered
- Desktop (`lg+`): Side-by-side split layout

---

## Summary of Changes

| Aspect | Before | After |
|--------|--------|-------|
| Structure | Two separate sections (black + maroon) | Single full-bleed black section |
| Layout | Stacked (bookshelf above text) | Split left/right on desktop |
| Headline | "The Physicist Who Became a Poet" | "The Physicist. The Sufi. The Poet." (stacked) |
| Subtitle | Always visible | Hidden initially, revealed on scroll |
| Maroon section | Contained text | Removed entirely |
| Mobile | Stacked zones | Text above, bookshelf below (same section) |

