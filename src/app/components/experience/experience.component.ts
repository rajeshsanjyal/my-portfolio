import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | 'Present';
  role: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  professionalExperience: Experience[] = [
    {
      title: 'Software Developer',
      company: 'IT@Himalaya (PROCIT BV)',
      location: 'Kamladi, Kathmandu',
      startDate: new Date('2022-03-01'),
      endDate: 'Present',
      role: 'Backend Developer',
      responsibilities: [
        'Developed and maintained scalable microservice architecture using Node.js, Express.js, and PostgreSQL',
        'Integrated user-facing elements with server-side logic using Angular.js',
        'Implemented ETL processes for efficient data management',
        'Designed and deployed CI/CD pipelines using Docker and Snowflake',
        'Utilized Microsoft Azure Storage for secure file management and Vault for secret storage',
        'Conducted code reviews and implemented best practices for coding standards',
        'Created signal processing software for issue and project tracking, utilizing third-party APIs like Flowmailer for email and Sprying for SMS',
        'Developed Obi4wan chat integration and various customer data visualizations (Pie, Bar, Line, Score, Impact, Score Table, CustomerJourney)',
        'Collaborated with international teams using Agile methodologies (sprint planning, stand-ups, retrospectives)',
        'Enhanced communication by interacting with local team members and foreign project managers',
        'Worked with various Node.js packages like moment.js, jsonwebtoken, puppeteer, express, multer, fs, path, and xlsx'
      ],
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Angular', 'Docker', 'Snowflake', 'Azure', 'ETL']
    },
    {
      title: 'Software Developer',
      company: 'EEE Innovation Ghar',
      location: 'Swayambhu, Kathmandu',
      startDate: new Date('2021-10-01'),
      endDate: new Date('2022-03-01'),
      role: 'Backend Developer',
      responsibilities: [
        'Developed and maintained web applications using Laravel, ensuring high performance and security',
        'Designed and managed database schemas and queries using MySQL',
        'Created and integrated RESTful APIs for seamless service communication',
        'Managed code repositories and tracked changes using Git',
        'Conducted unit testing and debugging to meet quality standards',
        'Collaborated with team members to deliver projects on time and meet client specifications',
        'Created and maintained technical documentation for easier application maintenance and updates'
      ],
      technologies: ['Laravel', 'MySQL', 'RESTful APIs', 'Git', 'PHP']
    }
  ];

  experienceOverview: { years: string; area: string; }[] = [];

  ngOnInit() {
    this.calculateExperienceOverview();
  }

  private calculateExperienceOverview() {
    const now = new Date();
    let totalExperience = 0;
    let cloudDevopsExperience = 0;

    this.professionalExperience.forEach(exp => {
      const endDate = exp.endDate === 'Present' ? now : exp.endDate;
      const years = (endDate.getTime() - exp.startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      totalExperience += years;

      // Assuming cloud & DevOps experience started with IT@Himalaya
      if (exp.company === 'IT@Himalaya (PROCIT BV)') {
        cloudDevopsExperience += years;
      }
    });

    this.experienceOverview = [
      {
        years: totalExperience.toFixed(1) + '+',
        area: 'Years Professional Experience'
      },
      {
        years: cloudDevopsExperience.toFixed(1) + '+',
        area: 'Years Cloud & DevOps'
      }
    ];
  }

  formatPeriod(exp: Experience): string {
    const startDate = exp.startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const endDate = exp.endDate === 'Present' 
      ? 'Present' 
      : exp.endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    return `${startDate} - ${endDate}`;
  }
}
