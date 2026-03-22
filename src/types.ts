export interface Project {
  title: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}
