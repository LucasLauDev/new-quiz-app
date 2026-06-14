import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic10: Quiz = {
  id: "sysadmin-topic-10",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-10",
  title: "Topic 10 - Max business software benefits",
  questions: [
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q1",
    "text": "An organization heavily depends on its IT systems for daily operations. If a sudden disruption occurs, what are the potential consequences that the organization may face? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Data loss" },
      { "id": "b", "text": "Financial loss" },
      { "id": "c", "text": "Service interruption" },
      { "id": "d", "text": "Reputation damage" },
      { "id": "e", "text": "Immediate improvement in system security" }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "Disruptions to IT systems, which are crucial for communication, data storage, and online services, can cause data loss, financial loss, service interruption, and reputation damage.",
      "incorrect": {
        "e": "Incorrect. A disruption causes failure and loss, not an immediate improvement in security."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q2",
    "text": "When evaluating the implementation of a Full Backup strategy for an organization's dataset, what are the key process characteristics, pros, and cons that should be documented? (Select all that apply)",
    "options": [
      { "id": "a", "text": "The entire dataset is copied every time, creating a complete snapshot." },
      { "id": "b", "text": "It is simpler to manage and restore because all data is in one set." },
      { "id": "c", "text": "It is highly reliable and less prone to failure since each backup is standalone." },
      { "id": "d", "text": "It requires significant storage capacity compared to other backup types." },
      { "id": "e", "text": "It is the fastest backup method to execute on a daily basis." },
      { "id": "f", "text": "It takes longer to perform than other types of backups." }
    ],
    "correctOptionIds": ["a", "b", "c", "d", "f"],
    "explanation": {
      "correct": "A full backup captures every file and folder, making it simple to restore and reliable as it is standalone. However, it requires significant storage and takes longer to perform.",
      "incorrect": {
        "e": "Incorrect. A full backup is time-consuming, not the fastest method to execute."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q3",
    "text": "A system administrator is tasked with justifying the use of Incremental Backups. What specific points describe the process, advantages, and disadvantages of this strategy? (Select all that apply)",
    "options": [
      { "id": "a", "text": "It saves only the data that has changed since the last backup." },
      { "id": "b", "text": "It uses less storage space than full backups." },
      { "id": "c", "text": "It takes less time to complete after an initial full backup." },
      { "id": "d", "text": "Restoring data only requires the last full backup and the most recent incremental backup." },
      { "id": "e", "text": "Restoring data requires the last full backup and all subsequent incremental backups, increasing complexity." },
      { "id": "f", "text": "Each incremental backup depends on the ones before it, which increases the cumulative risk if one fails." }
    ],
    "correctOptionIds": ["a", "b", "c", "e", "f"],
    "explanation": {
      "correct": "Incremental backups save only changes since the last backup, making them faster and more storage-efficient. However, recovery requires the full backup and all incremental backups, creating cumulative risk.",
      "incorrect": {
        "d": "Incorrect. This describes a differential backup restoration. Incremental requires ALL subsequent incremental backups, not just the most recent one."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q4",
    "text": "How does a Differential Backup operate, and what are its specific trade-offs when compared to incremental and full backups? (Select all that apply)",
    "options": [
      { "id": "a", "text": "It backs up changes made since the last full backup, not just since the last incremental." },
      { "id": "b", "text": "Restoration is simpler than incremental because it only needs the last full backup and the last differential backup." },
      { "id": "c", "text": "It uses less storage than conducting full backups each time." },
      { "id": "d", "text": "It requires more storage than incremental backups as more data accumulates over time." },
      { "id": "e", "text": "It takes longer to complete than incremental backups as data changes accumulate." },
      { "id": "f", "text": "It eliminates the need to ever perform a full backup." }
    ],
    "correctOptionIds": ["a", "b", "c", "d", "e"],
    "explanation": {
      "correct": "Differential backups capture changes since the last full backup. They use less storage than full backups but more than incremental, and are slower than incremental but faster to restore.",
      "incorrect": {
        "f": "Incorrect. Differential backups inherently rely on a starting full backup."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q5",
    "text": "An organization is auditing its data resilience based on the 3-2-1 Rule. Which of the following strict requirements must be fulfilled to comply with this rule? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Maintain exactly 3 copies of data." },
      { "id": "b", "text": "Store data across at least 3 different geographical locations." },
      { "id": "c", "text": "Utilize 2 different storage media." },
      { "id": "d", "text": "Keep 1 offsite backup." },
      { "id": "e", "text": "Perform backups 3 times a day." }
    ],
    "correctOptionIds": ["a", "c", "d"],
    "explanation": {
      "correct": "The 3-2-1 Rule mandates 3 copies of data, 2 storage media, and 1 offsite backup.",
      "incorrect": {
        "b": "Incorrect. The rule requires 1 offsite backup, not 3 different geographical locations.",
        "e": "Incorrect. The rule dictates the structure of backups, not the daily frequency."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q6",
    "text": "Aside from structural backup rules, what are the operational best practices for maintaining effective backup strategies within an organization? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Schedule automatic backups." },
      { "id": "b", "text": "Verify backup integrity." },
      { "id": "c", "text": "Store backups securely." },
      { "id": "d", "text": "Test restoration regularly." },
      { "id": "e", "text": "Keep all backup servers publicly accessible for faster remote recovery." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "Best practices include scheduling automatic backups, verifying their integrity, storing them securely, and regularly testing the restoration process.",
      "incorrect": {
        "e": "Incorrect. Backups must be stored securely; public accessibility violates basic security principles."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q7",
    "text": "When formulating an incident response, how should the primary goals and characteristics of Disaster Recovery (DR) be defined? (Select all that apply)",
    "options": [
      { "id": "a", "text": "It focuses on restoring IT systems, networks, and data after a disaster." },
      { "id": "b", "text": "It aims to minimize downtime and recover systems quickly." },
      { "id": "c", "text": "It is a proactive approach focused on maintaining staff operations." },
      { "id": "d", "text": "It is a reactive approach and a technical recovery process." },
      { "id": "e", "text": "It is primarily concerned with overall business survival rather than IT infrastructure." }
    ],
    "correctOptionIds": ["a", "b", "d"],
    "explanation": {
      "correct": "DR is the reactive, technical process of restoring IT systems, data, and infrastructure quickly to minimize downtime.",
      "incorrect": {
        "c": "Incorrect. This describes BCP, which is proactive and focuses on staff/operations.",
        "e": "Incorrect. Overall business survival is the concern of BCP, whereas DR is explicitly concerned with data and infrastructure."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q8",
    "text": "Which of the following statements accurately outline the focus areas and characteristics of Business Continuity Planning (BCP)? (Select all that apply)",
    "options": [
      { "id": "a", "text": "It is a strategy ensuring business operations continue during and after disruptions." },
      { "id": "b", "text": "It focuses on staff operations, communication, and alternative working methods." },
      { "id": "c", "text": "It is exclusively a technical recovery process for damaged servers." },
      { "id": "d", "text": "It represents a proactive approach and organizational continuity strategy." },
      { "id": "e", "text": "It focuses on ensuring critical business functions remain operational." }
    ],
    "correctOptionIds": ["a", "b", "d", "e"],
    "explanation": {
      "correct": "BCP is a proactive organizational strategy focusing on overall business survival, including staff operations, communication, alternative working methods, and critical business functions.",
      "incorrect": {
        "c": "Incorrect. BCP is an organizational strategy; the technical recovery of servers is Disaster Recovery (DR)."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q9",
    "text": "During a risk assessment phase, management conducts a Business Impact Analysis (BIA). What are the main objectives of this analysis? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Identify critical systems." },
      { "id": "b", "text": "Estimate financial and operational losses." },
      { "id": "c", "text": "Determine recovery priorities." },
      { "id": "d", "text": "Manually repair failed hard drives." },
      { "id": "e", "text": "Write the source code for new security firewalls." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "BIA is a process used to identify critical business functions, estimate losses, and determine recovery priorities.",
      "incorrect": {
        "d": "Incorrect. Repairing hardware is a technical fault management task, not a BIA objective.",
        "e": "Incorrect. Coding firewalls is not part of business impact analysis."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q10",
    "text": "A BIA concludes that a specific Financial Database has a 'High' impact if failed. Based on BIA principles, what corresponding requirements must be assigned to this system? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Faster recovery requirements." },
      { "id": "b", "text": "More frequent backups." },
      { "id": "c", "text": "Higher security protection." },
      { "id": "d", "text": "Lower priority in the recovery queue." },
      { "id": "e", "text": "Less strict access controls." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "Systems with higher impact require faster recovery, more frequent backups, and higher security protection.",
      "incorrect": {
        "d": "Incorrect. High impact systems are given higher priority, not lower.",
        "e": "Incorrect. They require higher security protection, meaning stricter access controls."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q11",
    "text": "Risk Assessment is a critical component of a Disaster Recovery Plan. What specific activities help administrators understand what can go wrong and assess the impact? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Identifying critical IT assets like servers, databases, and network devices." },
      { "id": "b", "text": "Identifying internal and external threats." },
      { "id": "c", "text": "Identifying vulnerabilities such as weak passwords or outdated systems." },
      { "id": "d", "text": "Evaluating the likelihood of occurrence for potential threats." },
      { "id": "e", "text": "Assessing the potential impact level (low, medium, high)." }
    ],
    "correctOptionIds": ["a", "b", "c", "d", "e"],
    "explanation": {
      "correct": "Risk assessment involves systematically identifying assets, threats, vulnerabilities, evaluating likelihood, and assessing potential impact.",
      "incorrect": {}
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q12",
    "text": "When categorizing common threats in a Disaster Recovery Plan, which of the following accurately map the threat category to its corresponding example and impact? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Hardware Failure: Disk crash, leading to data loss." },
      { "id": "b", "text": "Malware Attacks: Ransomware, resulting in encrypted files." },
      { "id": "c", "text": "Network Attacks: DDoS or unauthorized access, causing service disruption." },
      { "id": "d", "text": "Human Error: Accidental deletion or misconfiguration." },
      { "id": "e", "text": "Natural Disasters: Phishing and spyware." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "Hardware failures, malware attacks, network attacks, and human errors correctly map to their examples and impacts.",
      "incorrect": {
        "e": "Incorrect. Phishing and spyware are network/malware attacks, not natural disasters. Natural disasters include floods, fire, and lightning strikes."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q13",
    "text": "Within the Backup and Recovery Procedures component of a DR plan, what structured workflows must be included to ensure systems are restored within acceptable time limits? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Step-by-step system restoration process." },
      { "id": "b", "text": "Data retrieval from backup repositories." },
      { "id": "c", "text": "Server reconfiguration and redeployment." },
      { "id": "d", "text": "Network service restoration including DNS, firewall, and routing." },
      { "id": "e", "text": "Negotiating legal contracts with public cloud vendors." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "Recovery procedures include step-by-step restoration, data retrieval, server reconfiguration, and network service restoration to ensure minimal downtime.",
      "incorrect": {
        "e": "Incorrect. Negotiating legal contracts is an administrative procurement task, not a technical recovery procedure."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q14",
    "text": "A robust Backup Procedure must outline specific scheduling and storage mechanisms. Which of the following correctly represent the recommended backup scheduling practices? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Daily incremental backups to capture frequent changes." },
      { "id": "b", "text": "Weekly full backups to capture a complete system snapshot." },
      { "id": "c", "text": "Monthly archival backups for long-term storage." },
      { "id": "d", "text": "Daily full backups to avoid using any incremental backups." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "Standard backup scheduling includes daily incremental backups, weekly full backups, and monthly archival backups.",
      "incorrect": {
        "d": "Incorrect. Daily full backups are extremely storage-intensive and time-consuming, contradicting best practice scheduling which utilizes daily incremental backups."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q15",
    "text": "Why is the Testing and Maintenance component essential in a Disaster Recovery Plan, and what activities must it involve? (Select all that apply)",
    "options": [
      { "id": "a", "text": "A DR plan that is not tested is considered unreliable." },
      { "id": "b", "text": "It involves tabletop exercises, live recovery drills, and partial system restoration tests." },
      { "id": "c", "text": "It involves backup verification such as checking file integrity and testing restore processes." },
      { "id": "d", "text": "It ensures recovery procedures actually work under real conditions." },
      { "id": "e", "text": "It eliminates the need to ever perform hardware upgrades." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "Testing and maintenance are crucial because untested plans are unreliable. Activities include DR testing (drills, tabletop), backup verification, and ensuring procedures work.",
      "incorrect": {
        "e": "Incorrect. Testing a DR plan does not eliminate the need for hardware upgrades."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q16",
    "text": "As part of the Testing and Maintenance phase, administrators must execute 'Plan Maintenance'. Which actions are classified under this specific activity? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Updating DR documentation regularly." },
      { "id": "b", "text": "Adding new systems and applications to the plan." },
      { "id": "c", "text": "Removing outdated procedures from the plan." },
      { "id": "d", "text": "Executing live system failover testing." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "Plan Maintenance involves keeping the document current by updating documentation, adding new systems, and removing outdated procedures.",
      "incorrect": {
        "d": "Incorrect. Live system failover testing is categorized under 'Disaster Recovery Testing', not specifically 'Plan Maintenance'."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q17",
    "text": "A comprehensive Disaster Recovery Strategy consists of Backup, Recovery, and Security measures. Which of the following are explicitly listed as part of the 'Recovery Strategy' and 'Security Measures'? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Standby backup server." },
      { "id": "b", "text": "Failover internet connection." },
      { "id": "c", "text": "Remote recovery procedures." },
      { "id": "d", "text": "Encryption and Firewall protection." },
      { "id": "e", "text": "Multi-factor authentication." },
      { "id": "f", "text": "Daily incremental backup." }
    ],
    "correctOptionIds": ["a", "b", "c", "d", "e"],
    "explanation": {
      "correct": "Recovery Strategy includes standby servers, failover internet, and remote procedures. Security measures include encryption, firewalls, and MFA.",
      "incorrect": {
        "f": "Incorrect. Daily incremental backup is part of the 'Backup Strategy', not Recovery or Security measures."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q18",
    "text": "When configuring a system's resilience metrics, how should Recovery Time Objective (RTO) be defined and evaluated? (Select all that apply)",
    "options": [
      { "id": "a", "text": "It is the maximum acceptable downtime." },
      { "id": "b", "text": "It is the maximum acceptable time an IT system, service, or application can be down before it must be restored." },
      { "id": "c", "text": "It focuses strictly on downtime tolerance." },
      { "id": "d", "text": "It measures how fast systems must be recovered." },
      { "id": "e", "text": "It represents the maximum acceptable amount of data loss." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "RTO focuses on downtime tolerance, measuring the maximum acceptable downtime and how fast a system must be recovered.",
      "incorrect": {
        "e": "Incorrect. The maximum acceptable amount of data loss defines RPO (Recovery Point Objective), not RTO."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q19",
    "text": "To prevent permanent transactional loss during a crash, a company sets a strict Recovery Point Objective (RPO). What does RPO represent in a disaster recovery framework? (Select all that apply)",
    "options": [
      { "id": "a", "text": "The maximum acceptable amount of data loss." },
      { "id": "b", "text": "It is measured in time, representing the data loss after a disaster occurs." },
      { "id": "c", "text": "It focuses on data loss tolerance." },
      { "id": "d", "text": "It determines the required backup frequency." },
      { "id": "e", "text": "It determines how quickly a physical server must be replaced." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "RPO focuses on data loss tolerance, measuring the maximum acceptable data loss in time, which inherently determines how often backups must occur.",
      "incorrect": {
        "e": "Incorrect. How quickly a server is replaced relates to downtime and RTO, not the data loss metric of RPO."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q20",
    "text": "What are the core responsibilities of a System Administrator when managing Disaster Recovery and Business Continuity Planning? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Maintain backup systems by configuring and monitoring backups." },
      { "id": "b", "text": "Implement security measures such as firewalls, encryption, and access control." },
      { "id": "c", "text": "Monitor system availability to detect failures early." },
      { "id": "d", "text": "Conduct recovery testing to ensure procedures work properly." },
      { "id": "e", "text": "Maintain updated DR and BCP documentation." }
    ],
    "correctOptionIds": ["a", "b", "c", "d", "e"],
    "explanation": {
      "correct": "A System Administrator is responsible for maintaining backups, implementing security, monitoring availability, conducting testing, and maintaining documentation.",
      "incorrect": {}
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q21",
    "text": "Under the ethical responsibility of 'Confidentiality', what specific duties must a system administrator uphold regarding organizational data? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Protect sensitive user and organizational information from unauthorized access." },
      { "id": "b", "text": "Protect passwords and credentials." },
      { "id": "c", "text": "Restrict unauthorized access." },
      { "id": "d", "text": "Secure confidential files." },
      { "id": "e", "text": "Do not disclose student or employee records without permission." }
    ],
    "correctOptionIds": ["a", "b", "c", "d", "e"],
    "explanation": {
      "correct": "Confidentiality requires protecting sensitive data, securing credentials, restricting access, and preventing unauthorized disclosure of records.",
      "incorrect": {}
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q22",
    "text": "System administrators possess elevated privileges. To adhere to the ethical principle of 'Accountability', what actions are required? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Be responsible for their actions and system activities." },
      { "id": "b", "text": "Maintain activity logs and track user login/administrative actions." },
      { "id": "c", "text": "Follow organizational policies." },
      { "id": "d", "text": "Accept responsibility for changes made to the system." },
      { "id": "e", "text": "Modify log files silently to cover up accidental errors." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "Accountability demands maintaining logs, following policies, tracking activities, and accepting responsibility for actions.",
      "incorrect": {
        "e": "Incorrect. Modifying log files violates both Accountability and Integrity."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q23",
    "text": "To uphold the ethical responsibility of 'Integrity', what must a system administrator ensure within the IT infrastructure? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Ensure data and systems remain accurate, consistent, and trustworthy." },
      { "id": "b", "text": "Prevent unauthorized modification of records." },
      { "id": "c", "text": "Maintain accurate records." },
      { "id": "d", "text": "Ensure reliable system performance." },
      { "id": "e", "text": "Prevent tampering of examination or financial records." }
    ],
    "correctOptionIds": ["a", "b", "c", "d", "e"],
    "explanation": {
      "correct": "Integrity involves ensuring accuracy, preventing unauthorized modifications/tampering, and maintaining reliable performance.",
      "incorrect": {}
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q24",
    "text": "Based on the Ransomware Attack case study at the university, which specific vulnerabilities contributed heavily to the success and impact of the attack? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Backups were performed too infrequently, only once every two weeks." },
      { "id": "b", "text": "Backup files were improperly stored on the same infected server." },
      { "id": "c", "text": "There was no regular disaster recovery testing conducted." },
      { "id": "d", "text": "Staff members used weak passwords without multi-factor authentication." },
      { "id": "e", "text": "The university utilized excessively strong encryption for their HR databases." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "The university was vulnerable due to infrequent backups, poor storage practices (backups on infected server), lack of DR testing, and weak authentication.",
      "incorrect": {
        "e": "Incorrect. Strong encryption of HR databases would be a protective measure, not a vulnerability."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q25",
    "text": "In evaluating an organizational crisis, how should an administrator differentiate between Disaster Recovery (DR) and Business Continuity Planning (BCP)? (Select all that apply)",
    "options": [
      { "id": "a", "text": "DR focuses on technical recovery of systems, networks, and servers." },
      { "id": "b", "text": "DR is mainly a reactive process to reduce downtime." },
      { "id": "c", "text": "BCP is a proactive, organizational strategy concerned with overall business survival." },
      { "id": "d", "text": "BCP includes non-technical aspects like staff operations, communication, and alternative working methods." },
      { "id": "e", "text": "DR focuses on identifying alternative manual working methods for staff." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "DR is technical and reactive, focusing on IT systems. BCP is proactive and organizational, focusing on staff, communication, and business survival.",
      "incorrect": {
        "e": "Incorrect. Identifying alternative working methods is a component of BCP, not DR."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q26",
    "text": "Following a data loss incident, an IT team must propose a new backup strategy. Why is a combination of weekly Full Backups and daily Incremental Backups considered a highly suitable recommendation? (Select all that apply)",
    "options": [
      { "id": "a", "text": "A full backup provides a complete and reliable snapshot of all data." },
      { "id": "b", "text": "Performing a full backup daily is highly inefficient, time-consuming, and storage-intensive." },
      { "id": "c", "text": "Daily incremental backups are much faster because they only save data changed since the last backup." },
      { "id": "d", "text": "Incremental backups use less storage space for daily operations." },
      { "id": "e", "text": "Incremental backups do not require a full backup to restore the system." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "Combining weekly full backups with daily incremental backups balances the reliability of a complete snapshot with the speed and storage efficiency of daily changes.",
      "incorrect": {
        "e": "Incorrect. Incremental backups absolutely require the last full backup to restore the system."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q27",
    "text": "How does implementing the 3-2-1 backup rule specifically help prevent permanent data loss during a severe incident like a localized ransomware attack or physical server destruction? (Select all that apply)",
    "options": [
      { "id": "a", "text": "It ensures redundancy by having 3 copies of the data." },
      { "id": "b", "text": "It separates data dependencies by using 2 different storage media." },
      { "id": "c", "text": "If local servers and local backups are infected or destroyed, the 1 offsite backup remains safe and accessible." },
      { "id": "d", "text": "It automatically decrypts files encrypted by ransomware." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "The 3-2-1 rule provides redundancy and physical/logical separation, ensuring that even if local infrastructure is completely compromised, an offsite copy survives.",
      "incorrect": {
        "d": "Incorrect. Backups do not decrypt files; they replace the encrypted files with unencrypted older copies."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q28",
    "text": "A university sets an RTO of 4 hours and an RPO of 1 hour. What is the practical meaning of these metrics in the event of a system failure? (Select all that apply)",
    "options": [
      { "id": "a", "text": "The IT systems and services must be completely restored within 4 hours after a failure occurs." },
      { "id": "b", "text": "4 hours represents the maximum acceptable downtime." },
      { "id": "c", "text": "The university can only afford to lose a maximum of 1 hour of data or transactions." },
      { "id": "d", "text": "1 hour represents the maximum acceptable amount of data loss, measured in time." },
      { "id": "e", "text": "The system must be backed up every 4 hours." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "RTO (4 hours) sets the deadline for restoring systems (max downtime). RPO (1 hour) sets the limit on acceptable data loss, meaning backups must be frequent enough so no more than 1 hour of data is lost.",
      "incorrect": {
        "e": "Incorrect. The RPO is 1 hour, meaning backups must likely occur at least every hour, not every 4 hours. 4 hours is the RTO."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q29",
    "text": "To secure its network after an attack, an organization must implement preventive security measures. Which of the following are recommended actions? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Implement multi-factor authentication to reduce risks from stolen passwords." },
      { "id": "b", "text": "Strengthen password and access control policies based on user roles." },
      { "id": "c", "text": "Use firewall protection, encryption, and anti-malware monitoring." },
      { "id": "d", "text": "Disable all backup systems to prevent attackers from finding them." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "Preventive measures include MFA, strong role-based access control, firewalls, encryption, and anti-malware monitoring to block cyberattacks.",
      "incorrect": {
        "d": "Incorrect. Disabling backups would guarantee permanent data loss in the event of an attack."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q30",
    "text": "Based on the E-Commerce flood case study, what direct impacts did the natural disaster have on the company's IT operations? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Server shutdowns." },
      { "id": "b", "text": "Network failure." },
      { "id": "c", "text": "Loss of access to customer orders." },
      { "id": "d", "text": "Communication disruption among employees." },
      { "id": "e", "text": "Immediate improvement in application loading speeds." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "The flood physically damaged the data center, directly causing server shutdowns, network failure, loss of data access, and communication disruptions.",
      "incorrect": {
        "e": "Incorrect. A flood causes system failure, not performance improvements."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q31",
    "text": "Why is performing a Business Impact Analysis (BIA) an essential preparatory step for business continuity, particularly for a large e-commerce entity? (Select all that apply)",
    "options": [
      { "id": "a", "text": "It systematically identifies critical business functions." },
      { "id": "b", "text": "It evaluates the impact of system disruptions." },
      { "id": "c", "text": "It helps estimate potential financial and operational losses from downtime." },
      { "id": "d", "text": "It determines recovery priorities and sets suitable RTO and RPO targets for different systems." },
      { "id": "e", "text": "It automatically restores systems when they fail." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "BIA is a strategic process to identify critical functions, evaluate impacts, estimate losses, and determine recovery targets (RTO/RPO) and priorities.",
      "incorrect": {
        "e": "Incorrect. BIA is an analysis and planning process; it does not automatically restore systems."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q32",
    "text": "When classifying system recovery priorities in an e-commerce BIA, how should different platforms be ranked and justified? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Online shopping portal is High Priority because it directly supports sales, payment transactions, and revenue generation." },
      { "id": "b", "text": "Email system is Medium Priority because disruptions impact internal operations but do not immediately halt direct revenue generation." },
      { "id": "c", "text": "HR management system is Low Priority because its failure primarily results in administrative delays rather than immediate loss of sales." },
      { "id": "d", "text": "HR management system is High Priority because payroll must be run hourly during a disaster." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "Systems directly tied to revenue (shopping portal) are High priority. Communication systems (email) are Medium priority. Back-office administration (HR) is Low priority because delays do not immediately cause direct financial loss.",
      "incorrect": {
        "d": "Incorrect. HR systems generally result in administrative delays and are classified as Low priority in immediate disaster recovery scenarios."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q33",
    "text": "To mitigate vulnerabilities exposed by localized hardware destruction, what components should an improved backup and recovery procedure include? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Daily incremental backups for frequent changes, supplemented by weekly full backups." },
      { "id": "b", "text": "Utilization of offsite storage or Cloud storage to ensure data survives physical disasters like floods." },
      { "id": "c", "text": "Defined step-by-step system restoration processes." },
      { "id": "d", "text": "Procedures for network service restoration and data retrieval from remote repositories." },
      { "id": "e", "text": "Storing all backups strictly on the primary local server for faster access." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "An improved procedure includes proper scheduling (daily inc/weekly full), offsite/cloud storage, and well-defined step-by-step restoration processes.",
      "incorrect": {
        "e": "Incorrect. Storing all backups on the primary local server ensures they will be destroyed along with the main data during a physical disaster."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q34",
    "text": "How do cloud storage replication and standby backup servers specifically improve an organization's disaster recovery capabilities? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Cloud replication keeps copies of data in a separate cloud environment, allowing retrieval even if the on-premise center is damaged." },
      { "id": "b", "text": "Standby backup servers allow the company to quickly redirect operations and switch over when the primary server fails." },
      { "id": "c", "text": "They help minimize downtime and meet strict Recovery Time Objective (RTO) targets." },
      { "id": "d", "text": "They prevent natural disasters from occurring." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "Cloud replication ensures offsite data survivability, and standby servers enable rapid failover, significantly reducing downtime and helping meet RTO targets.",
      "incorrect": {
        "d": "Incorrect. IT infrastructure cannot prevent natural disasters; it only mitigates their impact on business operations."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q35",
    "text": "What disaster recovery testing activities should be performed regularly to ensure readiness without unnecessarily disrupting daily operations? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Tabletop exercises involving simulated disaster scenario discussions and reviewing recovery steps." },
      { "id": "b", "text": "Live recovery drills or system failover testing to verify actual restoration capabilities." },
      { "id": "c", "text": "Partial system restoration tests." },
      { "id": "d", "text": "Unplugging the main power grid to the city to see if the UPS works." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "Regular DR testing should include tabletop simulation discussions, live failover drills, and partial restoration tests.",
      "incorrect": {
        "d": "Incorrect. Testing should be controlled. Unplugging the city's power grid is not a legitimate or safe IT testing procedure."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q36",
    "text": "During the Testing and Maintenance phase, administrators must focus on evaluating key recovery targets. What are these primary focus areas? (Select all that apply)",
    "options": [
      { "id": "a", "text": "System recovery time to ensure RTO compliance." },
      { "id": "b", "text": "Data recovery accuracy to ensure RPO compliance." },
      { "id": "c", "text": "Network service restoration." },
      { "id": "d", "text": "Communication procedures during failure." },
      { "id": "e", "text": "The aesthetic design of the user interface." }
    ],
    "correctOptionIds": ["a", "b", "c", "d"],
    "explanation": {
      "correct": "Testing focuses on ensuring RTO and RPO compliance, verifying network restoration, and confirming communication procedures work during a crisis.",
      "incorrect": {
        "e": "Incorrect. UI design is not a focus area of disaster recovery testing."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q37",
    "text": "What specific tasks fall under the 'Backup Verification' activity within the Testing and Maintenance component of a DR plan? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Checking backup file integrity." },
      { "id": "b", "text": "Testing restore processes." },
      { "id": "c", "text": "Ensuring data completeness." },
      { "id": "d", "text": "Updating the DR documentation manual." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "Backup verification specifically involves checking file integrity, testing the restore process, and ensuring the data is complete.",
      "incorrect": {
        "d": "Incorrect. Updating documentation falls under 'Plan Maintenance', not 'Backup Verification'."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q38",
    "text": "Which of the following correctly maps the concepts of Disaster Recovery (DR) and Business Continuity Planning (BCP) to their respective focus areas and examples? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Cyberattacks and server failures fall under the reactive focus of Disaster Recovery." },
      { "id": "b", "text": "Establishing alternative working methods for staff falls under Business Continuity Planning." },
      { "id": "c", "text": "Ensuring critical business functions survive falls under Business Continuity Planning." },
      { "id": "d", "text": "Restoring an email server from a backup falls under Business Continuity Planning." }
    ],
    "correctOptionIds": ["a", "b", "c"],
    "explanation": {
      "correct": "DR handles technical threats like cyberattacks/server failures. BCP handles organizational continuity like alternative workflows and critical business survival.",
      "incorrect": {
        "d": "Incorrect. Restoring a server from a backup is a technical recovery process, which falls under Disaster Recovery (DR)."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q39",
    "text": "To effectively allocate resources, an IT manager must understand the distinction between RTO and RPO. Which statements accurately describe these differences? (Select all that apply)",
    "options": [
      { "id": "a", "text": "RTO focuses on downtime tolerance, whereas RPO focuses on data loss tolerance." },
      { "id": "b", "text": "RTO measures how fast systems must be recovered, whereas RPO determines the required backup frequency." },
      { "id": "c", "text": "RTO is measured in gigabytes, whereas RPO is measured in hours." },
      { "id": "d", "text": "RTO dictates how much data can be lost, whereas RPO dictates how long the system can be offline." }
    ],
    "correctOptionIds": ["a", "b"],
    "explanation": {
      "correct": "RTO measures downtime tolerance and recovery speed. RPO measures data loss tolerance and dictates backup frequency.",
      "incorrect": {
        "c": "Incorrect. Both RTO and RPO are measured in time.",
        "d": "Incorrect. This statement reverses the definitions; RTO dictates offline time, RPO dictates data loss."
      }
    }
  },
  {
    "type": QuestionType.MULTIPLE_SELECT,
    "id": "ms-q40",
    "text": "Based on the post-incident review of the ransomware attack, what are the ongoing responsibilities of the system administrators? (Select all that apply)",
    "options": [
      { "id": "a", "text": "Configuring and monitoring backup systems to ensure they work properly." },
      { "id": "b", "text": "Implementing and managing security measures like firewalls and encryption." },
      { "id": "c", "text": "Conducting recovery testing to ensure restoration procedures function correctly." },
      { "id": "d", "text": "Maintaining updated DR and BCP documentation and activity logs." },
      { "id": "e", "text": "Reviewing the cause of the attack to identify and patch weaknesses." },
      { "id": "f", "text": "Deleting all historical logs to clear storage space." }
    ],
    "correctOptionIds": ["a", "b", "c", "d", "e"],
    "explanation": {
      "correct": "SysAdmins must monitor backups, manage security, conduct testing, maintain documentation/logs, and review attacks to identify weaknesses.",
      "incorrect": {
        "f": "Incorrect. Deleting historical logs violates the ethical responsibility of accountability and hinders forensic review."
      }
    }
  }
],
};
