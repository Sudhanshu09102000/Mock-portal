window.TEST_DATA = {
  "1": {
    "questext": "What is a combinational circuit?",
    "options": [
      "A circuit that combines different gates such as encoder, decoder, multiplexer and demultiplexer",
      "A circuit that stores data",
      "A circuit that only performs addition",
      "A circuit with feedback loops"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "Combinational circuit is a circuit in which we combine the different gates in the circuit, for example encoder, decoder, multiplexer and demultiplexer. Combinational circuits perform logical operations without memory.",
    "expimage": ""
  },
  "2": {
    "questext": "How many inputs and outputs does a Half Adder have?",
    "options": [
      "Two inputs and two outputs",
      "Three inputs and one output",
      "One input and two outputs",
      "Two inputs and one output"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "Half adder is a combinational logic circuit with two inputs and two outputs.",
    "expimage": ""
  },
  "3": {
    "questext": "What is the purpose of a Half Adder?",
    "options": [
      "To add two single bit binary numbers A and B",
      "To store data temporarily",
      "To subtract two numbers",
      "To multiply two numbers"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "The half adder circuit is designed to add two single bit binary numbers A and B. It is the basic building block for addition of two single bit numbers.",
    "expimage": ""
  },
  "4": {
    "questext": "What are the outputs of a Half Adder circuit?",
    "options": [
      "Carry and Sum",
      "Input and Output",
      "Data and Control",
      "High and Low"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "This circuit has two outputs carry and sum.",
    "expimage": ""
  },
  "5": {
    "questext": "Why was the Full Adder developed?",
    "options": [
      "To overcome the drawback of Half Adder circuit",
      "To store data",
      "To act as a multiplexer",
      "To perform encoding"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "Full adder is developed to overcome the drawback of Half Adder circuit.",
    "expimage": ""
  },
  "6": {
    "questext": "How many inputs and outputs does a Full Adder have?",
    "options": [
      "Three inputs and two outputs",
      "Two inputs and two outputs",
      "One input and one output",
      "Four inputs and three outputs"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "It can add two one-bit numbers A and B, and carry c. The full adder is a three input and two output combinational circuit.",
    "expimage": ""
  },
  "7": {
    "questext": "What is a Multiplexer?",
    "options": [
      "A digital circuit with n-data inputs, one output, and m select inputs",
      "A circuit that stores data",
      "A circuit with only one input and one output",
      "A circuit that adds two numbers"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "Multiplexer is a special type of combinational circuit. It is a digital circuit which selects one of the n data inputs and routes it to the output.",
    "expimage": ""
  },
  "8": {
    "questext": "What is the relation between n data inputs and m select inputs in a Multiplexer?",
    "options": [
      "2^m = n",
      "n = m",
      "n + m = 2",
      "n - m = 1"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "There are n-data inputs, one output and m select inputs with 2^m = n.",
    "expimage": ""
  },
  "9": {
    "questext": "What operation does a Demultiplexer perform?",
    "options": [
      "Receives one input and distributes it over several outputs",
      "Combines multiple inputs into one output",
      "Performs addition of binary numbers",
      "Stores data temporarily"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "A demultiplexer performs the reverse operation of a multiplexer i.e. it receives one input and distributes it over several outputs.",
    "expimage": ""
  },
  "10": {
    "questext": "How many inputs, outputs, and select inputs does a Demultiplexer have?",
    "options": [
      "One input, n outputs, m select inputs",
      "Two inputs, one output",
      "Three inputs, two outputs",
      "n inputs, one output, m select inputs"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "It has only one input, n outputs, m select input.",
    "expimage": ""
  },
  "11": {
    "questext": "What is a Decoder in combinational circuits?",
    "options": [
      "A circuit with n input and up to 2^n outputs, opposite of encoder",
      "A circuit that adds two numbers",
      "A storage circuit",
      "A circuit with one input and multiple outputs only"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "A decoder is a combinational circuit. It has n input and to a maximum m = 2^n outputs. Decoder is identical to a demultiplexer without any data input. It performs operations which are exactly opposite to those of an encoder.",
    "expimage": ""
  },
  "12": {
    "questext": "How is a Decoder related to a Demultiplexer?",
    "options": [
      "Identical to a Demultiplexer without any data input",
      "It stores data like a Demultiplexer",
      "It multiplies data like a Demultiplexer",
      "It subtracts data like a Demultiplexer"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "Decoder is identical to a demultiplexer without any data input.",
    "expimage": ""
  },
  "13": {
    "questext": "What is an Encoder?",
    "options": [
      "A combinational circuit performing inverse operation of Decoder",
      "A circuit that multiplies numbers",
      "A circuit storing data",
      "A circuit with feedback"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "Encoder is a combinational circuit which is designed to perform the inverse operation of the decoder.",
    "expimage": ""
  },
  "14": {
    "questext": "How many input and output lines does an Encoder have?",
    "options": [
      "n input lines and m output lines",
      "Two input lines and two output lines",
      "One input and n output lines",
      "m input lines and n output lines"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "An encoder has n number of input lines and m number of output lines.",
    "expimage": ""
  },
  "15": {
    "questext": "What is a Priority Encoder?",
    "options": [
      "An encoder that gives priority to input lines when two or more are 1",
      "A decoder with multiple outputs",
      "A full adder circuit",
      "A storage device"
    ],
    "correct": "1",
    "quesimage": "",
    "exptext": "This is a special type of encoder. Priority is given to the input lines. If two or more input line are 1 at the same time, then the input line with highest priority will be considered.",
    "expimage": ""
  }
};