export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  logo?: string;
  bullets: string[];
  skills?: string[];
}

export interface Project {
  title: string;
  date: string;
  bullets: string[];
  skills?: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    pronouns: string;
    citizenship: string;
    email: string;
    linkedin: string;
    github: string;
    resume: string;
    headshot: string;
    shortIntro: string;
    aboutMe: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: {
    securityOps: string[];
    tools: string[];
    programming: string[];
    languages: string[];
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Jade Yang",
    pronouns: "She/Her",
    citizenship: "U.S. Citizen",
    email: "jadeyang1314@gmail.com",
    linkedin: "https://www.linkedin.com/in/jadeyang27",
    github: "https://github.com/luvjadey",
    resume: "Jade Yang Resume.pdf",
    headshot: "/images/Headshot.jpg",
    shortIntro:
      "Cybersecurity graduate and bilingual professional (English / 中文) passionate about tech, national security, and protecting critical assets through mission-driven work.",
    aboutMe:
      "I graduated in May 2026 from Arizona State University with a B.S. in Applied Computing — Cybersecurity (GPA 3.8, Summa Cum Laude, Dean's List), and I'm currently open to new cybersecurity roles. Outside of work, I led my team to a 3rd place finish at an Aerospace Cybersecurity CTF as Captain, and served as President of ASU Club Tennis — managing a 55+ member organization and a $35K+ annual budget.",
  },
  experience: [
    {
      title: "Data Analyst",
      company: "Southwest Mission Acceleration Center",
      location: "Phoenix, AZ",
      startDate: "January 2026",
      endDate: "Present",
      current: true,
      logo: "/SWMAC Logo.jpg",
      bullets: [
        "Engineered automated Python and API-driven data pipelines to ingest and process large-scale structured and unstructured datasets for anomaly detection, threat analysis, and cybersecurity intelligence workflows, reducing manual processing time by 40%",
        "Configured and secured AWS VPC infrastructure using Security Groups and NACLs to enforce network segmentation, least-privilege access, and attack surface reduction in alignment with cloud security best practices",
      ],
      skills: ["Python", "AWS VPC", "Threat Analysis", "Data Pipelines"],
    },
    {
      title: "Honors Intern",
      company: "Federal Bureau of Investigation (FBI)",
      location: "San Francisco, CA | Phoenix, AZ",
      startDate: "June 2025",
      endDate: "February 2026",
      current: false,
      logo: "/FBI Logo.png",
      bullets: [
        "TS/SCI with CI Polygraph",
        "Led and supported 5+ counterintelligence outreach briefings for 30+ elected officials and senior staff across the Bay Area, communicating foreign influence and insider threat risks to non-technical stakeholders",
        "Analyzed OSINT data to produce written assessments supporting threat identification, risk prioritization, and operational decision-making",
      ],
      skills: ["TS/SCI Clearance", "Counterintelligence", "OSINT", "Briefings"],
    },
  ],
  projects: [
    {
      title: "CTA Intelligence Classification Pipeline",
      date: "April 2026",
      bullets: [
        "Engineered an automated Python pipeline to classify 1,700+ defense company records against DoD Critical Technology Areas (CTAs) by integrating web scraping (BeautifulSoup), Salesforce lead data, and a locally hosted LLM (Ollama) with structured JSON output (Pydantic validation), achieving confidence scoring ≥ 0.90 and flagging low-confidence results for analyst review",
      ],
      skills: ["Python", "BeautifulSoup", "Ollama", "Pydantic", "Salesforce"],
    },
    {
      title: "SAM.gov Company Lookup & Threat Vetting Tool",
      date: "February 2026",
      bullets: [
        "Developed a Python-based tool integrating with the SAM.gov API to securely extract, validate, and process company identifiers (CAGE, UEI, location) and automate structured CSV output, improving efficiency and accuracy for threat analysis, vendor verification, and compliance-related investigations",
      ],
      skills: ["Python", "SAM.gov API", "CSV Automation", "Threat Vetting"],
    },
    {
      title: "Aerospace Cybersecurity CTF — 3rd Place / 26 Teams",
      date: "April 2026",
      bullets: [
        "Led offensive and defense operations in a simulated airport-wide cyber incident as CTF Captain; conducted penetration testing and vulnerability exploitation using Nmap, Wireshark, and Burp Suite",
        "Performed network enumeration, privilege escalation, and reverse engineering of an encrypted malware sample in a controlled, realistic adversarial environment",
      ],
      skills: ["Nmap", "Wireshark", "Burp Suite", "Pen Testing", "Reverse Engineering"],
    },
  ],
  skills: {
    securityOps: [
      "Threat Analysis",
      "OSINT",
      "Penetration Testing",
      "Vulnerability Assessment",
      "Incident Response",
      "Malware Analysis",
      "Network Enumeration",
      "Privilege Escalation",
      "Log Analysis",
    ],
    tools: [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Kali Linux",
      "Ubuntu / Linux",
      "FTK Imager",
      "WinPrefetch View",
      "AWS VPC (Security Groups, NACLs)",
    ],
    programming: [
      "Python (API integration, data pipelines, web scraping)",
      "Java",
      "C",
      "HTML",
    ],
    languages: ["English", "Mandarin (Fluent)"],
  },
};
