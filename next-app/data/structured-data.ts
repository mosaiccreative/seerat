export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://surinderseerat.com/#author",
      "name": "Surinder Singh Seerat",
      "alternateName": ["Surinder Seerat", "Surinder Singh"],
      "birthDate": "1947-09-19",
      "birthPlace": {
        "@type": "Place",
        "name": "Sadipura-Pulwama, Kashmir, India"
      },
      "jobTitle": "Punjabi Ghazal Poet & Author",
      "description": "Award-winning Punjabi ghazal master with 13 published works spanning 45 years. Physicist turned poet, bridging traditional form with modern philosophical inquiry.",
      "url": "https://surinderseerat.com",
      "sameAs": [
        "https://www.youtube.com/@SurinderSeerat",
        "https://soundcloud.com/surinder-seerat"
      ],
      "knowsAbout": ["Punjabi Poetry", "Ghazal Form", "Free Verse", "Punjabi Literature", "Physics"],
      "award": [
        "JKAACL Best Punjabi Book Award 1982 (Chhallan)",
        "JKAACL Best Book Award 1987 (Bharam Bhullayan)",
        "JKAACL Best Book Award 1991 (Kirchan)",
        "Professor Mohan Singh Award 2014 (Aroope Akhran da Aks)"
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Punjabi Sahit Sabha California",
          "foundingDate": "1992"
        },
        {
          "@type": "Organization",
          "name": "Vishav Punjabi Sahit Academy California",
          "foundingDate": "2002"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://surinderseerat.com/#website",
      "url": "https://surinderseerat.com",
      "name": "Surinder Singh Seerat - Punjabi Poet & Author",
      "description": "Official website of award-winning Punjabi ghazal poet Surinder Singh Seerat",
      "publisher": {"@id": "https://surinderseerat.com/#author"},
      "inLanguage": "en"
    },
    {
      "@type": "ItemList",
      "@id": "https://surinderseerat.com/books/#booklist",
      "name": "Complete Bibliography of Surinder Singh Seerat",
      "description": "All 13 published works by Surinder Singh Seerat spanning 1980-2025",
      "numberOfItems": 13,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {"@id": "https://surinderseerat.com/books/amriki-punjabi-kahani/#book"}
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {"@id": "https://surinderseerat.com/books/jung-jaari-hai/#book"}
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {"@id": "https://surinderseerat.com/books/poorab-pacham-te-parvaas/#book"}
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {"@id": "https://surinderseerat.com/books/bharam-bhuleyan-2nd-edition/#book"}
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {"@id": "https://surinderseerat.com/books/srijna-te-samvaad/#book"}
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {"@id": "https://surinderseerat.com/books/aroope-akhran-da-aks/#book"}
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {"@id": "https://surinderseerat.com/books/saij-sullee-te-saleeb/#book"}
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {"@id": "https://surinderseerat.com/books/surat-seerat-te-saraab/#book"}
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {"@id": "https://surinderseerat.com/books/kikkar-kande/#book"}
        },
        {
          "@type": "ListItem",
          "position": 10,
          "item": {"@id": "https://surinderseerat.com/books/kirchan/#book"}
        },
        {
          "@type": "ListItem",
          "position": 11,
          "item": {"@id": "https://surinderseerat.com/books/bharam-bhullayan/#book"}
        },
        {
          "@type": "ListItem",
          "position": 12,
          "item": {"@id": "https://surinderseerat.com/books/khalaw-ch-tangey-harf/#book"}
        },
        {
          "@type": "ListItem",
          "position": 13,
          "item": {"@id": "https://surinderseerat.com/books/chhallan/#book"}
        }
      ]
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/amriki-punjabi-kahani/#book",
      "name": "Amrīkī Punjabi Kahāṇī",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2025",
      "inLanguage": "pa",
      "genre": ["Short Story Anthology", "Punjabi Literature"],
      "description": "22 voices—writers across North America exploring what it means to be Punjabi in America. Surinder serves as curator and guide for the World Punjabi Sahit Academy Silver Jubilee.",
      "url": "https://surinderseerat.com/books/amriki-punjabi-kahani",
      "award": "World Punjabi Sahit Academy Silver Jubilee Edition"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/jung-jaari-hai/#book",
      "name": "Jung Jaari Hai",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2023",
      "inLanguage": "pa",
      "genre": ["Poetry", "Contemporary Poetry", "Punjabi Poetry"],
      "description": "The struggle continues—a declaration, not a lament. Poetry for our moment: political without slogans, personal without sentimentality.",
      "url": "https://surinderseerat.com/books/jung-jaari-hai"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/poorab-pacham-te-parvaas/#book",
      "name": "Poorab Pacham te Parvaas",
      "alternateName": "East, West, and the Journey Between",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2022",
      "inLanguage": "pa",
      "genre": ["Short Stories", "Literary Fiction", "Punjabi Literature"],
      "description": "After years of poetry's vertical depth, Surinder turns to short stories—capturing the specific texture of life suspended between worlds.",
      "url": "https://surinderseerat.com/books/poorab-pacham-te-parvaas"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/bharam-bhuleyan-2nd-edition/#book",
      "name": "Bharam Bhuleyan (2nd Edition)",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2017",
      "inLanguage": "pa",
      "genre": ["Novel", "Stream of Consciousness", "Literary Fiction"],
      "description": "Thirty-one years after its original publication, the revolutionary 1986 novel returns. How do we construct reality?",
      "url": "https://surinderseerat.com/books/bharam-bhuleyan-2nd-edition"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/srijna-te-samvaad/#book",
      "name": "Surinder Seerat: Srijna te Samvaad",
      "alternateName": "Creation and Conversation",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2016",
      "inLanguage": "pa",
      "genre": ["Literary Criticism", "Scholarly Work", "Punjabi Literature"],
      "description": "Thirty-five Punjabi scholars, writers, and literary critics converge on a single body of work. Rigorous, critical scholarship.",
      "url": "https://surinderseerat.com/books/srijna-te-samvaad"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/aroope-akhran-da-aks/#book",
      "name": "Aroope Akhran da Aks",
      "alternateName": "The Reflection of Incomparable Letters",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2014",
      "inLanguage": "pa",
      "genre": ["Poetry", "Open Verse", "Ghazal", "Punjabi Poetry"],
      "description": "Explores how contemporary life remains profoundly mysterious—analytical precision meets mystical wonder.",
      "url": "https://surinderseerat.com/books/aroope-akhran-da-aks",
      "award": "Professor Mohan Singh Award 2014"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/saij-sullee-te-saleeb/#book",
      "name": "Saij Sullee Te Saleeb",
      "alternateName": "Marriage Bed, Scaffold, and Cross",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2007",
      "inLanguage": "pa",
      "genre": ["Poetry", "Open Verse", "Ghazal", "Punjabi Poetry"],
      "description": "Three life stages—from the intimacy of self, to commitment to a cause, to bearing humanity's weight.",
      "url": "https://surinderseerat.com/books/saij-sullee-te-saleeb"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/surat-seerat-te-saraab/#book",
      "name": "Surat Seerat Te Saraab",
      "alternateName": "Form, Character, and Mirage",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2002",
      "inLanguage": "pa",
      "genre": ["Poetry", "Ghazal", "Punjabi Poetry"],
      "description": "Ghazals exploring 'saraab'—the mirage—what we chase but cannot grasp.",
      "url": "https://surinderseerat.com/books/surat-seerat-te-saraab"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/kikkar-kande/#book",
      "name": "Kikkar Kande",
      "alternateName": "Acacia Thorns",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1992",
      "inLanguage": "pa",
      "genre": ["Poetry", "Open Verse", "Ghazal", "Punjabi Poetry"],
      "description": "The acacia tree—thorny, resilient, deeply rooted—becomes a symbol for consciousness itself.",
      "url": "https://surinderseerat.com/books/kikkar-kande"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/kirchan/#book",
      "name": "Kirchan",
      "alternateName": "Splinters: Pure Ghazal Form",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1990",
      "inLanguage": "pa",
      "genre": ["Poetry", "Ghazal", "Punjabi Poetry"],
      "description": "Pure form ghazals recognized for technical mastery—fragments of reality piercing through comfortable illusions.",
      "url": "https://surinderseerat.com/books/kirchan",
      "award": "JKAACL Best Book Award 1991"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/bharam-bhullayan/#book",
      "name": "Bharam Bhullayan",
      "alternateName": "Illusions and Labyrinths",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1986",
      "inLanguage": "pa",
      "genre": ["Novel", "Literary Fiction", "Stream of Consciousness"],
      "description": "Stream-of-consciousness novel exploring the maze of perception and reality.",
      "url": "https://surinderseerat.com/books/bharam-bhullayan",
      "award": "JKAACL Best Book Award 1987"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/khalaw-ch-tangey-harf/#book",
      "name": "Khalaw 'ch Tangey Harf",
      "alternateName": "Alone with Hanging Words",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1985",
      "inLanguage": "pa",
      "genre": ["Poetry", "Open Verse", "Punjabi Poetry"],
      "description": "Exploration of the transformation from introvert to extravert—language suspended between inner and outer realities.",
      "url": "https://surinderseerat.com/books/khalaw-ch-tangey-harf"
    },
    {
      "@type": "Book",
      "@id": "https://surinderseerat.com/books/chhallan/#book",
      "name": "Chhallan",
      "alternateName": "The Dance of Internal Struggle",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1980",
      "inLanguage": "pa",
      "genre": ["Poetry", "Free Verse", "Punjabi Poetry"],
      "description": "Surinder's debut—raw, unflinching exploration of what it means to wrestle with existence itself.",
      "url": "https://surinderseerat.com/books/chhallan",
      "award": "JKAACL Best Punjabi Book Award 1982"
    },
    {
      "@type": "MusicAlbum",
      "@id": "https://surinderseerat.com/tishnagi/#album",
      "name": "Tishnagi",
      "alternateName": "Thirst",
      "byArtist": {"@id": "https://surinderseerat.com/#author"},
      "genre": ["Ghazal", "Punjabi Music"],
      "description": "Ghazal album capturing longing as the fundamental human condition.",
      "url": "https://surinderseerat.com/tishnagi"
    }
  ]
};
