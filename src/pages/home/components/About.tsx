
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
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
    <section ref={sectionRef} id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">About Slope Roofing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            className="space-y-6"
            style={{
              transform: `translateX(${-50 + scrollProgress * 50}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Slope Roofing is a locally owned roofing contractor serving Utah County. We specialize in{' '}
                <button onClick={() => scrollToSection('services')} className="text-gray-900 font-semibold hover:underline cursor-pointer">
                  re-roofs, tear-offs, and new roof installations
                </button>
                {' '}for homes and custom builds. Our team is dedicated to quality workmanship, clean job sites, 
                and lasting results you can trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're upgrading an old roof or building from the ground up, we provide dependable service, clear communication, 
                and roofs built to withstand Utah's changing weather.{' '}
                <button onClick={scrollToForm} className="text-gray-900 font-semibold hover:underline cursor-pointer">
                  Get a free estimate
                </button>
                {' '}today!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <i className="ri-shield-check-fill text-4xl text-gray-900 mb-2"></i>
                <div className="text-sm text-gray-600 font-medium">Licensed & Insured</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image with Parallax Effect */}
          <div 
            className="relative"
            style={{
              transform: `translateY(${-30 + scrollProgress * 60}px) scale(${0.95 + scrollProgress * 0.05})`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 shadow-2xl">
              <div className="relative h-96 w-full rounded-xl overflow-hidden">
                <img 
                  src="/images/about.jpg" 
                  alt="Professional Roofing Work" 
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: `scale(${1 + scrollProgress * 0.1})`,
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
