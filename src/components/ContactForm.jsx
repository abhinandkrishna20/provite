// src/components/ContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post('/api/contact', form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send message. Please try again later.' , err);
    }
  };

  return (
    <div className="container m-4 p-3">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className='grid grid-row p-2 m-4 w-1/4'>
        <input type="text" name="name" className='p-2 m-2 border-2 rounded' placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" className='p-2 m-2 border-2 rounded' placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" className='p-2 m-2 border-2 rounded' placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
        <button type="submit" className='bg-green-400 text-amber-50 p-2 rounded-xl hover:bg-green-800'>Send Message</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default ContactForm;
