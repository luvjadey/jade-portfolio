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
    resume: "Resume - Jade Yang.pdf",
    headshot: "/images/Headshot.jpg",
    shortIntro:
      "Cybersecurity graduate and bilingual professional (English / 中文) passionate about tech, national security, and protecting critical assets through mission-driven work.",
    aboutMe:
      "Hi there! My name is Jade Yang, and I'm a cybersecurity professional (English/中文) who is passionate about technology, national security, and protecting critical systems. I'm currently seeking cybersecurity opportunities where I can continue learning, growing, and contributing to meaningful, mission driven work.\n\nI've always loved solving problems, learning new things, and challenging myself in fast paced environments. Cybersecurity excites me because technology is constantly evolving, and I want to be at the forefront of innovation in defense cybersecurity as new threats continue to emerge. I'm passionate about protecting critical systems, strengthening cyber defenses, and contributing to missions that make a real world impact.\n\nOutside of cybersecurity, I enjoy playing chess, tennis, spending time outdoors, and meeting new people. I'm always excited to connect with others, take on new challenges, and continue growing both personally and professionally!",
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
    {
      title: "Student Consultant",
      company: "Hacking for Defense® (H4D)",
      location: "Tempe, AZ",
      startDate: "August 2025",
      endDate: "December 2025",
      current: false,
      logo: "/1620238916.jpg",
      bullets: [
        "Designed a Public–Private Partnership (PPP) business model to support Multi-Domain Operations (MDO) training for the Indiana National Guard without requiring additional federal funding",
        "Presented an executive-level proposal to DoD and National Guard stakeholders that streamlined operational readiness, reduced logistical burden, and integrated private-sector innovation into defense capability development",
      ],
      skills: ["Military Logistics", "Cross-team Collaboration"],
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
