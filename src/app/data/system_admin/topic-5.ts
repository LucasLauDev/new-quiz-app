import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic5: Quiz = {
  id: "sysadmin-topic-5",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-5",
  title: "Topic 5 - Network Models",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Scenario: A newly appointed Chief Information Officer (CIO) is tasked with restructuring the organization's IT department. To establish a clear network and system administration model, which of the following elements MUST the model define according to the principles of system administration? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "How IT systems are managed",
        },
        {
          id: "b",
          text: "How control is distributed",
        },
        {
          id: "c",
          text: "How hardware is physically installed in the data center",
        },
        {
          id: "d",
          text: "Who is responsible for decision-making",
        },
        {
          id: "e",
          text: "Which specific firewall vendor to purchase for the network",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. According to Chapter 5, a network and system administration model defines how IT systems are managed, how control is distributed, and who is responsible for decision-making. These are critical points for subjective questions regarding the definition of administration models.",
        incorrect: {
          c: "Incorrect — Physical hardware installation is a localized operational procedure, not a defining characteristic of an organizational administration model.",
          e: "Incorrect — Choosing specific vendors is a procurement or technical decision, not a structural definition of the administration model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "Scenario: During a board meeting, the IT Director emphasizes that choosing the right administration model is critical because it fundamentally influences core organizational outcomes. Based on system administration concepts, what does an administration model determine? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "System security",
        },
        {
          id: "b",
          text: "Administrative efficiency",
        },
        {
          id: "c",
          text: "Organizational scalability",
        },
        {
          id: "d",
          text: "The exact physical location of the server room",
        },
        {
          id: "e",
          text: "The number of cables required for network topology",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The chosen network and system administration model directly determines the system security, administrative efficiency, and organizational scalability of the company.",
        incorrect: {
          d: "Incorrect — The physical location of a server room is a facilities or infrastructure consideration, not determined by the administration model.",
          e: "Incorrect — Cabling requirements are determined by the physical network topology, not the logical administration model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Scenario: A small-to-medium enterprise (SME) manages all user accounts, security policies, and system updates strictly from its headquarters. No branch offices have independent IT staff or local control. Which characteristics accurately reflect this specific administration model? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Uniform policies and configurations",
        },
        {
          id: "b",
          text: "Central monitoring and management",
        },
        {
          id: "c",
          text: "Standardized security controls",
        },
        {
          id: "d",
          text: "Independent system management",
        },
        {
          id: "e",
          text: "Flexible configurations for local branches",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The scenario describes a Centralized Administration Model, which is characterized by uniform policies and configurations, central monitoring and management, and standardized security controls.",
        incorrect: {
          d: "Incorrect — Independent system management is a characteristic of a Decentralized model, not a Centralized one.",
          e: "Incorrect — Flexible configurations for local branches apply to Decentralized or Hybrid models, as Centralized models rely on uniformity.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "Scenario: Continuing with the SME that uses a Centralized Administration Model, the management is reviewing the benefits of maintaining this strict top-down structure. Which of the following are the recognized advantages of this approach? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Strong security and consistency",
        },
        {
          id: "b",
          text: "Easier policy enforcement",
        },
        {
          id: "c",
          text: "Faster response time to local issues",
        },
        {
          id: "d",
          text: "High flexibility for regional departments",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. The primary advantages of a Centralized Administration Model are strong security and consistency, and easier policy enforcement across the board.",
        incorrect: {
          c: "Incorrect — Faster response time is an advantage of a Decentralized model; Centralized models often have slower response times due to dependency on one team.",
          d: "Incorrect — High flexibility is an advantage of Decentralized models, whereas Centralized models lack flexibility.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "Scenario: A government agency routes every system change request through a single central IT department. Recently, the main central server crashed, bringing the entire organization's operations to a halt. Which limitations of their current administration model does this incident highlight? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Single point of failure",
        },
        {
          id: "b",
          text: "Slower response due to dependency on one team",
        },
        {
          id: "c",
          text: "Inconsistent policies across departments",
        },
        {
          id: "d",
          text: "Difficult to maintain security standards",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. The Centralized Administration Model's main limitations are that it creates a single point of failure (as seen when the server crashed) and results in slower responses because all requests depend on one central team.",
        incorrect: {
          c: "Incorrect — Inconsistent policies are a limitation of the Decentralized model, not the Centralized model.",
          d: "Incorrect — Difficulty in maintaining security standards is a risk associated with Decentralized models.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "Scenario: A multinational corporation allows its Asian, European, and US offices to independently manage their own IT systems, set distinct security policies, and configure local servers. What characteristics define this administration model? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Local decision-making",
        },
        {
          id: "b",
          text: "Independent system management",
        },
        {
          id: "c",
          text: "Flexible configurations",
        },
        {
          id: "d",
          text: "Uniform policies across all branches",
        },
        {
          id: "e",
          text: "Central control for critical services",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The scenario describes a Decentralized Administration Model, which is characterized by local decision-making, independent system management, and flexible configurations.",
        incorrect: {
          d: "Incorrect — Uniform policies are a characteristic of the Centralized model.",
          e: "Incorrect — Central control for critical services is a characteristic of a Hybrid model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "Scenario: The multinational corporation's Asian branch recently adopted a new operational software without needing approval from the global headquarters, deploying it successfully within a day. What advantages of their administration model does this illustrate? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Faster response time",
        },
        {
          id: "b",
          text: "High flexibility",
        },
        {
          id: "c",
          text: "Standardized security controls",
        },
        {
          id: "d",
          text: "Easier policy enforcement across the globe",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. The ability to deploy software quickly and adapt to local needs illustrates the faster response time and high flexibility advantages of the Decentralized Administration Model.",
        incorrect: {
          c: "Incorrect — Standardized security controls are an advantage of Centralized models, whereas Decentralized models struggle with standardization.",
          d: "Incorrect — Policy enforcement is harder, not easier, in a Decentralized model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "Scenario: An internal audit of a multinational corporation utilizing a decentralized IT model revealed severe vulnerabilities. The European office used outdated firewalls while the US office used strict modern protocols. What limitations of their administration model caused this discrepancy? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Inconsistent policies",
        },
        {
          id: "b",
          text: "Difficult to maintain security standards",
        },
        {
          id: "c",
          text: "Single point of failure",
        },
        {
          id: "d",
          text: "Slower response to local IT requests",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. The vulnerabilities arose because the Decentralized model inherently leads to inconsistent policies and makes it difficult to maintain uniform security standards across different units.",
        incorrect: {
          c: "Incorrect — A single point of failure is a limitation of the Centralized model.",
          d: "Incorrect — Slower response is a limitation of the Centralized model; Decentralized models typically respond faster locally.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "Scenario: A university manages its student database and authentication server at the central IT level but allows individual faculties to manage their own specific lab software and local servers. Which statements accurately describe the characteristics of this hybrid model? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Central control for critical services",
        },
        {
          id: "b",
          text: "Local autonomy for specific needs",
        },
        {
          id: "c",
          text: "All decision-making is fully centralized",
        },
        {
          id: "d",
          text: "Management is entirely distributed without any central oversight",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. A Hybrid Administration Model is characterized by maintaining central control for critical services while allowing local autonomy for specific, distributed needs.",
        incorrect: {
          c: "Incorrect — Full centralization defines the Centralized model, not the Hybrid model.",
          d: "Incorrect — Completely distributed management without central oversight defines the Decentralized model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "Scenario: The university's IT structure successfully balances global university policies with the specific needs of the engineering labs. However, during a campus-wide system upgrade, coordination between the central IT and the faculty admins became highly problematic. Which points about the Hybrid model are demonstrated here? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Balance between control and flexibility",
        },
        {
          id: "b",
          text: "Improved efficiency and scalability",
        },
        {
          id: "c",
          text: "More complex to manage",
        },
        {
          id: "d",
          text: "Requires strong coordination",
        },
        {
          id: "e",
          text: "Creates a single point of failure for local lab servers",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. The scenario demonstrates the advantages of the Hybrid model (balance between control/flexibility, improved efficiency/scalability) as well as its limitations (more complex to manage, requiring strong coordination).",
        incorrect: {
          e: "Incorrect — Single point of failure is a limitation of the strictly Centralized model, not an inherent trait of the distributed local servers in a Hybrid model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "Scenario: An IT consulting firm is advising three different clients on the best administration model for their specific scale and needs. Based on standard administration model comparisons, which mappings are correct? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Centralized is best for small-medium organizations",
        },
        {
          id: "b",
          text: "Decentralized is best for large/distributed organizations",
        },
        {
          id: "c",
          text: "Hybrid is best for universities / enterprises",
        },
        {
          id: "d",
          text: "Centralized is best for globally distributed enterprises",
        },
        {
          id: "e",
          text: "Decentralized is best for small-medium organizations",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct mappings according to the 'Comparison of Administration Model' table in Chapter 5.",
        incorrect: {
          d: "Incorrect — Centralized is generally too rigid and slow for globally distributed enterprises; Decentralized or Hybrid are better suited.",
          e: "Incorrect — Small-medium organizations benefit most from Centralized models due to easier management, not Decentralized.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "Scenario: An organization wants to implement a centralized system to organize network entities and store information about users and devices. Which of the following are accurate regarding Directory Services? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It acts as a central database for an organization's IT environment",
        },
        {
          id: "b",
          text: "It stores information about users, devices, and resources",
        },
        {
          id: "c",
          text: "Active Directory is an example",
        },
        {
          id: "d",
          text: "Domain Name System is an example",
        },
        {
          id: "e",
          text: "It distributes control across multiple independent units to prevent tracking",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. A directory service is a centralized system acting as a central database to store info on users/devices/resources and organize network entities. Active Directory and DNS are key examples.",
        incorrect: {
          e: "Incorrect — Directory services rely on centralization to manage information efficiently, not on distributing control to prevent tracking.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "Scenario: When an employee logs into the corporate network, the system first verifies their username and password, then evaluates if they are permitted to access the restricted HR folder. Which core functions of Directory Services are being executed respectively? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Authentication verifies user identity",
        },
        {
          id: "b",
          text: "Authorization determines what resources a user can access",
        },
        {
          id: "c",
          text: "Authentication controls permissions and roles",
        },
        {
          id: "d",
          text: "Authorization ensures only valid users can access the system",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Authentication verifies user identity (username/password) to ensure only valid users access the system. Authorization determines what resources the user can access and controls permissions and roles.",
        incorrect: {
          c: "Incorrect — Controlling permissions and roles is the function of Authorization, not Authentication.",
          d: "Incorrect — Ensuring only valid users can access the system is the function of Authentication, not Authorization.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "Scenario: The IT team uses Active Directory to manage all network printers, files, and servers from a single interface, rather than configuring each device individually. This leverages which core functions of directory services? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Centralized Data Management by storing all user and system information in one place",
        },
        {
          id: "b",
          text: "Resource Organization by managing printers, files, servers, and network devices",
        },
        {
          id: "c",
          text: "Decentralized administration by allowing printers to manage themselves",
        },
        {
          id: "d",
          text: "Authentication by granting printers access to users",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Managing devices from a single interface is an example of Centralized Data Management and Resource Organization (managing printers, files, servers, and network devices).",
        incorrect: {
          c: "Incorrect — Directory services centralize management; they do not decentralize it to the printers themselves.",
          d: "Incorrect — Authentication applies to verifying user identities, not granting physical devices access to users.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "Scenario: A company integrates Active Directory specifically to tighten its network defense. How does a directory service demonstrate its importance in security? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Centralized Access Control manages all login and permissions in one system",
        },
        {
          id: "b",
          text: "Stronger Authentication Mechanisms reduce unauthorized access",
        },
        {
          id: "c",
          text: "Policy Enforcement applies consistent security rules across the organization",
        },
        {
          id: "d",
          text: "Audit and Monitoring Support tracks user activities and detects suspicious behavior",
        },
        {
          id: "e",
          text: "It physically prevents hardware failures in servers",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. These are the four key points detailing the importance of directory services in security as listed in Chapter 5.",
        incorrect: {
          e: "Incorrect — Directory services are software-based logical management systems; they cannot physically prevent hardware failures.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "Scenario: An administrator notes that deploying Active Directory has drastically cut down the hours spent on onboarding new hires and updating system configurations. Which points explain the importance of directory services in administrative efficiency? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Simplifies User Management to add, modify, or delete users easily",
        },
        {
          id: "b",
          text: "Reduces Administrative Workload by eliminating the need to configure each system individually",
        },
        {
          id: "c",
          text: "Supports Scalability to manage thousands of users and devices",
        },
        {
          id: "d",
          text: "Improves Operational Efficiency for faster system access and management",
        },
        {
          id: "e",
          text: "It automatically repairs physical hardware faults",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. These points cover the importance of directory services in administration and efficiency.",
        incorrect: {
          e: "Incorrect — Administrative efficiency in directory services does not include automated physical hardware repair; it focuses on user, permission, and configuration management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "Scenario: A network engineer is studying standard protocols used for managing user identities and network resources. Which of the following are identified as LDAP-Based Directory Services? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Active Directory (AD)",
        },
        {
          id: "b",
          text: "Novell eDirectory",
        },
        {
          id: "c",
          text: "Domain Name System (DNS)",
        },
        {
          id: "d",
          text: "Cisco IOS",
        },
        {
          id: "e",
          text: "Windows Defender",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. According to the text, Active Directory, Novell eDirectory, and Domain Name System (DNS) are examples of LDAP-Based Directory Services.",
        incorrect: {
          d: "Incorrect — Cisco IOS is a network operating system for routers and switches, not a directory service.",
          e: "Incorrect — Windows Defender is an antivirus/security program, not a directory service.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "Scenario: A system administrator's daily checklist includes identifying potential system issues, repairing failed hardware, and applying controlled software updates to ensure system availability, reliability, and performance. Which core areas of system management processes are represented here? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Diagnostics to identify problems",
        },
        {
          id: "b",
          text: "Fault Management to fix problems",
        },
        {
          id: "c",
          text: "Change Management to control system changes",
        },
        {
          id: "d",
          text: "Resource Organization to manage printers",
        },
        {
          id: "e",
          text: "Decentralized Control to distribute tasks",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The three key areas of System Management Processes mentioned in the text are Diagnostics, Fault Management, and Change Management.",
        incorrect: {
          d: "Incorrect — Resource Organization is a core function of Directory Services, not a top-level system management process category.",
          e: "Incorrect — Decentralized Control is a type of Administration Model, not a system management process.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "Scenario: A server is running unusually slow. The IT technician investigates by utilizing system monitoring tools, reviewing log files, and evaluating performance metrics. This process represents Diagnostics. What does Diagnostics primarily involve and utilize? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Detecting system issues",
        },
        {
          id: "b",
          text: "Analyzing system performance",
        },
        {
          id: "c",
          text: "System monitoring tools",
        },
        {
          id: "d",
          text: "Log analysis and Performance metrics",
        },
        {
          id: "e",
          text: "Isolating the hardware cause and repairing it",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Diagnostics is the process of detecting system issues and analyzing system performance, using methods like system monitoring tools, log analysis, and performance metrics.",
        incorrect: {
          e: "Incorrect — Isolating the cause and repairing it falls under Fault Management, not Diagnostics.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "Scenario: By reviewing performance metrics, an admin detects an unauthorized access attempt before any data is compromised. Why is this diagnostic phase so crucial, and what other issues can it typically detect? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Early detection prevents major failures",
        },
        {
          id: "b",
          text: "It helps administrators take proactive action",
        },
        {
          id: "c",
          text: "It detects slow system performance",
        },
        {
          id: "d",
          text: "It detects network failure",
        },
        {
          id: "e",
          text: "It documents the change for software upgrades",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Diagnostics is vital because early detection prevents major failures and enables proactive action. Examples of issues detected include slow system performance, network failure, and unauthorized access.",
        incorrect: {
          e: "Incorrect — Documenting changes is a step in Change Management, not a part of Diagnostics.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "Scenario: An application suddenly stops responding to user commands, freezing the interface, and eventually closes abruptly. According to the IEEE classification of software anomalies, which of the following terms describe these events? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Program hang-up",
        },
        {
          id: "b",
          text: "Program crash",
        },
        {
          id: "c",
          text: "Operating system crash",
        },
        {
          id: "d",
          text: "Hardware failure",
        },
        {
          id: "e",
          text: "Human misconfiguration",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. The application stopping response maps to 'Program hang-up', and closing abruptly maps to 'Program crash' under the IEEE classification of software anomalies.",
        incorrect: {
          c: "Incorrect — The scenario describes an application failing, not the entire Operating System.",
          d: "Incorrect — Hardware failure is a physical fault, not a software anomaly classification.",
          e: "Incorrect — Human misconfiguration is a human-edge error, not an IEEE software anomaly.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "Scenario: A user runs a financial report but receives a completely blank screen instead of the expected data, followed by a popup notification stating 'Error 404'. Which IEEE software anomalies does this reflect? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "No output",
        },
        {
          id: "b",
          text: "System error message",
        },
        {
          id: "c",
          text: "Service degraded",
        },
        {
          id: "d",
          text: "Input problem",
        },
        {
          id: "e",
          text: "Total power failure",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Receiving a blank screen maps to 'No output', and the popup notification maps to 'System error message' under the IEEE classification.",
        incorrect: {
          c: "Incorrect — Service degraded usually refers to slow or reduced performance, not complete absence of output.",
          d: "Incorrect — The issue is with the generated report (output), not necessarily the input.",
          e: "Incorrect — Total power failure is a physical infrastructure issue, not an IEEE software anomaly.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "Scenario: During an outage investigation, it is discovered that a technician accidentally pulled the wrong cable because they were overwhelmed and stressed by the complex wiring setup in the server room. Which human edge error sources apply here? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Confusion/stress/intoxication",
        },
        {
          id: "b",
          text: "Carelessness",
        },
        {
          id: "c",
          text: "Inability to deal with complexity",
        },
        {
          id: "d",
          text: "Software program crash",
        },
        {
          id: "e",
          text: "Hardware component degradation",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Being overwhelmed and stressed maps to 'Confusion/stress', pulling the wrong cable maps to 'Carelessness', and the complex wiring maps to 'Inability to deal with complexity' under human error sources.",
        incorrect: {
          d: "Incorrect — A software program crash is an IEEE software anomaly, not a human error.",
          e: "Incorrect — Hardware component degradation is a physical fault, not a human error.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "Scenario: A manager instructed an engineer to perform a routine server reboot, but the engineer misunderstood the timing and rebooted it during peak operational hours. Furthermore, the engineer used a random, undocumented procedure. Which human edge errors occurred? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Misunderstanding/miscommunication",
        },
        {
          id: "b",
          text: "Management error",
        },
        {
          id: "c",
          text: "Random procedural errors",
        },
        {
          id: "d",
          text: "Systematic procedural errors",
        },
        {
          id: "e",
          text: "Ignorance",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The timing mistake is a 'Misunderstanding/miscommunication', the initial instruction leading to the fault could be tied to 'Management error', and using an undocumented method is a 'Random procedural error'.",
        incorrect: {
          d: "Incorrect — Systematic procedural errors refer to deeply ingrained, consistently wrong processes, not a one-off random undocumented procedure.",
          e: "Incorrect — Ignorance implies lack of knowledge, whereas the scenario specifically highlights miscommunication and random procedural deviation.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "Scenario: A network switch burns out, causing a localized outage. A technician detects the issue, identifies the burnt switch, and replaces it. What does Fault Management involve, and what type of fault is this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Detecting faults",
        },
        {
          id: "b",
          text: "Isolating the cause",
        },
        {
          id: "c",
          text: "Fixing the issue",
        },
        {
          id: "d",
          text: "Hardware failure type",
        },
        {
          id: "e",
          text: "Adaptive maintenance type",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Fault management involves detecting faults, isolating the cause, and fixing the issue. A burnt switch is categorized under the 'Hardware failure' type.",
        incorrect: {
          e: "Incorrect — This is an example of Corrective maintenance (or fault fixing), not Adaptive maintenance (which involves adjusting to prevent future environmental issues).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "Scenario: To fix a misconfigured router (a human error fault), the sysadmin initiates a troubleshooting sequence and performs system recovery to ensure operations continue. Why are these fault management activities critical? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They minimize downtime",
        },
        {
          id: "b",
          text: "They ensure system continuity",
        },
        {
          id: "c",
          text: "They troubleshoot and perform system recovery",
        },
        {
          id: "d",
          text: "They plan and test controlled software updates",
        },
        {
          id: "e",
          text: "They analyze logs to detect initial unauthorized access",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Troubleshooting and system recovery are key fault management activities, and their importance lies in minimizing downtime and ensuring system continuity.",
        incorrect: {
          d: "Incorrect — Planning and testing software updates is part of Change Management.",
          e: "Incorrect — Analyzing logs to detect unauthorized access is part of Diagnostics.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "Scenario: The IT department schedules a weekend maintenance window to deploy the new Windows OS version to all workstations and update the firewall configuration rules. What process and specific examples does this represent? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Change Management",
        },
        {
          id: "b",
          text: "Software updates",
        },
        {
          id: "c",
          text: "System upgrades",
        },
        {
          id: "d",
          text: "Configuration changes",
        },
        {
          id: "e",
          text: "Fault detection",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Deploying new OS versions and updating rules falls under Change Management, specifically encompassing software updates, system upgrades, and configuration changes.",
        incorrect: {
          e: "Incorrect — Fault detection is part of Diagnostics and Fault Management, not scheduled Change Management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "Scenario: Before pushing a major system upgrade, the IT team rigidly follows a change management protocol. Why is managing system changes in a controlled manner so important for the organization? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It prevents unexpected system failures",
        },
        {
          id: "b",
          text: "It reduces risk",
        },
        {
          id: "c",
          text: "It ensures stability",
        },
        {
          id: "d",
          text: "It isolates and repairs physical hardware faults",
        },
        {
          id: "e",
          text: "It prevents employees from forgetting passwords",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The primary importance of Change Management is to prevent unexpected system failures, reduce operational risk, and ensure system stability.",
        incorrect: {
          d: "Incorrect — Isolating and repairing faults is the objective of Fault Management.",
          e: "Incorrect — Preventing employees from forgetting passwords is an issue of user management and directory services, not system change management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "Scenario: A sysadmin wants to modify a critical database configuration securely. According to the key steps of Change Management, which actions must be taken? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Plan the change",
        },
        {
          id: "b",
          text: "Test the change",
        },
        {
          id: "c",
          text: "Implement the change",
        },
        {
          id: "d",
          text: "Document the change",
        },
        {
          id: "e",
          text: "Isolate the cause",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D represent the exact four key steps of Change Management outlined in the text: Plan, Test, Implement, Document.",
        incorrect: {
          e: "Incorrect — Isolating the cause is a step in Fault Management, not Change Management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "Scenario: An organization is building its Information System Infrastructure to support data processing and distribution. What features and components must this infrastructure provide? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Facilitates Information Flow",
        },
        {
          id: "b",
          text: "Enhances Data Management and Storage",
        },
        {
          id: "c",
          text: "Supports Business and Government Operations",
        },
        {
          id: "d",
          text: "Enables Knowledge Sharing and Dissemination",
        },
        {
          id: "e",
          text: "Promotes Technological Integration and Innovation",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "All options (A, B, C, D, and E) are correct. These are the stated component features of an Information System Infrastructure that supports the creation, storage, processing, and distribution of information.",
        incorrect: {},
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "Scenario: The newly built infrastructure acts as the foundational layer for the company's daily functions. What specific roles does this system infrastructure play in system operations? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Enables system availability and reliability",
        },
        {
          id: "b",
          text: "Supports application execution and data processing",
        },
        {
          id: "c",
          text: "Ensures communication between system components",
        },
        {
          id: "d",
          text: "Provides scalability for increasing workloads",
        },
        {
          id: "e",
          text: "Manages human resources payroll manually",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. These represent the specific roles of infrastructure in system operations according to the text.",
        incorrect: {
          e: "Incorrect — While infrastructure supports HR software (data processing), it does not manually manage human resources payroll.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "Scenario: The Chief Architect defines the 'System Organization Concept' for the company's infrastructure, deciding to use a centralized architecture to assign roles and hierarchies. What does the System Organization Concept refer to and include? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "How infrastructure components are structured and managed",
        },
        {
          id: "b",
          text: "Centralized vs decentralized architecture",
        },
        {
          id: "c",
          text: "Defines roles, responsibilities, and system hierarchy",
        },
        {
          id: "d",
          text: "Impacts efficiency and maintainability",
        },
        {
          id: "e",
          text: "The physical process of replacing a burnt switch",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. The System Organization Concept refers to how components are structured (centralized vs decentralized), defining hierarchies, and ultimately impacting efficiency and maintainability.",
        incorrect: {
          e: "Incorrect — The physical replacement of hardware is an operational Fault Management task, not a high-level System Organization Concept.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "Scenario: The company invests heavily in proper infrastructure design upfront rather than building it haphazardly. What are the recognized benefits and importance of doing this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Improves system performance and stability",
        },
        {
          id: "b",
          text: "Reduces downtime and operational risk",
        },
        {
          id: "c",
          text: "Supports security and data integrity",
        },
        {
          id: "d",
          text: "Enables efficient resource utilization",
        },
        {
          id: "e",
          text: "Completely eliminates the possibility of human error",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. These points detail the importance of proper infrastructure design, focusing on performance, risk reduction, security, and efficiency.",
        incorrect: {
          e: "Incorrect — No infrastructure design can completely eliminate human error, as humans operate the edge of the system.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "Scenario: A network engineer maps out how different nodes (computers, people, devices) connect and interact, noting that the structural model will affect efficiency, resilience, and security. Which of the following are common types of network models? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Random Network",
        },
        {
          id: "b",
          text: "Scale-Free Network",
        },
        {
          id: "c",
          text: "Hierarchical Network",
        },
        {
          id: "d",
          text: "Decentralized File Network",
        },
        {
          id: "e",
          text: "Hybrid Node Network",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The three common types of network models mentioned in the text are Random Network, Scale-Free Network, and Hierarchical Network.",
        incorrect: {
          d: "Incorrect — Decentralized File Network is a specific application concept, not one of the core theoretical network models listed.",
          e: "Incorrect — Hybrid Node Network is a made-up term in this context; Hybrid refers to an administration model, not the basic network connection models taught here.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "Scenario: To actively manage and monitor the computer networks, the IT team uses a suite of specialized data systems, hardware, and software. Which of the following are categorized as Network Management Technologies? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Network Monitoring and Performance Management",
        },
        {
          id: "b",
          text: "Configuration Management",
        },
        {
          id: "c",
          text: "Fault Detection and Troubleshooting",
        },
        {
          id: "d",
          text: "Virtualization and Software-Defined Networking (SDN)",
        },
        {
          id: "e",
          text: "Automation and Artificial Intelligence in Network Management",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "All options (A, B, C, D, and E) are correct. These represent the primary network management technologies used to ensure networks function efficiently, securely, and reliably.",
        incorrect: {},
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "Scenario: A company's server suddenly crashed due to a broken cooling fan. The technician immediately identified, isolated, and replaced the fan to get the equipment back into working order. What type of system maintenance is this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Corrective maintenance",
        },
        {
          id: "b",
          text: "Preventive maintenance",
        },
        {
          id: "c",
          text: "Adaptive maintenance",
        },
        {
          id: "d",
          text: "Perfective maintenance",
        },
        {
          id: "e",
          text: "Predictive maintenance",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. Corrective maintenance is the process of identifying, isolating, and repairing a fault to return equipment back to working order.",
        incorrect: {
          b: "Incorrect — Preventive maintenance is done regularly to avoid failure, not after a crash has occurred.",
          c: "Incorrect — Adaptive maintenance involves adjusting systems to new environments or preventing corrosion.",
          d: "Incorrect — Perfective maintenance focuses on usability and feature improvements.",
          e: "Incorrect — Predictive maintenance relies on condition-based indicators to foresee issues before they happen.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "Scenario: An organization moves its servers to a highly humid coastal office. The IT team applies special adjustments to the monitoring and operational elements of the metallic server racks to prevent corrosion from spreading. Which type of maintenance does this represent? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Adaptive maintenance",
        },
        {
          id: "b",
          text: "Corrective maintenance",
        },
        {
          id: "c",
          text: "Preventive maintenance",
        },
        {
          id: "d",
          text: "Perfective maintenance",
        },
        {
          id: "e",
          text: "Condition-Based maintenance",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. Adaptive maintenance involves implementing adjustments to operational elements (like metallic structures) to prevent corrosion or adapt to a changing environment.",
        incorrect: {
          b: "Incorrect — Corrective maintenance happens after a fault has already occurred.",
          c: "Incorrect — While related to preventing future issues, the specific text defines adjusting structures against corrosion spreading as Adaptive maintenance.",
          d: "Incorrect — Perfective maintenance improves usability or software functionality.",
          e: "Incorrect — Condition-based maintenance occurs when indicators show degradation, which is not specifically highlighted in the 'corrosion prevention' definition.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "Scenario: The software development team releases a new patch that doesn't fix any bugs, but rather fine-tunes the user interface, altering its appearance and adding a new search functionality to improve usability. What type of maintenance is this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Perfective software maintenance",
        },
        {
          id: "b",
          text: "Corrective maintenance",
        },
        {
          id: "c",
          text: "Adaptive maintenance",
        },
        {
          id: "d",
          text: "Preventive maintenance",
        },
        {
          id: "e",
          text: "Diagnostic maintenance",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. Perfective software maintenance focuses on functioning and usability, fine-tuning features, and altering the appearance of a product.",
        incorrect: {
          b: "Incorrect — Corrective maintenance fixes bugs and crashes.",
          c: "Incorrect — Adaptive maintenance adapts the system to a new operating environment.",
          d: "Incorrect — Preventive maintenance is done to prevent unexpected downtime.",
          e: "Incorrect — Diagnostic is a management process to identify issues, not a maintenance model type.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "Scenario: Every first Saturday of the month, the system administrator schedules a maintenance window to routinely clean server components, clear out temporary files, and check hardware health before any problems arise, avoiding costly unplanned downtime. What is this strategy called? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Preventive maintenance",
        },
        {
          id: "b",
          text: "Corrective maintenance",
        },
        {
          id: "c",
          text: "Perfective software maintenance",
        },
        {
          id: "d",
          text: "Adaptive maintenance",
        },
        {
          id: "e",
          text: "Troubleshooting maintenance",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. Preventive maintenance (PM) is the process of maintaining equipment on a regular scheduled basis to keep it running and avoid unexpected downtime.",
        incorrect: {
          b: "Incorrect — Corrective maintenance only happens after the equipment breaks down.",
          c: "Incorrect — Perfective maintenance is adding software features.",
          d: "Incorrect — Adaptive maintenance adapts systems to new environments.",
          e: "Incorrect — Troubleshooting is an activity within Fault Management, not a designated maintenance model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "Scenario: The IT team rolls out a new enterprise app to all employee smartphones. To eliminate setup difficulties, they assign configuration parameters to a policy before the users launch the app. When the app is executed for the first time, it checks and applies these parameters automatically. What concept does this describe? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Policy and Configuration Automation",
        },
        {
          id: "b",
          text: "Corrective maintenance",
        },
        {
          id: "c",
          text: "Directory Services Resource Organization",
        },
        {
          id: "d",
          text: "Decentralized Administration Model",
        },
        {
          id: "e",
          text: "Fault Detection",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. Policy and Configuration Automation eliminates setup difficulties by assigning configuration parameters to a policy that applies automatically the first time the app is executed.",
        incorrect: {
          b: "Incorrect — Corrective maintenance refers to repairing physical or software faults.",
          c: "Incorrect — While it uses policies, this specific action of automating app setup parameters is explicitly defined as Policy and Configuration Automation.",
          d: "Incorrect — This is an automation technique, not a structural administration model.",
          e: "Incorrect — Fault detection involves identifying errors, not pre-configuring apps.",
        },
      },
    },
  ],
};
