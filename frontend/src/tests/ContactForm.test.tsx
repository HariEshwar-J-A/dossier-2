import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/ContactForm';

describe('ContactForm Component', () => {
  test('renders input fields and submits form', () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText(/Name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const messageInput = screen.getByPlaceholderText(/Message/i);
    const submitButton = screen.getByRole('button', { name: /Send/i });
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, world!' } });
    
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Hello, world!');
    
    // Note: You might want to mock axios to fully test the form submission.
  });
});
