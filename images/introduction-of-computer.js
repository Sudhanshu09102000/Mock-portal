const questions = {
// Questions part
1: {
text: "What is a computer primarily defined as?",
options: [
"A machine that performs operations using instructions from software or hardware",
"A device mainly used for communication",
"A system only used for calculations",
"A program executed by hardware"
],
correct: "1",
image: ""
},
2: {
text: "What enables a computer to execute various applications and provide solutions?",
options: [
"Combining integrated hardware and software components",
"Using only software components",
"Executing with only hardware parts",
"Using cloud-based services"
],
correct: "1",
image: ""
},
3: {
text: "Which ability is essential for a machine to be considered a computer?",
options: [
"Capability to store large data values",
"Ability to connect to the internet",
"Having graphical user interface",
"Access to sound systems"
],
correct: "1",
image: ""
},
4: {
text: "Which are examples of input and output devices mentioned in computer operation?",
options: [
"Keyboard and printer",
"Monitor and speaker",
"Scanner and microphone",
"Camera and mouse"
],
correct: "1",
image: ""
},
5: {
text: "What does data represent in the context of computer systems?",
options: [
"Facts, concepts, or instructions",
"Only numbers",
"Only text files",
"Only images"
],
correct: "1",
image: ""
},
6: {
text: "How is data represented in computers?",
options: [
"Using characters such as alphabets, digits, and special characters",
"Only binary digits",
"Only pictorial format",
"Using graphs"
],
correct: "1",
image: ""
},
7: {
text: "What is information in computer terminology?",
options: [
"Organized or classified data with meaningful value",
"Raw, unprocessed data",
"Data from external sources",
"Files stored on hard disk"
],
correct: "1",
image: ""
},
8: {
text: "What is the relationship between data and information based on processing?",
options: [
"Data is processed to become information",
"Information creates new data",
"Data always equals information",
"No relation"
],
correct: "1",
image: ""
},
9: {
text: "Which is true regarding data in relation to computers?",
options: [
"Data is meaningless and valueless",
"Data is always valuable",
"Data is always information",
"Data is always accurate"
],
correct: "1",
image: ""
},
10: {
text: "What characterizes information?",
options: [
"It is meaningful and valuable",
"It is always raw",
"It is always incomplete",
"It is always numeric"
],
correct: "1",
image: ""
},
11: {
text: "Which device type supplies processed data as output?",
options: [
"Output devices",
"Input devices",
"Storage devices",
"Networking devices"
],
correct: "1",
image: ""
},
12: {
text: "What is required for processed data to be meaningful?",
options: [
"Timeliness, accuracy, and completeness",
"Encryption",
"Compression",
"Visual representation"
],
correct: "1",
image: ""
},
13: {
text: "What does 'timely' mean with respect to information characteristics?",
options: [
"Available when required",
"Always stored forever",
"Presented in graphical format",
"Only accessible by admin"
],
correct: "1",
image: ""
},
14: {
text: "What does accuracy refer to with information?",
options: [
"Information should be correct",
"Information must be colorful",
"Information never changes",
"Information should be encrypted"
],
correct: "1",
image: ""
},
15: {
text: "What does completeness mean for information?",
options: [
"Information should be complete",
"Information must be limited",
"Information should be summarized",
"Information must be transformed"
],
correct: "1",
image: ""
},
16: {
text: "Which is the simplest workflow of a computer in processing data?",
options: [
"Input → Process → Output",
"Input → Output → Process",
"Output → Input → Store",
"Process → Output → Input"
],
correct: "1",
image: ""
},
// Questions part
17: {
text: "What does the 'input' step in computer workflow involve?",
options: [
"Preparing input data in a convenient form for processing",
"Displaying results to the user",
"Connecting to the internet",
"Encrypting all data"
],
correct: "1",
image: ""
},
18: {
text: "What is the main function of the 'processing' step in a computer?",
options: [
"Changing the input data to produce data in a more useful form",
"Saving data to storage",
"Printing documents",
"Deleting unnecessary files"
],
correct: "1",
image: ""
},
19: {
text: "What does the 'output' stage in computer data processing collect?",
options: [
"The result of the proceeding processing step",
"Raw data directly from the user",
"The original input data",
"Software programs"
],
correct: "1",
image: ""
},
20: {
text: "What is the full form of COMPUTER, as given in the text?",
options: [
"Common Operating Machine Purposely Used for Technological and Educational Research",
"Central Operational Module for Processing User Tasks Effectively and Rapidly",
"Computing Operations Made Perfectly Useful Through Efficient Resources",
"Computer Optimized Management for Purposeful Usage, Testing, and Effective Results"
],
correct: "1",
image: ""
},
    

};



const explanations = {
// Explanations part
1: {
text: "A computer is a machine or device that performs processes, calculations, and operations based on instructions provided by a software or hardware program.",
image: ""
},
2: {
text: "It provides a variety of solutions by combining integrated hardware and software components.",
image: ""
},
3: {
text: "A computer must have the capability to store large data values in its memory.",
image: ""
},
4: {
text: "For input and output, devices like keyboards and printers are typically used in computer operations.",
image: ""
},
5: {
text: "Data can be defined as a representation of facts, concepts, or instructions in a formalized manner suitable for communication, interpretation, or electronic processing.",
image: ""
},
6: {
text: "Data is represented with the help of characters such as alphabets (A-Z, a-z), digits (0-9), or special characters (+, -, *, /, =, <, >, etc.).",
image: ""
},
7: {
text: "Information is organized or classified data that has some meaningful value for the receiver.",
image: ""
},
8: {
text: "Information is processed data on which decisions and actions are based; data input is processed to become output/information.",
image: ""
},
9: {
text: "Data in itself is meaningless and valueless before processing.",
image: ""
},
10: {
text: "Information is meaningful and valuable for the receiver after data is processed.",
image: ""
},
11: {
text: "Output devices supply the processed data or information as output.",
image: ""
},
12: {
text: "For processing to be meaningful, the data must meet characteristics such as timeliness, accuracy, and completeness.",
image: ""
},
13: {
text: "Timely means that information should be available when required.",
image: ""
},
14: {
text: "Accuracy means that information should be correct.",
image: ""
},
15: {
text: "Completeness means that information should be complete.",
image: ""
},
16: {
text: "The simplest workflow of a computer involves input, process, and output steps.",
image: ""
},
    17: {
text: "In the input step, the input data is prepared in some convenient form for processing, depending on the processing machine.",
image: ""
},
18: {
text: "In the processing step, the input data is changed to produce data in a more useful form.",
image: ""
},
19: {
text: "At the output stage, the result of the proceeding processing step is collected. The particular form of output data depends on its use.",
image: ""
},
20: {
text: "The full form of COMPUTER is Common Operating Machine Purposely Used for Technological and Educational Research.",
image: ""
},
21: {
text: "Primitive people used sticks, stones, and bones as counting tools.",
image: ""
},
22: {
text: "As human mind and technology improved over time, more computing devices were developed.",
image: ""
},
23: {
text: "The history of computer begins with the birth of abacus, which is believed to be the first computer.",
image: ""
},
24: {
text: "It is said that the Chinese invented the abacus around 4,000 years ago.",
image: ""
},
25: {
text: "The abacus was a wooden rack with metal rods and beads mounted on them.",
image: ""
},
26: {
text: "The beads were moved by the abacus operator according to some rules to perform arithmetic calculations.",
image: ""
},
27: {
text: "Abacus is still used in some countries like China, Russia, and Japan.",
image: ""
},
    
// Explanations part
28: {
text: "Napier’s Bones was invented by John Napier (1550-1617) of Merchiston.",
image: ""
},
29: {
text: "Napier’s Bones was a manually-operated calculating device.",
image: ""
},
30: {
text: "In Napier’s Bones, 9 different ivory strips or bones are used, marked with numbers for multiplying and dividing.",
image: ""
},
31: {
text: "Napier’s Bones was used to multiply and divide numbers.",
image: ""
},
32: {
text: "Napier’s Bones was the first machine to use the decimal point.",
image: ""
},
33: {
text: "Pascaline is also known as Arithmetic Machine or Adding Machine.",
image: ""
},
34: {
text: "Pascaline was invented between 1642 and 1644 by Blaise Pascal, a French mathematician-philosopher.",
image: ""
},
35: {
text: "Pascaline is believed to be the first mechanical and automatic calculator.",
image: ""
},
36: {
text: "Pascaline was a wooden box with a series of gears and wheels.",
image: ""
},
37: {
text: "When a wheel in the Pascaline was rotated one revolution, it rotated the neighboring wheel. This mechanism enabled addition and subtraction.",
image: ""
},
38: {
text: "A series of windows on the top of the wheels in the Pascaline displayed the totals.",
image: ""
},
// Explanations part
39: {
text: "The Stepped Reckoner or Leibnitz Wheel was developed by German mathematician-philosopher Gottfried Wilhelm Leibnitz in 1673.",
image: ""
},
40: {
text: "The Stepped Reckoner was invented in the year 1673.",
image: ""
},
41: {
text: "It was a digital mechanical calculator made of fluted drums.",
image: ""
},
42: {
text: "Leibnitz improved Pascal's invention to develop the Stepped Reckoner.",
image: ""
},
43: {
text: "Charles Babbage is known as the Father of Modern Computer.",
image: ""
},
44: {
text: "The Difference Engine was designed to solve tables of numbers like logarithm tables.",
image: ""
},
45: {
text: "The Difference Engine was a steam-driven calculating machine.",
image: ""
},
46: {
text: "The Difference Engine was invented in the early 1820s.",
image: ""
},



// Explanations part
47: {
text: "The Analytical Engine was developed by Charles Babbage.",
image: ""
},
48: {
text: "Charles Babbage developed the Analytical Engine in 1830.",
image: ""
},
49: {
text: "The Analytical Engine was a mechanical computer that used punch cards as input.",
image: ""
},
50: {
text: "The Analytical Engine was capable of solving any mathematical problem and storing information as permanent memory.",
image: ""
},
51: {
text: "The Tabulating Machine was invented by Herman Hollerith in 1890.",
image: ""
},
52: {
text: "The Tabulating Machine could tabulate statistics and record or sort data or information using punch cards.",
image: ""
},
53: {
text: "The Tabulating Machine was used in the 1890 U.S. Census.",
image: ""
},
54: {
text: "Hollerith's Tabulating Machine Company later became International Business Machine (IBM) in 1924.",
image: ""
},
    

// Explanations part
55: {
text: "The first electronic computer introduced in the United States in 1930 was the Differential Analyzer.",
image: ""
},
56: {
text: "The Differential Analyzer was invented by Vannevar Bush.",
image: ""
},
57: {
text: "The Differential Analyzer was an analog device.",
image: ""
},
58: {
text: "The Differential Analyzer used vacuum tubes to switch electrical signals for performing calculations.",
image: ""
},
59: {
text: "The Differential Analyzer could do 25 calculations in a few minutes.",
image: ""
},
60: {
text: "In 1937, Howard Aiken planned to develop the Mark I computer.",
image: ""
},
61: {
text: "The Mark I computer was produced in 1944 through a partnership between IBM and Harvard.",
image: ""
},
62: {
text: "The Mark I was the first programmable digital computer.",
image: ""
},
63: {
text: "Mark I could perform calculations involving large numbers, marking a major change in computing history.",
image: ""
},
    

    
    
    
};