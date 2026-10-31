export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  impact: string;
  featured: boolean;
  gradient: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  logo?: string;
  current?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}
