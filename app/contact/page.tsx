'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          formId: 'contact-form',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your next project? We'd love to hear from you. Let's discuss how we can help bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

                  {submitStatus === 'success' && (
                    <div className="bg-orange-50 border border-orange-200 text-orange-700 px-4 py-3 rounded-lg mb-6">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}

                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In *
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm appearance-none pr-8"
                          >
                            <option value="">Select a service</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-development">Mobile Development</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                            <option value="cloud-solutions">Cloud Solutions</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="consulting">Consulting & Strategy</option>
                          </select>
                          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm appearance-none pr-8"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-10k">Under $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="over-100k">Over $100,000</option>
                          </select>
                          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm resize-vertical"
                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      ></textarea>
                      <p className="text-sm text-gray-500 mt-2">{formData.message.length}/500 characters</p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || formData.message.length > 500}
                      className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                    <i className="ri-mail-line text-2xl text-orange-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-3">Get in touch via email</p>
                  <a href="mailto:srisaicnctraders@gmail.com" className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer">
                  srisaicnctraders@gmail.com
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
                    <i className="ri-phone-line text-2xl text-gray-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-3">Mon-Fri 9AM-6PM EST</p>
                  <a href="tel:+1-555-123-4567" className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer">
                  9840936912 | 7305336912
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                    <i className="ri-map-pin-line text-2xl text-orange-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                  #1/72A, Ground Floor,<br/>
                   Eswaran Koil St,<br/>
                  Padiyanallur, Chennai - 600052
                  </p>
                </div>

                {/* <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 rounded-lg transition-colors cursor-pointer">
                      <i className="ri-linkedin-fill text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 rounded-lg transition-colors cursor-pointer">
                      <i className="ri-twitter-fill text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 rounded-lg transition-colors cursor-pointer">
                      <i className="ri-github-fill text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 rounded-lg transition-colors cursor-pointer">
                      <i className="ri-dribbble-fill text-lg"></i>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Office</h2>
              <p className="text-gray-600">Located in the heart of New York City</p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.333893072537!2d80.1765559!3d13.204341699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d1897f0b071%3A0x2eab3a9a5233a4e7!2sRV%20Technologies!5e0!3m2!1sen!2sin!4v1752732390644!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}