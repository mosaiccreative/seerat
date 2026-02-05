
# Plan: Complete Master Prompt Implementation

## Overview
This plan addresses all remaining items from the ONE MASTER PROMPT to achieve full compliance. The work is organized into logical phases for efficient implementation.

---

## Current Status Summary

### Completed
- 3D floating book homepage with opening animation (plays every visit)
- Design system ("The Lantern Room" aesthetic)
- Typography (Playfair Display + Crimson Pro)
- Color palette (Ink/Cream/Gold with CSS variables)
- Motion Off toggle with full accessibility support
- Skip link and keyboard navigation
- 8 books extracted with data model
- Press/Media taxonomy with editorial filtering
- Pages: Home, Books, About, Media, Contact
- About text preserved exactly

### Missing (To Be Built)

---

## Phase 1: Book Detail Pages

**New file: `src/pages/BookDetail.tsx`**

Create individual book detail pages with:
- Dynamic routing `/books/:id`
- Hero section with large cover image
- Full description, year, type, foreword credits
- Award badge if applicable
- "Back to All Works" navigation
- Related books section

**Update: `src/App.tsx`**
- Add route: `<Route path="/books/:id" element={<BookDetail />} />`

---

## Phase 2: Store + Course (Coming Soon)

**New file: `src/pages/Store.tsx`**
- "Coming Soon" placeholder with cinematic styling
- Email capture for launch notification
- Product preview cards (physical books, ebooks, bundles)
- Trust messaging placeholder

**New file: `src/pages/Course.tsx`**
- "Coming Soon" placeholder for poetry course
- Course overview section
- Tier descriptions (self-paced + cohort waitlist)
- Email capture for waitlist

**Update: `src/App.tsx`**
- Add routes: `/store` and `/course`

**Update: `src/components/layout/SiteHeader.tsx`**
- Add "Store" and "Course" to navigation

---

## Phase 3: Email Capture Component

**New file: `src/components/sections/EmailCapture.tsx`**

Reusable newsletter/waitlist signup:
- Email input with accessible label
- Submit button with loading state
- Success/error toast feedback
- Configurable headline and description
- WCAG AA compliant form

---

## Phase 4: SEO/AEO Answer Blocks

**New file: `src/components/sections/AnswerBlock.tsx`**

Semantic answer blocks for search engines:
- Stable anchor IDs for direct linking
- Schema.org structured data ready
- Clear heading hierarchy
- Cite sources with outbound links

**Add Answer Blocks to:**
- Home page (Who is Surinder Seerat?, Published Works count)
- Books page (Total works, Award-winning books)
- Media/Press page (Featured coverage)

---

## Phase 5: Policies Pages

**New file: `src/pages/Policies.tsx`**

Combined policies page with tabs or sections:
- Privacy Policy [PLACEHOLDER]
- Terms of Service [PLACEHOLDER]
- Refund Policy [PLACEHOLDER]
- Shipping Policy [PLACEHOLDER]

**Update: `src/components/layout/SiteFooter.tsx`**
- Add policy links

---

## Phase 6: Enhanced Components

**New file: `src/components/sections/FAQAccordion.tsx`**
- Accessible accordion using Radix UI
- Keyboard navigable
- For Course and Store pages

**New file: `src/components/sections/ProductCard.tsx`**
- Book product display for store
- Price, format, availability
- Add to cart placeholder

---

## Phase 7: Meta Tags Enhancement

**Update: Each page file**

Add page-specific meta tags using react-helmet-async or document.title:
- Books: "Eight Published Works by Surinder Seerat"
- About: "About Surinder Seerat - Poet, Author, Visionary"
- Media: "Press & Recordings - Surinder Seerat"
- etc.

**Update: `index.html`**
- Add JSON-LD structured data for Person schema

---

## Technical Details

### New Routes Structure
```text
/                 -> Index (3D Book Intro)
/books            -> Books (grid of all works)
/books/:id        -> BookDetail (individual book)
/store            -> Store (Coming Soon)
/course           -> Course (Coming Soon)
/about            -> About (locked text)
/media            -> Media (Press + Recordings)
/contact          -> Contact (form)
/policies         -> Policies (Privacy/Terms)
```

### Component Dependencies
```text
EmailCapture
  -> Input, Label, Button (existing)
  -> useToast (existing)

AnswerBlock
  -> Section heading with anchor
  -> Structured content
  -> Source citation link

FAQAccordion
  -> Accordion (existing Radix UI)
  -> Accessible keyboard nav
```

### Data Models Already In Place
- `Book` interface in `src/data/books.ts`
- `MediaLink` interface in `src/data/media.ts`

---

## Files to Create
1. `src/pages/BookDetail.tsx` - Individual book pages
2. `src/pages/Store.tsx` - Coming Soon store
3. `src/pages/Course.tsx` - Coming Soon course
4. `src/pages/Policies.tsx` - Legal pages
5. `src/components/sections/EmailCapture.tsx` - Newsletter/waitlist
6. `src/components/sections/AnswerBlock.tsx` - SEO answer blocks
7. `src/components/sections/FAQAccordion.tsx` - FAQ component
8. `src/components/sections/ProductCard.tsx` - Product display

## Files to Update
1. `src/App.tsx` - Add new routes
2. `src/components/layout/SiteHeader.tsx` - Add Store/Course nav
3. `src/components/layout/SiteFooter.tsx` - Add policy links
4. `src/pages/Index.tsx` - Add Answer Blocks
5. `src/pages/Books.tsx` - Add Answer Blocks
6. `index.html` - Add JSON-LD schema

---

## Accessibility Checklist
- All new forms have visible labels
- Focus states use gold accent ring
- Skip link already implemented
- Motion toggle disables all new animations
- Semantic headings (h1 > h2 > h3)
- ARIA labels on interactive elements

---

## Result
- Full sitemap implementation per master prompt
- SEO/AEO Answer Blocks on key pages
- Email capture for store/course waitlists
- Book detail pages with complete information
- Policy pages with placeholders
- All components follow existing design system
- Motion Off toggle controls all new animations
