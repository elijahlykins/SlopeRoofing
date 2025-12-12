import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const contact = document.getElementById('contact');
      if (contact) {
        contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const testimonials = [
    {
      name: 'New Construction Project',
      location: 'Utah',
      rating: 5,
      text: 'Slope was precise, fast, and saved us thousands on this new construction roof they did for us. 10/10!',
      image: '/images/testimonial-1.webp'
    },
    {
      name: 'Residential Roof Replacement',
      location: 'Utah',
      rating: 5,
      text: 'We just had our roof replaced by Slope Roofing. They did such a great job! We are so happy with their work. They arrived when they said they would and cleaned up each night before they left. All of the workers were polite and hard-working. The price was much less than we planned on spending. It was a great experience. I highly recommend them',
      image: '/images/testimonial-2.webp'
    },
    {
      name: 'Roof Replacement',
      location: 'Utah',
      rating: 5,
      text: 'They did an awesome job! Cleaned up as they went, were on time and organized, and got it done quickly. I\'m very happy with the new roof!',
      image: '/images/testimonial-3.webp'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 px-4">Real feedback from satisfied homeowners</p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white/40 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/60 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-2 sm:p-3 border border-white/80 shadow-lg">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl overflow-hidden">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-xl sm:text-2xl text-gray-900"></i>
                  ))}
                </div>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="bg-white/60 backdrop-blur-xl rounded-xl px-4 sm:px-6 py-3 sm:py-4 inline-block border border-white/80 shadow-md">
                  <div className="font-bold text-base sm:text-lg text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-sm sm:text-base text-gray-600 flex items-center">
                    <i className="ri-map-pin-line mr-1"></i>
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/40 backdrop-blur-xl hover:bg-white/60 rounded-full transition-all border border-white/60 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <i className="ri-arrow-left-line text-lg sm:text-xl text-gray-900"></i>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === currentIndex 
                      ? 'w-8 bg-gray-900' 
                      : 'w-2 bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/40 backdrop-blur-xl hover:bg-white/60 rounded-full transition-all border border-white/60 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <i className="ri-arrow-right-line text-lg sm:text-xl text-gray-900"></i>
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <button 
              onClick={scrollToForm}
              className="bg-gray-900 hover:bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center space-x-3 whitespace-nowrap cursor-pointer"
            >
              <span>Get Your Free Estimate</span>
              <i className="ri-arrow-right-up-line text-lg sm:text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
