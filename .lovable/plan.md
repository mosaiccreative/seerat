

## Update "village" References with Contextualized Place Description

This plan replaces all occurrences of "village" across the site with richer, geographically accurate language about Saidpora, Pulwama, and the Kashmir Valley.

---

### Changes Across 3 Files

**1. `src/components/sections/home/DifferenceSection.tsx` (line 14)**
- Change `"from Kashmir village to California"` to `"from the Kashmir Valley to California"`

**2. `src/components/sections/home/RareCombinationSection.tsx` (lines 89-93)**
- Replace the paragraph to contextualize Saidpora within the Pulwama district and Kashmir Valley
- Remove the word "village" from "first person in his family--and his entire village"
- New copy will read something like:
  > Born in Saidpora--a small settlement in the Pulwama district of the Kashmir Valley, a temperate region of rice paddies and saffron fields at 1,500 meters above sea level--Surinder Singh Seerat was the **first person in his family, and his entire community, to graduate from university**. He built a career as a physics professor, taught for over twenty years, and worked in corporate America at IBM, Iomega, and the U.S. Postal Service.

**3. `src/pages/About.tsx` (4 occurrences)**

- **FAQ answer (line 15):** Change "first person in his village" to "first person in his community"

- **Timeline item (line 41):** Change "First in family and village to graduate" to "First in family and community to graduate"

- **Bio paragraph (lines 125-126):** Replace "a small village where higher education was not just rare" with a contextualized description:
  > Born on September 19, 1947, in Saidpora, a settlement in the Pulwama district of the Kashmir Valley--a temperate, hilly region known for rice and saffron production, situated at an elevation of 1,500 to 2,000 meters above sea level--where higher education was not just rare, but virtually unknown.

- **Bio paragraph (line 129):** Change "first person in his entire village" to "first person in his entire community"

---

### Technical Notes

- All factual details (elevation, crops, district name) are sourced directly from the user-provided geographical context
- The word "village" is consistently replaced with "community" or "settlement" to match the user's intent
- The richer geographical context is placed in the two key narrative paragraphs (Homepage Rare Combination + About page "The Beginning") rather than repeating it everywhere, keeping FAQ and timeline entries concise

