import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            {/* ... your contact info (Call Us, Email Us, Location) ... */}
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Required hidden fields */}
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  placeholder="(801) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none"
                  placeholder="Tell us about your roofing needs..."
                />
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold text-base transition-all hover:shadow-xl whitespace-nowrap"
              >
                Get Free Estimate
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-sm">
                  Thank you! We'll contact you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-sm">
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
