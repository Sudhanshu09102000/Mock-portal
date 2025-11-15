// ===============================
// Script for Complete Lucent GK Mock
// ===============================

// Topic Titles
const topics = [
  "Indian History", 
  "World History", 
  "Geography",
  "Indian Polity & Constitution", 
  "Indian Economy",
  "Physics", 
  "Chemistry", 
  "Biology", 
  "Miscellaneous", 
  "Computers",
  "Vocabulary"
];

// Each topic has an array of objects: { name: "Button Name", url: "..." }
const links = {
  0: [
    { name: "Indus Civilization (2500 BC–1750 BC)", url: "https://sudhanshu09102000.github.io/1.-Indus-Civilization-2500-BC-1750-BC-/" },
    { name: "Vedic Culture (1500 BC–600 BC)", url: "https://sudhanshu09102000.github.io/2.-Vedic-Culture-1500-BC-600-BC-/" },
    { name: "Rig Vedic Period (1500 BC–1000 BC)", url: "https://sudhanshu09102000.github.io/3.-Rig-Vedic-or-Early-Vedic-Period-1500-BC-1000-BC-/" },
    { name: "Later Vedic Period (1000 BC-600 BC)", url: "https://sudhanshu09102000.github.io/Later-Vedic-Period-1000-BC---600-BC-/" },
    { name: "3.1. Mahajanapada Period (600 BC-325 BC)	", url: "https://sudhanshu09102000.github.io/3.1.-Mahajanapada-Period-600-BC-325-BC-/" }
  ],
  1: [
    { name: "Ancient Civilizations", url: "https://example.com/world1" },
    { name: "Greek Civilization", url: "https://example.com/world2" },
    { name: "Roman Empire", url: "https://example.com/world3" },
    { name: "Industrial Revolution", url: "https://example.com/world4" },
    { name: "World Wars", url: "https://example.com/world5" }
  ],
  2: [
    { name: "Physical Geography", url: "https://example.com/geo1" },
    { name: "Indian Geography", url: "https://example.com/geo2" },
    { name: "World Geography", url: "https://example.com/geo3" },
    { name: "Climatology", url: "https://example.com/geo4" },
    { name: "Soil and Resources", url: "https://example.com/geo5" }
  ],
  3: [
    { name: "Indian Constitution", url: "https://example.com/pol1" },
    { name: "Fundamental Rights", url: "https://example.com/pol2" },
    { name: "Parliament & President", url: "https://example.com/pol3" },
    { name: "Judiciary", url: "https://example.com/pol4" },
    { name: "Local Government", url: "https://example.com/pol5" }
  ],
  4: [
    { name: "Introduction to Economy", url: "https://example.com/econ1" },
    { name: "Banking System", url: "https://example.com/econ2" },
    { name: "Budget & Fiscal Policy", url: "https://example.com/econ3" },
    { name: "Indian Planning", url: "https://example.com/econ4" },
    { name: "Inflation & Poverty", url: "https://example.com/econ5" }
  ],
  5: [
    { name: "Motion & Force", url: "https://example.com/phy1" },
    { name: "Work & Energy", url: "https://example.com/phy2" },
    { name: "Electricity", url: "https://example.com/phy3" },
    { name: "Light", url: "https://example.com/phy4" },
    { name: "Modern Physics", url: "https://example.com/phy5" }
  ],
  6: [
    { name: "Matter & Elements", url: "https://example.com/chem1" },
    { name: "Atomic Structure", url: "https://example.com/chem2" },
    { name: "Chemical Reactions", url: "https://example.com/chem3" },
    { name: "Acids & Bases", url: "https://example.com/chem4" },
    { name: "Organic Chemistry", url: "https://example.com/chem5" }
  ],
  7: [
    { name: "Cell Biology", url: "https://example.com/bio1" },
    { name: "Human Body", url: "https://example.com/bio2" },
    { name: "Genetics", url: "https://example.com/bio3" },
    { name: "Plants", url: "https://example.com/bio4" },
    { name: "Diseases", url: "https://example.com/bio5" }
  ],
  8: [
    { name: "Sports", url: "https://example.com/misc1" },
    { name: "Awards", url: "https://example.com/misc2" },
    { name: "Books & Authors", url: "https://example.com/misc3" },
    { name: "Important Days", url: "https://example.com/misc4" },
    { name: "Current Affairs", url: "https://example.com/misc5" }
  ],
  9: [
    { name: "1. Introduction of Computer", url: "https://sudhanshu09102000.github.io/1.-Introduction-of-Computer/" },
    { name: "2. Generation of Computers", url: "https://sudhanshu09102000.github.io/2.-Generation-of-Computers/" },
    { name: "3. Computer Hardware and Software", url: "https://sudhanshu09102000.github.io/3.-Computer-Hardware-and-Software/" },
    { name: "4. Computer Memory", url: "https://sudhanshu09102000.github.io/4.-Computer-Memory/" },
    { name: "5. Memory unit", url: "https://sudhanshu09102000.github.io/5.-Memory-unit/" },
    { name: "6. Types of Computer", url: "https://sudhanshu09102000.github.io/6.-Types-of-Computer/" },
    { name: "7. Input and Output device", url: "https://sudhanshu09102000.github.io/7.-Input-and-Output-device/" },
    { name: "8. Computer architecture and Components", url: "https://sudhanshu09102000.github.io/8.-Computer-architecture-and-Components" },
    { name: "9. Input and Output device", url: "https://sudhanshu09102000.github.io/7.-Input-and-Output-device/" },
    { name: "10. Input and Output device", url: "https://sudhanshu09102000.github.io/7.-Input-and-Output-device/" },
    { name: "11. Input and Output device", url: "https://sudhanshu09102000.github.io/7.-Input-and-Output-device/" },
  ],
  10: [
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
