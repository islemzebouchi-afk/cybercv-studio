export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  photo: string;
  linkedin: string;
  website: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  skills: string[];
  education: Education[];
}

export type TemplateStyle = 'minimalist' | 'modern-dark' | 'creative-blue' | 'professional-photo';

export const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: 'Alex Johnson',
    title: 'Senior Software Engineer',
    email: 'alex@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    summary: 'Passionate engineer with 8+ years of experience building scalable web applications and leading cross-functional teams.',
    photo: '',
    linkedin: 'linkedin.com/in/alexjohnson',
    website: 'alexjohnson.dev',
  },
  experiences: [
    {
      id: '1',
      company: 'TechCorp Inc.',
      position: 'Senior Software Engineer',
      startDate: '2021-01',
      endDate: '',
      current: true,
      description: 'Led development of microservices architecture serving 2M+ users. Reduced API latency by 40% through optimization.',
    },
    {
      id: '2',
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      startDate: '2018-06',
      endDate: '2020-12',
      current: false,
      description: 'Built React-based dashboards and Node.js APIs. Implemented CI/CD pipelines reducing deployment time by 60%.',
    },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'PostgreSQL'],
  education: [
    {
      id: '1',
      institution: 'MIT',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2014-09',
      endDate: '2018-05',
    },
  ],
};
