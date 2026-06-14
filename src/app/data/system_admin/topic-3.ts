import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic2: Quiz = {
  id: "sysadmin-topic-3",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-3",
  title: "Topic 3 - Host Management Physical of Server Room",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Which of the following are the primary features of a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Dedicated space for servers, networking devices, and power equipment.",
        },
        {
          id: "b",
          text: "Open-air environment to utilize natural wind cooling.",
        },
        {
          id: "c",
          text: "Controlled environment with proper cooling, power supply, and security.",
        },
        {
          id: "d",
          text: "Decentralized management of IT resources spread across the office.",
        },
        {
          id: "e",
          text: "Centralized management of IT resources for efficiency and reliability.",
        },
      ],
      correctOptionIds: ["a", "c", "e"],
      explanation: {
        correct:
          "Options A, C, and E are correct. A server room features a dedicated space, a controlled environment for power and cooling, and centralized management for efficiency.",
        incorrect: {
          b: "Incorrect — Server rooms require a highly controlled, enclosed environment, not open-air natural cooling.",
          d: "Incorrect — Server rooms provide centralized, not decentralized, management of IT resources.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "What is the importance of having a dedicated server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Provides a secure and stable environment for critical data storage.",
        },
        {
          id: "b",
          text: "Eliminates the need for any network communication within the business.",
        },
        {
          id: "c",
          text: "Ensures continuous operation with backup power and cooling systems.",
        },
        {
          id: "d",
          text: "Supports network communication and business operations.",
        },
        {
          id: "e",
          text: "Replaces the need for any software applications in the organization.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. A server room is important because it provides a secure environment, ensures continuous operations via backup systems, and supports business communications.",
        incorrect: {
          b: "Incorrect — A server room actually supports network communication, rather than eliminating the need for it.",
          e: "Incorrect — A server room houses the hardware that runs software; it does not replace the need for software.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Which of the following characteristics accurately describe a small office Server Room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Contains 100s of racks.",
        },
        {
          id: "b",
          text: "Typically contains 1-5 racks.",
        },
        {
          id: "c",
          text: "Uses a single ISP.",
        },
        {
          id: "d",
          text: "Features multi-ISP and highly redundant power.",
        },
        {
          id: "e",
          text: "Equipped with basic UPS and A/C.",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E are correct. A standard small office server room typically has 1-5 racks, a single ISP, and basic UPS and A/C setups.",
        incorrect: {
          a: "Incorrect — Having 100s of racks is a characteristic of a large Data Center, not a small office server room.",
          d: "Incorrect — Multi-ISP and highly redundant power are features of a Data Center, whereas a server room usually relies on a single ISP.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "Which of the following are defining traits of a Data Center compared to a standard server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is a large facility.",
        },
        {
          id: "b",
          text: "It supports a single business entity exclusively.",
        },
        {
          id: "c",
          text: "It features redundant power and precision cooling.",
        },
        {
          id: "d",
          text: "It utilizes multiple ISPs and 24/7 high security.",
        },
        {
          id: "e",
          text: "It relies solely on a basic split A/C unit.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. A data center is a large facility that supports businesses, featuring redundant power, precision cooling, multiple ISPs, and 24/7 security.",
        incorrect: {
          b: "Incorrect — A Data Center typically supports multiple businesses, whereas a small server room supports 'a' business.",
          e: "Incorrect — A Data Center utilizes precision cooling, not just a basic split A/C.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "How does investing in an onsite server room benefit an organization's visibility and accessibility? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It increases reliance on third-party cloud providers.",
        },
        {
          id: "b",
          text: "It allows full control over where data resides, improving data visibility and compliance.",
        },
        {
          id: "c",
          text: "It eliminates public cloud uncertainties, ensuring consistent performance for critical applications.",
        },
        {
          id: "d",
          text: "It avoids internet bandwidth constraints, providing high-quality experiences for users.",
        },
        {
          id: "e",
          text: "It ensures that applications suffer from high latency.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D are correct. Onsite servers give full control over data residency, eliminate cloud performance uncertainties, and bypass internet bandwidth constraints.",
        incorrect: {
          a: "Incorrect — Investing onsite actually reduces reliance on third-party cloud providers.",
          e: "Incorrect — An onsite server room reduces latency, it does not ensure high latency.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "Which methods are used to deliver connectivity to a Rack Server? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Direct Connection to a Network Core Switch.",
        },
        {
          id: "b",
          text: "Wireless Bluetooth bridging to the ISP.",
        },
        {
          id: "c",
          text: "Zone Switching (Dedicated Switch per Rack or Row).",
        },
        {
          id: "d",
          text: "Patch Panels with Cross-Connections.",
        },
        {
          id: "e",
          text: "Connecting via standard USB flash drives.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Connectivity is delivered via Direct Connection to a Core Switch, Zone Switching, or Patch Panels with Cross-Connections.",
        incorrect: {
          b: "Incorrect — Wireless Bluetooth is not a standard method for delivering rack server network connectivity.",
          e: "Incorrect — USB flash drives provide local storage transfer, not network connectivity to a rack server.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "What are the characteristics of the 'Zone Switching' method for delivering connectivity to a rack server? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A separate switch is placed per rack or per row based on bandwidth needs.",
        },
        {
          id: "b",
          text: "Each data port on the server is directly connected to the core network switch.",
        },
        {
          id: "c",
          text: "It reduces the number of cables running to the core switch.",
        },
        {
          id: "d",
          text: "It improves network efficiency.",
        },
        {
          id: "e",
          text: "It completely eliminates the need for any core switches.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Zone switching places a switch per rack/row, which reduces cable runs to the core and improves overall network efficiency.",
        incorrect: {
          b: "Incorrect — This describes the 'Direct Connection to a Network Core Switch' method.",
          e: "Incorrect — It does not eliminate the core switch; it merely reduces the number of direct cable runs to it.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "When designing a server room, what location and structural considerations must be met according to standards? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "The room should be positioned away from noise-sensitive zones.",
        },
        {
          id: "b",
          text: "It should have large exterior windows for emergency ventilation.",
        },
        {
          id: "c",
          text: "It requires solid walls extending from the floor to the ceiling.",
        },
        {
          id: "d",
          text: "Doors should be reinforced and large enough for equipment movement (42 inches wide, 9 feet tall).",
        },
        {
          id: "e",
          text: "If raised floors exist, walls only need to start from the top of the raised floor.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Server rooms must be away from noise, have solid floor-to-ceiling walls, and feature large, reinforced doors.",
        incorrect: {
          b: "Incorrect — Standards dictate there should be NO exterior windows to prevent break-ins and environmental damage.",
          e: "Incorrect — Walls must extend above drop ceilings and below raised floors to prevent unauthorized access.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "Which of the following are standard dimensions and clearance requirements for a server rack and room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Standard server rack width is 19 inches.",
        },
        {
          id: "b",
          text: "Standard server rack height is 42U (73.5 inches).",
        },
        {
          id: "c",
          text: "Clearance requires 2 feet at the front and 1 foot at the rear.",
        },
        {
          id: "d",
          text: "Raised floors should be a minimum of 24 inches for large server rooms.",
        },
        {
          id: "e",
          text: "Standard rack height is capped at 24U for all facilities.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Standard racks are 19-inch width and 42U height. Large rooms recommend raised floors of minimum 24 inches.",
        incorrect: {
          c: "Incorrect — The required clearance is 4 feet at the front and 3 feet at the rear for maintenance.",
          e: "Incorrect — The standard height mentioned is 42U, not 24U.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "Which physical access and security measures must be implemented in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Access should be restricted to authorized personnel only.",
        },
        {
          id: "b",
          text: "If traditional physical keys are used, they must be labeled 'Do Not Duplicate'.",
        },
        {
          id: "c",
          text: "Visitors can enter unescorted if they sign the visitor log.",
        },
        {
          id: "d",
          text: "Use of electronic locks, card readers, or biometric authentication.",
        },
        {
          id: "e",
          text: "Surveillance cameras (CCTV) should be used to monitor access.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are correct. Strict physical access controls, specialized keys, electronic auth, and CCTV are all required standards.",
        incorrect: {
          c: "Incorrect — Visitors must wear ID badges and be escorted at all times; signing a log is not enough.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "What are the power and electrical requirements according to server room standards? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Dedicated circuits for all equipment, plus additional circuits for backup.",
        },
        {
          id: "b",
          text: "Proper grounding to avoid electrical hazards.",
        },
        {
          id: "c",
          text: "Emergency power-off switches should be removed to prevent accidental shutdowns.",
        },
        {
          id: "d",
          text: "Automatic shutdown features should be configured for safe shutdown before power loss.",
        },
        {
          id: "e",
          text: "Backup generators to ensure power continuity in case of outages.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are correct. Power requirements include dedicated/backup circuits, grounding, auto-shutdown features, and backup generators.",
        incorrect: {
          c: "Incorrect — Large rooms should actually have a clearly labeled emergency power-off switch, not remove them.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "Which of the following describes the proper Cooling & Temperature Control standards for a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "The ideal temperature range is 65-70°F (18-21°C).",
        },
        {
          id: "b",
          text: "Redundant A/C units should be installed to avoid overheating in case of failure.",
        },
        {
          id: "c",
          text: "Using an environmental monitoring system to send SMS/email alerts when limits are exceeded.",
        },
        {
          id: "d",
          text: "Mixing hot and cold air randomly to balance the overall room temperature.",
        },
        {
          id: "e",
          text: "Utilizing hot aisle/cold aisle design for airflow optimization.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "e"],
      explanation: {
        correct:
          "Options A, B, C, and E are correct. Ideal temp is 65-70°F, requiring redundant A/C, alerting systems, and hot/cold aisle optimization.",
        incorrect: {
          d: "Incorrect — The hot aisle/cold aisle design specifically aims to prevent mixing hot and cold air to optimize airflow.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "What are the standards for Fire & Flood Protection in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Water-based fire suppression is highly recommended.",
        },
        {
          id: "b",
          text: "Clean-agent fire suppression systems (e.g., FM-200, CO2) should be used.",
        },
        {
          id: "c",
          text: "Water sensors should be installed near A/C condensers and pipes.",
        },
        {
          id: "d",
          text: "Equipment should be elevated off the ground.",
        },
        {
          id: "e",
          text: "Raised floors should have drainage systems in flood-prone areas.",
        },
      ],
      correctOptionIds: ["b", "c", "d", "e"],
      explanation: {
        correct:
          "Options B, C, D, and E are correct. Server rooms require clean-agent fire suppression and specific flood mitigation like water sensors, elevated equipment, and floor drainage.",
        incorrect: {
          a: "Incorrect — Water-based fire suppression is explicitly NOT recommended for server rooms.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "Which of the following events are classified as 'Critical Alerts' that require immediate action? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Fire detection & suppression system triggered.",
        },
        {
          id: "b",
          text: "Water detected in server room.",
        },
        {
          id: "c",
          text: "Minor A/C warnings for routine maintenance.",
        },
        {
          id: "d",
          text: "UPS failure or critical air-conditioning failure.",
        },
        {
          id: "e",
          text: "Room temperature exceeding safe limits.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are critical alerts indicating immediate threat to the server room.",
        incorrect: {
          c: "Incorrect — Minor A/C warnings are classified as Non-Critical Alerts intended for maintenance and monitoring.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "Which of the following apply to Non-Critical Alerts in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Minor A/C warnings requiring routine maintenance.",
        },
        {
          id: "b",
          text: "Power outage where the backup generator is actively in use.",
        },
        {
          id: "c",
          text: "UPS minor faults or battery replacement needed.",
        },
        {
          id: "d",
          text: "Generator minor faults that are not an immediate risk.",
        },
        {
          id: "e",
          text: "Total UPS failure.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Non-critical alerts signify maintenance needs like minor A/C warnings, UPS battery replacements, and minor generator faults.",
        incorrect: {
          b: "Incorrect — A power outage with generator in use is a Critical Alert.",
          e: "Incorrect — Total UPS failure is a Critical Alert.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "According to server room maintenance types, what characterizes 'Condition-based maintenance (CBM)'? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is maintenance performed strictly based on a fixed calendar schedule.",
        },
        {
          id: "b",
          text: "It is maintenance performed when the need arises.",
        },
        {
          id: "c",
          text: "It occurs after indicators show equipment is going to fail or performance is deteriorating.",
        },
        {
          id: "d",
          text: "It involves restoring an already completely broken system back to operating limits.",
        },
        {
          id: "e",
          text: "It relies on monitoring the actual state of the equipment.",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E are correct. Condition-based maintenance occurs when indicators show degradation, acting 'when the need arises' based on the equipment's state.",
        incorrect: {
          a: "Incorrect — Maintenance based strictly on a fixed calendar schedule is Planned Preventive Maintenance.",
          d: "Incorrect — Restoring a completely broken system is Corrective Maintenance.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "Which statements correctly define 'Corrective maintenance'? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A task performed to identify, isolate, and rectify a fault.",
        },
        {
          id: "b",
          text: "It aims to predict when maintenance should be performed to save costs.",
        },
        {
          id: "c",
          text: "It restores a failed machine or system to an operational condition.",
        },
        {
          id: "d",
          text: "It brings equipment back within tolerances or limits established for in-service operations.",
        },
        {
          id: "e",
          text: "It is performed while the equipment is still working perfectly.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D accurately describe corrective maintenance, which involves fixing an already faulty system to restore normal operations.",
        incorrect: {
          b: "Incorrect — Predicting when maintenance should be performed is Predictive Maintenance (PdM).",
          e: "Incorrect — Maintenance performed while equipment is still working to prevent unexpected breakdowns is Preventive Maintenance.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "What are the features of 'Planned preventive maintenance (PPM)'? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Also referred to as simply planned maintenance (PM) or scheduled maintenance.",
        },
        {
          id: "b",
          text: "It is performed only after a major unexpected breakdown occurs.",
        },
        {
          id: "c",
          text: "It is regularly performed to lessen the likelihood of equipment failing.",
        },
        {
          id: "d",
          text: "It is performed while the server room equipment is still working.",
        },
        {
          id: "e",
          text: "It prevents equipment from breaking down unexpectedly.",
        },
      ],
      correctOptionIds: ["a", "c", "d", "e"],
      explanation: {
        correct:
          "Options A, C, D, and E are correct. PPM is scheduled maintenance performed on working equipment to reduce the chance of sudden failures.",
        incorrect: {
          b: "Incorrect — Maintenance performed after a major breakdown is Corrective Maintenance.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "How does 'Predictive maintenance (PdM)' differ from other types of maintenance? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It uses techniques designed to determine equipment condition to predict when maintenance should be performed.",
        },
        {
          id: "b",
          text: "Tasks are performed only when warranted by the equipment's condition.",
        },
        {
          id: "c",
          text: "It involves restoring an already completely broken system back to operating limits.",
        },
        {
          id: "d",
          text: "It promises cost savings over routine or time-based preventive maintenance.",
        },
        {
          id: "e",
          text: "It executes repairs based strictly on a time schedule, regardless of equipment state.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. PdM assesses equipment condition to predict maintenance needs, saving costs over blind routine maintenance by only acting when warranted.",
        incorrect: {
          c: "Incorrect — Restoring a broken system is Corrective Maintenance.",
          e: "Incorrect — Executing repairs strictly on a time schedule describes Planned Preventive Maintenance.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "What is meant by 'Total productive maintenance (TPM)' in the context of a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is solely the process of replacing faulty network switches after they fail.",
        },
        {
          id: "b",
          text: "It is a system of maintaining and improving the integrity of production and quality systems.",
        },
        {
          id: "c",
          text: "It involves machines, equipment, processes, and employees.",
        },
        {
          id: "d",
          text: "It focuses on factors that add business value to a server room.",
        },
        {
          id: "e",
          text: "It is a strategy that only applies to software patches and updates.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D correctly define TPM as a holistic system improving production/quality integrity through machines, processes, and employees adding business value.",
        incorrect: {
          a: "Incorrect — Replacing faulty switches after failure is Corrective Maintenance.",
          e: "Incorrect — TPM is a broad organizational strategy involving machines and employees, not just software patches.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "How does a 'Hot Aisle / Cold Aisle Containment Design with CRAC' function? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It mixes cold and hot air to create a stable average room temperature.",
        },
        {
          id: "b",
          text: "It physically separates the cold air intake from the hot air exhaust.",
        },
        {
          id: "c",
          text: "CRAC units push cold air up through the raised floor to the cold aisle.",
        },
        {
          id: "d",
          text: "Servers pull cool air in, and expelled heat is directed into a sealed hot aisle.",
        },
        {
          id: "e",
          text: "It increases condensation risks in humid climates.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D are correct. Hot/Cold aisle containment separates air streams. CRAC pushes cold air through raised floors, servers take it in, and heat is expelled into a sealed hot aisle.",
        incorrect: {
          a: "Incorrect — The design specifically prevents mixing of cold and hot air.",
          e: "Incorrect — It actually prevents mixing of warm moist air with cooled air, thereby reducing condensation risks in humid climates.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "Why is 'Hot Aisle / Cold Aisle Containment' suitable for server rooms in climates like Malaysia? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Traditional room-level air conditioning is highly inefficient against frequent overheating.",
        },
        {
          id: "b",
          text: "Targeted airflow optimization actively manages heat dissipation at the rack level.",
        },
        {
          id: "c",
          text: "It completely removes the need for any air conditioning units.",
        },
        {
          id: "d",
          text: "It reduces energy consumption by making cooling targeted rather than wasting it on mixed air.",
        },
        {
          id: "e",
          text: "It requires no structural modifications to standard office rooms.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. This containment method manages heat at the rack level efficiently, saving energy in overheat-prone environments.",
        incorrect: {
          c: "Incorrect — It still utilizes Computer Room Air Conditioning (CRAC) units.",
          e: "Incorrect — It requires major structural changes, such as specific rack spacing and a raised floor of at least 24 inches.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "What are the limitations or risks of Environmental Monitoring and Automated Alerts? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "The alert system is entirely dependent on network uptime.",
        },
        {
          id: "b",
          text: "If a localized power grid fluctuation takes down the network, alerts might fail to reach administrators.",
        },
        {
          id: "c",
          text: "The monitoring system actively removes heat by itself, causing power spikes.",
        },
        {
          id: "d",
          text: "It only notifies administrators, so it must be paired with real cooling and power systems.",
        },
        {
          id: "e",
          text: "It prevents the IT staff from manually checking the equipment.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Monitoring relies on the network to send alerts and cannot fix issues (like cooling) on its own.",
        incorrect: {
          c: "Incorrect — The monitoring system does not take action like removing heat; it only monitors and alerts.",
          e: "Incorrect — It does not prevent manual checking; it serves as a proactive defense mechanism.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "What is the function and risk of an Uninterruptible Power Supply (UPS) in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It acts as an immediate, temporary backup power source shielding from power surges.",
        },
        {
          id: "b",
          text: "It bridges the gap between a power failure and the activation of a backup generator.",
        },
        {
          id: "c",
          text: "It provides permanent power replacement for long-term grid outages.",
        },
        {
          id: "d",
          text: "It can trigger an automatic, safe shutdown sequence for servers.",
        },
        {
          id: "e",
          text: "UPS batteries degrade faster in poorly cooled environments.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are correct. A UPS provides short-term backup, bridges the gap to generators, triggers auto-shutdowns, and is sensitive to poor cooling.",
        incorrect: {
          c: "Incorrect — A UPS provides temporary backup power, not long-term permanent replacement.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "When comparing an Underwater Data Center to a Traditional Data Center, which statements are accurate? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Traditional data centers use power-intensive precision cooling, while underwater centers use natural seawater cooling.",
        },
        {
          id: "b",
          text: "Underwater data centers are exposed to atmospheric oxygen and regular human interaction.",
        },
        {
          id: "c",
          text: "Maintenance in a traditional data center allows for easy access and quick repairs.",
        },
        {
          id: "d",
          text: "Underwater data centers use a sealed nitrogen environment (zero oxygen).",
        },
        {
          id: "e",
          text: "Underwater data centers have low initial costs due to the lack of A/C units.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct comparisons regarding cooling methods, maintenance access, and atmospheric environment.",
        incorrect: {
          b: "Incorrect — Traditional data centers are exposed to oxygen and human interaction; underwater centers are sealed in nitrogen.",
          e: "Incorrect — Underwater data centers have a high initial cost due to specialized design, sealing, and underwater installation.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "Why might an Underwater Data Center be considered impractical for standard deployment in Southeast Asia? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Warm, tropical waters alter thermal dynamics, potentially reducing overall cooling efficiency.",
        },
        {
          id: "b",
          text: "It raises concerns about localized thermal pollution and the disruption of coral ecosystems.",
        },
        {
          id: "c",
          text: "Routine tasks, such as replacing a faulty drive, are impossible without hauling the capsule to the surface.",
        },
        {
          id: "d",
          text: "They consume significantly more electrical power than traditional CRAC cooling systems.",
        },
        {
          id: "e",
          text: "The zero-oxygen environment makes servers degrade rapidly.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C correctly identify the environmental and maintenance challenges of deploying underwater data centers in SEA.",
        incorrect: {
          d: "Incorrect — Underwater cooling provides energy savings; it does not consume more power than CRAC.",
          e: "Incorrect — The zero-oxygen (nitrogen) environment actually prevents component oxidation; it does not degrade servers rapidly.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "If a server room lacks network redundancy, what are the consequences and mitigation strategies? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "The server room has a single point of failure regarding external connectivity.",
        },
        {
          id: "b",
          text: "An ISP outage will cause remote users and external operations to lose access.",
        },
        {
          id: "c",
          text: "A mitigation strategy is to implement a local backup strategy to protect data internally.",
        },
        {
          id: "d",
          text: "A mitigation strategy is negotiating a strict SLA with the single ISP to guarantee high uptime.",
        },
        {
          id: "e",
          text: "Internal users connected to the LAN will lose access to local files.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d"],
      explanation: {
        correct:
          "Options A, B, C, and D are correct. Lacking network redundancy causes a single point of failure for external connectivity, requiring internal backups and a strict SLA as mitigation.",
        incorrect: {
          e: "Incorrect — Network redundancy issues primarily affect external connectivity (ISP), not necessarily local LAN access to internal files.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "What is the consequence of excluding automated monitoring systems from a server room, and how can it be mitigated? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Administrators will not receive immediate SMS or email alerts regarding critical failures.",
        },
        {
          id: "b",
          text: "Issues like water leaks or temperature spikes may go unnoticed until physical damage occurs.",
        },
        {
          id: "c",
          text: "The servers will automatically shut down as a precaution without monitoring systems.",
        },
        {
          id: "d",
          text: "Mitigation requires strict, scheduled physical manual monitoring by IT staff.",
        },
        {
          id: "e",
          text: "Mitigation involves using a second ISP to monitor the internal network.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D correctly state that lack of automation stops immediate alerts, risks physical damage, and forces reliance on manual physical checks.",
        incorrect: {
          c: "Incorrect — Servers won't know to shut down automatically for environmental issues without the sensors/monitoring systems triggering the response.",
          e: "Incorrect — A second ISP provides network redundancy, it does not replace internal environmental monitoring.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "Which element provides the primary defense against unstable power sources and short power outages in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Uninterruptible Power Supply (UPS)",
        },
        {
          id: "b",
          text: "Zone Switching",
        },
        {
          id: "c",
          text: "Raised floor drainage",
        },
        {
          id: "d",
          text: "Patch panels",
        },
        {
          id: "e",
          text: "Temporary backup batteries",
        },
      ],
      correctOptionIds: ["a", "e"],
      explanation: {
        correct:
          "Options A and E are correct (A UPS provides temporary backup batteries/power). It protects equipment from unstable power and short outages.",
        incorrect: {
          b: "Incorrect — Zone switching is a networking method.",
          c: "Incorrect — Raised floor drainage is for flood protection.",
          d: "Incorrect — Patch panels are for cable management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "What components make up the 'Infrastructure' element of a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Network equipment",
        },
        {
          id: "b",
          text: "Routers",
        },
        {
          id: "c",
          text: "Switches",
        },
        {
          id: "d",
          text: "Fire suppression gas",
        },
        {
          id: "e",
          text: "Uninterruptible Power Supply (UPS)",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The infrastructure element specifically includes network equipment, routers, and switches supporting operations.",
        incorrect: {
          d: "Incorrect — Fire suppression gas belongs to Fire Protection.",
          e: "Incorrect — UPS belongs to Power elements.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "When assessing Backup and Disaster Recovery within a server room, which practices are utilized? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Regular data backups to prevent data loss.",
        },
        {
          id: "b",
          text: "Hot backup sites in different locations.",
        },
        {
          id: "c",
          text: "Cold backup sites in different locations.",
        },
        {
          id: "d",
          text: "Keeping all backup storage strictly within the same server rack for easy access.",
        },
        {
          id: "e",
          text: "Disaster recovery planning for major failures.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "e"],
      explanation: {
        correct:
          "Options A, B, C, and E are correct practices for Backup and Disaster Recovery.",
        incorrect: {
          d: "Incorrect — Backups and hot/cold sites should be in different locations for disaster recovery, not within the exact same rack where a failure could destroy both.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "Which of the following explains why bespoke build & scalability are important for a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Custom-built rooms can be tailored to business needs with the right cooling systems and security measures.",
        },
        {
          id: "b",
          text: "It forces organizations to adopt third-party cloud infrastructure eventually.",
        },
        {
          id: "c",
          text: "Scalable infrastructure allows businesses to expand their IT capacity as they grow.",
        },
        {
          id: "d",
          text: "It ensures the room is completely immune to all natural disasters.",
        },
        {
          id: "e",
          text: "Generators and UPS systems can be custom-fitted to the exact load requirement.",
        },
      ],
      correctOptionIds: ["a", "c", "e"],
      explanation: {
        correct:
          "Options A, C, and E are correct. Bespoke builds allow for tailoring hardware (cooling, UPS, generators) to business needs and scaling capacity as the business grows.",
        incorrect: {
          b: "Incorrect — It actually reduces reliance on third-party clouds.",
          d: "Incorrect — No build guarantees complete immunity to all natural disasters, though they mitigate risk.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "What defines a server rack? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is also known as a rack-mounted server.",
        },
        {
          id: "b",
          text: "It is a framework designed to hold hardware units securely in place with screws.",
        },
        {
          id: "c",
          text: "It consists of multiple mounting slots.",
        },
        {
          id: "d",
          text: "It is a specialized computer designed exclusively for desktop use.",
        },
        {
          id: "e",
          text: "It is purely a software system used to organize files.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. A rack server is a specialized computer for server use installed in a framework with mounting slots secured by screws.",
        incorrect: {
          d: "Incorrect — It is designed for server use, not desktop use.",
          e: "Incorrect — It is physical hardware, not a software system.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "In the context of delivering connectivity to a rack server, what does the 'Direct Connection to a Network Core Switch' entail? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Each data port on the server is directly connected to the core network switch.",
        },
        {
          id: "b",
          text: "It ensures high-speed connectivity.",
        },
        {
          id: "c",
          text: "It requires a large number of cables.",
        },
        {
          id: "d",
          text: "It utilizes intermediate switches in every row to minimize cabling.",
        },
        {
          id: "e",
          text: "It relies on patch panels for establishing cross-connections.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Direct connection provides high speed by linking ports straight to the core switch, which inherently requires many cables.",
        incorrect: {
          d: "Incorrect — Using intermediate switches describes Zone Switching.",
          e: "Incorrect — Relying on patch panels describes the Patch Panels with Cross-Connections method.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "Which design considerations are relevant for 'Hardware & Storage' in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Use of racks, cabinets, and shelves for space efficiency.",
        },
        {
          id: "b",
          text: "Keeping the server room away from exterior walls.",
        },
        {
          id: "c",
          text: "Telco racks can hold hundreds of 1U servers.",
        },
        {
          id: "d",
          text: "Underfloor space allocation for cable routing.",
        },
        {
          id: "e",
          text: "Monitoring temperature and humidity with sensors.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C specifically belong to the 'Hardware & Storage' consideration section.",
        incorrect: {
          b: "Incorrect — This belongs to 'Room Size & Layout'.",
          d: "Incorrect — This belongs to 'Cable Management & Power Supply'.",
          e: "Incorrect — This belongs to 'Cooling & Environmental Control'.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "What guidelines should be followed regarding Cable Management & Power Supply design? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Allocate underfloor space for cable routing.",
        },
        {
          id: "b",
          text: "Install power whips from a central electrical panel.",
        },
        {
          id: "c",
          text: "Implement 24/7 network monitoring.",
        },
        {
          id: "d",
          text: "Use raised floors or ceiling racks to keep cables tidy.",
        },
        {
          id: "e",
          text: "Use fingerprint scanners to secure the cables.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct principles for cable management and power supply in a server room.",
        incorrect: {
          c: "Incorrect — 24/7 monitoring belongs to 'Monitoring & Alerts'.",
          e: "Incorrect — Fingerprint scanners are for 'Security & Access Control', not cable security.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "What is the standard classification for a room housing computing equipment used to provide network-based services? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It is classified as a server room.",
        },
        {
          id: "b",
          text: "This includes small server closets.",
        },
        {
          id: "c",
          text: "This includes large data centers.",
        },
        {
          id: "d",
          text: "It is only a server room if it contains more than 10 racks.",
        },
        {
          id: "e",
          text: "It is classified as a general-purpose office space.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. According to standards, any room (from small closets to large data centers) housing equipment for network-based services is classified as a server room.",
        incorrect: {
          d: "Incorrect — Even a small closet is considered a server room; there is no 10-rack minimum.",
          e: "Incorrect — It is uniquely classified as a server room, subject to strict operational standards.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "To prevent unauthorized physical access to the server room, which structural standards are enforced? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Walls must be solid from floor to ceiling.",
        },
        {
          id: "b",
          text: "If raised floors exist, walls must extend below them.",
        },
        {
          id: "c",
          text: "If drop ceilings exist, walls must extend above them.",
        },
        {
          id: "d",
          text: "Standard drywall partitions with open top-ventilation are recommended.",
        },
        {
          id: "e",
          text: "Doors should be reinforced.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "e"],
      explanation: {
        correct:
          "Options A, B, C, and E are correct structural requirements to completely enclose the space and prevent physical intrusion.",
        incorrect: {
          d: "Incorrect — Walls must be solid floor to ceiling; open top-ventilation defeats the security boundary.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "Why is anti-static flooring recommended in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "To reduce electrical hazards.",
        },
        {
          id: "b",
          text: "To improve the Wi-Fi signal strength.",
        },
        {
          id: "c",
          text: "To prevent static electricity from damaging sensitive equipment.",
        },
        {
          id: "d",
          text: "To act as a secondary fire suppression system.",
        },
        {
          id: "e",
          text: "To cool the floor naturally.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Anti-static flooring reduces electrical hazards that can damage sensitive server components.",
        incorrect: {
          b: "Incorrect — It has no impact on Wi-Fi signals.",
          d: "Incorrect — Flooring does not suppress fires.",
          e: "Incorrect — It does not naturally cool the floor.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "Which of the following are considered 'Best Practices' for server room management? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Restrict access & implement surveillance.",
        },
        {
          id: "b",
          text: "Maintain temperature & humidity levels.",
        },
        {
          id: "c",
          text: "Use UPS & backup generators for power redundancy.",
        },
        {
          id: "d",
          text: "Install fire suppression & water sensors.",
        },
        {
          id: "e",
          text: "Ensure real-time alerts for environmental changes.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "d", "e"],
      explanation: {
        correct:
          "All options (A, B, C, D, E) correspond exactly to the Best Practices listed for a server room (Security First, Proper Cooling, Power Redundancy, Fire/Flood Protection, Continuous Monitoring).",
        incorrect: {},
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q41",
      text: "What action is taken during 'Preventive maintenance' in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Providing systematic inspection, detection, and correction of incipient failures.",
        },
        {
          id: "b",
          text: "Fixing issues either before they occur or before they develop into major defects.",
        },
        {
          id: "c",
          text: "Following planned guidelines from time-to-time.",
        },
        {
          id: "d",
          text: "Waiting for a failure to happen before replacing the part.",
        },
        {
          id: "e",
          text: "Preventing equipment and machinery breakdown through regular care and servicing.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "e"],
      explanation: {
        correct:
          "Options A, B, C, and E accurately describe preventive maintenance, which focuses on inspection and early correction following planned guidelines to avoid breakdowns.",
        incorrect: {
          d: "Incorrect — Waiting for a failure before acting is Corrective Maintenance.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q42",
      text: "Which of the following would NOT be recommended as a fire suppression method in a server room? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Water-based fire suppression.",
        },
        {
          id: "b",
          text: "FM-200 clean-agent systems.",
        },
        {
          id: "c",
          text: "Standard water sprinkler systems.",
        },
        {
          id: "d",
          text: "Waterless extinguishers.",
        },
        {
          id: "e",
          text: "CO2 suppression systems.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct answers to the question because water-based systems (like standard sprinklers) are explicitly NOT recommended for server rooms as they destroy electrical equipment.",
        incorrect: {
          b: "Incorrect — FM-200 IS recommended.",
          d: "Incorrect — Waterless extinguishers ARE recommended.",
          e: "Incorrect — CO2 systems ARE recommended.",
        },
      },
    },
  ],
};
