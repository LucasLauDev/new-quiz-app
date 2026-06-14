import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic2: Quiz = {
  id: "sysadmin-topic-2",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-2",
  title: "Topic 2 - Computer and Network Components",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Which of the following correctly describes the categories and examples of hardware in a computer system? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Hardware refers to the physical components of a computer system.",
        },
        {
          id: "b",
          text: "Monitors and keyboards are examples of internal hardware.",
        },
        {
          id: "c",
          text: "The CPU and RAM are considered internal hardware.",
        },
        {
          id: "d",
          text: "Storage and motherboards fall under external hardware.",
        },
        {
          id: "e",
          text: "Printers are classified as external hardware.",
        },
      ],
      correctOptionIds: ["a", "c", "e"],
      explanation: {
        correct:
          "Options A, C, and E are correct. Hardware is the physical component, CPU/RAM are internal, and printers are external.",
        incorrect: {
          b: "Incorrect — Monitors and keyboards are external hardware, not internal.",
          d: "Incorrect — Storage and motherboards are components of internal hardware.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "What are the primary functions and components of a Central Processing Unit (CPU)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It executes instructions and processes data.",
        },
        {
          id: "b",
          text: "The Arithmetic Logic Unit (ALU) directs system operations.",
        },
        {
          id: "c",
          text: "The Control Unit (CU) performs mathematical calculations.",
        },
        {
          id: "d",
          text: "It can be designed as a multi-core or single-core processor.",
        },
        {
          id: "e",
          text: "The ALU performs calculations.",
        },
      ],
      correctOptionIds: ["a", "d", "e"],
      explanation: {
        correct:
          "Options A, D, and E are correct. The CPU executes instructions, comes in single or multi-core types, and uses the ALU for calculations.",
        incorrect: {
          b: "Incorrect — The ALU performs calculations, while the Control Unit (CU) directs operations.",
          c: "Incorrect — The CU directs system operations; it is the ALU that performs calculations.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Identify the correct statements regarding the Memory Hierarchy. (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Registers are the fastest memory and are located inside the CPU.",
        },
        {
          id: "b",
          text: "Cache memory (L1, L2, L3) slows down processing to prevent overheating.",
        },
        {
          id: "c",
          text: "RAM serves as long-term data storage.",
        },
        {
          id: "d",
          text: "Storage devices like HDDs and SSDs provide long-term data storage.",
        },
        {
          id: "e",
          text: "Cache memory speeds up processing.",
        },
      ],
      correctOptionIds: ["a", "d", "e"],
      explanation: {
        correct:
          "Options A, D, and E accurately reflect the memory hierarchy. Registers are fastest, cache speeds up processing, and HDDs/SSDs provide long-term storage.",
        incorrect: {
          b: "Incorrect — Cache memory is designed to speed up processing, not slow it down.",
          c: "Incorrect — RAM is temporary storage for active programs, not long-term storage.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "Which of the following characteristics accurately describe different storage devices? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "HDDs are generally faster because they lack mechanical parts.",
        },
        {
          id: "b",
          text: "SSDs are faster than HDDs, use flash memory, and have no moving parts.",
        },
        {
          id: "c",
          text: "NVMe is an older, slower technology compared to SSDs.",
        },
        {
          id: "d",
          text: "Google Drive and OneDrive are examples of Cloud Storage.",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. SSDs use flash memory without moving parts, and Google Drive is a form of Cloud Storage.",
        incorrect: {
          a: "Incorrect — HDDs are slower and do contain moving mechanical parts.",
          c: "Incorrect — NVMe is a newer technology and is much faster than traditional SSDs.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "Which of the following are examples of Operating Systems? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Windows",
        },
        {
          id: "b",
          text: "macOS",
        },
        {
          id: "c",
          text: "NVMe",
        },
        {
          id: "d",
          text: "Linux",
        },
        {
          id: "e",
          text: "Android",
        },
        {
          id: "f",
          text: "Cache",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Windows, macOS, Linux, and Android are all examples of Operating Systems.",
        incorrect: {
          c: "Incorrect — NVMe is a storage technology protocol, not an Operating System.",
          f: "Incorrect — Cache is a type of memory, not an OS.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "Which of the following correctly match an Operating System function with its definition? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Process Management: Allocating RAM to applications.",
        },
        {
          id: "b",
          text: "Memory Management: Allocating RAM to applications.",
        },
        {
          id: "c",
          text: "Device Management: Managing I/O devices.",
        },
        {
          id: "d",
          text: "File System Management: Organizing files & directories.",
        },
        {
          id: "e",
          text: "Process Management: Scheduling tasks & running programs.",
        },
      ],
      correctOptionIds: ["b", "c", "d", "e"],
      explanation: {
        correct:
          "Options B, C, D, and E are correctly matched OS functions according to the text.",
        incorrect: {
          a: "Incorrect — Allocating RAM is the job of Memory Management, not Process Management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "Select the correct statements about the types of Operating Systems. (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A Real-time OS (RTOS) is primarily used in embedded systems.",
        },
        {
          id: "b",
          text: "A Distributed OS involves multiple computers working together.",
        },
        {
          id: "c",
          text: "A Network OS is designed to manage standalone, unconnected devices.",
        },
        {
          id: "d",
          text: "Operating Systems can be categorized as Single-user or Multi-user.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D correctly describe RTOS, Distributed OS, and user categorization.",
        incorrect: {
          c: "Incorrect — A Network OS manages network resources, not isolated standalone devices.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "Which of the following are valid components or attributes of a File System? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It organizes and manages data storage on devices.",
        },
        {
          id: "b",
          text: "It structures data purely as a flat list without directories.",
        },
        {
          id: "c",
          text: "File attributes include Name, size, creation date, and permissions.",
        },
        {
          id: "d",
          text: "It uses a hierarchy of files and directories.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. A filesystem manages storage via a hierarchy of files/directories and tracks file attributes.",
        incorrect: {
          b: "Incorrect — A filesystem structure uses a hierarchy of files and directories, not just a flat list.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "Match the operating system to its respective file systems accurately. (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Windows: NTFS, FAT32, exFAT.",
        },
        {
          id: "b",
          text: "Linux: ext4, XFS, Btrfs.",
        },
        {
          id: "c",
          text: "macOS: NTFS, ext4.",
        },
        {
          id: "d",
          text: "macOS: APFS, HFS+.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D correctly list the native file systems for Windows, Linux, and macOS respectively.",
        incorrect: {
          c: "Incorrect — NTFS is associated with Windows, and ext4 with Linux. macOS uses APFS and HFS+.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "What are the core differences between a program and a process? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A program is an executing instance of a running script.",
        },
        {
          id: "b",
          text: "A process is a set of instructions stored passively on a disk.",
        },
        {
          id: "c",
          text: "A program is a set of instructions stored on disk and is considered passive.",
        },
        {
          id: "d",
          text: "A process is an executing instance of a running program and is considered active.",
        },
      ],
      correctOptionIds: ["c", "d"],
      explanation: {
        correct:
          "Options C and D are correct. Programs are passive instructions on a disk, while processes are active executing instances.",
        incorrect: {
          a: "Incorrect — This defines a process, not a program.",
          b: "Incorrect — This defines a program, not a process.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "Identify the true statements about the types and characteristics of processes. (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Foreground processes are interactive and require user input.",
        },
        {
          id: "b",
          text: "Background processes (Daemons) run without user interaction.",
        },
        {
          id: "c",
          text: "A web browser is an example of a background process.",
        },
        {
          id: "d",
          text: "Every process has a unique Process ID (PID).",
        },
        {
          id: "e",
          text: "Processes do not consume CPU and memory resources.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Foreground processes need input, background processes don't, and each process has a unique PID.",
        incorrect: {
          c: "Incorrect — A web browser requires user input, making it an interactive foreground process.",
          e: "Incorrect — Processes actively use CPU and memory resources.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "Which of the following describe the overall function of Job Scheduling? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It determines which jobs should be executed.",
        },
        {
          id: "b",
          text: "It determines when jobs should be executed.",
        },
        {
          id: "c",
          text: "It manages hardware temperature controls.",
        },
        {
          id: "d",
          text: "It allocates system resources to various tasks.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D describe job scheduling, which dictates which jobs run, when they run, and resource allocation.",
        incorrect: {
          c: "Incorrect — Job scheduling manages process execution, not hardware temperature controls.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "What are the specific responsibilities of Long-Term Scheduling (Admission Scheduling)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It decides which process gets CPU time next.",
        },
        {
          id: "b",
          text: "It decides which jobs enter the system for processing.",
        },
        {
          id: "c",
          text: "It loads processes from secondary storage into memory.",
        },
        {
          id: "d",
          text: "It temporarily removes processes from memory to manage RAM usage.",
        },
        {
          id: "e",
          text: "It balances CPU-bound vs. I/O-bound processes to optimize performance.",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E outline long-term scheduling tasks: admitting jobs, loading from storage, and balancing bound processes.",
        incorrect: {
          a: "Incorrect — Deciding which process gets CPU time next is Short-Term Scheduling.",
          d: "Incorrect — Temporarily removing processes from memory is the job of Medium-Term Scheduling.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "How does Medium-Term Scheduling (Swapping) function within an OS? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It temporarily removes processes from memory to manage RAM usage.",
        },
        {
          id: "b",
          text: "It permanently deletes inactive processes from the hard disk.",
        },
        {
          id: "c",
          text: "It moves inactive processes to disk to free memory for active processes.",
        },
        {
          id: "d",
          text: "It uses algorithms like First-Come, First-Serve to allocate CPU time.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Medium-term scheduling frees up RAM by swapping inactive processes to disk.",
        incorrect: {
          b: "Incorrect — It temporarily moves processes, it does not permanently delete them.",
          d: "Incorrect — Using algorithms for CPU time is the domain of Short-Term Scheduling.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "Which of the following are responsibilities of Short-Term Scheduling (CPU Scheduling)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Deciding which process gets CPU time next.",
        },
        {
          id: "b",
          text: "Selecting processes from the ready queue.",
        },
        {
          id: "c",
          text: "Balancing CPU-bound vs. I/O-bound processes entering the system.",
        },
        {
          id: "d",
          text: "Using scheduling algorithms like Round Robin.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Short-term scheduling selects processes from the ready queue for CPU time using specific algorithms.",
        incorrect: {
          c: "Incorrect — Balancing CPU/IO bound processes upon entry is a Long-Term Scheduling task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "Match the Short-Term Scheduling algorithms with their correct behaviors. (Select all that apply)",
      options: [
        {
          id: "a",
          text: "First-Come, First-Serve (FCFS) – Executes in order of arrival.",
        },
        {
          id: "b",
          text: "Shortest Job Next (SJN/SJF) – Gives each process an equal time slice.",
        },
        {
          id: "c",
          text: "Round Robin (RR) – Gives each process a time slice.",
        },
        {
          id: "d",
          text: "Priority Scheduling – Runs the shortest task first regardless of importance.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C correctly describe FCFS and Round Robin scheduling algorithms.",
        incorrect: {
          b: "Incorrect — SJN/SJF runs the shortest task first, it does not use equal time slices.",
          d: "Incorrect — Priority scheduling runs higher-priority tasks first, not necessarily the shortest task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "Why is Job Scheduling important in an operating system? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It ensures fair CPU usage among multiple processes.",
        },
        {
          id: "b",
          text: "It optimizes system performance by balancing tasks.",
        },
        {
          id: "c",
          text: "It permanently removes inactive applications to save hard drive space.",
        },
        {
          id: "d",
          text: "It prevents system overload by managing resource allocation.",
        },
        {
          id: "e",
          text: "It improves responsiveness in multitasking systems.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E represent the four main benefits of job scheduling listed in the text.",
        incorrect: {
          c: "Incorrect — Job scheduling manages active processes and memory/CPU usage; it does not permanently delete applications from the hard drive.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "Which of the following correctly categorizes network connection types? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Ethernet and Fiber Optic are Wired connections.",
        },
        {
          id: "b",
          text: "Wi-Fi is a Wired connection.",
        },
        {
          id: "c",
          text: "Bluetooth and 5G are Wireless connections.",
        },
        {
          id: "d",
          text: "Fiber Optic is a Wireless connection.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Ethernet and Fiber Optic are wired; Wi-Fi, Bluetooth, and 5G are wireless.",
        incorrect: {
          b: "Incorrect — Wi-Fi is a wireless technology.",
          d: "Incorrect — Fiber Optic relies on physical cables, making it a wired connection.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "What is the primary function of a Router in a network? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It connects devices exclusively within a local network (LAN) using MAC addresses.",
        },
        {
          id: "b",
          text: "It directs traffic between networks.",
        },
        {
          id: "c",
          text: "It connects networks to the internet.",
        },
        {
          id: "d",
          text: "It broadcasts data to all connected devices to cause congestion.",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. A router directs traffic between distinct networks and connects them to the internet.",
        incorrect: {
          a: "Incorrect — Connecting devices within a LAN using MAC addresses is the function of a Switch.",
          d: "Incorrect — Broadcasting to all devices is the function of a Hub.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "Which statements accurately describe a Network Switch? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It connects devices within a local network (LAN).",
        },
        {
          id: "b",
          text: "It broadcasts data to all connected devices simultaneously.",
        },
        {
          id: "c",
          text: "It uses MAC addresses to forward data only to the intended device.",
        },
        {
          id: "d",
          text: "It is generally more efficient than a hub.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. A switch connects LAN devices efficiently by forwarding data via specific MAC addresses.",
        incorrect: {
          b: "Incorrect — Broadcasting data to all connected devices is how a Hub operates, not a Switch.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "Identify the characteristics of a Hub. (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It forwards data only to the specific intended device.",
        },
        {
          id: "b",
          text: "It broadcasts data to all connected devices.",
        },
        {
          id: "c",
          text: "Its broadcasting method often causes network congestion.",
        },
        {
          id: "d",
          text: "Types of hubs include Passive Hub and Active Hub.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D accurately describe a hub's broadcast method, its congestion issues, and its types.",
        incorrect: {
          a: "Incorrect — A hub broadcasts to all devices; a switch forwards data to specific devices.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "What does a Modem do in a computer network? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It converts digital signals into analog signals and vice versa.",
        },
        {
          id: "b",
          text: "It enables internet access by communicating with an ISP.",
        },
        {
          id: "c",
          text: "It uses MAC addresses to direct traffic within a LAN.",
        },
        {
          id: "d",
          text: "Types include DSL Modem, Cable Modem, and Fiber Modem.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D correctly identify a modem's signal conversion role, ISP communication, and common types.",
        incorrect: {
          c: "Incorrect — Using MAC addresses within a LAN is the function of a Switch.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "Which of the following are true regarding Firewalls? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They convert analog signals into digital signals.",
        },
        {
          id: "b",
          text: "They are security devices that monitor and control network traffic.",
        },
        {
          id: "c",
          text: "They block unauthorized access while allowing legitimate communication.",
        },
        {
          id: "d",
          text: "They can be either Hardware Firewalls or Software Firewalls.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D are true. Firewalls are hardware/software security devices that control traffic and block unauthorized access.",
        incorrect: {
          a: "Incorrect — Converting signals is the responsibility of a Modem.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "Based on the provided notes, which of the following are recognized Network Topologies? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Star Topology",
        },
        {
          id: "b",
          text: "Bus Topology",
        },
        {
          id: "c",
          text: "Square Topology",
        },
        {
          id: "d",
          text: "Mesh Topology",
        },
        {
          id: "e",
          text: "Ring Topology",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are the four topologies listed in the document.",
        incorrect: {
          c: "Incorrect — Square Topology is not mentioned in the text.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "What is an IP Address used for in a network? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Identifying devices.",
        },
        {
          id: "b",
          text: "Routing data packets between networks.",
        },
        {
          id: "c",
          text: "Physically replacing MAC addresses on a Switch.",
        },
        {
          id: "d",
          text: "Enabling internet communication.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D list the core uses of an IP address as an identifier and enabler of routing and internet communication.",
        incorrect: {
          c: "Incorrect — IP addresses do not physically replace MAC addresses; both operate at different network layers.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "Which statements correctly differentiate between Static and Dynamic IP addresses? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A Static IP is manually assigned and does not change.",
        },
        {
          id: "b",
          text: "A Dynamic IP is manually assigned and changes periodically.",
        },
        {
          id: "c",
          text: "A Dynamic IP is assigned by DHCP.",
        },
        {
          id: "d",
          text: "A Static IP is assigned by DHCP and changes periodically.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Static IPs are manual and unchanging; Dynamic IPs are assigned by DHCP and change.",
        incorrect: {
          b: "Incorrect — Dynamic IPs are assigned automatically by DHCP, not manually.",
          d: "Incorrect — This describes a Dynamic IP, not a Static IP.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "Regarding operating system user interfaces, what are the primary types mentioned? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "CLI (Command Line Interface)",
        },
        {
          id: "b",
          text: "VRI (Virtual Reality Interface)",
        },
        {
          id: "c",
          text: "GUI (Graphical User Interface)",
        },
        {
          id: "d",
          text: "API (Application Programming Interface)",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. The OS user interfaces discussed are CLI and GUI.",
        incorrect: {
          b: "Incorrect — VRI is not mentioned as a core OS interface.",
          d: "Incorrect — While OSs provide APIs, the text specifically contrasts CLI vs GUI under User Interface.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "In the context of CPU design, what types of processors are discussed? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Multi-core processors",
        },
        {
          id: "b",
          text: "Fluid-core processors",
        },
        {
          id: "c",
          text: "Single-core processors",
        },
        {
          id: "d",
          text: "Static-core processors",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. The text explicitly compares Multi-core processors vs. Single-core processors.",
        incorrect: {
          b: "Incorrect — Fluid-core is a fabricated term.",
          d: "Incorrect — Static-core is a fabricated term.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "Which of these are correct examples of Linux file systems? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "ext4",
        },
        {
          id: "b",
          text: "NTFS",
        },
        {
          id: "c",
          text: "XFS",
        },
        {
          id: "d",
          text: "Btrfs",
        },
        {
          id: "e",
          text: "FAT32",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct: "Options A, C, and D are correct Linux file systems.",
        incorrect: {
          b: "Incorrect — NTFS is a Windows file system.",
          e: "Incorrect — FAT32 is a Windows file system.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "Which of these are correct examples of macOS file systems? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "APFS",
        },
        {
          id: "b",
          text: "exFAT",
        },
        {
          id: "c",
          text: "HFS+",
        },
        {
          id: "d",
          text: "ext4",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct: "Options A and C are correct. macOS uses APFS and HFS+.",
        incorrect: {
          b: "Incorrect — exFAT is listed under Windows file systems.",
          d: "Incorrect — ext4 is a Linux file system.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "Which of the following is considered an interactive process requiring user input? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Daemon",
        },
        {
          id: "b",
          text: "Background Process",
        },
        {
          id: "c",
          text: "Foreground Process",
        },
        {
          id: "d",
          text: "System Services",
        },
      ],
      correctOptionIds: ["c"],
      explanation: {
        correct:
          "Option C is correct. Foreground processes are interactive and require user input.",
        incorrect: {
          a: "Incorrect — A daemon is a background process.",
          b: "Incorrect — Background processes run without user interaction.",
          d: "Incorrect — System services are examples of background processes.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "When scheduling processes for CPU time, which algorithm gives each process a designated time slice? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "First-Come, First-Serve (FCFS)",
        },
        {
          id: "b",
          text: "Round Robin (RR)",
        },
        {
          id: "c",
          text: "Shortest Job Next (SJN)",
        },
        {
          id: "d",
          text: "Priority Scheduling",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. The Round Robin (RR) algorithm gives each process a time slice.",
        incorrect: {
          a: "Incorrect — FCFS executes entirely in order of arrival.",
          c: "Incorrect — SJN runs the shortest task first.",
          d: "Incorrect — Priority scheduling runs higher-priority tasks first.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "According to the notes, what are the effects of using a Hub in a network compared to a Switch? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It limits data transmission to a specific MAC address.",
        },
        {
          id: "b",
          text: "It broadcasts data to all connected devices.",
        },
        {
          id: "c",
          text: "It inherently reduces network congestion.",
        },
        {
          id: "d",
          text: "It causes network congestion due to broadcasting.",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. A hub broadcasts data to all devices, which causes network congestion.",
        incorrect: {
          a: "Incorrect — This describes a Switch, not a Hub.",
          c: "Incorrect — A hub causes congestion; a switch is more efficient and reduces it.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "Which algorithm executes tasks strictly in the order they arrive? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "First-Come, First-Serve (FCFS)",
        },
        {
          id: "b",
          text: "Priority Scheduling",
        },
        {
          id: "c",
          text: "Shortest Job First (SJF)",
        },
        {
          id: "d",
          text: "Swapping",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. FCFS executes jobs in the order of their arrival.",
        incorrect: {
          b: "Incorrect — Priority runs tasks based on importance.",
          c: "Incorrect — SJF runs the shortest tasks first.",
          d: "Incorrect — Swapping is a medium-term scheduling action, not a short-term algorithm.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "Identify the storage memory type that temporarily holds active programs. (Select all that apply)",
      options: [
        {
          id: "a",
          text: "HDD",
        },
        {
          id: "b",
          text: "NVMe",
        },
        {
          id: "c",
          text: "RAM",
        },
        {
          id: "d",
          text: "Cloud Storage",
        },
      ],
      correctOptionIds: ["c"],
      explanation: {
        correct:
          "Option C is correct. RAM is Random Access Memory and provides temporary storage for active programs.",
        incorrect: {
          a: "Incorrect — HDD is long-term storage.",
          b: "Incorrect — NVMe is long-term storage.",
          d: "Incorrect — Cloud Storage is long-term remote storage.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "Which types of Hubs are mentioned in the network components section? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Passive Hub",
        },
        {
          id: "b",
          text: "Dynamic Hub",
        },
        {
          id: "c",
          text: "Active Hub",
        },
        {
          id: "d",
          text: "Static Hub",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. The text categorizes hubs into Passive Hub and Active Hub.",
        incorrect: {
          b: "Incorrect — Dynamic is associated with IP addresses, not hub types.",
          d: "Incorrect — Static is associated with IP addresses, not hub types.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "What type of connection does Bluetooth utilize? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Wired",
        },
        {
          id: "b",
          text: "Ethernet",
        },
        {
          id: "c",
          text: "Wireless",
        },
        {
          id: "d",
          text: "Fiber Optic",
        },
      ],
      correctOptionIds: ["c"],
      explanation: {
        correct:
          "Option C is correct. Bluetooth is listed alongside Wi-Fi and 5G as a wireless connection.",
        incorrect: {
          a: "Incorrect — Bluetooth does not use cables.",
          b: "Incorrect — Ethernet is a wired connection.",
          d: "Incorrect — Fiber Optic is a wired connection.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "Which of the following devices connects multiple networks together and routes traffic to the internet? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Switch",
        },
        {
          id: "b",
          text: "Router",
        },
        {
          id: "c",
          text: "Hub",
        },
        {
          id: "d",
          text: "RAM",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. A router directs traffic between networks and connects to the internet.",
        incorrect: {
          a: "Incorrect — A switch connects devices within a single local network.",
          c: "Incorrect — A hub broadcasts data locally and does not route to the internet.",
          d: "Incorrect — RAM is memory, not a networking device.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "In CPU Scheduling, which algorithm favors tasks based strictly on their high level of importance? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "FCFS",
        },
        {
          id: "b",
          text: "Priority Scheduling",
        },
        {
          id: "c",
          text: "Round Robin",
        },
        {
          id: "d",
          text: "Shortest Job Next",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. Priority Scheduling runs higher-priority tasks first.",
        incorrect: {
          a: "Incorrect — FCFS is based on arrival time.",
          c: "Incorrect — Round Robin is based on equal time slices.",
          d: "Incorrect — Shortest Job Next is based on task length, not importance priority.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "Which of the following describe a Dynamic IP Address? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It does not change.",
        },
        {
          id: "b",
          text: "It changes periodically.",
        },
        {
          id: "c",
          text: "It is manually assigned.",
        },
        {
          id: "d",
          text: "It is assigned by DHCP.",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. A Dynamic IP changes periodically and is assigned by a DHCP server.",
        incorrect: {
          a: "Incorrect — This describes a Static IP.",
          c: "Incorrect — Manually assigning is a trait of a Static IP.",
        },
      },
    },
  ],
};
