import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  note?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationDetails: Education[] = [
    {
      degree: 'B.Sc. CSIT',
      institution: 'Nepalaya College',
      location: 'Kalankisthan, Kalanki, Kathmandu, Nepal',
      period: '2016 – 2022',
      note: 'Extended duration due to COVID-19'
    },
    {
      degree: 'HSEB (+2 Science)',
      institution: 'Shree Baijnath Namuna Higher Secondary School',
      location: 'Bhimdatta-18, Mahendranagar, Kanchanpur, Nepal',
      period: '2014 - 2016'
    },
    {
      degree: 'School Leaving Certificate (SLC)',
      institution: 'Shree Adarsha Namuna Higher Secondary School',
      location: 'Lamki Chuha-01, Lamki, Kailali, Nepal',
      period: '2014'
    }
  ];
}
