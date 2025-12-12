
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <section ref={sectionRef} id="about" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">About Slope Roofing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div 
            className="space-y-6"
            style={{
              transform: !isMobile ? `translateX(${-50 + scrollProgress * 50}px)` : 'none',
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Slope Roofing is a locally owned roofing contractor serving Utah County. We specialize in{' '}
                <button onClick={() => scrollToSection('services')} className="text-gray-900 font-semibold hover:underline cursor-pointer">
                  re-roofs, tear-offs, and new roof installations
                </button>
                {' '}for homes and custom builds. Our team is dedicated to quality workmanship, clean job sites, 
                and lasting results you can trust.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Whether you're upgrading an old roof or building from the ground up, we provide dependable service, clear communication, 
                and roofs built to withstand Utah's changing weather.{' '}
                <button onClick={scrollToForm} className="text-gray-900 font-semibold hover:underline cursor-pointer">
                  Get a free estimate
                </button>
                {' '}today!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <i className="ri-shield-check-fill text-3xl sm:text-4xl text-gray-900 mb-2"></i>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Licensed & Insured</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image with Parallax Effect */}
          <div 
            className="relative"
            style={{
              transform: !isMobile ? `translateY(${-30 + scrollProgress * 60}px) scale(${0.95 + scrollProgress * 0.05})` : 'none',
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="bg-gray-50 rounded-2xl p-3 sm:p-4 border border-gray-200 shadow-2xl">
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden">
                <img 
                  src="/images/about.jpg" 
                  alt="Professional Roofing Work" 
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: !isMobile ? `scale(${1 + scrollProgress * 0.1})` : 'none',
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
