# Surinder Seerat — Project Inventory

**Last Updated:** February 7, 2026  
**Live URL:** https://seerat.lovable.app  
**Preview URL:** https://id-preview--2aefbcdc-5641-40aa-9fd2-b4da983d55dc.lovable.app

---

## PAGES & ROUTES

### 1. Homepage (Index)
- **Path:** `/`
- **Status:** ✅ Complete
- **Key Sections:**
  - Interactive 3D Book Cover (intro animation, sessionStorage-based "play once per session")
  - HeroSection — Asymmetric split layout with bookshelf
  - StatsSection — Numerical highlights
  - RareCombinationSection — Three thematic cards (Physics, Kashmir, Tradition)
  - DifferenceSection — Value proposition
  - BooksSection — Gallery grid of 8 books
  - AudienceSection — Target audience messaging
  - PoetSection — Poet introduction
  - QuoteSection — Featured quote
  - NewsletterSection — Email capture form
- **Assets Used:** `leather-book.png`, book cover images from external URLs

### 2. Biography (About)
- **Path:** `/about`
- **Status:** ✅ Complete
- **Key Sections:**
  - Hero — "From Physics to Poetry"
  - Portrait Section — `poet-portrait.jpg` with grayscale-to-color hover effect
  - The Beginning — Kashmir 1947
  - The Scholar — Education & Academic Career (1966-1987)
  - The Parallel Life — Literary Voice (1968-1987)
  - The Immigrant — California journey
  - The Builder — Literary Leadership (1992-2002)
  - Recognition Across Continents — Award grid
  - Scientist Meets Mystic — Unique perspective section
  - VerticalTimeline — Milestones from 1947-2015
  - FAQ Accordion — 5 comprehensive Q&A items
- **Assets Used:** `poet-portrait.jpg`

### 3. Books (Collection)
- **Path:** `/books`
- **Status:** ✅ Complete
- **Key Sections:**
  - Hero — "Eight Books, 34 Years, Four Major Awards"
  - Interactive Bookshelf Stage — Single-row, horizontal scrollable shelf
  - Catalog Cards — Detailed book cards with metadata
  - Literary Awards Grid
  - Reading Paths — 4 curated journey recommendations
  - CTA — Link to Tishnagi album
- **Assets Used:** External book cover images from `surinderseerat.com`

### 4. Book Detail (Dynamic)
- **Path:** `/books/:id`
- **Status:** ✅ Complete
- **Key Sections:**
  - Back navigation
  - Book cover with award badge (if applicable)
  - Book metadata (year, type, description, foreword, award)
  - Related books grid
  - CTA to Store
- **Supported IDs:** `chhallan`, `khalaw-ch-tangey-harf`, `bharam-bhullayan`, `kirchan`, `kikkar-kande`, `surat-seerat-te-saraab`, `saij-sullee-te-saleeb`, `aroope-akhran-da-aks`

### 5. Tishnagi (Album)
- **Path:** `/tishnagi`
- **Status:** ✅ Complete
- **Key Sections:**
  - Hero — Album title with Punjabi/Hindi script
  - Streaming buttons — YouTube & SoundCloud (pill-shaped with glow effects)
  - Album description — "Ghazals Were Meant to Be Sung"
  - Album cover — `tishnagi-cover.jpg` with grayscale-to-color hover
  - Theme of Longing — Burgundy contrast section
  - Understanding Tishnagi — Theme cards + AnswerBlock
  - CTA — Links to Books and Course
- **Assets Used:** `tishnagi-cover.jpg`

### 6. Ghazal History (Educational)
- **Path:** `/ghazal-history`
- **Status:** ✅ Complete
- **Key Sections:**
  - Hero — "The Ghazal: From Bollywood's Foundation to Modern Renaissance"
  - What is a Ghazal — Technical form + universal themes
  - Bollywood's Foundation — Historical context
  - Poet-Lyricist Legacy — Gulzar, Javed Akhtar, Irshad Kamil profiles
  - 2025 Lyricists Rise — Industry news section
  - Surinder's Place in Tradition — 4-point grid
  - For Creative Professionals — Collaboration CTA with Bollywood precedent card
  - AnswerBlocks — SEO-optimized Q&A
- **Assets Used:** None (text-focused)

### 7. Contact
- **Path:** `/contact`
- **Status:** ✅ Complete
- **Key Sections:**
  - Hero — "Arz Kiya Hai" / "Get in Touch"
  - Contact form
  - Direct email link — `arz@surinderseerat.com`
- **Assets Used:** None

### 8. Store
- **Path:** `/store`
- **Status:** 🟡 Placeholder / Coming Soon
- **Key Sections:**
  - Hero with "Coming Soon" badge
  - Email capture for launch notification
  - Product preview — First 4 books
  - Format options — Physical, Digital, Signed Bundles
  - Trust section — `[PLACEHOLDER: Trust badges, secure checkout, shipping info]`
- **Assets Used:** External book cover images

### 9. Course
- **Path:** `/course`
- **Status:** 🟡 Placeholder / Coming Soon
- **Key Sections:**
  - Hero with "Coming Soon" badge
  - Waitlist email capture
  - The Journey — Module outlines (Ghazal Form, Free-Verse)
  - Choose Your Path — Self-Paced vs Cohort Experience
  - FAQ Accordion — 4 questions
  - Final CTA — Waitlist signup
- **Assets Used:** None
- **Placeholders:** `[PLACEHOLDER PRICE]` on both path options

### 10. Policies
- **Path:** `/policies`
- **Status:** 🔴 Incomplete (All content is placeholder)
- **Key Sections:**
  - Tabbed interface (Privacy, Terms, Refunds, Shipping)
  - All tabs contain `[PLACEHOLDER]` text

### 11. Media
- **Path:** `/media`
- **Status:** ✅ Complete
- **Key Sections:**
  - Hero — "In the Media"
  - Press Mentions — List of verified editorial coverage
  - Recordings & Appearances — YouTube and SoundCloud links
- **External Links:**
  - Tribune India
  - Greater Kashmir
  - Daily Excelsior
  - Hindustan Times
  - Apna.org

### 12. Not Found (404)
- **Path:** `/*`
- **Status:** ✅ Complete
- **File:** `src/pages/NotFound.tsx`

---

## FORMS

### 1. Contact Form
- **Location:** `/contact` page
- **Fields:**
  | Field | Type | Required | Validation |
  |-------|------|----------|------------|
  | Name | text | Yes | HTML required |
  | Email | email | Yes | HTML required + type="email" |
  | Subject | text | Yes | HTML required |
  | Message | textarea | Yes | HTML required |
- **Submit Action:** Currently simulated (1s delay, no actual POST)
- **Success Handling:** Toast notification "Message sent"
- **Error Handling:** None beyond HTML validation

### 2. Newsletter/Email Capture (Multiple Instances)
- **Locations:**
  - Homepage (NewsletterSection) — variant: `homepage`
  - Store page — variant: `default` with custom headline
  - Course page — variant: `default` with custom headline (appears 3 times)
- **Fields:**
  | Field | Type | Required | Validation |
  |-------|------|----------|------------|
  | Email | email | Yes | Client-side check for `@` symbol |
- **Submit Action:** Currently simulated (1s delay, no actual POST to backend)
- **Success Handling:** 
  - Component transforms to success state with checkmark
  - Toast notification "Welcome to the Mehfil!"
- **Error Handling:** 
  - Inline error message "Please enter a valid email address."
  - Destructive toast variant

---

## COMPONENTS

### Layout Components
| Component | Location | Purpose | Props |
|-----------|----------|---------|-------|
| `PageLayout` | `src/components/layout/PageLayout.tsx` | Wraps all pages with header, footer, skip link | `children` |
| `SiteHeader` | `src/components/layout/SiteHeader.tsx` | Fixed navigation with mobile menu | None |
| `SiteFooter` | `src/components/layout/SiteFooter.tsx` | Footer with links, copyright, motion toggle | None |

### Animation Components
| Component | Location | Purpose |
|-----------|----------|---------|
| `CinematicReveal` | `src/components/animations/CinematicReveal.tsx` | Scroll-triggered fade-in reveal |
| `ParallaxSection` | `src/components/animations/ParallaxSection.tsx` | Parallax scrolling effect |
| `ScrollFadeIn` | `src/components/animations/ScrollFadeIn.tsx` | Fade-in on scroll |
| `StaggerReveal` | `src/components/animations/StaggerReveal.tsx` | Staggered children reveal |
| `StaggeredList` | `src/components/animations/StaggeredList.tsx` | List item stagger animation |
| `TextReveal` | `src/components/animations/TextReveal.tsx` | Text reveal animation |

### Bookshelf Components
| Component | Location | Purpose |
|-----------|----------|---------|
| `BookshelfStage` | `src/components/bookshelf/BookshelfStage.tsx` | Interactive bookshelf container |
| `BookSpine` | `src/components/bookshelf/BookSpine.tsx` | Individual book spine on shelf |
| `BookListCard` | `src/components/bookshelf/BookListCard.tsx` | Detailed book catalog card |
| `OpenBookPanel` | `src/components/bookshelf/OpenBookPanel.tsx` | Expanded book details panel |
| `AwardBadge` | `src/components/bookshelf/AwardBadge.tsx` | Award indicator badge |
| `YearBadgeGold` | `src/components/bookshelf/YearBadgeGold.tsx` | Year badge styling |
| `ShelfDividerMotif` | `src/components/bookshelf/ShelfDividerMotif.tsx` | Decorative shelf divider |
| `ReadMoreLink` | `src/components/bookshelf/ReadMoreLink.tsx` | "Read more" link styling |

### Section Components
| Component | Location | Purpose |
|-----------|----------|---------|
| `EmailCapture` | `src/components/sections/EmailCapture.tsx` | Newsletter signup form with variants |
| `FAQAccordion` | `src/components/sections/FAQAccordion.tsx` | Expandable FAQ list |
| `AnswerBlock` | `src/components/sections/AnswerBlock.tsx` | Standalone Q&A block for SEO |
| `SectionHeading` | `src/components/sections/SectionHeading.tsx` | Consistent section titles |
| `QuoteBlock` | `src/components/sections/QuoteBlock.tsx` | Styled quote display |
| `StatsSection` | `src/components/sections/StatsSection.tsx` | Numerical stats display |
| `ProductCard` | `src/components/sections/ProductCard.tsx` | Store product card |
| `BookCard` | `src/components/sections/BookCard.tsx` | Simple book card |
| `MediaItem` | `src/components/sections/MediaItem.tsx` | Media/press item display |
| `VerticalTimeline` | `src/components/sections/about/VerticalTimeline.tsx` | Centered timeline for milestones |

### Homepage Sections
| Component | Location |
|-----------|----------|
| `HeroSection` | `src/components/sections/home/HeroSection.tsx` |
| `BooksSection` | `src/components/sections/home/BooksSection.tsx` |
| `AudienceSection` | `src/components/sections/home/AudienceSection.tsx` |
| `DifferenceSection` | `src/components/sections/home/DifferenceSection.tsx` |
| `NewsletterSection` | `src/components/sections/home/NewsletterSection.tsx` |
| `PoetSection` | `src/components/sections/home/PoetSection.tsx` |
| `QuoteSection` | `src/components/sections/home/QuoteSection.tsx` |
| `RareCombinationSection` | `src/components/sections/home/RareCombinationSection.tsx` |

### UI Components (shadcn/ui based)
Full shadcn component library installed, including:
- Accordion, Alert, Avatar, Badge, Button, Card, Carousel, Checkbox, Dialog, Dropdown, Form, Input, Label, Navigation Menu, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toast, Toggle, Tooltip

### Custom UI Components
| Component | Location | Purpose |
|-----------|----------|---------|
| `MotionToggle` | `src/components/ui/motion-toggle.tsx` | Reduced motion preference toggle |
| `DecorativeDivider` | `src/components/ui/decorative-divider.tsx` | Styled section dividers |
| `ScrollCue` | `src/components/ui/scroll-cue.tsx` | Scroll down indicator |
| `SkipLink` | `src/components/ui/skip-link.tsx` | Accessibility skip navigation |

### Special Components
| Component | Location | Purpose |
|-----------|----------|---------|
| `BookCover` | `src/components/BookCover.tsx` | 3D animated book intro on homepage |
| `NavLink` | `src/components/NavLink.tsx` | Navigation link styling |
| `ScrollToTop` | `src/components/ScrollToTop.tsx` | Route change scroll reset |

---

## NAVIGATION & LAYOUT

### Header Structure
- **Brand:** "Seerat" (links to `/`)
- **Desktop Navigation:**
  | Label | Path |
  |-------|------|
  | Home | `/` |
  | Biography | `/about` |
  | Books | `/books` |
  | Tishnagi | `/tishnagi` |
  | Ghazal History | `/ghazal-history` |
  | Connect | `/contact` |
  - Motion Toggle (reduced motion accessibility)
- **Mobile Navigation:** Hamburger menu with full-screen overlay

### Footer Structure
- **Brand Section:** "Surinder Singh Seerat" with tagline and easter egg quote
- **Explore Links:** Biography, Books, Tishnagi Album, Ghazal History
- **Connect Links:** Contact, Instagram, YouTube, SoundCloud (external)
- **Bottom Bar:** Copyright, Motion Toggle, Policies link

### Shared Layout
- `PageLayout` wrapper: SkipLink → SiteHeader → Main Content → SiteFooter
- Main content has `pt-16` padding for fixed header clearance

---

## STYLING & DESIGN

### Color Palette (HSL Values)
| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | 240 10% 4% | Page background (near-black) |
| `--foreground` | 40 30% 95% | Primary text (cream) |
| `--card` | 240 10% 6% | Card backgrounds |
| `--primary` | 40 30% 95% | Primary buttons |
| `--secondary` | 240 8% 12% | Secondary elements |
| `--muted` | 240 8% 15% | Muted backgrounds |
| `--muted-foreground` | 40 20% 65% | Secondary text |
| `--accent` | 38 75% 55% | Accent (gold) |
| `--gold` | 38 75% 55% | Gold accents, CTAs, highlights |
| `--burgundy` | 345 45% 22% | Section backgrounds |
| `--burgundy-dark` | 345 50% 15% | Darker burgundy |
| `--burgundy-light` | 345 40% 30% | Lighter burgundy |
| `--cream` | 40 30% 95% | Light backgrounds |
| `--ink` | 345 45% 15% | Dark text on light |

### Typography
| Role | Font | Usage |
|------|------|-------|
| Display | Playfair Display | Headlines, titles |
| Body | Crimson Pro | Prose, poetry, descriptions |
| UI | Inter | Navigation, buttons, labels |

### Typography Sizes
- `h1`: `text-5xl md:text-7xl lg:text-8xl`
- `h2`: `text-3xl md:text-5xl lg:text-6xl`
- `h3`: `text-2xl md:text-3xl`
- Body: `line-height: 1.8`

### Responsive Breakpoints
- **Mobile:** Default (< 768px)
- **Tablet (md):** 768px+
- **Desktop (lg):** 1024px+
- **Large Desktop (xl):** 1280px+
- **Container max:** 1400px

### Animation/Motion
| Token | Value | Usage |
|-------|-------|-------|
| `--duration-page` | 1.8s | Page transitions |
| `--duration-slow` | 1.4s | Major reveals |
| `--duration-medium` | 0.7s | Standard transitions |
| `--duration-fast` | 0.3s | Quick interactions |
| `--ease-page` | `cubic-bezier(0.4, 0, 0.2, 1)` | Page easing |
| `--ease-dramatic` | `cubic-bezier(0.16, 1, 0.3, 1)` | Dramatic reveals |

### Motion Preference
- Reduced motion toggle in header/footer
- `useMotionPreference` hook for conditional animation
- `.motion-reduced` class forces instant transitions

### Key CSS Classes
- `.btn-gold` — Gold-bordered button with hover fill
- `.btn-minimal` — Text-only minimal button
- `.chapter-label` — Section label styling
- `.line-gold` — Gold horizontal divider
- `.quote-block` — Styled quote with decorative quote mark
- `.nav-link` — Navigation link styling
- `.page-section` — Full-height centered section
- `.hover-lift` — Lift effect on hover
- `.hover-glow` — Glow effect on hover

---

## INTEGRATIONS & EXTERNAL SERVICES

### Backend (Lovable Cloud)
- **Status:** Connected but no tables created
- **Database Tables:** None (empty public schema)
- **Edge Functions:** None deployed
- **Auth:** Not configured

### External Links
| Service | URL | Usage |
|---------|-----|-------|
| YouTube | `https://www.youtube.com/@SurinderSinghSeerat` | Tishnagi, Media page |
| SoundCloud | `https://soundcloud.com/surinderseerat` | Tishnagi, Media page |
| Instagram | `https://www.instagram.com/surinderseerat` | Footer |

### API Endpoints
- **None currently** — All forms use simulated delays, no actual backend calls

### Environment Variables
| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon key |
| `VITE_SUPABASE_PROJECT_ID` | Project identifier |

---

## ASSETS & MEDIA

### Local Assets (`src/assets/`)
| Filename | Type | Usage |
|----------|------|-------|
| `leather-book.png` | PNG | Homepage 3D book cover intro |
| `poet-portrait.jpg` | JPG | About page portrait |
| `tishnagi-cover.jpg` | JPG | Tishnagi album page |
| `hero-landscape.jpg` | JPG | (Available but may not be in use) |
| `book-cover.jpg` | JPG | (Available but may not be in use) |
| `book-pages.jpg` | JPG | (Available but may not be in use) |
| `paper-texture.jpg` | JPG | (Available but may not be in use) |
| `seerat-book.png` | PNG | (Available but may not be in use) |

### External Book Cover Images
All 8 book covers are loaded from `https://www.surinderseerat.com/wp-content/uploads/2015/08/`:
- `Chhallan.jpeg`
- `Khalavich-Tangey-Harf.jpeg`
- `Bharam-Bullyan.jpeg`
- `Kirchan.jpeg`
- `Kikkar-Kande.jpeg`
- `Surat-Seerat-Te-Saraab.jpeg`
- `Saij-Sullee-Te-Saleeb.jpeg`
- `Aroope-Akhran-da-Aks.jpeg`

---

## CONTENT & COPY

### Key Messaging
- **Tagline:** "Award-winning Punjabi ghazal master exploring consciousness, longing, and the immigrant experience through poetry."
- **Primary CTA:** "Open the book" (homepage intro)
- **Newsletter CTA:** "Join the Mehfil"
- **Store CTA:** "Be First to Know"
- **Course CTA:** "Join the Waitlist"

### Book Metadata (src/data/books.ts)
8 books with complete data:
- Title, year, type, description
- Optional: award, foreword, coverImage

### Media Links (src/data/media.ts)
8 press links with editorial verification flags

### Easter Egg Quote
Footer: *"A word's definition is trapped within the word itself."*

### Placeholder Text Needing Replacement
| Location | Placeholder |
|----------|-------------|
| Store page | `[PLACEHOLDER: Trust badges, secure checkout, shipping info]` |
| Course page | `[PLACEHOLDER PRICE]` (x2) |
| Policies page | All content is `[PLACEHOLDER]` |

---

## KNOWN ISSUES OR GAPS

### Incomplete Features
1. **Newsletter/Email Forms** — No backend integration; submissions are simulated
2. **Contact Form** — No backend integration; submissions are simulated
3. **Store** — "Coming Soon" page with no e-commerce functionality
4. **Course** — "Coming Soon" page with no course platform integration
5. **Policies** — All 4 tabs (Privacy, Terms, Refunds, Shipping) contain only placeholder text

### Missing Backend
- No database tables created
- No authentication system
- No email collection/storage
- No contact form submission storage

### Content Gaps
- Store pricing not finalized
- Course pricing not finalized
- Legal policies not written
- Some assets in `/src/assets/` may be unused

### Accessibility Considerations
- Skip link implemented ✅
- Focus-visible styles implemented ✅
- Motion preference toggle ✅
- Some images may need alt text review

---

## PLANNED NEXT STEPS

### Priority 1: Backend Integration
- [ ] Create newsletter_signups table in Lovable Cloud
- [ ] Create contact_submissions table
- [ ] Connect EmailCapture component to database
- [ ] Connect Contact form to database
- [ ] Add email notification for new submissions

### Priority 2: Content Completion
- [ ] Write Privacy Policy content
- [ ] Write Terms of Service content
- [ ] Write Refund Policy content
- [ ] Write Shipping Policy content
- [ ] Finalize course pricing

### Priority 3: E-commerce (Store)
- [ ] Determine payment provider (Stripe integration available)
- [ ] Set up product catalog
- [ ] Implement checkout flow
- [ ] Add order management

### Priority 4: Course Platform
- [ ] Determine course hosting platform
- [ ] Set up payment for course tiers
- [ ] Build course content delivery

### Priority 5: Performance & Polish
- [ ] Optimize image loading (consider local hosting of book covers)
- [ ] Add OG images for social sharing
- [ ] Add sitemap.xml
- [ ] Review and optimize bundle size
- [ ] Add error boundaries

---

## TECHNICAL NOTES

### Dependencies
- React 18.3.1
- React Router DOM 6.30.1
- Framer Motion 12.31.0
- TanStack React Query 5.83.0
- Supabase JS 2.95.3
- shadcn/ui components (Radix-based)
- Tailwind CSS with tailwindcss-animate

### Build System
- Vite
- TypeScript
- ESLint

### Testing
- Vitest configured (`vitest.config.ts`)
- Example test file: `src/test/example.test.ts`

---

*This inventory was generated on February 7, 2026. For the most current state, refer to the codebase directly.*
