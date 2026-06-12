import { Quiz } from "@/app/types/quiz";

export const sysadminTopic1: Quiz = {
  id: "sysadmin-topic-1",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-1",
  title: "Topic 1 - Introduction to System Administration",
  questions: [
    {
      id: "lecture1-q1",
      text: "What is the primary responsibility of a system administrator?",
      options: [
        {
          id: "a",
          text: "Developing marketing strategies for IT products",
        },
        {
          id: "b",
          text: "Upkeep, configuration, and reliable operation of computer systems",
        },
        {
          id: "c",
          text: "Manufacturing and assembling computer hardware",
        },
        {
          id: "d",
          text: "Designing only user interfaces for applications",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "A system administrator is responsible for the upkeep, configuration, and reliable operation of computer systems.",
        incorrect: {
          a: "Marketing strategies are not part of system administration.",
          c: "Manufacturing hardware is not a system administrator responsibility.",
          d: "Interface design is not the main responsibility of a system administrator.",
        },
      },
    },
    {
      id: "lecture1-q2",
      text: "Which type of computer system is especially associated with system administration?",
      options: [
        {
          id: "a",
          text: "Multi-user computers such as servers",
        },
        {
          id: "b",
          text: "Standalone calculators",
        },
        {
          id: "c",
          text: "Only personal mobile devices",
        },
        {
          id: "d",
          text: "Only display monitors",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "System administrators are especially responsible for multi-user computers such as servers.",
        incorrect: {
          b: "Standalone calculators are not the focus of system administration.",
          c: "The material emphasizes computer systems and servers, not only mobile devices.",
          d: "Display monitors are peripherals, not multi-user systems.",
        },
      },
    },
    {
      id: "lecture1-q3",
      text: "Which balance should a system administrator maintain when managing computers?",
      options: [
        {
          id: "a",
          text: "Meet user needs for uptime, performance, resources, and security without exceeding the budget",
        },
        {
          id: "b",
          text: "Maximize cost without considering user needs",
        },
        {
          id: "c",
          text: "Focus only on security and ignore performance",
        },
        {
          id: "d",
          text: "Focus only on uptime and ignore resources",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A system administrator seeks to ensure uptime, performance, resources, and security meet users' needs without exceeding the budget.",
        incorrect: {
          b: "The budget should not be exceeded.",
          c: "Security is important, but performance is also included.",
          d: "Uptime is important, but resources are also included.",
        },
      },
    },
    {
      id: "lecture1-q4",
      text: "Which set of activities may a system administrator perform to meet system and user needs?",
      options: [
        {
          id: "a",
          text: "Acquire, install, or upgrade computer components and software; automate routines; maintain security policies; troubleshoot; train or supervise staff; and support projects",
        },
        {
          id: "b",
          text: "Only create advertisements and product brochures",
        },
        {
          id: "c",
          text: "Only replace computer systems without installing software",
        },
        {
          id: "d",
          text: "Only write reports without supporting systems",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "These are listed activities that help system administrators meet system and user needs.",
        incorrect: {
          b: "Advertising is not part of the listed system administrator activities.",
          c: "The role includes installation, upgrades, and software work.",
          d: "System administration includes technical support and maintenance, not only reporting.",
        },
      },
    },
    {
      id: "lecture1-q5",
      text: "Which statement best defines system administration?",
      options: [
        {
          id: "a",
          text: "The design, installation, configuration, operation, and support of servers for an organization's IT infrastructure",
        },
        {
          id: "b",
          text: "The process of using computers without configuring or supporting them",
        },
        {
          id: "c",
          text: "The study of marketing plans for technology companies",
        },
        {
          id: "d",
          text: "The replacement of all human users with software",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "System administration involves designing, installing, configuring, operating, and supporting servers for organizational IT infrastructure.",
        incorrect: {
          b: "System administration includes configuration and support.",
          c: "Marketing plans are unrelated to the definition.",
          d: "The definition does not involve replacing all users.",
        },
      },
    },
    {
      id: "lecture1-q6",
      text: "Which description matches the general practice of system administration?",
      options: [
        {
          id: "a",
          text: "Planning, installing, and maintaining systems involving servers and clients in a network environment",
        },
        {
          id: "b",
          text: "Managing only disconnected computers with no servers or clients",
        },
        {
          id: "c",
          text: "Using only mobile applications without maintaining systems",
        },
        {
          id: "d",
          text: "Avoiding network environments completely",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "System administration generally involves planning, installing, and maintaining systems with servers and clients in a network environment.",
        incorrect: {
          b: "Servers, clients, and networking are included.",
          c: "The focus is system maintenance, not only application use.",
          d: "Network environments are specifically included.",
        },
      },
    },
    {
      id: "lecture1-q7",
      text: "Which operating system examples are mentioned for system administration environments?",
      options: [
        {
          id: "a",
          text: "Windows 2008 Server and Linux platform",
        },
        {
          id: "b",
          text: "TCP/IP and DNS",
        },
        {
          id: "c",
          text: "Ansible and Puppet",
        },
        {
          id: "d",
          text: "Python and PowerShell",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Windows 2008 Server and Linux platform are mentioned as operating system examples.",
        incorrect: {
          b: "TCP/IP and DNS are networking concepts.",
          c: "Ansible and Puppet are configuration management tools.",
          d: "Python and PowerShell are scripting or programming languages.",
        },
      },
    },
    {
      id: "lecture1-q8",
      text: "How is a system administrator described in terms of trust and responsibility?",
      options: [
        {
          id: "a",
          text: "A single trusted person responsible for administrating the whole system",
        },
        {
          id: "b",
          text: "A temporary user with only viewing permission",
        },
        {
          id: "c",
          text: "A storage device used for backups",
        },
        {
          id: "d",
          text: "A network cable connecting two computers",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A system administrator is described as a single trusted person responsible for administrating the whole system.",
        incorrect: {
          b: "The administrator has system-wide responsibility, not only viewing permission.",
          c: "A system administrator is a person, not a storage device.",
          d: "A network cable is hardware, not an administrator.",
        },
      },
    },
    {
      id: "lecture1-q9",
      text: "In a UNIX environment, what is the system administrator commonly known as?",
      options: [
        {
          id: "a",
          text: "Root user",
        },
        {
          id: "b",
          text: "Output user",
        },
        {
          id: "c",
          text: "Warmware user",
        },
        {
          id: "d",
          text: "Guest user",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "In a UNIX environment, the administrator is known as the root user.",
        incorrect: {
          b: "Output refers to processed results, not the administrator account.",
          c: "Warmware refers to the human element in computing.",
          d: "A guest user does not have administrator power.",
        },
      },
    },
    {
      id: "lecture1-q10",
      text: "Which statement correctly describes the root user?",
      options: [
        {
          id: "a",
          text: "The root user holds absolute power over the system",
        },
        {
          id: "b",
          text: "The root user can only access personal files",
        },
        {
          id: "c",
          text: "The root user is a type of secondary storage",
        },
        {
          id: "d",
          text: "The root user is a programming language",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The root user is described as holding absolute power over the system.",
        incorrect: {
          b: "The root user has broad system privileges.",
          c: "The root user is an account, not a storage device.",
          d: "The root user is not a programming language.",
        },
      },
    },
    {
      id: "lecture1-q11",
      text: "Which special user ID is used to log on as the system administrator?",
      options: [
        {
          id: "a",
          text: "root",
        },
        {
          id: "b",
          text: "client",
        },
        {
          id: "c",
          text: "server",
        },
        {
          id: "d",
          text: "backup",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The special user ID used to log on as system administrator is root.",
        incorrect: {
          b: "Client refers to a system in a network environment.",
          c: "Server is a computer system, not the root login ID.",
          d: "Backup is a system administration task, not the root login ID.",
        },
      },
    },
    {
      id: "lecture1-q12",
      text: "What is the default numerical user ID for the system administrator?",
      options: [
        {
          id: "a",
          text: "0",
        },
        {
          id: "b",
          text: "1",
        },
        {
          id: "c",
          text: "100",
        },
        {
          id: "d",
          text: "999",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The default numerical user ID for the system administrator is 0.",
        incorrect: {
          b: "The stated administrator user ID is 0, not 1.",
          c: "The stated administrator user ID is 0, not 100.",
          d: "The stated administrator user ID is 0, not 999.",
        },
      },
    },
    {
      id: "lecture1-q13",
      text: "When are the default system administrator user ID and password created?",
      options: [
        {
          id: "a",
          text: "Automatically during installation",
        },
        {
          id: "b",
          text: "Only after the first system audit",
        },
        {
          id: "c",
          text: "Only after a backup is restored",
        },
        {
          id: "d",
          text: "Only after a user requests access",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The default system administrator user ID and password are automatically created during installation.",
        incorrect: {
          b: "Audits are not the creation point for the default administrator account.",
          c: "Backup restoration is not the creation point.",
          d: "The account is created during installation, not by user request.",
        },
      },
    },
    {
      id: "lecture1-q14",
      text: "What is the root user ID used for?",
      options: [
        {
          id: "a",
          text: "Performing administrative tasks",
        },
        {
          id: "b",
          text: "Displaying processed data only",
        },
        {
          id: "c",
          text: "Storing files outside the computer only",
        },
        {
          id: "d",
          text: "Acting as a network cable",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "The root user ID is used to perform administrative tasks.",
        incorrect: {
          b: "Displaying processed data is the role of output devices.",
          c: "Storing files outside the computer is related to secondary storage.",
          d: "A network cable is hardware, not a user ID.",
        },
      },
    },
    {
      id: "lecture1-q15",
      text: "Which command is used to print the working directory?",
      options: [
        {
          id: "a",
          text: "pwd",
        },
        {
          id: "b",
          text: "root",
        },
        {
          id: "c",
          text: "DHCP",
        },
        {
          id: "d",
          text: "DNS",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "The command pwd is used to print the working directory.",
        incorrect: {
          b: "root is the administrator login ID, not the command for printing the working directory.",
          c: "DHCP is a networking concept.",
          d: "DNS is a networking concept.",
        },
      },
    },
    {
      id: "lecture1-q16",
      text: 'What does the output "/" represent in the root login example?',
      options: [
        {
          id: "a",
          text: "The root directory",
        },
        {
          id: "b",
          text: "The user password",
        },
        {
          id: "c",
          text: "A firewall rule",
        },
        {
          id: "d",
          text: "A backup file",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "The output / represents the root directory.",
        incorrect: {
          b: "The symbol / is not identified as a password.",
          c: "A firewall is a security measure, not the meaning of /.",
          d: "A backup file is not represented by /.",
        },
      },
    },
    {
      id: "lecture1-q17",
      text: "Which prompt symbol indicates login as root?",
      options: [
        {
          id: "a",
          text: "#",
        },
        {
          id: "b",
          text: "$",
        },
        {
          id: "c",
          text: "@",
        },
        {
          id: "d",
          text: ">",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "The # prompt indicates login as root.",
        incorrect: {
          b: "The $ symbol is not the root prompt shown.",
          c: "The @ symbol is not used as the root prompt here.",
          d: "The > symbol is not the root prompt shown.",
        },
      },
    },
    {
      id: "lecture1-q18",
      text: "Which set contains specific system administrator tasks?",
      options: [
        {
          id: "a",
          text: "Installing and configuring software, managing user accounts, monitoring system performance, and implementing data backup and recovery",
        },
        {
          id: "b",
          text: "Creating marketing campaigns, designing logos, and printing flyers",
        },
        {
          id: "c",
          text: "Only using computers without configuring them",
        },
        {
          id: "d",
          text: "Only replacing users with automated systems",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "These are listed as specific tasks of a system administrator.",
        incorrect: {
          b: "Marketing and graphic design are not listed tasks.",
          c: "System administrators configure and maintain systems.",
          d: "Automation may be used, but replacing users is not the task set.",
        },
      },
    },
    {
      id: "lecture1-q19",
      text: "Which set contains additional system administrator tasks?",
      options: [
        {
          id: "a",
          text: "Ensuring security with updates and firewalls, configuring network devices, troubleshooting issues, and keeping detailed documentation",
        },
        {
          id: "b",
          text: "Ignoring updates, avoiding firewalls, and deleting documentation",
        },
        {
          id: "c",
          text: "Only using output devices to display results",
        },
        {
          id: "d",
          text: "Only storing data on pendrives",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Security updates, firewalls, network device configuration, troubleshooting, and documentation are listed tasks.",
        incorrect: {
          b: "The tasks require maintaining security and documentation.",
          c: "Output devices are part of computer systems, not the full administrator task set.",
          d: "Storage is only one computer system aspect.",
        },
      },
    },
    {
      id: "lecture1-q20",
      text: "What do system administrator tasks help ensure?",
      options: [
        {
          id: "a",
          text: "Smooth operation and security of the IT environment",
        },
        {
          id: "b",
          text: "Removal of all user accounts",
        },
        {
          id: "c",
          text: "Elimination of all hardware",
        },
        {
          id: "d",
          text: "Avoidance of all documentation",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The tasks help ensure smooth operation and security of the IT environment.",
        incorrect: {
          b: "User accounts are managed, not all removed.",
          c: "Hardware is installed and configured, not eliminated.",
          d: "Keeping detailed documentation is one of the tasks.",
        },
      },
    },
    {
      id: "lecture1-q21",
      text: "Which file-related privilege does an administrator have?",
      options: [
        {
          id: "a",
          text: "Modify the contents or attributes of any files, even if owned by another user",
        },
        {
          id: "b",
          text: "Modify only files personally created by the administrator",
        },
        {
          id: "c",
          text: "View file names only without changing contents",
        },
        {
          id: "d",
          text: "Modify only temporary backup files",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "An administrator can modify the contents or attributes of any files, even when owned by another user.",
        incorrect: {
          b: "The privilege applies to any files, not only the administrator's files.",
          c: "The privilege includes modification.",
          d: "The privilege is not limited to backup files.",
        },
      },
    },
    {
      id: "lecture1-q22",
      text: "What limitation applies when an administrator kills processes?",
      options: [
        {
          id: "a",
          text: "They can kill any process except those essential for running the system",
        },
        {
          id: "b",
          text: "They can kill only processes they personally started",
        },
        {
          id: "c",
          text: "They cannot kill any running process",
        },
        {
          id: "d",
          text: "They must kill every process during maintenance",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "An administrator can initiate or kill any process except those essential for running the system.",
        incorrect: {
          b: "The privilege is not limited to personally started processes.",
          c: "Administrators can kill processes.",
          d: "The material does not say every process must be killed.",
        },
      },
    },
    {
      id: "lecture1-q23",
      text: "Which password-related privilege does an administrator have?",
      options: [
        {
          id: "a",
          text: "Change any user's password without entering the old password",
        },
        {
          id: "b",
          text: "Change a password only after knowing the old password",
        },
        {
          id: "c",
          text: "Change only the administrator's own password",
        },
        {
          id: "d",
          text: "View passwords but never reset them",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "An administrator can change any user's password without entering the old password.",
        incorrect: {
          b: "The old password is not required.",
          c: "The privilege applies to any user's password.",
          d: "The stated privilege is password changing, not only viewing.",
        },
      },
    },
    {
      id: "lecture1-q24",
      text: "Which services can an administrator control user access to?",
      options: [
        {
          id: "a",
          text: "Scheduling service and networking service",
        },
        {
          id: "b",
          text: "Only printing service and display service",
        },
        {
          id: "c",
          text: "Only storage service and warmware service",
        },
        {
          id: "d",
          text: "Only database service and web design service",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "An administrator can control user access to scheduling service and networking service.",
        incorrect: {
          b: "Printing and display services are not the listed examples.",
          c: "Warmware is not a service listed for access control.",
          d: "These are not the listed access-control examples.",
        },
      },
    },
    {
      id: "lecture1-q25",
      text: "Which system setting is listed as an administrator privilege?",
      options: [
        {
          id: "a",
          text: "Set the system clock",
        },
        {
          id: "b",
          text: "Design the organization's logo",
        },
        {
          id: "c",
          text: "Manufacture the CPU",
        },
        {
          id: "d",
          text: "Write marketing content",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Setting the system clock is listed as an administrator privilege.",
        incorrect: {
          b: "Logo design is not an administrator privilege.",
          c: "Manufacturing CPUs is not an administrator privilege.",
          d: "Marketing content is unrelated to the listed privileges.",
        },
      },
    },
    {
      id: "lecture1-q26",
      text: "Which set contains main roles of a system administrator?",
      options: [
        {
          id: "a",
          text: "Install, support, and maintain servers or computer systems; install and configure new hardware and software",
        },
        {
          id: "b",
          text: "Only create presentation slides and avoid system maintenance",
        },
        {
          id: "c",
          text: "Only classify hardware without configuring it",
        },
        {
          id: "d",
          text: "Only use storage devices without supporting servers",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Installing, supporting, and maintaining servers or systems, plus installing and configuring hardware and software, are main roles.",
        incorrect: {
          b: "System maintenance is a main role.",
          c: "The role includes installing and configuring hardware and software.",
          d: "Supporting servers is included.",
        },
      },
    },
    {
      id: "lecture1-q27",
      text: "Which set contains additional main roles of a system administrator?",
      options: [
        {
          id: "a",
          text: "Perform routine audits, backups and restores, OS updates and patches, configuration changes, and user account management",
        },
        {
          id: "b",
          text: "Avoid audits, backups, updates, and account management",
        },
        {
          id: "c",
          text: "Only display processed data in understandable form",
        },
        {
          id: "d",
          text: "Only accept data or commands from users",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "These are listed as main roles of a system administrator.",
        incorrect: {
          b: "Audits, backups, updates, and account management are responsibilities.",
          c: "Displaying processed data is an output device function.",
          d: "Accepting data or commands is an input device function.",
        },
      },
    },
    {
      id: "lecture1-q28",
      text: "Which actions are included in managing user accounts?",
      options: [
        {
          id: "a",
          text: "Adding, removing, and resetting passwords",
        },
        {
          id: "b",
          text: "Manufacturing, packaging, and selling computers",
        },
        {
          id: "c",
          text: "Drawing diagrams, designing posters, and editing images",
        },
        {
          id: "d",
          text: "Reading, printing, and deleting only public files",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Managing user accounts includes adding users, removing users, and resetting passwords.",
        incorrect: {
          b: "These are manufacturing and sales activities.",
          c: "These are design activities, not user account management.",
          d: "This does not describe user account management.",
        },
      },
    },
    {
      id: "lecture1-q29",
      text: "Which goal means ensuring that systems are consistently operational and available for use?",
      options: [
        {
          id: "a",
          text: "Reliability",
        },
        {
          id: "b",
          text: "Complexity",
        },
        {
          id: "c",
          text: "Warmware",
        },
        {
          id: "d",
          text: "Storage",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Reliability means ensuring systems are consistently operational and available for use.",
        incorrect: {
          b: "Complexity is a challenge, not this goal.",
          c: "Warmware is the human element in computing.",
          d: "Storage is a computer system aspect.",
        },
      },
    },
    {
      id: "lecture1-q30",
      text: "Which goal means protecting data and system resources from unauthorized access and threats?",
      options: [
        {
          id: "a",
          text: "Security",
        },
        {
          id: "b",
          text: "Downtime",
        },
        {
          id: "c",
          text: "Input",
        },
        {
          id: "d",
          text: "Technical support",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Security means protecting data and system resources from unauthorized access and threats.",
        incorrect: {
          b: "Downtime is a challenge involving service interruptions.",
          c: "Input refers to figures, facts, or instructions.",
          d: "Technical support is a category of system administration.",
        },
      },
    },
    {
      id: "lecture1-q31",
      text: "Which goal means optimizing the performance and utilization of IT resources?",
      options: [
        {
          id: "a",
          text: "Efficiency",
        },
        {
          id: "b",
          text: "Security threats",
        },
        {
          id: "c",
          text: "Output",
        },
        {
          id: "d",
          text: "Root directory",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Efficiency means optimizing the performance and utilization of IT resources.",
        incorrect: {
          b: "Security threats are a challenge, not this goal.",
          c: "Output is a computer system task.",
          d: "The root directory is represented by /.",
        },
      },
    },
    {
      id: "lecture1-q32",
      text: "Which challenge involves managing vulnerabilities and mitigating risks to protect against cyber attacks?",
      options: [
        {
          id: "a",
          text: "Security threats",
        },
        {
          id: "b",
          text: "Reliability",
        },
        {
          id: "c",
          text: "Hardware",
        },
        {
          id: "d",
          text: "Communication skills",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Security threats involve managing vulnerabilities and mitigating risks against cyber attacks.",
        incorrect: {
          b: "Reliability is a goal related to availability.",
          c: "Hardware means physical computer components.",
          d: "Communication skills are required skills, not this challenge.",
        },
      },
    },
    {
      id: "lecture1-q33",
      text: "Which challenge involves minimizing service interruptions and quickly resolving outages?",
      options: [
        {
          id: "a",
          text: "Downtime",
        },
        {
          id: "b",
          text: "Efficiency",
        },
        {
          id: "c",
          text: "Software",
        },
        {
          id: "d",
          text: "Input devices",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Downtime involves minimizing service interruptions and quickly resolving outages.",
        incorrect: {
          b: "Efficiency is a goal of optimizing IT resources.",
          c: "Software is programs and operating systems.",
          d: "Input devices accept data or commands.",
        },
      },
    },
    {
      id: "lecture1-q34",
      text: "Which challenge involves handling diverse and often complex systems and technologies within an organization?",
      options: [
        {
          id: "a",
          text: "Complexity",
        },
        {
          id: "b",
          text: "Security",
        },
        {
          id: "c",
          text: "Output",
        },
        {
          id: "d",
          text: "Documentation",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Complexity means handling diverse and often complex systems and technologies within an organization.",
        incorrect: {
          b: "Security is a goal of protecting data and resources.",
          c: "Output is a computer system task.",
          d: "Documentation is a task and communication skill.",
        },
      },
    },
    {
      id: "lecture1-q35",
      text: "Which set belongs to technical proficiency for a system administrator?",
      options: [
        {
          id: "a",
          text: "Knowledge of operating systems, networking concepts, and hardware and software installation and configuration",
        },
        {
          id: "b",
          text: "Only communication with non-technical users",
        },
        {
          id: "c",
          text: "Only project scheduling",
        },
        {
          id: "d",
          text: "Only willingness to adapt to new tools",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Technical proficiency includes operating systems, networking concepts, and hardware and software installation and configuration.",
        incorrect: {
          b: "This is communication skill.",
          c: "This belongs to time management.",
          d: "This belongs to continuous learning.",
        },
      },
    },
    {
      id: "lecture1-q36",
      text: "Which networking concepts are explicitly listed as required knowledge?",
      options: [
        {
          id: "a",
          text: "TCP/IP, DNS, and DHCP",
        },
        {
          id: "b",
          text: "Python, Bash, and JavaScript",
        },
        {
          id: "c",
          text: "Hard disk, diskette, and pendrive",
        },
        {
          id: "d",
          text: "CPU, memory, and peripherals",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "TCP/IP, DNS, and DHCP are the listed networking concept examples.",
        incorrect: {
          b: "These are programming language examples.",
          c: "These are secondary storage examples.",
          d: "These are hardware examples.",
        },
      },
    },
    {
      id: "lecture1-q37",
      text: "Which set belongs to problem-solving skills?",
      options: [
        {
          id: "a",
          text: "Diagnosing and troubleshooting system and network issues, and using analytical thinking to resolve complex technical problems",
        },
        {
          id: "b",
          text: "Only setting the system clock",
        },
        {
          id: "c",
          text: "Only displaying processed data",
        },
        {
          id: "d",
          text: "Only storing programs outside the computer",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Problem-solving skills include diagnosing and troubleshooting issues and using analytical thinking.",
        incorrect: {
          b: "Setting the system clock is an administrator privilege.",
          c: "Displaying processed data is an output device function.",
          d: "Storing programs outside the computer is a storage function.",
        },
      },
    },
    {
      id: "lecture1-q38",
      text: "Which set belongs to security awareness?",
      options: [
        {
          id: "a",
          text: "Understanding cybersecurity principles and practices, and managing security measures such as firewalls and encryption",
        },
        {
          id: "b",
          text: "Only installing output devices",
        },
        {
          id: "c",
          text: "Only using the pwd command",
        },
        {
          id: "d",
          text: "Only managing project schedules",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Security awareness includes cybersecurity principles and practices, firewalls, and encryption.",
        incorrect: {
          b: "Output devices are not the focus of security awareness.",
          c: "pwd is a command for printing the working directory.",
          d: "Project scheduling belongs to time management.",
        },
      },
    },
    {
      id: "lecture1-q39",
      text: "Which statement correctly matches automation, scripting, and programming skills?",
      options: [
        {
          id: "a",
          text: "Python and PowerShell are examples for task automation; Ansible and Puppet are configuration management tools; Python, Bash, and JavaScript are programming language examples",
        },
        {
          id: "b",
          text: "TCP/IP and DNS are configuration management tools; hard disks and pendrives are scripting languages",
        },
        {
          id: "c",
          text: "Firewalls and encryption are programming languages; Windows and Linux are backup tools",
        },
        {
          id: "d",
          text: "CPU and memory are scripting languages; users and IT staff are configuration management tools",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The listed examples correctly match automation, configuration management, and programming skills.",
        incorrect: {
          b: "TCP/IP and DNS are networking concepts, while hard disks and pendrives are storage devices.",
          c: "Firewalls and encryption are security measures, while Windows and Linux are operating systems.",
          d: "CPU and memory are hardware, while users and IT staff are warmware.",
        },
      },
    },
    {
      id: "lecture1-q40",
      text: "Which statement correctly matches computer system components and data handling?",
      options: [
        {
          id: "a",
          text: "Hardware is physical components; software is programs and operating systems; warmware is the human element; input accepts data or commands; the CPU processes instructions; output displays processed data; storage uses secondary devices such as hard disks, diskettes, and pendrives",
        },
        {
          id: "b",
          text: "Hardware means users and IT staff; software means physical parts; warmware means only operating systems; storage executes all instructions",
        },
        {
          id: "c",
          text: "Input devices display processed results; output devices send commands to the processing unit; the CPU stores data outside the computer",
        },
        {
          id: "d",
          text: "Warmware means hard disks; software means CPU and memory; hardware means Python and PowerShell",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "This correctly matches hardware, software, warmware, input, processing, output, and storage.",
        incorrect: {
          b: "This reverses the meanings of hardware, software, warmware, and storage.",
          c: "Input devices accept data or commands, output devices display processed data, and the CPU executes instructions.",
          d: "Warmware refers to people, software refers to programs and operating systems, and hardware refers to physical components.",
        },
      },
    },
  ],
};
