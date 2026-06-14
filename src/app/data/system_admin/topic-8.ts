import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic8: Quiz = {
  id: "sysadmin-topic-8",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-8",
  title: "Topic 8 - Max business software benefits",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "An organization is configuring the email client settings for its employees. When setting up the protocol responsible for dispatching messages, which of the following statements accurately describe its function? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is used specifically for sending outgoing emails.",
        },
        {
          id: "b",
          text: "It transfers emails from the user's client directly to the mail server.",
        },
        {
          id: "c",
          text: "It is utilized for communication and routing between different mail servers.",
        },
        {
          id: "d",
          text: "It synchronizes incoming emails simultaneously across multiple devices.",
        },
        {
          id: "e",
          text: "It downloads emails to the local device and removes them from the server.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Statements A, B, and C accurately describe SMTP (Simple Mail Transfer Protocol), which is used for sending outgoing emails from client to server and between servers.",
        incorrect: {
          d: "Incorrect — This describes IMAP, not SMTP.",
          e: "Incorrect — This describes the typical behavior of POP3, not SMTP.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "A field worker requires access to their emails in areas with poor internet connectivity and prefers to store them entirely on their local laptop to save company server space. If the IT department configures their client using POP3, what behaviors should the user expect? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "The protocol downloads incoming emails from the server directly to the local device.",
        },
        {
          id: "b",
          text: "It supports real-time, instantaneous synchronization between the user's laptop and smartphone.",
        },
        {
          id: "c",
          text: "It usually removes the emails from the server immediately after they are downloaded.",
        },
        {
          id: "d",
          text: "It supports offline reading effectively since the files are stored locally.",
        },
        {
          id: "e",
          text: "It ensures minimal server storage usage for the IT department.",
        },
      ],
      correctOptionIds: ["a", "c", "d", "e"],
      explanation: {
        correct:
          "Statements A, C, D, and E reflect POP3's design, which downloads mail locally, usually deletes it from the server, enables offline reading, and saves server storage.",
        incorrect: {
          b: "Incorrect — POP3 is difficult to sync across multiple devices and does not support real-time synchronization like IMAP.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "A sales manager frequently switches between a smartphone, a tablet, and a laptop to check emails. They require all read/unread statuses and custom folders to remain perfectly consistent. Why is IMAP the appropriate protocol for this scenario? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It synchronizes incoming emails seamlessly between multiple devices and the central server.",
        },
        {
          id: "b",
          text: "Emails remain stored safely on the remote server rather than existing only locally.",
        },
        {
          id: "c",
          text: "It provides real-time synchronization of the mailbox state across all connected endpoints.",
        },
        {
          id: "d",
          text: "It allows for comprehensive folder management directly on the server side.",
        },
        {
          id: "e",
          text: "It completely bypasses the need for internet connectivity once configured.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are correct. IMAP synchronizes emails, keeps them on the server, updates in real-time, and supports folder management across multiple devices.",
        incorrect: {
          e: "Incorrect — IMAP heavily relies on a stable internet connection to continuously synchronize data.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "Understanding the exact operational workflow of email protocols helps system administrators troubleshoot delivery issues. Which of the following steps are explicitly part of the standard POP3 workflow? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "The user connects to the mail server.",
        },
        {
          id: "b",
          text: "Emails are downloaded to the client device.",
        },
        {
          id: "c",
          text: "Emails may be permanently deleted from the server.",
        },
        {
          id: "d",
          text: "The user reads the emails locally.",
        },
        {
          id: "e",
          text: "Changes made to the local inbox (like folders) are immediately mirrored on the server.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D accurately represent the sequential POP3 workflow of connecting, downloading, deleting from the server, and reading locally.",
        incorrect: {
          e: "Incorrect — POP3 does not mirror local changes back to the server; that is an IMAP feature.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "When an organization mandates the use of IMAP for all corporate email accounts, which of the following workflows and operational outcomes represent this specific configuration? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "The user connects to the mail server to view messages.",
        },
        {
          id: "b",
          text: "Emails stay on the server.",
        },
        {
          id: "c",
          text: "Multiple devices can access the same mailbox simultaneously.",
        },
        {
          id: "d",
          text: "Changes made by the user synchronize automatically across the system.",
        },
        {
          id: "e",
          text: "The server automatically purges the email once the user clicks to read it.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are correct steps in the IMAP workflow, ensuring emails remain on the server for multiple devices to access and sync.",
        incorrect: {
          e: "Incorrect — IMAP leaves the email on the server; it does not automatically purge it upon reading.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "An IT consultant is evaluating whether to implement POP3 for a small remote retail branch. What are the recognized advantages and disadvantages of choosing the POP3 protocol? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Advantage: It provides faster offline access to downloaded messages.",
        },
        {
          id: "b",
          text: "Advantage: It saves central server storage space.",
        },
        {
          id: "c",
          text: "Disadvantage: It is difficult to sync across devices.",
        },
        {
          id: "d",
          text: "Disadvantage: There is a risk of losing emails if the local device fails.",
        },
        {
          id: "e",
          text: "Advantage: It is highly optimized for real-time collaboration across entire teams.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D correctly list the specific pros and cons of POP3, emphasizing local offline speed and server space savings, but highlighting device dependency risks.",
        incorrect: {
          e: "Incorrect — POP3 is not designed for collaboration; IMAP is much better suited for centralized, collaborative access.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "A large enterprise relies heavily on IMAP to support its remote workforce. What are the true characteristics, including both benefits and drawbacks, of this protocol? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Advantage: It provides centralized email storage.",
        },
        {
          id: "b",
          text: "Advantage: It enables better collaboration and access from anywhere.",
        },
        {
          id: "c",
          text: "Disadvantage: It requires a stable internet connection to function properly.",
        },
        {
          id: "d",
          text: "Disadvantage: It consumes more server storage compared to POP3.",
        },
        {
          id: "e",
          text: "Advantage: It completely eliminates the risk of phishing attacks.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are true statements regarding IMAP. It centers on accessibility and collaboration but demands more server resources and internet stability.",
        incorrect: {
          e: "Incorrect — Protocol choice (IMAP/POP3) does not inherently prevent phishing attacks.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "To prevent man-in-the-middle attacks on corporate communications, a system administrator must secure the email traffic. Which statements regarding SSL and TLS are correct? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "SSL is a security technology used to encrypt communication between the email client and the email server.",
        },
        {
          id: "b",
          text: "TLS is considered a modern and more secure version of SSL.",
        },
        {
          id: "c",
          text: "Implementing SSL/TLS effectively secures the transmission channel over the network.",
        },
        {
          id: "d",
          text: "SSL automatically encrypts data stored physically on the hard drive (data at rest).",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C are correct. SSL/TLS secure the communication pathway between clients and servers during transmission.",
        incorrect: {
          d: "Incorrect — SSL/TLS protects data in transit, not data at rest on a physical hard drive.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "A recent security audit revealed vulnerabilities in how employees handle their email accounts. According to standard email security best practices, which actions should be enforced immediately? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Always enable SSL/TLS.",
        },
        {
          id: "b",
          text: "Use strong passwords.",
        },
        {
          id: "c",
          text: "Enable multi-factor authentication (MFA).",
        },
        {
          id: "d",
          text: "Update email applications frequently.",
        },
        {
          id: "e",
          text: "Avoid using public Wi-Fi to check emails.",
        },
        {
          id: "f",
          text: "Disable all spam filters to ensure no messages are missed.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "A, B, C, D, and E are all recognized security best practices for maintaining secure email communications.",
        incorrect: {
          f: "Incorrect — Disabling spam filters dramatically increases the risk of phishing and malware infections.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "A legal firm regularly exchanges highly sensitive contracts via email and needs to ensure no unauthorized parties intercept or tamper with the documents. Which features of S/MIME make it suitable for this scenario? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is a security standard used specifically to encrypt the actual email messages.",
        },
        {
          id: "b",
          text: "It allows users to add digital signatures to their emails.",
        },
        {
          id: "c",
          text: "It actively protects sensitive communication over the internet.",
        },
        {
          id: "d",
          text: "It serves as a replacement for the SMTP protocol.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C correctly define the functionality of S/MIME, which provides encryption and digital signatures for sensitive emails.",
        incorrect: {
          d: "Incorrect — S/MIME is an encryption standard used in conjunction with protocols like SMTP; it does not replace them.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "By deploying S/MIME across an organization, the IT security team guarantees specific protection levels for the contents of their emails. What are the specific security assurances provided by S/MIME? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Confidentiality.",
        },
        {
          id: "b",
          text: "Authenticity.",
        },
        {
          id: "c",
          text: "Unmodified transmission.",
        },
        {
          id: "d",
          text: "Guaranteed protection from hardware failures.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C are correct. S/MIME ensures that messages are confidential, authentic, and unmodified during transmission.",
        incorrect: {
          d: "Incorrect — S/MIME protects data in transit; it has nothing to do with preventing physical hardware failures.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "An organization is planning to overhaul its IT infrastructure. In this context, what does the concept of 'data storage' fundamentally refer to? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Technologies used to save digital information.",
        },
        {
          id: "b",
          text: "The ability to retrieve data when it is needed.",
        },
        {
          id: "c",
          text: "Methods to protect important files.",
        },
        {
          id: "d",
          text: "Systems that support ongoing business operations.",
        },
        {
          id: "e",
          text: "The physical cooling mechanisms used in server rooms.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are all elements that define data storage, which focuses on saving, retrieving, and protecting data to support business operations.",
        incorrect: {
          e: "Incorrect — Physical cooling is an environmental control mechanism, not a definition of data storage.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "Why is having a robust data storage strategy considered critically important for modern organizations? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It provides the foundation for data backup.",
        },
        {
          id: "b",
          text: "It ensures business continuity in the event of disruptions.",
        },
        {
          id: "c",
          text: "It maintains and improves overall system performance.",
        },
        {
          id: "d",
          text: "It facilitates efficient data sharing and accessibility among employees.",
        },
        {
          id: "e",
          text: "It ensures the network routers never drop packets.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are the key reasons why data storage is important, encompassing backup, continuity, performance, and sharing.",
        incorrect: {
          e: "Incorrect — Data storage does not govern network router packet transmission; that is managed by QoS and routing protocols.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "Data storage technologies serve various specific purposes within a computer system. Which of the following accurately reflect these purposes? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Saving files, such as documents and images.",
        },
        {
          id: "b",
          text: "Running applications, such as hosting operating systems.",
        },
        {
          id: "c",
          text: "Backing up data to facilitate disaster recovery.",
        },
        {
          id: "d",
          text: "Sharing information to enable cloud collaboration.",
        },
        {
          id: "e",
          text: "Generating unique IP addresses for client workstations.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D correctly state the purposes of data storage as outlined in the text.",
        incorrect: {
          e: "Incorrect — Generating IP addresses is the role of DHCP, not a purpose of data storage.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "A company needs to archive decades worth of financial records and is looking for a solution that provides massive space at a low cost, without needing high retrieval speeds. Which characteristics apply to Magnetic Storage? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It provides large storage capacity.",
        },
        {
          id: "b",
          text: "It is highly affordable compared to newer technologies.",
        },
        {
          id: "c",
          text: "It generally suffers from slower performance.",
        },
        {
          id: "d",
          text: "Examples include Hard Disk Drives (HDD) and magnetic tape.",
        },
        {
          id: "e",
          text: "It uses flash memory to achieve instantaneous read speeds.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are correct characteristics of magnetic storage, making it ideal for affordable, large-scale, slow-access archiving.",
        incorrect: {
          e: "Incorrect — Flash memory is a characteristic of Solid-State Storage, not Magnetic Storage.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "A video editing team requires storage drives that can render 4K videos instantly without bottlenecking the system. Why would Solid-State Storage be the appropriate choice? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It offers extremely fast read and write speeds.",
        },
        {
          id: "b",
          text: "It is highly durable due to the absence of moving parts.",
        },
        {
          id: "c",
          text: "Examples include Solid State Drives (SSD) and flash drives.",
        },
        {
          id: "d",
          text: "It relies on a spinning magnetic disk to write data.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C correctly describe Solid-State Storage, which uses flash memory for high-speed, durable performance without moving parts.",
        incorrect: {
          d: "Incorrect — Spinning magnetic disks are a feature of Magnetic Storage (like HDDs), not Solid-State Storage.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "When evaluating secondary and primary storage mediums, a system administrator notes the differences between Optical Storage and RAM. Which statements correctly describe them? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Optical storage is highly portable but operates at lower speeds.",
        },
        {
          id: "b",
          text: "Examples of optical storage include CDs, DVDs, and Blu-ray discs.",
        },
        {
          id: "c",
          text: "RAM is used primarily to store active applications and supports system multitasking.",
        },
        {
          id: "d",
          text: "RAM significantly improves system performance by holding active data temporarily.",
        },
        {
          id: "e",
          text: "RAM is used to permanently archive cold data for disaster recovery.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are correct. Optical storage is portable and slow, while RAM is fast, volatile memory used for active processes.",
        incorrect: {
          e: "Incorrect — RAM is temporary (volatile) and loses data when powered off; it is never used for permanent archiving.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "An IT department has hired a new technician whose primary role involves storage management. What specific responsibilities does this process entail? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Organizing storage resources effectively.",
        },
        {
          id: "b",
          text: "Monitoring storage performance continuously.",
        },
        {
          id: "c",
          text: "Maintaining the reliability of storage hardware.",
        },
        {
          id: "d",
          text: "Ensuring the efficient overall use of storage devices.",
        },
        {
          id: "e",
          text: "Replacing the CPU registers manually.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are the defined processes of storage management according to the text.",
        incorrect: {
          e: "Incorrect — CPU registers are hardware-level memory inside the processor and cannot be replaced manually via storage management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "If an organization neglects to manage its storage effectively, it may face severe operational issues. What are the key benefits of proactive storage management? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Ensures faster overall system performance.",
        },
        {
          id: "b",
          text: "Provides more reliable data access for users.",
        },
        {
          id: "c",
          text: "Reduces unexpected system downtime.",
        },
        {
          id: "d",
          text: "Offers better data protection against corruption or loss.",
        },
        {
          id: "e",
          text: "Automatically converts all legacy copper wiring to fiber optics.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D highlight the critical importance of storage management in maintaining a fast, reliable, and secure IT environment.",
        incorrect: {
          e: "Incorrect — Storage management manages data and disk resources, it does not physically alter network cabling.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "A server is running out of space and performing sluggishly. The administrator decides to perform standard storage management tasks. Which of the following are valid tasks in this context? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Disk Cleanup to remove unnecessary files.",
        },
        {
          id: "b",
          text: "Defragmentation to improve HDD speed.",
        },
        {
          id: "c",
          text: "Backups to protect important corporate data.",
        },
        {
          id: "d",
          text: "Monitoring to detect potential storage problems.",
        },
        {
          id: "e",
          text: "Restarting the network router to free up disk sectors.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are the four common management tasks explicitly identified for storage management.",
        incorrect: {
          e: "Incorrect — Restarting a network router affects network traffic, not local hard disk sectors or storage space.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "To move away from individual employees storing files on isolated hard drives, a company implements Local Network Storage. What does this concept involve? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Using storage devices or servers connected through a local network.",
        },
        {
          id: "b",
          text: "Allowing file sharing and centralized data management.",
        },
        {
          id: "c",
          text: "Enabling multi-user access to data.",
        },
        {
          id: "d",
          text: "Providing backup and recovery services.",
        },
        {
          id: "e",
          text: "Storing data centrally instead of on individual computers.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "A, B, C, D, and E accurately reflect the definition and benefits of implementing local network storage.",
        incorrect: {},
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "A small architecture firm installs a NAS to share blueprints. How does a Network Attached Storage (NAS) system typically operate? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is a dedicated storage device connected directly to a network.",
        },
        {
          id: "b",
          text: "The NAS device connects to a switch or a router.",
        },
        {
          id: "c",
          text: "Users access the shared folders through the network.",
        },
        {
          id: "d",
          text: "Files are stored centrally on the NAS system.",
        },
        {
          id: "e",
          text: "It requires files to be manually copied via USB to be shared.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D correctly describe the basic workflow and definition of a NAS device.",
        incorrect: {
          e: "Incorrect — A NAS allows access over the network directly, completely eliminating the need for manual USB transfers.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "When pitching a NAS solution to a small business owner without an IT background, which inherent advantages of NAS should be highlighted? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It features user-friendly interfaces making it simple to set up and manage.",
        },
        {
          id: "b",
          text: "It provides a single centralized point for file storage.",
        },
        {
          id: "c",
          text: "It simplifies the management of backups and access controls.",
        },
        {
          id: "d",
          text: "It is extremely complex and requires a dedicated IT administrator.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C are major advantages of NAS, focusing on its ease of use and centralization.",
        incorrect: {
          d: "Incorrect — NAS is specifically praised for requiring minimal administration compared to a full file server.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "Beyond simplicity, what are the other technical and operational benefits of deploying a Network Attached Storage (NAS) appliance? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It allows for easy management of user permissions and access rights.",
        },
        {
          id: "b",
          text: "It offers scalability, as many NAS devices can expand storage by adding more drives.",
        },
        {
          id: "c",
          text: "It is energy efficient, typically consuming less power than a traditional server.",
        },
        {
          id: "d",
          text: "It serves as the primary firewall for the entire corporate network.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C highlight the access control, scalability, and energy efficiency attributes of NAS.",
        incorrect: {
          d: "Incorrect — A NAS is a storage device, not a network security firewall device.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "A large university requires a system capable of not only storing massive amounts of student files but also running specific database applications. Why would they choose a File Server over a NAS? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is a general-purpose server optimized to store and manage files.",
        },
        {
          id: "b",
          text: "It can run on a variety of operating systems.",
        },
        {
          id: "c",
          text: "It is capable of running additional applications and services beyond just file sharing.",
        },
        {
          id: "d",
          text: "It offers the flexibility to host databases, web hosting, and application hosting.",
        },
        {
          id: "e",
          text: "It inherently uses much less processing power than a NAS.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D correctly identify a File Server as a flexible, general-purpose machine capable of running diverse applications alongside file storage.",
        incorrect: {
          e: "Incorrect — File Servers typically have significantly more processing power than NAS devices to handle complex workloads.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "An enterprise IT team decides to custom-build a File Server instead of buying a pre-packaged NAS. What advantages do they gain regarding customizability and performance? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They can customize the hardware and software to meet specific needs.",
        },
        {
          id: "b",
          text: "They can install complex RAID configurations for redundancy.",
        },
        {
          id: "c",
          text: "They benefit from higher processing power and memory than typical NAS devices.",
        },
        {
          id: "d",
          text: "They are able to handle more complex and heavy enterprise workloads.",
        },
        {
          id: "e",
          text: "They completely remove the need to use an operating system.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are direct advantages of File Servers regarding custom hardware, advanced RAID, and high performance.",
        incorrect: {
          e: "Incorrect — A File Server absolutely requires an operating system to manage the hardware and network services.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "When deciding between a NAS and a File Server for a new branch office, an IT architect must weigh the trade-offs in complexity and cost. Which statements are true? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "NAS has a simple and user-friendly setup process.",
        },
        {
          id: "b",
          text: "A File Server is more complex to configure and maintain.",
        },
        {
          id: "c",
          text: "NAS generally has a lower initial cost.",
        },
        {
          id: "d",
          text: "A File Server incurs a higher cost due to dedicated hardware and software licenses.",
        },
        {
          id: "e",
          text: "NAS requires highly expensive enterprise database licenses to operate.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D correctly contrast the low complexity and cost of NAS against the high complexity and cost of File Servers.",
        incorrect: {
          e: "Incorrect — NAS does not require expensive database licenses; it is cost-effective and designed for simple file sharing.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "A startup is expanding into a mid-sized company and needs to understand how their storage infrastructure should evolve. How do NAS and File Servers compare in terms of performance and user support? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "NAS provides moderate performance suitable for basic file sharing.",
        },
        {
          id: "b",
          text: "A File Server offers higher performance designed for intensive enterprise workloads.",
        },
        {
          id: "c",
          text: "NAS is best suited for small to medium-sized groups.",
        },
        {
          id: "d",
          text: "A File Server is designed to support large organizations effectively.",
        },
        {
          id: "e",
          text: "A File Server is strictly designed for single-user offline environments.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D correctly state that NAS fits small-to-medium groups with moderate needs, while File Servers handle large enterprise workloads.",
        incorrect: {
          e: "Incorrect — A File Server is designed for networked environments with many users, not offline single-user setups.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "Long-term maintenance and growth potential are critical factors when purchasing network storage. Which comparisons accurately reflect NAS and File Servers? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "NAS requires minimal ongoing administration.",
        },
        {
          id: "b",
          text: "A File Server requires dedicated IT staff or trained system administrators.",
        },
        {
          id: "c",
          text: "NAS typically has limited scalability.",
        },
        {
          id: "d",
          text: "A File Server is highly scalable and can be upgraded extensively.",
        },
        {
          id: "e",
          text: "NAS has virtually unlimited processing scalability compared to a File Server.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are true. NAS is low maintenance but limited in scale, whereas File Servers are highly scalable but require heavy administration.",
        incorrect: {
          e: "Incorrect — NAS has limited scalability; it is the File Server that offers extensive scalability.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "Different environments demand different security capabilities. How do NAS and File Servers differ in their security features and common usage scenarios? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "NAS utilizes basic security features sufficient for standard sharing.",
        },
        {
          id: "b",
          text: "A File Server incorporates advanced security integration.",
        },
        {
          id: "c",
          text: "NAS is commonly used in home offices and small businesses.",
        },
        {
          id: "d",
          text: "File Servers are predominantly used in universities, corporate networks, and enterprise data centers.",
        },
        {
          id: "e",
          text: "NAS seamlessly integrates advanced domain-level biometric authentication by default.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D outline the correct security profiles and usage environments for NAS (basic/small) versus File Servers (advanced/enterprise).",
        incorrect: {
          e: "Incorrect — NAS utilizes basic security; advanced integrations like biometric domain authentication are typically handled by File Servers.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "With the rise of remote work, a company decides to migrate its shared folders off-premise. What are the core capabilities and definitions of Cloud Storage Services? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Data is stored on remote servers accessed through the internet instead of local devices.",
        },
        {
          id: "b",
          text: "Users can easily upload files online and access data remotely from any location.",
        },
        {
          id: "c",
          text: "It permits sharing files seamlessly across multiple devices.",
        },
        {
          id: "d",
          text: "It synchronizes information automatically between the cloud and local clients.",
        },
        {
          id: "e",
          text: "It completely bypasses the need for an internet connection to sync new files.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D define Cloud Storage Services, emphasizing remote access, sharing, and automatic synchronization over the internet.",
        incorrect: {
          e: "Incorrect — Cloud storage fundamentally requires an internet connection to sync or access new data.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "A system administrator needs to recommend popular, reliable cloud storage platforms to the executive board. Which of the following are recognized examples of Cloud Storage Services? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Google Drive",
        },
        {
          id: "b",
          text: "Microsoft OneDrive",
        },
        {
          id: "c",
          text: "Dropbox",
        },
        {
          id: "d",
          text: "iCloud (Apple devices)",
        },
        {
          id: "e",
          text: "Microsoft Outlook",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "A, B, C, and D are the specific examples of Cloud Storage Services provided in the text.",
        incorrect: {
          e: "Incorrect — Microsoft Outlook is an email client, not a cloud storage service.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "An executive travels frequently and uses a laptop, a tablet, and a smartphone. They recently complained that an email they replied to on their smartphone still appears as 'unread' on their laptop, and sent items do not match. Based on this scenario, what is the most likely cause and the correct solution? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Cause: The devices are likely configured using POP3, which downloads emails locally without syncing read status.",
        },
        {
          id: "b",
          text: "Cause: The devices are likely configured using IMAP, which natively struggles with synchronization.",
        },
        {
          id: "c",
          text: "Solution: The administrator should reconfigure all the executive's mail clients to use IMAP.",
        },
        {
          id: "d",
          text: "Solution: The administrator should enforce POP3 to ensure folders sync automatically.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "A and C are correct. POP3 is difficult to sync across devices (causing the described symptoms). Switching to IMAP solves this by synchronizing emails between all devices and the server.",
        incorrect: {
          b: "Incorrect — IMAP excels at synchronization; it does not struggle with it.",
          d: "Incorrect — POP3 does not sync folders automatically; IMAP does.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "A corporate spy intercepted a highly sensitive email containing trade secrets. While the email server was using TLS for transmission, the spy compromised the recipient's local inbox and read the plain text message. To ensure the message content itself is encrypted and authentic even if the inbox is breached, what technology should be deployed? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "S/MIME should be used to encrypt the actual email messages.",
        },
        {
          id: "b",
          text: "S/MIME should be used to add a digital signature to the email.",
        },
        {
          id: "c",
          text: "The company should switch from TLS back to SSL.",
        },
        {
          id: "d",
          text: "Implementing S/MIME will guarantee the message remains confidential and unmodified.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "A, B, and D are correct. S/MIME encrypts the message content itself and provides digital signatures, ensuring confidentiality and integrity even if the inbox is accessed.",
        incorrect: {
          c: "Incorrect — Downgrading to SSL reduces transport security and does nothing to encrypt the actual message content inside the inbox.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "A team of five graphic designers works in a single office. They need a shared location to drop large image files but have a tiny budget and no dedicated IT staff. Why is a NAS the perfect solution for their specific scenario? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It provides a simple and user-friendly setup that non-IT staff can manage.",
        },
        {
          id: "b",
          text: "It has a lower initial cost compared to provisioning a full File Server.",
        },
        {
          id: "c",
          text: "It provides moderate performance that is entirely suitable for basic file sharing among small groups.",
        },
        {
          id: "d",
          text: "It requires purchasing expensive server operating system licenses.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C perfectly align the capabilities of NAS (low cost, easy to use, moderate performance) with the needs of a small, budget-conscious design team.",
        incorrect: {
          d: "Incorrect — A NAS generally does not require the purchase of expensive server OS licenses; that is a drawback of File Servers.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "A multinational corporation is setting up a new regional headquarters. They need to host a custom HR database, integrate complex active directory authentication policies, and process high-volume enterprise workloads. Why must they choose a File Server over a standard NAS? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A File Server allows the flexibility to host databases alongside file sharing.",
        },
        {
          id: "b",
          text: "A File Server provides higher performance capabilities tailored for enterprise workloads.",
        },
        {
          id: "c",
          text: "A File Server incorporates advanced security integration to handle complex authentication policies.",
        },
        {
          id: "d",
          text: "A File Server requires minimal administration, saving the corporation money on IT staff.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C highlight the flexibility, performance, and advanced security of a File Server that make it mandatory for enterprise database and Active Directory workloads.",
        incorrect: {
          d: "Incorrect — A File Server actually requires dedicated IT staff to administer, whereas NAS requires minimal administration.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "Users are complaining that a heavily utilized File Server containing years of archived documents takes a very long time to open files. The hard disk drive (HDD) is nearly full and highly fragmented. Which storage management tasks should the SysAdmin perform to resolve this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Run Disk Cleanup to safely remove unnecessary or temporary files, freeing up capacity.",
        },
        {
          id: "b",
          text: "Run Defragmentation to reorganize scattered data on the HDD, improving read speeds.",
        },
        {
          id: "c",
          text: "Format the entire drive to permanently erase all archived documents.",
        },
        {
          id: "d",
          text: "Utilize monitoring tools to keep track of the storage performance post-cleanup.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "A, B, and D are appropriate, constructive storage management tasks to improve performance and monitor health without losing data.",
        incorrect: {
          c: "Incorrect — Formatting the drive would result in total data loss of the archived documents, which is destructive and contrary to business continuity.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "A business recently suffered a catastrophic fire in their primary server room, destroying all local File Servers and NAS appliances. They realized their local backups were also destroyed. To prevent this exact scenario from causing data loss in the future, what technologies or practices should they adopt? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They should utilize Cloud Storage Services to automatically sync important files to remote servers.",
        },
        {
          id: "b",
          text: "They should rely solely on RAID configurations inside their local File Servers.",
        },
        {
          id: "c",
          text: "They should understand the importance of Data Storage for disaster recovery and keep off-site backups.",
        },
        {
          id: "d",
          text: "They should only use Solid-State Storage locally because it is completely fireproof.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "A and C address the need for remote/off-site data redundancy (cloud storage and disaster recovery planning) to survive physical site disasters.",
        incorrect: {
          b: "Incorrect — Local RAID protects against a single drive failure, not a room fire that destroys the entire server.",
          d: "Incorrect — SSDs are not fireproof; physical destruction of the site will still destroy SSD data.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "An IT administrator is tasked with upgrading the storage drives in the company's laptops. Employees complain that their operating systems take several minutes to boot up and applications load slowly. To fix this by replacing the storage technology, what is the best choice and why? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Upgrade to Solid-State Storage (SSD) because it provides fast read and write speeds.",
        },
        {
          id: "b",
          text: "Upgrade to SSDs because they lack moving parts, making them more durable for portable laptops.",
        },
        {
          id: "c",
          text: "Downgrade to Magnetic Tape to save company money while instantly increasing application load speeds.",
        },
        {
          id: "d",
          text: "Upgrade to Optical Storage (Blu-ray) so employees can boot the OS from discs for faster performance.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "A and B correctly identify SSDs as the fast, durable upgrade path to solve slow boot times and application loading in laptops.",
        incorrect: {
          c: "Incorrect — Magnetic tape is extremely slow and used for archiving, not for running an OS.",
          d: "Incorrect — Optical storage operates at much lower speeds and would make boot times worse.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "A university's IT department is migrating student records to a new File Server. They need strict granular control, ensuring that professors can edit grades, but students can only view specific syllabi. What characteristics of a File Server make this possible? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It incorporates advanced security features.",
        },
        {
          id: "b",
          text: "It allows for granular control over file access.",
        },
        {
          id: "c",
          text: "It integrates with centralized authentication systems to verify user identities.",
        },
        {
          id: "d",
          text: "It bypasses all access controls to ensure files are open to the public by default.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A, B, and C perfectly outline the advanced security mechanisms native to a File Server that permit strict, role-based granular access control.",
        incorrect: {
          d: "Incorrect — Bypassing access controls violates the principle of security and confidentiality; File Servers are designed to enforce strict controls, not bypass them.",
        },
      },
    },
  ],
};
