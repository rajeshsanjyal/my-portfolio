// EmailJS Configuration
// You need to sign up at https://www.emailjs.com/ and get these values

export const EMAILJS_CONFIG = {
  // Your EmailJS public key (found in Account > API Keys)
  PUBLIC_KEY: '5PlxOmgRSR9iWRmnb',
  
  // Your EmailJS service ID (found in Email Services)
  SERVICE_ID: 'service_kow5d3u',
  
  // Your EmailJS template ID (found in Email Templates)
  TEMPLATE_ID: 'template_s5fcwxb'
};

// EmailJS Template Variables
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}
