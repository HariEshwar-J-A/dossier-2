import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
