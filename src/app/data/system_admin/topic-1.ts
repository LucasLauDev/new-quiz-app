import { QuestionType, Quiz } from "@/app/types/quiz";

/**
 * Sample quiz for multiple-select (checkbox) questions.
 *
 * Structure per question:
 * - `text`: the question prompt
 * - `options`: answer choices (any count — not limited to 4)
 * - `correctOptionIds`: array of all correct option ids (one or more)
 * - `explanation.correct`: shown when the user selects the exact correct set
 * - `explanation.incorrect`: keyed by option id — shown inline on each
 *   option the user wrongly selected after checking
 */
export const sysadminTopic1: Quiz = {
  id: "sysadmin-topic-1",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-1",
  title: "Topic 1 - Introduction to System Administration",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Which of the following correctly describes the definition and nature of a System Administrator?",
      options: [
        {
          id: "a",
          text: "A single trusted person responsible to administrate the whole system.",
        },
        {
          id: "b",
          text: "A person responsible for the upkeep, configuration, and reliable operation of computer systems.",
        },
        {
          id: "c",
          text: "A user who develops business application logic from scratch.",
        },
        {
          id: "d",
          text: "A user known as the root user in a UNIX environment who holds absolute power to the system.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. A System Administrator is defined as a single trusted person responsible for the upkeep, configuration, and reliable operation of systems, and is known as the root user with absolute power in UNIX.",
        incorrect: {
          c: "Incorrect. Developing business application logic is the role of a software developer, not a system administrator.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "What are the specific characteristics of the 'root' user login in a system administration environment?",
      options: [
        {
          id: "a",
          text: "The default user ID is 1.",
        },
        {
          id: "b",
          text: "The default user ID is 0 (zero).",
        },
        {
          id: "c",
          text: "The prompt '#' indicates login as root.",
        },
        {
          id: "d",
          text: "The command 'pwd' outputs '\\' to indicate the root directory.",
        },
        {
          id: "e",
          text: "The command 'pwd' outputs '/' to indicate the root directory.",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E are correct. The root user ID is 0, the '#' prompt indicates root login, and 'pwd' outputs '/' for the root directory.",
        incorrect: {
          a: "Incorrect. The default user ID for root is 0, not 1.",
          d: "Incorrect. The output for the root directory is a forward slash '/', not a backslash '\\'.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Which of the following statements reflect the philosophy of System Administration?",
      options: [
        {
          id: "a",
          text: "It involves the design, installation, configuration, operation, and support of servers to support IT infrastructure needs.",
        },
        {
          id: "b",
          text: "It generally involves planning, installing, and maintaining computer systems.",
        },
        {
          id: "c",
          text: "It focuses on maximizing hardware manufacturing efficiency for cost reduction.",
        },
        {
          id: "d",
          text: "It involves servers and clients working together in a network environment using operating systems like Windows 2008 Server or Linux.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D correctly state the philosophy of system administration as outlined in the text.",
        incorrect: {
          c: "Incorrect. Hardware manufacturing is completely outside the philosophy and scope of system administration.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "Which of the following are listed as specific tasks of a System Administrator? (Part 1)",
      options: [
        {
          id: "a",
          text: "Installing and configuring software.",
        },
        {
          id: "b",
          text: "Managing user accounts.",
        },
        {
          id: "c",
          text: "Developing new operating systems.",
        },
        {
          id: "d",
          text: "Monitoring system performance.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are direct tasks of a system administrator.",
        incorrect: {
          c: "Incorrect. Developing new operating systems is a software engineering task, not a typical system administrator task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "Which of the following are listed as specific tasks of a System Administrator? (Part 2)",
      options: [
        {
          id: "a",
          text: "Implementing data backup and recovery.",
        },
        {
          id: "b",
          text: "Ensuring security with updates and firewalls.",
        },
        {
          id: "c",
          text: "Configuring network devices.",
        },
        {
          id: "d",
          text: "Auditing financial statements for the IT department.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are direct tasks of a system administrator.",
        incorrect: {
          d: "Incorrect. Financial auditing is an accounting role, not a system administrator task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "What are the remaining specific tasks of a System Administrator mentioned in the text? (Part 3)",
      options: [
        {
          id: "a",
          text: "Troubleshooting issues.",
        },
        {
          id: "b",
          text: "Keeping detailed documentation.",
        },
        {
          id: "c",
          text: "Creating physical marketing materials.",
        },
        {
          id: "d",
          text: "Training and/or supervising staff.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct: "Options A, B, and D are correct tasks.",
        incorrect: {
          c: "Incorrect. Creating marketing materials is irrelevant to system administration.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "What are the main roles of an administrator regarding systems and software?",
      options: [
        {
          id: "a",
          text: "Install, support, and maintain servers or computer systems.",
        },
        {
          id: "b",
          text: "Install and configure new hardware and software.",
        },
        {
          id: "c",
          text: "Perform routine audits of systems and software.",
        },
        {
          id: "d",
          text: "Design custom microchips for server hardware.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C correctly list the roles of an administrator regarding maintaining systems and software.",
        incorrect: {
          d: "Incorrect. Designing microchips is hardware engineering, not a system administration role.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "What are the main roles of an administrator regarding maintenance and users?",
      options: [
        {
          id: "a",
          text: "Perform backups and restores.",
        },
        {
          id: "b",
          text: "Apply OS updates, patches, and configuration changes.",
        },
        {
          id: "c",
          text: "Manage user accounts, including adding, removing, and resetting passwords.",
        },
        {
          id: "d",
          text: "Determine the legal hiring policies for the organization.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C accurately list the maintenance and user-centric roles of an administrator.",
        incorrect: {
          d: "Incorrect. Determining legal hiring policies is an HR function, not a system administrator role.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "Which of the following correctly describes an Administrator's Privileges regarding files and processes?",
      options: [
        {
          id: "a",
          text: "Modify the contents or attributes of any files, although owned by other users.",
        },
        {
          id: "b",
          text: "Modify the contents of files only if they are the direct owner of those files.",
        },
        {
          id: "c",
          text: "Initiate or kill any process except those essential for running the system.",
        },
        {
          id: "d",
          text: "Initiate or kill any process including those essential for running the system.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Administrators can modify files owned by others and can kill processes, except essential system processes.",
        incorrect: {
          b: "Incorrect. Administrators can modify any files, regardless of ownership.",
          d: "Incorrect. They should not kill processes essential for running the system.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "Which of the following correctly describes an Administrator's Privileges regarding users and system settings?",
      options: [
        {
          id: "a",
          text: "Change any user's password without entering the old password.",
        },
        {
          id: "b",
          text: "Change any user's password only by verifying the old password first.",
        },
        {
          id: "c",
          text: "Set the system clock.",
        },
        {
          id: "d",
          text: "Control user's access to Scheduling service and Networking service.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct privileges of an administrator.",
        incorrect: {
          b: "Incorrect. Administrators do not need the old password to change a user's password.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "Which of the following are recognized Categories of System Administration? (Part 1)",
      options: [
        {
          id: "a",
          text: "Database Administrator (DBA)",
        },
        {
          id: "b",
          text: "Web Administrator",
        },
        {
          id: "c",
          text: "Network Administrator",
        },
        {
          id: "d",
          text: "Facility Administrator",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct: "Options A, B, and C are valid categories listed in the text.",
        incorrect: {
          d: "Incorrect. Facility Administrator handles physical buildings, not system administration.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "Which of the following are recognized Categories of System Administration? (Part 2)",
      options: [
        {
          id: "a",
          text: "Security Administrator",
        },
        {
          id: "b",
          text: "Technical Support",
        },
        {
          id: "c",
          text: "Computer Operator",
        },
        {
          id: "d",
          text: "Social Media Administrator",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct: "Options A, B, and C are valid categories listed in the text.",
        incorrect: {
          d: "Incorrect. Social Media Administrator is a marketing/communications role.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "How is 'Hardware' defined as a component of a computer system in the text?",
      options: [
        {
          id: "a",
          text: "The human element involved in computing.",
        },
        {
          id: "b",
          text: "The physical components of a computer.",
        },
        {
          id: "c",
          text: "Examples include CPU, memory, storage devices, and peripherals.",
        },
        {
          id: "d",
          text: "The programs and operating systems that run the computer.",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C correctly define hardware and provide the examples given in the text.",
        incorrect: {
          a: "Incorrect. This defines Warmware.",
          d: "Incorrect. This defines Software.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "How is 'Warmware' defined as a component of a computer system in the text?",
      options: [
        {
          id: "a",
          text: "The programs and operating systems that run on the hardware.",
        },
        {
          id: "b",
          text: "Often refers to the human element involved in computing.",
        },
        {
          id: "c",
          text: "Includes users, administrators, and IT staff who interact with and manage hardware and software.",
        },
        {
          id: "d",
          text: "The thermal management system of a server rack.",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C correctly define Warmware as the human element in computing.",
        incorrect: {
          a: "Incorrect. This defines Software.",
          d: "Incorrect. This is a fabricated distractor related to temperature.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "How is 'Software' defined as a component of a computer system in the text?",
      options: [
        {
          id: "a",
          text: "The programs and operating systems that run on the hardware.",
        },
        {
          id: "b",
          text: "It enables the hardware to perform tasks and execute commands.",
        },
        {
          id: "c",
          text: "The physical components such as memory and storage devices.",
        },
        {
          id: "d",
          text: "The people who interact with the hardware.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B correctly define software according to the text.",
        incorrect: {
          c: "Incorrect. This defines Hardware.",
          d: "Incorrect. This defines Warmware.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "What does 'Technical Proficiency' entail for an Administrator's Required Skills?",
      options: [
        {
          id: "a",
          text: "Knowledge of operating systems (e.g., Windows, Linux).",
        },
        {
          id: "b",
          text: "Understanding of networking concepts (e.g., TCP/IP, DNS, DHCP).",
        },
        {
          id: "c",
          text: "Familiarity with hardware and software installation and configuration.",
        },
        {
          id: "d",
          text: "Ability to communicate technical information to non-technical users.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C specifically fall under Technical Proficiency.",
        incorrect: {
          d: "Incorrect. This is part of Communication Skills, not Technical Proficiency.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "What does 'Problem-Solving Skills' entail for an Administrator's Required Skills?",
      options: [
        {
          id: "a",
          text: "Ability to diagnose and troubleshoot system and network issues.",
        },
        {
          id: "b",
          text: "Analytical thinking to resolve complex technical problems.",
        },
        {
          id: "c",
          text: "Understanding of cybersecurity principles.",
        },
        {
          id: "d",
          text: "Writing scripts in Python or PowerShell.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B specifically describe Problem-Solving Skills.",
        incorrect: {
          c: "Incorrect. This falls under Security Awareness.",
          d: "Incorrect. This falls under Automation and Scripting.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "What does 'Security Awareness' entail for an Administrator's Required Skills?",
      options: [
        {
          id: "a",
          text: "Understanding of cybersecurity principles and practices.",
        },
        {
          id: "b",
          text: "Ability to implement and manage security measures like firewalls and encryption.",
        },
        {
          id: "c",
          text: "Ability to prioritize tasks.",
        },
        {
          id: "d",
          text: "Experience with configuration management tools.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "Options A and B specifically describe Security Awareness.",
        incorrect: {
          c: "Incorrect. This is Time Management.",
          d: "Incorrect. This is Automation and Scripting.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "What do 'Automation and Scripting' and 'Programming Skills' entail for an Administrator?",
      options: [
        {
          id: "a",
          text: "Proficiency in scripting languages like Python or PowerShell for task automation.",
        },
        {
          id: "b",
          text: "Experience with configuration management tools like Ansible or Puppet.",
        },
        {
          id: "c",
          text: "Knowledge of programming languages like Bash or JavaScript.",
        },
        {
          id: "d",
          text: "Ability to write scripts and develop tools to automate and streamline administration tasks.",
        },
        {
          id: "e",
          text: "Ability to write end-user commercial software.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are all accurate descriptions of Automation, Scripting, and Programming skills from the text.",
        incorrect: {
          e: "Incorrect. Administrators write scripts to automate tasks, not commercial software for end-users.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "What do 'Communication Skills' entail for an Administrator's Required Skills?",
      options: [
        {
          id: "a",
          text: "Ability to communicate technical information clearly to non-technical users.",
        },
        {
          id: "b",
          text: "Strong documentation skills to maintain detailed records.",
        },
        {
          id: "c",
          text: "Keeping technical details hidden from management.",
        },
        {
          id: "d",
          text: "Experience with project management.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B directly describe Communication Skills as listed in the text.",
        incorrect: {
          c: "Incorrect. Communication implies sharing info clearly, not hiding it.",
          d: "Incorrect. This falls under Time Management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "What do 'Time Management' and 'Continuous Learning' entail for an Administrator?",
      options: [
        {
          id: "a",
          text: "Ability to prioritize tasks and manage time effectively.",
        },
        {
          id: "b",
          text: "Experience with project management and scheduling.",
        },
        {
          id: "c",
          text: "Willingness to stay updated with the latest technologies and best practices.",
        },
        {
          id: "d",
          text: "Ability to adapt to new tools and systems quickly.",
        },
        {
          id: "e",
          text: "Sticking exclusively to legacy systems without changing workflows.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D accurately describe the traits of Time Management and Continuous Learning.",
        incorrect: {
          e: "Incorrect. This directly contradicts 'Continuous Learning' and adapting to new tools.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "Which of the following describes the System Administrator Goal of 'Reliability'?",
      options: [
        {
          id: "a",
          text: "Ensuring that systems are consistently operational.",
        },
        {
          id: "b",
          text: "Ensuring that systems are consistently available for use.",
        },
        {
          id: "c",
          text: "Protecting data from unauthorized access.",
        },
        {
          id: "d",
          text: "Optimizing the performance of IT resources.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "Options A and B define Reliability.",
        incorrect: {
          c: "Incorrect. This defines Security.",
          d: "Incorrect. This defines Efficiency.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "Which of the following describes the System Administrator Goal of 'Security'?",
      options: [
        {
          id: "a",
          text: "Protecting data and system resources from unauthorized access.",
        },
        {
          id: "b",
          text: "Protecting data and system resources from threats.",
        },
        {
          id: "c",
          text: "Minimizing service interruptions.",
        },
        {
          id: "d",
          text: "Handling diverse and complex systems.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "Options A and B define the goal of Security.",
        incorrect: {
          c: "Incorrect. Minimizing interruptions relates to the challenge of Downtime or the goal of Reliability.",
          d: "Incorrect. This is the challenge of Complexity.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "Which of the following describes the System Administrator Goal of 'Efficiency'?",
      options: [
        {
          id: "a",
          text: "Optimizing the performance of IT resources.",
        },
        {
          id: "b",
          text: "Optimizing the utilization of IT resources.",
        },
        {
          id: "c",
          text: "Ensuring systems are consistently operational.",
        },
        {
          id: "d",
          text: "Mitigating risks to protect against cyber attacks.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "Options A and B describe the goal of Efficiency.",
        incorrect: {
          c: "Incorrect. This is Reliability.",
          d: "Incorrect. This is the challenge of Security Threats.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "Which of the following accurately describes the System Administrator Challenge of 'Security Threats'?",
      options: [
        {
          id: "a",
          text: "Managing vulnerabilities to protect against cyber-attacks.",
        },
        {
          id: "b",
          text: "Mitigating risks to protect against cyber-attacks.",
        },
        {
          id: "c",
          text: "Handling diverse and complex technologies.",
        },
        {
          id: "d",
          text: "Quickly resolving any outages.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "Options A and B define the challenge of Security Threats.",
        incorrect: {
          c: "Incorrect. This is the challenge of Complexity.",
          d: "Incorrect. This is the challenge of Downtime.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "Which of the following accurately describes the System Administrator Challenge of 'Downtime'?",
      options: [
        {
          id: "a",
          text: "Minimizing service interruptions.",
        },
        {
          id: "b",
          text: "Quickly resolving any outages.",
        },
        {
          id: "c",
          text: "Handling diverse technologies within an organization.",
        },
        {
          id: "d",
          text: "Managing vulnerabilities.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "Options A and B define the challenge of Downtime.",
        incorrect: {
          c: "Incorrect. This is Complexity.",
          d: "Incorrect. This is Security Threats.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "Which of the following accurately describes the System Administrator Challenge of 'Complexity'?",
      options: [
        {
          id: "a",
          text: "Handling diverse systems within an organization.",
        },
        {
          id: "b",
          text: "Handling often complex technologies within an organization.",
        },
        {
          id: "c",
          text: "Mitigating risks to protect against cyber attacks.",
        },
        {
          id: "d",
          text: "Optimizing the utilization of IT resources.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "Options A and B describe the challenge of Complexity.",
        incorrect: {
          c: "Incorrect. This is Security Threats.",
          d: "Incorrect. This is the goal of Efficiency.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "In the context of Computer System Tasks & Data Handling, what does 'Input' refer to?",
      options: [
        {
          id: "a",
          text: "Accepting data or commands in a form that the computer can use.",
        },
        {
          id: "b",
          text: "Sending data or commands to the processing unit.",
        },
        {
          id: "c",
          text: "Accepting figures, facts, or sets of instructions.",
        },
        {
          id: "d",
          text: "Manipulating data into information that people require.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct: "Options A, B, and C accurately define the Input process.",
        incorrect: {
          d: "Incorrect. Manipulating data into information is Data Processing.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "In the context of Computer System Tasks & Data Handling, what does 'Data Processing' or 'The Processor' refer to?",
      options: [
        {
          id: "a",
          text: "Acting on the information.",
        },
        {
          id: "b",
          text: "The CPU (which has electronic circuitry) manipulating input data into required information.",
        },
        {
          id: "c",
          text: "Executing computer instructions.",
        },
        {
          id: "d",
          text: "Displaying the processed data to the user.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C accurately define the processing task of a computer system.",
        incorrect: {
          d: "Incorrect. Displaying the data is the Output task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "In the context of Computer System Tasks & Data Handling, what does 'Output' refer to?",
      options: [
        {
          id: "a",
          text: "Displaying the processed data and information in an understandable and usable form.",
        },
        {
          id: "b",
          text: "Processing and generating results.",
        },
        {
          id: "c",
          text: "Placing information in memories.",
        },
        {
          id: "d",
          text: "Accepting figures or facts.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "Options A and B accurately define the Output task.",
        incorrect: {
          c: "Incorrect. Placing information in memories is Storage.",
          d: "Incorrect. Accepting facts is Input.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "In the context of Computer System Tasks & Data Handling, what does 'Storage' or 'Storing Information' refer to?",
      options: [
        {
          id: "a",
          text: "Placing information in memories.",
        },
        {
          id: "b",
          text: "Using secondary storage devices like hard disks, diskettes, and pendrives.",
        },
        {
          id: "c",
          text: "Storing data and programs outside the computer itself temporarily or permanently.",
        },
        {
          id: "d",
          text: "Executing computer instructions using electronic circuitry.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct: "Options A, B, and C define the storage task and mechanisms.",
        incorrect: {
          d: "Incorrect. Executing instructions is the Data Processing task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "What action does a System Administrator perform regarding the system clock?",
      options: [
        {
          id: "a",
          text: "Set the system clock.",
        },
        {
          id: "b",
          text: "Remove the system clock.",
        },
        {
          id: "c",
          text: "Sync the system clock only via hardware replacement.",
        },
        {
          id: "d",
          text: "They do not have privileges to alter the system clock.",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. Setting the system clock is an explicit privilege of the system administrator.",
        incorrect: {
          b: "Incorrect. Removing it is not a standard task mentioned.",
          c: "Incorrect. It is a software/OS privilege, not just hardware replacement.",
          d: "Incorrect. They absolutely have this privilege.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "Which of the following actions are strictly NOT permitted by standard Administrator privileges according to Chapter 1?",
      options: [
        {
          id: "a",
          text: "Killing essential processes required for running the system.",
        },
        {
          id: "b",
          text: "Changing a user's password without entering the old password.",
        },
        {
          id: "c",
          text: "Modifying files owned by another user.",
        },
        {
          id: "d",
          text: "Controlling a user's access to networking services.",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. The text explicitly states administrators can initiate or kill any process *except* essential for running the system.",
        incorrect: {
          b: "Incorrect. They CAN do this.",
          c: "Incorrect. They CAN do this.",
          d: "Incorrect. They CAN do this.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "According to the philosophy of system administration, what operating systems are given as examples for network environments?",
      options: [
        {
          id: "a",
          text: "Windows 2008 Server",
        },
        {
          id: "b",
          text: "Linux platform",
        },
        {
          id: "c",
          text: "Android OS",
        },
        {
          id: "d",
          text: "macOS Mobile",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. The notes explicitly mention Windows 2008 Server and Linux platform as examples.",
        incorrect: {
          c: "Incorrect. Android OS was not mentioned in the philosophy section.",
          d: "Incorrect. macOS Mobile was not mentioned.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "Under the 'Administrator's Required Skills', which of the following falls specifically under 'Technical Proficiency'?",
      options: [
        {
          id: "a",
          text: "Understanding TCP/IP, DNS, and DHCP.",
        },
        {
          id: "b",
          text: "Writing scripts in Python.",
        },
        {
          id: "c",
          text: "Using configuration management tools like Ansible.",
        },
        {
          id: "d",
          text: "Diagnosing and troubleshooting system issues.",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. Understanding networking concepts like TCP/IP, DNS, and DHCP is explicitly listed under Technical Proficiency.",
        incorrect: {
          b: "Incorrect. This falls under Automation and Scripting or Programming Skills.",
          c: "Incorrect. This falls under Automation and Scripting.",
          d: "Incorrect. This falls under Problem-Solving Skills.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "Which of the following best defines the 'Warmware' component of a computer system?",
      options: [
        {
          id: "a",
          text: "Users who interact with the hardware and software.",
        },
        {
          id: "b",
          text: "Administrators and IT staff who manage the hardware and software.",
        },
        {
          id: "c",
          text: "The cooling systems that regulate CPU temperature.",
        },
        {
          id: "d",
          text: "The storage devices used to hold data temporarily.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B correctly define Warmware as the human element (users, administrators, IT staff).",
        incorrect: {
          c: "Incorrect. This is a distractor related to hardware cooling.",
          d: "Incorrect. This refers to Storage (Hardware).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "Which of the following is true about the 'root' user?",
      options: [
        {
          id: "a",
          text: "It holds absolute power to the system.",
        },
        {
          id: "b",
          text: "Its user-id and password are automatically created during installation.",
        },
        {
          id: "c",
          text: "It uses the special user-id value of 0 (zero).",
        },
        {
          id: "d",
          text: "It is restricted from accessing scheduling services.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct facts about the root user as stated in the text.",
        incorrect: {
          d: "Incorrect. The root user/administrator controls access to scheduling services, and is not restricted from it.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "What does the '#' symbol indicate in a system administration terminal context according to the notes?",
      options: [
        {
          id: "a",
          text: "It indicates a login as root.",
        },
        {
          id: "b",
          text: "It indicates a standard user prompt.",
        },
        {
          id: "c",
          text: "It is the command for print working directory.",
        },
        {
          id: "d",
          text: "It means the root directory.",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct: "Option A is correct. The prompt '#' indicates login as root.",
        incorrect: {
          b: "Incorrect. It specifically indicates a root (admin) user, not a standard user.",
          c: "Incorrect. The command is 'pwd'.",
          d: "Incorrect. The root directory is indicated by '/'.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "What does the command 'pwd' stand for and output in the context of the root login example?",
      options: [
        {
          id: "a",
          text: "It stands for 'print working directory'.",
        },
        {
          id: "b",
          text: "It outputs '/' meaning the root directory.",
        },
        {
          id: "c",
          text: "It stands for 'password working directory'.",
        },
        {
          id: "d",
          text: "It outputs '#' to show administrator privileges.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. 'pwd' is the command for print working directory, and in the example, it outputs '/' indicating the root directory.",
        incorrect: {
          c: "Incorrect. It stands for 'print working directory'.",
          d: "Incorrect. '#' is the prompt, not the output of 'pwd'.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "What are the 4 main aspects of data handling listed in the Computer System Tasks?",
      options: [
        {
          id: "a",
          text: "Input Devices",
        },
        {
          id: "b",
          text: "The Processor",
        },
        {
          id: "c",
          text: "Output Devices",
        },
        {
          id: "d",
          text: "Storage",
        },
        {
          id: "e",
          text: "Network Topologies",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are the exact 4 main aspects of data handling covered in Chapter 1.",
        incorrect: {
          e: "Incorrect. Network Topologies are not one of the 4 main aspects of data handling (Input, Processor, Output, Storage).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q41",
      text: "Which of the following storage mediums are explicitly listed as examples of 'secondary storage' in Chapter 1?",
      options: [
        {
          id: "a",
          text: "Hard disk",
        },
        {
          id: "b",
          text: "Diskettes",
        },
        {
          id: "c",
          text: "Pendrives",
        },
        {
          id: "d",
          text: "Primary RAM",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct examples of secondary storage provided in the text.",
        incorrect: {
          d: "Incorrect. RAM is primary storage/memory, not secondary storage.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q42",
      text: "According to the notes, what are the characteristics of secondary storage?",
      options: [
        {
          id: "a",
          text: "It can store data and programmes outside the computer itself.",
        },
        {
          id: "b",
          text: "It supplements memory or primary storage.",
        },
        {
          id: "c",
          text: "It can hold data or programmes temporarily.",
        },
        {
          id: "d",
          text: "It contains the electronic circuitry that executes computer instructions.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Secondary storage supplements primary storage, stores data outside the computer, and can hold data temporarily.",
        incorrect: {
          d: "Incorrect. The electronic circuitry that executes instructions is the CPU (Processor).",
        },
      },
    },
  ],
};
