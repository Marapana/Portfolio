import React, { useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading.jsx';
import { contactConfig } from '../../data/contactConfig.js';
import { submitContactForm } from '../../services/contactService.js';

const contactItems = [
  {
    value: contactConfig.email,
    href: `mailto:${contactConfig.email}`,
    icon: EnvelopeIcon,
  },
  {
    value: contactConfig.availability,
    href: '#projects',
    icon: BriefcaseIcon,
  },
];

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: 'info', message: 'Sending your message...' });

    try {
      await submitContactForm(formState);
      setStatus({ type: 'success', message: 'Message sent successfully. I will get it in my email inbox.' });
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong while sending the message.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="page-section">
      <div className="container">
        <div className="contact-panel">
          <SectionHeading
            eyebrow="Contact"
            title="Open to product, website, and UX-focused front-end work."
            description="Use the form to send a project inquiry directly to my email, or reach out through the contact methods below."
          />

          <div className="contact-layout">
            <div className="contact-intro">
              <h3>Let&apos;s work together</h3>
              <p>
                I&apos;m interested in hearing about product work, website redesigns, and experience improvements where
                thoughtful UX and front-end quality matter.
              </p>

              <div className="contact-grid">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      className="contact-card"
                      href={item.href}
                      key={item.value}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <Icon className="contact-icon" aria-hidden="true" />
                      <strong>{item.value}</strong>
                      {item.href.startsWith('http') || item.href.startsWith('mailto:') ? (
                        <ArrowTopRightOnSquareIcon className="contact-arrow" aria-hidden="true" />
                      ) : null}
                    </a>
                  );
                })}
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </label>

              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </label>

              <button className="button button-primary contact-submit" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send message'}
              </button>

              {status.message ? <p className={`form-status is-${status.type}`}>{status.message}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
