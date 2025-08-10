import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactForm } from '../../models/contact-form';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from '../../services/emailjs.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  submitError = false;
  isLoading = false;

  // Contact information from CV - update these with your actual details
  contactInfo = {
    email: 'rajesh.sanjyal@gmail.com',
    phone: 'NTC: +977 9868549759 / NCELL: +977 9804605468',
    location: 'Kirtipur, Kathmandu, Nepal',
    permanentAddress: 'LamkiChuha-01, Kailali, Nepal',
    linkedin: 'https://www.linkedin.com/in/rajesh-sanjyal-87938415b/',
    github: 'https://github.com/rajeshsanjyal',
    gitlab: 'https://gitlab.com/asteriskrajesh'
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  async onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.submitError = false;
      
      // Disable all form controls during submission
      this.contactForm.disable();
      
      try {
        // EmailJS configuration
        const templateParams: EmailTemplateParams = {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
          to_email: this.contactInfo.email // Your email address
        };

        // Send email using EmailJS
        const response = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          { ...templateParams } as Record<string, unknown>
        );

        if (response.status === 200) {
          this.submitSuccess = true;
          this.contactForm.reset();
          this.submitted = false;
        } else {
          throw new Error('Email sending failed');
        }
      } catch (error) {
        console.error('Email sending error:', error);
        this.submitError = true;
      } finally {
        this.isLoading = false;
        // Re-enable all form controls after submission
        this.contactForm.enable();
      }
    }
  }

  get f() {
    return this.contactForm.controls;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.f[fieldName];
    
    if (control.hasError('required')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    if (control.hasError('minlength')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${control.errors?.['minlength'].requiredLength} characters`;
    }
    
    return '';
  }
}
