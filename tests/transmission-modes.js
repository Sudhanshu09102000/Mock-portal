const questions = {
1: {
text: "What is the way in which data is transmitted from one device to another called?",
options: ["Transmission mode", "Transfer protocol", "Data mapping", "Channel coding"],
correct: "1",
image: ''
},
2: {
text: "What is another name for transmission mode?",
options: ["Communication mode", "Digital mode", "Logical mode", "Frequency mode"],
correct: "1",
image: ''
},
3: {
text: "How many categories is the transmission mode divided into?",
options: ["Three", "Two", "Four", "Five"],
correct: "1",
image: ''
},
4: {
text: "In which mode is the communication unidirectional?",
options: ["Simplex mode", "Half-duplex mode", "Full-duplex mode", "Parallel mode"],
correct: "1",
image: ''
},
5: {
text: "In which mode can a device only send data but cannot receive it, or only receive data but cannot send it?",
options: ["Simplex mode", "Full-duplex mode", "Half-duplex mode", "Multi-duplex mode"],
correct: "1",
image: ''
},
6: {
text: "Which of the following is a simplex channel?",
options: ["Radio station", "Mobile phone", "Walkie-talkie", "Telephone line"],
correct: "1",
image: ''
},
7: {
text: "Which of the following devices is an example of simplex mode?",
options: ["Keyboard and Monitor", "Router and Switch", "Mouse and Printer", "Modem and Hub"],
correct: "1",
image: ''
},
8: {
text: "What is the main advantage of simplex mode?",
options: ["Full capacity of the communication channel is utilized", "Low latency", "Simultaneous data exchange", "High security"],
correct: "1",
image: ''
},
9: {
text: "In which mode can the direction of data transmission be reversed?",
options: ["Half-duplex mode", "Simplex mode", "Full-duplex mode", "Serial mode"],
correct: "1",
image: ''
},
10: {
text: "In which mode do messages flow in both directions but not at the same time?",
options: ["Half-duplex mode", "Full-duplex mode", "Simplex mode", "Hybrid mode"],
correct: "1",
image: ''
},
11: {
text: "In which mode is the entire bandwidth of the communication channel used in one direction at a time?",
options: ["Half-duplex mode", "Simplex mode", "Full-duplex mode", "Multiplex mode"],
correct: "1",
image: ''
},
12: {
text: "In which mode is error detection possible, allowing the receiver to request retransmission?",
options: ["Half-duplex mode", "Simplex mode", "Full-duplex mode", "Dual mode"],
correct: "1",
image: ''
},
13: {
text: "Which of the following is an example of half-duplex mode?",
options: ["Walkie-talkie", "Radio broadcast", "Telephone call", "Keyboard input"],
correct: "1",
image: ''
},

};


const explanations = {

1: {
text: "The way in which data is transmitted from one device to another is known as transmission mode. This defines how communication occurs between devices. Additionally, transmission methods form the basis of network communication.",
image: ""
},
2: {
text: "Transmission mode is also known as the communication mode. Both terms describe how data transfer occurs between devices. This terminology is commonly used in networking.",
image: ""
},
3: {
text: "The transmission mode is divided into three categories. These three modes define different ways for data flow in a network. They include simplex, half-duplex, and full-duplex.",
image: ""
},
4: {
text: "In simplex mode, the communication is unidirectional, i.e., the data flow in one direction. This mode allows only one-way communication. It is used where feedback is not required.",
image: ""
},
5: {
text: "A device in simplex mode can only send the data but cannot receive it or it can receive the data but cannot send the data. This ensures a strict one-way data flow. Such mechanisms are found in basic data transfer systems.",
image: ""
},
6: {
text: "The radio station is a simplex channel as it transmits the signal to the listeners but never allows them to transmit back. The transmission only occurs from the station to the audience. Radio broadcasting is a classic one-way communication example.",
image: ""
},
7: {
text: "Keyboard and Monitor are examples of the simplex mode as a keyboard can only accept the data from the user and a monitor can only be used to display the data on the screen. These devices operate strictly in one direction. They are widely used in computer systems.",
image: ""
},
8: {
text: "The main advantage of the simplex mode is that the full capacity of the communication channel can be utilized during transmission. Since data moves only one way, efficiency increases. This is beneficial for broadcast systems.",
image: ""
},
9: {
text: "In a Half-duplex channel, direction can be reversed, i.e., the station can transmit and receive the data as well. This mode supports two-way communication but with restrictions. It is commonly used in two-way radios.",
image: ""
},
10: {
text: "Messages flow in both the directions, but not at the same time in half-duplex mode. One device must wait for the other to finish. This prevents simultaneous communication.",
image: ""
},
11: {
text: "The entire bandwidth of the communication channel is utilized in one direction at a time in half-duplex mode. This ensures efficient use of the channel during active transmission. It is useful where alternating communication is sufficient.",
image: ""
},
12: {
text: "In half-duplex mode, it is possible to perform error detection, and if any error occurs, then the receiver requests the sender to retransmit the data. This makes communication more reliable. Error control improves data integrity.",
image: ""
},
13: {
text: "A Walkie-talkie is an example of the half-duplex mode. Users can talk and listen but not simultaneously. Such systems are widely used in security and field operations.",
image: ""
},


};