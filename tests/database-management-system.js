const questions = {
1: {
text: "What is a database?",
options: ["A collection of inter-related data used to retrieve, insert, and delete data efficiently", "A software used to create tables", "A program to manage user permissions", "A type of operating system"],
correct: "1",
image: ''
},
2: {
text: "Which of the following is an example of a Database Management System?",
options: ["MySQL", "Microsoft Word", "Windows OS", "Adobe Photoshop"],
correct: "1",
image: ''
},
3: {
text: "What operation is performed using Data Definition in DBMS?",
options: ["Creation, modification, and removal of definitions that define the organization of data", "Insertion of actual data", "Retrieving data for applications", "Monitoring user activity"],
correct: "1",
image: ''
},
4: {
text: "Which DBMS operation is used to insert, modify, or delete actual data?",
options: ["Data Updation", "Data Definition", "User Administration", "Data Retrieval"],
correct: "1",
image: ''
},
5: {
text: "Which DBMS operation allows users to retrieve data for applications?",
options: ["Data Retrieval", "Data Definition", "Data Updation", "User Administration"],
correct: "1",
image: ''
},
6: {
text: "Which DBMS operation deals with registering users, maintaining integrity, and enforcing security?",
options: ["User Administration", "Data Updation", "Data Retrieval", "Data Definition"],
correct: "1",
image: ''
},
7: {
text: "Which of the following is a characteristic of DBMS?",
options: ["Contains ACID properties to maintain data consistency", "Operates as a text editor", "Controls hardware drivers", "Manages network traffic"],
correct: "1",
image: ''
},
8: {
text: "Who is responsible for administrating the DBMS and creating access profiles for users?",
options: ["Administrators", "Designers", "End Users", "Developers"],
correct: "1",
image: ''
},
9: {
text: "Who identifies and designs entities, relations, constraints, and views in a database?",
options: ["Designers", "Administrators", "End Users", "Security Officers"],
correct: "1",
image: ''
},
10: {
text: "Who benefits from a DBMS by using its data for analysis or simple viewing?",
options: ["End Users", "Designers", "Administrators", "Developers"],
correct: "1",
image: ''
}
,
    11: {
text: "What is the main purpose of 3-tier architecture in DBMS?",
options: ["To separate tiers based on user complexity and database access", "To merge all database operations into one layer", "To create multiple databases for each user", "To provide direct database access to all users"],
correct: "1",
image: ''
},
12: {
text: "Which tier in 3-tier architecture contains the database and its query processing languages?",
options: ["Database (Data) Tier", "Application (Middle) Tier", "User (Presentation) Tier", "Network Tier"],
correct: "1",
image: ''
},
13: {
text: "Which tier in 3-tier architecture acts as a mediator between end-users and the database?",
options: ["Application (Middle) Tier", "Database (Data) Tier", "User (Presentation) Tier", "Hardware Tier"],
correct: "1",
image: ''
},
14: {
text: "Which tier in 3-tier architecture provides multiple views of the database to end-users?",
options: ["User (Presentation) Tier", "Database (Data) Tier", "Application (Middle) Tier", "Security Tier"],
correct: "1",
image: ''
},
15: {
text: "What do data models define in a DBMS?",
options: ["How the logical structure of a database is modeled", "How the network is configured", "How users log in to the system", "How the hardware is maintained"],
correct: "1",
image: ''
},
16: {
text: "On what concepts is the Entity-Relationship (ER) Model based?",
options: ["Entities, attributes, and relationships", "Tables, rows, and columns", "Users, permissions, and security", "Servers, clients, and networks"],
correct: "1",
image: ''
},
17: {
text: "In an ER Model, what is an entity?",
options: ["A real-world object with properties called attributes", "A type of database server", "A SQL query", "A user profile"],
correct: "1",
image: ''
},
18: {
text: "What defines the number of associations between two entities in an ER Model?",
options: ["Mapping cardinalities", "Data types", "Primary keys", "Indexes"],
correct: "1",
image: ''
},
19: {
text: "Which of the following is NOT a mapping cardinality in ER models?",
options: ["Three to many", "One to one", "One to many", "Many to many"],
correct: "1",
image: ''
},
20: {
text: "Which data model is considered the most popular and scientific in DBMS?",
options: ["Relational Model", "ER Model", "Hierarchical Model", "Network Model"],
correct: "1",
image: ''
},
21: {
text: "In the Relational Model, what is a table called?",
options: ["Relation", "Entity", "Attribute", "Schema"],
correct: "1",
image: ''
},
22: {
text: "In a normalized relational table, what kind of values are stored?",
options: ["Atomic values", "Nested tables", "Mixed types", "Pointers"],
correct: "1",
image: ''
},
23: {
text: "What is true about each row in a relation of a Relational Model?",
options: ["Each row contains a unique value", "Each row contains multiple unrelated tables", "Each row stores user login info", "Each row is a duplicate of another"],
correct: "1",
image: ''
},
24: {
text: "What is true about each column in a relation of a Relational Model?",
options: ["Each column contains values from the same domain", "Each column can mix numeric and text values arbitrarily", "Each column is a separate table", "Columns are only used for indexing"],
correct: "1",
image: ''
}


};


const explanations = {
1: {
text: "A database is a collection of inter-related data which is used to retrieve, insert, and delete the data efficiently. It is also used to organize the data in the form of a table, schema, views, and reports, etc.",
image: ""
},
2: {
text: "Database management system is software which is used to manage the database. For example: MySQL, Oracle, etc are very popular commercial databases used in different applications.",
image: ""
},
3: {
text: "Data Definition is used for creation, modification, and removal of definitions that define the organization of data in the database.",
image: ""
},
4: {
text: "Data Updation is used for the insertion, modification, and deletion of the actual data in the database.",
image: ""
},
5: {
text: "Data Retrieval is used to retrieve the data from the database which can be used by applications for various purposes.",
image: ""
},
6: {
text: "User Administration is used for registering and monitoring users, maintain data integrity, enforcing data security, dealing with concurrency control, monitoring performance, and recovering information corrupted by unexpected failure.",
image: ""
},
7: {
text: "DBMS contains ACID properties which maintain data in a healthy state in case of failure. Other characteristics include automatic backup and recovery, supporting data manipulation and processing, providing security, reducing complex relationships, and allowing different viewpoints of the database.",
image: ""
},
8: {
text: "Administrators maintain the DBMS and are responsible for administrating the database. They create access profiles for users, apply limitations to maintain isolation and enforce security, and maintain DBMS resources like system license, tools, software, and hardware.",
image: ""
},
9: {
text: "Designers are the group of people who work on designing the database. They keep a close watch on what data should be kept and in what format, and identify and design the whole set of entities, relations, constraints, and views.",
image: ""
},
10: {
text: "End users are those who actually reap the benefits of having a DBMS. They can range from simple viewers to sophisticated users such as business analysts.",
image: ""
}
,
    11: {
text: "3-tier architecture separates its tiers from each other based on the complexity of the users and how they use the data present in the database. It is the most widely used architecture to design a DBMS.",
image: ""
},
12: {
text: "Database (Data) Tier contains the database along with its query processing languages. Relations and constraints defining the data exist at this level.",
image: ""
},
13: {
text: "Application (Middle) Tier resides between end-users and the database, presenting an abstracted view to users and acting as a mediator.",
image: ""
},
14: {
text: "User (Presentation) Tier is where end-users operate and receive multiple views of the database generated by the application tier, without knowing the database beyond this layer.",
image: ""
},
15: {
text: "Data models define how the logical structure of a database is modeled, how data is connected, processed, and stored.",
image: ""
},
16: {
text: "The Entity-Relationship (ER) Model is based on entities, their attributes, and the relationships among entities.",
image: ""
},
17: {
text: "An entity in an ER Model is a real-world entity having properties called attributes. Each attribute has a set of values called domain.",
image: ""
},
18: {
text: "Mapping cardinalities define the number of associations between two entities in an ER Model.",
image: ""
},
19: {
text: "Mapping cardinalities include one to one, one to many, many to one, and many to many. 'Three to many' is not a valid cardinality.",
image: ""
},
20: {
text: "The Relational Model is the most popular and scientific data model in DBMS, based on first-order predicate logic.",
image: ""
},
21: {
text: "In the Relational Model, data is stored in tables called relations.",
image: ""
},
22: {
text: "In normalized relations, values saved are atomic values.",
image: ""
},
23: {
text: "Each row in a relation contains a unique value.",
image: ""
},
24: {
text: "Each column in a relation contains values from the same domain.",
image: ""
}


};