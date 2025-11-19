export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  bullets: string[];
  skills?: string[];
}

export interface Leadership {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  bullets: string[];
  skills?: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    pronouns: string;
    phone: string;
    email: string;
    linkedin: string;
    resume: string; // Path or URL to resume
    headshot: string; // Path to headshot image
    elevatorPitch: string;
  };
  education: {
    degree: string;
    university: string;
    focus: string;
    achievements: string[];
    coursework: string[];
  };
  experience: Experience[];
  leadership: Leadership[];
  skills: {
    languages: string[];
    technical: string[];
    certifications: string[];
    clearances: string[];
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Jade Yang",
    pronouns: "She/Her",
    phone: "(541) 941-5341",
    email: "Jadeyang1314@gmail.com",
    linkedin: "https://www.linkedin.com/in/jadeyang27",
    resume: "/resume.pdf", // Update this path to your resume file
    headshot: "/images/Headshot.jpg", // User will need to add their headshot
    elevatorPitch: "I'm Jade Yang. I'm a senior at Arizona State University studying Applied Computing with a focus in cybersecurity, and I'm passionate about national security work. I started early—enrolling in community college at 16—and since then I've grown through leadership roles as a tennis instructor, site director, and President of Club Tennis at ASU.\n\nAt 19, I earned an FBI Honors Internship, and now I'm a student consultant in the Hacking for Defense program, working with the Indiana National Guard and the Department of Defense. I'm driven, eager to learn, and committed to protecting critical assets while contributing as both a leader and a team member.",
  },
  education: {
    degree: "Bachelor of Science in Applied Computing -- Cybersecurity",
    university: "Arizona State University",
    focus: "Cybersecurity",
    achievements: [
      "Awarded Dean's List Certificate for 3 Semesters",
    ],
    coursework: [
      "Global Justice (POS480)",
      "Private Pilot Ground School",
      "Database Management (SER322)",
      "Network Security (ACO431)",
      "Design Thinking for National Security (ACO482)",
      "Digital Forensics (FOR350)",
      "U.S. Intelligence Community (INR294)",
    ],
  },
  experience: [
    {
      title: "Student Workforce Trainee",
      company: "Federal Bureau of Investigation (FBI)",
      location: "San Francisco, CA | Phoenix, AZ",
      startDate: "June 2025",
      endDate: "Present",
      current: true,
      bullets: [
        "Obtained a Top-Secret TS/SCI Clearance",
        "Led and managed an outreach initiative to deliver counterintelligence defensive briefings to elected officials and senior staff across the Bay Area, including district directors and individuals assessed as vulnerable to foreign malign influence",
        "Analyzed administrative subpoenas returns to identify patterns and consistencies; authored formal analytical reports to support casework",
        "Conducted open-source intelligence (OSINT) research using social media platforms and news outlets in multiple languages to support casework and investigative analysis",
        "Collaborated directly with Special Agents and field personnel to support investigative operations, contributing research and analytical insights to active casework",
      ],
    },
    {
      title: "Student Consultant",
      company: "Hacking for Defense (H4D)",
      location: "Arizona State University, Tempe, AZ",
      startDate: "September 2025",
      endDate: "Present",
      current: true,
      bullets: [
        "Partnered with the Indiana Air National Guard and Hacking for Defense (H4D) to design scalable, cost-effective Multi-Domain Operations (MDO) training range concepts for Camp Atterbury, critical to future Intelligence & Electronic Warfare (IEW) company training contracts",
        "Analyzed cross-domain training requirements—land, air, sea, cyber, electronic, and space—identifying needs such as signal detection, emitter effectiveness, and counter-jamming operations",
        "Collaborated with Department of Defense sponsors, Guard leadership, and technical mentors to ensure solutions addressed infrastructure, funding, and readiness needs while providing real-world applicability and impact on future defense training investments",
      ],
      skills: ["Military Logistics", "Cross-team Collaboration"],
    },
  ],
  leadership: [
    {
      title: "President",
      organization: "ASU Club Tennis",
      location: "Tempe, AZ",
      startDate: "May 2025",
      endDate: "Present",
      current: true,
      bullets: [
        "Oversee team operations, $30,000+ budget management, public relations, and compliance with ASU Sport Club policies. Acted as primary liaison with USTA, ASU Sports Clubs, and other university teams",
        "Lead planning and logistics for tournaments with 150+ players, including the annual Devil's Classic, while supporting officer coordination and maintaining a positive, inclusive team culture. Strengthened skills in organization, communication, and conflict resolution through hands-on leadership",
        "Represent the public image of the team with professionalism and integrity",
        "Coordinate with presidents of other universities regarding tournament registration and scheduling",
        "Ensure officers and players comply with Club, ASU, and USTA regulations while addressing issues and disputes as they arise",
        "Resolve conflicts within the executive board and among players to maintain team cohesion and effectiveness",
      ],
      skills: ["Conflict Resolution", "Team Leadership"],
    },
    {
      title: "Site Director | Lead Instructor",
      organization: "United States Tennis Association PNW",
      location: "San Francisco, CA | Medford, OR",
      startDate: "June 2024",
      endDate: "August 2024",
      current: false,
      bullets: [
        "Employed example-based instruction style to build trust as hands-on leader and guaranteed safety of activities",
        "Facilitated open and constructive communication across staff, parents, and student groups to align on goals and maintain high program standards",
      ],
    },
  ],
  skills: {
    languages: ["English", "Mandarin", "Fujianese Dialect"],
    technical: [
      "Java",
      "Linux",
      "Military Logistics",
      "Google Suite",
      "Microsoft Office",
      "OSINT",
      "Data Analytics",
    ],
    certifications: ["CPR/AED/First Aid Certification"],
    clearances: ["Top Secret/TS SCI"],
  },
};

