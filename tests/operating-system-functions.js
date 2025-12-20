const questions = {
1: {
"text": "What is an operating system primarily an interface between?",
"options": ["User and computer hardware", "User and computer software only", "CPU and secondary memory", "Monitor and keyboard"],
"correct": "1",
"image": ""
},
2: {
"text": "Which basic task is performed by an operating system?",
"options": ["File management", "Compiling programs", "Designing hardware", "Executing BIOS updates"],
"correct": "1",
"image": ""
},
3: {
"text": "Which of the following is NOT listed as a popular operating system?",
"options": ["Photoshop OS", "Linux", "Windows", "AIX"],
"correct": "1",
"image": ""
},
4: {
"text": "Which of the following is a function of an operating system?",
"options": ["Memory management", "Web browsing", "Typing assistance", "Image editing"],
"correct": "1",
"image": ""
},
5: {
"text": "Which function of the operating system manages the main memory?",
"options": ["Memory management", "File management", "Security management", "Job accounting"],
"correct": "1",
"image": ""
},
6: {
"text": "What is the operating system responsible for in a multiprogramming environment regarding memory?",
"options": ["Deciding which process gets memory and how much", "Designing RAM modules", "Printing memory layout maps", "Managing secondary storage partitions"],
"correct": "1",
"image": ""
},
7: {
"text": "What does the OS do when a process no longer needs memory?",
"options": ["De-allocates memory", "Compresses memory", "Formats memory", "Encrypts memory"],
"correct": "1",
"image": ""
},
8: {
"text": "What is the OS function called that decides which process gets the processor and for how long?",
"options": ["Process scheduling", "Process imaging", "Thread filtering", "Resource mirroring"],
"correct": "1",
"image": ""
},
9: {
"text": "Which component keeps track of the processor and process status?",
"options": ["Traffic controller", "Memory mapper", "File handler", "Boot loader"],
"correct": "1",
"image": ""
},
10: {
"text": "What does the OS do when a process no longer requires the CPU?",
"options": ["De-allocates the processor", "Reformats the CPU", "Overclocks the processor", "Deletes the process history"],
"correct": "1",
"image": ""
},
11: {
"text": "How does an operating system manage device communication?",
"options": ["Via device drivers", "Using compiler modules", "Through BIOS scripting", "By deleting unused drivers"],
"correct": "1",
"image": ""
},
12: {
"text": "Which program keeps track of all devices for the operating system?",
"options": ["I/O controller", "Traffic controller", "Disk scheduler", "Memory registrar"],
"correct": "1",
"image": ""
},
13: {
"text": "What does the OS do when a device is no longer required by a process?",
"options": ["De-allocates the device", "Deletes the device", "Formats the device", "Shuts down the system"],
"correct": "1",
"image": ""
},
14: {
"text": "What is a file system normally organized into for easy navigation?",
"options": ["Directories", "Registers", "Sectors", "Clusters"],
"correct": "1",
"image": ""
},
15: {
"text": "Which activity of the OS involves keeping track of information, location, uses, and status of files?",
"options": ["File management", "Memory allocation", "Boot loading", "Disk formatting"],
"correct": "1",
"image": ""
},
16: {
"text": "What does the operating system do when a user or process no longer needs file-related resources?",
"options": ["De-allocates the resources", "Formats the disk", "Encrypts the file", "Creates backup images"],
"correct": "1",
"image": ""
},
17: {
"text": "Which method is used by an operating system to prevent unauthorized access to programs and data?",
"options": ["Passwords", "Barcodes", "Magnetic strips", "Optical labels"],
"correct": "1",
"image": ""
},
18: {
"text": "What does the OS record to control system performance?",
"options": ["Delays between request and response", "Temperature logs", "Cache hit rate", "Display brightness"],
"correct": "1",
"image": ""
},
19: {
"text": "What does job accounting keep track of?",
"options": ["Time and resources used by various jobs and users", "Power consumption of hardware", "Number of files stored", "CPU voltage levels"],
"correct": "1",
"image": ""
},
20: {
"text": "Which OS activity involves production of dumps, traces, and error messages?",
"options": ["Error detecting aids", "Device allocation", "Memory swapping", "Process logging"],
"correct": "1",
"image": ""
},
21: {
"text": "What does the OS coordinate among users, compilers, interpreters, and assemblers?",
"options": ["Assignment of software resources", "Creation of antivirus logs", "Keyboard mapping", "Hard disk partitioning"],
"correct": "1",
"image": ""
},
22: {
"text": "In a batch operating system, how do users submit their jobs?",
"options": ["On off-line devices like punch cards", "Through touch screens", "Through cloud servers", "Via email"],
"correct": "1",
"image": ""
},
23: {
"text": "In batch operating systems, how are jobs with similar needs executed?",
"options": ["Batched together and run as a group", "Executed one by one immediately", "Sent over the internet", "Encrypted and queued randomly"],
"correct": "1",
"image": ""
},
24: {
"text": "What technique enables many people at various terminals to use a computer system simultaneously?",
"options": ["Time-sharing", "Batching", "Pipelining", "Segmentation"],
"correct": "1",
"image": ""
},
25: {
"text": "Processor time shared among multiple users simultaneously refers to which concept?",
"options": ["Time-sharing", "Disk scheduling", "Demand paging", "Instruction pipelining"],
"correct": "1",
"image": ""
},
26: {
"text": "In multiprogramming, the CPU remains busy because processes alternate between which two states?",
"options": ["CPU time and I/O time", "Ready time and sleep time", "Boot time and shutdown time", "Cache time and buffer time"],
"correct": "1",
"image": ""
},
27: {
"text": "What is achieved in multiprocessing systems?",
"options": ["Parallel computing", "Sequential execution only", "Single-task operations", "Reduced processor count"],
"correct": "1",
"image": ""
},
28: {
"text": "What increases when multiple processors execute multiple processes simultaneously in multiprocessing systems?",
"options": ["Throughput", "Latency", "Fragmentation", "Cache miss rate"],
"correct": "1",
"image": ""
},
29: {
"text": "Distributed systems use multiple central processors to serve what type of applications?",
"options": ["Multiple real-time applications", "Only gaming applications", "Only batch jobs", "Only graphics applications"],
"correct": "1",
"image": ""
},
30: {
"text": "What are distributed systems also referred to as?",
"options": ["Loosely coupled systems", "Tightly bound systems", "Mono-processor systems", "Serial computing systems"],
"correct": "1",
"image": ""
},    31: {
"text": "What is the primary purpose of a network operating system?",
"options": ["To allow shared file and printer access among multiple computers", "To design hardware circuits", "To perform only batch processing", "To monitor CPU temperature"],
"correct": "1",
"image": ""
},
32: {
"text": "A real-time operating system is defined as a system where the response time is:",
"options": ["Very small to control the environment", "Extremely long and delayed", "Only during booting", "Irrelevant for process execution"],
"correct": "1",
"image": ""
},
33: {
"text": "Which type of real-time system guarantees critical tasks complete on time?",
"options": ["Hard real-time system", "Soft real-time system", "Batch processing system", "Multitasking system"],
"correct": "1",
"image": ""
},
34: {
"text": "In hard real-time systems, where is the data mostly stored?",
"options": ["ROM", "Secondary storage", "Cloud storage", "Virtual memory only"],
"correct": "1",
"image": ""
},
35: {
"text": "Which real-time system gives priority to critical tasks but is less restrictive overall?",
"options": ["Soft real-time system", "Hard real-time system", "Batch operating system", "Network operating system"],
"correct": "1",
"image": ""
},
36: {
"text": "Batch processing involves which technique?",
"options": ["Collecting programs and data together before processing starts", "Executing each program immediately", "Running tasks on multiple CPUs simultaneously", "Storing files in ROM"],
"correct": "1",
"image": ""
},
37: {
"text": "What is multitasking in an operating system?",
"options": ["Executing multiple jobs by switching between them", "Running only one program at a time", "Processing files in batch", "Storing data in firmware"],
"correct": "1",
"image": ""
},
38: {
"text": "In multitasking, a program loaded into memory and executing is called a:",
"options": ["Process", "Thread", "Batch", "Driver"],
"correct": "1",
"image": ""
},
39: {
"text": "What does spooling refer to in operating systems?",
"options": ["Putting data of various I/O jobs in a buffer", "Storing CPU instructions in ROM", "Executing batch jobs sequentially", "Updating middleware software"],
"correct": "1",
"image": ""
},
40: {
"text": "What is the process of loading the operating system when the computer starts called?",
"options": ["Booting", "Spooling", "Multitasking", "Middleware"],
"correct": "1",
"image": ""
},
41: {
"text": "Turning ON a computer from an OFF position is known as:",
"options": ["Cold Boot", "Warm Boot", "Soft Boot", "Hard Boot"],
"correct": "1",
"image": ""
},
42: {
"text": "Restarting a computer from a powerless state is called:",
"options": ["Warm Boot", "Cold Boot", "Batch Boot", "Network Boot"],
"correct": "1",
"image": ""
},
43: {
"text": "Firmware is best described as:",
"options": ["Software written to a hardware device", "Temporary RAM data", "File management tool", "Network driver only"],
"correct": "1",
"image": ""
},
44: {
"text": "Middleware is:",
"options": ["A software layer between applications and operating systems", "A type of firmware", "A batch processing tool", "A hardware component"],
"correct": "1",
"image": ""
},

};


const explanations = {
1: {
"text": "An operating system is an interface between computer user and computer hardware. This means it connects users with the machine’s physical components.",
"image": ""
},
2: {
"text": "An operating system performs basic tasks like file management, memory management, process management, handling input and output, and controlling peripheral devices. File management is one of these tasks.",
"image": ""
},
3: {
"text": "Popular operating systems include Linux, Windows, VMS, OS/400, AIX, and z/OS. Photoshop OS is not listed among them.",
"image": ""
},
4: {
"text": "Functions of an operating system include memory management, processor management, device management, file management, security, control over system performance, job accounting, error detecting aids, and coordination between software and users. Memory management is one of these functions.",
"image": ""
},
5: {
"text": "Memory management refers to management of primary memory or main memory. This function is called memory management.",
"image": ""
},
6: {
"text": "In multiprogramming, the OS decides which process will get memory when and how much. This is a core responsibility of memory management.",
"image": ""
},
7: {
"text": "An operating system de-allocates the memory when a process no longer needs it or has been terminated. This frees memory for other processes.",
"image": ""
},
8: {
"text": "In multiprogramming environments, the OS decides which process gets the processor when and for how much time. This function is called process scheduling.",
"image": ""
},
9: {
"text": "The OS keeps track of the processor and status of process. The program responsible for this is known as the traffic controller.",
"image": ""
},
10: {
"text": "The operating system de-allocates the processor when a process is no longer required. This allows the CPU to be reassigned.",
"image": ""
},
11: {
"text": "An operating system manages device communication via their respective drivers. Device drivers handle communication between hardware and the OS.",
"image": ""
},
12: {
"text": "The OS keeps track of all devices. The program responsible for this task is known as the I/O controller.",
"image": ""
},
13: {
"text": "The OS de-allocates devices when they are no longer required by a process. This frees the device for other processes.",
"image": ""
},
14: {
"text": "A file system is normally organized into directories for easy navigation and usage. Directories help users locate and manage files efficiently.",
"image": ""
},
15: {
"text": "The operating system keeps track of information, location, uses, status, etc. for file management. These collective facilities form the file system.",
"image": ""
},
16: {
"text": "The OS allocates and de-allocates the resources for file management. De-allocation frees resources when they are no longer needed.",
"image": ""
},
17: {
"text": "Security is provided by means of passwords and similar techniques to prevent unauthorized access to programs and data.",
"image": ""
},
18: {
"text": "Control over system performance includes recording delays between request for a service and response from the system. This helps evaluate performance.",
"image": ""
},
19: {
"text": "Job accounting involves keeping track of time and resources used by various jobs and users. This helps in billing and system monitoring.",
"image": ""
},
20: {
"text": "Error detecting aids include production of dumps, traces, error messages, and other debugging tools. These help identify system faults.",
"image": ""
},
21: {
"text": "Coordination between other software and users includes coordination and assignment of compilers, interpreters, assemblers, and other software to various users.",
"image": ""
},
22: {
"text": "In batch operating systems, each user prepares his job on an off-line device like punch cards and submits it to the computer operator.",
"image": ""
},
23: {
"text": "To speed up processing, jobs with similar needs are batched together and run as a group. This reduces idle time.",
"image": ""
},
24: {
"text": "Time-sharing enables many people at various terminals to use a computer system at the same time. It is a logical extension of multiprogramming.",
"image": ""
},
25: {
"text": "Processor's time shared among multiple users simultaneously is termed as time-sharing. This allows multiple users to work on one system.",
"image": ""
},
26: {
"text": "Each process needs CPU time and I/O time. While a process performs its I/O, the CPU executes another process, improving efficiency.",
"image": ""
},
27: {
"text": "In multiprocessing, parallel computing is achieved because more than one processor is present in the system.",
"image": ""
},
28: {
"text": "In multiprocessing systems, multiple processors execute processes at the same time, increasing the throughput of the system.",
"image": ""
},
29: {
"text": "Distributed systems use multiple central processors to serve multiple real-time applications and users. Tasks are distributed among processors.",
"image": ""
},
30: {
"text": "Distributed systems are referred to as loosely coupled systems or distributed systems. These processors communicate through communication lines.",
"image": ""
},
31: {
"text": "A network operating system runs on a server and allows shared file and printer access among multiple computers in a network such as LAN or private networks.",
"image": ""
},
32: {
"text": "A real-time operating system processes and responds to inputs in a very small time interval to control the environment. The response time is very small compared to online processing.",
"image": ""
},
33: {
"text": "Hard real-time systems guarantee that critical tasks complete on time. They are strict in task completion deadlines.",
"image": ""
},
34: {
"text": "In hard real-time systems, secondary storage is limited or missing, and data is stored in ROM. Virtual memory is almost never used.",
"image": ""
},
35: {
"text": "Soft real-time systems are less restrictive. Critical tasks get priority over others until completion. They are used in multimedia, virtual reality, and scientific projects.",
"image": ""
},
36: {
"text": "Batch processing collects programs and data together in a batch before processing starts to execute them efficiently.",
"image": ""
},
37: {
"text": "Multitasking is when multiple jobs are executed by the CPU simultaneously by switching between them so users can interact with each program while it runs.",
"image": ""
},
38: {
"text": "A program that is loaded into memory and is executing is commonly referred to as a process.",
"image": ""
},
39: {
"text": "Spooling (Simultaneous Peripheral Operations On Line) refers to putting data of various I/O jobs in a buffer accessible to I/O devices.",
"image": ""
},
40: {
"text": "When the computer starts, the operating system is first loaded. This process is known as booting.",
"image": ""
},
41: {
"text": "Cold Booting refers to turning ON the computer from an OFF position.",
"image": ""
},
42: {
"text": "Warm Booting refers to starting or resetting a computer system from a complete powerless state.",
"image": ""
},
43: {
"text": "Firmware is a software program written to a hardware device. It allows hardware updates and retains contents even when power is lost.",
"image": ""
},
44: {
"text": "Middleware is a software layer situated between applications and operating systems. It enables communication and data management for distributed applications.",
"image": ""
}

};