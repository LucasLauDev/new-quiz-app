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
      text: "Which of the following are considered internal hardware components? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "CPU",
        },
        {
          id: "b",
          text: "Monitors",
        },
        {
          id: "c",
          text: "RAM",
        },
        {
          id: "d",
          text: "Printers",
        },
        {
          id: "e",
          text: "Motherboard",
        },
      ],
      correctOptionIds: ["a", "c", "e"],
      explanation: {
        correct:
          "CPU, RAM, and Motherboard are classified as internal hardware components[cite: 282].",
        incorrect: {
          b: "Incorrect — Monitors are external hardware[cite: 283].",
          d: "Incorrect — Printers are external hardware[cite: 283].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "Which of the following correctly describes the external hardware of a computer system? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Motherboard",
        },
        {
          id: "b",
          text: "Monitors",
        },
        {
          id: "c",
          text: "Keyboards",
        },
        {
          id: "d",
          text: "Storage",
        },
        {
          id: "e",
          text: "Printers",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Monitors, keyboards, and printers are examples of external hardware[cite: 283].",
        incorrect: {
          a: "Incorrect — A motherboard is an internal hardware component[cite: 282].",
          d: "Incorrect — Storage devices are considered internal hardware[cite: 282].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "What are the primary functions of the Central Processing Unit (CPU)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Executes instructions",
        },
        {
          id: "b",
          text: "Long-term data storage",
        },
        {
          id: "c",
          text: "Processes data",
        },
        {
          id: "d",
          text: "Manages network resources",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "The CPU is responsible for executing instructions and processing data[cite: 285].",
        incorrect: {
          b: "Incorrect — Long-term data storage is handled by storage devices like HDD and SSD[cite: 293].",
          d: "Incorrect — Managing network resources is the function of a Network OS[cite: 312].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "Which of the following accurately describes the Arithmetic Logic Unit (ALU)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is a component of the CPU.",
        },
        {
          id: "b",
          text: "It directs system operations.",
        },
        {
          id: "c",
          text: "It performs calculations.",
        },
        {
          id: "d",
          text: "It acts as a temporary storage for active programs.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "The ALU is a component of the CPU that performs calculations[cite: 284, 286].",
        incorrect: {
          b: "Incorrect — Directing system operations is the function of the Control Unit (CU)[cite: 287].",
          d: "Incorrect — Temporary storage for active programs is the function of RAM[cite: 292].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "Which statements are TRUE regarding the Control Unit (CU)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It directs system operations.",
        },
        {
          id: "b",
          text: "It performs arithmetic calculations.",
        },
        {
          id: "c",
          text: "It is a component of the CPU.",
        },
        {
          id: "d",
          text: "It provides the fastest memory inside the CPU.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "The Control Unit is a CPU component that directs system operations[cite: 284, 287].",
        incorrect: {
          b: "Incorrect — Arithmetic calculations are performed by the ALU[cite: 286].",
          d: "Incorrect — Registers provide the fastest memory inside the CPU[cite: 290].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "In the memory hierarchy, which of the following describes Registers? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They are the fastest form of memory.",
        },
        {
          id: "b",
          text: "They are located inside the CPU.",
        },
        {
          id: "c",
          text: "They are used for long-term data storage.",
        },
        {
          id: "d",
          text: "They consist of L1, L2, and L3 variants.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Registers are the fastest memory available and are located inside the CPU[cite: 290].",
        incorrect: {
          c: "Incorrect — Long-term data storage is provided by devices like HDDs and SSDs[cite: 293].",
          d: "Incorrect — L1, L2, and L3 refer to Cache Memory, not Registers[cite: 291].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "Which of the following is TRUE about Cache Memory? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It includes L1, L2, and L3 levels.",
        },
        {
          id: "b",
          text: "It speeds up processing.",
        },
        {
          id: "c",
          text: "It is slower than an HDD.",
        },
        {
          id: "d",
          text: "It provides long-term data storage.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Cache memory (L1, L2, L3) is used to speed up processing[cite: 291].",
        incorrect: {
          c: "Incorrect — Cache memory is much faster than an HDD[cite: 291, 295].",
          d: "Incorrect — Cache is volatile memory, not for long-term storage[cite: 291, 293].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "What is the primary function of RAM (Random Access Memory)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It serves as temporary storage for active programs.",
        },
        {
          id: "b",
          text: "It provides permanent data storage.",
        },
        {
          id: "c",
          text: "It permanently stores the operating system.",
        },
        {
          id: "d",
          text: "It is faster than an SSD.",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "RAM functions as temporary storage for active programs[cite: 292].",
        incorrect: {
          b: "Incorrect — RAM is temporary, not permanent storage[cite: 292].",
          c: "Incorrect — The OS is permanently stored in long-term storage devices[cite: 293].",
          d: "Incorrect — While RAM is faster than SSDs, this specific relationship is not the defining function of RAM as described in the notes.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "Which of the following devices are classified under 'Storage' in the memory hierarchy for long-term data storage? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "HDD",
        },
        {
          id: "b",
          text: "SSD",
        },
        {
          id: "c",
          text: "NVMe",
        },
        {
          id: "d",
          text: "Cache Memory",
        },
        {
          id: "e",
          text: "Registers",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "HDD, SSD, and NVMe are storage devices used for long-term data storage[cite: 293].",
        incorrect: {
          d: "Incorrect — Cache memory is used to speed up processing, not for long-term storage[cite: 291].",
          e: "Incorrect — Registers are temporary, high-speed memory inside the CPU[cite: 290].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "Which of the following characteristics describe a Hard Disk Drive (HDD)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Slower than SSDs",
        },
        {
          id: "b",
          text: "Contains mechanical parts",
        },
        {
          id: "c",
          text: "Uses flash memory",
        },
        {
          id: "d",
          text: "Has no moving parts",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "HDDs are slower and utilize mechanical parts[cite: 295].",
        incorrect: {
          c: "Incorrect — Flash memory is used in SSDs, not HDDs[cite: 296].",
          d: "Incorrect — SSDs have no moving parts; HDDs have mechanical parts[cite: 295, 296].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "Which of the following are properties of a Solid State Drive (SSD)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Faster than HDDs",
        },
        {
          id: "b",
          text: "Uses flash memory",
        },
        {
          id: "c",
          text: "Has no moving parts",
        },
        {
          id: "d",
          text: "Relies on mechanical parts",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "SSDs are faster than HDDs, use flash memory, and have no moving parts[cite: 296].",
        incorrect: {
          d: "Incorrect — Mechanical parts are found in HDDs, not SSDs[cite: 295, 296].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "What characterizes NVMe storage devices? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is a newer technology.",
        },
        {
          id: "b",
          text: "It is much faster than standard SSDs.",
        },
        {
          id: "c",
          text: "It is slower than an HDD.",
        },
        {
          id: "d",
          text: "It is a type of cloud storage.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "NVMe is a newer technology that is much faster than SSDs[cite: 297].",
        incorrect: {
          c: "Incorrect — NVMe is significantly faster than HDDs and SSDs[cite: 297].",
          d: "Incorrect — NVMe is a physical storage technology, whereas cloud storage refers to services like Google Drive[cite: 297, 298].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "Which of the following are examples of Operating Systems (OS)? (Select all that apply)",
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
          text: "Linux",
        },
        {
          id: "d",
          text: "Android",
        },
        {
          id: "e",
          text: "Google Drive",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Windows, macOS, Linux, and Android are all examples of Operating Systems[cite: 301].",
        incorrect: {
          e: "Incorrect — Google Drive is an example of Cloud Storage, not an OS[cite: 298].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "What is the primary definition of an Operating System (OS)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Software that manages hardware resources.",
        },
        {
          id: "b",
          text: "Software that manages software resources.",
        },
        {
          id: "c",
          text: "A physical component of the computer.",
        },
        {
          id: "d",
          text: "A mechanism for providing long-term data storage.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "An OS is defined as software that manages both hardware and software resources[cite: 300].",
        incorrect: {
          c: "Incorrect — An OS is software, whereas physical components are hardware[cite: 281, 300].",
          d: "Incorrect — Long-term data storage is the function of hardware like HDDs and SSDs[cite: 293].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "Which tasks are handled by the 'Process Management' function of an Operating System? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Scheduling tasks",
        },
        {
          id: "b",
          text: "Running programs",
        },
        {
          id: "c",
          text: "Allocating RAM to applications",
        },
        {
          id: "d",
          text: "Managing I/O devices",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Process Management involves scheduling tasks and running programs[cite: 303].",
        incorrect: {
          c: "Incorrect — Allocating RAM is part of Memory Management[cite: 304].",
          d: "Incorrect — Managing I/O devices is part of Device Management[cite: 305].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "What does the 'Memory Management' function of an Operating System do? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Allocating RAM to applications",
        },
        {
          id: "b",
          text: "Organizing files and directories",
        },
        {
          id: "c",
          text: "Providing CLI vs GUI",
        },
        {
          id: "d",
          text: "Scheduling tasks",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Memory Management is responsible for allocating RAM to applications[cite: 304].",
        incorrect: {
          b: "Incorrect — This is the role of File System Management[cite: 306].",
          c: "Incorrect — This is the role of the User Interface[cite: 307].",
          d: "Incorrect — This is the role of Process Management[cite: 303].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "Which of the following OS functions are correctly paired with their description? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Device Management: Managing I/O devices",
        },
        {
          id: "b",
          text: "File System Management: Organizing files & directories",
        },
        {
          id: "c",
          text: "User Interface: Allocating RAM to applications",
        },
        {
          id: "d",
          text: "Process Management: CLI vs. GUI",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Device Management handles I/O devices [cite: 305], and File System Management organizes files and directories[cite: 306].",
        incorrect: {
          c: "Incorrect — Allocating RAM is Memory Management[cite: 304].",
          d: "Incorrect — CLI vs GUI falls under the User Interface function[cite: 307].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "What is a Real-time OS (RTOS) primarily used for? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Embedded systems",
        },
        {
          id: "b",
          text: "Managing network resources",
        },
        {
          id: "c",
          text: "General purpose desktop computing",
        },
        {
          id: "d",
          text: "Multiple computers working together",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "A Real-time OS (RTOS) is specifically used in embedded systems[cite: 310].",
        incorrect: {
          b: "Incorrect — Managing network resources is the function of a Network OS[cite: 312].",
          d: "Incorrect — Multiple computers working together is a Distributed OS[cite: 311].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "Which OS type enables multiple computers to work together? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Distributed OS",
        },
        {
          id: "b",
          text: "Real-time OS",
        },
        {
          id: "c",
          text: "Network OS",
        },
        {
          id: "d",
          text: "Single-user OS",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "A Distributed OS enables multiple computers to work together[cite: 311].",
        incorrect: {
          b: "Incorrect — RTOS is used in embedded systems[cite: 310].",
          c: "Incorrect — Network OS manages network resources[cite: 312].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "What is the primary function of a Network OS? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Manages network resources",
        },
        {
          id: "b",
          text: "Used primarily in embedded systems",
        },
        {
          id: "c",
          text: "Enables multiple computers to work together as a single system",
        },
        {
          id: "d",
          text: "Organizes files on a single hard drive",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct: "A Network OS manages network resources[cite: 312].",
        incorrect: {
          b: "Incorrect — This describes an RTOS[cite: 310].",
          c: "Incorrect — This describes a Distributed OS[cite: 311].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "Which of the following are considered File Attributes? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Name",
        },
        {
          id: "b",
          text: "Size",
        },
        {
          id: "c",
          text: "Creation date",
        },
        {
          id: "d",
          text: "Permissions",
        },
        {
          id: "e",
          text: "Process ID (PID)",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Name, size, creation date, and permissions are all standard file attributes[cite: 316].",
        incorrect: {
          e: "Incorrect — Process ID (PID) is a characteristic of a process, not a file[cite: 326].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "Which of the following are filesystems typically used by the Windows operating system? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "NTFS",
        },
        {
          id: "b",
          text: "FAT32",
        },
        {
          id: "c",
          text: "exFAT",
        },
        {
          id: "d",
          text: "ext4",
        },
        {
          id: "e",
          text: "APFS",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "NTFS, FAT32, and exFAT are common filesystems for Windows[cite: 317].",
        incorrect: {
          d: "Incorrect — ext4 is a Linux filesystem[cite: 318].",
          e: "Incorrect — APFS is a macOS filesystem[cite: 319].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "Which of the following are filesystems typically used by Linux? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "ext4",
        },
        {
          id: "b",
          text: "XFS",
        },
        {
          id: "c",
          text: "Btrfs",
        },
        {
          id: "d",
          text: "HFS+",
        },
        {
          id: "e",
          text: "NTFS",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "ext4, XFS, and Btrfs are filesystems used in Linux[cite: 318].",
        incorrect: {
          d: "Incorrect — HFS+ is a macOS filesystem[cite: 319].",
          e: "Incorrect — NTFS is a Windows filesystem[cite: 317].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "Which filesystems are associated with macOS? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "APFS",
        },
        {
          id: "b",
          text: "HFS+",
        },
        {
          id: "c",
          text: "exFAT",
        },
        {
          id: "d",
          text: "Btrfs",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct: "APFS and HFS+ are common macOS filesystems[cite: 319].",
        incorrect: {
          c: "Incorrect — exFAT is primarily associated with Windows[cite: 317].",
          d: "Incorrect — Btrfs is a Linux filesystem[cite: 318].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "What is the difference between a program and a process? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A program is a set of instructions stored on disk and is passive.",
        },
        {
          id: "b",
          text: "A process is an executing instance of a running program and is active.",
        },
        {
          id: "c",
          text: "A process is stored passively on the disk.",
        },
        {
          id: "d",
          text: "A program actively uses a Process ID (PID).",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "A program is a passive set of instructions stored on disk [cite: 321], while a process is its active, executing instance[cite: 322].",
        incorrect: {
          c: "Incorrect — A process is active, not stored passively[cite: 321, 322].",
          d: "Incorrect — A process uses a PID, not a passive program[cite: 326].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "Which of the following describes Foreground Processes? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They are interactive.",
        },
        {
          id: "b",
          text: "They require user input.",
        },
        {
          id: "c",
          text: "They run without user interaction.",
        },
        {
          id: "d",
          text: "An example is a web browser.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Foreground processes are interactive, require user input, and examples include web browsers[cite: 324].",
        incorrect: {
          c: "Incorrect — Running without user interaction defines a background process[cite: 325].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "Which of the following describes Background Processes (Daemons)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They run without user interaction.",
        },
        {
          id: "b",
          text: "An example includes system services.",
        },
        {
          id: "c",
          text: "They are highly interactive.",
        },
        {
          id: "d",
          text: "They require continuous user input.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Background processes (Daemons) run without user interaction and include system services[cite: 325].",
        incorrect: {
          c: "Incorrect — Foreground processes are interactive, not background processes[cite: 324].",
          d: "Incorrect — Background processes explicitly run without user input[cite: 325].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "What are the characteristics of a Process? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It has a unique Process ID (PID).",
        },
        {
          id: "b",
          text: "It uses CPU and memory resources.",
        },
        {
          id: "c",
          text: "It is a passive set of instructions stored on disk.",
        },
        {
          id: "d",
          text: "It manages external hardware devices.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "A process has a unique PID and consumes CPU and memory resources[cite: 326].",
        incorrect: {
          c: "Incorrect — A passive set of instructions is a program, not a process[cite: 321].",
          d: "Incorrect — Managing external hardware is an OS function (Device Management), not a universal characteristic of every process[cite: 305].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "What does Long-Term Scheduling (Admission Scheduling) handle in an operating system? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Decides which jobs enter the system for processing.",
        },
        {
          id: "b",
          text: "Loads processes from secondary storage into memory.",
        },
        {
          id: "c",
          text: "Balances CPU-bound vs. I/O-bound processes.",
        },
        {
          id: "d",
          text: "Temporarily removes processes from memory to manage RAM.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Long-term scheduling decides which jobs enter the system, loads processes from secondary storage, and balances CPU/IO-bound processes to optimize performance[cite: 330].",
        incorrect: {
          d: "Incorrect — Temporarily removing processes to manage RAM is Medium-Term Scheduling[cite: 331].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "What is the function of Medium-Term Scheduling (Swapping)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Temporarily removes processes from memory to manage RAM usage.",
        },
        {
          id: "b",
          text: "Moves inactive processes to disk to free memory.",
        },
        {
          id: "c",
          text: "Decides which process gets CPU time next.",
        },
        {
          id: "d",
          text: "Executes jobs in order of arrival.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Medium-term scheduling (swapping) temporarily removes inactive processes from memory and moves them to disk to manage RAM usage[cite: 331].",
        incorrect: {
          c: "Incorrect — Deciding which process gets CPU time next is Short-Term Scheduling[cite: 332].",
          d: "Incorrect — Executing jobs in order of arrival describes the FCFS short-term scheduling algorithm[cite: 332].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "What characterizes Short-Term Scheduling (CPU Scheduling)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Decides which process gets CPU time next.",
        },
        {
          id: "b",
          text: "Selects processes from the ready queue.",
        },
        {
          id: "c",
          text: "Temporarily swaps processes to disk.",
        },
        {
          id: "d",
          text: "Determines which jobs enter the system for processing initially.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Short-term scheduling decides which process gets CPU time next by selecting from the ready queue[cite: 332].",
        incorrect: {
          c: "Incorrect — Swapping processes to disk is Medium-Term Scheduling[cite: 331].",
          d: "Incorrect — Determining which jobs enter the system initially is Long-Term Scheduling[cite: 330].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "Which of the following are algorithms used in Short-Term Scheduling? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "First-Come, First-Serve (FCFS)",
        },
        {
          id: "b",
          text: "Shortest Job Next (SJN/SJF)",
        },
        {
          id: "c",
          text: "Round Robin (RR)",
        },
        {
          id: "d",
          text: "Priority Scheduling",
        },
        {
          id: "e",
          text: "Random Access Memory (RAM) Allocation",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "FCFS, SJN/SJF, Round Robin (RR), and Priority Scheduling are all short-term scheduling algorithms[cite: 332].",
        incorrect: {
          e: "Incorrect — RAM allocation is an OS Memory Management function, not a CPU scheduling algorithm[cite: 304].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "Why is Job Scheduling important in an operating system? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Ensures fair CPU usage among multiple processes.",
        },
        {
          id: "b",
          text: "Optimizes system performance by balancing tasks.",
        },
        {
          id: "c",
          text: "Prevents system overload by managing resource allocation.",
        },
        {
          id: "d",
          text: "Improves responsiveness in multitasking systems.",
        },
        {
          id: "e",
          text: "Replaces the need for physical RAM.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Job scheduling ensures fair CPU usage, optimizes performance, prevents overload, and improves responsiveness [cite: 334-337].",
        incorrect: {
          e: "Incorrect — Job scheduling manages resources but does not replace the physical need for RAM [cite: 334-337].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "Which of the following are considered Wireless network connections? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Wi-Fi",
        },
        {
          id: "b",
          text: "Bluetooth",
        },
        {
          id: "c",
          text: "5G",
        },
        {
          id: "d",
          text: "Ethernet",
        },
        {
          id: "e",
          text: "Fiber Optic",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Wi-Fi, Bluetooth, and 5G are examples of wireless network connections[cite: 340].",
        incorrect: {
          d: "Incorrect — Ethernet is a wired connection[cite: 340].",
          e: "Incorrect — Fiber Optic is a wired connection[cite: 340].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "What is the primary role of a Router in a network? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Directs traffic between networks.",
        },
        {
          id: "b",
          text: "Connects to the internet.",
        },
        {
          id: "c",
          text: "Converts digital signals to analog.",
        },
        {
          id: "d",
          text: "Broadcasts data blindly to all devices on a LAN.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "A router directs traffic between networks and connects to the internet[cite: 341].",
        incorrect: {
          c: "Incorrect — Converting digital to analog signals is the role of a modem[cite: 345].",
          d: "Incorrect — Broadcasting data to all devices is the function of a Hub[cite: 344].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "Which statements are TRUE regarding a Switch? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It connects devices within a local network (LAN).",
        },
        {
          id: "b",
          text: "It uses MAC addresses to forward data only to the intended device.",
        },
        {
          id: "c",
          text: "It is more efficient than a hub.",
        },
        {
          id: "d",
          text: "It broadcasts data to all connected devices.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A switch connects devices within a LAN, utilizes MAC addresses to target specific devices, and is more efficient than a hub because it reduces network congestion[cite: 342, 343].",
        incorrect: {
          d: "Incorrect — A hub broadcasts data to all devices; a switch forwards data only to the intended device[cite: 342, 344].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "What are the characteristics of a network Hub? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Broadcasts data to all connected devices.",
        },
        {
          id: "b",
          text: "Causes network congestion.",
        },
        {
          id: "c",
          text: "Uses MAC addresses to route packets efficiently.",
        },
        {
          id: "d",
          text: "Comes in Passive and Active types.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "A hub broadcasts data to all connected devices (causing congestion) and comes in Passive and Active types[cite: 344].",
        incorrect: {
          c: "Incorrect — Switches use MAC addresses to route packets efficiently, whereas hubs do not[cite: 342, 344].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "Which of the following correctly describes a Modem? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Converts digital signals into analog signals.",
        },
        {
          id: "b",
          text: "Converts analog signals back into digital signals.",
        },
        {
          id: "c",
          text: "Enables internet access by communicating with an ISP.",
        },
        {
          id: "d",
          text: "Uses MAC addresses to forward data within a LAN.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A modem converts digital signals into analog signals (and vice versa) and communicates with an ISP to enable internet access[cite: 345, 346].",
        incorrect: {
          d: "Incorrect — Using MAC addresses to forward data within a LAN is the function of a switch[cite: 342].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "What is the function of a Firewall? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Monitors and controls incoming and outgoing network traffic.",
        },
        {
          id: "b",
          text: "Blocks unauthorized access.",
        },
        {
          id: "c",
          text: "Allows legitimate communication.",
        },
        {
          id: "d",
          text: "It can be hardware or software.",
        },
        {
          id: "e",
          text: "Converts digital signals to analog signals.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A firewall is a security device (hardware or software) that monitors/controls network traffic, blocking unauthorized access while allowing legitimate communication[cite: 347, 348].",
        incorrect: {
          e: "Incorrect — Signal conversion is handled by a modem[cite: 345].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "Which of the following are examples of Network Topologies? (Select all that apply)",
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
          text: "Mesh Topology",
        },
        {
          id: "d",
          text: "Ring Topology",
        },
        {
          id: "e",
          text: "Firewall Topology",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Star, Bus, Mesh, and Ring are all standard network topologies[cite: 350].",
        incorrect: {
          e: "Incorrect — Firewall is a security device, not a network topology[cite: 347, 350].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q41",
      text: "What is an IP Address used for? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Identifying devices in a network.",
        },
        {
          id: "b",
          text: "Routing data packets between networks.",
        },
        {
          id: "c",
          text: "Enabling internet communication.",
        },
        {
          id: "d",
          text: "Converting analog signals to digital.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "An IP address is a unique numerical identifier used for identifying devices, routing data packets, and enabling internet communication[cite: 352, 353].",
        incorrect: {
          d: "Incorrect — Converting analog signals to digital is done by a modem[cite: 345].",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q42",
      text: "Which statements are TRUE regarding IP Addressing Types? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A Static IP is manually assigned and does not change.",
        },
        {
          id: "b",
          text: "A Dynamic IP is assigned by DHCP.",
        },
        {
          id: "c",
          text: "A Dynamic IP changes periodically.",
        },
        {
          id: "d",
          text: "A Static IP is assigned automatically by DHCP.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A Static IP is manually assigned and remains constant, whereas a Dynamic IP is assigned by DHCP and changes periodically[cite: 354].",
        incorrect: {
          d: "Incorrect — DHCP assigns Dynamic IPs, not Static IPs[cite: 354].",
        },
      },
    },
  ],
};
