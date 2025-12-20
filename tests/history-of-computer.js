const questions = {
1: {
text: "Which objects were used by primitive people as the earliest counting tools?",
options: ["Sticks, stones and bones", "Paper and ink marks", "Metal coins", "Clay tablets"],
correct: "1",
image: ''
},
2: {
text: "The history of computers begins with which early device?",
options: ["Abacus", "Pascaline", "Napier’s Bones", "Mark I"],
correct: "1",
image: ''
},
3: {
text: "Around how many years ago is the Abacus believed to have been invented by the Chinese?",
options: ["Around 4,000 years ago", "Around 2,000 years ago", "Around 6,000 years ago", "Around 500 years ago"],
correct: "1",
image: ''
},
4: {
text: "Abacus is still used in which of the following countries?",
options: ["China, Russia and Japan", "India, Nepal and Sri Lanka", "France, Italy and Germany", "USA, Canada and Mexico"],
correct: "1",
image: ''
},
5: {
text: "Who invented Napier’s Bones?",
options: ["John Napier of Merchiston", "Blaise Pascal", "Gottfried Leibniz", "Herman Hollerith"],
correct: "1",
image: ''
},
6: {
text: "Napier’s Bones was invented in which period?",
options: ["1550–1617", "1642–1644", "1673–1680", "1830–1840"],
correct: "1",
image: ''
},
7: {
text: "Which device first used the decimal point?",
options: ["Napier’s Bones", "Pascaline", "Abacus", "Analytical Engine"],
correct: "1",
image: ''
},
8: {
text: "Pascaline was invented in which years?",
options: ["1642–1644", "1550–1617", "1673–1675", "1820–1825"],
correct: "1",
image: ''
},
9: {
text: "Who invented the Pascaline?",
options: ["Blaise Pascal", "Charles Babbage", "Gottfried Leibniz", "Vannevar Bush"],
correct: "1",
image: ''
},
10: {
text: "Which machine is believed to be the first mechanical and automatic calculator?",
options: ["Pascaline", "Abacus", "Mark I", "Differential Analyzer"],
correct: "1",
image: ''
},
11: {
text: "The stepped reckoner was developed by whom?",
options: ["Gottfried Wilhelm Leibniz", "Blaise Pascal", "Herman Hollerith", "John Napier"],
correct: "1",
image: ''
},
12: {
text: "In which year was the stepped reckoner developed?",
options: ["1673", "1642", "1830", "1890"],
correct: "1",
image: ''
},
13: {
text: "Difference Engine was designed in the early 1820s by whom?",
options: ["Charles Babbage", "Gottfried Leibniz", "Howard Aiken", "Herman Hollerith"],
correct: "1",
image: ''
},
14: {
text: "What type of device was the Difference Engine?",
options: ["Mechanical computer", "Electronic computer", "Analog computer", "Punch-card reader"],
correct: "1",
image: ''
},
15: {
text: "The Analytical Engine was developed in which year?",
options: ["1830", "1820", "1673", "1930"],
correct: "1",
image: ''
},
16: {
text: "What feature did the Analytical Engine use for input?",
options: ["Punch-cards", "Metal beads", "Ivory strips", "Vacuum tubes"],
correct: "1",
image: ''
},
17: {
text: "Tabulating Machine was invented in which year?",
options: ["1890", "1930", "1830", "1644"],
correct: "1",
image: ''
},
18: {
text: "Who invented the Tabulating Machine?",
options: ["Herman Hollerith", "Charles Babbage", "Howard Aiken", "Vannevar Bush"],
correct: "1",
image: ''
},
19: {
text: "Which machine was used in the 1890 U.S. Census?",
options: ["Tabulating Machine", "Analytical Engine", "Differential Analyzer", "Mark I"],
correct: "1",
image: ''
},
20: {
text: "In which year was the Differential Analyzer introduced in the United States?",
options: ["1930", "1890", "1944", "1830"],
correct: "1",
image: ''
},
21: {
text: "Who invented the Differential Analyzer?",
options: ["Vannevar Bush", "Herman Hollerith", "Blaise Pascal", "Howard Aiken"],
correct: "1",
image: ''
},
22: {
text: "What type of computer was the Differential Analyzer?",
options: ["Analog device", "Mechanical device", "Punch-card machine", "Programmable digital computer"],
correct: "1",
image: ''
},
23: {
text: "Mark I was built in which year?",
options: ["1944", "1930", "1890", "1830"],
correct: "1",
image: ''
},
24: {
text: "Mark I was a partnership project between which institutions?",
options: ["IBM and Harvard", "MIT and IBM", "Harvard and Bell Labs", "IBM and Stanford"],
correct: "1",
image: ''
},
25: {
text: "What was Mark I known as?",
options: ["The first programmable digital computer", "The first mechanical calculator", "The first analog computer", "The first punch-card sorter"],
correct: "1",
image: ''
},

    
};

const explanations = {
1: {
text: "Primitive people used sticks, stones and bones as the earliest counting tools. These were among the first manual aids for counting. Early humans depended heavily on physical objects to keep track of numbers.",
image: ""
},
2: {
text: "The history of computers begins with the Abacus, considered the first computer. It marked the earliest structured method for performing arithmetic operations.",
image: ""
},
3: {
text: "The Abacus is believed to have been invented by the Chinese around 4,000 years ago. This makes it one of the oldest known calculating devices.",
image: ""
},
4: {
text: "Abacus is still used in countries like China, Russia and Japan. It remains an important learning tool for mental arithmetic training.",
image: ""
},
5: {
text: "Napier’s Bones was invented by John Napier (1550–1617) of Merchiston. His work contributed significantly to early computational mathematics.",
image: ""
},
6: {
text: "John Napier lived from 1550 to 1617. His invention Napier’s Bones simplified multiplication and division during that period.",
image: ""
},
7: {
text: "Napier’s Bones was the first device to use the decimal point. This innovation greatly improved numerical accuracy and representation.",
image: ""
},
8: {
text: "Pascaline was invented between 1642 and 1644. This period marks the early era of mechanical calculation.",
image: ""
},
9: {
text: "Pascaline was invented by the French mathematician-philosopher Blaise Pascal. He created it to help his father in tax calculations.",
image: ""
},
10: {
text: "Pascaline is believed to be the first mechanical and automatic calculator. It could perform addition and subtraction using a system of gears and wheels.",
image: ""
},
11: {
text: "The stepped reckoner was developed by Gottfried Wilhelm Leibniz. He expanded Pascal’s ideas to create a more advanced mechanical calculator.",
image: ""
},
12: {
text: "The stepped reckoner was developed in 1673. This invention introduced fluted drums instead of gears, improving mechanical computation.",
image: ""
},
13: {
text: "The Difference Engine was designed in the early 1820s by Charles Babbage. His work laid the foundation for modern computing.",
image: ""
},
14: {
text: "The Difference Engine was a mechanical computer capable of performing simple calculations. It was intended to generate mathematical tables.",
image: ""
},
15: {
text: "The Analytical Engine was developed in 1830. It introduced the concept of a general-purpose computing machine.",
image: ""
},
16: {
text: "The Analytical Engine used punch-cards as input. This idea later influenced early 20th-century computing and tabulation machines.",
image: ""
},
17: {
text: "The Tabulating Machine was invented in 1890. It automated the processing of large amounts of statistical data.",
image: ""
},
18: {
text: "Herman Hollerith invented the Tabulating Machine. His work led to the founding of a company that later became IBM.",
image: ""
},
19: {
text: "The Tabulating Machine was used in the 1890 U.S. Census. It significantly reduced the time required for data processing.",
image: ""
},
20: {
text: "The Differential Analyzer was introduced in the United States in 1930. It marked a major step in electronic analog computing.",
image: ""
},
21: {
text: "The Differential Analyzer was invented by Vannevar Bush. It used vacuum tubes to perform calculations electronically.",
image: ""
},
22: {
text: "The Differential Analyzer was an analog device. It could perform 25 calculations in a few minutes using electrical signals.",
image: ""
},
23: {
text: "Mark I was built in 1944. It represented a major advancement in digital computation.",
image: ""
},
24: {
text: "Mark I was built as a partnership between IBM and Harvard. This collaboration produced one of the earliest programmable machines.",
image: ""
},
25: {
text: "Mark I was the first programmable digital computer. It performed complex calculations involving large numbers.",
image: ""
},

    
};