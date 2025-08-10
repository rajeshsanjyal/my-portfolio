import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'KCM',
      description: 'Enterprise microservices architecture platform with containerized services, RESTful APIs, and modern deployment practices',
      technologies: ['Node.js', 'Angular', 'Microservices', 'Docker', 'RESTful APIs', 'PostgreSQL'],
      imageUrl: '/assets/images/kcmg-platform.png',
      liveUrl: 'https://kcmg.nl/login',
      githubUrl: '',
      featured: true,
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      imageUrl: '/assets/images/portfolio.png',
      githubUrl: 'https://github.com/rajeshsanjyal/my-portfolio',
      featured: true,
      category: 'frontend'
    },
    {
      id: 3,
      title: 'RESTful API Service',
      description: 'Backend API service built with Node.js and Express.js',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize'],
      imageUrl: '/assets/images/api-service.png',
      githubUrl: 'https://github.com/rajeshsanjyal/api-service',
      featured: true,
      category: 'backend'
    },
    {
      id: 4,
      title: 'Microservices Architecture',
      description: 'Containerized microservices using Docker and Node.js',
      technologies: ['Node.js', 'Docker', 'PostgreSQL', 'Redis'],
      imageUrl: '/assets/images/microservices.png',
      githubUrl: 'https://github.com/rajeshsanjyal/microservices',
      featured: true,
      category: 'backend'
    },
    {
      id: 5,
      title: 'Database Management System',
      description: 'Database operations and management with PostgreSQL',
      technologies: ['PostgreSQL', 'Sequelize', 'Node.js', 'Express.js'],
      imageUrl: '/assets/images/database.png',
      githubUrl: 'https://github.com/rajeshsanjyal/database-system',
      featured: false,
      category: 'backend'
    },
    {
      id: 6,
      title: 'CI/CD Pipeline',
      description: 'Automated deployment pipeline with Snowflake integration',
      technologies: ['CI/CD', 'Snowflake', 'Docker', 'GitLab'],
      imageUrl: '/assets/images/cicd.png',
      githubUrl: 'https://github.com/rajeshsanjyal/cicd-pipeline',
      featured: false,
      category: 'backend'
    }
  ];

  private skills: Skill[] = [
    // Primary Skills
    {
      id: 1,
      name: 'Node.js',
      level: 90,
      category: 'primary',
      icon: 'devicon-nodejs-plain'
    },
    {
      id: 2,
      name: 'PostgreSQL',
      level: 85,
      category: 'primary',
      icon: 'devicon-postgresql-plain'
    },
    {
      id: 3,
      name: 'Express.js',
      level: 85,
      category: 'primary',
      icon: 'devicon-express-original'
    },
    {
      id: 4,
      name: 'Docker',
      level: 80,
      category: 'primary',
      icon: 'devicon-docker-plain'
    },
    {
      id: 5,
      name: 'Angular',
      level: 55,
      category: 'primary',
      icon: 'devicon-angular-plain'
    },
    {
      id: 6,
      name: 'CI/CD (Snowflake)',
      level: 70,
      category: 'primary',
      icon: 'devicon-snowflake-plain'
    },

    // Programming Languages
    {
      id: 7,
      name: 'JavaScript',
      level: 90,
      category: 'languages',
      icon: 'devicon-javascript-plain'
    },
    {
      id: 8,
      name: 'Python',
      level: 70,
      category: 'languages',
      icon: 'devicon-python-plain'
    },
    {
      id: 9,
      name: 'Java',
      level: 75,
      category: 'languages',
      icon: 'devicon-java-plain'
    },
    {
      id: 10,
      name: 'PHP (Laravel)',
      level: 75,
      category: 'languages',
      icon: 'devicon-php-plain'
    },
    {
      id: 11,
      name: 'Rust',
      level: 45,
      category: 'languages',
      icon: 'devicon-rust-plain'
    },

    // Web Technologies
    {
      id: 12,
      name: 'RESTful APIs',
      level: 90,
      category: 'web',
      icon: 'fa fa-exchange'
    },
    {
      id: 13,
      name: 'WebSockets',
      level: 80,
      category: 'web',
      icon: 'fa fa-plug'
    },

    // Database Management
    {
      id: 14,
      name: 'PostgreSQL',
      level: 85,
      category: 'database',
      icon: 'devicon-postgresql-plain'
    },
    {
      id: 15,
      name: 'Sequelize',
      level: 80,
      category: 'database',
      icon: 'fa fa-database'
    },
    {
      id: 16,
      name: 'MySQL',
      level: 80,
      category: 'database',
      icon: 'devicon-mysql-plain'
    },

    // Frontend Technologies
    {
      id: 17,
      name: 'HTML5',
      level: 90,
      category: 'frontend',
      icon: 'devicon-html5-plain'
    },
    {
      id: 18,
      name: 'CSS3',
      level: 85,
      category: 'frontend',
      icon: 'devicon-css3-plain'
    },
    {
      id: 19,
      name: 'Vue',
      level: 55,
      category: 'frontend',
      icon: 'devicon-vuejs-plain'
    },
    {
      id: 20,
      name: 'React',
      level: 45,
      category: 'frontend',
      icon: 'devicon-react-original'
    },

    // Tools & Version Control
    {
      id: 21,
      name: 'Git',
      level: 90,
      category: 'tools',
      icon: 'devicon-git-plain'
    },
    {
      id: 22,
      name: 'SVN',
      level: 80,
      category: 'tools',
      icon: 'devicon-subversion-plain'
    },
    {
      id: 23,
      name: 'Jira',
      level: 85,
      category: 'tools',
      icon: 'devicon-jira-plain'
    },
    {
      id: 24,
      name: 'GitHub',
      level: 90,
      category: 'tools',
      icon: 'devicon-github-plain'
    },
    {
      id: 25,
      name: 'GitLab',
      level: 90,
      category: 'tools',
      icon: 'devicon-gitlab-plain'
    },
    {
      id: 26,
      name: 'Docker',
      level: 85,
      category: 'tools',
      icon: 'devicon-docker-plain'
    },
    {
      id: 27,
      name: 'Snowflake',
      level: 80,
      category: 'tools',
      icon: 'devicon-snowflake-plain'
    },

    // Methodologies & Soft Skills
    {
      id: 28,
      name: 'Agile',
      level: 85,
      category: 'methodologies',
      icon: 'fa fa-sync'
    },
    {
      id: 29,
      name: 'Scrum',
      level: 85,
      category: 'methodologies',
      icon: 'fa fa-users'
    },
    {
      id: 30,
      name: 'Problem Solving',
      level: 90,
      category: 'methodologies',
      icon: 'fa fa-puzzle-piece'
    },
    {
      id: 31,
      name: 'Code Review',
      level: 85,
      category: 'methodologies',
      icon: 'fa fa-code'
    },
    {
      id: 32,
      name: 'Collaboration',
      level: 90,
      category: 'methodologies',
      icon: 'fa fa-handshake'
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    return of(this.skills.filter(skill => skill.category === category));
  }
}
