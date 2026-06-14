import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic3: Quiz = {
  id: "sysadmin-topic-3",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-3",
  title: "Topic 3 - Host Management Physical of Server Room",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "What are the fundamental characteristics that define the environment of a server room?",
      options: [
        {
          id: "a",
          text: "It provides an isolated, dedicated space specifically for housing IT and network infrastructure.",
        },
        {
          id: "b",
          text: "It relies on natural building ventilation to maintain ambient hardware temperatures.",
        },
        {
          id: "c",
          text: "It utilizes a strictly controlled environment managing cooling, power, and physical access.",
        },
        {
          id: "d",
          text: "It centralizes IT resources to improve the efficiency and reliability of data management.",
        },
        {
          id: "e",
          text: "It decentralizes equipment across different departments to share the power load.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D accurately describe the core conceptual features of a server room, emphasizing dedication, control, and centralization.",
        incorrect: {
          b: "Incorrect — Server rooms require strictly controlled mechanical cooling, not natural ventilation.",
          e: "Incorrect — The purpose of a server room is to centralize equipment, not decentralize it.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "Strategically, why is establishing a dedicated server room crucial for an organization's operations?",
      options: [
        {
          id: "a",
          text: "It guarantees that critical business data is stored in a secure and stable physical location.",
        },
        {
          id: "b",
          text: "It ensures business continuity by mitigating the risk of power outages through redundant systems.",
        },
        {
          id: "c",
          text: "It eliminates the need for organizational cybersecurity measures.",
        },
        {
          id: "d",
          text: "It serves as the central hub supporting all internal network communications and business operations.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D reflect the strategic operational benefits of a server room.",
        incorrect: {
          c: "Incorrect — Physical security in a server room does not eliminate the need for digital cybersecurity.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "How do structured 'Racks' and 'Cabling' systems contribute to the operational efficiency of a server room?",
      options: [
        {
          id: "a",
          text: "Racks organize hardware vertically to maximize spatial efficiency.",
        },
        {
          id: "b",
          text: "Structured cabling tightly binds data and power cables together to save space.",
        },
        {
          id: "c",
          text: "Racks are designed to optimize airflow and make physical maintenance highly accessible.",
        },
        {
          id: "d",
          text: "Structured cabling systems using raised floors or ceiling trays keep pathways clear and manageable.",
        },
        {
          id: "e",
          text: "Cabling systems are intentionally randomized to prevent physical tampering.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D correctly explain the organizational, cooling, and management benefits of racks and cabling.",
        incorrect: {
          b: "Incorrect — Power and data cables should generally be organized but not tightly bound together in a way that causes interference.",
          e: "Incorrect — Cables must be structured and highly organized, never randomized.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "What is the strategic purpose of implementing redundant power and UPS systems in a server room?",
      options: [
        {
          id: "a",
          text: "To permanently replace the main electrical grid and operate solely on battery power.",
        },
        {
          id: "b",
          text: "To protect sensitive server equipment from unstable power anomalies, such as surges.",
        },
        {
          id: "c",
          text: "To ensure continuous operational availability in the event of a primary power failure.",
        },
        {
          id: "d",
          text: "To allow servers to be safely and gracefully shut down during an extended blackout.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D are the primary conceptual goals for implementing UPS and redundant power strategies.",
        incorrect: {
          a: "Incorrect — A UPS and backup generators are for temporary continuity or safe shutdown, not to permanently replace the grid.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "Why do server rooms heavily emphasize both 'Physical Security' and 'Environmental Control'?",
      options: [
        {
          id: "a",
          text: "Physical security measures prevent unauthorized personnel from tampering with critical hardware.",
        },
        {
          id: "b",
          text: "Environmental controls manage extreme heat generated by servers, preventing hardware failure.",
        },
        {
          id: "c",
          text: "Environmental controls introduce humidity to keep hardware components lubricated.",
        },
        {
          id: "d",
          text: "Both elements act together to eliminate any single point of failure that could cause business downtime.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D conceptually explain why security and environmental stability are non-negotiable.",
        incorrect: {
          c: "Incorrect — Humidity is tightly controlled to prevent static (if too low) or condensation (if too high), not to lubricate hardware.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "What is the rationale behind a robust Backup and Disaster Recovery strategy in server room management?",
      options: [
        {
          id: "a",
          text: "To maintain hot or cold alternative sites to resume operations if the primary site is destroyed.",
        },
        {
          id: "b",
          text: "To ensure regular data backups are safely stored in offsite locations.",
        },
        {
          id: "c",
          text: "To consolidate all backup data onto the primary server to streamline recovery speeds.",
        },
        {
          id: "d",
          text: "To prepare the organization to recover from catastrophic hardware failures or natural disasters.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D correctly identify the core concepts of disaster recovery planning.",
        incorrect: {
          c: "Incorrect — Backups must be kept separate from the primary server (offsite) to ensure they survive a localized disaster.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "Conceptually, how does a standard Server Room differ from a large-scale Data Center?",
      options: [
        {
          id: "a",
          text: "A Server Room is typically localized and scales to support a single business's operations.",
        },
        {
          id: "b",
          text: "A Data Center is a massive facility designed to support multiple businesses and tenants simultaneously.",
        },
        {
          id: "c",
          text: "A Data Center relies on basic, non-redundant cooling to minimize its massive operational costs.",
        },
        {
          id: "d",
          text: "A Data Center prioritizes extreme redundancy across multi-ISP connections and high-end security.",
        },
        {
          id: "e",
          text: "A Server Room is entirely virtual, while a Data Center holds physical hardware.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D correctly contrast the scale, scope, and redundancy levels of the two facilities.",
        incorrect: {
          c: "Incorrect — Data centers utilize highly redundant power and cooling systems, not basic ones.",
          e: "Incorrect — Both server rooms and data centers contain physical hardware.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "Why might an organization choose an 'Onsite Investment' for their server room instead of fully migrating to a public cloud?",
      options: [
        {
          id: "a",
          text: "It provides the organization with absolute control over their IT resources and infrastructure.",
        },
        {
          id: "b",
          text: "It allows the organization to completely avoid all hardware maintenance responsibilities.",
        },
        {
          id: "c",
          text: "It ensures full visibility and compliance by strictly controlling exactly where sensitive data resides.",
        },
        {
          id: "d",
          text: "It protects highly confidential information by keeping it isolated from shared, external public clouds.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are strategic reasons businesses invest in onsite infrastructure.",
        incorrect: {
          b: "Incorrect — Onsite investment means the organization takes on MORE hardware maintenance responsibilities, not fewer.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "How does possessing an onsite server room provide advantages regarding 'Latency' and 'Availability'?",
      options: [
        {
          id: "a",
          text: "It ensures data travels shorter physical distances, benefiting real-time processing applications.",
        },
        {
          id: "b",
          text: "It relies entirely on public internet bandwidth limits, ensuring fair speed distribution.",
        },
        {
          id: "c",
          text: "It grants full control over the end-to-end infrastructure to drastically improve network performance.",
        },
        {
          id: "d",
          text: "It allows the business to architect dedicated systems that prevent unexpected cloud vendor outages.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D explain the latency and availability benefits of onsite control.",
        incorrect: {
          b: "Incorrect — An onsite server room helps AVOID public internet bandwidth constraints, rather than relying on them.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "What is the strategic value of a 'Bespoke Build & Scalability' approach in server room design?",
      options: [
        {
          id: "a",
          text: "It allows the server room to be tailored precisely to the unique cooling, power, and security needs of the business.",
        },
        {
          id: "b",
          text: "It enables the business to incrementally expand their IT capacity as organizational demands grow.",
        },
        {
          id: "c",
          text: "It forces organizations to adopt a rigid, standardized layout that cannot be altered.",
        },
        {
          id: "d",
          text: "It ensures infrastructure investments align strictly with actual business requirements rather than generic templates.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D highlight the flexibility and alignment benefits of a bespoke design.",
        incorrect: {
          c: "Incorrect — Bespoke builds are inherently flexible and tailored, not rigid and unalterable.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "When structuring network cables, what are the distinct characteristics of 'Zone Switching' compared to 'Direct Connection'?",
      options: [
        {
          id: "a",
          text: "Direct connection routes every individual server port directly to the core switch, leading to massive cable volumes.",
        },
        {
          id: "b",
          text: "Zone switching places intermediate switches at the rack or row level to aggregate traffic.",
        },
        {
          id: "c",
          text: "Zone switching significantly reduces the number of long cable runs traveling back to the core network.",
        },
        {
          id: "d",
          text: "Direct connection is universally considered more efficient and organized for large-scale data centers.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C accurately differentiate the concepts of direct connections vs. zone switching.",
        incorrect: {
          d: "Incorrect — Direct connection causes severe cable clutter in large setups; zone switching or patch panels are much more organized.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "Why is the use of 'Patch Panels with Cross-Connections' considered a best practice in server room cable management?",
      options: [
        {
          id: "a",
          text: "It establishes a highly structured and traceable cabling environment.",
        },
        {
          id: "b",
          text: "It allows IT staff to make changes and reroute connections easily without running new, long cables.",
        },
        {
          id: "c",
          text: "It requires less physical hardware, saving significant upfront costs.",
        },
        {
          id: "d",
          text: "It bridges the gap between the server rack and the core switch cleanly.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D describe the organizational and maintenance benefits of patch panels.",
        incorrect: {
          c: "Incorrect — It actually requires MORE physical hardware (the panels themselves), but the investment pays off in organization.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "From a security and environmental standpoint, what principles should guide the 'Site Selection' of a new server room?",
      options: [
        {
          id: "a",
          text: "It should be located in the most visible area of the office to showcase the technology.",
        },
        {
          id: "b",
          text: "It should be positioned strictly away from exterior walls and windows to minimize unauthorized access.",
        },
        {
          id: "c",
          text: "It must be situated in an area deemed safe from potential flooding, fires, or explosions.",
        },
        {
          id: "d",
          text: "It should avoid noise-sensitive areas because server cooling systems generate significant operational noise.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D are standard risk-mitigation principles for site selection.",
        incorrect: {
          a: "Incorrect — A server room should be discreet and secured, not showcased in highly visible, trafficked areas.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "What is the security reasoning behind the structural requirement that server room walls must extend from the solid floor to the true ceiling?",
      options: [
        {
          id: "a",
          text: "To completely seal the room, ensuring precise environmental climate control is maintained.",
        },
        {
          id: "b",
          text: "To prevent intruders from bypassing locked doors by crawling over suspended drop ceilings.",
        },
        {
          id: "c",
          text: "To prevent intruders from sliding underneath raised access floors.",
        },
        {
          id: "d",
          text: "To visually distinguish the server room boundaries from standard office drywall.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C explain the physical security and environmental containment concepts.",
        incorrect: {
          d: "Incorrect — The purpose is security and containment, not visual aesthetics.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "When planning the 'Room Space' for a server environment, what long-term and operational factors must be considered?",
      options: [
        {
          id: "a",
          text: "Designing the layout solely based on the current year's hardware to minimize wasted space.",
        },
        {
          id: "b",
          text: "Incorporating sufficient physical clearance around racks to allow safe access for maintenance personnel.",
        },
        {
          id: "c",
          text: "Allocating adequate square footage to accommodate foreseeable future business growth.",
        },
        {
          id: "d",
          text: "Ensuring proper vertical spacing, such as deep raised floors, to manage extensive cabling and underfloor cooling.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D emphasize the concepts of maintenance access, scalability, and infrastructure management.",
        incorrect: {
          a: "Incorrect — Designing solely for the current year ignores the critical principle of planning for foreseeable growth.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "Why are electronic locks, card readers, or biometrics heavily preferred over traditional keys for server room access?",
      options: [
        {
          id: "a",
          text: "Traditional keys can be easily duplicated without the organization's knowledge.",
        },
        {
          id: "b",
          text: "Electronic systems provide an auditable log of exactly who entered the room and when.",
        },
        {
          id: "c",
          text: "Electronic systems allow access privileges to be instantly revoked if an employee is terminated.",
        },
        {
          id: "d",
          text: "Traditional keys are immune to power outages, making them inherently superior.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C explain the security and tracking advantages of electronic access control.",
        incorrect: {
          d: "Incorrect — While traditional keys work without power, the lack of auditing and risk of duplication make them inferior for high-security server rooms. Electronic locks usually fail-secure or fail-safe depending on safety codes.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "What is the strategic purpose of mandating visitor logs, ID badges, and personnel escorts within a server room?",
      options: [
        {
          id: "a",
          text: "To establish strict accountability and a traceable chain of events if an incident occurs.",
        },
        {
          id: "b",
          text: "To ensure unauthorized individuals cannot perform malicious acts or accidental damage while unsupervised.",
        },
        {
          id: "c",
          text: "To give IT staff an opportunity to train external visitors on server maintenance tasks.",
        },
        {
          id: "d",
          text: "To act as a deterrent against internal espionage or sabotage.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D reflect the security posture achieved through strict visitor monitoring.",
        incorrect: {
          c: "Incorrect — Visitors are monitored to prevent incidents, not to be trained by IT staff.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "How do Emergency Response Procedures prioritize safety and data integrity in a server room?",
      options: [
        {
          id: "a",
          text: "By ensuring an Emergency Power-Off (EPO) switch is clearly labeled for rapid use during critical hazards like fire.",
        },
        {
          id: "b",
          text: "By posting clear, visible response procedures so personnel know exactly how to react in a crisis.",
        },
        {
          id: "c",
          text: "By configuring systems for automatic, graceful shutdowns before backup power completely depletes, protecting data.",
        },
        {
          id: "d",
          text: "By keeping emergency protocols strictly confidential to prevent hackers from knowing the defense strategy.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C detail conceptual emergency procedures aimed at safety and minimizing data corruption.",
        incorrect: {
          d: "Incorrect — Emergency physical safety protocols must be visibly posted for all personnel, not kept confidential.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "Conceptually, why is the 'Hot Aisle/Cold Aisle' layout considered an essential cooling standard?",
      options: [
        {
          id: "a",
          text: "It intentionally mixes hot exhaust and cold supply air to maintain an average room temperature.",
        },
        {
          id: "b",
          text: "It optimizes airflow by completely separating the cold air drawn in by servers from the hot air exhausted out.",
        },
        {
          id: "c",
          text: "It drastically increases the efficiency of the cooling systems by preventing the recirculation of hot air.",
        },
        {
          id: "d",
          text: "It directs cold air to the front of the equipment racks and collects hot air from the rear.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D conceptually explain how hot/cold aisle containment functions efficiently.",
        incorrect: {
          a: "Incorrect — The entire purpose of the design is to PREVENT the mixing of hot and cold air.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "Why are clean-agent suppression systems (e.g., FM-200, CO2) mandated over standard water sprinklers in server rooms?",
      options: [
        {
          id: "a",
          text: "Clean agents extinguish fires quickly without leaving residue that would short-circuit sensitive electronics.",
        },
        {
          id: "b",
          text: "Water-based systems cause catastrophic, irreversible damage to electrical hardware.",
        },
        {
          id: "c",
          text: "Clean agents are significantly cheaper to refill than a municipal water line.",
        },
        {
          id: "d",
          text: "Water introduces extreme electrical shock hazards to personnel working near the servers.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D explain the technical and safety reasoning behind fire suppression choices.",
        incorrect: {
          c: "Incorrect — Clean agents are typically much more expensive than water, but the hardware preservation makes the cost necessary.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "What is the strategic rationale behind elevating hardware and using targeted water sensors for flood protection?",
      options: [
        {
          id: "a",
          text: "Water sensors placed near A/C condensers provide early detection of internal plumbing leaks before damage occurs.",
        },
        {
          id: "b",
          text: "Elevating equipment on raised floors physically separates critical electrical components from pooling water.",
        },
        {
          id: "c",
          text: "Water sensors automatically deploy water-based fire suppression systems in case of overheating.",
        },
        {
          id: "d",
          text: "Drainage systems implemented beneath raised floors help safely channel water away from the infrastructure.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D correctly state the conceptual goals of flood protection.",
        incorrect: {
          c: "Incorrect — Water sensors are meant to detect leaks to prevent damage, not to trigger water-based fire suppression (which is not used in server rooms).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "Conceptually, how does a 'Critical Alert' differ from a 'Non-Critical Alert' in server room monitoring?",
      options: [
        {
          id: "a",
          text: "Critical alerts signify an immediate threat to operations and require instant intervention.",
        },
        {
          id: "b",
          text: "Non-critical alerts typically indicate degraded states or routine maintenance needs that don't cause immediate downtime.",
        },
        {
          id: "c",
          text: "A UPS total failure represents a critical alert, whereas a UPS minor battery fault is non-critical.",
        },
        {
          id: "d",
          text: "Non-critical alerts are completely ignored by the system and are never logged.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C accurately explain the conceptual distinction between alert severities.",
        incorrect: {
          d: "Incorrect — Non-critical alerts are logged and monitored for maintenance scheduling; they are not ignored.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "What is the foundational philosophy behind 'Condition Based Maintenance (CBM)'?",
      options: [
        {
          id: "a",
          text: "Maintenance operations are dictated by strict, unchangeable calendar dates.",
        },
        {
          id: "b",
          text: "Maintenance is triggered by specific indicators showing that equipment performance is actively degrading.",
        },
        {
          id: "c",
          text: "It aims to replace hardware only when empirical evidence dictates intervention is necessary, avoiding premature replacement.",
        },
        {
          id: "d",
          text: "It operates on the principle of letting the machine run until it completely fails.",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C correctly capture the philosophy of reading conditions/indicators to perform maintenance.",
        incorrect: {
          a: "Incorrect — Operating on strict calendar dates is the philosophy of Planned Preventive Maintenance.",
          d: "Incorrect — Operating until failure is a run-to-failure approach, not condition-based.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "Conceptually, when is 'Corrective Maintenance' applied in a server room environment?",
      options: [
        {
          id: "a",
          text: "It is applied proactively to prevent an issue from occurring.",
        },
        {
          id: "b",
          text: "It is applied to identify, isolate, and rectify a fault that has already occurred.",
        },
        {
          id: "c",
          text: "It is utilized to restore a failed piece of equipment back to its normal operating condition.",
        },
        {
          id: "d",
          text: "It is deployed when a system unexpectedly breaks down and operational normality must be recovered.",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D describe the reactive, restorative nature of Corrective Maintenance.",
        incorrect: {
          a: "Incorrect — Corrective maintenance is inherently reactive (fixing what is broken), not proactive.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "What strategic purpose does 'Planned Preventive Maintenance (PPM)' serve?",
      options: [
        {
          id: "a",
          text: "It relies on scheduled, systematic inspections to detect incipient failures before they develop into major defects.",
        },
        {
          id: "b",
          text: "It ensures equipment is serviced regularly to decrease the statistical likelihood of an unexpected breakdown.",
        },
        {
          id: "c",
          text: "It provides a predictable framework for budgeting and scheduling downtime for necessary upkeep.",
        },
        {
          id: "d",
          text: "It waits for real-time sensor alerts to tell staff when to perform the maintenance.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C accurately reflect the conceptual benefits and operations of scheduled preventive maintenance.",
        incorrect: {
          d: "Incorrect — Waiting for real-time sensor alerts is the basis of Predictive/Condition-based maintenance, not planned scheduled maintenance.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "Why is 'Predictive Maintenance (PdM)' often considered more cost-effective than routine time-based maintenance?",
      options: [
        {
          id: "a",
          text: "Because maintenance tasks are only performed when warranted by the actual condition of the equipment.",
        },
        {
          id: "b",
          text: "Because it prevents perfectly healthy components from being replaced prematurely due to arbitrary schedules.",
        },
        {
          id: "c",
          text: "Because it utilizes condition-monitoring techniques to foresee failures, preventing costly emergency outages.",
        },
        {
          id: "d",
          text: "Because it entirely eliminates the need for IT personnel.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C explain the cost-saving logic of predicting failure over blindly following a schedule.",
        incorrect: {
          d: "Incorrect — It does not eliminate IT personnel; rather, it allows them to work more efficiently based on data.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "What is the overarching concept of 'Total Productive Maintenance (TPM)'?",
      options: [
        {
          id: "a",
          text: "It is a holistic system aimed at improving the integrity of production and quality systems.",
        },
        {
          id: "b",
          text: "It views maintenance not just as a repair function, but as a way to add business value.",
        },
        {
          id: "c",
          text: "It exclusively focuses on software patch management.",
        },
        {
          id: "d",
          text: "It integrates machines, processes, and employee involvement to optimize server room operations.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D define the holistic, value-adding philosophy of TPM.",
        incorrect: {
          c: "Incorrect — TPM integrates physical machines, processes, and employees; it is not restricted to software patching.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "When assessing the 'Best Practices' for server room management, how do the various required elements interrelate?",
      options: [
        {
          id: "a",
          text: "Physical security controls ensure that the highly sensitive cooling and power systems are not tampered with.",
        },
        {
          id: "b",
          text: "Continuous monitoring systems tie together environmental controls and power systems by providing real-time alerts.",
        },
        {
          id: "c",
          text: "Power redundancy ensures that environmental controls (like A/C) remain active during a grid failure to prevent rapid overheating.",
        },
        {
          id: "d",
          text: "Each practice operates entirely in a silo and does not impact the effectiveness of the others.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C conceptually explain how security, monitoring, power, and cooling rely on one another to form a comprehensive defense.",
        incorrect: {
          d: "Incorrect — Best practices are highly interdependent; a failure in power disables cooling, which quickly leads to hardware failure.",
        },
      },
    },
  ],
};
