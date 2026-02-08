 export interface Book {
   id: string;
   title: string;
   titlePunjabi?: string;
   year: string;
   type: string;
   description: string;
   award?: string;
   foreword?: string;
   coverImage?: string;
 }
 
export const books: Book[] = [
  {
    id: "aroope-akhran-da-aks",
    title: "Aroope Akhran da Aks",
    year: "2014",
    type: "Poetry in open verse and Ghazals",
    description: "Seerat's most recent book reflects the mysteriousness of the modern world. He exemplifies the idea that a word's definition is trapped within the word itself. Demonstrating that it is impossible to interpret the internal thoughts of any creation with words or symbols, when you try to personify the reflection of nonexistence.",
    coverImage: "/images/books/aroope-akhran-da-aks.jpg"
  },
  {
    id: "saij-sullee-te-saleeb",
    title: "Saij Sullee Te Saleeb",
    year: "2007",
    type: "Poetry in open verse and Ghazals",
    description: "Composition of poetry in open verse and ghazals where the title justifies the three stages of life: Living for yourself, Living for a cause and Living for humanity.",
    foreword: "Dr. Jagtar",
    coverImage: "/images/books/saij-sullee-te-saleeb.jpg"
  },
  {
    id: "surat-seerat-te-saraab",
    title: "Surat Seerat Te Saraab",
    year: "2007",
    type: "Punjabi Ghazals",
    description: "A book of three dimensional ghazals based on form, content and illusion. In which, Seerat encapsulates how the lust of life remains unachievable in the wilderness of humanity.",
    coverImage: "/images/books/surat-seerat-te-saraab.jpg"
  },
  {
    id: "kikkar-kande",
    title: "Kikkar Kande",
    year: "1992",
    type: "Poetry in open verse and Ghazals",
    description: "Seerat's first book in which he combines poetry in open verse and ghazals. Creating the subjectivity of relevance in symbolic form and technically bound poetry, Seerat illustrates beautifully the social and political influence on the surrounding environment.",
    coverImage: "/images/books/kikkar-kande.jpg"
  },
  {
    id: "kirchan",
    title: "Kirchan",
    year: "1990",
    type: "Punjabi Ghazals",
    description: "Composition of ghazals in its pure form. The premise of this anthology of poems is to discuss the deeply hidden realities of life, which are scattered in the spectrum of life.",
    award: "Best book award from JKAACL in 1991",
    coverImage: "/images/books/kirchan.jpg"
  },
  {
    id: "bharam-bhullayan",
    title: "Bharam Bhullayan",
    year: "1986",
    type: "Punjabi Novel",
    description: "Seerat's first novel on \"stream of consciousness\", in which we are shown the internal reflection of a boy's thoughts as he tries to piece together the shattered images around him.",
    award: "Best book award from JKAACL in 1987",
    coverImage: "/images/books/bharam-bhullayan.jpg"
  },
  {
    id: "khalaw-ch-tangey-harf",
    title: "Khalaw 'ch Tangey Harf",
    year: "1985",
    type: "Punjabi Poems",
    description: "Seerat's second book of poetry in open verse. Acknowledged for its intense and meaningful poetry, in which he explores interpretation from introvert to extravert state of mind and vice versa.",
    coverImage: "/images/books/khalaw-ch-tangey-harf.jpg"
  },
  {
    id: "chhallan",
    title: "Chhallan",
    year: "1980",
    type: "Free Verse Poems",
    description: "Surinder Seerat's first book of free verse poems. Poetry of this book reflects the internal struggle to exist in the world.",
    award: "Best Punjabi book by J&K Academy of Art Culture and Languages (JKAACL) in 1982",
    foreword: "Dr. Kulbir Singh Kaang",
    coverImage: "/images/books/chhallan.jpg"
  }
];