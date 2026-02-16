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
      "description": "Award-winning Punjabi ghazal master with 8 published works spanning 34 years. Physicist turned poet, bridging traditional form with modern philosophical inquiry.",
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
      "@type": "Book",
      "name": "Chhallan",
      "alternateName": "The Dance of Internal Struggle",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1980",
      "inLanguage": "pa",
      "genre": ["Poetry", "Free Verse", "Punjabi Poetry"],
      "description": "Surinder's debut—raw, unflinching exploration of what it means to wrestle with existence itself.",
      "award": "JKAACL Best Punjabi Book Award 1982"
    },
    {
      "@type": "Book",
      "name": "Khalaw 'ch Tangey Harf",
      "alternateName": "Alone with Hanging Words",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1985",
      "inLanguage": "pa",
      "genre": ["Poetry", "Open Verse", "Punjabi Poetry"],
      "description": "Exploration of the transformation from introvert to extravert—language suspended between inner and outer realities."
    },
    {
      "@type": "Book",
      "name": "Bharam Bhullayan",
      "alternateName": "Illusions and Labyrinths",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1986",
      "inLanguage": "pa",
      "genre": ["Novel", "Literary Fiction", "Stream of Consciousness"],
      "description": "Stream-of-consciousness novel exploring the maze of perception and reality.",
      "award": "JKAACL Best Book Award 1987"
    },
    {
      "@type": "Book",
      "name": "Kirchan",
      "alternateName": "Splinters: Pure Ghazal Form",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1990",
      "inLanguage": "pa",
      "genre": ["Poetry", "Ghazal", "Punjabi Poetry"],
      "description": "Pure form ghazals recognized for technical mastery—fragments of reality piercing through comfortable illusions.",
      "award": "JKAACL Best Book Award 1991"
    },
    {
      "@type": "Book",
      "name": "Kikkar Kande",
      "alternateName": "Acacia Thorns",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "1992",
      "inLanguage": "pa",
      "genre": ["Poetry", "Open Verse", "Ghazal", "Punjabi Poetry"],
      "description": "The acacia tree—thorny, resilient, deeply rooted—becomes a symbol for consciousness itself."
    },
    {
      "@type": "Book",
      "name": "Surat Seerat Te Saraab",
      "alternateName": "Form, Character, and Mirage",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2007",
      "inLanguage": "pa",
      "genre": ["Poetry", "Ghazal", "Punjabi Poetry"],
      "description": "Ghazals exploring 'saraab'—the mirage—what we chase but cannot grasp."
    },
    {
      "@type": "Book",
      "name": "Saij Sullee Te Saleeb",
      "alternateName": "Marriage Bed, Scaffold, and Cross",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2007",
      "inLanguage": "pa",
      "genre": ["Poetry", "Open Verse", "Ghazal", "Punjabi Poetry"],
      "description": "Three life stages—from the intimacy of self, to commitment to a cause, to bearing humanity's weight."
    },
    {
      "@type": "Book",
      "name": "Aroope Akhran da Aks",
      "alternateName": "The Reflection of Incomparable Letters",
      "author": {"@id": "https://surinderseerat.com/#author"},
      "datePublished": "2014",
      "inLanguage": "pa",
      "genre": ["Poetry", "Open Verse", "Ghazal", "Punjabi Poetry"],
      "description": "Explores how contemporary life remains profoundly mysterious—analytical precision meets mystical wonder.",
      "award": "Professor Mohan Singh Award 2014"
    },
    {
      "@type": "MusicAlbum",
      "name": "Tishnagi",
      "alternateName": "Thirst",
      "byArtist": {"@id": "https://surinderseerat.com/#author"},
      "genre": ["Ghazal", "Punjabi Music"],
      "description": "Ghazal album capturing longing as the fundamental human condition.",
      "url": "https://surinderseerat.com/tishnagi"
    }
  ]
};
