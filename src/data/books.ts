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
  /** CSS object-position value for cover image, e.g. "center 60%" */
  coverPosition?: string;
}

export const books: Book[] = [
  {
    id: "amriki-punjabi-kahani",
    title: "Amrīkī Punjabi Kahāṇī",
    year: "2025",
    type: "Short Story Anthology",
    description: "22 voices—writers across North America exploring what it means to be Punjabi in America. Surinder serves as curator and guide, weaving diverse stories into a coherent portrait of diaspora consciousness for the World Punjabi Sahit Academy Silver Jubilee.",
    award: "World Punjabi Sahit Academy Silver Jubilee Edition",
    coverImage: "/images/books/amriki-punjabi-kahani-2025.jpg"
  },
  {
    id: "jung-jaari-hai",
    title: "Jung Jaari Hai",
    year: "2023",
    type: "Contemporary Poetry",
    description: "The struggle continues—a declaration, not a lament. Poetry for our moment: political without slogans, personal without sentimentality, philosophical without abstraction. Late work with teeth, as the poet enters his ninth decade.",
    coverImage: "/images/books/jung-jaari-hai-2023.jpg"
  },
  {
    id: "poorab-pacham-te-parvaas",
    title: "Poorab Pacham te Parvaas",
    year: "2022",
    type: "Short Stories",
    description: "East, West, and the Journey Between. After years of poetry's vertical depth, Surinder turns to short stories—a form perfect for horizontal fragmentation. These stories capture the specific texture of life suspended between worlds.",
    coverImage: "/images/books/poorab-pacham-te-parvaas-2022.jpg"
  },
  {
    id: "bharam-bhuleyan-2nd-edition",
    title: "Bharam Bhuleyan (2nd Edition)",
    year: "2017",
    type: "Novel (stream of consciousness)",
    description: "Thirty-one years after its original publication, the revolutionary 1986 novel returns. The questions it asks remain unanswered: How do we construct reality? Where does consciousness end and the world begin?",
    coverImage: "/images/books/bharam-bhuleyan-2nd-edition-2017.jpg"
  },
  {
    id: "srijna-te-samvaad",
    title: "Surinder Seerat: Srijna te Samvaad",
    year: "2016",
    type: "Edited Critical Volume",
    description: "Creation and Conversation. Thirty-five Punjabi scholars, writers, and literary critics converge on a single body of work. Rigorous, critical scholarship—academia in conversation with artistry.",
    award: "35 contributing scholars and critics",
    coverImage: "/images/books/srijna-te-samvaad-2016.jpg"
  },
  {
    id: "aroope-akhran-da-aks",
    title: "Aroope Akhran da Aks",
    year: "2014",
    type: "Poetry in open verse and Ghazals",
    description: "This book reflects the mysteriousness of the modern world. He exemplifies the idea that a word's definition is trapped within the word itself. Demonstrating that it is impossible to interpret the internal thoughts of any creation with words or symbols, when you try to personify the reflection of nonexistence.",
    award: "Professor Mohan Singh Award 2014",
    coverImage: "/images/books/Aroope-Akhran-da-Aks.jpeg"
  },
  {
    id: "saij-sullee-te-saleeb",
    title: "Saij Sullee Te Saleeb",
    year: "2007",
    type: "Poetry in open verse and Ghazals",
    description: "Composition of poetry in open verse and ghazals where the title justifies the three stages of life: Living for yourself, Living for a cause and Living for humanity.",
    foreword: "Dr. Jagtar",
    coverImage: "/images/books/Saij-Sullee-Te-Saleeb.jpeg"
  },
  {
    id: "surat-seerat-te-saraab",
    title: "Surat Seerat Te Saraab",
    year: "2002",
    type: "Punjabi Ghazals",
    description: "A book of three dimensional ghazals based on form, content and illusion. In which, Seerat encapsulates how the lust of life remains unachievable in the wilderness of humanity.",
    coverImage: "/images/books/Surat-Seerat-Te-Saraab.jpeg"
  },
  {
    id: "kikkar-kande",
    title: "Kikkar Kande",
    year: "1992",
    type: "Poetry in open verse and Ghazals",
    description: "Seerat's first book in which he combines poetry in open verse and ghazals. Creating the subjectivity of relevance in symbolic form and technically bound poetry, Seerat illustrates beautifully the social and political influence on the surrounding environment.",
    coverImage: "/images/books/Kikkar-Kande.jpeg"
  },
  {
    id: "kirchan",
    title: "Kirchan",
    year: "1990",
    type: "Punjabi Ghazals",
    description: "Composition of ghazals in its pure form. The premise of this anthology of poems is to discuss the deeply hidden realities of life, which are scattered in the spectrum of life.",
    award: "Best book award from JKAACL in 1991",
    coverImage: "/images/books/Kirchan.jpeg"
  },
  {
    id: "bharam-bhullayan",
    title: "Bharam Bhullayan",
    year: "1986",
    type: "Punjabi Novel",
    description: "Seerat's first novel on \"stream of consciousness\", in which we are shown the internal reflection of a boy's thoughts as he tries to piece together the shattered images around him.",
    award: "Best book award from JKAACL in 1987",
    coverImage: "/images/books/Bharam-Bullyan.jpeg"
  },
  {
    id: "khalaw-ch-tangey-harf",
    title: "Khalaw 'ch Tangey Harf",
    year: "1985",
    type: "Punjabi Poems",
    description: "Seerat's second book of poetry in open verse. Acknowledged for its intense and meaningful poetry, in which he explores interpretation from introvert to extravert state of mind and vice versa.",
    coverImage: "/images/books/Khalavich-Tangey-Harf.jpeg"
  },
  {
    id: "chhallan",
    title: "Chhallan",
    year: "1980",
    type: "Free Verse Poems",
    description: "Surinder Seerat's first book of free verse poems. Poetry of this book reflects the internal struggle to exist in the world.",
    award: "Best Punjabi book by J&K Academy of Art Culture and Languages (JKAACL) in 1982",
    foreword: "Dr. Kulbir Singh Kaang",
    coverImage: "/images/books/Chhallan.jpeg",
    coverPosition: "center 5%"
  }
];
