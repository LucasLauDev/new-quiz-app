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
      text: "A financial institution wants to upgrade its client portal to prevent unauthorized impersonation. The IT manager proposes a system that requires clients to provide their password and scan their fingerprint on their mobile device. Which authentication factors are being utilized in this scenario? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Something you know",
        },
        {
          id: "b",
          text: "Something you have",
        },
        {
          id: "c",
          text: "Something you are",
        },
        {
          id: "d",
          text: "Context-aware access",
        },
        {
          id: "e",
          text: "Federated Identity",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. The password represents 'Something you know', while the fingerprint scan represents 'Something you are' (Biometrics).",
        incorrect: {
          b: "Incorrect — The scenario does not mention a physical token, smart card, or OTP device required for access.",
          d: "Incorrect — Context-aware access involves attributes like location or time, which are not mentioned here.",
          e: "Incorrect — Federated identity involves trust-based authentication across different organizations, not multi-factor internal login.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q2",
      text: "A regional hospital recently updated its security policy. A doctor is now strictly granted access to sensitive patient records only when they are physically connected to the hospital's internal network and only during their officially scheduled shifts. Which access control models and principles are most directly demonstrated here? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Role-Based Access Control (RBAC) alone",
        },
        {
          id: "b",
          text: "Attribute-Based Access Control (ABAC)",
        },
        {
          id: "c",
          text: "Discretionary Access Control (DAC)",
        },
        {
          id: "d",
          text: "Context-aware access",
        },
        {
          id: "e",
          text: "Single Sign-On (SSO)",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. The access is dependent on environmental and situational attributes (time of shift, location of network), which are the defining characteristics of ABAC and Context-aware access.",
        incorrect: {
          a: "Incorrect — RBAC assigns permissions purely based on the user's role (e.g., Doctor), but lacks the capability to restrict based on dynamic conditions like time and location.",
          c: "Incorrect — DAC allows resource owners to arbitrarily decide who gets access, which does not fit this automated, policy-driven scenario.",
          e: "Incorrect — SSO is an authentication mechanism for logging into multiple systems with one credential, not an access control model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q3",
      text: "An audit at a technology firm revealed that a former system administrator's account was still actively making changes to the network configurations eight months after the employee had resigned. No alerts were generated during this period. Which of the following failures in user management processes led to this situation? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Failure to enforce the Principle of Least Privilege (POLP)",
        },
        {
          id: "b",
          text: "Lack of a formal deprovisioning and offboarding process",
        },
        {
          id: "c",
          text: "Failure to conduct periodic access log reviews and auditing",
        },
        {
          id: "d",
          text: "Implementation of over-restrictive password policies",
        },
        {
          id: "e",
          text: "Creation of an orphan account",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E are correct. The failure to deprovision the account upon resignation created an active 'orphan account'. Furthermore, the lack of alerts indicates that access logs were not being periodically reviewed or audited.",
        incorrect: {
          a: "Incorrect — While POLP is important, the core issue is that the employee should have zero privilege after leaving, not limited privilege.",
          d: "Incorrect — Password policies are unrelated to the failure to disable an account after an employee departs.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q4",
      text: "A corporation implements a new security directive requiring all employees to change their passwords every 14 days. The password must contain at least 12 characters, including uppercase, lowercase, numbers, and symbols. Shortly after, the IT helpdesk reports a 60% increase in lockouts, and managers notice employees writing passwords on sticky notes attached to their monitors. What are the negative outcomes of this over-restrictive policy? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It significantly increases administrative overhead for the IT team.",
        },
        {
          id: "b",
          text: "It inadvertently exposes credentials to physical compromise and social engineering.",
        },
        {
          id: "c",
          text: "It ensures complete immunity against brute-force attacks.",
        },
        {
          id: "d",
          text: "It creates severe user frustration and disrupts productivity.",
        },
        {
          id: "e",
          text: "It perfectly balances system security with user experience.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Frequent, complex password changes lead to password fatigue, causing users to write them down (physical compromise risk), frustrating users, and burdening the helpdesk with reset requests.",
        incorrect: {
          c: "Incorrect — While complex passwords deter brute-force attacks, writing them on sticky notes completely bypasses digital security, making the system vulnerable.",
          e: "Incorrect — This scenario explicitly demonstrates a failure to balance security with user experience.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q5",
      text: "To resolve the issues caused by the over-restrictive 14-day password change policy, the Chief Information Security Officer (CISO) decides to redesign the authentication environment. Which of the following modern approaches would best improve usability while maintaining or enhancing security? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Implementing Single Sign-On (SSO)",
        },
        {
          id: "b",
          text: "Shortening the mandatory session timeout to 2 minutes",
        },
        {
          id: "c",
          text: "Transitioning to passwordless authentication utilizing biometrics",
        },
        {
          id: "d",
          text: "Disabling account lockout policies entirely",
        },
        {
          id: "e",
          text: "Enforcing the use of Access Control Lists (ACLs) for logins",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. SSO reduces password fatigue by requiring only one login, while passwordless authentication (like biometrics) removes the need to remember complex, rotating passwords entirely.",
        incorrect: {
          b: "Incorrect — A 2-minute timeout is extremely restrictive and would severely harm usability and productivity.",
          d: "Incorrect — Disabling lockouts would leave the system highly vulnerable to brute-force attacks.",
          e: "Incorrect — ACLs are used for resource authorization, not for improving the initial authentication login experience.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q6",
      text: "During a routine audit, it is discovered that a Senior Financial Analyst has been consistently logging into the ERP system at 3:00 AM to download massive volumes of sensitive financial reports onto a personal cloud drive. The analyst has legitimate read-access to these files based on their job role. Why did the existing Role-Based Access Control (RBAC) fail to prevent this data exfiltration? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "RBAC lacks behavioral monitoring to detect massive, unusual data transfers.",
        },
        {
          id: "b",
          text: "RBAC does not regulate what a user does with the data once authorized access is granted.",
        },
        {
          id: "c",
          text: "The analyst was not granted sufficient permissions under the RBAC model.",
        },
        {
          id: "d",
          text: "RBAC inherently prevents all insider threats but failed due to a software bug.",
        },
        {
          id: "e",
          text: "RBAC does not restrict system access based on off-hours or external network transfers.",
        },
      ],
      correctOptionIds: ["a", "b", "e"],
      explanation: {
        correct:
          "Options A, B, and E are correct. RBAC only ensures the user has the right to access data based on their role. It does not monitor post-access behavior (like downloading huge volumes), nor does it natively restrict access based on time (3:00 AM) or destination (personal cloud).",
        incorrect: {
          c: "Incorrect — The scenario explicitly states the analyst has legitimate access, meaning their permissions were sufficient (or perhaps too broad).",
          d: "Incorrect — RBAC cannot stop an authorized insider threat who misuses their legitimate privileges; it is not a bug, but a limitation of the model.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q7",
      text: "To mitigate the insider threat posed by the Senior Financial Analyst downloading data at night, which technical controls and monitoring mechanisms should the IT department implement? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Deploy a Security Information and Event Management (SIEM) system.",
        },
        {
          id: "b",
          text: "Implement context-aware access to restrict logins during off-hours.",
        },
        {
          id: "c",
          text: "Switch entirely to Discretionary Access Control (DAC).",
        },
        {
          id: "d",
          text: "Block logical access to external personal cloud transfers.",
        },
        {
          id: "e",
          text: "Remove the analyst's account without any investigation.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. A SIEM system will detect behavioral anomalies in real-time. Context-aware access will prevent 3:00 AM logins, and blocking external transfers protects data confidentiality.",
        incorrect: {
          c: "Incorrect — DAC allows resource owners to decide access, which would not solve the issue and could worsen security compared to RBAC.",
          e: "Incorrect — Deleting the account immediately ignores proper incident response, auditing, and forensic investigation protocols.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q8",
      text: "An e-learning platform allows anyone to register by simply providing an email address and a 4-character password. No verification links are sent, and accounts are activated immediately. Recently, thousands of fake accounts were created to manipulate online assessment scores. Which weaknesses in the user registration process are directly responsible for this issue? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Lack of an email verification or OTP step.",
        },
        {
          id: "b",
          text: "Failure to validate the personal identity of the registrant.",
        },
        {
          id: "c",
          text: "Enforcement of overly strict password history rules.",
        },
        {
          id: "d",
          text: "Absence of strong password management policies regarding complexity and length.",
        },
        {
          id: "e",
          text: "Mandatory acceptance of the Terms of Service Agreement.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. The lack of email verification allows automated bot signups. The lack of identity validation allows students to impersonate others. A 4-character password indicates a failure in password policy enforcement.",
        incorrect: {
          c: "Incorrect — The scenario states they use simple passwords; there are no strict rules in place.",
          e: "Incorrect — Accepting a Terms of Service agreement is a standard legal step and does not cause or prevent the creation of fake accounts technically.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q9",
      text: "If the e-learning platform redesigns its registration process to require institutional ID uploads and multi-factor authentication (MFA) for every login, what will be the primary trade-off of this implementation? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It will completely eliminate the need for auditing logs.",
        },
        {
          id: "b",
          text: "It drastically enhances system trust and data integrity.",
        },
        {
          id: "c",
          text: "It adds friction to the onboarding process, decreasing accessibility and user experience.",
        },
        {
          id: "d",
          text: "It shifts the system to a Mandatory Access Control (MAC) model.",
        },
        {
          id: "e",
          text: "It makes it significantly harder for automated bots to create fake accounts.",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E are correct. The redesign enhances security, data integrity, and bot prevention, but the core trade-off is reduced usability and accessibility due to the added friction of uploading IDs and using MFA.",
        incorrect: {
          a: "Incorrect — Auditing is always required for compliance and detecting insider threats; MFA does not replace auditing.",
          d: "Incorrect — MFA and ID verification are authentication and registration steps, they do not inherently change the authorization framework to MAC.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q10",
      text: "A software development firm wants to ensure that its developers only have access to the specific code repositories required for their current active projects. Furthermore, no single developer should have the ability to both write the code and approve it for production deployment. Which authorization principles are being applied here? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Single Sign-On (SSO)",
        },
        {
          id: "b",
          text: "Least Privilege Principle",
        },
        {
          id: "c",
          text: "Separation of Duties (SOD)",
        },
        {
          id: "d",
          text: "Password hashing and salting",
        },
        {
          id: "e",
          text: "Discretionary Access Control (DAC)",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. Restricting access to only the necessary repositories is the Least Privilege Principle. Preventing the same person from writing and approving code enforces Separation of Duties to prevent conflicts of interest.",
        incorrect: {
          a: "Incorrect — SSO is an authentication method, not an authorization principle.",
          d: "Incorrect — Hashing and salting are cryptographic techniques for password security.",
          e: "Incorrect — DAC allows users to manage their own resource permissions, which contradicts the strict organizational control described.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q11",
      text: "An organization is drafting a Computer Usage Policy (AUP) for newly hired employees. To ensure the policy effectively prevents misuse and protects data, which of the following key components MUST be included? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Prohibited Activities (e.g., hacking, illegal downloads)",
        },
        {
          id: "b",
          text: "Consequences of Violation (e.g., termination, legal action)",
        },
        {
          id: "c",
          text: "Source code for the company's proprietary software",
        },
        {
          id: "d",
          text: "Internet & Email Usage guidelines",
        },
        {
          id: "e",
          text: "Acknowledgment & Training requirements",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are all essential components of a Computer Usage Policy (AUP) designed to set expectations, restrict bad behavior, and enforce compliance through formal acknowledgment.",
        incorrect: {
          c: "Incorrect — Source code is highly confidential intellectual property and should never be exposed within a general administrative usage policy document.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q12",
      text: "During an internal investigation, it is discovered that a network administrator used their elevated privileges to read the private emails of a colleague without any authorized reason or official request. Which ethical responsibility did the administrator explicitly violate? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Transparency",
        },
        {
          id: "b",
          text: "Confidentiality",
        },
        {
          id: "c",
          text: "Data protection",
        },
        {
          id: "d",
          text: "Accountability",
        },
        {
          id: "e",
          text: "Fairness and Impartiality",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. Administrators have an ethical duty to maintain confidentiality and strictly avoid using their privileges to access private or sensitive user information without legitimate authorization.",
        incorrect: {
          a: "Incorrect — Transparency refers to being open about policies and actions, not the act of snooping.",
          c: "Incorrect — Data protection is a user responsibility (though related, confidentiality is the specific admin ethics term here).",
          d: "Incorrect — Accountability is owning up to actions, whereas the violation itself is a breach of confidentiality.",
          e: "Incorrect — Fairness relates to equitable resource distribution, not privacy breaches.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q13",
      text: "A university implements a strict Account Policy for its online grading system. After a professor accidentally types their password incorrectly four times, they are entirely blocked from accessing the portal and must contact IT. Which specific component of the account policy was triggered? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Session Management Policies",
        },
        {
          id: "b",
          text: "Password Complexity Policies",
        },
        {
          id: "c",
          text: "Account Lockout Policies",
        },
        {
          id: "d",
          text: "Audit and Compliance Policies",
        },
        {
          id: "e",
          text: "User Privilege Policies",
        },
      ],
      correctOptionIds: ["c"],
      explanation: {
        correct:
          "Option C is correct. Account lockout policies are specifically designed to prevent unauthorized access by locking accounts after a predefined number of failed login attempts.",
        incorrect: {
          a: "Incorrect — Session management deals with timeouts for unattended active sessions.",
          b: "Incorrect — Password complexity dictates the characters required, not login attempt limits.",
          d: "Incorrect — Audit policies track behavior but do not actively block logins on their own.",
          e: "Incorrect — Privilege policies restrict what a user can do after logging in, not the login process itself.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q14",
      text: "When establishing a secure login environment, administrators must configure various layers of protection. Which of the following elements are considered key aspects of login management within user management? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Authentication Methods",
        },
        {
          id: "b",
          text: "Session Management",
        },
        {
          id: "c",
          text: "Physical building architecture",
        },
        {
          id: "d",
          text: "Logging and Monitoring",
        },
        {
          id: "e",
          text: "Authorization and Access Control",
        },
      ],
      correctOptionIds: ["a", "b", "d", "e"],
      explanation: {
        correct:
          "Options A, B, D, and E are all essential aspects of managing the login environment securely.",
        incorrect: {
          c: "Incorrect — While physical access control is part of overall security, physical building architecture is not a software/logical login environment aspect.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q15",
      text: "An HR manager recently received a promotion to Finance Director. The IT department updates her system profile, expanding her access from read-only HR records to full access in the finance database, while removing her ability to approve HR timesheets. Which component of user management is actively being performed? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Deprovisioning (Offboarding)",
        },
        {
          id: "b",
          text: "Authentication factor setup",
        },
        {
          id: "c",
          text: "Provisioning Maintenance (Role updates & Access adjustments)",
        },
        {
          id: "d",
          text: "Passwordless authentication",
        },
        {
          id: "e",
          text: "Physical Access Control",
        },
      ],
      correctOptionIds: ["c"],
      explanation: {
        correct:
          "Option C is correct. The scenario describes the 'Maintenance' phase of Provisioning, where role updates (promotions/transfers) require access reviews and adjustments to permissions.",
        incorrect: {
          a: "Incorrect — Deprovisioning refers to completely disabling or deleting an account when an employee leaves the company.",
          b: "Incorrect — The scenario does not discuss changing her login credentials or authentication method.",
          d: "Incorrect — Passwordless authentication is irrelevant to changing database permissions.",
          e: "Incorrect — The scenario describes logical access to databases, not physical access to rooms.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q16",
      text: "An organization relies heavily on a centralized server for its daily operations. A new IT policy restricts standard employees from modifying critical system files, even if they originally created the file. Only the System Administrator has the privilege to alter these files. What privilege is the administrator exercising? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Controlling the physical server room temperature",
        },
        {
          id: "b",
          text: "Modifying the contents or attributes of any files, although owned by other users",
        },
        {
          id: "c",
          text: "Initiating biometric scans",
        },
        {
          id: "d",
          text: "Deprovisioning orphaned accounts",
        },
        {
          id: "e",
          text: "Enforcing the Acceptable Use Policy",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. One of the core administrator privileges is the ability to modify the contents or attributes of any file on the system, regardless of who owns it.",
        incorrect: {
          a: "Incorrect — While important, modifying digital file attributes is unrelated to physical temperature control.",
          c: "Incorrect — Initiating biometric scans is an authentication method, not a file modification privilege.",
          d: "Incorrect — Deprovisioning is account lifecycle management, not file attribute modification.",
          e: "Incorrect — AUP enforcement is an administrative HR/Policy task, whereas file modification is a technical system privilege.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q17",
      text: "Effective user management is crucial for maintaining Data Integrity within an organization. How does user management specifically prevent unauthorized modifications, deletions, or corruptions of data? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "By enforcing Role-Based Access Control (RBAC) to limit data modification to authorized personnel.",
        },
        {
          id: "b",
          text: "By eliminating the need for password expiration histories.",
        },
        {
          id: "c",
          text: "By tracking changes for accountability via Audit logs.",
        },
        {
          id: "d",
          text: "By ensuring regular access reviews so only necessary personnel retain privileges.",
        },
        {
          id: "e",
          text: "By allowing all users to have discretionary access to critical databases.",
        },
      ],
      correctOptionIds: ["a", "c", "d"],
      explanation: {
        correct:
          "Options A, C, and D are correct. Data integrity is maintained by limiting modification rights via RBAC, holding users accountable through audit logs, and consistently reviewing access permissions to avoid privilege creep.",
        incorrect: {
          b: "Incorrect — Password histories are an authentication control and do not directly control who modifies data post-login.",
          e: "Incorrect — Allowing all users discretionary access would severely compromise data integrity by increasing the risk of unauthorized modifications.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q18",
      text: "A hospital IT team is designing a hybrid access control model to secure patient records. They decide to use RBAC as the base layer, with ABAC layered on top. They also include a 'break-glass' override system. What is the primary purpose of this 'break-glass' override? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "To allow doctors immediate, life-saving access to records when off-duty or remote, bypassing strict ABAC rules.",
        },
        {
          id: "b",
          text: "To permanently disable Multi-Factor Authentication for the entire hospital network.",
        },
        {
          id: "c",
          text: "To trigger real-time tracking, logging, and SIEM alerts for administrators to review the anomaly.",
        },
        {
          id: "d",
          text: "To allow nurses to freely change their RBAC roles to 'Admin' whenever desired.",
        },
        {
          id: "e",
          text: "To automatically delete orphan accounts during a network outage.",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. The break-glass override mitigates the risk of overly restrictive context-aware rules blocking critical emergency access, but it immediately triggers alerts and logs for accountability.",
        incorrect: {
          b: "Incorrect — Break-glass is for temporary, tracked emergency access, not permanently disabling global security features like MFA.",
          d: "Incorrect — Break-glass does not allow users to permanently escalate their roles at will; it grants specific emergency data access.",
          e: "Incorrect — It has nothing to do with deleting orphan accounts.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q19",
      text: "A corporate user registration system implements a process where a user enters their name, chooses a password, and immediately receives a 6-digit OTP code to their provided email address. Which step of the User Registration Process does the OTP issuance represent? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Information Collection",
        },
        {
          id: "b",
          text: "Account Activation",
        },
        {
          id: "c",
          text: "Email Verification",
        },
        {
          id: "d",
          text: "Optional Profile Setup",
        },
        {
          id: "e",
          text: "Terms of Service Agreement",
        },
      ],
      correctOptionIds: ["c"],
      explanation: {
        correct:
          "Option C is correct. Sending an OTP or verification link to the provided address is specifically the 'Email Verification' phase of the registration process.",
        incorrect: {
          a: "Incorrect — Information collection is the initial entry of the name and email.",
          b: "Incorrect — Activation occurs *after* the OTP is successfully entered and verified.",
          d: "Incorrect — Profile setup involves adding non-essential information like an avatar.",
          e: "Incorrect — ToS is reviewing and accepting legal rules.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q20",
      text: "A university’s IT policy states that students are strictly prohibited from using the campus network to illegally download copyrighted movies. Furthermore, bandwidth consumption per student is capped to ensure fair access for everyone. Which specific components of the Computer Usage Policy (AUP) are being enforced here? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Network Usage",
        },
        {
          id: "b",
          text: "Prohibited Activities",
        },
        {
          id: "c",
          text: "Software & Hardware Usage",
        },
        {
          id: "d",
          text: "Data Security & Confidentiality",
        },
        {
          id: "e",
          text: "Acknowledgment & Training",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Bandwidth consumption regulation falls under 'Network Usage'. Illegal downloading is explicitly listed under 'Prohibited Activities'.",
        incorrect: {
          c: "Incorrect — This deals with installing/modifying company-provided assets, not downloading media over the network.",
          d: "Incorrect — Data security is about protecting sensitive corporate information, not stopping movie piracy.",
          e: "Incorrect — Acknowledgment is the act of signing the document, not the specific rule being broken.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q21",
      text: "An organization struggles with managing user access across 15 different internal software platforms. When employees change departments, administrators find it too complex to manually update permissions on every individual system, resulting in dangerous privilege creep. Which mechanism is best suited to resolve this specific issue? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Enforcing complex 28-character passwords",
        },
        {
          id: "b",
          text: "Implementing a strictly managed Role-Based Access Control (RBAC) policy",
        },
        {
          id: "c",
          text: "Centralizing access control to assign permissions to roles rather than individuals",
        },
        {
          id: "d",
          text: "Relying entirely on Discretionary Access Control (DAC) so managers can handle it locally",
        },
        {
          id: "e",
          text: "Disabling real-time monitoring to save administrative overhead",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. Managing access across multiple systems is complex and requires strict RBAC policies where permissions are tied to centralized roles. When an employee moves, changing their role automatically updates all associated permissions.",
        incorrect: {
          a: "Incorrect — Passwords do not dictate what resources a user can access after logging in.",
          d: "Incorrect — DAC distributes control, which would increase the chaos and complexity across 15 platforms.",
          e: "Incorrect — Disabling monitoring creates a massive security blind spot and does not solve the provisioning issue.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q22",
      text: "A system administrator notices that the company's central file server is running out of storage space. Upon investigation, they discover that a few users from the marketing department are saving terabytes of uncompressed personal video files. To maintain efficiency and fair resource allocation, the administrator enforces a rule limiting each marketing user to 50GB of storage. What concept is the administrator applying? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Authentication Factors",
        },
        {
          id: "b",
          text: "Controlling User Resources",
        },
        {
          id: "c",
          text: "Enforcing Policies for Storage Quotas",
        },
        {
          id: "d",
          text: "Passwordless Authentication",
        },
        {
          id: "e",
          text: "Multi-Factor Authentication (MFA)",
        },
      ],
      correctOptionIds: ["b", "c"],
      explanation: {
        correct:
          "Options B and C are correct. The administrator is controlling user resources by enforcing policies (specifically, storage quotas) to govern resource usage and maintain fair allocation.",
        incorrect: {
          a: "Incorrect — Authentication relates to login verification, not storage limits.",
          d: "Incorrect — Passwordless deals with credentials.",
          e: "Incorrect — MFA is an authentication security measure.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q23",
      text: "A newly hired employee clicks on a fraudulent email link claiming to be from the IT department, inadvertently giving hackers access to the company network. The investigation reveals the employee had never been briefed on social engineering or phishing tactics. Which common issue in user management allowed this breach? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Failure to implement physical access controls",
        },
        {
          id: "b",
          text: "Lack of User Training & Awareness",
        },
        {
          id: "c",
          text: "Over-restrictive session timeouts",
        },
        {
          id: "d",
          text: "Users lacking awareness of security best practices",
        },
        {
          id: "e",
          text: "Implementation of Attribute-Based Access Control",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. Without proper training and awareness of security best practices, employees remain highly vulnerable to social engineering and phishing attacks.",
        incorrect: {
          a: "Incorrect — This was a digital phishing attack, not a physical break-in.",
          c: "Incorrect — Session timeouts do not prevent users from clicking phishing links.",
          e: "Incorrect — ABAC is an authorization model and does not cause users to fall for phishing emails.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q24",
      text: "A military defense network utilizes an authorization model where users cannot alter access permissions for the files they create. Instead, a central authority strictly enforces policies, labeling files with sensitivity levels like 'Top Secret' and only granting access to users with matching clearance. Which access control model is this? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Discretionary Access Control (DAC)",
        },
        {
          id: "b",
          text: "Mandatory Access Control (MAC)",
        },
        {
          id: "c",
          text: "Role-Based Access Control (RBAC)",
        },
        {
          id: "d",
          text: "Single Sign-On (SSO)",
        },
        {
          id: "e",
          text: "Account Lockout Policy",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. Mandatory Access Control (MAC) is characterized by a central authority enforcing strict policies (often based on clearance levels), typical in military systems.",
        incorrect: {
          a: "Incorrect — DAC allows resource creators/owners to decide access, which is explicitly prohibited in this scenario.",
          c: "Incorrect — RBAC focuses on job roles, whereas MAC focuses on strict security clearance labels and central enforcement.",
          d: "Incorrect — SSO is an authentication mechanism.",
          e: "Incorrect — Lockout policy handles failed passwords.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q25",
      text: "To protect against credential reuse and brute-force attacks, an organization decides to enhance its Password & Credential Management policies. Which of the following technical mechanisms should they implement to ensure secure handling of authentication credentials? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Password hashing and salting",
        },
        {
          id: "b",
          text: "Removing password expiration histories",
        },
        {
          id: "c",
          text: "Account lockout policies",
        },
        {
          id: "d",
          text: "Enforcing the Principle of Least Privilege",
        },
        {
          id: "e",
          text: "Storing passwords in plain text for easy recovery",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. Password hashing and salting securely store credentials, while account lockout policies directly mitigate brute-force guessing attacks.",
        incorrect: {
          b: "Incorrect — Password histories are used to *prevent* credential reuse, removing them weakens security.",
          d: "Incorrect — Least Privilege is an authorization concept, not a password/credential management technique.",
          e: "Incorrect — Storing passwords in plain text is a severe security vulnerability.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q26",
      text: "During an external audit, an organization is praised for having excellent visibility and traceability of user actions, which proved vital during a recent forensic investigation. Which criteria of user management were highly effective in this scenario? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Monitoring & Auditing",
        },
        {
          id: "b",
          text: "Reviewing logs for compliance",
        },
        {
          id: "c",
          text: "Discretionary Access Control",
        },
        {
          id: "d",
          text: "Generating audit trails",
        },
        {
          id: "e",
          text: "Passwordless authentication",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. Visibility, traceability, and forensic support are the direct outputs of strong Monitoring & Auditing practices, which include generating audit trails and reviewing logs.",
        incorrect: {
          c: "Incorrect — DAC handles authorization and does not inherently provide traceability or auditing.",
          e: "Incorrect — Passwordless authentication improves login security/UX, but does not provide forensic logs of user activity.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q27",
      text: "A well-structured user management system not only secures the network but also provides an 'Enhanced User Experience'. Which of the following implementations directly contribute to improving efficiency and user satisfaction while reducing administrative overhead? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Self-service options for password resets and access requests",
        },
        {
          id: "b",
          text: "Simplified authentication via Single Sign-On (SSO) or biometric login",
        },
        {
          id: "c",
          text: "Enforcing 28-character complex passwords changed weekly",
        },
        {
          id: "d",
          text: "Intuitive access control with easy role assignments",
        },
        {
          id: "e",
          text: "Removing all auditing logs to speed up system performance",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. These features empower users to solve their own issues (self-service), reduce login friction (SSO), and streamline administrative assignments, leading to a seamless experience.",
        incorrect: {
          c: "Incorrect — This creates massive friction and ruins the user experience.",
          e: "Incorrect — Removing audit logs destroys security and compliance visibility; it is not a valid method for enhancing user experience.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q28",
      text: "As part of the Computer Usage Policy (AUP), the 'Internet & Email Usage' section usually outlines specific rules for employees. Which of the following rules belong in this specific section? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Acceptable online behavior",
        },
        {
          id: "b",
          text: "Restrictions on personal use of company email",
        },
        {
          id: "c",
          text: "Spam policies",
        },
        {
          id: "d",
          text: "Guidelines on installing company-provided hardware",
        },
        {
          id: "e",
          text: "Disciplinary actions for general policy breaches",
        },
      ],
      correctOptionIds: ["a", "b", "c"],
      explanation: {
        correct:
          "Options A, B, and C are correct. The Internet & Email Usage component specifically governs online behavior, spam handling, and limitations on using corporate communication tools for personal matters.",
        incorrect: {
          d: "Incorrect — This belongs in the 'Software & Hardware Usage' section.",
          e: "Incorrect — This belongs in the 'Consequences of Violation' section.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q29",
      text: "A standard user is upset because they are not allowed to install unapproved third-party software on their work laptop. The IT team rejects the request, citing ethical and policy responsibilities. Which ethical responsibility is the standard user failing to uphold by demanding unauthorized software installation? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Respect for Policies",
        },
        {
          id: "b",
          text: "Fairness and Impartiality",
        },
        {
          id: "c",
          text: "Compliance",
        },
        {
          id: "d",
          text: "Transparency",
        },
        {
          id: "e",
          text: "Data protection",
        },
      ],
      correctOptionIds: ["a", "c"],
      explanation: {
        correct:
          "Options A and C are correct. As a user, ethical conduct dictates 'Respect for Policies' and 'Compliance' with the established organizational rules regarding IT resources.",
        incorrect: {
          b: "Incorrect — Fairness and Impartiality is a specific ethical responsibility of Administrators, not general users.",
          d: "Incorrect — Transparency is an Administrator responsibility regarding open communication of policies.",
          e: "Incorrect — While unapproved software might be a security risk, the direct ethical failure here is disregarding the established rules (Respect for Policies/Compliance).",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q30",
      text: "A company requires that every new employee must formally sign a document stating they have read and understood the rules regarding data security, prohibited activities, and software usage. They must also complete a mandatory cybersecurity module. Which component of the Computer Usage Policy does this fulfill? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Consequences of Violation",
        },
        {
          id: "b",
          text: "Acknowledgment & Training",
        },
        {
          id: "c",
          text: "Policy Review & Updates",
        },
        {
          id: "d",
          text: "Network Usage",
        },
        {
          id: "e",
          text: "Authorized Use",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. Requiring a formal signature (agreement) and completion of a security module directly fulfills the 'Acknowledgment & Training' component of the AUP.",
        incorrect: {
          a: "Incorrect — Consequences outline the punishment, not the initial agreement phase.",
          c: "Incorrect — Policy Review & Updates ensures the document is kept current with modern threats, not employee signing.",
          d: "Incorrect — Network usage dictates bandwidth and remote access rules.",
          e: "Incorrect — Authorized use defines who can access systems, not the training and agreement tracking.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q31",
      text: "An IT team discovers that an employee has been systematically attempting to escalate their privileges to access restricted payroll data. The system successfully blocked these attempts, but the employee's intent was clearly malicious. How does effective user management serve as a form of Risk Management in this context? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "It proactively addresses vulnerabilities in access and permissions.",
        },
        {
          id: "b",
          text: "It helps prevent insider threats and privilege escalation.",
        },
        {
          id: "c",
          text: "It completely removes the need for regulatory compliance.",
        },
        {
          id: "d",
          text: "It reduces the risk of unauthorized activities succeeding.",
        },
        {
          id: "e",
          text: "It ensures employees can eventually bypass RBAC if they try hard enough.",
        },
      ],
      correctOptionIds: ["a", "b", "d"],
      explanation: {
        correct:
          "Options A, B, and D are correct. User management acts as risk mitigation by identifying vulnerabilities, blocking hacking attempts/privilege escalation (unauthorized activities), and mitigating insider threats.",
        incorrect: {
          c: "Incorrect — User management *improves* compliance; it does not remove the need for it.",
          e: "Incorrect — Properly managed RBAC should never be bypassable by persistence.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q32",
      text: "In Identity and Access Management (IAM), policies and technical controls are implemented to ensure the CIA triad. If a company enforces strict policies preventing data from being improperly modified by unauthorized personnel, which pillar of the triad is primarily being protected? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Confidentiality",
        },
        {
          id: "b",
          text: "Integrity",
        },
        {
          id: "c",
          text: "Availability",
        },
        {
          id: "d",
          text: "Authentication",
        },
        {
          id: "e",
          text: "Provisioning",
        },
      ],
      correctOptionIds: ["b"],
      explanation: {
        correct:
          "Option B is correct. Integrity ensures that data is accurate, reliable, and not improperly modified or corrupted.",
        incorrect: {
          a: "Incorrect — Confidentiality ensures data is only *viewed* by authorized users.",
          c: "Incorrect — Availability ensures authorized users can access resources when needed, not preventing modification.",
          d: "Incorrect — Authentication proves identity.",
          e: "Incorrect — Provisioning is an account creation lifecycle phase.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q33",
      text: "To address the vulnerabilities of a compromised admin account that had no secondary verification, the company mandates MFA for all high-privilege roles. In an MFA system, which combinations represent valid distinct authentication factors? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "A password AND a PIN code",
        },
        {
          id: "b",
          text: "A password AND an OTP token",
        },
        {
          id: "c",
          text: "A smart card AND a fingerprint scan",
        },
        {
          id: "d",
          text: "A fingerprint scan AND a retina scan",
        },
        {
          id: "e",
          text: "A PIN code AND a facial recognition scan",
        },
      ],
      correctOptionIds: ["b", "c", "e"],
      explanation: {
        correct:
          "Options B, C, and E are correct because they combine distinct categories: (B) Know+Have, (C) Have+Are, and (E) Know+Are. True MFA requires combining factors from *different* categories.",
        incorrect: {
          a: "Incorrect — A password and a PIN are both 'Something you know'. Using two from the same category is not true MFA.",
          d: "Incorrect — Fingerprint and retina are both 'Something you are'. This is also not true MFA across multiple distinct categories.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q34",
      text: "The IT department is conducting an internal seminar on Access Control Implementation Layers. They explain that securing the building premises and server rooms is just as critical as securing the databases. Which technique falls specifically under Logical Access Control? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Access Control Lists (ACLs)",
        },
        {
          id: "b",
          text: "Capability-based systems",
        },
        {
          id: "c",
          text: "Biometric locks on server room doors",
        },
        {
          id: "d",
          text: "Turnstiles at the building entrance",
        },
        {
          id: "e",
          text: "Context-aware access restrictions for an application",
        },
      ],
      correctOptionIds: ["a", "b", "e"],
      explanation: {
        correct:
          "Options A, B, and E are correct. ACLs, capability-based systems, and context-aware software restrictions are all logical access controls used to protect systems, databases, and applications digitally.",
        incorrect: {
          c: "Incorrect — Biometric locks on physical doors are Physical Access Controls.",
          d: "Incorrect — Turnstiles manage physical building access.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q35",
      text: "An organization faces constant issues with 'orphan accounts'. When an employee leaves, their active account is forgotten and left unmonitored, creating a prime target for cyber threats. Which phase of the user management lifecycle is the organization failing to execute properly? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Provisioning (Onboarding)",
        },
        {
          id: "b",
          text: "Deprovisioning (Offboarding)",
        },
        {
          id: "c",
          text: "Authentication",
        },
        {
          id: "d",
          text: "Revoking system access",
        },
        {
          id: "e",
          text: "Archiving user data if required",
        },
      ],
      correctOptionIds: ["b", "d"],
      explanation: {
        correct:
          "Options B and D are correct. Leaving an orphan account active means the organization failed to perform Deprovisioning (Offboarding), specifically the step of revoking system access and disabling the account.",
        incorrect: {
          a: "Incorrect — Onboarding creates the account; the failure happens at the end of the lifecycle.",
          c: "Incorrect — Authentication verifies identity, it does not manage the lifecycle of the account.",
          e: "Incorrect — While archiving is part of offboarding, failing to archive data does not create the security vulnerability of an active orphan account.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q36",
      text: "A university’s User Privilege Policy must be redesigned to ensure minimal security exposure while maintaining operational functionality. The lead architect insists that users must strictly be assigned only the permissions necessary to perform their specific job tasks, and nothing more. What principle is the architect applying? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Principle of Least Privilege (POLP)",
        },
        {
          id: "b",
          text: "Separation of Duties (SOD)",
        },
        {
          id: "c",
          text: "Discretionary Access Control (DAC)",
        },
        {
          id: "d",
          text: "Account Lockout",
        },
        {
          id: "e",
          text: "Minimum required access",
        },
      ],
      correctOptionIds: ["a", "e"],
      explanation: {
        correct:
          "Options A and E are correct. The architect is applying the Principle of Least Privilege (POLP), which ensures users only get the minimum required access to perform their duties.",
        incorrect: {
          b: "Incorrect — SOD prevents conflicts of interest by dividing tasks among multiple people, which is different from granting minimal access.",
          c: "Incorrect — DAC relies on owner discretion, not strict minimal access enforcement.",
          d: "Incorrect — Account lockout handles failed login attempts.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q37",
      text: "A corporate auditor is reviewing the 'Controlling User Resources' framework. They notice that the administrator can restrict CPU usage per application, set maximum storage quotas, and define which specific directories a user can execute files in based on their role. What key aspects of resource control are demonstrated here? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Permissions & Access Control (defining execute rights)",
        },
        {
          id: "b",
          text: "Policies & Enforcement (restricting CPU and storage quotas)",
        },
        {
          id: "c",
          text: "Email Verification",
        },
        {
          id: "d",
          text: "Monitoring & Reporting",
        },
        {
          id: "e",
          text: "Federated Identity",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Defining execute rights is part of Permissions & Access Control (e.g., using RBAC/ACLs), while restricting CPU and storage quotas falls under Policies & Enforcement.",
        incorrect: {
          c: "Incorrect — Email verification is part of user registration.",
          d: "Incorrect — While monitoring tracks resource consumption, the scenario explicitly describes restricting and enforcing limits, not tracking them.",
          e: "Incorrect — Federated Identity is an authentication method.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q38",
      text: "An IT department is drafting the 'Account Policy' guidelines for a new corporate network. To reduce security risks associated with employees leaving their computers unattended in the office, which specific policy configuration should they prioritize? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Session Management Policies",
        },
        {
          id: "b",
          text: "Session timeouts and automatic logouts",
        },
        {
          id: "c",
          text: "Password complexity requirements",
        },
        {
          id: "d",
          text: "Audit and Compliance Policies",
        },
        {
          id: "e",
          text: "Account Lockout Policies",
        },
      ],
      correctOptionIds: ["a", "b"],
      explanation: {
        correct:
          "Options A and B are correct. Session Management Policies control session timeouts and automatic logouts, which directly mitigate the risk of an unauthorized person accessing an unattended, already-logged-in session.",
        incorrect: {
          c: "Incorrect — Password complexity does not protect an already open, unattended session.",
          d: "Incorrect — Auditing tracks activity but does not actively close an unattended session.",
          e: "Incorrect — Lockout policies apply to failed login attempts, not unattended active sessions.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q39",
      text: "When resolving a data breach case involving a former administrator whose account remained active for 8 months, the security consultant proposes a layered strategy. Which element serves as the 'Monitoring mechanism' in their proposed solution? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Deploying Security Information and Event Management (SIEM) systems",
        },
        {
          id: "b",
          text: "Enforcing Multi-Factor Authentication (MFA) across the board",
        },
        {
          id: "c",
          text: "Mandating immediate disabling of accounts upon employee departure",
        },
        {
          id: "d",
          text: "Actively tracking user activities in real-time to flag anomalies",
        },
        {
          id: "e",
          text: "Conducting regular access reviews",
        },
      ],
      correctOptionIds: ["a", "d"],
      explanation: {
        correct:
          "Options A and D are correct. Deploying a SIEM system and tracking activities in real-time constitute the technical monitoring mechanisms required to detect anomalies.",
        incorrect: {
          b: "Incorrect — MFA is a 'Technical Control' layer for authentication, not a monitoring mechanism.",
          c: "Incorrect — Mandating disabling is a 'Policy' layer.",
          e: "Incorrect — Access reviews are a policy/maintenance activity, distinct from automated real-time SIEM monitoring.",
        },
      },
    },
    {
      type: QuestionType.MULTIPLE_SELECT,
      id: "ms-q40",
      text: "A corporate IT helpdesk observes that 70% of their daily tickets are simply password reset requests. The CISO wants to implement a solution that drastically reduces this administrative overhead while providing a seamless, intuitive experience for employees accessing multiple internal applications. Which solution best meets these criteria? (Select all that apply)",
      options: [
        {
          id: "a",
          text: "Single Sign-On (SSO)",
        },
        {
          id: "b",
          text: "Mandatory Access Control (MAC)",
        },
        {
          id: "c",
          text: "Increasing password length to 28 characters",
        },
        {
          id: "d",
          text: "Federated Identity",
        },
        {
          id: "e",
          text: "Self-service options for password resets",
        },
      ],
      correctOptionIds: ["a", "e"],
      explanation: {
        correct:
          "Options A and E are correct. SSO allows users to log in once for all applications, vastly reducing password fatigue. Self-service password resets directly remove the burden from the IT helpdesk, lowering administrative overhead while keeping the experience intuitive.",
        incorrect: {
          b: "Incorrect — MAC is an authorization model and does nothing to help with password resets.",
          c: "Incorrect — Increasing password length will likely cause *more* users to forget their passwords, increasing helpdesk tickets.",
          d: "Incorrect — Federated Identity is primarily for trust across *different* organizations, whereas SSO is best for multiple *internal* applications as requested in the scenario.",
        },
      },
    },
  ],
};
