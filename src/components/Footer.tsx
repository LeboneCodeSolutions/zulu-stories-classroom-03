const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Company */}
          <div>
            
            <p className="text-gray-300 mb-4">
              Educating learners about South Africa's diverse cultures through engaging stories and digital learning tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Our Film
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <p className="text-gray-300 mb-2">info@culturedafrica.co.za</p>
            <p className="text-gray-300 mb-2">
              Ready to transform your Zulu language classroom?
            </p>
            <p className="text-gray-300">
              Contact us for pricing and availability for Heritage Day.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Cultured Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;