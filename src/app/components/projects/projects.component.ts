import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: ('all' | 'frontend' | 'backend' | 'fullstack' | 'mobile')[] = ['all', 'frontend', 'backend', 'fullstack', 'mobile'];
  selectedCategory: string = 'all';

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filterProjects('all');
    });
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    this.filteredProjects = category === 'all'
      ? this.projects
      : this.projects.filter(project => project.category === category);
  }
}
