import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic9: Quiz = {
  id: "sysadmin-topic-9",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-9",
  title: "Topic 9 - Network Concepts, control etc.",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "A corporation is evaluating the necessity of maintaining its network infrastructure. In a technical proposal, how should the IT team justify the importance of network-level services regarding performance, reliability, and resources?",
      options: [
        {
          id: "a",
          text: "It allows sharing of printers, files, databases, and internet connections to reduce cost.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "QoS and routing improve speed, reduce delays, and maintain stable connections.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "It strictly eliminates the need for physical hardware entirely in a local network.",
        },
        {
          id: "d",
          text: "It supports cloud computing and remote work environments.[cite: 1, 2]",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Network-level services allow sharing of printers, files, databases, and internet connections to reduce cost.[cite: 1, 2] QoS and routing improve speed, reduce delays, and maintain stable connections.[cite: 1, 2] It also supports business operations like cloud computing and remote work.[cite: 1, 2]",
        incorrect: {
          c: "Incorrect. Network services rely on physical hardware like routers and switches; they do not eliminate the need for them.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "A tech startup is launching a mobile application that relies heavily on global communication and secure transactions. What points should be included in their system design documentation regarding the importance of network services?",
      options: [
        {
          id: "a",
          text: "It supports email, messaging, video conferencing, and social media worldwide.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "It protects confidential data and prevents unauthorized access and cyberattacks.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "It automatically encrypts all end-user databases without any configuration.",
        },
        {
          id: "d",
          text: "It enables remote learning, cloud storage, virtual machines, and mobile applications.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "It ensures physical security by locking server room doors.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Network services support global communication through email, messaging, and video conferencing.[cite: 1, 2] They strengthen security by protecting confidential data and preventing cyberattacks.[cite: 1, 2] They also support cloud and mobile technologies.[cite: 1, 2]",
        incorrect: {
          c: "Incorrect. Network services do not automatically encrypt databases without configuration.",
          e: "Incorrect. Network services handle logical and data security, while physical security handles locks and doors.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "A network engineer is troubleshooting a connection failure. They need to analyze the problem starting from the physical transmission up to path determination. Which descriptions accurately map to the lower OSI layers in their diagnostic report?",
      options: [
        {
          id: "a",
          text: "The Physical layer handles bits in a wire.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "The Data Link layer is responsible for physical addressing.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "The Network layer determines the path for data.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "The Transport layer manages the user interface.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The Physical layer (Layer 1) manages bits in a wire.[cite: 1, 2] The Data Link layer (Layer 2) manages physical addressing.[cite: 1, 2] The Network layer (Layer 3) handles path determination.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. The Application layer is the user interface; the Transport layer handles reliable data transfer.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "During a software development meeting, architects are discussing how their new application will interact with the network. Which statements correctly define the upper layers of the OSI model?",
      options: [
        {
          id: "a",
          text: "The Transport layer ensures reliable data transfer.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "The Session layer is responsible for managing connections.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "The Presentation layer handles data translation.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "The Application layer acts as the user interface.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "The Session layer determines the physical path of the network.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. The Transport layer ensures reliable data transfer.[cite: 1, 2] The Session layer manages connections.[cite: 1, 2] The Presentation layer translates data.[cite: 1, 2] The Application layer is the user interface.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Path determination is handled by the Network layer, not the Session layer.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "A university is upgrading its IT infrastructure to connect all individual faculty buildings together, and also provide a dedicated link to a research campus in another city. How should the infrastructure be categorized based on network concepts?",
      options: [
        {
          id: "a",
          text: "LAN covers a small geographical area, such as an office or campus.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "WAN connects networks across cities or countries.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "LAN connects networks across countries to ensure high-speed global transfers.",
        },
        {
          id: "d",
          text: "WAN is strictly limited to connecting devices within a single server room.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. A Local Area Network (LAN) covers a small geographical area, such as an office or campus.[cite: 1, 2] A Wide Area Network (WAN) connects networks across cities or countries.[cite: 1, 2]",
        incorrect: {
          c: "Incorrect. LANs are for small geographical areas, while WANs handle cross-country connections.",
          d: "Incorrect. Connecting devices within a single server room is characteristic of a LAN, not a WAN.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "A cybersecurity analyst is tracing a malicious data transmission. They must document how data moves across the network and identify the machines involved. Which of the following principles apply to network traffic and addressing?",
      options: [
        {
          id: "a",
          text: "In packet-switched networks, data is divided into packets before transmission.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "An IP Address functions as the logical address.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "A MAC Address acts as the physical hardware address.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "An IP Address is permanently burned into the network interface card as a physical address.",
        },
        {
          id: "e",
          text: "In packet-switched networks, data is sent as one continuous unbroken stream to prevent interception.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Data is divided into packets before transmission in packet-switched networks.[cite: 1, 2] An IP Address is a logical address, while a MAC Address is a physical hardware address.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. The MAC address is the physical hardware address, not the IP address.",
          e: "Incorrect. Data is divided into packets; it is not sent as a continuous unbroken stream.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "A media company is setting up a live broadcasting server and a private chat system. The network administrator needs to assign the appropriate traffic direction types for these services. Which statements correctly define the available traffic types?",
      options: [
        {
          id: "a",
          text: "Unicast routing is a one-to-one transmission, sending data from one sender to one receiver.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Multicast routing is a one-to-many transmission, useful for streaming media and group communications.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Anycast routing sends data from one sender to the nearest of multiple receivers.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Broadcast routing is used exclusively for one-to-one secure financial transactions.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Unicast is one-to-one.[cite: 1, 2] Multicast is one-to-many, which is ideal for streaming media.[cite: 1, 2] Anycast sends data to the nearest of multiple receivers.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. One-to-one secure transmission is Unicast, not Broadcast.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "An IT team is auditing a core router's performance. To write an accurate incident report, how should they describe the IP routing and forwarding process when a packet enters the router?",
      options: [
        {
          id: "a",
          text: "Routing determines the best path for packets to travel.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "During packet creation, data is encapsulated into packets with source and destination IP addresses.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "In route determination, the router examines the destination IP address and looks up the best path in the routing table.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "For the forwarding decision, the router forwards the packet to the next hop towards the destination.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "Forwarding mechanisms are responsible for creating the data packet from raw binary.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Routing determines the best path.[cite: 1, 2] The routing process involves packet creation (encapsulating with source/destination IPs), route determination (examining destination IP and checking the routing table), and forwarding decision (sending to the next hop).[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Forwarding mechanisms send packets to the next destination router; they do not create the packets from raw binary.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "A network architect is designing a new wide-area network topology and needs to select an appropriate routing protocol. Which of the following are recognized routing protocols they can implement?",
      options: [
        {
          id: "a",
          text: "RIP (Routing Information Protocol)[cite: 1, 2]",
        },
        {
          id: "b",
          text: "OSPF (Open Shortest Path First)[cite: 1, 2]",
        },
        {
          id: "c",
          text: "EIGRP (Enhanced Interior Gateway Routing Protocol)[cite: 1, 2]",
        },
        {
          id: "d",
          text: "BGP (Border Gateway Protocol)[cite: 1, 2]",
        },
        {
          id: "e",
          text: "QoS (Quality of Service Protocol)",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct routing protocols mentioned: RIP, OSPF, EIGRP, and BGP.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. QoS is a set of technologies to manage traffic, not a routing protocol itself.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "A hospital depends on a critical VoIP communication system for emergency responses. Recently, the calls have been dropping due to network congestion. The IT department plans to implement QoS. How should they justify this implementation?",
      options: [
        {
          id: "a",
          text: "QoS is a set of technologies and techniques used in networking to manage traffic and ensure the performance of critical applications.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "It controls how data is prioritized, delivered, and managed over a network to meet specific requirements for latency, bandwidth, jitter, and packet loss.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Without QoS, congestion can cause dropped packets, poor audio/video quality, and slow application performance.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "QoS goals include reducing latency, reducing packet loss, improving bandwidth allocation, and maintaining audio/video quality.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "QoS ensures that all network traffic is treated equally without any prioritization to maintain fairness.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. QoS manages traffic and ensures performance by controlling prioritization to meet latency, bandwidth, jitter, and packet loss requirements.[cite: 1, 2] Without it, congestion causes dropped packets and poor quality.[cite: 1, 2] Its goals are to reduce latency/packet loss and improve bandwidth.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Treating all traffic equally without guarantees is the 'Best-Effort' model, which QoS aims to move away from for critical applications.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "When configuring Quality of Service (QoS) for an enterprise network that requires scalable packet prioritization and per-flow guarantees for real-time apps, which QoS models should the administrator apply?",
      options: [
        {
          id: "a",
          text: "Best-Effort provides no guarantees and treats all traffic equally, suitable for web browsing and email.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "IntServ provides per-flow guarantees using RSVP, ideal for real-time apps and VoIP.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "DiffServ provides class-based, scalable packet prioritization for Enterprise/ISP networks.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Best-Effort provides class-based prioritization specifically designed for massive ISP networks.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Best-Effort offers no guarantees.[cite: 1, 2] IntServ offers per-flow guarantees via RSVP.[cite: 1, 2] DiffServ provides scalable, class-based packet prioritization.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. Best-Effort provides no guarantees and treats all traffic equally; DiffServ provides the class-based prioritization.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "An organization is conducting a security audit of its customer database. The auditor expects the IT team to define the core principles of security applied to protect the data. Which statements accurately describe these principles?",
      options: [
        {
          id: "a",
          text: "Confidentiality ensures only authorized users can access sensitive data.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Integrity ensures that data must remain accurate and unaltered.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Availability ensures that systems and data must be available when needed.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Confidentiality ensures that systems are highly available and resistant to hardware failure.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Confidentiality limits access to authorized users.[cite: 1, 2] Integrity ensures accuracy and prevents alteration.[cite: 1, 2] Availability guarantees systems/data are accessible when needed.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. The guarantee of high availability and resistance to hardware failure falls under the principle of Availability, not Confidentiality.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "A system administrator is writing access control documentation for a new web portal. They must clearly distinguish between the processes of verifying a user and granting them permissions. How should they define these principles?",
      options: [
        {
          id: "a",
          text: "Authentication verifies the identity of users or systems.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Authorization grants permissions based on roles or identity.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Authentication grants specific read and write permissions to an established user.",
        },
        {
          id: "d",
          text: "Authorization verifies the identity of a system using multi-factor authentication.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Authentication is the process of verifying the identity of users or systems.[cite: 1, 2] Authorization is the process of granting permissions based on roles or identity.[cite: 1, 2]",
        incorrect: {
          c: "Incorrect. Granting read/write permissions is Authorization.",
          d: "Incorrect. Verifying identity using MFA is Authentication.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "A Chief Information Security Officer (CISO) is presenting a proposal for increasing the cybersecurity budget. What points should they emphasize to explain the overall importance of security in IT?",
      options: [
        {
          id: "a",
          text: "It protects data from unauthorized access, breaches, and loss.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "It ensures trust in services and systems, such as banking and healthcare.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "It prevents downtime and damage from malware, hacking, or system failures.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "It maintains compliance with legal and industry regulations like GDPR and HIPAA.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "It completely removes the need to conduct disaster recovery planning.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Security protects data, ensures trust, prevents downtime/damage, and maintains regulatory compliance.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Security measures mitigate risk but do not remove the need for disaster recovery planning, as disasters can still occur.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "An IT department is designing a new server room. To ensure full physical security of the assets, which of the following aspects must be implemented and documented?",
      options: [
        {
          id: "a",
          text: "Access Control to prevent unauthorized personnel from entering secure areas.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Surveillance to monitor and record activities to detect and deter threats.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Environmental Safety to control temperature, humidity, and airflow to protect hardware.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Asset Protection to secure critical devices from tampering or physical theft.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "Emergency Response, which includes fire detection, alarms, and power backup systems.[cite: 1, 2]",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "All options are correct. Physical security involves Access Control, Surveillance, Environmental Safety, Asset Protection, and Emergency Response.[cite: 1, 2]",
        incorrect: {},
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "A company is drafting a Security Policy to distribute to all employees. Which statements correctly define what a Security Policy is and its key aspects?",
      options: [
        {
          id: "a",
          text: "It is a formal set of rules and guidelines that define how an organization protects its information systems, data, and physical assets from threats.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "It outlines acceptable use, security responsibilities, and procedures for preventing, detecting, and responding to security incidents.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Its key aspects include protecting systems, ensuring compliance, clarifying usage, aiding response, and building awareness.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "It strictly dictates the programming languages developers must use when building network applications.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. A Security Policy is a formal set of rules for asset protection, outlines acceptable use/procedures, and focuses on compliance, response, and awareness.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. A Security Policy focuses on protecting assets and outlining acceptable use, not dictating software development programming languages.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "A helpdesk technician receives a report that an application is freezing. They begin the troubleshooting methodology with 'Identifying the Problem'. What specific actions belong to this phase?",
      options: [
        {
          id: "a",
          text: "Gather Information by asking the user what happened, when, and what symptoms they noticed.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Duplicate the Problem by trying to reproduce the issue to understand it better.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Determine What Has Changed, such as new software, configuration changes, or hardware upgrades.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Check the Obvious by ensuring power, cables, and basic settings are correct.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "Apply the fix carefully and verify functionality.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Identifying the problem involves gathering information, duplicating the problem, determining changes, and checking obvious issues like cables.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Applying the fix and verifying functionality belongs to 'Implementing the Solution', not 'Identifying the Problem'.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "After gathering basic information about a network outage, a system administrator moves to 'Establishing a Theory' in the troubleshooting methodology. What analytical steps should they perform?",
      options: [
        {
          id: "a",
          text: "Gather Information through observation and questioning the user about symptoms, actions taken, and recent changes.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Analyze Symptoms by matching them with likely causes and identifying trends through pattern recognition.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Utilize Research and Resources by checking knowledge bases, vendor sites, and previous cases.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Identify Possible Causes by listing hypotheses and brainstorming potential root causes, including common issues.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "Decide exactly how to fix the issue, such as whether to update or replace the hardware.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Establishing a theory involves gathering info (observation/questioning), analyzing symptoms, using research/resources, and identifying possible causes via hypotheses.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Deciding exactly how to fix the issue happens in the next step: 'Planning an Action'.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "An IT team suspects a faulty switch is causing intermittent drops. They proceed to the 'Planning an Action' phase of troubleshooting. What must they do before physically altering the network?",
      options: [
        {
          id: "a",
          text: "Create the Resolution Plan by deciding how to fix the issue, such as updating or replacing the switch.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Identify Potential Effects, including system impact, user disruption, data risk, and dependencies.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Prepare and Communicate by backing up data, scheduling appropriately, and informing users.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Test the system to confirm the issue is resolved and get user approval.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Planning an action requires creating a resolution plan, identifying potential effects, and preparing/communicating.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. Testing the system and getting approval occurs during 'Implementing the Solution' and 'Preventive Measures'.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "A technician is actively replacing a corrupted hard drive in a server. According to the 'Implementing the Solution' phase of troubleshooting, what steps are required during and immediately after this action?",
      options: [
        {
          id: "a",
          text: "Implement or Escalate: Apply the fix carefully or escalate if the issue is beyond their level.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Verify Functionality: Test the system to confirm the issue is resolved.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Check dependencies to ensure related systems work, and get user confirmation.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Educate users on best practices to prevent repeat hard drive corruptions.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Implementing the solution involves applying the fix/escalating, verifying functionality by testing, checking dependencies, and getting user confirmation.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. Educating users is part of the final 'Preventive Measures' step.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "A malware infection was successfully eradicated from a company's network. To complete the troubleshooting methodology, the security team must execute 'Preventive Measures'. What actions should they take?",
      options: [
        {
          id: "a",
          text: "Confirm all systems and services are fully operational, test and get user approval.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Implement Preventive Actions such as applying updates or patches.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Strengthen security settings and improve monitoring to detect problems early.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Educate users on best practices to prevent repeat issues.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "Brainstorm potential root causes using the gathered logs from the infection.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Preventive measures involve confirming full functionality, applying updates/patches, strengthening security/monitoring, and educating users.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Brainstorming root causes belongs to the earlier 'Establishing a Theory' step.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "A severe flood destroys a regional data center. The IT leadership activates Disaster Recovery (DR). What characterizes DR and what specific actions does it entail?",
      options: [
        {
          id: "a",
          text: "DR refers to the strategies and processes an organization uses to restore IT operations and data after a disruption.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Data Restoration is performed to recover lost or damaged data from full, incremental, or cloud-based backups.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Prioritization requires restoring critical systems first, such as email and databases.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "The recovery must follow RTO (time to recover) and RPO (acceptable data loss) metrics.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "DR is primarily a proactive strategy focused on maintaining overall business survival, such as alternative staff working methods.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. DR involves strategies to restore IT operations, data restoration from backups, prioritizing critical systems, and adhering to RTO/RPO.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Maintaining overall business survival and alternative working methods describes Business Continuity Planning (BCP), whereas DR is a reactive, technical recovery process.[cite: 1]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "In a case study involving a university network, students experienced poor video call quality and delayed uploads during peak hours. What were the identified causes of this poor network performance?",
      options: [
        {
          id: "a",
          text: "Network congestion occurred during peak hours because many students and lecturers used video conferencing, cloud storage, and online examinations simultaneously.[cite: 1]",
        },
        {
          id: "b",
          text: "There was no traffic prioritization, meaning all network traffic was treated equally without QoS.[cite: 1]",
        },
        {
          id: "c",
          text: "The university's physical routers were tampered with by unauthorized personnel.",
        },
        {
          id: "d",
          text: "The core databases were encrypted by a ransomware attack.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. The university case study identified network congestion during peak hours and a lack of traffic prioritization (no QoS) as the primary causes of poor performance.[cite: 1]",
        incorrect: {
          c: "Incorrect. Physical tampering was not the cause in the university network case study.",
          d: "Incorrect. A ransomware attack was the subject of the financial company case study, not the university network performance issue.[cite: 1]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "To resolve poor video conferencing quality at a university, the network administrator proposes implementing Quality of Service (QoS). How will QoS specifically improve the performance of these applications?",
      options: [
        {
          id: "a",
          text: "QoS actively controls how data is prioritized to meet strict requirements for latency, bandwidth, jitter, and packet loss.[cite: 1]",
        },
        {
          id: "b",
          text: "By prioritizing traffic, QoS reduces latency, minimizes dropped packets, and maintains high audio and video quality during classes.[cite: 1]",
        },
        {
          id: "c",
          text: "It helps provide better bandwidth allocation so that uploads, downloads, and cloud access are more stable during peak hours.[cite: 1]",
        },
        {
          id: "d",
          text: "It automatically bypasses the ISP to create a direct physical link between the lecturer and students.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. QoS improves performance by prioritizing data to meet latency/bandwidth requirements, minimizing dropped packets for high audio/video quality, and providing better bandwidth allocation for stable cloud access.[cite: 1]",
        incorrect: {
          d: "Incorrect. QoS manages traffic logically within the network; it does not create new physical links or bypass the ISP.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "When assessing the infrastructure of a large university campus, how should the IT team differentiate between their LAN and WAN architectures?",
      options: [
        {
          id: "a",
          text: "The LAN covers a small geographical area, such as the university campus where local devices connect to each other.[cite: 1]",
        },
        {
          id: "b",
          text: "The WAN connects across larger areas and allows the campus to connect to the Internet and external cloud services.[cite: 1]",
        },
        {
          id: "c",
          text: "The LAN is responsible for routing all external Internet traffic securely.",
        },
        {
          id: "d",
          text: "The WAN strictly handles connections between devices inside a single computer lab.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. In the university context, the LAN covers the local campus devices, while the WAN connects the campus to the Internet and external cloud services.[cite: 1]",
        incorrect: {
          c: "Incorrect. Routing external Internet traffic is a function of the WAN connection, not purely the LAN.",
          d: "Incorrect. Connections inside a single computer lab are handled by the LAN.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "A university network requires an efficient routing protocol to manage its complex, large-scale campus topology. Which protocol is recommended and why?",
      options: [
        {
          id: "a",
          text: "OSPF (Open Shortest Path First) is highly suitable because it efficiently determines route paths and manages complex network topologies.[cite: 1]",
        },
        {
          id: "b",
          text: "RIP (Routing Information Protocol) is recommended because it is the most advanced protocol for streaming live video to students.",
        },
        {
          id: "c",
          text: "SMTP (Simple Mail Transfer Protocol) is suitable for routing packets across large campus infrastructures.",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. OSPF is recommended for a large university network because it efficiently determines route paths and manages complex topologies.[cite: 1]",
        incorrect: {
          b: "Incorrect. RIP is generally an older, simpler protocol, and OSPF is preferred for large, complex campus topologies.[cite: 1]",
          c: "Incorrect. SMTP is an application-layer protocol for email, not a network routing protocol.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "If a lecturer is broadcasting a live video stream to multiple students simultaneously across the campus network, what type of network traffic is most appropriate and why?",
      options: [
        {
          id: "a",
          text: "Multicast routing is most suitable because it is a one-to-many transmission that sends data from a single sender to multiple receivers.[cite: 1]",
        },
        {
          id: "b",
          text: "This fits live lectures because the same video conferencing content may be delivered to many participants efficiently.[cite: 1]",
        },
        {
          id: "c",
          text: "Unicast routing is most suitable because it guarantees that every single student receives a completely separate, dedicated video stream to prevent packet loss.",
        },
        {
          id: "d",
          text: "Anycast routing is most suitable because it sends the video to the nearest student, who then forwards it to others.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Multicast is a one-to-many transmission ideal for delivering the same video content to many participants efficiently.[cite: 1]",
        incorrect: {
          c: "Incorrect. Sending a separate stream to every student (Unicast) for the same live video consumes excessive bandwidth and is inefficient.[cite: 1]",
          d: "Incorrect. Anycast sends to the nearest receiver, which does not accomplish sending a stream to multiple concurrent students.[cite: 1]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "A financial company suffered a ransomware attack that encrypted customer databases and disabled access to internal systems. Based on the CIA triad, which security principles were directly affected?",
      options: [
        {
          id: "a",
          text: "Confidentiality was affected because the attack may expose or allow unauthorized access to sensitive company information.[cite: 1]",
        },
        {
          id: "b",
          text: "Integrity was affected because the databases were encrypted and could no longer be trusted as accurate or usable until restored.[cite: 1]",
        },
        {
          id: "c",
          text: "Availability was affected because internal systems were disabled, causing files and emails to become unavailable to employees.[cite: 1]",
        },
        {
          id: "d",
          text: "Authorization was affected because the ransomware automatically granted admin rights to all local users.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The ransomware attack compromised Confidentiality (potential exposure of data), Integrity (data encrypted/altered), and Availability (systems disabled).[cite: 1]",
        incorrect: {
          d: "Incorrect. The case study notes the attack affected the CIA triad; it did not automatically grant admin rights to all local users.[cite: 1]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "During the post-incident review of a ransomware attack, the IT team found that weak passwords contributed to the breach. How do robust authentication and authorization mechanisms prevent such unauthorized access?",
      options: [
        {
          id: "a",
          text: "Authentication verifies the identity of users, ensuring only legitimate employees can access company systems.[cite: 1]",
        },
        {
          id: "b",
          text: "Strong passwords and multi-factor authentication can reduce the risk of attackers gaining access through weak credentials.[cite: 1]",
        },
        {
          id: "c",
          text: "Authorization controls what authenticated users are allowed to access, which limits damage if one account is compromised.[cite: 1]",
        },
        {
          id: "d",
          text: "Authentication automatically restores encrypted data if an unauthorized user attempts to alter it.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Authentication verifies identity, strong credentials/MFA reduce risk, and authorization limits access and potential damage.[cite: 1]",
        incorrect: {
          d: "Incorrect. Authentication verifies identity; it does not restore encrypted data.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "When a company first discovers disabled internal systems and encrypted files, the IT team must apply the troubleshooting methodology. What are the correct actions for the 'Identifying the Problem' and 'Establishing a Theory' steps?",
      options: [
        {
          id: "a",
          text: "To identify the problem, the team should gather information about which systems are affected, check error messages, logs, and user reports.[cite: 1]",
        },
        {
          id: "b",
          text: "To establish a theory, the team analyzes symptoms to identify likely causes such as ransomware infection, weak passwords, or unpatched systems.[cite: 1]",
        },
        {
          id: "c",
          text: "To establish a theory, they should check logs, previous incidents, and security alerts.[cite: 1]",
        },
        {
          id: "d",
          text: "To identify the problem, the team should immediately delete all user accounts to prevent further spread.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Identifying the problem involves gathering info from logs and user reports. Establishing a theory involves analyzing those symptoms to identify causes and checking security alerts/logs.[cite: 1]",
        incorrect: {
          d: "Incorrect. Deleting all accounts is a drastic action that belongs (if appropriate) to 'Implementing the Solution', not 'Identifying the Problem'.[cite: 1]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "After establishing that a ransomware infection caused a system outage, the IT team must plan and implement their recovery. Which actions correctly follow the 'Planning an Action' and 'Implementing the Solution' phases?",
      options: [
        {
          id: "a",
          text: "Planning involves creating a recovery plan, isolating infected devices, and backing up remaining unaffected data.[cite: 1]",
        },
        {
          id: "b",
          text: "Planning includes identifying clean backups, deciding which systems to restore first, and informing employees about downtime.[cite: 1]",
        },
        {
          id: "c",
          text: "Implementing the solution involves carrying out the resolution plan carefully.[cite: 1]",
        },
        {
          id: "d",
          text: "Implementing the solution requires testing the systems to confirm the ransomware is removed, and getting user confirmation.[cite: 1]",
        },
        {
          id: "e",
          text: "Implementing the solution means paying the ransomware attackers immediately to restore service faster.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Planning involves creating a recovery plan, isolating devices, finding clean backups, and communicating. Implementing involves carrying out the plan, testing for removal, and getting confirmation.[cite: 1]",
        incorrect: {
          e: "Incorrect. Paying attackers is not part of the standard IT troubleshooting or disaster recovery process described.[cite: 1]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "Following a cyberattack, an organization wants to ensure long-term security. According to the final step of the troubleshooting methodology, what 'Preventive Measures' must the IT team apply?",
      options: [
        {
          id: "a",
          text: "Apply patches and strengthen security policies like enforcing strong passwords.[cite: 1]",
        },
        {
          id: "b",
          text: "Enable multi-factor authentication to secure access.[cite: 1]",
        },
        {
          id: "c",
          text: "Educate users on best practices to prevent a repeat cyberattack.[cite: 1]",
        },
        {
          id: "d",
          text: "Avoid updating systems further so that stability is maintained indefinitely.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Preventive measures include applying patches, enforcing strong passwords, enabling MFA, and educating users.[cite: 1]",
        incorrect: {
          d: "Incorrect. Applying updates and patches is a core preventive action; avoiding them leaves systems vulnerable to known exploits.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "Management reviews the recovery process after a ransomware attack and asks for a summary of Disaster Recovery (DR). How should the IT team explain the role of DR in restoring the company's operations?",
      options: [
        {
          id: "a",
          text: "It provides the critical strategies and processes required to restore IT operations and recover data after a major disruption.[cite: 1]",
        },
        {
          id: "b",
          text: "It facilitates data restoration by recovering the damaged or encrypted customer data from backups.[cite: 1]",
        },
        {
          id: "c",
          text: "It helps prioritize recovery efforts by restoring critical systems first.[cite: 1]",
        },
        {
          id: "d",
          text: "It gradually returns user access alongside necessary security checks.[cite: 1]",
        },
        {
          id: "e",
          text: "It primarily outlines how human resources will handle payroll manually during the downtime.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. DR provides strategies to restore operations, facilitates data restoration from backups, prioritizes critical systems, and handles secure access restoration.[cite: 1]",
        incorrect: {
          e: "Incorrect. Manual payroll and non-IT business operations fall under Business Continuity Planning (BCP), not DR.[cite: 1]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "A junior network administrator is confused about the difference between routing and forwarding inside a network router. How should a senior engineer differentiate the two concepts?",
      options: [
        {
          id: "a",
          text: "Routing determines the best path for packets to travel.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Forwarding mechanisms send packets to the next destination router.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Routing physically alters the MAC address to match the destination.",
        },
        {
          id: "d",
          text: "Forwarding calculates the shortest path using algorithms before routing sends the packet.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Routing determines the best path, while forwarding actually sends the packet to the next router.[cite: 1, 2]",
        incorrect: {
          c: "Incorrect. Routing evaluates IP addresses for path determination; it does not physically alter the destination MAC address to perform routing.[cite: 1, 2]",
          d: "Incorrect. Routing calculates the path (e.g., via OSPF), and forwarding executes the sending action.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "When an IT administrator configures physical security for a high-risk server room, what environmental safety measures should they actively monitor to prevent hardware damage?",
      options: [
        {
          id: "a",
          text: "Control the temperature to protect hardware.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Monitor and control humidity levels.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Manage airflow around the servers and critical devices.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Monitor and record personnel access using biometric scanners.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Environmental Safety strictly involves controlling temperature, humidity, and airflow.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. Biometric scanners and recording personnel access fall under 'Access Control' and 'Surveillance', not Environmental Safety.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "Before implementing a patch to fix a critical database error, a system administrator is identifying 'Potential Effects' as part of the troubleshooting plan. What specific categories of effects must they consider?",
      options: [
        {
          id: "a",
          text: "System impact, evaluating potential downtime or performance issues.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "User disruption, analyzing any access or functionalities changes.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Data risk, assessing the possibility of loss or corruption.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Dependencies, understanding the effect on related systems.[cite: 1, 2]",
        },
        {
          id: "e",
          text: "Predicting the financial stock market impact of the patch.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. When planning an action, potential effects to identify include system impact, user disruption, data risk, and dependencies.[cite: 1, 2]",
        incorrect: {
          e: "Incorrect. Stock market impact is outside the scope of technical troubleshooting methodology.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "A new hire is required to read the company's Security Policy. From an administrative perspective, why is this document necessary for maintaining network and physical security?",
      options: [
        {
          id: "a",
          text: "It defines how an organization protects its information systems, data, and physical assets from threats.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "It outlines acceptable use, security responsibilities, and procedures for preventing, detecting, and responding to security incidents.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "It aids response to security incidents and builds security awareness among employees.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "It guarantees that the company will not be liable for any data breaches.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. A Security Policy defines asset protection, outlines acceptable use/responsibilities, aids incident response, and builds awareness.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. A policy helps prevent breaches and ensures compliance, but it cannot legally guarantee complete immunity from liability.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "When a disaster recovery protocol is initiated after a power failure, how should the system administrators handle the restoration of access and systems?",
      options: [
        {
          id: "a",
          text: "Restore critical systems first, such as email and databases.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Follow RTO (time to recover) and RPO (acceptable data loss) metrics.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Gradually restore user access with security checks.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Restore all low-priority systems first to test if the network is stable before touching databases.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Prioritization & Access Restoration in DR requires restoring critical systems first, adhering to RTO/RPO, and gradually restoring access with security checks.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. Critical systems like email and databases must be restored first, not last.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "During the 'Verify Functionality' stage of troubleshooting an isolated network segment, what specific actions must the technician document to close the ticket properly?",
      options: [
        {
          id: "a",
          text: "Test the system to confirm the issue is resolved.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Check dependencies to ensure related systems work normally.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Get user confirmation that they can operate normally.[cite: 1, 2]",
        },
        {
          id: "d",
          text: "Inform users about the scheduled downtime for the fix.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Verifying functionality requires testing the system, checking dependencies, and getting user confirmation.[cite: 1, 2]",
        incorrect: {
          d: "Incorrect. Informing users about scheduled downtime belongs to the 'Prepare and Communicate' phase within 'Planning an Action'.[cite: 1, 2]",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "An organization is migrating its data center. A network architect is analyzing traffic direction types. If they are setting up a distributed Content Delivery Network (CDN) service that directs a user's request to the closest server geographically, which routing type should they use and why?",
      options: [
        {
          id: "a",
          text: "Anycast routing, because it sends data from one sender to the nearest of multiple receivers.[cite: 1, 2]",
        },
        {
          id: "b",
          text: "Unicast routing, because it sends data from one sender to one specific distant receiver.[cite: 1, 2]",
        },
        {
          id: "c",
          text: "Multicast routing, because it broadcasts the user request to all servers globally at the same time.",
        },
      ],
      correctOptionIds: ["a"],
      explanation: {
        correct:
          "Option A is correct. Anycast routing sends data from one sender to the nearest of multiple receivers, which is exactly how CDNs route requests to the closest geographic server.[cite: 1, 2]",
        incorrect: {
          b: "Incorrect. While Unicast is one-to-one, it does not inherently select the 'nearest' of multiple identical servers.[cite: 1, 2]",
          c: "Incorrect. Multicast is one-to-many, which would send the request to multiple servers rather than just the closest one.[cite: 1, 2]",
        },
      },
    },
  ],
};
