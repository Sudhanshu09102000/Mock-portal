const questions = {
1: {
text: "What does OSI stand for in computer networking?",
options: ["Open System Interconnection", "Open Software Integration", "Operating System Interface", "Open System Interaction"],
correct: "1",
image: ''
},
2: {
text: "What does the OSI reference model describe?",
options: ["How information moves from a software application in one computer to another through a physical medium", "How software is installed on different computers", "How hardware devices connect internally", "How power is supplied to network devices"],
correct: "1",
image: ''
},
3: {
text: "Which organization developed the OSI model?",
options: ["International Organization for Standardization (ISO)", "Institute of Electrical Engineers (IEE)", "Internet Society (ISOC)", "Computer Networking Consortium (CNC)"],
correct: "1",
image: ''
},
4: {
text: "In which year was the OSI model developed?",
options: ["1984", "1991", "1978", "2000"],
correct: "1",
image: ''
},
5: {
text: "How many layers does the OSI model consist of?",
options: ["Seven layers", "Five layers", "Three layers", "Nine layers"],
correct: "1",
image: ''
},
6: {
text: "Which layer of the OSI model physically connects two systems?",
options: ["Physical layer", "Network layer", "Transport layer", "Application layer"],
correct: "1",
image: ''
},
7: {
text: "At which unit does the Physical layer transmit data?",
options: ["Bits", "Frames", "Segments", "Packets"],
correct: "1",
image: ''
},
8: {
text: "Which OSI layer manages the hardware interface of the Network Interface Card?",
options: ["Physical layer", "Data link layer", "Transport layer", "Session layer"],
correct: "1",
image: ''
},
9: {
text: "Which OSI layer is considered the firmware layer of the Network Interface Card?",
options: ["Data link layer", "Network layer", "Application layer", "Presentation layer"],
correct: "1",
image: ''
},
10: {
text: "Which layer assembles datagrams into frames and adds start and stop flags?",
options: ["Data link layer", "Transport layer", "Physical layer", "Application layer"],
correct: "1",
image: ''
},
11: {
text: "Which OSI layer resolves problems caused by damaged, lost, or duplicate frames?",
options: ["Data link layer", "Network layer", "Session layer", "Application layer"],
correct: "1",
image: ''
},
12: {
text: "Routing, switching, and controlling flow of information between workstations is done at which layer?",
options: ["Network layer", "Data link layer", "Session layer", "Application layer"],
correct: "1",
image: ''
},
13: {
text: "Which layer breaks down transport layer datagrams into smaller datagrams?",
options: ["Network layer", "Physical layer", "Presentation layer", "Application layer"],
correct: "1",
image: ''
},
14: {
text: "Which layer breaks a file into data frames and provides error checking at the network segment level?",
options: ["Transport layer", "Data link layer", "Session layer", "Network layer"],
correct: "1",
image: ''
},
15: {
text: "Which layer prevents a fast host from overrunning a slower one?",
options: ["Transport layer", "Network layer", "Physical layer", "Presentation layer"],
correct: "1",
image: ''
},
16: {
text: "Which layer isolates the upper layers from network hardware?",
options: ["Transport layer", "Physical layer", "Application layer", "Data link layer"],
correct: "1",
image: ''
},
17: {
text: "Which layer establishes a session between two workstations wanting to exchange data?",
options: ["Session layer", "Presentation layer", "Network layer", "Physical layer"],
correct: "1",
image: ''
},
18: {
text: "Which OSI layer deals with the correct representation of data including syntax and semantics?",
options: ["Presentation layer", "Session layer", "Data link layer", "Network layer"],
correct: "1",
image: ''
},
19: {
text: "Which layer controls file-level security and converts data to network standards?",
options: ["Presentation layer", "Transport layer", "Network layer", "Physical layer"],
correct: "1",
image: ''
},
20: {
text: "Which is the topmost layer of the OSI model responsible for sending application requests?",
options: ["Application layer", "Transport layer", "Network layer", "Session layer"],
correct: "1",
image: ''
},
21: {
text: "Which layer includes applications such as file transfer, email, remote logon, and data entry?",
options: ["Application layer", "Physical layer", "Network layer", "Session layer"],
correct: "1",
image: ''
},
22: {
text: "What does TCP/IP stand for?",
options: ["Transmission Control Protocol/Internet Protocol", "Transfer Communication Protocol/Internal Process", "Tele Communication Program/Internet Package", "Transport Core Protocol/Internal Path"],
correct: "1",
image: ''
},
23: {
text: "What type of model is followed in the TCP/IP communication suite?",
options: ["Client-server model", "Peer-to-peer model", "Ring model", "Star model"],
correct: "1",
image: ''
},
24: {
text: "In TCP/IP communication, what is a computer called that sends a request?",
options: ["Client", "Server", "Gateway", "Router"],
correct: "1",
image: ''
},
25: {
text: "Which protocol handles file transfer requests?",
options: ["FTP", "HTTP", "SMTP", "POP3"],
correct: "1",
image: ''
},
26: {
text: "For what primary purpose did networks initially emerge?",
options: ["Sharing files between researchers", "Video conferencing", "Online gaming", "Remote hardware installation"],
correct: "1",
image: ''
},
27: {
text: "Which protocol enables TCP/IP traffic transmission over serial connections such as telephone lines?",
options: ["PPP", "FTP", "SMTP", "DHCP"],
correct: "1",
image: ''
}


};


const explanations = {
1: {
text: "OSI stands for Open System Interconnection. It is a reference model describing how information moves from a software application in one computer through a physical medium to the software application in another computer.",
image: ""
},
2: {
text: "The OSI model describes how information from a software application in one computer moves through a physical medium to the software application in another computer.",
image: ""
},
3: {
text: "The OSI model was developed by the International Organization for Standardization (ISO).",
image: ""
},
4: {
text: "The OSI model was developed in 1984 by the International Organization for Standardization.",
image: ""
},
5: {
text: "The OSI model consists of seven layers, each performing a specific network function.",
image: ""
},
6: {
text: "The Physical layer is the first OSI layer and physically connects the two systems that need to communicate.",
image: ""
},
7: {
text: "The Physical layer transmits data in bits and manages simplex or duplex transmission.",
image: ""
},
8: {
text: "The Physical layer manages the Network Interface Card’s hardware interface including cabling, terminators, topography, and voltage levels.",
image: ""
},
9: {
text: "The Data link layer is the firmware layer of the Network Interface Card.",
image: ""
},
10: {
text: "The Data link layer assembles datagrams into frames and adds start and stop flags to each frame.",
image: ""
},
11: {
text: "The Data link layer resolves problems caused by damaged, lost, or duplicate frames.",
image: ""
},
12: {
text: "The Network layer manages routing, switching, and controlling the flow of information between workstations.",
image: ""
},
13: {
text: "The Network layer breaks down transport layer datagrams into smaller datagrams.",
image: ""
},
14: {
text: "The Transport layer breaks a file into data frames and provides error checking at the network segment level.",
image: ""
},
15: {
text: "The Transport layer prevents a fast host from overrunning a slower one.",
image: ""
},
16: {
text: "The Transport layer isolates the upper layers from network hardware.",
image: ""
},
17: {
text: "The Session layer establishes a session between two workstations that want to exchange data.",
image: ""
},
18: {
text: "The Presentation layer handles the correct representation of data, including syntax and semantics.",
image: ""
},
19: {
text: "The Presentation layer controls file-level security and converts data to network standards.",
image: ""
},
20: {
text: "The Application layer is the topmost layer responsible for sending application requests to lower levels.",
image: ""
},
21: {
text: "The Application layer supports applications such as file transfer, email, remote logon, and data entry.",
image: ""
},
22: {
text: "TCP/IP stands for Transmission Control Protocol/Internet Protocol. It is a set of layered protocols used for communication over the Internet.",
image: ""
},
23: {
text: "The TCP/IP communication suite follows the client-server model.",
image: ""
},
24: {
text: "In TCP/IP communication, the computer that sends a request is the client.",
image: ""
},
25: {
text: "FTP is the File Transfer Protocol that handles file transfer requests.",
image: ""
},
26: {
text: "Networking initially emerged to facilitate sharing of files between researchers.",
image: ""
},
27: {
text: "PPP is the Point to Point Protocol that enables TCP/IP transmission over serial connections such as telephone lines.",
image: ""
}


};