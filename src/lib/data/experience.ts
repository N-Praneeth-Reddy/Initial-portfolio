import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "infosys",
    company: "Infosys",
    role: "Specialist Programmer",
    period: "Aug 2025 – Present",
    location: "Hyderabad, Telangana",
    current: true,
    bullets: [
      "Architected multi-turn conversational AI systems and agentic workflows using LangGraph and LangChain, integrating persistent memory and real-time LLM invocations with prompt engineering best practices.",
      "Developed and deployed scalable backend REST APIs using FastAPI and Pydantic to support AI and RAG pipelines on AWS cloud platforms.",
      "Designed validation-centric AI pipelines and modular agent architectures leveraging the A2A (Agent-to-Agent) framework and MCP tools, implementing MLOps and LLMOps best practices.",
    ],
  },
  {
    id: "pwc",
    company: "PwC",
    role: "Cyber Security Launchpad — Trainee",
    period: "Feb 2025 – Apr 2025",
    location: "Chennai, Tamil Nadu",
    bullets: [
      "Completed intensive technical engineering training in Python, Java (OOP), and SQL, establishing a strong foundation in backend development and data science methodologies.",
      "Gained foundational exposure to DevOps concepts, focusing on version control workflows, CI/CD pipelines, and deployment fundamentals.",
      "Analyzed core cybersecurity frameworks, focusing on threat mitigation, security principles, and enterprise risk management strategies.",
    ],
  },
];
