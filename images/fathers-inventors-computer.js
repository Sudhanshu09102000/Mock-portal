const questions = {
1: {
text: "Who invented the Analytical Engine?",
options: ["Charles Babbage", "Alan Turing", "Konrad Zuse", "Jack Kilby"],
correct: "1",
image: ""
},
2: {
text: "The Turing Machine was invented by which scientist?",
options: ["Alan Turing", "Dennis Ritchie", "James Gosling", "Douglas Engelbart"],
correct: "1",
image: ""
},
3: {
text: "Who invented the microprocessor?",
options: ["Faggin, Hoff & Mazor", "Bardeen, Brattain & Shockley", "Kilby & Noyce", "Tom Cranston & Fred Longstaff"],
correct: "1",
image: ""
},
4: {
text: "Who invented the floppy disk?",
options: ["Alan Shugart", "Charles Babbage", "James Russell", "Rudolph Hell"],
correct: "1",
image: ""
},
5: {
text: "The computer mouse was invented by whom?",
options: ["Douglas Engelbart", "Alan Turing", "Gary Starkweather", "Larry Wall"],
correct: "1",
image: ""
},
6: {
text: "Who invented the keyboard used in computing devices?",
options: ["Herman Hollerith", "Dennis Ritchie", "Walter Brattain", "James Gosling"],
correct: "1",
image: ""
},
7: {
text: "Who invented the transistor?",
options: ["John Bardeen, Walter Brattain & William Shockley", "Kilby & Noyce", "Faggin, Hoff & Mazor", "An Wang & Jay Forrester"],
correct: "1",
image: ""
},
8: {
text: "RAM was invented by which pair of inventors?",
options: ["An Wang and Jay Forrester", "Larry Wall and Guido van Rossum", "Douglas Engelbart and Alan Shugart", "Konrad Zuse and Alan Turing"],
correct: "1",
image: ""
},
9: {
text: "Who invented the trackball?",
options: ["Tom Cranston and Fred Longstaff", "James Russell and Larry Wall", "Alan Turing and Charles Babbage", "Gary Starkweather and Jack Kilby"],
correct: "1",
image: ""
},
10: {
text: "Who invented the integrated circuit?",
options: ["Jack Kilby & Robert Noyce", "John Bardeen & Walter Brattain", "Alan Shugart & Gary Starkweather", "Dennis Ritchie & Bjarne Stroustrup"],
correct: "1",
image: ""
},
11: {
text: "The laser printer was invented by whom?",
options: ["Gary Starkweather", "Douglas Engelbart", "James Gosling", "Rudolph Hell"],
correct: "1",
image: ""
},
12: {
text: "Who invented the scanner?",
options: ["Rudolph Hell", "Alan Shugart", "James Russell", "Bjarne Stroustrup"],
correct: "1",
image: ""
},
13: {
text: "Who invented the CD-ROM?",
options: ["James Russell", "Alan Turing", "Tom Cranston", "Larry Wall"],
correct: "1",
image: ""
},
14: {
text: "Who developed the C programming language?",
options: ["Dennis Ritchie", "James Gosling", "Niklaus Wirth", "Guido van Rossum"],
correct: "1",
image: ""
},
15: {
text: "The C++ programming language was created by whom?",
options: ["Bjarne Stroustrup", "Dennis Ritchie", "Larry Wall", "James Gosling"],
correct: "1",
image: ""
},
16: {
text: "Who invented the PASCAL programming language?",
options: ["Niklaus Wirth", "James Russell", "An Wang", "Robert Noyce"],
correct: "1",
image: ""
},
17: {
text: "Java programming language was developed by which person?",
options: ["James Gosling", "Bjarne Stroustrup", "Larry Wall", "Guido van Rossum"],
correct: "1",
image: ""
},
18: {
text: "Perl programming language was invented by whom?",
options: ["Larry Wall", "Dennis Ritchie", "James Gosling", "Niklaus Wirth"],
correct: "1",
image: ""
},
19: {
text: "Who invented the Python programming language?",
options: ["Guido van Rossum", "Larry Wall", "Niklaus Wirth", "James Gosling"],
correct: "1",
image: ""
},
20: {
text: "The Z Series Computers were developed by which inventor?",
options: ["Konrad Zuse", "Alan Turing", "Charles Babbage", "Robert Noyce"],
correct: "1",
image: ""
},
21: {
text: "Who invented the first fully electronic digital computer, the ABC computer?",
options: ["John Vincent Atanasoff & Clifford Berry", "Jack Kilby & Robert Noyce", "Faggin, Hoff & Mazor", "John Bardeen & Walter Brattain"],
correct: "1",
image: ""
}


};


const explanations = {
1: {
text: "The Analytical Engine was invented by Charles Babbage. It is considered the first concept of a general-purpose computer.",
image: ""
},
2: {
text: "Alan Turing invented the Turing Machine, a foundational model of computation and algorithms.",
image: ""
},
3: {
text: "The microprocessor was invented by Faggin, Hoff & Mazor. It became the central component of modern computers.",
image: ""
},
4: {
text: "The floppy disk was invented by Alan Shugart. It served as an early portable storage device.",
image: ""
},
5: {
text: "Douglas Engelbart invented the computer mouse. It introduced point-and-click interaction.",
image: ""
},
6: {
text: "The keyboard used in computing was invented by Herman Hollerith. His work formed the basis of modern data input systems.",
image: ""
},
7: {
text: "The transistor was invented by John Bardeen, Walter Brattain & William Shockley. It replaced vacuum tubes and powered modern electronics.",
image: ""
},
8: {
text: "RAM was invented by An Wang and Jay Forrester. RAM allows fast read-write access for programs.",
image: ""
},
9: {
text: "The trackball was invented by Tom Cranston and Fred Longstaff. It functions as a stationary alternative to a mouse.",
image: ""
},
10: {
text: "Jack Kilby & Robert Noyce invented the integrated circuit. It enabled miniaturization of electronic components.",
image: ""
},
11: {
text: "The laser printer was invented by Gary Starkweather. It led to high-speed, high-quality printing.",
image: ""
},
12: {
text: "The scanner was invented by Rudolph Hell. It allowed conversion of images and documents into digital form.",
image: ""
},
13: {
text: "James Russell invented the CD-ROM. It enabled optical storage of digital data.",
image: ""
},
14: {
text: "Dennis Ritchie developed the C programming language. It became a foundation for many modern languages.",
image: ""
},
15: {
text: "Bjarne Stroustrup created the C++ programming language. It added object-oriented features to C.",
image: ""
},
16: {
text: "Niklaus Wirth invented the PASCAL programming language. It was widely used for teaching structured programming.",
image: ""
},
17: {
text: "James Gosling developed the Java programming language. It is known for platform independence.",
image: ""
},
18: {
text: "Larry Wall invented the Perl programming language. It became popular for text processing and scripting.",
image: ""
},
19: {
text: "Guido van Rossum invented Python. It emphasizes readability and simplicity.",
image: ""
},
20: {
text: "Konrad Zuse developed the Z Series Computers. He built some of the earliest programmable computers.",
image: ""
},
21: {
text: "The first fully electronic digital computer, the ABC computer, was invented by John Vincent Atanasoff & Clifford Berry. It introduced electronic computation before ENIAC.",
image: ""
}



};