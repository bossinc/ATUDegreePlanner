var initialCourseArray = new Array();
initialCourseArray = [
    {"name":"ENGL1013","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"1","label":"ENGL 1013","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ENGL&number=1013",
        "description":"A review of grammar, introduction to research methods, and practice in writing exposition using reading to provide ideas and patterns. <br /> <br /> Note: A grade of C or better must be earned in each of the two composition courses used to satisfy the general education requirement of English/Communication.<br /> <br /> Note: May not be taken for credit after successful completion of ENGL 1043."},
    {"name":"TECH1001","seasonRestrict":"n","hours":"1","Prereqs":"end","summer":"1","label":"TECH 1001","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=TECH&number=1001",
        "description":"A course designed to provide information and enhance skills that will enable students to take responsibility for a successful transition to college. The course will expose students to college resources and requirements and promote the development of practical skills for college success."},
    {"name":"COMS1403","seasonRestrict":"n","hours":"3","Prereqs":"co|COMS1411|end","summer":"0","label":"COMS 1403","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=1403",
        "description":"An overview of hardware, software, technology, and information systems concepts andterms as well as ethics and opportunities within the three fields.<br /> <br /> Note: Required of all students who have declared a major in Computer Science, Information Systems, or Information Technology."},
    {"name":"COMS1411","seasonRestrict":"n","hours":"1","Prereqs":"co|COMS1403|end","summer":"0","label":"COMS 1411","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=1411",
        "description":"An introduction to the computing resources of the department and the university."},
    {"name":"ENGL1023","seasonRestrict":"n","hours":"3","Prereqs":"ENGL1013|end","summer":"1","ULE":"1","label":"ENGL 1023","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ENGL&number=1023",
        "description":"A continuation of ENGL 1013 with readings in poetry, fiction, and drama. <br /> <br /> Note: A grade of C or better must be earned in each of the two composition courses used to satisfy the general education requirement of English/Communication.<br /> <br /> Note: May not be taken for credit after successful completion of ENGL 1053."},
    {"name":"MATH2914","seasonRestrict":"n","hours":"4","Prereqs":"end","summer":"1","ULE":"1","label":"Math 2914","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=MATH&number=2914",
        "description":"This is the first of two courses covering the calculus of functions of a single variable. The content covers differentiation of all single variable functions and introduces integration of functions.<br /> <br /> Note: A grade of C of better must be earned in this course if being used to satisfy the general education mathematics requirement."},
    {"name":"COMS2003","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","label":"COMS 2003","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2003",
        "description":"This course provides hands-on experience with several software applications. Topics include intermediate and advanced word processing; spreadsheet design, formulas, and charts; database design principles and implementation; presentation design and techniques; and integration among these applications. Students will be required to apply each package on a semester project related to their major."},
    {"name":"COMS2104","seasonRestrict":"n","hours":"4","Prereqs":"COMS1403|COMS1411|end","summer":"0","ULE":"1","label":"COMS 2104","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2104",
        "description":"An introduction to the foundational concepts of programming using structured programming concepts of C++ as an implementation tool. Programming principles covered in lecture are practiced in lab. Major topics include sequential, selection, and iterative control structures, functions, parameter passing, and file processing. Arrays are introduced as a structured data type."},
    {"name":"GE_FAH1","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"Fine Arts","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements",
        "description":null},
    {"name":"GE_HIST1","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"History","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements",
        "description":null},
    {"name":"GE_SOCS1","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"SocScience","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements",
        "description":null},
    {"name":"ELEG2130","seasonRestrict":"n","hours":"0","Prereqs":"co|ELEG2134|co|COMS2104|end","summer":"0","label":"ELEG 2130","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ELEG&number=2130",
        "description":"Laboratory must be taken during the same semester as the lecture, ELEG 2134. A study of basic digital logic circuit design and implementation. Circuit schematic development utilizing computerized automated design tools. Computer modeling and simulation of digital systems. Emphasis will be placed on proper laboratory techniques, including data collection, data reduction, and report preparation."},
    {"name":"ELEG2134","seasonRestrict":"n","hours":"4","Prereqs":"co|ELEG2130|co|COMS2104|end","summer":"0","label":"ELEG 2134","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ELEG&number=2134",
        "description":"Binary numbers and codes, Boolean algebra, combinational and sequential logic including: minimization techniques, memory systems, register transfers, control logic design, and state machines."},
    {"name":"MATH2924","seasonRestrict":"n","hours":"4","Prereqs":"MATH2914|end","summer":"1","label":"MATH 2924","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=MATH&number=2924",
        "description":"This is the second of two courses covering the calculus of functions of a single variable.<br /> <br /> Note: A grade of C of better must be earned in this course if being used to satisfy the general education mathematics requirement."},
    {"name":"COMS2203","seasonRestrict":"n","hours":"3","Prereqs":"COMS2104|end","summer":"0","ULE":"1","label":"COMS 2203","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2203",
        "description":"This course is a continuation of Foundations of Programming I. Topics include multi-dimensional arrays, functions, string processing, classes, and records. Students are introduced to object oriented programming using C++."},
    {"name":"COMS2903","seasonRestrict":"n","hours":"3","Prereqs":"COMS2104|end","summer":"0","ULE":"1","label":"COMS 2903","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2903",
        "description":"Fundamental mathematical concepts related to computing, including logic and proof techniques; sets, sequences, relations, and functions; combinatorics; algebraic structures and Boolean algebra ; trees and graphs."},
    {"name":"ENGL2053","seasonRestrict":"n","hours":"3","Prereqs":"ENGL1013|ENGL1023|end","summer":"1","label":"ENGL 2053","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=ENGL&number=2053",
        "description":"Practice in composing abstracts, instructions, visuals, proposals, questionnaires, letters, memos, and a variety of informal and formal reports."},
    {"name":"GE_SS1","seasonRestrict":"n","hours":"4","Prereqs":"end","summer":"1","ULE":"2","label":"Science 1","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements",
        "description":null},
    {"name":"COMS2213","seasonRestrict":"n","hours":"3","Prereqs":"COMS2203|COMS2903|end","summer":"0","label":"COMS 2213","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2213",
        "description":"This course involves a study of abstract data structures and the implementation of these abstract concepts as computer algorithms."},
    {"name":"COMS2223","seasonRestrict":"s","hours":"3","Prereqs":"COMS2203|ELEG2134|end","summer":"0","label":"COMS 2223","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2223",
        "description":"Introduction to organizing and structuring hardware components of computers. Topics include internal data representation, data transfer and control, I/O, memory hierarchy, and programming in assembly."},
    {"name":"COMS3913","seasonRestrict":"s","hours":"3","Prereqs":"COMS2203|COMS2903|MATH2914|end","summer":"0","label":"COMS 3913","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3913",
        "description":"Advanced topics in discrete mathematics applicable to modeling, analysis, and computer theory. Topics include relations, graphs, analysis of algorithms, and computability."},
    {"name":"GE_SS2","seasonRestrict":"n","hours":"4","Prereqs":"GE_SS1|end","summer":"1","ULE":"2","label":"Science 2","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements",
        "description":null},
    {"name":"MATH3153","seasonRestrict":"n","hours":"3","Prereqs":"MATH2924|end","summer":"0","label":"MATH 3153","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=MATH&number=3153",
        "description":"A balanced approach emphasizing both theory and applications will be taken. Topics include descriptive statistics, exploratory data analysis, probability and probability models, discrete and continuous random variables, confidence intervals, hypothesis testing, and control charts. Students will be required to collect data, use a current statistical software package to analyze the data, and make inferences based upon the data analysis as part of an individual and/ or group project.<br /> <br /> Note: A grade of C or better must be earned in the course used to satisfy the general education mathematics requirement."},
    {"name":"COMS2700","seasonRestrict":"n","hours":"0","Prereqs":"co|COMS2703|COMS1411|COMS1403|end","summer":"0","label":"COMS 2700","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2700",
        "description":null},
    {"name":"COMS2703","seasonRestrict":"n","hours":"3","Prereqs":"co|COMS2700|COMS1411|COMS1403|end","summer":"0","label":"COMS 2703","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=2703",
        "description":null},
    {"name":"COMS3213","seasonRestrict":"f","hours":"3","Prereqs":"COMS2213|COMS3913|end","summer":"0","label":"COMS 3213","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3213",
        "description":"Concepts, implementation, and application of trees, hashing, graphs, and other advanced data structures will be studied."},
    {"name":"COMS3233","seasonRestrict":"n","hours":"3","Prereqs":"COMS2003|COMS2203|COMS2903|end","summer":"0","label":"COMS 3233","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3233",
        "description":"This course focuses on the design and implementation of relational database systems. Fundamental principles of databases such as relational model, conceptual design and normalization are covered. Students will also gain experience in database and query implementation using a DBMS and SQL."},
    {"name":"GE_FAH2","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"Fine Arts","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements",
        "description":null},
    {"name":"SPH2173","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","label":"SPH 2173","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=SPH&number=2173",
        "description":"An oral communication course for individuals in business, industry and the professions. Human communication theories and behavioral research are used as a framework for generating competencies in interviewing, briefings, conference leadership, and intergroup coordination."},
    {"name":"COMS3703","seasonRestrict":"s","hours":"3","Prereqs":"COMS2213|COMS2223|end","summer":"0","label":"COMS 3703","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3703",
        "description":"This course explores the fundamental concepts upon which modern operating systems are based. Topics include CPU, memory, file and device management, concurrent processes, protection mechanisms, and distributed systems. Several important algorithms will be implemented by the student."},
    {"name":"COMS4163","seasonRestrict":"s","hours":"3","Prereqs":"COMS3213|end","summer":"0","label":"COMS 4163","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4163",
        "description":"Formal methods for software specification. Program analysis, verification, and testing. Principles of software design. Object-oriented program implementation. Personal software process and product measurements. Program documentation. Software tools. Each student will implement a large application."},
    {"name":"COMS4700","seasonRestrict":"n","hours":"0","Prereqs":"co|COMS4703|COMS2703|COMS2903|COMS2223|end","summer":"0","label":"COMS 4700","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4700",
        "description":"Students will complete network lab exercises in support of COMS 4703."},
    {"name":"COMS4703","seasonRestrict":"n","hours":"3","Prereqs":"co|COMS4700|COMS2703|COMS2903|COMS2223|end","summer":"0","label":"COMS 4703","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4703",
        "description":"Basic elements and functional aspects of the hardware and software required to establish and control data communications in a stand-alone or network environment. Topics include communication protocols, media, network topologies, and system support software. Participation in a designated lab outside of the regularly scheduled meeting time is required."},
    {"name":"GE_SOCS2","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"SocScience","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements",
        "description":null},
    {"name":"MATH4003","seasonRestrict":"n","hours":"3","Prereqs":"MATH2924|end","summer":"0","label":"MATH 4003","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=MATH&number=4003",
        "description":"Matrices and matrix algebra, systems of linear equations, determinants, eigenvalues, eigenvectors, general vector spaces, linear transformations.<br /> <br /> Note: A grade of C or better must be earned in the course used to satisfy the general education mathematics requirement."},
    {"name":"COMS3053","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"0","ULE":"1","label":"COMS 3053","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=3503",
        "description":"This course covers the design and development of event-driven programs using an object-oriented visual programming languages such as Visual Basic, Visual C#, or Visual C++."},
    {"name":"COMS4033","seasonRestrict":"n","hours":"3","Prereqs":"COMS3233|end","summer":"0","label":"COMS 4033","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4033",
        "description":"The application of concepts, tools, procedures, and techniques involved in the development of information systems. Emphasis is placed on the systems approach to problem solving, user involvement, the management of quality, project control, and teamwork."},
    {"name":"COMS4103","seasonRestrict":"f","hours":"3","Prereqs":"COMS2213|COMS2223|COMS2319|end","summer":"0","label":"COMS 4103","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4103",
        "description":"This course emphasizes the comparative structures and capabilities of several programming languages. Major emphasis will be placed on language constructs and the run-time behavior of programs."},
    {"name":"COMS4043","seasonRestrict":"n","hours":"3","Prereqs":"COMS4033|end","summer":"0","label":"COMS 4043","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4043",
        "description":"A continuation of COMS 4033, with emphasis on the application of the theory and techniques covered in the previous course. Students will research, analyze, design, implement, test and document a complete system. Students, working as a team, will analyze, plan, implement, document, and present a complete system in a real world environment."},
    {"name":"COMS4403","seasonRestrict":"s","hours":"3","Prereqs":"COMS2223|COMS3213|COMS4103|end","summer":"0","label":"COMS 4403","link":"https:\/\/www.atu.edu\/academics\/descriptions\/?subject=COMS&number=4403",
        "description":"This course covers syntax translation, grammars and parsing, symbol tables, data representation, translating control structures, translating procedures and functions, processing expressions and data structures, and multipass translation. Students will design a computer language and implement the compiler."},
    {"name":"GE_MGMT","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"MGMT Elect","link":"https:\/\/www.atu.edu\/academics\/dev\/catalog\/graduation-requirements.html#GenEdRequirements",
        "description":""},
    {"name":"GE_STEM","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"Math/Sci","link":"https:\/\/www.atu.edu\/academics\/catalog\/colleges\/applied_sciences\/dept_comp_info_sci.html#ComputerScience",
        "description":null},
    {"name":"GE_UPPR","seasonRestrict":"n","hours":"3","Prereqs":"end","summer":"1","ULE":"2","label":"Upper Level","link":"https:\/\/www.atu.edu\/academics\/catalog\/colleges\/applied_sciences\/dept_comp_info_sci.html#ComputerScience",
        "description":null},
    false];B