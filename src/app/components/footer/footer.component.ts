import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Social media links - update these with your actual URLs from your CV
  socialLinks = {
    github: 'https://github.com/rajeshsanjyal', // Update this with your actual GitHub URL
    linkedin: 'https://www.linkedin.com/in/rajesh-sanjyal-87938415b/',
    gitlab: 'https://gitlab.com/asteriskrajesh' // Update this with your actual LinkedIn URL
  };
}
