import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic6: Quiz = {
  id: "sysadmin-topic-6",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-6",
  title: "Topic 6 - Application Level Services",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "A newly appointed System Administrator is tasked with managing the organization's IT infrastructure. Which of the following activities align with their core responsibilities?",
      options: [
        {
          id: "a",
          text: "Installing and configuring necessary software.",
        },
        {
          id: "b",
          text: "Managing users and their respective access permissions.",
        },
        {
          id: "c",
          text: "Developing new marketing applications from scratch.",
        },
        {
          id: "d",
          text: "Monitoring system performance and maintaining network services.",
        },
        {
          id: "e",
          text: "Ensuring system security and performing data backups.",
        },
        {
          id: "f",
          text: "Manufacturing physical networking cables.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "System Administration involves managing and maintaining computer systems and servers. Core responsibilities include installing/configuring software, managing users/permissions, monitoring performance, maintaining network services, and ensuring system security/backups.",
        incorrect: {
          c: "Developing applications from scratch is a software engineering role, not a core system administration responsibility.",
          f: "Manufacturing physical cables is a hardware production process, not an IT administration task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "According to the established roles of a System Administrator, how are specific core IT components managed and interacted with?",
      options: [
        {
          id: "a",
          text: "Daemon Processes involve summoning and scheduling background tasks.",
        },
        {
          id: "b",
          text: "Application Services require the administrator to deploy and support them.",
        },
        {
          id: "c",
          text: "Web Servers involve initial setup and continuous monitoring.",
        },
        {
          id: "d",
          text: "Daemon Processes dictate the physical hardware routing of the network.",
        },
        {
          id: "e",
          text: "Application Services are solely responsible for physical document destruction.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A System Administrator's role includes summoning and scheduling Daemon Processes, deploying and supporting Application Services, and setting up and monitoring Web Servers.",
        incorrect: {
          d: "Daemon processes are background software tasks, they do not dictate physical hardware routing.",
          e: "Application services support user applications, not the physical destruction of documents.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Continuing with the responsibilities of a System Administrator, which statements correctly match the network service with its primary administrative action?",
      options: [
        {
          id: "a",
          text: "Proxy Servers are managed to secure and filter network traffic.",
        },
        {
          id: "b",
          text: "Printers require the administrator to manually write their firmware from scratch.",
        },
        {
          id: "c",
          text: "DNS Services are configured to resolve domain names.",
        },
        {
          id: "d",
          text: "Printers require the administrator to install and maintain them.",
        },
        {
          id: "e",
          text: "DNS Services physically repair broken network cables.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Proxy servers are meant to secure and filter traffic, DNS services are configured and resolved, and printers are installed and maintained by the administrator.",
        incorrect: {
          b: "Administrators install driver software but do not write the internal hardware firmware from scratch.",
          e: "DNS is a logical name resolution service, it has no physical repair capabilities.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "The IT department is restructuring its network management procedures. What main activities should the team focus on to effectively monitor and maintain the network?",
      options: [
        {
          id: "a",
          text: "Performance monitoring to ensure optimal network speeds.",
        },
        {
          id: "b",
          text: "Fault detection to identify and isolate network issues.",
        },
        {
          id: "c",
          text: "Traffic analysis to understand data flow patterns.",
        },
        {
          id: "d",
          text: "Device configuration to set up network hardware properly.",
        },
        {
          id: "e",
          text: "Security management to protect against unauthorized access.",
        },
        {
          id: "f",
          text: "Generating financial accounting reports.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "Network management is the process of monitoring, configuring, and maintaining networks. Its main activities strictly include performance monitoring, fault detection, traffic analysis, device configuration, and security management.",
        incorrect: {
          f: "Generating financial reports is an accounting function, entirely separate from technical network management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "Which protocols are specifically highlighted as being utilized in standard network management operations?",
      options: [
        {
          id: "a",
          text: "SNMP",
        },
        {
          id: "b",
          text: "ICMP",
        },
        {
          id: "c",
          text: "NetFlow",
        },
        {
          id: "d",
          text: "HDMI",
        },
        {
          id: "e",
          text: "Bluetooth",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "The protocols explicitly used for network management include SNMP, ICMP, and NetFlow.",
        incorrect: {
          d: "HDMI is a display and audio interface, not a network management protocol.",
          e: "Bluetooth is a short-range wireless technology standard, not used for enterprise network management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "When diagnosing network communications using the OSI model, which layer is responsible for the user interface and direct support to user applications?",
      options: [
        {
          id: "a",
          text: "Layer 7 (Application Layer)",
        },
        {
          id: "b",
          text: "Layer 4 (Transport Layer)",
        },
        {
          id: "c",
          text: "Layer 1 (Physical Layer)",
        },
        {
          id: "d",
          text: "Layer 3 (Network Layer)",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Layer 7, the Application Layer, handles the user interface and provides direct support to users' applications.",
        incorrect: {
          b: "The Transport Layer handles reliable data transfer.",
          c: "The Physical Layer deals with bits in a wire.",
          d: "The Network Layer handles path determination.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "An organization relies heavily on various Application-Level Services for daily operations. Which of the following are examples of these services?",
      options: [
        {
          id: "a",
          text: "Web servers operating via HTTP.",
        },
        {
          id: "b",
          text: "Email servers communicating via SMTP.",
        },
        {
          id: "c",
          text: "File servers functioning over FTP.",
        },
        {
          id: "d",
          text: "Physical network switches forwarding frames.",
        },
        {
          id: "e",
          text: "Fiber optic cables transmitting light.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Application-Level Services run at the application layer and include Web servers (HTTP), email servers (SMTP), and file servers (FTP).",
        incorrect: {
          d: "Network switches operate at Layer 2 (Data Link Layer).",
          e: "Fiber optic cables represent Layer 1 (Physical Layer).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "Management is reviewing the budget allocated for maintaining Application-Level Services. How should the IT lead justify the importance of these services to business operations?",
      options: [
        {
          id: "a",
          text: "They allow users to access websites, email, and files.",
        },
        {
          id: "b",
          text: "They support essential business communication.",
        },
        {
          id: "c",
          text: "They enable remote access and collaboration.",
        },
        {
          id: "d",
          text: "They improve workforce productivity and connectivity.",
        },
        {
          id: "e",
          text: "They physically regulate the temperature of the data center.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Application-level services are crucial because they enable website/email/file access, support business communication, facilitate remote collaboration, and ultimately improve productivity.",
        incorrect: {
          e: "Regulating temperature is the job of physical HVAC and cooling systems, not software application services.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "A company's internal file sharing system is built on the Client-Server model. How does this architecture fundamentally function?",
      options: [
        {
          id: "a",
          text: "The server acts as the provider of resources and services.",
        },
        {
          id: "b",
          text: "The client actively requests services from the server.",
        },
        {
          id: "c",
          text: "The client pushes its own processing power to the server to handle computations.",
        },
        {
          id: "d",
          text: "The server waits for the client to provide all necessary files before starting.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "In the Client-Server model, the server provides the resources and services, while the client initiates communication by requesting those services.",
        incorrect: {
          c: "Clients do not push processing power to servers; they request data or computation.",
          d: "The server holds the resources; it does not rely on the client to provide them.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "To enhance network security and traffic control, an organization plans to deploy Proxy Servers. What are the fundamental roles and capabilities of these proxies?",
      options: [
        {
          id: "a",
          text: "Acting as an intermediary for requests originating from clients.",
        },
        {
          id: "b",
          text: "Filtering network traffic based on organizational rules.",
        },
        {
          id: "c",
          text: "Caching content to speed up subsequent requests.",
        },
        {
          id: "d",
          text: "Improving overall network security.",
        },
        {
          id: "e",
          text: "Generating unique user passwords automatically.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Proxies in networking act as intermediaries. They can be used effectively to filter traffic, cache frequently accessed content, and improve security boundaries.",
        incorrect: {
          e: "Generating user passwords is an Identity Management function, not a proxy server role.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "A corporate network wants to ensure that when internal employees browse the public internet, their internal IP addresses are hidden from external websites. Which type of proxy is required and what is its main function?",
      options: [
        {
          id: "a",
          text: "Forward Proxy",
        },
        {
          id: "b",
          text: "Reverse Proxy",
        },
        {
          id: "c",
          text: "It protects the client identity.",
        },
        {
          id: "d",
          text: "It balances load across multiple database servers.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "A Forward Proxy is utilized to intercept outgoing client requests and explicitly protects the client's identity from external networks.",
        incorrect: {
          b: "A Reverse Proxy sits in front of servers, not outbound clients.",
          d: "Load balancing across servers is a function of a Reverse Proxy.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "An e-commerce business has multiple backend web servers and wants to protect their identities while balancing the incoming customer traffic. Which proxy solution should be implemented and why?",
      options: [
        {
          id: "a",
          text: "Reverse Proxy",
        },
        {
          id: "b",
          text: "Forward Proxy",
        },
        {
          id: "c",
          text: "It protects the server identity from external clients.",
        },
        {
          id: "d",
          text: "It balances the load among multiple backend web servers.",
        },
        {
          id: "e",
          text: "It completely decrypts and stores all client credit card information.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "A Reverse Proxy is deployed in front of web servers. It protects the server identity and balances incoming load across multiple instances.",
        incorrect: {
          b: "A Forward Proxy is for outbound client traffic.",
          e: "While proxies can handle SSL termination, their fundamental purpose is not to act as a permanent storage vault for credit cards.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "A school district sets up a Transparent Proxy to manage student internet access. What are the defining mechanics and common use cases of this specific proxy setup?",
      options: [
        {
          id: "a",
          text: "It intercepts traffic without requiring any configuration on the client's device.",
        },
        {
          id: "b",
          text: "It is commonly used for content filtering to block inappropriate websites.",
        },
        {
          id: "c",
          text: "It is utilized for bandwidth control to prevent network congestion.",
        },
        {
          id: "d",
          text: "It is used for monitoring internet usage across the network.",
        },
        {
          id: "e",
          text: "It requires the manual installation of a proxy application on every student laptop.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Transparent proxies intercept traffic automatically without client configuration. They are widely used for content filtering, bandwidth control, and monitoring internet usage.",
        incorrect: {
          e: "The main feature of a transparent proxy is that it operates seamlessly without requiring manual client configuration.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "While proposing a Transparent Proxy for the corporate network, the compliance team raises concerns. What valid disadvantages should be documented regarding Transparent Proxies?",
      options: [
        {
          id: "a",
          text: "Privacy concerns, as traffic is intercepted without explicit user action.",
        },
        {
          id: "b",
          text: "Possible slower internet connections due to the filtering and caching overhead.",
        },
        {
          id: "c",
          text: "They fail to intercept traffic completely, making them useless.",
        },
        {
          id: "d",
          text: "They force all users to type in a proxy IP address manually before browsing.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "The recognized disadvantages of transparent proxies are privacy concerns (due to silent interception) and possible slower connections.",
        incorrect: {
          c: "They successfully intercept traffic at the network level, they are not useless.",
          d: "They do not require users to type IP addresses; interception happens invisibly.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "In the context of network management and automated systems, how are 'Agents' defined and utilized?",
      options: [
        {
          id: "a",
          text: "Software entities that act on behalf of a user or system.",
        },
        {
          id: "b",
          text: "Programs that perform automated tasks on behalf of administrators.",
        },
        {
          id: "c",
          text: "Tools used to monitor and report system status to centralized management systems.",
        },
        {
          id: "d",
          text: "Physical hardware dongles attached to servers.",
        },
        {
          id: "e",
          text: "Human security personnel guarding the data center.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Agents are software entities/programs that perform automated tasks, act on behalf of systems, and monitor/report status to management systems.",
        incorrect: {
          d: "Agents are software, not hardware dongles.",
          e: "Agents refer to software processes, not human guards.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "The IT infrastructure team is using SNMP to monitor hundreds of routers. How do SNMP Agents specifically operate within this protocol?",
      options: [
        {
          id: "a",
          text: "They collect and report data from the network devices they reside on.",
        },
        {
          id: "b",
          text: "They utilize a Management Information Base (MIB) to structure their data.",
        },
        {
          id: "c",
          text: "They actively respond to SNMP queries originating from a manager.",
        },
        {
          id: "d",
          text: "They overwrite the routing tables to force traffic into the cloud.",
        },
        {
          id: "e",
          text: "They physically reboot the router if the temperature gets too high.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "SNMP Agents collect and report device data, structure that data using a MIB, and respond to queries sent by the SNMP manager.",
        incorrect: {
          d: "Agents monitor and report; they do not arbitrarily overwrite routing tables.",
          e: "While they might report high temperature, physical rebooting is generally an operational action rather than the core passive reporting duty of an SNMP agent.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "When a System Administrator is tasked with installing new services, what conceptual steps and responsibilities does this involve?",
      options: [
        {
          id: "a",
          text: "Choosing the appropriate services required (e.g., web, DNS, FTP).",
        },
        {
          id: "b",
          text: "Using built-in package managers to handle the installation process.",
        },
        {
          id: "c",
          text: "Resolving software dependencies to ensure the service runs properly.",
        },
        {
          id: "d",
          text: "Ensuring compatibility with the existing operating system environment.",
        },
        {
          id: "e",
          text: "Writing the entire source code for the new service in C++.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Installing new services involves choosing the right service, utilizing package managers, resolving dependencies, and ensuring environmental compatibility.",
        incorrect: {
          e: "SysAdmins install pre-built services; writing source code is a software developer's job.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "After installing a new application service, the administrator must configure it. What does the configuration process generally entail?",
      options: [
        {
          id: "a",
          text: "Editing configuration files using text editors to match system needs.",
        },
        {
          id: "b",
          text: "Setting specific listening ports for the service to operate on.",
        },
        {
          id: "c",
          text: "Establishing security rules to dictate access.",
        },
        {
          id: "d",
          text: "Adjusting logging levels to capture necessary operational data.",
        },
        {
          id: "e",
          text: "Physically replacing the server's CPU to match the software's speed.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Configuring services involves using text editors to modify config files, setting network ports, establishing security rules, and defining logging levels.",
        incorrect: {
          e: "Service configuration is a software task; replacing a CPU is a hardware upgrade.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "To maintain high availability, the IT team must monitor all application-level services continuously. What methods and tools are conceptually used for this?",
      options: [
        {
          id: "a",
          text: "Monitoring live system status and running processes.",
        },
        {
          id: "b",
          text: "Performing log analysis by reviewing system log directories.",
        },
        {
          id: "c",
          text: "Using dedicated real-time monitoring platforms like Nagios or Zabbix.",
        },
        {
          id: "d",
          text: "Unplugging the network cable to see if the service crashes.",
        },
        {
          id: "e",
          text: "Reading the hard drive disk platters with a magnifying glass.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Monitoring services involves checking live status/processes, performing log analysis, and utilizing real-time monitoring tools (like Nagios/Zabbix).",
        incorrect: {
          d: "Unplugging cables is a destructive test, not routine monitoring.",
          e: "Disk platters cannot be read by human eyes; this is physically impossible.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "During a server audit, an administrator notes several 'Daemons' running. What are the defining characteristics of daemon processes?",
      options: [
        {
          id: "a",
          text: "They are background processes that run continuously.",
        },
        {
          id: "b",
          text: "They handle periodic tasks or wait for service requests.",
        },
        {
          id: "c",
          text: "They are essential for core system operations.",
        },
        {
          id: "d",
          text: "They very often automatically start at system boot time.",
        },
        {
          id: "e",
          text: "They require a graphical user interface to remain active.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Daemons are continuous background processes essential for system operations. They handle tasks, wait for requests, and generally start at boot time.",
        incorrect: {
          e: "Daemons operate entirely in the background and do not require a graphical user interface.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "Identify the correct mappings between the following common daemon processes and their respective services.",
      options: [
        {
          id: "a",
          text: "sshd handles SSH remote access.",
        },
        {
          id: "b",
          text: "httpd handles Web services.",
        },
        {
          id: "c",
          text: "named handles DNS services.",
        },
        {
          id: "d",
          text: "cupsd handles Print services.",
        },
        {
          id: "e",
          text: "sshd handles database management.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "The standard daemon mappings are: sshd (SSH), httpd (Web), named (DNS), and cupsd (Print).",
        incorrect: {
          e: "sshd is exclusively for secure shell remote access, not database management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "Why is it crucial for a System Administrator to actively manage and oversee daemon processes?",
      options: [
        {
          id: "a",
          text: "To ensure that critical services remain continuously available.",
        },
        {
          id: "b",
          text: "To improve overall system performance.",
        },
        {
          id: "c",
          text: "To enable reliable system automation.",
        },
        {
          id: "d",
          text: "To troubleshoot failures quickly by isolating background issues.",
        },
        {
          id: "e",
          text: "To support remote access and job scheduling.",
        },
        {
          id: "f",
          text: "To increase the aesthetic appeal of the command line.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "Managing daemons ensures service availability, improves performance, enables automation, aids in quick troubleshooting, and supports remote access and scheduling.",
        incorrect: {
          f: "Daemons are background processes with no aesthetic command line output.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "Employees complain they cannot access an internal portal by typing its name, but it works if they type its IP address. What service is involved and what is its primary role?",
      options: [
        {
          id: "a",
          text: "Domain Name System (DNS).",
        },
        {
          id: "b",
          text: "It converts domain names into machine-readable IP addresses.",
        },
        {
          id: "c",
          text: "It enables users to reach websites using human-readable names.",
        },
        {
          id: "d",
          text: "The Print Spooler service.",
        },
        {
          id: "e",
          text: "It dynamically assigns IP addresses to new devices.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "The DNS service is responsible for converting human-readable domain names into IP addresses.",
        incorrect: {
          d: "The Print Spooler handles print jobs, not name resolution.",
          e: "Dynamically assigning IP addresses is the role of DHCP, not DNS.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "Outline the chronological steps of the DNS resolution process when a user successfully accesses a website.",
      options: [
        {
          id: "a",
          text: "First, the user enters the URL into their browser.",
        },
        {
          id: "b",
          text: "Second, a DNS query is sent out across the network.",
        },
        {
          id: "c",
          text: "Third, the DNS server responds with the correct IP address.",
        },
        {
          id: "d",
          text: "Fourth, the browser utilizes the IP address to connect to the destination server.",
        },
        {
          id: "e",
          text: "The browser downloads the entire website from the DNS server directly.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "The sequence is: User enters URL -> DNS query sent -> DNS server responds -> Browser connects.",
        incorrect: {
          e: "The DNS server only provides the IP address; the browser downloads the website from the actual Web server.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "Despite the move to digital operations, maintaining printers remains a key task. What are the specific responsibilities of a SysAdmin in managing corporate printers?",
      options: [
        {
          id: "a",
          text: "Installing correct printer drivers across user devices.",
        },
        {
          id: "b",
          text: "Configuring network printers for centralized access.",
        },
        {
          id: "c",
          text: "Managing print queues to prevent jams in document flow.",
        },
        {
          id: "d",
          text: "Resolving printing errors and controlling user access.",
        },
        {
          id: "e",
          text: "Monitoring printer usage to track resource consumption.",
        },
        {
          id: "f",
          text: "Designing the physical chassis of the printer hardware.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "SysAdmins manage printers by installing drivers, configuring network access, managing queues, resolving errors, controlling access, and monitoring usage.",
        incorrect: {
          f: "Designing printer chassis is an industrial engineering task, not an IT administration duty.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "The procurement department asks for advice on print technologies. What are the key characteristics of Laser printing technology?",
      options: [
        {
          id: "a",
          text: "It uses toner combined with a laser.",
        },
        {
          id: "b",
          text: "It is known for being fast and producing sharp text.",
        },
        {
          id: "c",
          text: "It is generally an expensive technology compared to basic alternatives.",
        },
        {
          id: "d",
          text: "It relies on liquid ink sprayed onto the page.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Laser printers use toner and a laser, are fast and sharp, but are considered expensive.",
        incorrect: {
          d: "Liquid ink is the mechanism for Inkjet printers, not Laser printers.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "What are the key characteristics and trade-offs of Inkjet printing technology?",
      options: [
        {
          id: "a",
          text: "It utilizes liquid ink for printing.",
        },
        {
          id: "b",
          text: "It is capable of producing good color quality.",
        },
        {
          id: "c",
          text: "A major disadvantage is that the ink is costly to replace.",
        },
        {
          id: "d",
          text: "It uses heat to burn images onto specialized receipt paper.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Inkjet technology uses liquid ink, produces good color, but suffers from high ink replacement costs.",
        incorrect: {
          d: "Burning images via heat is the characteristic of Thermal printers.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "For a warehouse shipping station, the IT team recommends Thermal printers. What defines Thermal printing technology?",
      options: [
        {
          id: "a",
          text: "It uses heat printing mechanisms.",
        },
        {
          id: "b",
          text: "It operates quietly and is cheap for producing items like receipts.",
        },
        {
          id: "c",
          text: "It has limited print quality compared to laser or inkjet.",
        },
        {
          id: "d",
          text: "It uses microscopic lasers to melt plastic toner.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Thermal printers utilize heat, are quiet and cheap for receipts, but have limited overall print quality.",
        incorrect: {
          d: "Melting plastic toner with lasers defines Laser printing.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "Case Study: Why do large organizations typically configure printers as network printers rather than keeping them as local, standalone units?",
      options: [
        {
          id: "a",
          text: "Network printers centralize printing, allowing multiple users to share a single high-capacity device.",
        },
        {
          id: "b",
          text: "They are easier to manage centrally through a dedicated print server.",
        },
        {
          id: "c",
          text: "Standalone printers are directly attached to one computer, making them harder to share and manage efficiently in a corporate environment.",
        },
        {
          id: "d",
          text: "Standalone printers generate their own independent internet connections.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Network printers are preferred because they centralize printing, allow multi-user sharing, and are easily managed via print servers, unlike standalone printers which isolate access to a single PC.",
        incorrect: {
          d: "Standalone printers do not generate their own internet connections; they rely on direct USB/local connections.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "Case Study: An office is evaluating its printing architecture. What distinguishes a Print Server connection from a Standalone Printer connection?",
      options: [
        {
          id: "a",
          text: "A print server manages and shares printers for multiple users across the network.",
        },
        {
          id: "b",
          text: "A print server centralizes the print queue and administration.",
        },
        {
          id: "c",
          text: "A standalone connection implies the printer is directly attached to a single computer.",
        },
        {
          id: "d",
          text: "A standalone printer connection acts as a global router for the entire office network.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Print servers centralize, manage, and share printers for multiple users. Standalone connections are directly tied to a single computer.",
        incorrect: {
          d: "Standalone printers do not act as network routers.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "Case Study: Helpdesk tickets regarding printing are increasing. What are the three most common printer-related problems encountered in an organization?",
      options: [
        {
          id: "a",
          text: "Print jobs getting stuck or frozen in the queue.",
        },
        {
          id: "b",
          text: "Missing or outdated printer drivers on user devices.",
        },
        {
          id: "c",
          text: "Slow printing caused by network bottlenecks or an overloaded printer.",
        },
        {
          id: "d",
          text: "Printers automatically ordering incorrect ink from the manufacturer.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "The most common issues are stuck jobs in the print queue, missing/outdated drivers, and slow printing due to high loads or bottlenecks.",
        incorrect: {
          d: "While some smart printers order ink, rogue ordering is not listed as one of the primary helpdesk problems.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "Case Study: An architecture firm has 50 employees sharing a single printer. Users frequently complain that documents take too long to print and jobs get stuck. What are the probable technical causes of this situation?",
      options: [
        {
          id: "a",
          text: "The shared printer is simply overloaded by too many concurrent users.",
        },
        {
          id: "b",
          text: "The print queue has become full and is unable to process new jobs.",
        },
        {
          id: "c",
          text: "The printer has limited memory or processing power for large architecture files.",
        },
        {
          id: "d",
          text: "There is a network bottleneck slowing down data transmission to the printer.",
        },
        {
          id: "e",
          text: "Stuck jobs are being caused by a crashed print spooler or a faulty driver.",
        },
        {
          id: "f",
          text: "The users are typing their documents too fast for the network.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "With 50 users on one printer, causes include overload, full queues, limited printer hardware memory, network bottlenecks, and spooler/driver crashes.",
        incorrect: {
          f: "Typing speed has absolutely no effect on printing speed.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "Case Study: To permanently resolve the issue of the overloaded printer shared by 50 employees, what strategic solutions should the SysAdmin implement?",
      options: [
        {
          id: "a",
          text: "Add another printer to the network to distribute the overall workload.",
        },
        {
          id: "b",
          text: "Distribute users logically across multiple available printers.",
        },
        {
          id: "c",
          text: "Actively manage the print queues to monitor and clear out stuck jobs.",
        },
        {
          id: "d",
          text: "Completely disable the print spooler service so jobs print instantly.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Adding another printer, distributing users, and actively managing queues are effective solutions to an overloaded printer.",
        incorrect: {
          d: "Disabling the print spooler prevents multiple users from printing entirely; it does not make jobs print instantly.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "Case Study: A marketing executive cannot print their presentation, but all other colleagues in the same room can print to the same network printer successfully. What are the likely causes of this isolated issue?",
      options: [
        {
          id: "a",
          text: "There is a missing or incorrect printer driver on the executive's specific device.",
        },
        {
          id: "b",
          text: "The wrong printer settings or destination are selected on the device.",
        },
        {
          id: "c",
          text: "The specific computer has a disconnected network connection.",
        },
        {
          id: "d",
          text: "There is a user access or permission problem restricting that employee.",
        },
        {
          id: "e",
          text: "The network printer's hardware is completely destroyed.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Since others can print, the printer is fine. The issue is local to the user: missing drivers, wrong settings, network disconnection, or restrictive permissions.",
        incorrect: {
          e: "If the hardware were destroyed, none of the colleagues would be able to print.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "Case Study: Following up on the executive who cannot print while others can, what systematic troubleshooting steps should the SysAdmin take?",
      options: [
        {
          id: "a",
          text: "Check if the correct printer is available and selected on the user's computer.",
        },
        {
          id: "b",
          text: "Confirm that the correct driver is installed on the device.",
        },
        {
          id: "c",
          text: "Test the user's local network connection to ensure they can reach the server.",
        },
        {
          id: "d",
          text: "Verify the user's access permissions to ensure they are allowed to print.",
        },
        {
          id: "e",
          text: "Reboot the central firewall and main database server.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Logical steps involve verifying the selected printer, confirming the driver, testing the network connection, and checking user permissions.",
        incorrect: {
          e: "Rebooting central infrastructure for a single-user local issue is extreme and disruptive.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "Case Study: A brand new enterprise multi-function printer has been delivered to the accounting department. Describe the step-by-step procedure the SysAdmin must follow to deploy it effectively.",
      options: [
        {
          id: "a",
          text: "Install the appropriate software printer drivers to enable communication.",
        },
        {
          id: "b",
          text: "Configure the device on the network, either as a direct IP printer or via a print server.",
        },
        {
          id: "c",
          text: "Make it available to users by managing access controls and print queues.",
        },
        {
          id: "d",
          text: "Test the printer by printing a test page with different user roles to verify functionality.",
        },
        {
          id: "e",
          text: "Format the hard drives of all computers in the accounting department to prepare for the new driver.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Deployment steps include installing drivers, configuring network settings, assigning user access/queues, and conducting a test print.",
        incorrect: {
          e: "Formatting hard drives destroys data and is entirely unnecessary for a printer installation.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "While Daemons and Agents both operate in the background, they serve different conceptual purposes in system administration. How can a SysAdmin distinguish between the two based on their roles?",
      options: [
        {
          id: "a",
          text: "Daemons run continuously to handle periodic tasks or wait for service requests.",
        },
        {
          id: "b",
          text: "Agents act specifically on behalf of a user or system to perform automated tasks like reporting status.",
        },
        {
          id: "c",
          text: "SNMP uses agents to actively collect and report network data.",
        },
        {
          id: "d",
          text: "SSH uses a daemon to continuously listen and wait for remote connections.",
        },
        {
          id: "e",
          text: "Agents are strictly physical hardware devices, while daemons are software.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Daemons are continuous listeners/handlers (e.g., SSH daemon waiting for connection), while Agents act on behalf of a system to perform tasks (e.g., SNMP agent reporting data).",
        incorrect: {
          e: "Both Daemons and Agents are software processes, not physical hardware.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "When a SysAdmin configures a new application service, defining security rules and ports is critical. Why are these configurations typically managed by editing configuration files?",
      options: [
        {
          id: "a",
          text: "To tailor the service exactly to the organization's unique operational and security needs.",
        },
        {
          id: "b",
          text: "To ensure the service only listens on approved and secure network ports.",
        },
        {
          id: "c",
          text: "To strictly control the level of detail recorded in system logs.",
        },
        {
          id: "d",
          text: "Because it physically rewires the motherboard to match the new port.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "SysAdmins edit config files to uniquely tailor the service, restrict listening ports for security, and define logging verbosity.",
        incorrect: {
          d: "Editing a text configuration file does not physically rewire hardware.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "Instead of relying solely on real-time dashboards, an experienced SysAdmin routinely performs log analysis. What operational insights can be gained from this practice?",
      options: [
        {
          id: "a",
          text: "Understanding historical system and service behavior over time.",
        },
        {
          id: "b",
          text: "Identifying the root cause of past service failures or unexpected crashes.",
        },
        {
          id: "c",
          text: "Detecting unauthorized access attempts or security anomalies.",
        },
        {
          id: "d",
          text: "Automatically generating new source code for failed applications.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Log analysis provides a historical record, helping to find the root causes of crashes, understand behavior trends, and detect security threats.",
        incorrect: {
          d: "Log analysis is an observational and investigative tool; it does not write new source code.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "If the internal DNS server of an organization completely crashes, what immediate operational impacts will the employees experience?",
      options: [
        {
          id: "a",
          text: "They will be unable to access internal web applications using their human-readable hostnames.",
        },
        {
          id: "b",
          text: "Email clients may fail to locate the internal mail server to send or receive messages.",
        },
        {
          id: "c",
          text: "External internet browsing may halt if the network relies on the internal DNS for query forwarding.",
        },
        {
          id: "d",
          text: "The physical network switches will immediately power down.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "A DNS crash stops the translation of names to IP addresses, breaking access to hostname-based web apps, email server resolution, and potentially external browsing.",
        incorrect: {
          d: "DNS is a software service; its failure will not cause physical switches to lose electrical power.",
        },
      },
    },
  ],
};
