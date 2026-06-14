import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic2Extra: Quiz = {
  id: "sysadmin-topic-2-extra",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-2-extra",
  title: "Topic 2 - Network Topologies",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Which of the following statements accurately describe the operational mechanics and structure of a Star topology? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Every node is connected to every other node in the network.",
        },
        {
          id: "b",
          text: "All end-user devices connect directly to a central network device, such as a switch or hub.",
        },
        {
          id: "c",
          text: "Data must pass through the central device before reaching its intended destination.",
        },
        {
          id: "d",
          text: "It requires physical terminators at the end of each cable drop.",
        },
        {
          id: "e",
          text: "Data travels sequentially in a unidirectional loop.",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "In a Star topology, all nodes have a point-to-point connection to a central device (hub/switch), which manages and directs all traffic.",
        incorrect: {
          a: "Incorrect — This describes a Full Mesh topology.",
          d: "Incorrect — Terminators are required in a Bus topology, not a Star topology.",
          e: "Incorrect — Sequential unidirectional data flow is a characteristic of a Ring topology.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "What are the primary advantages and disadvantages of implementing a Star topology? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Advantage: It is highly scalable and easy to add or remove devices without disrupting the network.",
        },
        {
          id: "b",
          text: "Advantage: It provides the highest level of fault tolerance compared to all other topologies.",
        },
        {
          id: "c",
          text: "Advantage: A failure in a single cable only affects the specific node connected to it.",
        },
        {
          id: "d",
          text: "Disadvantage: The central device represents a single point of failure for the entire network.",
        },
        {
          id: "e",
          text: "Disadvantage: It requires less cabling than a Bus topology, making it cheaper.",
        },
        {
          id: "f",
          text: "Disadvantage: Adding new nodes requires temporarily breaking the network loop.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Star networks are easy to scale, isolate cable faults to individual nodes, but suffer from a single point of failure at the central switch/hub.",
        incorrect: {
          b: "Incorrect — Mesh topology provides the highest fault tolerance, not Star.",
          e: "Incorrect — Star actually requires MORE cabling than a Bus topology because every node needs a dedicated line to the center.",
          f: "Incorrect — Breaking a loop to add a node is a disadvantage of a Ring topology.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Which of the following elements and operational behaviors define a Bus network topology? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "All devices share a single continuous backbone cable.",
        },
        {
          id: "b",
          text: "Terminators are strictly required at both ends of the main cable to absorb signals and prevent reflection.",
        },
        {
          id: "c",
          text: "A central intelligent switch routes data exclusively to the correct MAC address.",
        },
        {
          id: "d",
          text: "Data transmitted by one node is broadcasted and visible to all other nodes on the backbone.",
        },
        {
          id: "e",
          text: "It utilizes a token-passing protocol to manage who can transmit.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "A Bus topology uses a single shared backbone, broadcasts data to all nodes, and requires terminators to prevent electronic signal bounce.",
        incorrect: {
          c: "Incorrect — Bus networks do not use central switches; nodes tap directly into the shared backbone.",
          e: "Incorrect — Token passing is the defining access method for a Ring topology, not Bus.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "What are the common limitations and disadvantages associated with a Bus topology? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A physical cut in the main backbone cable will bring down the entire network.",
        },
        {
          id: "b",
          text: "It requires exponentially more cabling than a Star topology.",
        },
        {
          id: "c",
          text: "Network performance degrades significantly as more devices are added due to data collisions.",
        },
        {
          id: "d",
          text: "It is extremely difficult to configure the central routing tables.",
        },
        {
          id: "e",
          text: "If a single end-user computer powers down, the rest of the network stops functioning.",
        },
        {
          id: "f",
          text: "Troubleshooting physical faults is difficult because the entire network goes down simultaneously.",
        },
      ],
      correctOptionIds: ["a", "c", "f"],
      explanation: {
        correct:
          "Bus networks are highly vulnerable to backbone cuts, suffer from collisions as traffic increases, and are notoriously difficult to troubleshoot when the shared medium fails.",
        incorrect: {
          b: "Incorrect — Bus uses the LEAST amount of cabling.",
          d: "Incorrect — There are no central routing tables in a basic Bus network.",
          e: "Incorrect — If an end-user computer fails, the backbone remains intact and the rest of the network functions.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "How is data transmission typically managed in a Ring network topology? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Data is sent sequentially from one node to the next in a closed loop.",
        },
        {
          id: "b",
          text: "Data is broadcast simultaneously to all nodes to ensure delivery.",
        },
        {
          id: "c",
          text: "A 'token' is continuously passed around the network, and a node can only transmit when it holds the token.",
        },
        {
          id: "d",
          text: "The central hub determines the shortest path for the data packet.",
        },
        {
          id: "e",
          text: "Nodes compete for bandwidth, resulting in frequent data collisions.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Ring networks connect nodes in a closed loop where data travels sequentially, usually utilizing a token-passing system to govern transmission rights.",
        incorrect: {
          b: "Incorrect — Simultaneous broadcasting happens in Bus or Hub-based Star networks.",
          d: "Incorrect — There is no central hub in a Ring topology.",
          e: "Incorrect — Token passing specifically prevents data collisions, which is one of the Ring's main advantages.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "Which of the following are recognized traits (both pros and cons) of a Ring topology? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Advantage: Token passing eliminates data packet collisions, even under heavy network load.",
        },
        {
          id: "b",
          text: "Advantage: It is the easiest topology to scale for thousands of end-user devices.",
        },
        {
          id: "c",
          text: "Disadvantage: A single severed cable between any two adjacent nodes breaks the entire ring, halting the network.",
        },
        {
          id: "d",
          text: "Disadvantage: Adding or removing a device physically disrupts the network temporarily.",
        },
        {
          id: "e",
          text: "Disadvantage: Data transmission speed is limited by the central switch's processing power.",
        },
        {
          id: "f",
          text: "Advantage: Data travels bidirectionally by default in a standard Ring, ensuring high fault tolerance.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Ring topologies efficiently handle heavy loads without collisions, but suffer from extreme vulnerability to a single cable cut and disruption during hardware changes.",
        incorrect: {
          b: "Incorrect — Star and Mesh are easier to scale; large Ring networks introduce high latency.",
          e: "Incorrect — There is no central switch in a Ring.",
          f: "Incorrect — Standard rings are unidirectional. Bidirectional capability requires a Dual-Ring (like FDDI).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "What defines the structure and operation of a Mesh network topology? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "In a Full Mesh, every single node has a direct physical or logical connection to every other node.",
        },
        {
          id: "b",
          text: "In a Partial Mesh, some nodes are fully interconnected, while others connect only to one or two primary nodes.",
        },
        {
          id: "c",
          text: "It relies entirely on a central routing core to distribute data to edge nodes.",
        },
        {
          id: "d",
          text: "Data can be dynamically routed through multiple different paths to avoid failed links or congestion.",
        },
        {
          id: "e",
          text: "It utilizes a single continuous bus cable that loops back on itself.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Mesh topologies feature high interconnectivity (Full or Partial) allowing data to be dynamically routed around failures or congestion.",
        incorrect: {
          c: "Incorrect — Mesh is decentralized; nodes route data among themselves without relying on a single central core.",
          e: "Incorrect — This incorrectly describes a mix of Bus and Ring concepts, not a Mesh.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "Which of the following are the distinct advantages and disadvantages of a Mesh topology? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Advantage: It provides the highest level of redundancy and fault tolerance of any topology.",
        },
        {
          id: "b",
          text: "Advantage: Multiple data paths prevent network bottlenecks during heavy traffic.",
        },
        {
          id: "c",
          text: "Disadvantage: A failure of one node will bring down the entire network.",
        },
        {
          id: "d",
          text: "Disadvantage: The cost of implementation is extremely high due to the sheer volume of cabling and ports required.",
        },
        {
          id: "e",
          text: "Disadvantage: It is highly complex to configure, maintain, and scale.",
        },
        {
          id: "f",
          text: "Advantage: It requires the least amount of physical cabling to cover a large area.",
        },
        {
          id: "g",
          text: "Disadvantage: It requires terminators to prevent signal reflection.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Mesh networks excel in fault tolerance and load balancing but are notoriously expensive and complex to build and maintain.",
        incorrect: {
          c: "Incorrect — Because of redundancy, a single node failure has almost no impact on the rest of the network.",
          f: "Incorrect — It requires the MOST physical cabling.",
          g: "Incorrect — Terminators are for Bus topologies.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "When comparing network topologies, which scenarios represent a 'Single Point of Failure' that would cause a complete network outage? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A physical cut in the shared backbone cable of a Bus topology.",
        },
        {
          id: "b",
          text: "The hardware failure of the central switch in a Star topology.",
        },
        {
          id: "c",
          text: "A severed connection between any two adjacent nodes in a standard unidirectional Ring topology.",
        },
        {
          id: "d",
          text: "The failure of a single edge router in a Full Mesh topology.",
        },
        {
          id: "e",
          text: "The failure of an end-user's network interface card in a Star topology.",
        },
        {
          id: "f",
          text: "The removal of a terminator from a Full Mesh network.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Bus (backbone cut), Star (central switch failure), and standard Ring (any cable cut) all possess catastrophic single points of failure.",
        incorrect: {
          d: "Incorrect — A Full Mesh easily routes around a failed edge router.",
          e: "Incorrect — If one user's card fails in a Star, only that user is disconnected.",
          f: "Incorrect — Terminators are not used in Mesh networks.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "Match the topology to its most appropriate or common real-world use case. Which of the following statements are TRUE? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Star topologies are the standard for modern home and corporate LANs due to their ease of management.",
        },
        {
          id: "b",
          text: "Full Mesh topologies are frequently used to connect standard desktop computers in a small office to save money.",
        },
        {
          id: "c",
          text: "Partial Mesh topologies are commonly used for critical infrastructure, such as routing between major Internet Service Providers.",
        },
        {
          id: "d",
          text: "Bus topologies are widely used today for high-speed fiber-optic enterprise networks.",
        },
        {
          id: "e",
          text: "Ring topologies are often utilized in specialized industrial control networks or legacy Fiber Distributed Data Interface (FDDI) systems.",
        },
      ],
      correctOptionIds: ["a", "c", "e"],
      explanation: {
        correct:
          "Star is standard for LANs, Partial Mesh is used for ISP backbones for redundancy, and Ring is used in specialized/legacy systems like FDDI.",
        incorrect: {
          b: "Incorrect — Full Mesh is too expensive and complex for a small office of desktops.",
          d: "Incorrect — Bus is largely obsolete for high-speed enterprise networks due to collision and scalability issues.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "If a network engineer needs to add 50 new workstations to an existing network, how does the topology choice impact the expansion process? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "In a Star topology, expansion is as simple as running new cables from the workstations to an available port on the central switch.",
        },
        {
          id: "b",
          text: "In a Full Mesh topology, adding 50 nodes would require running hundreds of new cables to ensure every new node connects to every existing node.",
        },
        {
          id: "c",
          text: "In a Ring topology, the network would need to be physically broken 50 times to insert the new nodes, causing temporary outages.",
        },
        {
          id: "d",
          text: "In a Bus topology, adding 50 nodes to the backbone will improve overall data transmission speeds.",
        },
        {
          id: "e",
          text: "In a Star topology, the expansion is entirely impossible without replacing the central hub with a Ring topology.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Star easily accommodates new nodes via switch ports, Mesh requires exponential cabling, and Ring requires breaking the loop to insert nodes.",
        incorrect: {
          d: "Incorrect — Adding nodes to a Bus topology increases collisions and degrades network speed.",
          e: "Incorrect — Star topologies can be expanded simply by adding more switches or using a switch with higher port density.",
        },
      },
    },
  ],
};
