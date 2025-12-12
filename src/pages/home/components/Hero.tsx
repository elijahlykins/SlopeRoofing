
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToForm = () => {
    // First try to scroll to the form, if not found, scroll to contact section
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 animate-gradient"></div>
        <img 
          src="/images/hero.jpg" 
          alt="Aerial Roofing View" 
          className="w-full h-full object-cover object-center animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src="/images/logo.png" 
              alt="Slope Roofing Logo" 
              className={`h-12 sm:h-16 md:h-20 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </button>
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            {/* Navigation Links */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3 lg:space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`font-semibold text-xs sm:text-sm md:text-base transition-colors hover:opacity-80 cursor-pointer whitespace-nowrap ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`font-semibold text-xs sm:text-sm md:text-base transition-colors hover:opacity-80 cursor-pointer whitespace-nowrap ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-semibold text-xs sm:text-sm md:text-base transition-colors hover:opacity-80 cursor-pointer whitespace-nowrap ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`font-semibold text-xs sm:text-sm md:text-base transition-colors hover:opacity-80 cursor-pointer whitespace-nowrap ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-semibold text-xs sm:text-sm md:text-base transition-colors hover:opacity-80 cursor-pointer whitespace-nowrap ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                Contact
              </button>
            </div>
            <a href="tel:8017520291" className={`hidden lg:flex items-center space-x-2 font-semibold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <i className="ri-phone-line text-lg"></i>
              <span>(801) 752-0291</span>
            </a>
            <button onClick={scrollToForm} className="bg-white hover:bg-gray-100 text-gray-900 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer">
              Free Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto w-full pt-24 sm:pt-20">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-none animate-fade-in drop-shadow-2xl">
            SLOPE<br />ROOFING
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 font-light animate-fade-in-delay drop-shadow-lg px-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:underline cursor-pointer"
            >
              Expert Roofing Services
            </button>
            {' '}in Utah
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-fade-in-delay-2">
            <button onClick={scrollToForm} className="bg-white hover:bg-gray-100 text-gray-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center space-x-3 whitespace-nowrap cursor-pointer w-full sm:w-auto">
              <span>GET FREE ESTIMATE</span>
              <i className="ri-arrow-right-up-line text-lg sm:text-xl"></i>
            </button>
            <a href="tel:8017520291" className="bg-transparent backdrop-blur-md border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all whitespace-nowrap w-full sm:w-auto text-center">
              CALL NOW
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 animate-fade-in-delay-3 px-4">
            <div className="flex items-center space-x-2">
              <i className="ri-star-fill text-white text-xl sm:text-2xl drop-shadow-lg"></i>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-lg">20+ Years Experience</span>
            </div>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <i className="ri-shield-check-fill text-white text-xl sm:text-2xl drop-shadow-lg"></i>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-lg">Licensed & Insured</span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <i className="ri-star-fill text-white text-xl sm:text-2xl drop-shadow-lg"></i>
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap drop-shadow-lg">5-Star Rated</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
