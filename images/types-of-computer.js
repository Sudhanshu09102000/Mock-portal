const questions = {
1: {
text: "Computers can be categorized in how many ways?",
options: ["Three ways", "Two ways", "Four ways", "Five ways"],
correct: "1",
image: ''
},
2: {
text: "Which of the following is NOT one of the three computer categorization methods?",
options: ["Based on speed", "Based on utility", "Based on size", "Based on data handling capabilities"],
correct: "1",
image: ''
},
3: {
text: "How many types of computers exist based on data handling capabilities?",
options: ["Three types", "Two types", "Four types", "Five types"],
correct: "1",
image: ''
},
4: {
text: "Which of the following is a type of computer based on data handling capability?",
options: ["Analogue computer", "Personal computer", "Supercomputer", "Workstation"],
correct: "1",
image: ''
},
5: {
text: "Analogue computers are designed to process which type of data?",
options: ["Continuous data", "Discrete data", "Binary data only", "Textual data"],
correct: "1",
image: ''
},
6: {
text: "Which of the following is NOT an example of continuous analogue data?",
options: ["Number of pages in a book", "Speed", "Temperature", "Pressure"],
correct: "1",
image: ''
},
7: {
text: "Analogue computers generally give output in the form of:",
options: ["Reading on a dial or scale", "Printed documents", "Digital screen only", "Voice output"],
correct: "1",
image: ''
},
8: {
text: "Analogue computers accept data:",
options: ["Directly from measuring devices", "Only after converting into binary", "Only through keyboards", "Only through sensors after coding"],
correct: "1",
image: ''
},
9: {
text: "Which of the following is an example of an analogue computer?",
options: ["Speedometer", "Laptop", "Server", "Smartphone"],
correct: "1",
image: ''
},
10: {
text: "Digital computers perform operations at:",
options: ["High speed", "Low speed", "Manual speed", "Variable slow speed"],
correct: "1",
image: ''
},
11: {
text: "Digital computers accept data as:",
options: ["Digits or numbers", "Continuous signals", "Images only", "Sound waves only"],
correct: "1",
image: ''
},
12: {
text: "Modern laptops and desktops are examples of:",
options: ["Digital computers", "Analogue computers", "Hybrid computers", "Miniframe computers"],
correct: "1",
image: ''
},
13: {
text: "Hybrid computers combine features of which two computer types?",
options: ["Analogue and Digital computers", "Mini and Micro computers", "Super and Mainframe computers", "Workstation and Microcomputers"],
correct: "1",
image: ''
},
14: {
text: "Hybrid computers are widely used where:",
options: ["Both analogue and digital data must be processed", "Only gaming is performed", "Only text data is used", "Only weather reports are needed"],
correct: "1",
image: ''
},
15: {
text: "A processor used in petrol pumps is an example of:",
options: ["Hybrid computer", "Analogue computer", "Supercomputer", "Mainframe computer"],
correct: "1",
image: ''
},
16: {
text: "How many types of computers are there based on size?",
options: ["Four types", "Three types", "Five types", "Two types"],
correct: "1",
image: ''
},
17: {
text: "Which is NOT a category of computers based on size?",
options: ["Workstation", "Microcomputer", "Minicomputer", "Supercomputer"],
correct: "1",
image: ''
},
18: {
text: "Microcomputer is also known as:",
options: ["Personal computer", "Mainframe computer", "Supercomputer", "Analogue computer"],
correct: "1",
image: ''
},
19: {
text: "A microcomputer contains which of the following?",
options: ["Microprocessor, memory, storage, input and output units", "Only processor", "Only storage devices", "Only input devices"],
correct: "1",
image: ''
},
20: {
text: "A desktop computer is:",
options: ["A personal or micro-mini computer that fits on a desk", "A supercomputer", "A hybrid system", "A miniframe computer"],
correct: "1",
image: ''
},
21: {
text: "A laptop computer is generally:",
options: ["Smaller than a desktop and larger than a notebook", "Larger than a desktop", "Same size as a palmtop", "Only used for gaming"],
correct: "1",
image: ''
},
22: {
text: "Palmtop computers generally:",
options: ["Have no keyboard", "Have large keyboards", "Are larger than desktops", "Are only used for gaming"],
correct: "1",
image: ''
},
23: {
text: "Minicomputers are used for:",
options: ["Business and scientific applications", "Gaming only", "Analog measurements only", "Music mixing only"],
correct: "1",
image: ''
},
24: {
text: "Mainframe computers can support:",
options: ["Hundreds or thousands of users simultaneously", "Only one user", "Only five users", "Only graphical users"],
correct: "1",
image: ''
},
25: {
text: "Mainframes are ideal for organizations that:",
options: ["Process high volumes of data", "Do only gaming", "Do only small tasks", "Need portable devices"],
correct: "1",
image: ''
},
26: {
text: "Supercomputers can process:",
options: ["Trillions of instructions per second", "Only thousands of instructions per second", "Only millions of instructions per hour", "Only simple calculations"],
correct: "1",
image: ''
},
27: {
text: "Supercomputers were first developed by Roger Cray in:",
options: ["1976", "1965", "1984", "1992"],
correct: "1",
image: ''
},
28: {
text: "A miniframe computer can support:",
options: ["4 to 200 users", "1 user", "Only 2 users", "1000 users"],
correct: "1",
image: ''
},
29: {
text: "Workstations are designed for:",
options: ["Technical or scientific applications", "Only gaming", "Only casual browsing", "Only temperature control"],
correct: "1",
image: ''
},
30: {
text: "A graphics workstation is a type of:",
options: ["Workstation", "Mainframe", "Microcomputer", "Supercomputer"],
correct: "1",
image: ''
},
31: {
text: "General purpose computers can:",
options: ["Perform a wide variety of operations", "Perform only one task", "Be used only in industries", "Run only one program"],
correct: "1",
image: ''
},
32: {
text: "Smartphones and tablets are examples of:",
options: ["General purpose computers", "Special purpose computers", "Hybrid systems", "Mainframes"],
correct: "1",
image: ''
},
33: {
text: "Special purpose computers are designed to:",
options: ["Solve specific problems", "Solve unlimited types of tasks", "Store movies only", "Work as general devices"],
correct: "1",
image: ''
},
34: {
text: "Which is an example of a special purpose computer?",
options: ["Electronic voting machine", "Laptop", "Desktop PC", "Tablet"],
correct: "1",
image: ''
}


};


const explanations = {
1: {
text: "Computers can be categorized by three ways. Extra fact: These ways help classify computers based on functions and characteristics.",
image: ""
},
2: {
text: "Computers are categorized based on data handling capabilities, size, and utility. Extra fact: Speed is not considered a classification parameter.",
image: ""
},
3: {
text: "On the basis of data handling capabilities, the computer is of three types. Extra fact: These include analogue, digital, and hybrid computers.",
image: ""
},
4: {
text: "The three types based on data handling capabilities are Analogue Computer, Digital Computer, and Hybrid Computer. Extra fact: These types depend on how data is processed.",
image: ""
},
5: {
text: "Analogue computers are designed to process the analogue data, which is continuous data. Extra fact: They measure physical quantities.",
image: ""
},
6: {
text: "Analogue data is continuous data such as speed, temperature, pressure and current. Extra fact: Continuous data has infinite possible values.",
image: ""
},
7: {
text: "Analogue computers generally render output as a reading on a dial or scale. Extra fact: They do not display digital numbers normally.",
image: ""
},
8: {
text: "Analogue computers directly accept the data from the measuring device without converting it into numbers and codes. Extra fact: This makes them fast for real-time measurement.",
image: ""
},
9: {
text: "Speedometer and mercury thermometer are examples of analogue computers. Extra fact: They measure continuous physical values.",
image: ""
},
10: {
text: "Digital computer is designed to perform calculations and logical operations at high speed. Extra fact: They use binary data.",
image: ""
},
11: {
text: "A digital computer accepts raw data as digits or numbers. Extra fact: These digits are processed using stored programs.",
image: ""
},
12: {
text: "All modern computers like laptops and desktops are digital computers. Extra fact: They function using binary logic.",
image: ""
},
13: {
text: "Hybrid computer has features of both analogue and digital computers. Extra fact: They are used in specialized fields.",
image: ""
},
14: {
text: "A hybrid computer can process both continuous and discrete data. Extra fact: This dual capability makes them unique.",
image: ""
},
15: {
text: "A processor used in petrol pumps converts measurements of fuel flow into quantity and price. Extra fact: This makes it a hybrid computing application.",
image: ""
},
16: {
text: "On the basis of size, the computer can be of four types: Microcomputer, Mini Computer, Mainframe computer, Supercomputer. Extra fact: Size classification relates to capacity.",
image: ""
},
17: {
text: "The four types by size are Microcomputer, Mini Computer, Mainframe, Supercomputer. Extra fact: Workstation is a separate specialized category.",
image: ""
},
18: {
text: "Microcomputer is also known as personal computer. Extra fact: It is meant for individual use.",
image: ""
},
19: {
text: "A microcomputer has a microprocessor, memory, storage, input and output units. Extra fact: It is widely available for home use.",
image: ""
},
20: {
text: "A desktop computer is a personal or micro-mini computer sufficient to fit on a desk. Extra fact: It is not portable.",
image: ""
},
21: {
text: "A laptop computer is smaller than a desktop and larger than a notebook. Extra fact: It is portable and foldable.",
image: ""
},
22: {
text: "Palmtop computers have no keyboard but the screen serves as both input and output device. Extra fact: These are pocket-sized devices.",
image: ""
},
23: {
text: "Minicomputers possess most of the features of a large computer but are smaller and used for business and scientific applications. Extra fact: They are midrange systems.",
image: ""
},
24: {
text: "Mainframe computers are designed to support hundreds or thousands of users simultaneously. Extra fact: They are used by banks and telecom companies.",
image: ""
},
25: {
text: "Mainframes can manage and process high volume of data. Extra fact: They support multiple programs at once.",
image: ""
},
26: {
text: "Supercomputers are the biggest and fastest computers and can process trillions of instructions in a second. Extra fact: They are used in scientific modeling.",
image: ""
},
27: {
text: "First supercomputer was developed by Roger Cray in 1976. Extra fact: Cray supercomputers revolutionized computing speed.",
image: ""
},
28: {
text: "Miniframe computer is a midsize multiprocessing computer supporting 4 to 200 users. Extra fact: Used in institutes for billing and accounting.",
image: ""
},
29: {
text: "Workstation is a single user computer designed for technical or scientific applications. Extra fact: They have high-end processors.",
image: ""
},
30: {
text: "Graphics workstation, music workstation and engineering design workstation are types of workstation. Extra fact: Each is optimized for a specialized task.",
image: ""
},
31: {
text: "A general purpose computer can perform an extensive variety of operations. Extra fact: They store and execute different programs.",
image: ""
},
32: {
text: "All mainframes, servers, laptops, desktops, smartphones and tablets are general-purpose devices. Extra fact: They support multiple functions.",
image: ""
},
33: {
text: "Special purpose computers are designed to solve specific problems and have permanently pre-programmed instructions. Extra fact: They cannot perform general tasks.",
image: ""
},
34: {
text: "Aircraft control systems and electronic voting machines are examples of special purpose computers. Extra fact: They are used in mission-critical operations.",
image: ""
}


};