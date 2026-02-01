const PORTAL_DATA = [
  {
    title: "General Intelligence & Reasoning",
    colorClass: "reasoning",
    topics: [
      {
        name: "Coming Soon...",
        subtopics: [
          { name: "Coming Soon...", file: "number-analogy" },
          { name: "Coming Soon...", file: "alphabet-analogy" }
        ]
      }
    ]
  },

  {
    title: "General Awareness",
    colorClass: "awareness",
    topics: [
      {
        name: "Geography",
        subtopics: [
          { name: "Solar System", file: "solar-system" },
          { name: "Longitude and Latitude", file: "longitude-latitude" },
          { name: "Earths Interior and Plate Tectonics", file: "earth-interior-plate-tectonics" },
          { name: "Rocks Continents and Ocean", file: "rocks-continents-ocean" },
          { name: "Geomorphology and Landforms", file: "geomorphology-landforms" },
          { name: "Atmosphere", file: "atmosphere" },
          { name: "Wind Ocean Current and Cyclone", file: "wind-ocean-current-cyclone" },
          { name: "India and Its Location", file: "india-location" },
          { name: "Himalayas", file: "himalayas" },
          { name: "Peninsular Plateaus", file: "peninsular-plateaus" },
          { name: "Northern Plain and Islands", file: "northern-plain-islands" },
          { name: "Himalayan River System", file: "himalayan-river-system" },
          { name: "Peninsular Rivers", file: "peninsular-rivers" },
          { name: "Dams Lakes and Waterfall", file: "dams-lakes-waterfall" },
          { name: "Monsoon", file: "monsoon" },
          { name: "Forest and Grassland", file: "forest-grassland" },
          { name: "Soil and Agriculture", file: "soil-agriculture" },
          { name: "Minerals", file: "minerals" },
          { name: "World Map", file: "world-map" },
          { name: "National Parks", file: "national-parks" }
        ]
      },

      {
        name: "Ancient History",
        subtopics: [
          { name: "Stone Age", file: "stone-age" },
          { name: "Indus Valley Civilization", file: "indus-valley-civilization" },
          { name: "Vedic Age", file: "vedic-age" },
          { name: "Jainism and Buddhism", file: "jainism-buddhism" },
          { name: "Mahajanpadas", file: "mahajanpadas" },
          { name: "Maurya Dynasty", file: "maurya-dynasty" },
          { name: "Post Maurya Dynasties", file: "post-maurya-dynasties" },
          { name: "Gupta Dynasty", file: "gupta-dynasty" },
          { name: "Post Gupta Dynasties", file: "post-gupta-dynasties" },
          { name: "Sangam Age", file: "sangam-age" },
          { name: "Tripartite Struggle and Cholas", file: "tripartite-struggle-cholas" }
        ]
      },

      {
        name: "Medieval History",
        subtopics: [
          { name: "Delhi Sultanate", file: "delhi-sultanate" },
          { name: "Vijayanagara and Bahmani Kingdom", file: "vijayanagara-bahmani" },
          { name: "Mughal Empire", file: "mughal-empire" },
          { name: "Marathas", file: "marathas" },
          { name: "Bhakti and Sufi Movements", file: "bhakti-sufi-movements" }
        ]
      },

      {
        name: "Modern History",
        subtopics: [
          { name: "Advent of Europeans", file: "advent-europeans" },
          { name: "Socio Religious Reforms", file: "socio-religious-reforms" },
          { name: "Revolt of 1857", file: "revolt-1857" },
          { name: "Indian National Congress", file: "indian-national-congress" },
          { name: "Bengal Partition", file: "bengal-partition" },
          { name: "Gandhian Era", file: "gandhian-era" },
          { name: "CDM and Simon Commission", file: "cdm-simon-commission" },
          { name: "Quit India Movement", file: "quit-india-movement" },
          { name: "Governor General and Viceroy", file: "governor-general-viceroy" }
        ]
      },

      {
        name: "Polity",
        subtopics: [
          { name: "Making of Constitution", file: "making-of-constitution" },
          { name: "Salient Features of Constitution", file: "salient-features-constitution" },
          { name: "Preamble", file: "preamble" },
          { name: "Part 1 and Part 2", file: "part-1-part-2" },
          { name: "Fundamental Rights", file: "fundamental-rights" },
          { name: "DPSP and Fundamental Duties", file: "dpsp-fundamental-duties" },
          { name: "President and Vice President", file: "president-vice-president" },
          { name: "Prime Minister and Council of Ministers", file: "prime-minister-council" },
          { name: "Parliament", file: "parliament" },
          { name: "State Legislature", file: "state-legislature" },
          { name: "Emergency and Constitutional Amendment", file: "emergency-constitutional-amendment" },
          { name: "Supreme Court and High Court", file: "supreme-court-high-court" },
          { name: "Local Government", file: "local-government" },
          { name: "Constitutional and Non Constitutional Bodies", file: "constitutional-nonconstitutional-bodies" },
          { name: "Important Acts", file: "important-acts" },
          { name: "Sources of Indian Constitution", file: "sources-indian-constitution" }
        ]
      },

      {
        name: "Economics",
        subtopics: [
          { name: "Basics of Economy", file: "basics-economy" },
          { name: "Demand and Supply", file: "demand-supply" },
          { name: "National Income", file: "national-income" },
          { name: "Inflation and Unemployment", file: "inflation-unemployment" },
          { name: "Budget and Taxation", file: "budget-taxation" },
          { name: "Monetary Policy", file: "monetary-policy" },
          { name: "Money and Banking", file: "money-banking" },
          { name: "Balance of Payment and Poverty", file: "bop-poverty" },
          { name: "Five Year Plan and IPR", file: "five-year-plan-ipr" }
        ]
      },

      {
        name: "Physics",
        subtopics: [
          { name: "Motion", file: "motion" },
          { name: "Force and Laws of Motion", file: "force-laws-motion" },
          { name: "Gravitation and Work Done", file: "gravitation-work" },
          { name: "Sound", file: "sound" },
          { name: "Reflection and Refraction", file: "reflection-refraction" },
          { name: "Human Eye and Vision", file: "human-eye-vision" },
          { name: "Electricity", file: "electricity" },
          { name: "Magnetic Effect of Electric Current", file: "magnetic-effect-current" }
        ]
      },

      {
        name: "Chemistry",
        subtopics: [
          { name: "Matter", file: "matter" },
          { name: "Atom and Its Structure", file: "atom-structure" },
          { name: "Periodic Table", file: "periodic-table" },
          { name: "Chemical Reactions", file: "chemical-reactions" },
          { name: "Metals and Non Metals", file: "metals-nonmetals" },
          { name: "Acid Base and Salt", file: "acid-base-salt" },
          { name: "Carbon and Its Compounds", file: "carbon-compounds" }
        ]
      },

      {
        name: "Biology",
        subtopics: [
          { name: "Cell", file: "cell" },
          { name: "Animal Tissues", file: "animal-tissues" },
          { name: "Plant Tissues", file: "plant-tissues" },
          { name: "Plant Kingdom", file: "plant-kingdom" },
          { name: "Animal Kingdom", file: "animal-kingdom" },
          { name: "Nervous System", file: "nervous-system" },
          { name: "Hormones and Movement in Plants", file: "hormones-plant-movement" },
          { name: "Reproduction", file: "reproduction" },
          { name: "Digestive System and Respiration", file: "digestive-respiration" },
          { name: "Circulatory and Excretory System", file: "circulatory-excretory" },
          { name: "Nutrition", file: "nutrition" },
          { name: "Diseases", file: "diseases" },
          { name: "Genetics and Skeletal System", file: "genetics-skeletal" }
        ]
      },

      {
        name: "Environment",
        subtopics: [
          { name: "Basics of Environmental Sciences", file: "environment-basics" },
          { name: "Ecosystem", file: "ecosystem" },
          { name: "Trophic Dynamics and Energy Transfer", file: "trophic-dynamics" },
          { name: "Biogeochemical Cycles", file: "biogeochemical-cycles" },
          { name: "Environmental Conventions", file: "environmental-conventions" }
        ]
      },

      {
        name: "Static GK",
        subtopics: [
          { name: "Classical Dance", file: "classical-dance" },
          { name: "Folk Dances of India", file: "folk-dances" },
          { name: "Census", file: "census" },
          { name: "Musical Instruments", file: "musical-instruments" },
          { name: "Gharanas", file: "gharanas" },
          { name: "Important Days", file: "important-days" },
          { name: "Books and Authors", file: "books-authors" },
          { name: "Sports", file: "sports" },
          { name: "International Organisations", file: "international-organisations" },
          { name: "National Organisations", file: "national-organisations" },
          { name: "Festivals of India", file: "festivals-india" },
          { name: "Government Schemes", file: "government-schemes" },
          { name: "Awards and Honours", file: "awards-honours" }
        ]
      },

      {
        name: "Current Affairs",
        subtopics: [
          { name: "January 2025 Current Affairs", file: "ca-january" },
          { name: "February 2025 Current Affairs", file: "ca-february" },
          { name: "March 2025 Current Affairs", file: "ca-march" },
          { name: "April 2025 Current Affairs", file: "ca-april" },
          { name: "May 2025 Current Affairs", file: "ca-may" },
          { name: "June 2025 Current Affairs", file: "ca-june" },
          { name: "July 2025 Current Affairs", file: "ca-july" },
          { name: "August 2025 Current Affairs", file: "ca-august" },
          { name: "September 2025 Current Affairs", file: "ca-september" },
          { name: "October 2025 Current Affairs", file: "ca-october" },
          { name: "November 2025 Current Affairs", file: "ca-november" },
          { name: "December 2025 Current Affairs", file: "ca-december" }
        ]
      }
    ]
  },

  {
    title: "Quantitative Aptitude",
    colorClass: "quant",
    topics: [
      {
        name: "Exam Specific Mathematics",
        subtopics: [
          { name: "SSC-CGL 2025 Mains Mathematics", file: "SSC-CGL-2025-Mains-Mathematics" },
          { name: "Coming Soon...", file: "alphabet-analogy" }
        ]
      }
    ]
  },

  {
    title: "English Comprehension",
    colorClass: "english",
    topics: [
      {
        name: "Vocabulary",
        subtopics: [
          { name: "Set 1", file: "vocabulary-set-1" },
          { name: "Set 2", file: "vocabulary-set-2" },
          { name: "Set 3", file: "vocabulary-set-3" },
          { name: "Set 4", file: "vocabulary-set-4" },
          { name: "Set 5", file: "vocabulary-set-5" },
          { name: "Set 6", file: "vocabulary-set-6" },
          { name: "Set 7", file: "vocabulary-set-7" },
          { name: "Set 8", file: "vocabulary-set-8" },
          { name: "Set 9", file: "vocabulary-set-9" },
          { name: "Set 10", file: "vocabulary-set-10" },
          { name: "Set 11", file: "vocabulary-set-11" },
          { name: "Set 12", file: "vocabulary-set-12" },
          { name: "Set 13", file: "vocabulary-set-13" },
          { name: "Set 14", file: "vocabulary-set-14" },
          { name: "Set 15", file: "vocabulary-set-15" },
        ]
      },

      {
        name: "Idioms",
        subtopics: [
          { name: "Idioms Set 1", file: "Idioms-set-1" },
        ]
      },

      {
        name: "Phrasal Verbs",
        subtopics: [
          { name: "Phrasal Verbs Set 1", file: "phrasal-verbs-set-1" },
          { name: "Phrasal Verbs Set 2", file: "phrasal-verbs-set-2" },
        ]
      },

      {
        name: "Homonyms",
        subtopics: [
          { name: "Homonyms Set 1", file: "homonyms-set-1" },
          { name: "Homonyms Set 2", file: "homonyms-set-2" },
        ]
      },



    ]
  },

  {
    title: "Computer Awareness",
    colorClass: "computer",
    topics: [
      {
        name: "Basics to Advanced Computer Knowledge",
        subtopics: [
          { name: "Introduction of Computer", file: "introduction-of-computer" },
          { name: "History of Computer", file: "history-of-computer" },
          { name: "Generation of Computer", file: "generation-of-computer" },
          { name: "Computer Hardware and Software", file: "computer-hardware-software" },
          { name: "Computer Memory", file: "computer-memory" },
          { name: "Memory Unit", file: "memory-unit" },
          { name: "Types of Computer", file: "types-of-computer" },
          { name: "Input and Output Device", file: "input-output-device" },
          { name: "Computer Architecture and Components", file: "computer-architecture-components" },
          { name: "Types of Operating System and Its Functions", file: "operating-system-functions" },
          { name: "Logic Gates and Boolean Operations", file: "logic-gates-boolean-operations" },
          { name: "Basics of Combinatorial Components", file: "combinatorial-components" },
          { name: "Number System", file: "number-system" },
          { name: "Programming Languages", file: "programming-languages" },
          { name: "Database Management System", file: "database-management-system" },
          { name: "Computer Network and Its Types", file: "computer-network-types" },
          { name: "Computer Network Topology", file: "computer-network-topology" },
          { name: "Transmission Modes", file: "transmission-modes" },
          { name: "OSI Model", file: "osi-model" },
          { name: "Computer Security", file: "computer-security" },
          { name: "Fathers and Inventors of Computer Field", file: "fathers-inventors-computer" },
          { name: "Shortcut Keys", file: "shortcut-keys" },
          { name: "Definitions and Terminologies", file: "definitions-terminologies" },
          { name: "Extension", file: "extension" },
          { name: "Abbreviations", file: "abbreviations" }
        ]
      }

    ]
  },

  {
    title: "Others",
    colorClass: "others",
    topics: [
      {
        name: "The Brook – Class 8 ICSE",
        subtopics: [
          { name: "Vocabulary", file: "The-Brook" },
        ]
      }
    ]
  }

];


