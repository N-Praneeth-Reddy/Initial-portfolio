import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "{ }",
    skills: [
      { name: "Python", level: 5 },
      { name: "SQL", level: 4 },
      { name: "C / C++", level: 3 },
    ],
  },
  {
    category: "ML / Deep Learning",
    icon: "🧠",
    skills: [
      { name: "Scikit-learn", level: 5 },
      { name: "TensorFlow", level: 4 },
      { name: "Deep Learning", level: 4 },
      { name: "NLP", level: 4 },
      { name: "Computer Vision", level: 3 },
    ],
  },
  {
    category: "LLM / GenAI",
    icon: "⚡",
    skills: [
      { name: "LangChain", level: 5 },
      { name: "LangGraph", level: 5 },
      { name: "RAG Pipelines", level: 5 },
      { name: "Agentic AI", level: 5 },
      { name: "Prompt Engineering", level: 4 },
      { name: "Generative AI", level: 4 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "🔧",
    skills: [
      { name: "FastAPI", level: 5 },
      { name: "Pydantic", level: 5 },
      { name: "MCP", level: 4 },
      { name: "A2A Protocol", level: 4 },
      { name: "Microservices", level: 4 },
      { name: "REST APIs", level: 5 },
    ],
  },
  {
    category: "Infra / DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 4 },
      { name: "Git", level: 5 },
      { name: "CI/CD", level: 4 },
      { name: "MLOps", level: 4 },
      { name: "LLMOps", level: 4 },
      { name: "Cloud Platforms", level: 3 },
    ],
  },
  {
    category: "Vector Databases",
    icon: "🗄️",
    skills: [
      { name: "FAISS", level: 5 },
      { name: "Qdrant", level: 4 },
      { name: "Vector DBs", level: 5 },
    ],
  },
];
