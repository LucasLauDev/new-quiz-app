import { Quiz } from "@/app/types/quiz";

export const sysadminTopic2: Quiz = {
  id: "sysadmin-topic-2",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-2",
  title: "Topic 2 - Computer and Network Components",
  questions: [
    {
      id: "computer-network-q1",
      text: "What does hardware refer to in a computer system?",
      options: [
        {
          id: "a",
          text: "The physical components of a computer system",
        },
        {
          id: "b",
          text: "Software that manages hardware and software resources",
        },
        {
          id: "c",
          text: "A unique numerical identifier assigned to each device in a network",
        },
        {
          id: "d",
          text: "A process that determines which jobs should execute",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Hardware refers to the physical components of a computer system.",
        incorrect: {
          b: "This describes an operating system.",
          c: "This describes an IP address.",
          d: "This describes job scheduling.",
        },
      },
    },
    {
      id: "computer-network-q2",
      text: "Which option correctly matches internal and external hardware examples?",
      options: [
        {
          id: "a",
          text: "Internal: CPU, RAM, Storage, Motherboard; External: Monitors, Keyboards, Printers",
        },
        {
          id: "b",
          text: "Internal: Monitors, Keyboards, Printers; External: CPU, RAM, Storage",
        },
        {
          id: "c",
          text: "Internal: Windows, macOS, Linux; External: FAT32, NTFS, ext4",
        },
        {
          id: "d",
          text: "Internal: Routers, Switches, Hubs; External: Modems, Firewalls, IP addresses",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "CPU, RAM, storage, and motherboard are internal hardware; monitors, keyboards, and printers are external hardware.",
        incorrect: {
          b: "This reverses the internal and external hardware examples.",
          c: "These are operating systems and file systems, not hardware categories.",
          d: "These are network-related items, not the listed hardware categories.",
        },
      },
    },
    {
      id: "computer-network-q3",
      text: "Which option best summarizes the CPU and its components?",
      options: [
        {
          id: "a",
          text: "The CPU executes instructions and processes data; the ALU performs calculations; the CU directs system operations",
        },
        {
          id: "b",
          text: "The CPU organizes files; the ALU allocates RAM; the CU manages I/O devices",
        },
        {
          id: "c",
          text: "The CPU broadcasts data; the ALU forwards by MAC address; the CU converts digital signals",
        },
        {
          id: "d",
          text: "The CPU blocks threats; the ALU communicates with an ISP; the CU assigns DHCP addresses",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The CPU executes instructions and processes data. Its ALU performs calculations, and its CU directs system operations.",
        incorrect: {
          b: "These are operating system management functions, not CPU component roles.",
          c: "These describe hub, switch, and modem functions.",
          d: "These describe firewall, modem, and dynamic IP concepts.",
        },
      },
    },
    {
      id: "computer-network-q4",
      text: "Which processor comparison is identified?",
      options: [
        {
          id: "a",
          text: "Multi-core processors vs. single-core processors",
        },
        {
          id: "b",
          text: "HDD processors vs. SSD processors",
        },
        {
          id: "c",
          text: "Static processors vs. dynamic processors",
        },
        {
          id: "d",
          text: "CLI processors vs. GUI processors",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The processor comparison identified is multi-core processors vs. single-core processors.",
        incorrect: {
          b: "HDD and SSD are storage devices.",
          c: "Static and dynamic describe IP addressing types.",
          d: "CLI and GUI are user interface types.",
        },
      },
    },
    {
      id: "computer-network-q5",
      text: "Which option correctly summarizes the memory hierarchy?",
      options: [
        {
          id: "a",
          text: "Registers are fastest inside the CPU; cache memory speeds processing; RAM stores active programs temporarily; storage keeps long-term data",
        },
        {
          id: "b",
          text: "Registers store files permanently; cache memory routes packets; RAM blocks threats; storage schedules jobs",
        },
        {
          id: "c",
          text: "Registers are wireless connections; cache memory is a topology; RAM is a firewall; storage is a modem",
        },
        {
          id: "d",
          text: "Registers are file attributes; cache memory is DHCP; RAM is an ISP; storage is a hub type",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Registers are fastest and inside the CPU, cache memory speeds processing, RAM temporarily stores active programs, and storage is for long-term data.",
        incorrect: {
          b: "These roles do not match the memory hierarchy and describe file storage, routing, firewalls, and scheduling.",
          c: "These confuse memory items with network concepts like connections and topologies.",
          d: "These confuse memory items with file system and network terms.",
        },
      },
    },
    {
      id: "computer-network-q6",
      text: "Which memory hierarchy item includes L1, L2, and L3 levels?",
      options: [
        {
          id: "a",
          text: "Cache memory",
        },
        {
          id: "b",
          text: "Registers",
        },
        {
          id: "c",
          text: "RAM",
        },
        {
          id: "d",
          text: "Storage",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Cache memory includes L1, L2, and L3 and speeds up processing.",
        incorrect: {
          b: "Registers are the fastest memory inside the CPU, but L1, L2, and L3 refer to cache.",
          c: "RAM is for temporary storage of active programs, not structured in L1/L2/L3 levels.",
          d: "Storage refers to long-term memory like HDDs and SSDs.",
        },
      },
    },
    {
      id: "computer-network-q7",
      text: "Which option correctly compares HDD, SSD, and NVMe?",
      options: [
        {
          id: "a",
          text: "HDD is slower with mechanical parts; SSD is faster with flash memory and no moving parts; NVMe is newer and much faster than SSDs",
        },
        {
          id: "b",
          text: "HDD is faster with flash memory; SSD is slower with mechanical parts; NVMe is a file system",
        },
        {
          id: "c",
          text: "HDD is assigned by DHCP; SSD is manually assigned; NVMe is a firewall type",
        },
        {
          id: "d",
          text: "HDD is a wireless connection; SSD is a topology; NVMe is a user interface",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "HDD is slower and mechanical, SSD is faster with flash memory and no moving parts, and NVMe is newer and much faster than SSDs.",
        incorrect: {
          b: "This reverses HDD and SSD details and mislabels NVMe as a file system.",
          c: "DHCP and manual assignment refer to IP addressing, while firewall types are hardware and software.",
          d: "These are unrelated network and interface concepts.",
        },
      },
    },
    {
      id: "computer-network-q8",
      text: "Which option gives examples of cloud storage?",
      options: [
        {
          id: "a",
          text: "Google Drive and OneDrive",
        },
        {
          id: "b",
          text: "NTFS and FAT32",
        },
        {
          id: "c",
          text: "Wi-Fi and Bluetooth",
        },
        {
          id: "d",
          text: "Passive Hub and Active Hub",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "Google Drive and OneDrive are examples of cloud storage.",
        incorrect: {
          b: "These are file systems.",
          c: "These are wireless connection examples.",
          d: "These are hub types.",
        },
      },
    },
    {
      id: "computer-network-q9",
      text: "What is an operating system?",
      options: [
        {
          id: "a",
          text: "Software that manages hardware and software resources",
        },
        {
          id: "b",
          text: "The physical components of a computer system",
        },
        {
          id: "c",
          text: "A device that broadcasts data to all connected devices",
        },
        {
          id: "d",
          text: "A unique numerical identifier assigned to a network device",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "An operating system is software that manages hardware and software resources.",
        incorrect: {
          b: "This describes hardware.",
          c: "This describes a hub.",
          d: "This describes an IP address.",
        },
      },
    },
    {
      id: "computer-network-q10",
      text: "Which option lists examples of operating systems?",
      options: [
        {
          id: "a",
          text: "Windows, macOS, Linux, Android",
        },
        {
          id: "b",
          text: "FAT32, NTFS, ext4, APFS",
        },
        {
          id: "c",
          text: "Ethernet, Fiber Optic, Wi-Fi, Bluetooth",
        },
        {
          id: "d",
          text: "Router, Switch, Hub, Modem",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Windows, macOS, Linux, and Android are operating system examples.",
        incorrect: {
          b: "These are file systems.",
          c: "These are network connection examples.",
          d: "These are networking devices.",
        },
      },
    },
    {
      id: "computer-network-q11",
      text: "Which option correctly matches operating system functions with their roles?",
      options: [
        {
          id: "a",
          text: "Process Management schedules tasks and runs programs; Memory Management allocates RAM; Device Management manages I/O devices; File System Management organizes files and directories; User Interface includes CLI and GUI",
        },
        {
          id: "b",
          text: "Process Management allocates RAM; Memory Management organizes files; Device Management runs DHCP; File System Management forwards by MAC address; User Interface includes DSL and Cable",
        },
        {
          id: "c",
          text: "Process Management converts signals; Memory Management blocks threats; Device Management routes networks; File System Management broadcasts data; User Interface includes Passive and Active Hub",
        },
        {
          id: "d",
          text: "Process Management stores long-term data; Memory Management creates topologies; Device Management assigns IPs; File System Management directs CPU operations; User Interface includes L1, L2, and L3",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The operating system functions include process, memory, device, file system, and user interface management with the listed roles.",
        incorrect: {
          b: "The roles are mismatched and include networking concepts like DHCP and MAC addresses.",
          c: "These describe modems, firewalls, routers, hubs, and hub types.",
          d: "These confuse OS functions with storage, topologies, IP addressing, CPU control, and cache levels.",
        },
      },
    },
    {
      id: "computer-network-q12",
      text: "Which option correctly matches operating system types with their descriptions?",
      options: [
        {
          id: "a",
          text: "Single-user vs. Multi-user; RTOS is used in embedded systems; Distributed OS uses multiple computers working together; Network OS manages network resources",
        },
        {
          id: "b",
          text: "Single-user vs. Multi-user; RTOS manages files; Distributed OS broadcasts data; Network OS performs calculations",
        },
        {
          id: "c",
          text: "Single-user vs. Multi-user; RTOS converts analog signals; Distributed OS is assigned by DHCP; Network OS is a file system",
        },
        {
          id: "d",
          text: "Single-user vs. Multi-user; RTOS is a topology; Distributed OS is cloud storage; Network OS is a storage device",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The OS types include single-user vs. multi-user, RTOS for embedded systems, Distributed OS for multiple computers working together, and Network OS for managing network resources.",
        incorrect: {
          b: "The descriptions for RTOS, Distributed OS, and Network OS are incorrect and describe file systems, hubs, and CPUs.",
          c: "These descriptions belong to modems, dynamic IP addressing, and file systems.",
          d: "These descriptions confuse OS types with topologies, cloud storage, and storage devices.",
        },
      },
    },
    {
      id: "computer-network-q13",
      text: "What does a file system do?",
      options: [
        {
          id: "a",
          text: "Organizes and manages data storage on devices",
        },
        {
          id: "b",
          text: "Directs traffic between networks",
        },
        {
          id: "c",
          text: "Assigns CPU time to processes",
        },
        {
          id: "d",
          text: "Blocks unauthorized network access",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "A file system organizes and manages data storage on devices.",
        incorrect: {
          b: "This describes a router.",
          c: "This describes short-term scheduling.",
          d: "This describes a firewall.",
        },
      },
    },
    {
      id: "computer-network-q14",
      text: "Which option lists examples of file systems?",
      options: [
        {
          id: "a",
          text: "FAT32, NTFS, ext4, APFS",
        },
        {
          id: "b",
          text: "Windows, macOS, Linux, Android",
        },
        {
          id: "c",
          text: "CPU, RAM, Storage, Motherboard",
        },
        {
          id: "d",
          text: "Wi-Fi, Bluetooth, 5G, Ethernet",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "FAT32, NTFS, ext4, and APFS are file system examples.",
        incorrect: {
          b: "These are operating systems.",
          c: "These are internal hardware examples.",
          d: "These are network connection examples.",
        },
      },
    },
    {
      id: "computer-network-q15",
      text: "Which option correctly describes file system structure, file attributes, and common file systems?",
      options: [
        {
          id: "a",
          text: "Structure is a hierarchy of files and directories; attributes include name, size, creation date, permissions; Windows uses NTFS, FAT32, exFAT; Linux uses ext4, XFS, Btrfs; macOS uses APFS, HFS+",
        },
        {
          id: "b",
          text: "Structure is a ready queue; attributes include FCFS and RR; Windows uses Wi-Fi; Linux uses Bluetooth; macOS uses 5G",
        },
        {
          id: "c",
          text: "Structure is a LAN; attributes include MAC addresses; Windows uses DSL; Linux uses Cable; macOS uses Fiber",
        },
        {
          id: "d",
          text: "Structure is a topology; attributes include star and ring; Windows uses Passive Hub; Linux uses Active Hub; macOS uses DHCP",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "File systems use a hierarchy of files and directories, file attributes include name, size, creation date, and permissions, and common file systems differ by OS as listed.",
        incorrect: {
          b: "These are scheduling algorithms and wireless connections.",
          c: "These are LAN, MAC, and modem terms.",
          d: "These are topology, hub, and IP assignment terms.",
        },
      },
    },
    {
      id: "computer-network-q16",
      text: "Which statement correctly distinguishes a program from a process?",
      options: [
        {
          id: "a",
          text: "A program is passive instructions stored on disk, while a process is an active executing instance of a program",
        },
        {
          id: "b",
          text: "A program uses MAC addresses, while a process broadcasts data to all devices",
        },
        {
          id: "c",
          text: "A program is assigned by DHCP, while a process never changes",
        },
        {
          id: "d",
          text: "A program monitors network traffic, while a process converts digital signals",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A program is a passive set of instructions stored on disk, while a process is an active executing instance of a program.",
        incorrect: {
          b: "These describe switch and hub behavior.",
          c: "These describe dynamic and static IP concepts.",
          d: "These describe firewall and modem behavior.",
        },
      },
    },
    {
      id: "computer-network-q17",
      text: "Which option correctly describes process types and characteristics?",
      options: [
        {
          id: "a",
          text: "Foreground processes require user input; background processes or daemons run without user interaction; a process has a unique PID and uses CPU and memory resources",
        },
        {
          id: "b",
          text: "Foreground processes run without user interaction; background processes require input; a process has file attributes only",
        },
        {
          id: "c",
          text: "Foreground processes are static IPs; background processes are dynamic IPs; a process has DSL and Cable types",
        },
        {
          id: "d",
          text: "Foreground processes are topologies; background processes are file systems; a process has Passive and Active types",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Foreground processes are interactive, background processes or daemons run without user interaction, and processes have a unique PID while using CPU and memory.",
        incorrect: {
          b: "This reverses the process types and confuses process characteristics with file attributes.",
          c: "These are IP addressing and modem terms.",
          d: "These are topology, file system, and hub terms.",
        },
      },
    },
    {
      id: "computer-network-q18",
      text: "What does job scheduling manage in an operating system?",
      options: [
        {
          id: "a",
          text: "Which jobs should execute, when they should execute, and how system resources should be allocated",
        },
        {
          id: "b",
          text: "Which files should be stored in directories and which permissions they should have",
        },
        {
          id: "c",
          text: "Which devices should receive broadcast data from a hub",
        },
        {
          id: "d",
          text: "Which network topology should be used",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Job scheduling manages execution of multiple processes by deciding which jobs run, when they run, and how resources are allocated.",
        incorrect: {
          b: "This relates to file systems.",
          c: "This relates to hubs.",
          d: "This relates to network topologies.",
        },
      },
    },
    {
      id: "computer-network-q19",
      text: "What is the role of long-term scheduling?",
      options: [
        {
          id: "a",
          text: "Decides which jobs enter the system, loads processes from secondary storage into memory, and balances CPU-bound and I/O-bound processes",
        },
        {
          id: "b",
          text: "Temporarily removes inactive processes from memory to disk to free memory",
        },
        {
          id: "c",
          text: "Decides which process gets CPU time next from the ready queue",
        },
        {
          id: "d",
          text: "Gives each process a time slice",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Long-term scheduling, or admission scheduling, decides which jobs enter the system, loads processes from secondary storage into memory, and balances CPU-bound and I/O-bound processes.",
        incorrect: {
          b: "This describes medium-term scheduling.",
          c: "This describes short-term scheduling.",
          d: "This describes Round Robin scheduling.",
        },
      },
    },
    {
      id: "computer-network-q20",
      text: "What is the role of medium-term scheduling?",
      options: [
        {
          id: "a",
          text: "Temporarily removes processes from memory and moves inactive processes to disk to free memory for active processes",
        },
        {
          id: "b",
          text: "Decides which jobs enter the system for processing",
        },
        {
          id: "c",
          text: "Selects processes from the ready queue and assigns CPU time",
        },
        {
          id: "d",
          text: "Runs higher-priority tasks first",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Medium-term scheduling, or swapping, manages RAM usage by removing processes from memory and moving inactive processes to disk.",
        incorrect: {
          b: "This describes long-term scheduling.",
          c: "This describes short-term scheduling.",
          d: "This describes Priority Scheduling.",
        },
      },
    },
    {
      id: "computer-network-q21",
      text: "What is the role of short-term scheduling?",
      options: [
        {
          id: "a",
          text: "Decides which process gets CPU time next by selecting processes from the ready queue and assigning CPU time",
        },
        {
          id: "b",
          text: "Loads processes from secondary storage into memory",
        },
        {
          id: "c",
          text: "Moves inactive processes to disk to free memory",
        },
        {
          id: "d",
          text: "Manages network resources",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Short-term scheduling, or CPU scheduling, chooses the next process from the ready queue and assigns CPU time.",
        incorrect: {
          b: "This describes long-term scheduling.",
          c: "This describes medium-term scheduling.",
          d: "This describes a Network OS.",
        },
      },
    },
    {
      id: "computer-network-q22",
      text: "Which option correctly matches CPU scheduling algorithms with their behavior?",
      options: [
        {
          id: "a",
          text: "FCFS executes in order of arrival; SJN/SJF runs the shortest task first; RR gives each process a time slice; Priority Scheduling runs higher-priority tasks first",
        },
        {
          id: "b",
          text: "FCFS runs the shortest task first; SJN/SJF gives each process a time slice; RR runs higher-priority tasks first; Priority Scheduling executes in order of arrival",
        },
        {
          id: "c",
          text: "FCFS moves inactive processes to disk; SJN/SJF loads from storage; RR manages I/O devices; Priority Scheduling organizes files",
        },
        {
          id: "d",
          text: "FCFS manages network resources; SJN/SJF converts signals; RR broadcasts data; Priority Scheduling blocks unauthorized access",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "FCFS, SJN/SJF, RR, and Priority Scheduling match the listed CPU scheduling behaviors.",
        incorrect: {
          b: "The algorithm behaviors are mismatched with the wrong acronyms.",
          c: "These describe medium and long term scheduling types and OS functions, not the listed algorithms.",
          d: "These describe network device functions, not CPU scheduling algorithms.",
        },
      },
    },
    {
      id: "computer-network-q23",
      text: "Why is job scheduling important?",
      options: [
        {
          id: "a",
          text: "It ensures fair CPU usage, optimizes performance, prevents system overload, and improves responsiveness in multitasking systems",
        },
        {
          id: "b",
          text: "It converts digital signals into analog signals and communicates with an ISP",
        },
        {
          id: "c",
          text: "It connects devices in a LAN using MAC addresses",
        },
        {
          id: "d",
          text: "It organizes data storage using file systems",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Job scheduling helps ensure fair CPU usage, balanced performance, overload prevention, and better responsiveness.",
        incorrect: {
          b: "This describes a modem.",
          c: "This describes a switch.",
          d: "This describes file systems.",
        },
      },
    },
    {
      id: "computer-network-q24",
      text: "Which option best describes networking devices and common examples?",
      options: [
        {
          id: "a",
          text: "They enable communication between computers and other devices, manage data flow, and include routers, switches, hubs, modems, and firewalls",
        },
        {
          id: "b",
          text: "They store active programs temporarily and include registers, cache memory, RAM, and storage",
        },
        {
          id: "c",
          text: "They manage hardware and software resources and include Windows, macOS, Linux, and Android",
        },
        {
          id: "d",
          text: "They organize data storage and include FAT32, NTFS, ext4, and APFS",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Networking devices enable communication, manage network data flow, and include routers, switches, hubs, modems, and firewalls.",
        incorrect: {
          b: "These are memory hierarchy items.",
          c: "These are operating systems.",
          d: "These are file systems.",
        },
      },
    },
    {
      id: "computer-network-q25",
      text: "Which option correctly classifies network connection types?",
      options: [
        {
          id: "a",
          text: "Wired: Ethernet and Fiber Optic; Wireless: Wi-Fi, Bluetooth, and 5G",
        },
        {
          id: "b",
          text: "Wired: Wi-Fi, Bluetooth, and 5G; Wireless: Ethernet and Fiber Optic",
        },
        {
          id: "c",
          text: "Wired: FAT32 and NTFS; Wireless: ext4 and APFS",
        },
        {
          id: "d",
          text: "Wired: FCFS and SJN; Wireless: Round Robin and Priority",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Wired connections include Ethernet and Fiber Optic, while wireless connections include Wi-Fi, Bluetooth, and 5G.",
        incorrect: {
          b: "This reverses the wired and wireless examples.",
          c: "These are file systems.",
          d: "These are CPU scheduling algorithms.",
        },
      },
    },
    {
      id: "computer-network-q26",
      text: "Which option correctly matches network components with their roles?",
      options: [
        {
          id: "a",
          text: "Router directs traffic between networks and connects to the internet; Switch connects devices in a local network; Hub broadcasts data to all devices; Modem converts digital data for internet transmission; Firewall protects networks from cyber threats",
        },
        {
          id: "b",
          text: "Router broadcasts data to all devices; Switch converts signals; Hub protects networks; Modem directs CPU operations; Firewall allocates RAM",
        },
        {
          id: "c",
          text: "Router stores active programs; Switch manages file attributes; Hub schedules tasks; Modem organizes directories; Firewall runs embedded systems",
        },
        {
          id: "d",
          text: "Router is a file system; Switch is an operating system; Hub is cloud storage; Modem is a topology; Firewall is a cache level",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Each listed network component is matched with its correct basic role.",
        incorrect: {
          b: "The component roles are mismatched.",
          c: "These describe memory, file, OS, and scheduling concepts.",
          d: "These confuse network components with unrelated concepts.",
        },
      },
    },
    {
      id: "computer-network-q27",
      text: "Which option best describes a switch in more detail?",
      options: [
        {
          id: "a",
          text: "It connects devices within a LAN, uses MAC addresses to forward data only to the intended device, reduces congestion, and is used in offices, data centers, and enterprise networks",
        },
        {
          id: "b",
          text: "It broadcasts data to all connected devices, causes congestion, and has Passive and Active types",
        },
        {
          id: "c",
          text: "It converts digital signals into analog signals and communicates with an ISP",
        },
        {
          id: "d",
          text: "It monitors traffic, blocks unauthorized access, and can be hardware or software",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A switch connects LAN devices, forwards data using MAC addresses only to the intended device, reduces congestion, and is used in offices, data centers, and enterprise networks.",
        incorrect: {
          b: "This describes a hub.",
          c: "This describes a modem.",
          d: "This describes a firewall.",
        },
      },
    },
    {
      id: "computer-network-q28",
      text: "Which option best describes a hub in more detail?",
      options: [
        {
          id: "a",
          text: "It is a basic networking device that connects multiple devices, broadcasts data to all connected devices, causes congestion, includes Passive and Active types, and is largely replaced by switches",
        },
        {
          id: "b",
          text: "It forwards data only to the intended device using MAC addresses and reduces congestion",
        },
        {
          id: "c",
          text: "It enables broadband internet by converting digital and analog signals through an ISP",
        },
        {
          id: "d",
          text: "It blocks unauthorized access while allowing legitimate communication",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A hub connects multiple devices, broadcasts data to all devices, can cause congestion, has Passive and Active types, and has largely been replaced by switches.",
        incorrect: {
          b: "This describes a switch.",
          c: "This describes a modem.",
          d: "This describes a firewall.",
        },
      },
    },
    {
      id: "computer-network-q29",
      text: "Which option best describes a modem in more detail?",
      options: [
        {
          id: "a",
          text: "It converts digital signals from a computer into analog signals for telephone-line transmission and vice versa, enables internet access by communicating with an ISP, and includes DSL, Cable, and Fiber types",
        },
        {
          id: "b",
          text: "It connects LAN devices, uses MAC addresses, and reduces network congestion",
        },
        {
          id: "c",
          text: "It broadcasts data to all devices and includes Passive and Active types",
        },
        {
          id: "d",
          text: "It monitors and controls incoming and outgoing traffic and blocks unauthorized access",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A modem converts digital and analog signals, enables internet access through an ISP, and includes DSL Modem, Cable Modem, and Fiber Modem.",
        incorrect: {
          b: "This describes a switch.",
          c: "This describes a hub.",
          d: "This describes a firewall.",
        },
      },
    },
    {
      id: "computer-network-q30",
      text: "Which option best describes a firewall in more detail?",
      options: [
        {
          id: "a",
          text: "It monitors and controls incoming and outgoing network traffic, blocks unauthorized access, allows legitimate communication, includes hardware and software types, and protects against cyber threats",
        },
        {
          id: "b",
          text: "It broadcasts data to all connected devices and causes network congestion",
        },
        {
          id: "c",
          text: "It converts digital signals into analog signals for telephone lines",
        },
        {
          id: "d",
          text: "It uses MAC addresses to forward data only to the intended LAN device",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A firewall monitors and controls traffic, blocks unauthorized access, allows legitimate communication, has hardware and software types, and protects against cyber threats.",
        incorrect: {
          b: "This describes a hub.",
          c: "This describes a modem.",
          d: "This describes a switch.",
        },
      },
    },
    {
      id: "computer-network-q31",
      text: "Which option lists the network topologies identified?",
      options: [
        {
          id: "a",
          text: "Star Topology, Mesh Topology, Bus Topology, Ring Topology",
        },
        {
          id: "b",
          text: "Static Topology, Dynamic Topology, DHCP Topology, ISP Topology",
        },
        {
          id: "c",
          text: "Passive Topology, Active Topology, Hardware Topology, Software Topology",
        },
        {
          id: "d",
          text: "FCFS Topology, SJN Topology, Round Robin Topology, Priority Topology",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The network topologies identified are Star, Mesh, Bus, and Ring.",
        incorrect: {
          b: "These terms relate to IP addressing and internet service concepts.",
          c: "These terms relate to hub and firewall types.",
          d: "These terms are CPU scheduling algorithms.",
        },
      },
    },
    {
      id: "computer-network-q32",
      text: "What is an IP address?",
      options: [
        {
          id: "a",
          text: "A unique numerical identifier assigned to each device in a network",
        },
        {
          id: "b",
          text: "A file system that organizes data storage on devices",
        },
        {
          id: "c",
          text: "A process ID used by a running program",
        },
        {
          id: "d",
          text: "A CPU component that performs calculations",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "An IP address is a unique numerical identifier assigned to each device in a network.",
        incorrect: {
          b: "A file system organizes and manages data storage.",
          c: "A PID identifies a process, not a network device address.",
          d: "The ALU performs calculations.",
        },
      },
    },
    {
      id: "computer-network-q33",
      text: "What are IP addresses used for?",
      options: [
        {
          id: "a",
          text: "Identifying devices, routing data packets between networks, and enabling internet communication",
        },
        {
          id: "b",
          text: "Performing calculations, directing system operations, and speeding up processing",
        },
        {
          id: "c",
          text: "Scheduling tasks, allocating RAM, and managing I/O devices",
        },
        {
          id: "d",
          text: "Broadcasting data, causing congestion, and replacing switches",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "IP addresses identify devices, route data packets between networks, and enable internet communication.",
        incorrect: {
          b: "These describe CPU and cache memory functions.",
          c: "These describe operating system functions.",
          d: "These describe hubs.",
        },
      },
    },
    {
      id: "computer-network-q34",
      text: "Which option correctly compares static IP and dynamic IP addressing?",
      options: [
        {
          id: "a",
          text: "Static IP is manually assigned and does not change; Dynamic IP is assigned by DHCP and changes periodically",
        },
        {
          id: "b",
          text: "Static IP is assigned by DHCP and changes periodically; Dynamic IP is manually assigned and does not change",
        },
        {
          id: "c",
          text: "Static IP is used in embedded systems; Dynamic IP uses multiple computers working together",
        },
        {
          id: "d",
          text: "Static IP broadcasts data to all devices; Dynamic IP forwards by MAC address",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A static IP is manually assigned and does not change, while a dynamic IP is assigned by DHCP and changes periodically.",
        incorrect: {
          b: "This reverses static and dynamic IP definitions.",
          c: "Embedded systems relate to RTOS, and multiple computers working together describe Distributed OS.",
          d: "Broadcasting describes a hub, while forwarding by MAC address describes a switch.",
        },
      },
    },
  ],
};
