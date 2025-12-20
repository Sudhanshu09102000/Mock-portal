const questions = {
1: {
text: "Computer security is defined as the protection of computer systems from which of the following?",
options: ["Theft or damage to hardware, software, or data", "Only hardware damage", "Only software updates", "Only network speed issues"],
correct: "1",
image: ''
},
2: {
text: "Computer security is also known by which other term?",
options: ["Cyber-security", "Nano-security", "Quantum security", "Visual security"],
correct: "1",
image: ''
},
3: {
text: "Internet security is a branch of computer security specifically related to which area?",
options: ["Internet and web-related security", "Mobile network repair", "Satellite communication only", "Hardware manufacturing"],
correct: "1",
image: ''
},
4: {
text: "The Internet is considered which type of channel for exchanging information?",
options: ["Insecure channel", "Fully secure channel", "Encrypted-only channel", "Private channel"],
correct: "1",
image: ''
},
5: {
text: "Which of the following is NOT listed as a risk associated with the Internet?",
options: ["Phishing", "Online viruses", "Trojans", "Quantum tunneling"],
correct: "4",
image: ''
},
6: {
text: "Which method is mentioned as a way to protect the transfer of data over the Internet?",
options: ["Encryption", "Defragmentation", "Low bandwidth mode", "Removing cookies"],
correct: "1",
image: ''
},
7: {
text: "A cyber-attack is an exploitation of what?",
options: ["Computer systems and networks", "Only keyboards", "Only printers", "Only monitors"],
correct: "1",
image: ''
},
8: {
text: "Cyber-attacks use malicious code to alter computer code, logic or data and lead to which of the following?",
options: ["Cybercrimes like information and identity theft", "Improved software updates", "Faster CPU speed", "Better internet connection"],
correct: "1",
image: ''
},
9: {
text: "Which of the following is a category of attacks?",
options: ["Web-based attacks", "Nuclear attacks", "Laser attacks", "Biological attacks"],
correct: "1",
image: ''
},
10: {
text: "Web-based attacks occur on which of the following?",
options: ["Websites or web applications", "Mobile batteries", "USB cables", "Offline printers"],
correct: "1",
image: ''
},
11: {
text: "Injection attacks work by doing what?",
options: ["Injecting data into a web application to manipulate it", "Fixing server speed", "Cleaning browser cache", "Blocking internet traffic"],
correct: "1",
image: ''
},
12: {
text: "Which of the following is an example of an injection attack?",
options: ["SQL Injection", "Bluetooth pairing", "RAM overclocking", "Keyboard buffering"],
correct: "1",
image: ''
},
13: {
text: "DNS spoofing introduces data into which component?",
options: ["A DNS resolver's cache", "A printer queue", "A RAM slot", "A GPU driver"],
correct: "1",
image: ''
},
14: {
text: "DNS spoofing causes a name server to return what?",
options: ["Incorrect IP address", "Correct MAC address", "Encrypted password", "Optimized network route"],
correct: "1",
image: ''
},
15: {
text: "Session hijacking is a security attack on what?",
options: ["A user session over a protected network", "A phone battery", "A keyboard port", "A system BIOS"],
correct: "1",
image: ''
},
16: {
text: "In session hijacking, attackers steal cookies to gain access to what?",
options: ["User data", "Electric signals", "Printer ink level", "Motherboard voltage"],
correct: "1",
image: ''
},
17: {
text: "Phishing attempts to steal which type of information?",
options: ["Login credentials and credit card numbers", "Movie preferences", "Wallpaper images", "System fonts"],
correct: "1",
image: ''
},
18: {
text: "Brute force attacks use which method?",
options: ["Trial and error guesses", "Thermal scanning", "Magnetic pulses", "Audio commands"],
correct: "1",
image: ''
},
19: {
text: "Brute force attacks aim to obtain which type of data?",
options: ["User passwords and PINs", "Motherboard serial numbers", "Monitor refresh rate", "Printer model number"],
correct: "1",
image: ''
},
20: {
text: "A denial-of-service attack aims to make what unavailable?",
options: ["A server or network resource", "A mouse device", "A keyboard", "A webcam"],
correct: "1",
image: ''
},
21: {
text: "A denial-of-service attack uses how many systems to attack a server?",
options: ["Single system and single internet connection", "Hundreds of systems", "A satellite link", "Only offline devices"],
correct: "1",
image: ''
},
22: {
text: "Volume-based DoS attacks are measured in what?",
options: ["Bit per second", "Kilograms", "Watts", "Decibels"],
correct: "1",
image: ''
},
23: {
text: "Protocol attacks consume what?",
options: ["Actual server resources", "Battery power", "User screen brightness", "Processor cache only"],
correct: "1",
image: ''
},
24: {
text: "Application layer attacks aim to do what?",
options: ["Crash the web server", "Change screen color", "Update browser", "Boost Wi-Fi speed"],
correct: "1",
image: ''
},
25: {
text: "Dictionary attacks work by using what?",
options: ["A list of commonly used passwords", "A list of system drivers", "A list of IP addresses", "A list of hardware parts"],
correct: "1",
image: ''
},
26: {
text: "URL interpretation attacks allow attackers to do what?",
options: ["Change parts of a URL to access unauthorized pages", "Increase bandwidth", "Adjust display size", "Change system date"],
correct: "1",
image: ''
},
27: {
text: "File inclusion attacks allow attackers to access what?",
options: ["Unauthorized or essential files on a web server", "CD-ROM data", "TV remote settings", "Embedded chips"],
correct: "1",
image: ''
},
28: {
text: "Man-in-the-middle attacks allow an attacker to do what?",
options: ["Intercept and modify data between client and server", "Increase CPU temperature", "Replace RAM physically", "Format hard drives remotely"],
correct: "1",
image: ''
},
29: {
text: "System-based attacks are intended to compromise what?",
options: ["A computer or a computer network", "Only printers", "Only mobile phones", "Only wireless routers"],
correct: "1",
image: ''
},
30: {
text: "A computer virus replicates itself by doing what?",
options: ["Modifying other programs and inserting its own code", "Upgrading RAM", "Cleaning hard disks", "Increasing processor speed"],
correct: "1",
image: ''
},
31: {
text: "When a computer virus successfully replicates, the affected areas are said to be what?",
options: ["Infected", "Encrypted", "Compressed", "Formatted"],
correct: "1",
image: ''
},
32: {
text: "A virus can spread by opening what?",
options: ["Email attachments", "Font files", "Calculator app", "Wallpaper images"],
correct: "1",
image: ''
},
33: {
text: "A virus can spread by clicking on what type of file?",
options: ["Executable file", "Audio file", "PDF file", "Image file"],
correct: "1",
image: ''
},
34: {
text: "A virus can also spread by visiting what?",
options: ["Infected websites or advertisements", "Online dictionary", "Cloud backup", "Search engine homepage"],
correct: "1",
image: ''
},
35: {
text: "Viruses can spread through infected removable devices such as what?",
options: ["USB drives", "Monitors", "Speakers", "Keyboards"],
correct: "1",
image: ''
},
36: {
text: "Once a virus infects the host, it can corrupt or do what to data?",
options: ["Delete data", "Compress data", "Translate data", "Encrypt data automatically"],
correct: "1",
image: ''
},
37: {
text: "In worst cases, a virus can delete what?",
options: ["Everything on the hard disk", "Only temporary files", "Only cookies", "Only browser history"],
correct: "1",
image: ''
},
38: {
text: "The main purpose of a computer virus is to do what?",
options: ["Disrupt computer operation", "Increase system speed", "Improve graphics", "Add security patches"],
correct: "1",
image: ''
},
39: {
text: "Ripper, Stuxnet, Petya, and WannaCry are examples of what?",
options: ["Computer viruses", "Programming languages", "Authentication tools", "Database systems"],
correct: "1",
image: ''
},
40: {
text: "A computer worm is a malicious program that does what?",
options: ["Self-replicates and affects functions of software and hardware", "Improves internet speed", "Cleans up RAM", "Reduces software size"],
correct: "1",
image: ''
},
41: {
text: "Before widespread networks, worms spread mainly through what?",
options: ["Infected storage media like floppy disks", "CD-ROM drivers", "Cloud storage", "Bluetooth devices"],
correct: "1",
image: ''
},
42: {
text: "USB drives are still a common vector for what?",
options: ["Computer worms", "Firewall updates", "Wi-Fi boosters", "VPN installations"],
correct: "1",
image: ''
},
43: {
text: "Computer worms spread with no human intervention after they are what?",
options: ["Started", "Downloaded", "Viewed", "Scanned"],
correct: "1",
image: ''
},
44: {
text: "Viruses usually require what to spread?",
options: ["User action", "High RAM", "High bandwidth", "A proxy server"],
correct: "1",
image: ''
},
45: {
text: "A Trojan horse misleads users about what?",
options: ["Its true intent", "Its storage size", "Its file format", "Its installation date"],
correct: "1",
image: ''
},
46: {
text: "Trojans are generally spread through which method?",
options: ["Social engineering", "CPU heating", "Data compression", "File indexing"],
correct: "1",
image: ''
},
47: {
text: "Trojans may allow attackers to access which type of information?",
options: ["Banking information and passwords", "Audio files only", "Printer settings", "Wallpapers"],
correct: "1",
image: ''
},
48: {
text: "Ransomware attacks are commonly carried out using what?",
options: ["Trojans", "Browsers", "Firewalls", "Operating system updates"],
correct: "1",
image: ''
},
49: {
text: "Trojans can create what to give malicious users access?",
options: ["Backdoors", "Antivirus patches", "Secure tunnels", "Firewall rules"],
correct: "1",
image: ''
},
50: {
text: "Unlike viruses and worms, Trojans do not do what?",
options: ["Inject themselves into other files", "Display ads", "Use system memory", "Send emails"],
correct: "1",
image: ''
},
51: {
text: "Malware is any software used to do what?",
options: ["Disrupt operations or gather sensitive information", "Improve graphics", "Enhance RAM speed", "Protect user privacy"],
correct: "1",
image: ''
},
52: {
text: "Malware can appear in which form?",
options: ["Executable code or scripts", "Keyboard signals", "Wi-Fi waves", "Bluetooth pairing requests"],
correct: "1",
image: ''
},
53: {
text: "Ransomware infects a computer with the intention of doing what?",
options: ["Extorting money", "Improving software", "Compressing files", "Repairing data"],
correct: "1",
image: ''
},
54: {
text: "Spyware infiltrates a device to steal what?",
options: ["Internet usage data and sensitive information", "Wallpaper images", "Volume settings", "Clock settings"],
correct: "1",
image: ''
},
55: {
text: "Spyware can be installed through which method?",
options: ["Opening an email attachment containing malicious software", "Changing wallpaper", "Deleting cookies", "Installing antivirus"],
correct: "1",
image: ''
},
56: {
text: "Adware generates revenue by automatically doing what?",
options: ["Generating online advertisements", "Creating backup files", "Boosting CPU performance", "Improving RAM"],
correct: "1",
image: ''
},
57: {
text: "Adware may generate revenue on a pay-per-click basis when what happens?",
options: ["User clicks the advertisement", "User opens Control Panel", "User installs RAM", "User restarts PC"],
correct: "1",
image: ''
},
58: {
text: "A keylogger stores what?",
options: ["All keystrokes of a computer", "All mouse clicks", "Screen brightness levels", "Connected device list"],
correct: "1",
image: ''
},
59: {
text: "Keyloggers can record which type of personal information?",
options: ["Usernames, passwords, and credit card numbers", "Only images", "Only audio files", "Only documents"],
correct: "1",
image: ''
},
60: {
text: "Phishing attempts to obtain access credentials by doing what?",
options: ["Disguising as a trustworthy entity", "Formating hard disks", "Installing RAM", "Upgrading CPU"],
correct: "1",
image: ''
},
61: {
text: "Phishing often directs users to enter information at what?",
options: ["A fake website resembling a legitimate site", "A government portal", "A banking ATM", "A hardware shop"],
correct: "1",
image: ''
},
62: {
text: "A spoofing attack occurs when someone gains advantage by doing what?",
options: ["Falsifying data to represent as another", "Deleting cache", "Scanning QR codes", "Updating drivers"],
correct: "1",
image: ''
},
63: {
text: "Pharming redirects website traffic to what?",
options: ["Another fake site", "A social media page", "A download manager", "A search engine"],
correct: "1",
image: ''
},
64: {
text: "Pharming can be conducted by changing what file on a victim’s computer?",
options: ["Hosts file", "Registry file", "Kernel file", "Driver file"],
correct: "1",
image: ''
},
65: {
text: "Pharming can exploit vulnerabilities in what server software?",
options: ["DNS server software", "Mail server software", "Game server software", "Printer server software"],
correct: "1",
image: ''
},
66: {
text: "DNS servers are responsible for resolving Internet names into what?",
options: ["Real IP addresses", "Domain owners", "MAC IDs", "Browser versions"],
correct: "1",
image: ''
},
67: {
text: "Users of which websites are more prone to pharming attacks?",
options: ["Online banking and e-commerce websites", "Gaming websites", "Music streaming sites", "Offline portals"],
correct: "1",
image: ''
},
68: {
text: "What is the primary function of anti-virus software?",
options: ["To prevent, search for, detect, and remove malicious software", "To provide cloud storage", "To improve computer graphics", "To increase processor speed"],
correct: "1",
image: ""
},

69: {
text: "Firewall is a network security system that monitors and controls which type of activity?",
options: ["Incoming and outgoing network traffic", "Only hardware failures", "Only user login attempts", "External device connections"],
correct: "1",
image: ""
},

70: {
text: "Authorization refers to which of the following functions?",
options: ["Specifying access rights to resources", "Encrypting stored data", "Installing device drivers", "Scanning system files for errors"],
correct: "1",
image: ""
},

71: {
text: "Authentication is mainly concerned with which process?",
options: ["Confirming the truth of an attribute or identity", "Designing user interfaces", "Compressing large files", "Creating backup archives"],
correct: "1",
image: ""
},

72: {
text: "A person who uses expertise to access other people’s computers illegally is called a:",
options: ["Hacker", "Developer", "Operator", "Designer"],
correct: "1",
image: ""
},

73: {
text: "A zombie computer refers to a system that has been:",
options: ["Compromised and used to perform malicious tasks remotely", "Optimized for gaming performance", "Backed up to a cloud server", "Upgraded with new hardware"],
correct: "1",
image: ""
},

74: {
text: "What does the term 'breach' signify in computer security?",
options: ["Successful exploitation of a vulnerability by a hacker", "Routine system update", "Shutdown of a device", "Installation of new applications"],
correct: "1",
image: ""
},

75: {
text: "A bot or botnet allows an attacker to:",
options: ["Take remote control of infected computers", "Speed up processor cycles", "Improve display resolution", "Encrypt system files automatically"],
correct: "1",
image: ""
},

76: {
text: "Spam refers to which type of communication?",
options: ["Unwanted or unsolicited promotional emails", "Encrypted confidential messages", "Internal company memos", "Voice calls over internet"],
correct: "1",
image: ""
},

77: {
text: "What is the purpose of encryption?",
options: ["To convert readable data into an encoded form accessible only with a decryption key", "To compress large files", "To optimize storage devices", "To increase internet speed"],
correct: "1",
image: ""
}


};


const explanations = {
1: {
text: "Computer security is the protection of computer systems from theft or damage to hardware, software, or electronic data and from disruption or misdirection of services. These measures safeguard all digital components.",
image: ""
},
2: {
text: "Computer security is also known as cyber-security or IT security. These terms are commonly used interchangeably in the field of information protection.",
image: ""
},
3: {
text: "Internet security is a branch of computer security related to the Internet, browser security, and the World Wide Web. It focuses on rules and measures to prevent online attacks.",
image: ""
},
4: {
text: "The Internet represents an insecure channel for exchanging information, leading to risks like intrusion or fraud. This insecurity increases vulnerability to attacks.",
image: ""
},
5: {
text: "Phishing, online viruses, Trojans, and worms are listed risks on the Internet. These are common threats targeting users in the online environment.",
image: ""
},
6: {
text: "Encryption and engineering from the ground up are used to protect data transfer. These methods ensure confidentiality and integrity of transmitted information.",
image: ""
},
7: {
text: "A cyber-attack exploits computer systems and networks. These attacks target vulnerabilities to cause damage or unauthorized access.",
image: ""
},
8: {
text: "Cyber-attacks use malicious code to alter computer code, logic, or data leading to cybercrimes such as information or identity theft. Such crimes impact digital safety.",
image: ""
},
9: {
text: "Attacks can be classified into categories including web-based attacks. These classifications help in understanding threat types.",
image: ""
},
10: {
text: "Web-based attacks occur on websites or web applications. These platforms are frequently targeted due to user interaction.",
image: ""
},
11: {
text: "Injection attacks involve injecting data into a web application to manipulate it and fetch information. This manipulation exploits application vulnerabilities.",
image: ""
},
12: {
text: "Examples of injection attacks include SQL injection, code injection, log injection, and XML injection. These exploit input handling weaknesses.",
image: ""
},
13: {
text: "DNS spoofing introduces data into a DNS resolver’s cache causing incorrect IP returns. It misdirects user traffic to malicious destinations.",
image: ""
},
14: {
text: "DNS spoofing causes the name server to return an incorrect IP address, diverting traffic to an attacker’s computer. This leads to serious security risks.",
image: ""
},
15: {
text: "Session hijacking is a security attack on a user session over a protected network. It targets session controls used by applications.",
image: ""
},
16: {
text: "By stealing cookies created by web applications, attackers gain access to user data. Cookies store session details required for authentication.",
image: ""
},
17: {
text: "Phishing attempts to steal sensitive information such as login credentials and credit card numbers by masquerading as trustworthy entities. It is a major social engineering threat.",
image: ""
},
18: {
text: "Brute force attacks use trial and error by generating many guesses to obtain actual data. This method is often used to crack password systems.",
image: ""
},
19: {
text: "Brute force attacks aim to obtain passwords and personal identification numbers. This makes systems vulnerable if weak passwords are used.",
image: ""
},
20: {
text: "Denial-of-service attacks make a server or network resource unavailable by overwhelming it with traffic. This disrupts normal functioning.",
image: ""
},
21: {
text: "A DoS attack uses one system and one internet connection to attack a server. It differs from DDoS which uses multiple systems.",
image: ""
},
22: {
text: "Volume-based attacks aim to saturate bandwidth and are measured in bits per second. These attacks overload network capacity.",
image: ""
},
23: {
text: "Protocol attacks consume actual server resources and are measured in packets. They target weaknesses in network protocols.",
image: ""
},
24: {
text: "Application layer attacks aim to crash the web server and are measured in requests per second. They exploit vulnerabilities in application processing.",
image: ""
},
25: {
text: "Dictionary attacks use a list of commonly used passwords to obtain original passwords. They are effective against weak credential setups.",
image: ""
},
26: {
text: "URL interpretation attacks modify URL parts to access unauthorized web pages. This exploits insufficient access controls.",
image: ""
},
27: {
text: "File inclusion attacks give attackers access to unauthorized or essential files on a web server. They exploit include/require functions.",
image: ""
},
28: {
text: "Man-in-the-middle attacks intercept connections between client and server allowing attackers to read, insert, and modify data. This breaks communication integrity.",
image: ""
},
29: {
text: "System-based attacks are intended to compromise a computer or a computer network. These attacks target system-level components and infrastructure.",
image: ""
},
30: {
text: "A computer virus replicates itself by modifying other computer programs and inserting its own code. This allows the virus to spread within the system.",
image: ""
},
31: {
text: "When replication succeeds, the affected areas are said to be infected with a computer virus. Infection indicates malicious modification of files.",
image: ""
},
32: {
text: "A virus can be spread by opening an email attachment. Email is one of the most common distribution methods for malware.",
image: ""
},
33: {
text: "A virus can spread by clicking on an executable file. Executables often contain embedded malicious code.",
image: ""
},
34: {
text: "Viruses can spread by visiting an infected website or advertisement. Malicious scripts can load automatically on compromised pages.",
image: ""
},
35: {
text: "A virus can spread through infected removable storage devices such as USB drives. Portable drives are common malware carriers.",
image: ""
},
36: {
text: "Once a virus has infected the host, it can corrupt or delete data. These actions compromise data integrity and availability.",
image: ""
},
37: {
text: "In the worst case, a virus can delete everything on the hard disk. This results in complete data loss.",
image: ""
},
38: {
text: "The purpose of a virus is to disrupt the operation of the computer or program. These disruptions can vary from minor to severe.",
image: ""
},
39: {
text: "Ripper, Stuxnet, Petya, WannaCry, Code Red, Melissa, Sasser, Zeus, Mydoom, CryptoLocker, and Flashback are examples of viruses. These are known for large-scale attacks.",
image: ""
},
40: {
text: "A computer worm is a malicious self-replicating program that affects software and hardware functions. Worms spread rapidly across systems.",
image: ""
},
41: {
text: "Before widespread networks, worms were spread through infected storage media like floppy diskettes. These devices transferred malware between computers.",
image: ""
},
42: {
text: "USB drives remain a common vector for computer worms. They carry executable malware files into new systems.",
image: ""
},
43: {
text: "Computer worms are self-replicating programs that spread with no human intervention after they are started. Their automation enables fast spread.",
image: ""
},
44: {
text: "Viruses require user action to spread to other programs or systems. Actions like opening files initiate infection.",
image: ""
},
45: {
text: "A Trojan horse is malware that misleads users about its true intent. The deceptive appearance hides harmful functions.",
image: ""
},
46: {
text: "Trojans generally spread through social engineering, such as deceptive email attachments or fake advertisements. These tricks manipulate human behavior.",
image: ""
},
47: {
text: "Trojans may allow attackers to access personal information like banking details and passwords. Such access leads to identity theft.",
image: ""
},
48: {
text: "Ransomware attacks are often carried out using a Trojan. The Trojan installs and activates the malware payload.",
image: ""
},
49: {
text: "Trojans can create backdoors to give malicious users system access. Backdoors bypass authentication mechanisms.",
image: ""
},
50: {
text: "Unlike viruses and worms, Trojans do not inject themselves into other files or self-propagate. They rely on deception, not replication.",
image: ""
},
51: {
text: "Malware is software used to disrupt operations, gather sensitive information, or gain access to systems. It includes viruses, worms, Trojans, and more.",
image: ""
},
52: {
text: "Malware may appear as executable code, scripts, active content, or other software. Its form varies depending on its purpose.",
image: ""
},
53: {
text: "Ransomware infects and takes control of a system to extort money. It often encrypts data until ransom is paid.",
image: ""
},
54: {
text: "Spyware infiltrates a device, stealing internet usage data and sensitive information. It works silently in the background.",
image: ""
},
55: {
text: "Spyware can be installed by opening a malicious email attachment or through software that contains a hidden installer. These methods exploit user trust.",
image: ""
},
56: {
text: "Adware generates revenue by automatically displaying online advertisements. It often appears during installation or use of software.",
image: ""
},
57: {
text: "Adware may generate revenue on a pay-per-click basis when users click ads. This incentivizes excessive advertisement display.",
image: ""
},
58: {
text: "A keylogger stores all keystrokes typed on a computer. This captures sensitive information typed by the user.",
image: ""
},
59: {
text: "Keyloggers record personal information such as usernames, passwords, credit card numbers, and personal documents. This leads to privacy breaches.",
image: ""
},
60: {
text: "Phishing attempts to obtain access credentials by disguising the attacker as a trustworthy entity. It is a major social engineering method.",
image: ""
},
61: {
text: "Phishing often directs users to enter information at a fake website resembling the legitimate site. This steals confidential data.",
image: ""
},
62: {
text: "Spoofing involves falsifying data to represent oneself as another person or program. This enables unauthorized access.",
image: ""
},
63: {
text: "Pharming redirects traffic from a legitimate website to a fake one. This leads to credential theft.",
image: ""
},
64: {
text: "Pharming can be conducted by modifying the hosts file on a victim’s computer. The file determines domain name resolution.",
image: ""
},
65: {
text: "Pharming can exploit vulnerabilities in DNS server software. This allows large-scale redirection attacks.",
image: ""
},
66: {
text: "DNS servers resolve Internet names into their real IP addresses. This conversion enables browsing.",
image: ""
},
67: {
text: "Users of online banking and e-commerce websites are more prone to pharming attacks. These sites hold valuable financial information.",
image: ""
},

68: {
text: "Anti-virus software is a program or set of programs designed to prevent, search for, detect, and remove software viruses and other malicious software like worms, trojans, and adware. These tools help protect systems from infection and ensure secure operation.",
image: ""
},

69: {
text: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Firewalls help block unauthorized access while permitting legitimate communication.",
image: ""
},

70: {
text: "Authorization is the function of specifying access rights to resources related to information security and access control. It defines an access policy determining what resources a user is allowed to use.",
image: ""
},

71: {
text: "Authentication is the act of confirming the truth of an attribute or identity. It may involve validating identity documents, verifying website certificates, or ensuring a product matches its labeling. It verifies at least one form of identification.",
image: ""
},

72: {
text: "A hacker is a person who uses his or her expertise to gain access to other people’s computers to obtain information illegally or cause damage. Hackers exploit system weaknesses for unauthorized purposes.",
image: ""
},

73: {
text: "A zombie is a computer connected to the Internet that has been compromised by a hacker, virus, or trojan horse and can be used to perform malicious tasks under remote direction. These are controlled without the user’s knowledge.",
image: ""
},

74: {
text: "A breach is the moment a hacker successfully exploits a vulnerability in a computer or device and gains access to its files and network. It marks the point at which unauthorized access occurs.",
image: ""
},

75: {
text: "A bot or botnet is a type of software application or script that performs tasks on command, allowing an attacker to take complete remote control of infected computers. A collection of these systems forms a botnet controlled by a bot-herder.",
image: ""
},

76: {
text: "Spam refers to unwanted emails or unsolicited promotional mail. These messages are typically mass-distributed and may contain advertisements, scams, or harmful links.",
image: ""
},

77: {
text: "Encryption is the method by which plaintext or any type of data is converted from a readable form into an encoded version that can be decoded only with a decryption key. It ensures data security, especially for end-to-end protection during transmission.",
image: ""
}


};