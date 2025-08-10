import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // Job start date - update this when you started your professional career
  private jobStartDate = new Date('2022-01-01'); // Change this to your actual start date
  
  // CV download URL
  cvUrl = '/assets/rajeshsanjyal_cv.pdf';
  
  aboutMe = {
    name: 'Rajesh Sanjyal',
    title: 'Software Developer',
    description: `I am a passionate software developer with over ${this.getYearsOfExperience()} years of professional experience in full-stack development. 
      Specializing in Node.js, Express.js, and Angular, I have a proven track record of building scalable microservices and modern web applications. 
      My experience includes working with international teams and implementing enterprise-level solutions using cloud technologies and CI/CD practices.`
  };

  /**
   * Calculates the years of professional experience from job start date to current date
   * @returns number of years of experience
   */
  private getYearsOfExperience(): number {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - this.jobStartDate.getTime();
    const yearsDifference = timeDifference / (1000 * 3600 * 24 * 365.25); // Account for leap years
    
    // Return at least 1 year if less than 1 year, otherwise return the calculated years
    return Math.max(1, Math.floor(yearsDifference));
  }
}
