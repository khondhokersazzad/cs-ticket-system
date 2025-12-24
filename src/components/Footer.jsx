import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-14">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-white font-semibold text-lg mb-4">
            CS — Ticket System
          </h2>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-medium mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-medium mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12">
        <p className="text-center text-sm py-6">
          © 2025 CS — Ticket System. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
