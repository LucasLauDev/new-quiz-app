import { QuestionType, Quiz } from "@/app/types/quiz";

/**
 * Sample quiz for multiple-select (checkbox) questions.
 *
 * Structure per question:
 * - `text`: the question prompt
 * - `options`: answer choices (any count — not limited to 4)
 * - `correctOptionIds`: array of all correct option ids (one or more)
 * - `explanation.correct`: shown when the user selects the exact correct set
 * - `explanation.incorrect`: keyed by option id — shown inline on each
 *   option the user wrongly selected after checking
 */
export const sysadminTopic1: Quiz = {
  id: "sysadmin-topic-1",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-1",
  title: "Topic 1 - Introduction to System Administration",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Scenario: A multinational corporation is opening a new regional office. The IT department is tasked with preparing the digital workspace for 50 new employees. Which of the following actions correctly demonstrate the system administrator's task of 'Installing and configuring software'? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Deploying the authorized corporate operating system image onto the new laptops.",
        },
        {
          id: "b",
          text: "Setting up the physical desks and running power cables.",
        },
        {
          id: "c",
          text: "Loading the required productivity applications and ensuring they connect to the local server.",
        },
        {
          id: "d",
          text: "Designing a completely new custom database application from scratch.",
        },
        {
          id: "e",
          text: "Applying necessary initial license keys to the installed programs.",
        },
      ],
      correctOptionIds: ["a", "c", "e"],
      explanation: {
        correct:
          "Options A, C, and E are correct. Installing and configuring software involves loading operating systems, productivity applications, and applying licenses. Option B is a physical facility task, and Option D is a software development task, not standard system administration[cite: 3].",
        incorrect: {
          b: "Incorrect — Setting up physical desks is a facilities or general IT support task, not software installation.",
          d: "Incorrect — System administrators configure existing software; they do not typically program new software from scratch.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "Scenario: The Human Resources department notifies the IT team that a senior manager is resigning, and three new interns are joining the marketing team on Monday. How should the system administrator apply the 'Managing user accounts' task? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Creating new login credentials and setting up initial passwords for the three interns.",
        },
        {
          id: "b",
          text: "Deleting or disabling the exiting senior manager's account to prevent unauthorized access.",
        },
        {
          id: "c",
          text: "Assigning the interns to the appropriate user groups with restricted marketing access.",
        },
        {
          id: "d",
          text: "Reading the senior manager's personal emails before they leave.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Managing user accounts includes adding new users (interns), removing or disabling exiting users (manager), and configuring their access levels[cite: 4, 17].",
        incorrect: {
          d: "Incorrect — While admins have high privileges, reading personal emails without legal/HR directive violates ethical conduct and is not a routine account management task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Scenario: During the end-of-month financial closing, the accounting department complains that the enterprise database is responding extremely slowly, causing delays in generating reports. Which actions fall under 'Monitoring system performance'? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Checking the CPU and RAM utilization on the database server.",
        },
        {
          id: "b",
          text: "Buying brand new servers immediately to replace the slow ones.",
        },
        {
          id: "c",
          text: "Analyzing network traffic to see if there is a bottleneck slowing down database queries.",
        },
        {
          id: "d",
          text: "Reviewing system logs to identify any background processes consuming excessive resources.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Monitoring performance involves checking resource utilization (CPU/RAM), analyzing network traffic, and reviewing logs to diagnose slowness[cite: 5].",
        incorrect: {
          b: "Incorrect — Buying new servers is a procurement decision, not a monitoring task. Monitoring must happen first to identify the root cause.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "Scenario: A severe storm causes a massive power surge that damages several hard drives in the company's main data center. To recover the lost financial data, what 'Implementing data backup and recovery' actions must the sysadmin have performed or be doing? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Restoring the accounting databases from the offsite backup server.",
        },
        {
          id: "b",
          text: "Having routinely scheduled automated backups of critical files prior to the storm.",
        },
        {
          id: "c",
          text: "Replacing the damaged physical hard drives with new ones.",
        },
        {
          id: "d",
          text: "Ensuring the restored data is verified for integrity and completeness.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Backup and recovery involve creating routine backups, restoring data after a failure, and verifying the restoration[cite: 6, 15].",
        incorrect: {
          c: "Incorrect — Replacing the physical hard drives is a hardware replacement task, not the software/data aspect of 'backup and recovery'.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "Scenario: Following a news report about a global ransomware attack exploiting an old software vulnerability, the IT director orders the team to secure the company's perimeter. Which actions align with 'Ensuring security with updates and firewalls'? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Applying the latest security patches provided by the operating system vendor.",
        },
        {
          id: "b",
          text: "Configuring the perimeter firewall to block traffic from known malicious IP addresses.",
        },
        {
          id: "c",
          text: "Disabling the antivirus software to improve server speed.",
        },
        {
          id: "d",
          text: "Reviewing and updating firewall rules to close unnecessary open ports.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Ensuring security involves applying OS patches and actively managing firewall rules to block unauthorized traffic[cite: 7, 16].",
        incorrect: {
          c: "Incorrect — Disabling antivirus reduces security and directly contradicts the goal of ensuring security.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "Scenario: A university is building a new laboratory complex and requires local area network (LAN) access in all rooms. What tasks does the system administrator perform under 'Configuring network devices'? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Setting up the IP routing tables on the new network routers.",
        },
        {
          id: "b",
          text: "Configuring the network switches to assign appropriate VLANs to the laboratory computers.",
        },
        {
          id: "c",
          text: "Manufacturing the ethernet cables from raw materials.",
        },
        {
          id: "d",
          text: "Assigning static IP addresses to the lab's network-attached printers.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Configuring network devices involves setting up routers, configuring switches/VLANs, and assigning IP addresses to devices[cite: 8].",
        incorrect: {
          c: "Incorrect — Manufacturing cables is a physical production task, not a network configuration task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "Scenario: A remote worker calls the IT helpdesk stating their VPN connection drops exactly every 15 minutes, preventing them from accessing corporate files. Which actions reflect the administrator's 'Troubleshooting issues' role? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Asking the user questions to identify patterns and duplicate the problem.",
        },
        {
          id: "b",
          text: "Telling the user to simply use a different computer without investigating.",
        },
        {
          id: "c",
          text: "Analyzing the VPN server logs to find out why the session is terminating.",
        },
        {
          id: "d",
          text: "Testing different network configurations to isolate the root cause.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Troubleshooting involves identifying the problem through user questioning, analyzing logs, and isolating the root cause[cite: 9, 36].",
        incorrect: {
          b: "Incorrect — Ignoring the problem and telling the user to switch computers is not troubleshooting.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "Scenario: An external auditor arrives to verify that the company complies with industry data security standards. They request proof of how servers are managed. How does 'Keeping detailed documentation' help the system administrator in this scenario? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "By providing logs of when security patches were applied to the servers.",
        },
        {
          id: "b",
          text: "By presenting written records of user account creation and removal procedures.",
        },
        {
          id: "c",
          text: "By showing the physical server hardware to the auditor.",
        },
        {
          id: "d",
          text: "By providing up-to-date network topology diagrams and configuration records.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Detailed documentation includes maintaining records of patches, user account management procedures, and network diagrams[cite: 10, 40].",
        incorrect: {
          c: "Incorrect — Showing physical hardware does not constitute 'detailed documentation'.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "Scenario: A healthcare provider requires strict compliance with patient data privacy. The IT manager assigns a system administrator to conduct 'Routine audits of systems and software'. What activities does this involve? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Reviewing system logs to ensure no unauthorized access to patient records has occurred.",
        },
        {
          id: "b",
          text: "Checking that all installed medical software is currently supported and patched.",
        },
        {
          id: "c",
          text: "Verifying that user permissions align with the principle of least privilege.",
        },
        {
          id: "d",
          text: "Upgrading the RAM modules in all workstation computers.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Routine audits involve reviewing logs for unauthorized access, checking software patch status, and verifying user permissions[cite: 14].",
        incorrect: {
          d: "Incorrect — Upgrading RAM is a hardware installation/upgrade task, not an audit.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "Scenario: An employee is unexpectedly hospitalized, and the finance director urgently needs a crucial budget spreadsheet located in the hospitalized employee's private, restricted home directory on the server. Utilizing 'Administrator's Privileges', how can the sysadmin assist? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "By waiting for the employee to wake up and provide their password.",
        },
        {
          id: "b",
          text: "By modifying the attributes of the file to allow the finance director access, even though it is owned by the hospitalized user.",
        },
        {
          id: "c",
          text: "By copying the contents of the file and giving it to the finance director.",
        },
        {
          id: "d",
          text: "By deleting the file entirely from the system.",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. An administrator has the privilege to modify the contents or attributes of any file, even if it is owned by another user[cite: 19].",
        incorrect: {
          a: "Incorrect — Waiting defeats the purpose of the urgent request and ignores the admin's privileges.",
          d: "Incorrect — While an admin *could* delete it, doing so destroys the needed budget spreadsheet and does not assist the finance director.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "Scenario: A poorly written custom reporting script enters an infinite loop, consuming 100% of the main server's CPU and freezing all other applications. Applying 'Administrator's Privileges', what is the appropriate action? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Initiating a server shutdown by pulling the power plug.",
        },
        {
          id: "b",
          text: "Using administrative tools to forcefully kill the runaway script process.",
        },
        {
          id: "c",
          text: "Killing essential operating system processes to free up memory for the script.",
        },
        {
          id: "d",
          text: "Identifying the specific process ID (PID) of the script and terminating it without affecting essential system functions.",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. Administrators have the privilege to initiate or kill any process, except those essential for running the system[cite: 20].",
        incorrect: {
          a: "Incorrect — Pulling the power plug causes improper shutdown and potential data corruption.",
          c: "Incorrect — Administrators must avoid killing processes essential for running the system.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "Scenario: A user returns from a month-long vacation and realizes they have completely forgotten their domain login password. They cannot log in to change it. Based on 'Administrator's Privileges', how is this resolved? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "The administrator demands the user's old password to process the change.",
        },
        {
          id: "b",
          text: "The administrator changes the user's password directly without needing to enter the old password.",
        },
        {
          id: "c",
          text: "The administrator creates a completely new user account and deletes the old one.",
        },
        {
          id: "d",
          text: "The administrator generates a temporary password and forces the user to reset it upon next login.",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. An administrator has the specific privilege to change any user's password without entering the old password[cite: 21]. Providing a temporary password for forced reset is standard practice.",
        incorrect: {
          a: "Incorrect — The administrator does not need the old password.",
          c: "Incorrect — Deleting the account would destroy the user's files and access history unnecessarily.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "Scenario: A financial trading firm relies on split-second transaction logging. An audit reveals that Server A's timestamps are 3 minutes behind Server B's. Which specific 'Administrator's Privilege' must be used to fix this discrepancy? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Modify the contents of the log files.",
        },
        {
          id: "b",
          text: "Set the system clock on Server A.",
        },
        {
          id: "c",
          text: "Kill the logging process.",
        },
        {
          id: "d",
          text: "Configure the server to synchronize its time with a reliable Network Time Protocol (NTP) server.",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. The administrator has the privilege to 'Set the system clock'[cite: 22], which is practically done manually or by configuring an NTP sync.",
        incorrect: {
          a: "Incorrect — Falsifying log contents does not fix the root cause of the desynchronized servers.",
          c: "Incorrect — Killing the logging process stops recording entirely, making the situation worse.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "Scenario: The company network is slowing down because guest users in the lobby are streaming high-definition videos. Furthermore, massive data reports are running during peak office hours instead of at night. Which 'Administrator's Privileges' allow the sysadmin to resolve these specific issues? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Controlling user's access to the Networking service to restrict guest bandwidth.",
        },
        {
          id: "b",
          text: "Changing the guest users' personal passwords.",
        },
        {
          id: "c",
          text: "Controlling user's access to the Scheduling service to force data reports to run at midnight.",
        },
        {
          id: "d",
          text: "Setting the system clock forward to trick the reports into running.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. The administrator has privileges to control user access to Networking services (to handle guest streaming) and Scheduling services (to delay reports until night)[cite: 23].",
        incorrect: {
          b: "Incorrect — Changing passwords doesn't directly solve bandwidth management for open guest networks.",
          d: "Incorrect — Setting the system clock inaccurately creates severe logging and authentication issues.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "Scenario: An enterprise relies heavily on Oracle and SQL servers to manage massive amounts of customer transaction records. They need to hire an IT professional specifically focused on organizing, securing, and optimizing these tables and queries. Which 'Category of System Administration' fits this role? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Network Administrator",
        },
        {
          id: "b",
          text: "Database Administrator (DBA)",
        },
        {
          id: "c",
          text: "Web Administrator",
        },
        {
          id: "d",
          text: "Technical Support",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. A Database Administrator (DBA) is a category of system administration specifically focused on managing database systems[cite: 26].",
        incorrect: {
          a: "Incorrect — Network Admins focus on routers, switches, and connectivity.",
          c: "Incorrect — Web Admins focus on web servers and websites.",
          d: "Incorrect — Technical Support focuses on end-user assistance.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "Scenario: A media company expects a massive surge in traffic to their news portal during election night. They need a specialist to configure the Apache and Nginx servers to balance the load and prevent the site from crashing. Which 'Category of System Administration' is this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Database Administrator (DBA)",
        },
        {
          id: "b",
          text: "Web Administrator",
        },
        {
          id: "c",
          text: "Security Administrator",
        },
        {
          id: "d",
          text: "Network Administrator",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. A Web Administrator focuses on maintaining and configuring web servers to handle website traffic and performance[cite: 27].",
        incorrect: {
          a: "Incorrect — DBAs focus on databases.",
          c: "Incorrect — Security Admins focus primarily on cyber threats and policies.",
          d: "Incorrect — Network Admins focus on the broader network infrastructure.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "Scenario: A global logistics company is experiencing connectivity drops between its warehouses in Asia and Europe. They need an IT professional to troubleshoot the wide area network (WAN) links, configure Cisco routers, and manage IP routing protocols. Which 'Category of System Administration' is appropriate? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Web Administrator",
        },
        {
          id: "b",
          text: "Technical Support",
        },
        {
          id: "c",
          text: "Network Administrator",
        },
        {
          id: "d",
          text: "Security Administrator",
        },
      ],
      correctOptionIds: ["c"],
      explanation: {
        correct:
          "Option C is correct. A Network Administrator manages the network connectivity, routers, switches, and WAN links[cite: 28].",
        incorrect: {
          a: "Incorrect — Web Admins handle web servers.",
          b: "Incorrect — Technical Support handles end-user device issues.",
          d: "Incorrect — Security Admins focus on firewalls and threat prevention, not standard WAN routing.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "Scenario: A government agency mandates that all IT infrastructure must be audited for vulnerabilities, intrusion detection systems must be deployed, and strict firewall policies enforced to protect classified data. Which 'Category of System Administration' is dedicated to this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Database Administrator (DBA)",
        },
        {
          id: "b",
          text: "Security Administrator",
        },
        {
          id: "c",
          text: "Network Administrator",
        },
        {
          id: "d",
          text: "Technical Support",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. A Security Administrator specializes in overseeing firewall policies, detecting intrusions, and maintaining overall cybersecurity[cite: 29].",
        incorrect: {
          a: "Incorrect — DBAs manage databases.",
          c: "Incorrect — Network Admins manage connectivity, though they collaborate with security.",
          d: "Incorrect — Tech support handles general end-user issues.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "Scenario: A company is upgrading its data center. They are purchasing new motherboards, upgrading memory modules, and adding solid-state drives (SSDs). According to the 'Components of a Computer System', which category do these items belong to? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Warmware",
        },
        {
          id: "b",
          text: "Hardware",
        },
        {
          id: "c",
          text: "Software",
        },
        {
          id: "d",
          text: "Physical components of a computer",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. Hardware refers to the physical components of a computer, such as CPU, memory, storage devices, and motherboards[cite: 31].",
        incorrect: {
          a: "Incorrect — Warmware refers to humans.",
          c: "Incorrect — Software refers to programs and operating systems.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "Scenario: After deploying a complex new Enterprise Resource Planning (ERP) system, the IT department conducts extensive training sessions for the administrative staff and end-users to ensure they can interact with the new interface efficiently. In the context of computer system components, what element is being managed here? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Warmware",
        },
        {
          id: "b",
          text: "The human element involved in computing",
        },
        {
          id: "c",
          text: "Hardware",
        },
        {
          id: "d",
          text: "Software algorithms",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Warmware refers specifically to the human element involved in computing, such as users, administrators, and IT staff who interact with the systems[cite: 32].",
        incorrect: {
          c: "Incorrect — Hardware refers to physical machinery.",
          d: "Incorrect — Software algorithms are programmatic instructions, not humans.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "Scenario: An IT manager is evaluating candidates for a SysAdmin position. One candidate successfully demonstrates their ability to configure a Linux operating system, troubleshoot DNS records, and install application packages. Which 'Administrator's Required Skill' does this best represent? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Communication Skills",
        },
        {
          id: "b",
          text: "Technical Proficiency",
        },
        {
          id: "c",
          text: "Knowledge of operating systems and networking concepts",
        },
        {
          id: "d",
          text: "Time Management",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. Technical Proficiency includes knowledge of operating systems (Linux), networking concepts (DNS), and software installation[cite: 35].",
        incorrect: {
          a: "Incorrect — Communication skills involve explaining technical info to non-technical users.",
          d: "Incorrect — Time management involves prioritizing tasks and scheduling.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "Scenario: A server cluster goes offline unexpectedly. The system administrator uses analytical thinking to trace the root cause back to a faulty memory module by systematically testing components. Which 'Administrator's Required Skill' is being utilized? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Problem-Solving Skills",
        },
        {
          id: "b",
          text: "Automation and Scripting",
        },
        {
          id: "c",
          text: "Ability to diagnose and troubleshoot system issues",
        },
        {
          id: "d",
          text: "Security Awareness",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Problem-solving skills involve the ability to diagnose, troubleshoot system issues, and use analytical thinking to resolve complex technical problems[cite: 36].",
        incorrect: {
          b: "Incorrect — Automation involves writing scripts for repetitive tasks, not diagnosing hardware failures.",
          d: "Incorrect — Security awareness relates to cyber threats, not hardware component failures.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "Scenario: The Chief Information Officer (CIO) mandates that all company laptops must have their hard drives encrypted and local firewalls enabled to protect sensitive client data. Implementing this requires which 'Administrator's Required Skill'? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Security Awareness",
        },
        {
          id: "b",
          text: "Ability to implement encryption and firewalls",
        },
        {
          id: "c",
          text: "Programming Skills",
        },
        {
          id: "d",
          text: "Understanding of cybersecurity principles",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Security Awareness includes understanding cybersecurity principles and the ability to implement security measures like firewalls and encryption[cite: 37].",
        incorrect: {
          c: "Incorrect — Programming involves writing code, not necessarily configuring standard encryption and firewalls.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "Scenario: An IT team needs to deploy 500 identical virtual machines overnight. Instead of configuring each one manually, the administrator uses PowerShell and Ansible to deploy them simultaneously. Which 'Administrator's Required Skill' is demonstrated? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Automation and Scripting",
        },
        {
          id: "b",
          text: "Proficiency in scripting languages for task automation",
        },
        {
          id: "c",
          text: "Experience with configuration management tools",
        },
        {
          id: "d",
          text: "Communication Skills",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Automation and Scripting involve using languages like PowerShell for task automation and utilizing configuration management tools like Ansible to streamline workloads[cite: 38].",
        incorrect: {
          d: "Incorrect — Communication skills relate to conveying information, not automating virtual machine deployments.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "Scenario: After a major network outage, the CEO (who has no IT background) demands an explanation. The sysadmin creates a clear, non-jargon report detailing what happened and writes comprehensive logs for the IT team's future reference. Which 'Administrator's Required Skill' is shown? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Time Management",
        },
        {
          id: "b",
          text: "Communication Skills",
        },
        {
          id: "c",
          text: "Ability to communicate technical information clearly to non-technical users",
        },
        {
          id: "d",
          text: "Strong documentation skills to maintain detailed records",
        },
      ],
      correctOptionIds: ["b", "c", "d"],
      explanation: {
        correct:
          "Options B, C, and D are correct. Communication Skills include the ability to translate technical info for non-technical users and strong documentation skills[cite: 40].",
        incorrect: {
          a: "Incorrect — Time management relates to scheduling and prioritizing, not explaining technical issues.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "Scenario: On a Monday morning, a sysadmin receives 3 critical server-down alerts, 15 minor password reset requests, and has a scheduled software upgrade project. They organize their day to handle the server outages first, delegate the resets, and reschedule the upgrade. Which 'Administrator's Required Skill' is applied? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Time Management",
        },
        {
          id: "b",
          text: "Ability to prioritize tasks",
        },
        {
          id: "c",
          text: "Managing time effectively",
        },
        {
          id: "d",
          text: "Programming Skills",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Time Management is the ability to prioritize tasks, manage time effectively, and handle scheduling[cite: 41].",
        incorrect: {
          d: "Incorrect — Programming skills involve writing code, not managing daily task priorities.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "Scenario: A hospital's IT director states that the patient life-support monitoring systems must never experience an outage and must be constantly available to doctors. Which 'System Administrators Goal' is the director prioritizing? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Reliability",
        },
        {
          id: "b",
          text: "Security",
        },
        {
          id: "c",
          text: "Ensuring systems are consistently operational and available for use",
        },
        {
          id: "d",
          text: "Efficiency",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Reliability is defined as ensuring that systems are consistently operational and available for use, which is critical for life-support monitoring[cite: 43].",
        incorrect: {
          b: "Incorrect — While Security is important, keeping the system *available and operational* without outage refers to Reliability.",
          d: "Incorrect — Efficiency focuses on resource optimization, not primarily on preventing outages.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "Scenario: A regional bank heavily restricts who can view customer financial records, encrypts all data at rest, and deploys advanced firewalls to block external hackers. Which 'System Administrators Goal' are they fulfilling? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Reliability",
        },
        {
          id: "b",
          text: "Security",
        },
        {
          id: "c",
          text: "Protecting data and resources from unauthorized access and threats",
        },
        {
          id: "d",
          text: "Efficiency",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. Security involves protecting data and system resources from unauthorized access and threats, exactly as the bank is doing[cite: 44].",
        incorrect: {
          a: "Incorrect — Reliability focuses on uptime.",
          d: "Incorrect — Efficiency focuses on hardware/software optimization.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "Scenario: A company recently spent $100,000 on new servers. The IT manager uses virtualization to run multiple applications on a single physical server, ensuring the CPU and RAM are fully utilized rather than sitting idle. Which 'System Administrators Goal' is being achieved? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Efficiency",
        },
        {
          id: "b",
          text: "Optimizing the performance and utilization of IT resources",
        },
        {
          id: "c",
          text: "Security",
        },
        {
          id: "d",
          text: "Reliability",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Efficiency focuses on optimizing the performance and full utilization of IT resources[cite: 45].",
        incorrect: {
          c: "Incorrect — Security is about protection, not resource utilization.",
          d: "Incorrect — Reliability is about consistent availability.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "Scenario: A sysadmin team is constantly dealing with managing software vulnerabilities, mitigating risks of data breaches, and defending against automated cyber-attacks. Which 'System Administrators Challenge' are they facing? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Downtime",
        },
        {
          id: "b",
          text: "Security Threats",
        },
        {
          id: "c",
          text: "Complexity",
        },
        {
          id: "d",
          text: "Mitigating risks to protect against cyber-attacks",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. The challenge of Security Threats involves managing vulnerabilities and mitigating risks to protect against cyber-attacks[cite: 47].",
        incorrect: {
          a: "Incorrect — Downtime challenges refer to service interruptions.",
          c: "Incorrect — Complexity refers to handling diverse technologies.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "Scenario: An e-commerce website generates $1,000 per minute in sales. A sudden hardware failure takes the site offline. The IT team is under immense pressure to quickly resolve the outage. Which 'System Administrators Challenge' does this situation directly represent? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Downtime",
        },
        {
          id: "b",
          text: "Minimizing service interruptions and quickly resolving outages",
        },
        {
          id: "c",
          text: "Complexity",
        },
        {
          id: "d",
          text: "Security Threats",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. The challenge of Downtime involves minimizing service interruptions and quickly resolving outages to prevent business losses[cite: 48].",
        incorrect: {
          c: "Incorrect — Complexity is about managing diverse systems.",
          d: "Incorrect — The outage was caused by a hardware failure, not explicitly a cyber-attack in this scenario.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "Scenario: After merging with another corporation, a sysadmin team must simultaneously manage legacy UNIX mainframes, modern AWS cloud servers, Windows Active Directory, and custom Linux applications. Which 'System Administrators Challenge' is causing them stress? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Complexity",
        },
        {
          id: "b",
          text: "Handling diverse and often complex systems and technologies",
        },
        {
          id: "c",
          text: "Downtime",
        },
        {
          id: "d",
          text: "Security Threats",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Complexity is the challenge of handling diverse and often complex systems and technologies within an organization[cite: 49].",
        incorrect: {
          c: "Incorrect — There is no mention of a service outage in this scenario.",
          d: "Incorrect — The challenge described is integration and management, not cyber-attacks.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "Scenario: A retail store cashier uses a barcode scanner to read a product label, and then types a specific discount code on a keyboard. According to 'Computer System Tasks & Data Handling', which stage does this represent? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Input",
        },
        {
          id: "b",
          text: "Data Processing",
        },
        {
          id: "c",
          text: "Accepting data or commands in a form the computer can use",
        },
        {
          id: "d",
          text: "Output",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. The barcode scanner and keyboard act as input devices, accepting data and commands for the computer to use[cite: 50, 1524].",
        incorrect: {
          b: "Incorrect — Processing occurs inside the CPU after the data is received.",
          d: "Incorrect — Output is the presentation of processed data.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "Scenario: Raw sales figures from the month are sent to the central server. Inside the server, electronic circuitry executes mathematical instructions to convert these raw figures into a comprehensive quarterly profit margin. According to 'Data Handling', what process is occurring? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Input",
        },
        {
          id: "b",
          text: "Data processing",
        },
        {
          id: "c",
          text: "The CPU manipulating input data into required information",
        },
        {
          id: "d",
          text: "Storing Information",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. Data processing is performed by the Processor (CPU), which uses electronic circuitry to manipulate input data into usable information[cite: 50, 1526, 1527].",
        incorrect: {
          a: "Incorrect — Input is the receiving of raw data.",
          d: "Incorrect — Storing is placing data in memory for later use.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "Scenario: A video editing agency completes a massive film project. To free up active memory but ensure the terabytes of raw footage are kept safe for future use, they move the files to external hard drives. In 'Data Handling', what stage is this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Input",
        },
        {
          id: "b",
          text: "Output",
        },
        {
          id: "c",
          text: "Storing information (secondary storage)",
        },
        {
          id: "d",
          text: "Holding data outside the computer itself",
        },
      ],
      correctOptionIds: ["c", "d"],
      explanation: {
        correct:
          "Options C and D are correct. Storing information refers to using secondary storage (like external hard drives) to hold data outside the computer's primary memory[cite: 50, 1530].",
        incorrect: {
          a: "Incorrect — Input receives data.",
          b: "Incorrect — Output displays processed data to users.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "Scenario: After a complex financial algorithm completes its calculations, the final graphs and charts are displayed on the CEO's monitor and a hard copy is printed for the board meeting. In 'Data Handling', what stage do the monitor and printer represent? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Input",
        },
        {
          id: "b",
          text: "Data processing",
        },
        {
          id: "c",
          text: "Output",
        },
        {
          id: "d",
          text: "Displaying processed data in an understandable and usable form",
        },
      ],
      correctOptionIds: ["c", "d"],
      explanation: {
        correct:
          "Options C and D are correct. Output devices display the processed data/information in an understandable and usable form for the people requiring it[cite: 50, 1528, 1529].",
        incorrect: {
          a: "Incorrect — Input devices send data to the computer.",
          b: "Incorrect — Processing manipulates the data before it is output.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "Scenario: An IT professional spends their day taking calls from employees who forgot their login credentials, helping them connect to local printers, and resolving basic application freeze errors. Based on the 'Categories of System Administration', which role best fits this description? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Database Administrator (DBA)",
        },
        {
          id: "b",
          text: "Technical Support",
        },
        {
          id: "c",
          text: "Security Administrator",
        },
        {
          id: "d",
          text: "Computer Operator",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. Technical Support and Computer Operators are categories of system administration that focus heavily on direct end-user assistance and daily routine operations[cite: 25, 1495, 1496].",
        incorrect: {
          a: "Incorrect — DBAs focus on managing database systems.",
          c: "Incorrect — Security Administrators focus on organizational security policies and cyber threats.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "Scenario: A company's internal wiki states that the designated root user in their UNIX environment has absolute power to manage the system. Which characteristics correctly define this 'root user' status based on the system administrator philosophy? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They act as a single, trusted person responsible for administrating the whole system.",
        },
        {
          id: "b",
          text: "Their user ID is automatically assigned as zero (0).",
        },
        {
          id: "c",
          text: "They must gain permission from a superior before killing any system process.",
        },
        {
          id: "d",
          text: "They operate under the prompt indicator '#'.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. The root user is a single trusted person with absolute power, has a default user ID of 0, and operates with the '#' prompt[cite: 1400, 1403, 1411, 1420].",
        incorrect: {
          c: "Incorrect — The root user holds absolute power and does not require system-level permission to kill processes.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "Scenario: The Chief Technology Officer defines the core responsibilities for a newly hired System Administrator. According to standard admin roles, which overarching tasks should be included in their job description? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Install, support, and maintain servers or computer systems.",
        },
        {
          id: "b",
          text: "Perform routine audits of systems and software.",
        },
        {
          id: "c",
          text: "Apply OS updates, patches, and configuration changes.",
        },
        {
          id: "d",
          text: "Write code to develop the company's core commercial software product.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The main roles of a system administrator include installing/supporting servers, performing audits, and applying OS updates and patches[cite: 12, 14, 16].",
        incorrect: {
          d: "Incorrect — Writing commercial software code is the job of a software developer, not a system administrator.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "Scenario: An organization expects its IT infrastructure to support its operational needs without exceeding its financial limits. When a sysadmin acquires new computer components or provides routine automation, what overarching philosophy are they fulfilling? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Ensuring uptime, performance, resources, and security meet user needs.",
        },
        {
          id: "b",
          text: "Ensuring the needs are met without exceeding the budget.",
        },
        {
          id: "c",
          text: "Designing completely new operating systems to save on licensing costs.",
        },
        {
          id: "d",
          text: "Planning, installing, and maintaining computer systems involving servers and clients.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. The philosophy of system administration is to ensure systems meet user needs (uptime, security) without exceeding the budget, through planning and maintaining servers and clients[cite: 1389, 1397].",
        incorrect: {
          c: "Incorrect — Sysadmins do not typically design completely new operating systems from scratch.",
        },
      },
    },
  ],
};
