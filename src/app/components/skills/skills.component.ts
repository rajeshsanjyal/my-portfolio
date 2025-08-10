import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  categories: ('primary' | 'languages' | 'web' | 'database' | 'frontend' | 'tools' | 'methodologies')[] = 
    ['primary', 'languages', 'web', 'database', 'frontend', 'tools', 'methodologies'];
  skillsByCategory: { [key: string]: Skill[] } = {};

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills;
      this.organizeSkillsByCategory();
    });
  }

  private organizeSkillsByCategory() {
    this.categories.forEach(category => {
      this.skillsByCategory[category] = this.skills.filter(skill => skill.category === category);
    });
  }

  getProgressBarColor(level: number): string {
    if (level >= 80) return '#28a745';
    if (level >= 60) return '#17a2b8';
    if (level >= 40) return '#ffc107';
    return '#dc3545';
  }

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      primary: 'Primary Skills',
      languages: 'Programming Languages',
      web: 'Web Technologies',
      database: 'Database Management',
      frontend: 'Frontend Technologies',
      tools: 'Tools & Version Control',
      methodologies: 'Methodologies & Best Practices'
    };
    return labels[category] || category;
  }
}
