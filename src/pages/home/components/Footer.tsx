export default function Footer() {
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
    <footer className="relative bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <button 
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer hover:opacity-80 transition-opacity mb-4"
            >
              <img 
                src="/images/logo.png" 
                alt="Slope Roofing Logo" 
                className="h-12 w-auto"
              />
            </button>
            <p className="text-gray-600 leading-relaxed">
              Professional roofing services with over 20 years of experience in Utah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-left">
                  Roof Removal
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-left">
                  Roof Resurfacing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-left">
                  Ground-up Roof Installation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <i className="ri-phone-line text-lg text-gray-900"></i>
                <a href="tel:8017520291" className="text-gray-600 hover:text-gray-900 transition-colors">(801) 752-0291</a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-mail-line text-lg text-gray-900"></i>
                <a href="mailto:support@sloperoofingutah.com" className="text-gray-600 hover:text-gray-900 transition-colors">support@sloperoofingutah.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-map-pin-line text-lg text-gray-900"></i>
                <span className="text-gray-600">Utah</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Slope Roofing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
