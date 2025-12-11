import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const scrollToForm = () => {
    setSelectedService(null); // Close panel first
    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const contact = document.getElementById('contact');
        if (contact) {
          contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 200);
  };

  const services = [
    {
      icon: 'ri-delete-bin-line',
      title: 'Roof Removal',
      description: 'Professional tear-off and removal services, ensuring clean job sites and proper disposal of old roofing materials.',
      details: 'Our roof removal service includes complete tear-off of your existing roof, proper disposal of old materials, and thorough cleanup of your property. We handle everything from shingle removal to decking preparation, ensuring your home is ready for a new roof installation. Our team works efficiently and safely, protecting your property throughout the process.'
    },
    {
      icon: 'ri-hammer-line',
      title: 'Roof Resurfacing',
      description: 'Expert resurfacing to restore and protect your existing roof, extending its lifespan with quality materials.',
      details: 'Roof resurfacing is an excellent option when your roof structure is sound but needs a fresh layer of protection. We apply new roofing materials over your existing roof, saving time and money while extending the life of your roof. This service is perfect for roofs that are showing signs of wear but don\'t require a complete replacement.'
    },
    {
      icon: 'ri-home-gear-line',
      title: 'Ground-up Roof Installation',
      description: 'Complete new roof installations for custom builds and new construction, built to withstand Utah\'s changing weather.',
      details: 'For new construction or complete roof replacement, our ground-up installation service provides a comprehensive solution. We work with you to select the best materials for Utah\'s climate, ensuring your roof will stand up to snow, rain, and temperature changes. From initial consultation to final inspection, we handle every aspect of your new roof installation.'
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional roofing solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-left w-full"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-900 rounded-xl mb-6 group-hover:bg-black transition-colors">
                <i className={`${service.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Service Detail Panel */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-xl text-gray-900"></i>
            </button>

            {/* Service Content */}
            <div className="pr-8">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-900 rounded-xl mb-6">
                <i className={`${services[selectedService].icon} text-3xl text-white`}></i>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {services[selectedService].title}
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {services[selectedService].details}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center space-x-3 whitespace-nowrap cursor-pointer"
                >
                  <span>Get Free Estimate</span>
                  <i className="ri-arrow-right-up-line text-xl"></i>
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all whitespace-nowrap cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
