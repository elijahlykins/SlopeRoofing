import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('form-name', 'contact');
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Ready to protect your home?{' '}
            <button 
              onClick={scrollToForm}
              className="text-gray-900 font-semibold hover:underline cursor-pointer"
            >
              Contact us today for a free estimate
            </button>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-black/90 backdrop-blur-md rounded-xl flex-shrink-0 border border-white/20">
                    <i className="ri-phone-line text-xl text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:8017520291" className="text-gray-600 hover:text-gray-900 transition-colors">(801) 752-0291</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-black/90 backdrop-blur-md rounded-xl flex-shrink-0 border border-white/20">
                    <i className="ri-mail-line text-xl text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:info@sloperoofing.com" className="text-gray-600 hover:text-gray-900 transition-colors">info@sloperoofing.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-black/90 backdrop-blur-md rounded-xl flex-shrink-0 border border-white/20">
                    <i className="ri-map-pin-line text-xl text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Service Area</div>
                    <p className="text-gray-600">Utah County &amp; Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-black/90 backdrop-blur-md rounded-xl flex-shrink-0 border border-white/20">
                    <i className="ri-time-line text-xl text-white"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-gray-900 mr-3 text-xl"></i>
                  <button onClick={scrollToForm} className="text-left hover:underline cursor-pointer">
                    Free Estimates &amp; Consultations
                  </button>
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-gray-900 mr-3 text-xl"></i>
                  Licensed &amp; Insured Professionals
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-gray-900 mr-3 text-xl"></i>
                  Quality Materials &amp; Workmanship
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-gray-900 mr-3 text-xl"></i>
                  Comprehensive Warranty Coverage
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
            
            <form 
              onSubmit={handleSubmit} 
              name="contact"
              data-netlify="true"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm text-gray-900 placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm text-gray-900 placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm text-gray-900 placeholder-gray-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm text-gray-900"
                >
                  <option value="">Select a service</option>
                  <option value="removal">Roof Removal</option>
                  <option value="resurfacing">Roof Resurfacing</option>
                  <option value="installation">Ground-up Roof Installation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-md border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="Tell us about your roofing needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black/90 backdrop-blur-md hover:bg-black text-white py-4 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap border border-white/20 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 text-gray-900 px-4 py-3 rounded-xl text-center font-semibold shadow-lg">
                  Thank you! We'll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-center font-semibold shadow-lg">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
