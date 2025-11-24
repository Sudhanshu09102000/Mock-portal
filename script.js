// ===============================
// Script for Complete Lucent GK Mock
// ===============================

// Topic Titles
const topics = [
  "GEOGRAPHY", 
  "ANCIENT HISTORY", 
  "MEDIEVAL HISTORY",
  "MODERN HISTORY", 
  "POLITY",
  "ECONOMICS", 
  "PHYSICS", 
  "CHEMISTRY", 
  "BIOLOGY", 
  "ENVIRONMENT",
  "STATIC GK",
  "ENGLISH",
  "COMPUTER AWARENESS"
];

// Each topic has an array of objects: { name: "Button Name", url: "..." }
const links = {
  0: [
    { name: "1. Solar System", url: "https://sudhanshu09102000.github.io/1.-Solar-System/" },
{ name: "2. Longitude and Latitude", url: "https://sudhanshu09102000.github.io/2.-Longitude-and-Latitude/" },
{ name: "3. Earth's Interior and Plate Tectonics", url: "https://sudhanshu09102000.github.io/3.-Earth-Interior-and-Plate-Tectonics/" },
{ name: "4. Rocks, Continents and Ocean", url: "https://sudhanshu09102000.github.io/4.-Rocks-Continents-and-Ocean/" },
{ name: "5. Geomorphology and Landforms", url: "https://sudhanshu09102000.github.io/5.-Geomorphology-and-Landforms/" },
{ name: "6. Atmosphere", url: "https://sudhanshu09102000.github.io/6.-Atmosphere/" },
{ name: "7. Wind, Ocean Current and Cyclone", url: "https://sudhanshu09102000.github.io/7.-Wind-Ocean-Current-and-Cyclone/" },
{ name: "8. India and Its Location", url: "https://sudhanshu09102000.github.io/8.-India-and-Its-Location/" },
{ name: "9. Himalayas", url: "https://sudhanshu09102000.github.io/9.-Himalayas/" },
{ name: "10. Peninsular Plateaus", url: "https://sudhanshu09102000.github.io/10.-Peninsular-Plateaus/" },
{ name: "11. Northern Plain and Islands", url: "https://sudhanshu09102000.github.io/11.-Northern-Plain-and-Islands/" },
{ name: "12. Himalayan River System", url: "https://sudhanshu09102000.github.io/12.-Himalayan-River-System/" },
{ name: "13. Peninsular Rivers", url: "https://sudhanshu09102000.github.io/13.-Peninsular-Rivers/" },
{ name: "14. Dams, Lakes and Waterfall", url: "https://sudhanshu09102000.github.io/14.-Dams-Lakes-and-Waterfall/" },
{ name: "15. Monsoon", url: "https://sudhanshu09102000.github.io/15.-Monsoon/" },
{ name: "16. Forest and Grassland", url: "https://sudhanshu09102000.github.io/16.-Forest-and-Grassland/" },
{ name: "17. Soil and Agriculture", url: "https://sudhanshu09102000.github.io/17.-Soil-and-Agriculture/" },
{ name: "18. Minerals", url: "https://sudhanshu09102000.github.io/18.-Minerals/" },
{ name: "19. World Map", url: "https://sudhanshu09102000.github.io/19.-World-Map/" },
{ name: "20. National Parks", url: "https://sudhanshu09102000.github.io/20.-National-Parks/" },

  ],
  
  1: [
    { name: "1. Stone Age", url: "https://sudhanshu09102000.github.io/1.-Stone-Age/" },
{ name: "2. Indus Valley Civilization", url: "https://sudhanshu09102000.github.io/2.-Indus-Valley-Civilization/" },
{ name: "3. Vedic Age", url: "https://sudhanshu09102000.github.io/3.-Vedic-Age/" },
{ name: "4. Jainism and Buddhism", url: "https://sudhanshu09102000.github.io/4.-Jainism-and-Buddhism/" },
{ name: "5. Mahajanpadas", url: "https://sudhanshu09102000.github.io/5.-Mahajanpadas/" },
{ name: "6. Maurya Dynasty", url: "https://sudhanshu09102000.github.io/6.-Maurya-Dynasty/" },
{ name: "7. Post-Maurya Dynasties", url: "https://sudhanshu09102000.github.io/7.-Post-Maurya-Dynasties/" },
{ name: "8. Gupta Dynasty", url: "https://sudhanshu09102000.github.io/8.-Gupta-Dynasty/" },
{ name: "9. Post-Gupta Dynasties", url: "https://sudhanshu09102000.github.io/9.-Post-Gupta-Dynasties/" },
{ name: "10. Sangam Age", url: "https://sudhanshu09102000.github.io/10.-Sangam-Age/" },
{ name: "11. Tripartite Struggle and Cholas", url: "https://sudhanshu09102000.github.io/11.-Tripartite-Struggle-and-Cholas/" },

  ],
  2: [
   { name: "1. Delhi Sultanate", url: "https://sudhanshu09102000.github.io/1.-Delhi-Sultanate/" },
{ name: "2. Vijayanagara and Bahmani Kingdom", url: "https://sudhanshu09102000.github.io/2.-Vijayanagara-and-Bahmani-Kingdom/" },
{ name: "3. Mughal Empire", url: "https://sudhanshu09102000.github.io/3.-Mughal-Empire/" },
{ name: "4. Marathas", url: "https://sudhanshu09102000.github.io/4.-Marathas/" },
{ name: "5. Bhakti and Sufi Movements", url: "https://sudhanshu09102000.github.io/5.-Bhakti-and-Sufi-Movements/" },

  ],
  3: [

    { name: "1. Advent of Europeans", url: "https://sudhanshu09102000.github.io/1.-Advent-of-Europeans/" },
{ name: "2. Socio-Religious Reforms", url: "https://sudhanshu09102000.github.io/2.-Socio-Religious-Reforms/" },
{ name: "3. Revolt of 1857", url: "https://sudhanshu09102000.github.io/3.-Revolt-of-1857/" },
{ name: "4. Indian National Congress", url: "https://sudhanshu09102000.github.io/4.-Indian-National-Congress/" },
{ name: "5. Bengal Partition", url: "https://sudhanshu09102000.github.io/5.-Bengal-Partition/" },
{ name: "6. Gandhian Era", url: "https://sudhanshu09102000.github.io/6.-Gandhian-Era/" },
{ name: "7. CDM and Simon Commission", url: "https://sudhanshu09102000.github.io/7.-CDM-and-Simon-Commission/" },
{ name: "8. Quit India Movement", url: "https://sudhanshu09102000.github.io/8.-Quit-India-Movement/" },
{ name: "9. Governor-General and Viceroy", url: "https://sudhanshu09102000.github.io/9.-Governor-General-and-Viceroy/" },

     ],
  4: [
{ name: "1. Making of Constitution", url: "https://sudhanshu09102000.github.io/1.-Making-of-Constitution/" },
{ name: "2. Salient Features of the Constitution", url: "https://sudhanshu09102000.github.io/2.-Salient-Features-of-the-Constitution/" },
{ name: "3. Preamble", url: "https://sudhanshu09102000.github.io/3.-Preamble/" },
{ name: "4. Part 1 and Part 2 of the Constitution", url: "https://sudhanshu09102000.github.io/4.-Part-1-and-Part-2-of-the-Constitution/" },
{ name: "5. Fundamental Rights", url: "https://sudhanshu09102000.github.io/5.-Fundamental-Rights/" },
{ name: "6. DPSP and Fundamental Duties", url: "https://sudhanshu09102000.github.io/6.-DPSP-and-Fundamental-Duties/" },
{ name: "7. President and Vice President of India", url: "https://sudhanshu09102000.github.io/7.-President-and-Vice-President-of-India/" },
{ name: "8. Prime Minister and Council of Ministers", url: "https://sudhanshu09102000.github.io/8.-Prime-Minister-and-Council-of-Ministers/" },
{ name: "9. Parliament", url: "https://sudhanshu09102000.github.io/9.-Parliament/" },
{ name: "10. State Legislature", url: "https://sudhanshu09102000.github.io/10.-State-Legislature/" },
{ name: "11. Emergency & Constitutional Amendment", url: "https://sudhanshu09102000.github.io/11.-Emergency-and-Constitutional-Amendment/" },
{ name: "12. Supreme Court and High Court", url: "https://sudhanshu09102000.github.io/12.-Supreme-Court-and-High-Court/" },
{ name: "13. Local Government", url: "https://sudhanshu09102000.github.io/13.-Local-Government/" },
{ name: "14. Constitutional and Non-Constitutional Bodies", url: "https://sudhanshu09102000.github.io/14.-Constitutional-and-Non-Constitutional-Bodies/" },
{ name: "15. Important Acts", url: "https://sudhanshu09102000.github.io/15.-Important-Acts/" },
{ name: "16. Sources of the Indian Constitution", url: "https://sudhanshu09102000.github.io/16.-Sources-of-the-Indian-Constitution/" },

    
     ],
  5: [
    { name: "1. Basics of Economy", url: "https://sudhanshu09102000.github.io/1.-Basics-of-Economy/" },
{ name: "2. Demand and Supply", url: "https://sudhanshu09102000.github.io/2.-Demand-and-Supply/" },
{ name: "3. National Income", url: "https://sudhanshu09102000.github.io/3.-National-Income/" },
{ name: "4. Inflation and Unemployment", url: "https://sudhanshu09102000.github.io/4.-Inflation-and-Unemployment/" },
{ name: "5. Budget and Taxation", url: "https://sudhanshu09102000.github.io/5.-Budget-and-Taxation/" },
{ name: "6. Monetary Policy", url: "https://sudhanshu09102000.github.io/6.-Monetary-Policy/" },
{ name: "7. Money and Banking", url: "https://sudhanshu09102000.github.io/7.-Money-and-Banking/" },
{ name: "8. Balance of Payment and Poverty", url: "https://sudhanshu09102000.github.io/8.-Balance-of-Payment-and-Poverty/" },
{ name: "9. Five Year Plan and Industrial Policy Resolution", url: "https://sudhanshu09102000.github.io/9.-Five-Year-Plan-and-Industrial-Policy-Resolution/" },


  ],
  6: [
   { name: "1. Motion", url: "https://sudhanshu09102000.github.io/1.-Motion/" },
{ name: "2. Force and Laws of Motion", url: "https://sudhanshu09102000.github.io/2.-Force-and-Laws-of-Motion/" },
{ name: "3. Gravitation and Work Done", url: "https://sudhanshu09102000.github.io/3.-Gravitation-and-Work-Done/" },
{ name: "4. Sound", url: "https://sudhanshu09102000.github.io/4.-Sound/" },
{ name: "5. Reflection and Refraction", url: "https://sudhanshu09102000.github.io/5.-Reflection-and-Refraction/" },
{ name: "6. Human Eye and Vision", url: "https://sudhanshu09102000.github.io/6.-Human-Eye-and-Vision/" },
{ name: "7. Electricity", url: "https://sudhanshu09102000.github.io/7.-Electricity/" },
{ name: "8. Magnetic Effect of Electric Current", url: "https://sudhanshu09102000.github.io/8.-Magnetic-Effect-of-Electric-Current/" },

  ],
  7: [
   { name: "1. Matter", url: "https://sudhanshu09102000.github.io/1.-Matter/" },
{ name: "2. Atom and Its Structure", url: "https://sudhanshu09102000.github.io/2.-Atom-and-Its-Structure/" },
{ name: "3. Periodic Table", url: "https://sudhanshu09102000.github.io/3.-Periodic-Table/" },
{ name: "4. Chemical Reactions", url: "https://sudhanshu09102000.github.io/4.-Chemical-Reactions/" },
{ name: "5. Metals and Non-Metals", url: "https://sudhanshu09102000.github.io/5.-Metals-and-Non-Metals/" },
{ name: "6. Acid, Base and Salt", url: "https://sudhanshu09102000.github.io/6.-Acid-Base-and-Salt/" },
{ name: "7. Carbon and Its Compounds", url: "https://sudhanshu09102000.github.io/7.-Carbon-and-Its-Compounds/" },


  ],
  8: [
   { name: "1. Cell", url: "https://sudhanshu09102000.github.io/1.-Cell/" },
{ name: "2. Plant Tissue and Animal Tissue", url: "https://sudhanshu09102000.github.io/2.-Plant-Tissue-and-Animal-Tissue/" },
{ name: "3. Plant and Animal Kingdom", url: "https://sudhanshu09102000.github.io/3.-Plant-and-Animal-Kingdom/" },
{ name: "4. Nervous System", url: "https://sudhanshu09102000.github.io/4.-Nervous-System/" },
{ name: "5. Hormones and Plant Movements", url: "https://sudhanshu09102000.github.io/5.-Hormones-and-Plant-Movements/" },
{ name: "6. Reproduction", url: "https://sudhanshu09102000.github.io/6.-Reproduction/" },
{ name: "7. Digestion and Respiration", url: "https://sudhanshu09102000.github.io/7.-Digestion-and-Respiration/" },
{ name: "8. Circulatory System and Excretory System", url: "https://sudhanshu09102000.github.io/8.-Circulatory-System-and-Excretory-System/" },
{ name: "9. Diseases", url: "https://sudhanshu09102000.github.io/9.-Diseases/" },
{ name: "10. Nutrients", url: "https://sudhanshu09102000.github.io/10.-Nutrients/" },
{ name: "11. Hereditary and Evolution", url: "https://sudhanshu09102000.github.io/11.-Hereditary-and-Evolution/" },

  ],
  9: [
   { name: "1. Basics of Environmental Sciences", url: "https://sudhanshu09102000.github.io/1.-Basics-of-Environmental-Sciences/" },
{ name: "2. Ecosystem", url: "https://sudhanshu09102000.github.io/2.-Ecosystem/" },
{ name: "3. Trophic Dynamics and Energy Transfer", url: "https://sudhanshu09102000.github.io/3.-Trophic-Dynamics-and-Energy-Transfer/" },
{ name: "4. Biogeochemical Cycles", url: "https://sudhanshu09102000.github.io/4.-Biogeochemical-Cycles/" },
{ name: "5. Environmental Conventions", url: "https://sudhanshu09102000.github.io/5.-Environmental-Conventions/" },

  ],

  10:[
     { name: "1. Classical Dance", url: "https://sudhanshu09102000.github.io/1.-Classical-Dance/" },
{ name: "2. Folk Dances of India", url: "https://sudhanshu09102000.github.io/2.-Folk-Dances-of-India/" },
{ name: "3. Census", url: "https://sudhanshu09102000.github.io/3.-Census/" },
{ name: "4. Musical Instruments", url: "https://sudhanshu09102000.github.io/4.-Musical-Instruments/" },
{ name: "5. Gharanas", url: "https://sudhanshu09102000.github.io/5.-Gharanas/" },
{ name: "6. Important Days", url: "https://sudhanshu09102000.github.io/6.-Important-Days/" },
{ name: "7. Books and Authors", url: "https://sudhanshu09102000.github.io/7.-Books-and-Authors/" },
{ name: "8. Sports", url: "https://sudhanshu09102000.github.io/8.-Sports/" },
{ name: "9. International Organisations", url: "https://sudhanshu09102000.github.io/9.-International-Organisations/" },
{ name: "10. National Organisations", url: "https://sudhanshu09102000.github.io/10.-National-Organisations/" },
{ name: "11. Festivals of India", url: "https://sudhanshu09102000.github.io/11.-Festivals-of-India/" },
{ name: "12. Government Schemes", url: "https://sudhanshu09102000.github.io/12.-Government-Schemes/" },
{ name: "13. Awards and Honours", url: "https://sudhanshu09102000.github.io/13.-Awards-and-Honours/" },

    
  ],
  11: [
    { name: "1. Set1 Vocab Words", url: "https://sudhanshu09102000.github.io/1.-Set1-Vocab-Words/" },
    { name: "2. Set2 Vocab Words", url: "https://sudhanshu09102000.github.io/2.-Set2-Vocab-Words/" },
    { name: "3. Set3 Vocab Words", url: "https://sudhanshu09102000.github.io/3.-Set3-Vocab-Words/" },
    { name: "4. Set4 Vocab Words", url: "https://sudhanshu09102000.github.io/4.-Set4-Vocab-Words/" },
    { name: "5. Set5 Vocab Words", url: "https://sudhanshu09102000.github.io/5.-Set5-Vocab-Words/" },
    { name: "6. Set6 Vocab Words", url: "https://sudhanshu09102000.github.io/6.-Set6-Vocab-Words/" },
    { name: "7. Set7 Vocab Words", url: "https://sudhanshu09102000.github.io/7.-Set7-Vocab-Words/" },
    { name: "8. Set8 Vocab Words", url: "https://sudhanshu09102000.github.io/8.-Set8-Vocab-Words/" },
    { name: "9. Set9 Vocab Words", url: "https://sudhanshu09102000.github.io/9.-Set9-Vocab-Words/" },
    { name: "10. Set10 Vocab Words", url: "https://sudhanshu09102000.github.io/10.-Set10-Vocab-Words/" },
    { name: "11. Set11 Vocab Words", url: "https://sudhanshu09102000.github.io/11.-Set11-Vocab-Words/" },
    { name: "12. Set12 Vocab Words", url: "https://sudhanshu09102000.github.io/12.-Set12-Vocab-Words/" },
    { name: "13. Set13 Vocab Words", url: "https://sudhanshu09102000.github.io/13.-Set13-Vocab-Words/" },
  ],
     12: [

       { name: "1. Introduction of Computer", url: "https://sudhanshu09102000.github.io/1.-Introduction-of-Computer/" },
{ name: "2. History of Computer", url: "https://sudhanshu09102000.github.io/2.-History-of-Computer/" },
{ name: "3. Generation of Computer", url: "https://sudhanshu09102000.github.io/3.-Generation-of-Computer/" },
{ name: "4. Computer Hardware and Software", url: "https://sudhanshu09102000.github.io/4.-Computer-Hardware-and-Software/" },
{ name: "5. Computer Memory", url: "https://sudhanshu09102000.github.io/5.-Computer-Memory/" },
{ name: "6. Memory Unit", url: "https://sudhanshu09102000.github.io/6.-Memory-Unit/" },
{ name: "7. Types of Computer", url: "https://sudhanshu09102000.github.io/7.-Types-of-Computer/" },
{ name: "8. Input and Output Device", url: "https://sudhanshu09102000.github.io/8.-Input-and-Output-Device/" },
{ name: "9. Computer Architecture and Components", url: "https://sudhanshu09102000.github.io/9.-Computer-Architecture-and-Components/" },
{ name: "10. Types of Operating System and Its Functions", url: "https://sudhanshu09102000.github.io/10.-Types-of-Operating-System-and-Its-Functions/" },
{ name: "11. Logic Gates and Boolean Operations", url: "https://sudhanshu09102000.github.io/11.-Logic-Gates-and-Boolean-Operations/" },
{ name: "12. Basics of Combinatorial Components", url: "https://sudhanshu09102000.github.io/12.-Basics-of-Combinatorial-Components/" },
{ name: "13. Number System", url: "https://sudhanshu09102000.github.io/13.-Number-System/" },
{ name: "14. Programming Languages", url: "https://sudhanshu09102000.github.io/14.-Programming-Languages/" },
{ name: "15. Database Management System", url: "https://sudhanshu09102000.github.io/15.-Database-Management-System/" },
{ name: "16. Computer Network and Its Types", url: "https://sudhanshu09102000.github.io/16.-Computer-Network-and-Its-Types/" },
{ name: "17. Computer Network Topology", url: "https://sudhanshu09102000.github.io/17.-Computer-Network-Topology/" },
{ name: "18. Transmission Modes", url: "https://sudhanshu09102000.github.io/18.-Transmission-Modes/" },
{ name: "19. OSI Model", url: "https://sudhanshu09102000.github.io/19.-OSI-Model/" },
{ name: "20. Computer Security", url: "https://sudhanshu09102000.github.io/20.-Computer-Security/" },
{ name: "21. Fathers and Inventors of Computer Field", url: "https://sudhanshu09102000.github.io/21.-Fathers-and-Inventors-of-Computer-Field/" },
{ name: "22. Shortcut Keys", url: "https://sudhanshu09102000.github.io/22.-Shortcut-Keys/" },
{ name: "23. Definitions and Terminologies", url: "https://sudhanshu09102000.github.io/23.-Definitions-and-Terminologies/" },
{ name: "24. Extension", url: "https://sudhanshu09102000.github.io/24.-Extension/" },
{ name: "25. Abbreviations", url: "https://sudhanshu09102000.github.io/25.-Abbreviations/" },

     ]

};

const mainPage = document.getElementById('mainPage');
const subPage = document.getElementById('subPage');
const topicName = document.getElementById('topicName');
const subButtons = document.getElementById('subButtons');

// Open subpage with fade animation
function openSubPage(index) {
  mainPage.style.animation = "fadeOut 0.5s forwards";
  setTimeout(() => {
    mainPage.classList.add('hidden');
    subPage.classList.remove('hidden');
    subPage.style.animation = "fadeIn 0.5s forwards";
  }, 400);

  topicName.textContent = topics[index];
  subButtons.innerHTML = '';

  links[index].forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'btn-glass';
    btn.textContent = item.name;
    btn.onclick = () => window.open(item.url, "_blank");
    subButtons.appendChild(btn);
  });
}

// Back to main page
function goBack() {
  subPage.style.animation = "fadeOut 0.5s forwards";
  setTimeout(() => {
    subPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
    mainPage.style.animation = "fadeIn 0.5s forwards";
  }, 400);
}

// Simple floating particles animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({length: 50}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2,
  dx: (Math.random() - 0.5) * 0.5,
  dy: (Math.random() - 0.5) * 0.5
}));

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 200, 255, 0.6)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
