import { QuestionType, Quiz } from "@/app/types/quiz";

export const sysadminTopic4: Quiz = {
  id: "sysadmin-topic-4",
  categoryId: "system-admin",
  subcategoryId: "sysadmin-topic-4",
  title: "Topic 4 - User Management",
  questions: [
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q1",
      text: "Which of the following correctly define the core concepts of User Management? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It refers to the processes, policies, and procedures involved in controlling user activities and access rights.",
        },
        {
          id: "b",
          text: "It integrates closely with Identity and Access Management (IAM) to ensure confidentiality, integrity, and availability.",
        },
        {
          id: "c",
          text: "It is exclusively concerned with the hardware specifications of user workstations.",
        },
        {
          id: "d",
          text: "It is a structured administrative and security framework that governs the entire lifecycle of digital identities.",
        },
        {
          id: "e",
          text: "It only involves the initial onboarding and creation of user credentials.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. User management involves processes and policies for access rights, integrates with IAM for security triad (CIA), and governs the entire lifecycle of digital identities. Options C and E are incorrect as user management is not hardware-focused and covers the entire lifecycle, including monitoring and offboarding.",
        incorrect: {
          c: "Incorrect — User management governs digital identities and access rights, not hardware specifications.",
          e: "Incorrect — It involves the entire lifecycle, including regulating, monitoring, and revoking access, not just onboarding.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "What are the core criteria of User Management? (Select all that apply)",
      options: [
        { id: "a", text: "Authentication" },
        { id: "b", text: "Network Topology Design" },
        { id: "c", text: "Authorization" },
        { id: "d", text: "Provisioning & Deprovisioning" },
        { id: "e", text: "Monitoring & Auditing" },
        { id: "f", text: "Hardware Procurement" },
      ],
      correctOptionIds: ["a", "c", "d", "e"],
      explanation: {
        correct:
          "Options A, C, D, and E are correct. The criteria of user management include Authentication, Authorization, Provisioning & Deprovisioning, Password Management, Access Control, and Monitoring & Auditing. B and F are hardware/network infrastructure tasks, not user management criteria.",
        incorrect: {
          b: "Incorrect — Network Topology Design is a network management task, not a user management criterion.",
          f: "Incorrect — Hardware Procurement is related to physical asset management, not digital identity and access.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "Which of the following accurately describes Authentication and its factors? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Authentication validates the claimed identity of a user before access is granted.",
        },
        { id: "b", text: "A password is an example of 'something you have'." },
        {
          id: "c",
          text: "Biometrics, such as fingerprints or retinas, represent 'something you are'.",
        },
        {
          id: "d",
          text: "Authentication prevents impersonation attacks and reduces unauthorized entry.",
        },
        {
          id: "e",
          text: "Smart cards and OTP tokens are examples of 'something you know'.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Authentication validates identity, uses biometrics as 'something you are', and prevents impersonation. B is incorrect because a password is 'something you know'. E is incorrect because smart cards and OTPs are 'something you have'.",
        incorrect: {
          b: "Incorrect — A password is classified as 'something you know', not 'something you have'.",
          e: "Incorrect — Smart cards and OTP tokens are physical items, making them 'something you have', not 'something you know'.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "Which of the following are considered advanced mechanisms of Authentication? (Select all that apply)",
      options: [
        { id: "a", text: "Multi-Factor Authentication (MFA)" },
        { id: "b", text: "Discretionary Access Control (DAC)" },
        { id: "c", text: "Single Sign-On (SSO)" },
        { id: "d", text: "Federated Identity" },
        { id: "e", text: "Separation of Duties (SOD)" },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. MFA, SSO, and Federated Identity are advanced authentication mechanisms. B and E are incorrect because DAC is an authorization model and SOD is an authorization principle.",
        incorrect: {
          b: "Incorrect — Discretionary Access Control (DAC) is a model of authorization, not an authentication mechanism.",
          e: "Incorrect — Separation of Duties is a principle of authorization used to prevent conflicts of interest.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "Which statements are TRUE regarding Role-Based Access Control (RBAC)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Permissions are assigned directly to individual users.",
        },
        {
          id: "b",
          text: "Permissions are assigned to predefined roles, such as Lecturer or Student.",
        },
        {
          id: "c",
          text: "It bases access decisions dynamically on environmental attributes like time or location.",
        },
        { id: "d", text: "It is a form of authorization." },
        {
          id: "e",
          text: "It allows resource owners to arbitrarily decide who gets access.",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are true. RBAC is an authorization model where permissions are assigned to roles, not individuals. A is incorrect because permissions go to roles. C describes ABAC. E describes DAC.",
        incorrect: {
          a: "Incorrect — In RBAC, permissions are assigned to roles, not individuals.",
          c: "Incorrect — Basing decisions on environmental attributes like time or location is a feature of ABAC (Attribute-Based Access Control).",
          e: "Incorrect — Letting resource owners decide access is the definition of Discretionary Access Control (DAC).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "How does Attribute-Based Access Control (ABAC) differ from other access control models? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It uses a central authority to enforce strict military-style policies.",
        },
        {
          id: "b",
          text: "It bases decisions on attributes of the user, resource, or environment.",
        },
        {
          id: "c",
          text: "It can restrict access to specific times, such as 'only during office hours'.",
        },
        { id: "d", text: "It is less flexible than RBAC." },
        {
          id: "e",
          text: "It relies entirely on the resource owner's discretion to grant access.",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. ABAC bases access decisions on attributes (user, resource, environment) and can enforce context like 'office hours only'. A describes MAC. D is incorrect because ABAC is highly flexible. E describes DAC.",
        incorrect: {
          a: "Incorrect — Using a central authority for strict policies describes Mandatory Access Control (MAC).",
          d: "Incorrect — ABAC is considered highly flexible compared to the rigid nature of RBAC.",
          e: "Incorrect — Relying on the resource owner's discretion is Discretionary Access Control (DAC).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "Which of the following principles are strictly applied within Authorization? (Select all that apply)",
      options: [
        { id: "a", text: "Least Privilege Principle" },
        { id: "b", text: "Single Sign-On (SSO)" },
        { id: "c", text: "Separation of Duties (SOD)" },
        { id: "d", text: "Account Lockout Policy" },
        { id: "e", text: "Password Hashing" },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Least Privilege (giving users minimum required access) and Separation of Duties (preventing conflict of interest) are authorization principles. B is authentication. D and E are password/credential management mechanisms.",
        incorrect: {
          b: "Incorrect — Single Sign-On is an advanced authentication mechanism.",
          d: "Incorrect — Account lockout is a password and credential management policy.",
          e: "Incorrect — Password hashing is a security enhancement for credential management.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "What tasks are typically involved in the Provisioning (Onboarding) process? (Select all that apply)",
      options: [
        { id: "a", text: "Archiving user data" },
        { id: "b", text: "Account creation in systems like email and ERP" },
        { id: "c", text: "Role assignment and permission configuration" },
        { id: "d", text: "Disabling accounts" },
        { id: "e", text: "Initial credential setup" },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E are correct. Provisioning involves account creation, role assignment, and initial credential setup. Options A and D are tasks associated with Deprovisioning (Offboarding).",
        incorrect: {
          a: "Incorrect — Archiving user data is a step in the Deprovisioning (Offboarding) process.",
          d: "Incorrect — Disabling accounts occurs during Deprovisioning.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "What are the serious risks if Deprovisioning is mismanaged? (Select all that apply)",
      options: [
        { id: "a", text: "Users may struggle with frequent password resets." },
        {
          id: "b",
          text: "Creation of orphan accounts (active accounts with no owner).",
        },
        {
          id: "c",
          text: "Insider threats due to excessive privileges remaining active.",
        },
        {
          id: "d",
          text: "Multi-Factor Authentication will automatically disable.",
        },
        {
          id: "e",
          text: "Former employees might retain unauthorized system access.",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E are correct. Mismanaged deprovisioning leads to orphan accounts, insider threats from lingering privileges, and unauthorized access by former employees. A is a password management issue. D is factually incorrect.",
        incorrect: {
          a: "Incorrect — Struggling with frequent password resets is an issue related to overly restrictive password management policies, not deprovisioning.",
          d: "Incorrect — Mismanaged deprovisioning does not cause MFA to automatically disable.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "Which of the following are elements of proper Password & Credential Management? (Select all that apply)",
      options: [
        { id: "a", text: "Enforcing minimum password length and complexity." },
        { id: "b", text: "Writing passwords on paper to prevent locking out." },
        {
          id: "c",
          text: "Using password hashing and salting as security enhancements.",
        },
        { id: "d", text: "Implementing account lockout policies." },
        { id: "e", text: "Ensuring credentials are never expired." },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Good password management enforces length/complexity, uses hashing/salting, and implements lockouts to prevent brute-force attacks. B is a severe security risk. E is incorrect because password expiration policies are often required.",
        incorrect: {
          b: "Incorrect — Writing passwords on paper exposes credentials to physical compromise and social engineering risks.",
          e: "Incorrect — Policy enforcement typically includes password expiration and history requirements to ensure credentials are rotated.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "What does Access Control enforce in a system? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Who can access which resources under what conditions.",
        },
        {
          id: "b",
          text: "Only physical boundaries like buildings and server rooms.",
        },
        {
          id: "c",
          text: "Implementation at both Physical and Logical layers.",
        },
        {
          id: "d",
          text: "Techniques like Access Control Lists (ACLs) and Context-aware access.",
        },
        { id: "e", text: "Real-time detection of unusual login locations." },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Access control enforces who accesses what, operates at both physical and logical layers, and uses techniques like ACLs. B is incorrect because it also covers logical layers (databases, apps). E describes Monitoring.",
        incorrect: {
          b: "Incorrect — Access control includes Physical Access Control, but it also crucially includes Logical Access Control (systems, databases).",
          e: "Incorrect — Real-time detection of unusual login locations is a function of Monitoring & Auditing, not Access Control.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "Which of the following statements accurately describe Monitoring & Auditing? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Monitoring involves real-time tracking of user activities.",
        },
        { id: "b", text: "Auditing focuses on creating new user accounts." },
        {
          id: "c",
          text: "It utilizes Security Information and Event Management (SIEM) systems.",
        },
        {
          id: "d",
          text: "It helps detect insider threats and supports forensic investigations.",
        },
        {
          id: "e",
          text: "Auditing involves reviewing logs for compliance and generating audit trails.",
        },
      ],
      correctOptionIds: ["a", "c", "d", "e"],
      explanation: {
        correct:
          "Options A, C, D, and E are correct. Monitoring tracks activities in real-time, Auditing reviews logs for compliance, and both use tools like SIEM to detect threats and support forensics. B is incorrect because account creation is Provisioning.",
        incorrect: {
          b: "Incorrect — Creating new user accounts is part of Provisioning, not Auditing. Auditing is about reviewing logs and compliance.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "How does effective User Management impact Risk Management and Security? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It prevents unauthorized access and cyberattacks through authentication and access controls.",
        },
        {
          id: "b",
          text: "It entirely eliminates the need for physical server security.",
        },
        {
          id: "c",
          text: "It helps prevent insider threats and human errors by identifying vulnerabilities in user permissions.",
        },
        {
          id: "d",
          text: "It guarantees that hardware failures will not result in downtime.",
        },
        {
          id: "e",
          text: "It ensures that only authorized individuals can access sensitive data.",
        },
      ],
      correctOptionIds: ["a", "c", "e"],
      explanation: {
        correct:
          "Options A, C, and E are correct. Effective user management secures data, prevents unauthorized access, and mitigates risks like insider threats. B is false because physical security remains vital. D is false as user management does not prevent hardware failures.",
        incorrect: {
          b: "Incorrect — Effective user management includes physical access controls but does not eliminate the broader need for physical security (like fire suppression or cooling).",
          d: "Incorrect — User management focuses on digital identities and access; it cannot prevent physical hardware failures.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "How does User Management maintain Data Integrity? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "By enforcing Role-Based Access Control (RBAC) to limit data modification.",
        },
        {
          id: "b",
          text: "By completely disabling external internet access for all users.",
        },
        {
          id: "c",
          text: "By using audit logs to track changes for accountability.",
        },
        {
          id: "d",
          text: "By utilizing regular access reviews to ensure only necessary personnel retain privileges.",
        },
        {
          id: "e",
          text: "By allowing all employees read-and-write access to the Finance database.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Data integrity is maintained by enforcing RBAC, utilizing audit logs, and conducting access reviews. B is not a standard user management practice. E violates the principle of least privilege and destroys data integrity.",
        incorrect: {
          b: "Incorrect — Disabling internet access entirely is an extreme network policy, not a standard method of maintaining data integrity in user management.",
          e: "Incorrect — Giving all employees full access violates the Principle of Least Privilege and directly threatens data integrity.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "Which practices in User Management lead to an Enhanced User Experience? (Select all that apply)",
      options: [
        { id: "a", text: "Implementing Single Sign-On (SSO)." },
        {
          id: "b",
          text: "Forcing users to change their password every 7 days.",
        },
        {
          id: "c",
          text: "Providing self-service options for password resets.",
        },
        { id: "d", text: "Using biometric logins." },
        {
          id: "e",
          text: "Enforcing a 5-minute session timeout for all applications.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. SSO, self-service options, and biometrics simplify authentication and improve user experience. B and E represent overly restrictive policies that frustrate users and degrade the experience.",
        incorrect: {
          b: "Incorrect — Frequent mandatory password rotations cause password fatigue and frustrate users.",
          e: "Incorrect — A 5-minute timeout is overly restrictive and severely disrupts productivity.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "What are common issues and challenges faced in User Management? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Users struggling to create and remember strong passwords.",
        },
        { id: "b", text: "Excessive access rights increasing security risks." },
        { id: "c", text: "The impossibility of logging user activities." },
        {
          id: "d",
          text: "Many users lacking awareness of security best practices, making them vulnerable to social engineering.",
        },
        {
          id: "e",
          text: "Poorly managed or inactive accounts serving as entry points for attackers.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are correct. Password struggles, excessive permissions, lack of awareness, and inactive accounts are major issues. C is incorrect because logging user activities is highly possible and standard via SIEM and audit logs.",
        incorrect: {
          c: "Incorrect — Logging user activities is a standard and essential practice in Monitoring & Auditing, not an impossibility.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "Which steps are part of the User Registration Process? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Information Collection (users provide personal details).",
        },
        {
          id: "b",
          text: "Credential Setup (creating a username and password).",
        },
        { id: "c", text: "Email Verification (sending a link or OTP)." },
        {
          id: "d",
          text: "Hardware Installation (provisioning physical devices).",
        },
        {
          id: "e",
          text: "Terms of Service Agreement (users review and accept conditions).",
        },
      ],
      correctOptionIds: ["a", "b", "c", "e"],
      explanation: {
        correct:
          "Options A, B, C, and E are correct steps in User Registration. D is incorrect because hardware installation is physical IT provisioning, not part of the digital user registration process.",
        incorrect: {
          d: "Incorrect — Hardware installation is related to physical asset provisioning, not the software user registration process.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "Which of the following are components of an Account Policy in User Management? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Password Policies defining complexity and expiration.",
        },
        {
          id: "b",
          text: "Account Lockout Policies preventing access after failed attempts.",
        },
        { id: "c", text: "Physical Server Room Access Policies." },
        { id: "d", text: "Session Management Policies controlling timeouts." },
        {
          id: "e",
          text: "User Privilege Policies assigning permissions based on roles.",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are correct components of an Account Policy. C is incorrect because Physical Server Room Access is a physical security policy, not a logical account policy.",
        incorrect: {
          c: "Incorrect — Physical Server Room Access is part of physical security and facility management, not a software account policy.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "What does 'Controlling User Resources' in computer systems involve? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Ensuring users only access authorized resources like files, storage, and network bandwidth.",
        },
        {
          id: "b",
          text: "Defining permissions using Role-Based Access Control (RBAC) or Access Control Lists (ACLs).",
        },
        {
          id: "c",
          text: "Enforcing policies such as storage quotas or restricting CPU usage per application.",
        },
        {
          id: "d",
          text: "Allowing users to modify the core operating system kernel freely.",
        },
        {
          id: "e",
          text: "Tracking resource consumption to detect unusual activity or excessive usage.",
        },
      ],
      correctOptionIds: ["a", "b", "c", "e"],
      explanation: {
        correct:
          "Options A, B, C, and E are correct. Controlling resources involves authorizing access, defining permissions, enforcing quotas, and monitoring consumption. D is incorrect because modifying the core OS kernel is typically heavily restricted to system administrators.",
        incorrect: {
          d: "Incorrect — Allowing general users to modify the OS kernel is a massive security risk and contradicts the principle of controlling resources.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "Which of the following are key aspects of a Login Environment? (Select all that apply)",
      options: [
        { id: "a", text: "Authentication Methods" },
        { id: "b", text: "Session Management" },
        { id: "c", text: "Hardware Procurement" },
        { id: "d", text: "Logging and Monitoring" },
        { id: "e", text: "Authorization and Access Control" },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are correct. The login environment includes authentication, authorization, session management, and logging/monitoring. C is incorrect as it relates to physical asset acquisition.",
        incorrect: {
          c: "Incorrect — Hardware procurement is acquiring physical devices and is not an aspect of the logical login environment.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "What guidelines are typically outlined in a Computer Usage Policy (AUP)? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Authorized Use (who can access systems and for what purpose).",
        },
        {
          id: "b",
          text: "Prohibited Activities (e.g., hacking, illegal downloads).",
        },
        {
          id: "c",
          text: "Network Usage (regulating bandwidth and remote access).",
        },
        {
          id: "d",
          text: "Instructions on how to bypass multi-factor authentication.",
        },
        { id: "e", text: "Consequences of Violation (disciplinary actions)." },
      ],
      correctOptionIds: ["a", "b", "c", "e"],
      explanation: {
        correct:
          "Options A, B, C, and E are correct components of an AUP. D is incorrect because an AUP enforces security measures rather than instructing users how to bypass them.",
        incorrect: {
          d: "Incorrect — An AUP enforces security measures; providing instructions to bypass MFA violates core security principles.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "What are the ethical responsibilities of Administrators in computer systems? (Select all that apply)",
      options: [
        { id: "a", text: "Fairness and Impartiality" },
        {
          id: "b",
          text: "Using administrative privileges to read users' personal emails out of curiosity",
        },
        { id: "c", text: "Transparency" },
        { id: "d", text: "Confidentiality" },
        { id: "e", text: "Accountability" },
      ],
      correctOptionIds: ["a", "c", "d", "e"],
      explanation: {
        correct:
          "Options A, C, D, and E are correct ethical responsibilities for administrators. B is a severe ethical violation and a breach of confidentiality.",
        incorrect: {
          b: "Incorrect — Snooping on personal emails without an authorized, documented reason is a direct violation of the ethical responsibility of Confidentiality.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "What are the ethical responsibilities of Users in a computer system? (Select all that apply)",
      options: [
        { id: "a", text: "Respect for Policies" },
        { id: "b", text: "Honesty and Integrity" },
        {
          id: "c",
          text: "Sharing their passwords with colleagues to improve efficiency",
        },
        { id: "d", text: "Data protection" },
        { id: "e", text: "Respect for Others" },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are correct. Users must respect policies, act with integrity, protect data, and respect others. C is a violation of security policies and data protection ethics.",
        incorrect: {
          c: "Incorrect — Sharing passwords compromises accountability and security, directly violating the ethical responsibility to respect policies and data protection.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "In a scenario where a former administrator's account is used for a data breach 8 months after they left, what user management failure occurred? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "No formal deprovisioning process, leaving an active 'orphan account'.",
        },
        { id: "b", text: "The password complexity rules were too strict." },
        {
          id: "c",
          text: "Lack of periodic access logs review, allowing unauthorized logins to go unnoticed.",
        },
        {
          id: "d",
          text: "Failure to enforce Multi-Factor Authentication (MFA) for administrative accounts.",
        },
        { id: "e", text: "The session timeout policy was set to 5 minutes." },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. The breach was caused by the lack of offboarding (creating an orphan account), unreviewed logs, and missing MFA for admins. B and E are unrelated to this specific failure scenario.",
        incorrect: {
          b: "Incorrect — Strict password complexity does not cause orphan accounts to remain active.",
          e: "Incorrect — A 5-minute session timeout is an over-restrictive policy issue, not the cause of an ex-employee's account remaining active for 8 months.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "Why is relying solely on stronger passwords less effective than a layered security approach? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Strong passwords do nothing to address the root vulnerability of an orphan account remaining active.",
        },
        {
          id: "b",
          text: "If an attacker obtains a strong password via phishing, they still gain full access without MFA.",
        },
        {
          id: "c",
          text: "Strong passwords completely prevent social engineering.",
        },
        {
          id: "d",
          text: "A layered approach uses secondary factors (MFA) and real-time anomaly detection to stop or detect breaches even if credentials are stolen.",
        },
        {
          id: "e",
          text: "Strong passwords automatically delete inactive accounts.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Strong passwords don't close orphan accounts and are vulnerable to phishing, whereas a layered approach (MFA + SIEM) provides defense-in-depth. C is false because social engineering tricks users into revealing passwords regardless of strength. E is false because password policies do not govern deprovisioning.",
        incorrect: {
          c: "Incorrect — Social engineering attacks (like phishing) bypass password strength by tricking the user into giving it away.",
          e: "Incorrect — Passwords do not govern account lifecycles; deprovisioning policies handle deleting inactive accounts.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "In a hospital requiring doctors to access records only during assigned shifts and within hospital premises, why is Role-Based Access Control (RBAC) alone insufficient? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "RBAC grants permissions strictly based on predefined roles.",
        },
        {
          id: "b",
          text: "RBAC lacks the capability to restrict access based on dynamic environmental factors like time or location.",
        },
        {
          id: "c",
          text: "RBAC automatically grants full access to nurses and billing admins.",
        },
        { id: "d", text: "RBAC is highly flexible and context-aware." },
        {
          id: "e",
          text: "RBAC cannot evaluate whether a doctor is on-duty or physically inside the hospital.",
        },
      ],
      correctOptionIds: ["a", "b", "e"],
      explanation: {
        correct:
          "Options A, B, and E are correct. RBAC relies on static roles and cannot assess dynamic contexts like time (shift) or location (premises). C is false based on the standard scenario setup. D describes ABAC, not RBAC.",
        incorrect: {
          c: "Incorrect — In the case study, nurses have limited access and admins have billing only. RBAC enforces these static roles well.",
          d: "Incorrect — ABAC is highly flexible and context-aware, whereas RBAC is rigid and tied to predefined roles.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "How can a hybrid access control model be designed to accommodate both roles and environmental context? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Use RBAC as the base layer to establish fundamental permissions based on job title.",
        },
        {
          id: "b",
          text: "Remove RBAC entirely and only check the user's location.",
        },
        {
          id: "c",
          text: "Implement ABAC layered on top of RBAC to evaluate environmental context (time, location).",
        },
        {
          id: "d",
          text: "Implement a 'break-glass' override system for emergency situations where context rules might improperly block access.",
        },
        {
          id: "e",
          text: "Use DAC to let doctors manually grant access to themselves.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. A hybrid model uses RBAC for the base role verification, ABAC for the context checks, and incorporates a 'break-glass' protocol for emergencies. B removes role verification entirely, which is insecure. E is an incorrect application of DAC.",
        incorrect: {
          b: "Incorrect — Removing RBAC would mean anyone in the right location could access the records, regardless of whether they are a doctor.",
          e: "Incorrect — DAC allows resource owners to manage access, but standard users (doctors) should not self-grant system-level overrides at their discretion.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "What are the negative consequences of over-restrictive policies, such as changing passwords every 14 days and 5-minute session timeouts? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "They create user frustration and increase administrative overhead.",
        },
        { id: "b", text: "They cause a massive decrease in helpdesk tickets." },
        {
          id: "c",
          text: "They severely disrupt productivity by forcing constant re-authentication.",
        },
        {
          id: "d",
          text: "They paradoxically reduce security by encouraging users to seek workarounds, like writing passwords on paper.",
        },
        {
          id: "e",
          text: "They make the system perfectly immune to all cyber attacks.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Over-restrictive policies frustrate users, disrupt work, and reduce security by causing risky workarounds. B is incorrect because helpdesk tickets actually increase. E is factually incorrect as no system is immune.",
        incorrect: {
          b: "Incorrect — Over-restrictive policies significantly increase helpdesk tickets due to frequent lockouts and password resets.",
          e: "Incorrect — Extreme restriction causes users to adopt insecure workarounds (like writing down passwords), which lowers actual security.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "How can an overly restrictive authentication system be modernized to balance security and usability? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Implement Single Sign-On (SSO) to reduce password fatigue.",
        },
        {
          id: "b",
          text: "Adopt passwordless authentication utilizing biometrics.",
        },
        {
          id: "c",
          text: "Reduce the password change requirement to every 2 days.",
        },
        {
          id: "d",
          text: "Extend session timeouts to practical lengths while relying on context-aware access.",
        },
        {
          id: "e",
          text: "Disable all authentication requirements during office hours.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct modernizations. SSO, biometrics, and context-aware session management balance security with usability. C worsens the problem. E is a massive security failure.",
        incorrect: {
          c: "Incorrect — Changing passwords every 2 days makes the over-restrictive problem much worse.",
          e: "Incorrect — Disabling authentication entirely sacrifices all security.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "If a senior employee with legitimate access downloads massive amounts of data at night to a personal cloud, why is correct access control alone insufficient to stop this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Access control ensures the user has authorized rights to read data, but it does not regulate what they do with it afterward.",
        },
        {
          id: "b",
          text: "Access control alone cannot stop an insider threat where an employee misuses their legitimate privileges.",
        },
        {
          id: "c",
          text: "Access control protocols are completely useless and should be abandoned.",
        },
        { id: "d", text: "Access control only works during daytime hours." },
        {
          id: "e",
          text: "The system lacks behavioral monitoring to detect massive data transfers or unusual login hours.",
        },
      ],
      correctOptionIds: ["a", "b", "e"],
      explanation: {
        correct:
          "Options A, B, and E are correct. Access control grants the initial right to access but doesn't monitor behavior (like massive external transfers), making it vulnerable to insider threats. C and D are false statements.",
        incorrect: {
          c: "Incorrect — Access control is foundational for security; it just needs to be paired with monitoring.",
          d: "Incorrect — Access control functions 24/7, but standard RBAC doesn't inherently block off-hours access unless paired with ABAC/context-aware rules.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "Which of the following are indicators of malicious intent in an insider threat scenario involving a finance employee? (Select all that apply)",
      options: [
        { id: "a", text: "Logging in during regular business hours." },
        { id: "b", text: "Downloading large volumes of data late at night." },
        { id: "c", text: "Submitting a scheduled expense report." },
        {
          id: "d",
          text: "Transferring company data to a personal cloud account.",
        },
        {
          id: "e",
          text: "Violating basic data security, confidentiality, and authorized use policies.",
        },
      ],
      correctOptionIds: ["b", "d", "e"],
      explanation: {
        correct:
          "Options B, D, and E are correct. Late-night massive downloads and transfers to personal clouds violate policies and indicate malicious intent. A and C are normal, benign employee behaviors.",
        incorrect: {
          a: "Incorrect — Logging in during normal business hours is standard, authorized behavior.",
          c: "Incorrect — Submitting an expense report is an expected task for a finance employee.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "What components should a monitoring and auditing framework include to detect insider threats? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Security Information and Event Management (SIEM) systems to aggregate log files.",
        },
        {
          id: "b",
          text: "Configuration of SIEM tools to detect behavioral anomalies triggering immediate alerts.",
        },
        {
          id: "c",
          text: "Removal of all Access Control Lists (ACLs) to speed up logging.",
        },
        {
          id: "d",
          text: "Implementation of context-aware access to restrict external transfers physically or logically.",
        },
        {
          id: "e",
          text: "Secretly recording employees' personal phone calls at home.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. A solid framework uses SIEM for real-time tracking, anomaly detection alerts, and context-aware access restrictions. C destroys security. E violates ethics, privacy laws, and is outside system administration scope.",
        incorrect: {
          c: "Incorrect — Removing ACLs destroys system authorization and security.",
          e: "Incorrect — Secretly monitoring personal off-site communications violates transparency, fairness, and legal privacy standards.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "If an e-learning platform allows registration with only an unverified email, simple passwords, and no ID validation, what are the weaknesses? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Lack of an email verification step (like OTP or link) prior to account activation.",
        },
        {
          id: "b",
          text: "The credential setup does not enforce strong password management policies.",
        },
        {
          id: "c",
          text: "The platform utilizes a complex Attribute-Based Access Control system.",
        },
        {
          id: "d",
          text: "No mechanism exists to validate the personal identity of the individual registering.",
        },
        {
          id: "e",
          text: "The system automatically mandates biometric logins.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. The weaknesses outlined in the scenario are missing email verification, simple password rules, and lack of identity validation. C and E are features the weak system does not have.",
        incorrect: {
          c: "Incorrect — A weak registration system does not imply the presence of a complex ABAC system.",
          e: "Incorrect — The scenario specifically states the system only uses simple password rules, not biometrics.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "How do weaknesses in the registration process (no verification, simple passwords) affect the system? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Authentication is compromised because the system cannot reliably validate the claimed identity, allowing impersonation.",
        },
        {
          id: "b",
          text: "Data integrity is destroyed as fake accounts can alter or corrupt academic assessments.",
        },
        {
          id: "c",
          text: "System trust breaks down due to the inability to prevent fraud and protect security.",
        },
        { id: "d", text: "Data backup speeds increase dramatically." },
        {
          id: "e",
          text: "The servers become immune to physical hardware failure.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Weak registration ruins authentication reliability, destroys data integrity via fake accounts, and erodes system trust. D and E are entirely unrelated physical/infrastructure elements.",
        incorrect: {
          d: "Incorrect — Registration weaknesses have no direct positive effect on data backup speeds.",
          e: "Incorrect — Logical software vulnerabilities do not make servers immune to physical hardware failures.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "When redesigning a weak registration system, what trade-off occurs between security and accessibility? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Security is enhanced by preventing impersonation and automated fake accounts.",
        },
        {
          id: "b",
          text: "Accessibility improves because users no longer need passwords.",
        },
        {
          id: "c",
          text: "Accessibility and user experience suffer because extra friction is added to the onboarding process.",
        },
        {
          id: "d",
          text: "Users are required to take extra steps, such as clicking verification links or providing documents, before using the platform.",
        },
        {
          id: "e",
          text: "Security is weakened because multi-factor authentication creates loopholes.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Strengthening registration enhances security but decreases accessibility by adding friction (extra steps, verifications) to the onboarding process. B is incorrect because adding verification doesn't inherently remove passwords. E is false; MFA strengthens security.",
        incorrect: {
          b: "Incorrect — The redesign involves adding MFA and identity checks, which does not mean passwords are removed entirely, and it decreases immediate accessibility.",
          e: "Incorrect — Multi-factor authentication significantly strengthens security; it does not create loopholes.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "Which of the following is true regarding Federated Identity? (Select all that apply)",
      options: [
        { id: "a", text: "It is an advanced authentication mechanism." },
        {
          id: "b",
          text: "It relies on trust-based authentication across multiple organizations.",
        },
        {
          id: "c",
          text: "It is a physical access control technique for server rooms.",
        },
        {
          id: "d",
          text: "It ensures that users must maintain separate, unique passwords for every single organization they interact with.",
        },
        {
          id: "e",
          text: "It is categorized under authorization rather than authentication.",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Federated Identity is an advanced authentication mechanism that allows trust-based authentication across organizations. C is false. D is the opposite of its purpose. E is false; it is an authentication method.",
        incorrect: {
          c: "Incorrect — It is a logical authentication method, not a physical server room access technique.",
          d: "Incorrect — Federated Identity aims to reduce the need for multiple credentials by establishing trust across domains.",
          e: "Incorrect — Federated identity validates identity (Authentication), not just permissions (Authorization).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "What is the purpose of the 'Least Privilege Principle' in authorization? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It ensures users only get the minimum required access to perform their jobs.",
        },
        {
          id: "b",
          text: "It prevents conflict of interest by separating duties.",
        },
        {
          id: "c",
          text: "It reduces the risk of accidental data exposure or malicious modification.",
        },
        {
          id: "d",
          text: "It grants administrative rights to all users temporarily.",
        },
        { id: "e", text: "It relies on users' biometric data." },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Least Privilege limits users to minimal necessary access, reducing the risk of errors or attacks. B describes Separation of Duties. D is the exact opposite of the principle. E relates to authentication.",
        incorrect: {
          b: "Incorrect — Preventing conflict of interest is the specific goal of Separation of Duties (SOD), a different authorization principle.",
          d: "Incorrect — Granting administrative rights to all users violates the principle of least privilege.",
          e: "Incorrect — Biometric data is used for authentication, not for defining authorization principles.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "During the Maintenance phase of Provisioning & Deprovisioning, what activities occur? (Select all that apply)",
      options: [
        { id: "a", text: "Initial credential setup for a new hire." },
        {
          id: "b",
          text: "Role updates due to promotion or department transfer.",
        },
        { id: "c", text: "Archiving a departing user's data." },
        { id: "d", text: "Access reviews and adjustments." },
        { id: "e", text: "Disabling an account permanently." },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. The Maintenance phase involves role updates (promotions/transfers) and periodic access reviews. A occurs during Onboarding (Provisioning). C and E occur during Offboarding (Deprovisioning).",
        incorrect: {
          a: "Incorrect — Initial credential setup occurs during the Provisioning (Onboarding) phase.",
          c: "Incorrect — Archiving data is part of the Deprovisioning (Offboarding) phase.",
          e: "Incorrect — Disabling an account is a Deprovisioning task.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "What are the common tools and outputs associated with Monitoring & Auditing? (Select all that apply)",
      options: [
        { id: "a", text: "Log files" },
        {
          id: "b",
          text: "Security Information and Event Management (SIEM) systems",
        },
        { id: "c", text: "Compliance reports such as ISO 27001 or GDPR" },
        { id: "d", text: "Biometric fingerprint scanners" },
        { id: "e", text: "Smart cards" },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct tools/outputs for monitoring and auditing. D and E are physical hardware devices used for Authentication.",
        incorrect: {
          d: "Incorrect — Biometric scanners are authentication tools, not monitoring or auditing tools.",
          e: "Incorrect — Smart cards are physical authentication tokens ('something you have'), not auditing outputs.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "In the context of ethical conduct, why is transparency important when implementing behavioral monitoring tools like SIEM? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Administrators must uphold ethical responsibilities like fairness.",
        },
        {
          id: "b",
          text: "Monitoring practices should be clearly defined and communicated to users through a Computer Usage Policy.",
        },
        {
          id: "c",
          text: "It ensures employees are aware of data protection measures and their rights.",
        },
        {
          id: "d",
          text: "It allows employees to easily delete their own audit logs.",
        },
        {
          id: "e",
          text: "It guarantees that the company can secretly record employees without legal repercussions.",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. Transparency requires administrators to act fairly, communicate monitoring practices via policies (AUP), and ensure employees know their rights. D is a security violation. E is unethical and often illegal.",
        incorrect: {
          d: "Incorrect — Employees must never be able to delete their own audit logs, as this destroys data integrity and accountability.",
          e: "Incorrect — Transparency is the exact opposite of secretly recording employees; secret recording violates ethical principles and privacy laws.",
        },
      },
    },
  ],
};
