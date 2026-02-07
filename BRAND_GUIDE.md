# Surinder Singh Seerat — Brand Guide

> **Version**: 1.0  
> **Last Updated**: February 2026  
> **Project Codename**: The Open Book

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Visual Identity](#visual-identity)
3. [Typography](#typography)
4. [Color System](#color-system)
5. [Spacing & Layout](#spacing--layout)
6. [Imagery & Photography](#imagery--photography)
7. [Iconography](#iconography)
8. [Voice & Tone](#voice--tone)
9. [Terminology](#terminology)
10. [UI Components](#ui-components)
11. [Animation & Motion](#animation--motion)
12. [Accessibility](#accessibility)
13. [Do's and Don'ts](#dos-and-donts)

---

## Brand Overview

### Who We Are

Surinder Singh Seerat is an award-winning Punjabi ghazal master, novelist, critic, and editor. The brand represents his literary journey—from physicist and corporate professional (IBM, Iomega, USPS) to a voice exploring consciousness, longing, and the immigrant experience through poetry.

### Brand Essence

**"The Physicist. The Writer. The Poet."**

A collision of rational precision and mystical inquiry. Science meets spirituality. Tradition meets innovation.

### Brand Attributes

| Attribute | Expression |
|-----------|------------|
| **Cinematic** | Full-viewport sections, dramatic reveals, film-like pacing |
| **Literary** | Book metaphors, chapter structure, typographic excellence |
| **Elegant** | Restrained luxury, gold accents, refined spacing |
| **Mystical** | Consciousness themes, ambient glows, depth & shadow |
| **Timeless** | Classic serif typography, enduring aesthetic |

### Ideal Customer Profiles (ICPs)

1. **Literary Scholar** — Academic research, deep analysis
2. **Heritage Keeper** — Preservation, ownership, collection
3. **Cultural Explorer** — Introductory reading paths, discovery
4. **Creative Professional** — Licensing, Bollywood collaboration

---

## Visual Identity

### Design Philosophy

The website follows a **book metaphor**. The experience mimics opening a leather-bound volume—pages turn, chapters unfold, and content reveals cinematically.

**Core Principles:**
- **Dark Noir Aesthetic** — Black backgrounds with gold accents
- **Asymmetric Editorial Layout** — Text left-aligned, imagery right-aligned on desktop
- **Full-Bleed Sections** — 100vh viewport sections for immersive storytelling
- **Tightened Vertical Rhythm** — Consistent py-12 to py-16 spacing

### Logo & Wordmark

**Primary Wordmark**: "Seerat" (used in navigation and footer)

```
Font: Playfair Display
Weight: 400 (Regular)
Color: Gold (--gold)
Size: Responsive, typically text-2xl to text-3xl
```

**Full Name Treatment**: "Surinder Singh Seerat"
- Used in hero sections and footer brand area
- Font: Playfair Display, 500 weight
- Color: Gold accent

---

## Typography

### Font Stack

| Role | Font Family | Fallback | Usage |
|------|-------------|----------|-------|
| **Display** | Playfair Display | Georgia, serif | Headlines, titles, quotes |
| **Body** | Crimson Pro | Georgia, serif | Paragraphs, prose, poetry |
| **UI** | Inter | system-ui, sans-serif | Navigation, buttons, labels, metadata |

### Type Scale

```css
h1: text-5xl md:text-7xl lg:text-8xl  /* 3rem → 4.5rem → 6rem */
h2: text-3xl md:text-5xl lg:text-6xl  /* 1.875rem → 3rem → 3.75rem */
h3: text-2xl md:text-3xl              /* 1.5rem → 1.875rem */

body: clamp(1rem, 1.25vw + 0.875rem, 1.25rem)
```

### Heading Styles

```css
font-family: var(--font-display);
font-weight: 500;
line-height: 1.1;
letter-spacing: -0.03em;
```

### Body Copy

```css
font-family: var(--font-body);
line-height: 1.8;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
```

### UI Text

```css
/* Chapter labels, navigation, buttons */
font-family: var(--font-ui);
font-size: 11px;
font-weight: 400;
letter-spacing: 0.15em – 0.3em;
text-transform: uppercase;
```

### Special Treatments

**Drop Cap**
```css
.drop-cap::first-letter {
  float: left;
  font-size: 4.5rem;
  font-family: var(--font-display);
  color: hsl(var(--gold));
  line-height: 1;
  margin-right: 1rem;
}
```

**Quote Block**
```css
.quote-block::before {
  content: '"';
  font-size: 5rem;
  color: hsl(var(--gold) / 0.4);
}
```

---

## Color System

### Core Palette

| Token | HSL Value | Hex (approx) | Usage |
|-------|-----------|--------------|-------|
| `--background` | 240 10% 4% | #0a0a0b | Page background |
| `--foreground` | 40 30% 95% | #f7f3eb | Primary text |
| `--gold` | 38 75% 55% | #d4a84b | Accents, CTAs, highlights |
| `--ink` | 345 45% 15% | #371a24 | Deep burgundy tones |
| `--cream` | 40 30% 95% | #f7f3eb | Light backgrounds |
| `--burgundy` | 345 45% 22% | #512837 | Section backgrounds |
| `--burgundy-dark` | 345 50% 15% | #3d1525 | Deeper tones |
| `--burgundy-light` | 345 40% 30% | #6b3a4a | Lighter tones |

### Semantic Tokens

| Token | Usage |
|-------|-------|
| `--primary` | Primary actions, key text |
| `--secondary` | Secondary containers |
| `--muted` | Subdued backgrounds |
| `--muted-foreground` | Secondary text, captions |
| `--accent` | Gold — CTAs, links, highlights |
| `--border` | Subtle dividers |
| `--card` | Card backgrounds |

### Usage Rules

1. **Never use raw colors in components** — Always use semantic tokens
2. **All colors must be HSL format** for consistency with CSS variables
3. **Gold is reserved for**:
   - Interactive elements (links, buttons)
   - Accents and highlights
   - Chapter labels
   - Decorative elements
4. **Burgundy is used for**:
   - Section backgrounds (Tishnagi page)
   - Hover states on certain cards
   - Theme contrast sections

### Color Combinations

| Theme | Background | Text | Accent |
|-------|------------|------|--------|
| **Dark Noir** (default) | --background | --foreground | --gold |
| **Burgundy Section** | --burgundy | --cream | --gold |
| **Cream Section** | --cream | --burgundy | --gold |

---

## Spacing & Layout

### Vertical Rhythm

```
Tight:    py-8  (32px)  — Compact sections
Standard: py-12 (48px)  — Default section padding  
Medium:   py-16 (64px)  — Standard sections
Generous: py-20 (80px)  — Hero sections, footer
Large:    py-24 (96px)  — Major section breaks
```

### Container

```css
max-width: 1400px (2xl breakpoint)
padding-x: 1.5rem (mobile) → 3rem (desktop)
center: true
```

### Section Structure

```tsx
// Standard full-viewport section
<section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-24">
  {/* Content */}
</section>
```

### Grid System

```
Mobile:  1 column
Tablet:  2 columns
Desktop: 3-4 columns
```

### Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1400px | Container max |

---

## Imagery & Photography

### Photography Style

1. **Grayscale-to-Color Transition** — Key images (portraits, album covers) use grayscale by default and transition to full color on hover (1000ms duration)

2. **Cinematic Lighting** — High contrast, dramatic shadows, directional lighting

3. **Aspect Ratios**:
   - Portraits: 3:4 or 2:3
   - Book covers: 3:4
   - Landscape/heroes: 16:9 or 21:9
   - Album art: 1:1

### Image Treatment

```css
/* Portrait hover effect */
.portrait-image {
  filter: grayscale(100%);
  transition: filter 1000ms ease;
}

.portrait-image:hover {
  filter: grayscale(0%);
}
```

### Asset Types

| Type | Location | Format |
|------|----------|--------|
| Portraits | `src/assets/` | JPG |
| Book covers | `src/assets/` | JPG/PNG |
| Textures | `src/assets/` | JPG |
| Icons | Lucide React | SVG |

### Current Assets

- `poet-portrait.jpg` — Official portrait
- `leather-book.png` — 3D book for homepage
- `tishnagi-cover.jpg` — Album cover
- `seerat-book.png` — Book cover
- `paper-texture.jpg` — Background texture
- `hero-landscape.jpg` — Hero imagery

---

## Iconography

### Icon Library

**Primary**: Lucide React  
**Style**: Outline (stroke-based)  
**Sizes**: 12px (inline), 16px (buttons), 20px (standalone), 24px (navigation)

### Common Icons

| Context | Icon | Size |
|---------|------|------|
| External links | `ExternalLink` | 12px |
| Navigation arrows | `ArrowRight` | 14-16px |
| Awards | `Award` | 16px |
| Reading | `BookOpen` | 20px |
| Music/Audio | `Music`, `Play` | 20px |
| Social | Platform-specific | 20px |

### Icon + Text Pairing

```tsx
<span className="inline-flex items-center gap-2">
  <ArrowRight size={14} />
  Read More
</span>
```

---

## Voice & Tone

### Brand Voice

| Attribute | Description |
|-----------|-------------|
| **Elevated** | Sophisticated, literary, never casual |
| **Warm** | Inviting, not cold or academic |
| **Mystical** | Hints at depth without being obscure |
| **Confident** | Authoritative without arrogance |
| **Economical** | Precise, no unnecessary words |

### Writing Style

1. **Headlines**: Poetic, evocative, often fragmented
   - ✓ "The Physicist. The Writer. The Poet."
   - ✗ "Welcome to Surinder Seerat's Poetry Website"

2. **Body Copy**: Flowing, literary prose
   - ✓ "Exploring consciousness, longing, and the immigrant experience through verse."
   - ✗ "Read poems about life and feelings by an Indian poet."

3. **CTAs**: Direct, action-oriented
   - ✓ "Enter the Collection"
   - ✓ "Begin Reading"
   - ✗ "Click Here" / "Learn More"

4. **Microcopy**: Helpful, never clever
   - ✓ "No spam. Unsubscribe anytime."
   - ✗ "We won't sell your soul (just your email)."

### Tone Shifts by Context

| Context | Tone |
|---------|------|
| Homepage | Cinematic, dramatic, mysterious |
| Biography | Warm, narrative, documentary |
| Books | Descriptive, inviting, educational |
| Course | Encouraging, aspirational, practical |
| Contact | Approachable, direct, welcoming |

### Messaging Pillars

1. **Literary Excellence** — Award-winning, recognized, masterful
2. **Cultural Bridge** — Diaspora experience, East-West connection
3. **Timeless Tradition** — Ghazal heritage, centuries of form
4. **Inner Journey** — Consciousness, longing, self-discovery

---

## Terminology

### Preferred Terms

| Use | Don't Use |
|-----|-----------|
| Ghazal | Gazal, ghazzal |
| Couplet / Sher | Verse (when referring to individual units) |
| Collection | Book (when referring to multiple works) |
| Poetry / Verse | Poems (casual) |
| Consciousness | Mindfulness (too trendy) |
| Longing / Tishnagi | Desire (too physical) |

### Punjabi Terms (Typographic Accents Only)

Per design constraints, Punjabi/Gurmukhi text is restricted to visual accents and must never replace functional text.

| Term | Meaning | Usage |
|------|---------|-------|
| **Arz Kiya Hai** | "I present to you" | Contact page accent |
| **Tishnagi** | "Thirst/Longing" | Album title |
| **Ghazal** | Persian poetic form | Can be used freely |

### Chapter Labels

```
Opening · Verse · Poet · Works · Legacy · Connect
```

### Section Headers

Use uppercase, tracked letters for section labels:
```css
font-size: 11px;
letter-spacing: 0.3em;
text-transform: uppercase;
color: hsl(var(--gold));
```

---

## UI Components

### Buttons

**Primary (Gold Outline)**
```tsx
<button className="btn-gold">
  Enter the Collection
</button>

// Styles
.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: 1px solid hsl(var(--gold));
  color: hsl(var(--gold));
  transition: all 500ms;
}

.btn-gold:hover {
  background: hsl(var(--gold));
  color: hsl(var(--ink));
}
```

**Minimal (Text Only)**
```tsx
<button className="btn-minimal">
  Learn More
</button>

// Styles
.btn-minimal {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-ui);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: hsl(var(--muted-foreground));
  transition: color 500ms;
}

.btn-minimal:hover {
  color: hsl(var(--foreground));
}
```

### Cards

**Book Card**
- Aspect ratio: 3:4
- Hover: translateY(-8px), gold shadow
- Border: border-border/50
- Background: bg-card

**Thematic Card**
- Gold top accent bar
- Staggered reveal animation
- Icon + title + description

### Badges

**Gold Badge (Awards)**
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold font-ui text-sm">
  <Award size={16} />
  Award Name
</div>
```

**Neutral Badge (Metadata)**
```tsx
<span className="px-3 py-1 font-ui text-xs tracking-widest border border-border/50 text-muted-foreground">
  1991
</span>
```

**Start Here Badge**
```tsx
<span className="inline-flex items-center gap-1 text-gold text-xs">
  <Check size={12} /> Start Here
</span>
```

### Dividers

**Line**
```tsx
<div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
```

**Stamp**
```tsx
<div className="flex items-center gap-4">
  <div className="w-16 h-px bg-gold/30" />
  <div className="w-2 h-2 border border-gold/50 rotate-45" />
  <div className="w-16 h-px bg-gold/30" />
</div>
```

**Rhythm**
```tsx
<div className="flex items-center gap-2">
  <div className="w-8 h-px bg-gold/20" />
  <div className="w-1 h-1 rounded-full bg-gold/40" />
  <div className="w-12 h-px bg-gold/30" />
  <div className="w-1 h-1 rounded-full bg-gold/40" />
  <div className="w-8 h-px bg-gold/20" />
</div>
```

### Navigation

**Header**
- Fixed position, transparent background
- Links: uppercase, tracked, muted → foreground on hover
- Branding: "Seerat" in gold

**Footer**
- 4-column grid (2 for brand, 1 for Explore, 1 for Connect)
- External links include ExternalLink icon
- Motion toggle in bottom bar

---

## Animation & Motion

### Timing Tokens

```css
--duration-page: 1.8s    /* Full page transitions */
--duration-slow: 1.4s    /* Hero reveals */
--duration-medium: 0.7s  /* Section animations */
--duration-fast: 0.3s    /* Micro-interactions */
```

### Easing Functions

```css
--ease-page: cubic-bezier(0.4, 0, 0.2, 1)      /* Smooth page flow */
--ease-dramatic: cubic-bezier(0.16, 1, 0.3, 1) /* Dramatic reveals */
```

### Animation Patterns

**Fade Up**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**Reveal Up (Cinematic)**
```css
@keyframes reveal-up {
  from { 
    opacity: 0;
    transform: translateY(80px);
    clip-path: inset(100% 0 0 0);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
    clip-path: inset(0% 0 0 0);
  }
}
```

**Float (Book)**
```css
@keyframes float {
  0%, 100% { transform: translateY(0) rotateX(5deg) rotateY(-8deg); }
  50% { transform: translateY(-20px) rotateX(5deg) rotateY(-8deg); }
}
```

**Shimmer (Loading)**
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Hover Effects

**Lift**
```css
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s;
}
.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -15px hsl(var(--gold) / 0.2);
}
```

**Glow**
```css
.hover-glow {
  transition: box-shadow 0.3s, border-color 0.3s;
}
.hover-glow:hover {
  box-shadow: 0 0 30px hsl(var(--gold) / 0.3);
  border-color: hsl(var(--gold) / 0.5);
}
```

### Motion Preferences

Respect `prefers-reduced-motion`:
```css
.motion-reduced,
.motion-reduced * {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

A toggle is available in the footer for user preference.

---

## Accessibility

### Focus States

```css
*:focus-visible {
  outline: 2px solid hsl(var(--accent));
  outline-offset: 2px;
}
```

### Skip Link

```tsx
<a href="#main" className="skip-link">
  Skip to content
</a>
```

### Color Contrast

- Primary text on background: WCAG AAA (12:1+)
- Gold on background: WCAG AA (4.5:1+)
- Muted text on background: WCAG AA (4.5:1+)

### Motion Sensitivity

- Global motion toggle in footer
- Respects `prefers-reduced-motion` media query
- Session-persisted preference

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- Landmark regions (header, main, footer, nav)
- ARIA labels on interactive elements
- Alt text on all images

---

## Do's and Don'ts

### Do ✓

- Use semantic color tokens from the design system
- Maintain the tightened vertical rhythm (py-12 to py-16)
- Apply the book metaphor throughout the experience
- Keep gold reserved for accents and interactive elements
- Use uppercase tracking for chapter labels and navigation
- Respect motion preferences
- Write in an elevated, literary voice

### Don't ✗

- Use raw color values (e.g., `text-white`, `bg-black`)
- Add excessive animations or motion
- Use casual, trendy, or clever copy
- Replace functional text with Punjabi/Gurmukhi
- Add rounded corners (radius is 0rem by design)
- Use more than 2-3 font weights per family
- Crowd sections—embrace whitespace
- Mix multiple accent colors (gold only)

---

## File Reference

### Configuration Files

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Design tokens, colors, fonts, animations |
| `src/index.css` | CSS variables, base styles, components, utilities |
| `components.json` | shadcn/ui configuration |

### Key Directories

```
src/
├── assets/           # Images, textures, portraits
├── components/
│   ├── ui/           # shadcn/ui + custom primitives
│   ├── layout/       # Header, Footer, PageLayout
│   ├── sections/     # Page section components
│   ├── animations/   # Motion components
│   └── bookshelf/    # Book-specific components
├── pages/            # Route pages
├── hooks/            # Custom React hooks
├── lib/              # Utilities
└── data/             # Static data (books, media)
```

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 2026 | Initial brand guide |

---

*"A word's definition is trapped within the word itself."*  
— From the poetry of Surinder Singh Seerat
