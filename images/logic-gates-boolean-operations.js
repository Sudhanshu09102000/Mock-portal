const questions = {
1: {
text: "What are logic gates primarily considered in a digital system?",
options: ["Main structural part", "Peripheral device", "Memory unit", "Input device"],
correct: "1",
image: ''
},
2: {
text: "Logic gates produce signals of which type when input logic requirements are satisfied?",
options: ["Binary 1 or 0", "Analog voltage", "Decimal values", "Random signals"],
correct: "1",
image: ''
},
3: {
text: "How can the operation of a logic gate be described?",
options: ["Algebraic expressions", "Numerical codes", "Chemical formula", "Mechanical diagrams"],
correct: "1",
image: ''
},
4: {
text: "How many basic logic gates are there?",
options: ["Seven", "Five", "Six", "Eight"],
correct: "1",
image: ''
},
5: {
text: "Which of the following is NOT a basic logic gate?",
options: ["Buffer", "AND", "OR", "XOR"],
correct: "1",
image: ''
},
6: {
text: "How is the relationship between input and output binary variables represented for each gate?",
options: ["Truth table", "Bar graph", "Flowchart", "Equation only"],
correct: "1",
image: ''
},
7: {
text: "What are the typical designations for the input variables of a logic gate?",
options: ["A and B", "X and Y", "P and Q", "M and N"],
correct: "1",
image: ''
},
8: {
text: "What is the output variable of a logic gate usually designated as?",
options: ["x", "y", "z", "o"],
correct: "1",
image: ''
},
9: {
text: "When does an AND gate give a high output?",
options: ["Only if all inputs are high", "If any input is high", "Always low", "Always high"],
correct: "1",
image: ''
},
10: {
text: "Which symbol represents the AND operation in Boolean algebra?",
options: ["Dot (.)", "Plus (+)", "Dash (-)", "Encircled plus"],
correct: "1",
image: ''
},
11: {
text: "When does an OR gate give a high output?",
options: ["If one or more inputs are high", "Only if all inputs are high", "Always low", "Always high"],
correct: "1",
image: ''
},
12: {
text: "Which symbol represents the OR operation in Boolean algebra?",
options: ["Plus (+)", "Dot (.)", "Small circle", "Encircled plus"],
correct: "1",
image: ''
},
13: {
text: "What is another name for a NOT gate?",
options: ["Inverter", "Amplifier", "Comparator", "Buffer"],
correct: "1",
image: ''
},
14: {
text: "What does a NAND gate combine?",
options: ["AND gate followed by NOT gate", "OR gate followed by NOT gate", "Two AND gates", "Two OR gates"],
correct: "1",
image: ''
},
15: {
text: "When does a NAND gate give a high output?",
options: ["If any of the inputs are low", "Only if all inputs are high", "Always high", "Always low"],
correct: "1",
image: ''
},
16: {
text: "What does the small circle on a NAND gate represent?",
options: ["Inversion", "Addition", "Multiplication", "Buffering"],
correct: "1",
image: ''
},
17: {
text: "What does a NOR gate combine?",
options: ["OR gate followed by NOT gate", "AND gate followed by NOT gate", "Two OR gates", "Two AND gates"],
correct: "1",
image: ''
},
18: {
text: "When does a NOR gate give a low output?",
options: ["If any of the inputs are high", "Only if all inputs are high", "Always low", "Always high"],
correct: "1",
image: ''
},
19: {
text: "What does the small circle on a NOR gate represent?",
options: ["Inversion", "Addition", "Multiplication", "Buffering"],
correct: "1",
image: ''
},
20: {
text: "When does an XOR gate give a high output?",
options: ["If one input is high but not both", "If all inputs are high", "Always high", "Always low"],
correct: "1",
image: ''
},
21: {
text: "Which symbol represents the XOR operation?",
options: ["Encircled plus sign", "Dot (.)", "Plus (+)", "Small circle"],
correct: "1",
image: ''
},
22: {
text: "What is the output of an XNOR gate compared to XOR?",
options: ["Inverse of XOR output", "Same as XOR output", "Always high", "Always low"],
correct: "1",
image: ''
},
23: {
text: "Boolean algebra deals with which type of variables?",
options: ["Binary variables", "Decimal variables", "Analog signals", "Hexadecimal numbers"],
correct: "1",
image: ''
},
24: {
text: "Which letters are typically used as Boolean algebraic variables?",
options: ["A, B, x, y", "P, Q, R, S", "M, N, O, P", "X, Y, Z, W"],
correct: "1",
image: ''
},
25: {
text: "Which are the basic operations performed in Boolean algebra?",
options: ["AND, OR, complement", "Addition, subtraction, multiplication", "Division, subtraction, OR", "Exponentiation, AND, OR"],
correct: "1",
image: ''
},
26: {
text: "Boolean algebraic functions are expressed with which elements?",
options: ["Binary variables, operation symbols, parentheses, equal sign", "Only binary variables", "Only numbers", "Decimal variables and operators"],
correct: "1",
image: ''
},
27: {
text: "For a given value of variables, what can a Boolean function be?",
options: ["1 or 0", "Any number", "Only 0", "Only 1"],
correct: "1",
image: ''
}


};


const explanations = {
1: {
text: "Logic gates are the main structural part of a digital system.",
image: ""
},
2: {
text: "Logic Gates are a block of hardware that produces signals of binary 1 or 0 when input logic requirements are satisfied.",
image: ""
},
3: {
text: "Each gate has a distinct graphic symbol, and its operation can be described by means of algebraic expressions.",
image: ""
},
4: {
text: "The seven basic logic gates includes: AND, OR, XOR, NOT, NAND, NOR, and XNOR.",
image: ""
},
5: {
text: "Buffer is not a basic logic gate; basic gates are AND, OR, XOR, NOT, NAND, NOR, and XNOR.",
image: ""
},
6: {
text: "The relationship between the input-output binary variables for each gate can be represented in tabular form by a truth table.",
image: ""
},
7: {
text: "Each gate has one or two binary input variables designated by A and B.",
image: ""
},
8: {
text: "Each gate has one binary output variable designated by x.",
image: ""
},
9: {
text: "The AND gate is an electronic circuit which gives a high output only if all its inputs are high.",
image: ""
},
10: {
text: "The AND operation is represented by a dot (.) sign.",
image: ""
},
11: {
text: "The OR gate is an electronic circuit which gives a high output if one or more of its inputs are high.",
image: ""
},
12: {
text: "The operation performed by an OR gate is represented by a plus (+) sign.",
image: ""
},
13: {
text: "The NOT gate is an electronic circuit which produces an inverted version of the input at its output. It is also known as an Inverter.",
image: ""
},
14: {
text: "The NOT-AND (NAND) gate is equal to an AND gate followed by a NOT gate.",
image: ""
},
15: {
text: "The NAND gate gives a high output if any of the inputs are low.",
image: ""
},
16: {
text: "The small circle on a NAND gate represents inversion.",
image: ""
},
17: {
text: "The NOT-OR (NOR) gate is equal to an OR gate followed by a NOT gate.",
image: ""
},
18: {
text: "The NOR gate gives a low output if any of the inputs are high.",
image: ""
},
19: {
text: "The small circle on a NOR gate represents inversion.",
image: ""
},
20: {
text: "The 'Exclusive-OR' gate gives a high output if one of its inputs is high but not both of them.",
image: ""
},
21: {
text: "The XOR operation is represented by an encircled plus sign.",
image: ""
},
22: {
text: "The 'Exclusive-NOR' gate does the inverse operation to the XOR gate.",
image: ""
},
23: {
text: "Boolean algebra deals with binary variables and logic operations.",
image: ""
},
24: {
text: "Boolean algebraic variables are designated by letters such as A, B, x, and y.",
image: ""
},
25: {
text: "The basic operations performed in Boolean algebra are AND, OR, and complement.",
image: ""
},
26: {
text: "Boolean algebraic functions are mostly expressed with binary variables, logic operation symbols, parentheses, and equal sign.",
image: ""
},
27: {
text: "For a given value of variables, the Boolean function can be either 1 or 0.",
image: ""
}


};