

# Books Page Redesign Plan

## Overview

This plan covers a significant redesign of the Books page to match the vertical card layout from the reference screenshot, moves FAQ content to the Biography page, and adds a new Reading Paths section below the Literary Awards on the Books page.

---

## Changes Summary

### 1. Books Page - Vertical Card Layout

**Current state:** 4-column grid with book covers as background images and overlay text

**New state:** Vertical full-width cards with book cover on the left and details on the right (matching reference screenshot)

Each book card will include:
- Book cover image (left side, approximately 1/3 width)
- Right side content:
  - Year badge (gold)
  - Book title (large heading)
  - Type/form (e.g., "Punjabi Ghazals", "Free Verse Poems")
  - Foreword attribution (if applicable)
  - Full description text
  - Award badge (if applicable)
  - "Read More" link to `/books/{id}`

The entire card remains clickable, preserving the existing navigation to individual book pages with their own URLs.

### 2. Move FAQ to Biography Page

**Remove from Books page:**
- The AnswerBlock section containing "How many books has Surinder Seerat published?"

**Update on Biography page:**
- The FAQ already contains a similar question ("How many books has Surinder Seerat written?")
- Will enhance this existing entry with the additional context from the Books page answer (mentioning the 34-year span and institutional awards)

### 3. Remove Tab Navigation

Since the Reading Paths section will now appear below the awards (not as a tabbed view), the tab navigation ("THE COMPLETE COLLECTION" / "RECOMMENDED READING PATHS") will be removed. The page will flow:
1. Hero section
2. Books collection (vertical cards)
3. Tishnagi album CTA section
4. Literary Awards (tightened with animation)
5. Recommended Reading Paths (new section)
6. For Libraries & Scholars section
7. Newsletter section
8. Final CTA

### 4. Tighten Literary Awards Section + Add Animation

**Current state:** 4-column grid with moderate spacing
**New state:**
- Reduce vertical padding (py-24 to py-16)
- Reduce bottom margin
- Add staggered scale + fade animation on scroll for visual interest
- Add hover effect (subtle border glow)

### 5. Add Recommended Reading Paths Section

New section placed directly below Literary Awards with this content structure:

```text
Recommended Reading Paths
Four approaches to discovering the collection

Path 1: Award-Winning Introduction
Let award-winning work prove the quality. Three different forms showcase his range.
- Kirchan (1990)
- Aroope Akhran da Aks (2014)
- Chhallan (1980)

Path 2: Thematic Journey Through Longing
For those drawn to themes of longing, meaning, and the human journey toward what remains forever incomplete.
- Listen: Tishnagi album
- Surat Seerat Te Saraab (2007)
- Saij Sullee Te Saleeb (2007)

Path 3: The Immigrant Voice
Poetry exploring displacement, roots, and building new ground.
- Kikkar Kande (1992)
- Saij Sullee Te Saleeb (2007)
- Aroope Akhran da Aks (2014)

Path 4: Technical Mastery
Watch a poet master multiple forms across 34 years. Perfect for students of poetry craft.
- Chhallan (1980) - Free verse
- Kirchan (1990) - Pure ghazal
- Aroope Akhran da Aks (2014) - Mixed
```

Layout: 2x2 grid on desktop, stacked on mobile. Each path card will have an icon, title, description, and numbered book list.

---

## Technical Implementation

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Books.tsx` | Major refactor: new vertical card layout, remove FAQ section, remove tabs, update reading paths layout, tighten awards section |
| `src/pages/About.tsx` | Enhance existing FAQ entry with additional book details |

### New Components (Optional)

A `BookCardVertical` component could be extracted for reusability, but will assess whether inline implementation is cleaner.

### Animations

1. **Literary Awards Cards:**
   - Initial: `opacity: 0, scale: 0.95`
   - Animate: `opacity: 1, scale: 1`
   - Stagger delay: 0.1s per card
   - Hover: subtle gold border glow

2. **Vertical Book Cards:**
   - Existing motion patterns will be adapted
   - Slide-in from left on scroll

3. **Reading Paths:**
   - Staggered fade-in matching existing patterns

### Preserved Functionality

- All book cards link to `/books/{book.id}` (individual book pages)
- Enhanced book data (subtitles, "who it's for") preserved in tooltips/hover states where appropriate
- Responsive design maintained (stacked layout on mobile)

---

## Visual Reference Mapping

Based on the uploaded screenshot:

```text
+------------------------------------------+
|  [Book Cover]  |  YEAR                   |
|     IMAGE      |  Book Title             |
|   (aspect      |  Type • Foreword by     |
|    3:4)        |  Description...         |
|                |  [Award badge if any]   |
|                |          [Read More ->] |
+------------------------------------------+
```

The burgundy/cream color scheme will be maintained with the existing dark noir theme colors.

