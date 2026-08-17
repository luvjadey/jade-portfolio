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
    cloudInfrastructure: string[];
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
      "Platform Engineer at Autonomous Cyber and bilingual professional (English / 中文) passionate about tech, national security, and protecting critical assets through mission-driven work.",
    aboutMe:
      "Hi there! My name is Jade Yang, and I'm a cybersecurity professional (English/中文) who is passionate about technology, national security, and protecting critical systems. I'm currently a Platform Engineer at Autonomous Cyber, where I build the cloud infrastructure and developer tooling behind AI-driven security work — continuing to learn, grow, and contribute to meaningful, mission driven work.\n\nI've always loved solving problems, learning new things, and challenging myself in fast paced environments. Cybersecurity excites me because technology is constantly evolving, and I want to be at the forefront of innovation in defense cybersecurity as new threats continue to emerge. I'm passionate about protecting critical systems, strengthening cyber defenses, and contributing to missions that make a real world impact.\n\nOutside of cybersecurity, I enjoy playing chess, tennis, and spending time outdoors. I'm always excited to connect with others, take on new challenges, and continue growing both personally and professionally!",
  },
  experience: [
    {
      title: "Platform Engineer",
      company: "Autonomous Cyber",
      location: "San Francisco, CA",
      startDate: "August 2026",
      endDate: "Present",
      current: true,
      logo: "/autonomous_cyber_logo.jpg",
      bullets: [
        "Build internal developer platforms and self-service tooling that let engineers provision environments, databases, and logs independently",
        "Manage cloud-native infrastructure as code and automate CI/CD pipelines to make shipping code fast, reliable, and repeatable",
        "Establish golden paths — pre-packaged workflows and templates with security and compliance built in — to cut repetitive toil for product developers",
      ],
      skills: [
        "Terraform",
        "AWS",
        "Kubernetes",
        "Docker",
        "CI/CD Pipelines",
        "Python",
      ],
    },
    {
      title: "Data Analyst",
      company: "Southwest Mission Acceleration Center",
      location: "Phoenix, AZ",
      startDate: "January 2026",
      endDate: "May 2026",
      current: false,
      logo: "/SWMAC Logo.jpg",
      bullets: [
        "Engineered automated Python and API-driven data pipelines to ingest and process large-scale structured and unstructured datasets for intelligence workflows, reducing manual processing time by 40%",
        "Researched emerging defense technologies and companies to support government funding analysis and technology assessment efforts",
      ],
      skills: ["Python", "API Integration", "Data Pipelines", "Technology Assessment"],
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
        "TS/SCI with full scope polygraph",
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
      title: "Linux Security Homelab",
      date: "May 2026",
      bullets: [
        "Built a layered Linux defense environment simulating enterprise security operations by hardening SSH, UFW, Fail2Ban, and Auditd across 6 critical system paths, validating full detection-to-ban response in <30 seconds against a live Hydra brute-force simulation across 100+ credential permutations",
        "Deployed WireGuard VPN, NGINX reverse proxy, and Wazuh SIEM to establish encrypted network segmentation and centralized log correlation across 3+ services, enabling real-time threat visibility through custom Grafana dashboards",
      ],
      skills: [
        "Ubuntu Server",
        "UFW",
        "Fail2Ban",
        "Auditd",
        "Hydra",
        "WireGuard",
        "Wazuh",
        "Grafana",
      ],
    },
    {
      title: "CTA Intelligence Classification Pipeline",
      date: "April 2026",
      bullets: [
        "Engineered an automated Python pipeline to classify 1,700+ defense company records against DoD Critical Technology Areas (CTAs) by integrating web scraping (BeautifulSoup), Salesforce lead data, and a locally hosted LLM (Ollama) with structured JSON output (Pydantic validation), achieving confidence scoring ≥ 0.90 and flagging low-confidence results for analyst review",
      ],
      skills: ["Python", "BeautifulSoup", "Ollama", "Pydantic", "Salesforce"],
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
    cloudInfrastructure: [
      "AWS",
      "Azure",
      "GCP",
      "Cloud Networking & IAM",
      "Docker",
      "Kubernetes",
      "Terraform (Infrastructure as Code)",
      "AWS VPC (Security Groups, NACLs)",
      "Secrets Management",
    ],
    tools: [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Kali Linux",
      "Ubuntu / Linux",
      "FTK Imager",
      "WinPrefetch View",
      "UFW",
      "Fail2Ban",
      "Auditd",
      "WireGuard",
      "NGINX",
      "Wazuh",
      "GitHub Actions (CI/CD)",
      "Prometheus / Grafana",
      "Ollama",
      "Pydantic",
    ],
    programming: [
      "Python (API integration, data pipelines, web scraping)",
      "Go",
      "Bash",
      "Windows PowerShell",
      "Java",
      "C",
      "TypeScript / JavaScript",
    ],
    languages: ["English", "Mandarin (Fluent)"],
  },
};
