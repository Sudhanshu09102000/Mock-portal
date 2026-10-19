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
          { name: "Historical Sources of Ancient India", file: "historical-sources-of-ancient-india" },
          { name: "Prehistoric Period", file: "prehistoric-period" },
          { name: "Indus Valley Civilization", file: "indus-valley-civilization" },
          { name: "Vedic Age", file: "vedic-age" },
          { name: "Mahajanapadas, Rise of Magadha, Pre-Mauryan Empires", file: "mahajanapadas-rise-of-magadha-pre-mauryan-empires" },
          { name: "Foreign Invasions on Ancient India", file: "foreign-invasions-on-ancient-india" },
          { name: "The Maurya Empire (322-185 BC)", file: "the-maurya-empire" },
          { name: "Post-Mauryan Period", file: "post-mauryan-period" },
          { name: "Religious Movement in Ancient India (Jainism)", file: "religious-movement-ancient-india-jainism" },
          { name: "Religious Movement in Ancient India (Buddhism)", file: "religious-movement-ancient-india-buddhism" },
          { name: "Gupta Empire", file: "gupta-empire" },
          { name: "Post Gupta Period / Pre Medieval Period", file: "post-gupta-period-pre-medieval-period" },
          { name: "Other Later-Gupta Dynasties", file: "other-later-gupta-dynasties" },
          { name: "Sangam Period", file: "sangam-period" },
          { name: "Kingdom of South India", file: "kingdom-of-south-india" },
        ]
      },

      {
        name: "Medieval History",
        subtopics: [
          { name: "Medieval India - The Conquest of Sindh by the Arabs", file: "conquest-of-sindh-by-the-arabs" },
          { name: "Sources of Medieval Indian History", file: "sources-of-medieval-indian-history" },
          { name: "Invasion of the Turks", file: "invasion-of-the-turks" },
          { name: "Delhi Sultanate (1206-1526 CE)", file: "delhi-sultanate" },
          { name: "Khilji Dynasty (1290-1320 CE)", file: "khilji-dynasty" },
          { name: "Tughlaq Dynasty (1320-1414 CE)", file: "tughlaq-dynasty" },
          { name: "Sayyid Dynasty (1414-1451 CE)", file: "sayyid-dynasty" },
          { name: "Lodi Dynasty (1451-1526 CE)", file: "lodi-dynasty" },
          { name: "Disintegration of the Delhi Sultanate and Rise of Provincial Kingdoms", file: "disintegration-delhi-sultanate-rise-of-provincial-kingdoms" },
          { name: "Mughal Period - Babur (1526-1530 CE)", file: "mughal-period-babur" },
          { name: "Humayun (1530-40, 1555-56 CE)", file: "humayun" },
          { name: "Jalaluddin Muhammad Akbar (1556-1605)", file: "akbar" },
          { name: "Jahangir (1605-1627)", file: "jahangir" },
          { name: "Shah Jahan (1627-1658)", file: "shah-jahan" },
          { name: "Aurangzeb (1658-1707)", file: "aurangzeb" },
          { name: "Post Mughal Period", file: "post-mughal-period" },
          { name: "Sufi & Bhakti Movement", file: "sufi-and-bhakti-movement" },
          { name: "Administrative Structure", file: "administrative-structure" },
          { name: "Maratha Empire", file: "maratha-empire" },
        ]
      },
      {
        name: "Modern History",
        subtopics: [
          { name: "Advent of Europeans", file: "advent-of-europeans" },
          { name: "New Autonomous States in the 18th Century", file: "new-autonomous-states-18th-century" },
          { name: "The British Conquest of India", file: "british-conquest-of-india" },
          { name: "Expansion of British Power in India", file: "expansion-of-british-power-in-india" },
          { name: "Economic & Administrative Policies During British Period", file: "economic-administrative-policies-british-period" },
          { name: "Socio-Religious Reform Movements", file: "socio-religious-reform-movements" },
          { name: "Peasant, Tribal & Other Movements During British Period", file: "peasant-tribal-movements-british-period" },
          { name: "Revolt of 1857 / First War of Independence", file: "revolt-of-1857" },
          { name: "The Development of Political Consciousness in India", file: "development-of-political-consciousness" },
          { name: "Rise of Indian Nationalism / National Movement", file: "rise-of-indian-nationalism" },
          { name: "2nd Phase of Indian National Movement (1905-1916)", file: "2nd-phase-indian-national-movement" },
          { name: "Emergence of Gandhi / Last Phase of National Movement (1919-1947)", file: "emergence-of-gandhi-last-phase-national-movement" },
          { name: "Revolutionary Extremism / Activities", file: "revolutionary-extremism" },
          { name: "Freedom Struggle in the 1920s & 1930s", file: "freedom-struggle-1920s-1930s" },
          { name: "Freedom with Partition / National Movement of 1940s", file: "freedom-with-partition-1940s" },
          { name: "Governor Generals & Viceroys", file: "governor-generals-and-viceroys" },
        ]
      },
      {
        name: "Polity",
        subtopics: [
          { name: "Historical Background", file: "Polity/historical-background" },
          { name: "Making of the Constitution", file: "Polity/making-of-the-constitution" },
          { name: "Various Sources & Salient Features of the Constitution", file: "Polity/sources-salient-features-constitution" },
          { name: "Preamble & Schedules", file: "Polity/preamble-schedules" },
          { name: "India & Its Territory + Citizenship", file: "Polity/india-territory-citizenship" },
          { name: "Fundamental Rights", file: "Polity/fundamental-rights" },
          { name: "Directive Principles of State Policy", file: "Polity/directive-principles-state-policy" },
          { name: "Fundamental Duties, Doctrine of Basic Structure", file: "Polity/fundamental-duties-basic-structure" },
          { name: "President of India", file: "Polity/president-of-india" },
          { name: "Vice-President of India", file: "Polity/vice-president-of-india" },
          { name: "PM, Council of Ministers & Attorney General", file: "Polity/pm-council-ministers-attorney-general" },
          { name: "Parliament", file: "Polity/parliament" },
          { name: "State Executive & State Legislature", file: "Polity/state-executive-state-legislature" },
          { name: "Supreme Court, High Court & Subordinate Court", file: "Polity/supreme-court-high-court-subordinate-court" },
          { name: "Centre-State Relations & Emergency Provisions", file: "Polity/centre-state-relations-emergency-provisions" },
          { name: "Local Self-Government", file: "Polity/local-self-government" },
          { name: "Scheduled & Tribal Areas", file: "Polity/scheduled-tribal-areas" },
          { name: "Electoral System & Constitutional Bodies", file: "electoral-system-constitutional-bodies" },
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
          { name: "July 2025 Current Affiars", file: "ca-jul-2025" },
          { name: "August 2025 Current Affiars", file: "ca-aug-2025" },
          { name: "September October 2025 Current Affiars", file: "ca-sep-oct-2025" },
          { name: "November 2025 Current Affiars", file: "ca-nov-2025" },
          { name: "December 2025 Current Affiars", file: "ca-dec-2025" },
          { name: "January 2026 Current Affiars", file: "ca-jan-2026" },
          { name: "February March 2026 Current Affiars", file: "ca-feb-mar-2026" },
          { name: "April 2026 Current Affiars", file: "ca-apr-2026" },
          { name: "May 2026 Current Affiars", file: "ca-may-2026" },
          { name: "June 2026 Current Affiars", file: "ca-jun-2026" },


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
          { name: "Set 1", file: "Vocabulary/vocabulary-set-1" },
          { name: "Set 2", file: "Vocabulary/vocabulary-set-2" },
          { name: "Set 3", file: "Vocabulary/vocabulary-set-3" },
          { name: "Set 4", file: "Vocabulary/vocabulary-set-4" },
          { name: "Set 5", file: "Vocabulary/vocabulary-set-5" },
          { name: "Set 6", file: "Vocabulary/vocabulary-set-6" },
          { name: "Set 7", file: "Vocabulary/vocabulary-set-7" },
          { name: "Set 8", file: "Vocabulary/vocabulary-set-8" },
          { name: "Set 9", file: "Vocabulary/vocabulary-set-9" },
          { name: "Set 10", file: "Vocabulary/vocabulary-set-10" },
          { name: "Set 11", file: "Vocabulary/vocabulary-set-11" },
          { name: "Set 12", file: "Vocabulary/vocabulary-set-12" },
          { name: "Set 13", file: "Vocabulary/vocabulary-set-13" },
          { name: "Set 14", file: "Vocabulary/vocabulary-set-14" },
          { name: "Set 15", file: "Vocabulary/vocabulary-set-15" },
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
    title: "test",
    colorClass: "test",
    topics: [
      {
        name: "test",
        subtopics: [
          { name: "Test", file: "test/test" },
        ]
      }
    ]
  }

];

