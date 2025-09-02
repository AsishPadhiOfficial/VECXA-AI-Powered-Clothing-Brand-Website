import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sarah Chen - CEO */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full mb-4 bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">SC</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Sarah Chen, PhD</h3>
              <p className="text-gray-600 mb-3 text-sm">CEO & Co-Founder</p>
              <p className="text-gray-500 text-xs mb-3">Materials Engineering (MIT)</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:contact@vexatech.com" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@vexatech.com
                </a>
                <a 
                  href="https://www.linkedin.com/company/vexa-technologies" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Marcus Rodriguez - CTO */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full mb-4 bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">MR</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Marcus Rodriguez, PhD</h3>
              <p className="text-gray-600 mb-3 text-sm">CTO & Co-Founder</p>
              <p className="text-gray-500 text-xs mb-3">Computer Science (Stanford)</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:contact@vexatech.com" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@vexatech.com
                </a>
                <a 
                  href="https://www.linkedin.com/company/vexa-technologies" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Dr. Priya Sharma - Head of R&D */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full mb-4 bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">PS</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Dr. Priya Sharma</h3>
              <p className="text-gray-600 mb-3 text-sm">Head of R&D</p>
              <p className="text-gray-500 text-xs mb-3">Electrical Engineering (CMU)</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:contact@vexatech.com" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@vexatech.com
                </a>
                <a 
                  href="https://www.linkedin.com/company/vexa-technologies" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* James Thompson - VP Business Development */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full mb-4 bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">JT</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">James Thompson</h3>
              <p className="text-gray-600 mb-3 text-sm">VP of Business Development</p>
              <p className="text-gray-500 text-xs mb-3">MBA (Wharton)</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:partnerships@vexatech.com" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  partnerships@vexatech.com
                </a>
                <a href="tel:+15551238392" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-VEXA
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* General Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">General Contact</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Email:</strong> <a href="mailto:contact@vexatech.com" className="text-blue-600 hover:underline">contact@vexatech.com</a>
              </p>
              <p>
                <strong>Support:</strong> <a href="mailto:support@vexatech.com" className="text-blue-600 hover:underline">support@vexatech.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+15551238392" className="text-blue-600 hover:underline">+1 (555) 123-VEXA (8392)</a>
              </p>
              <p>
                <strong>Address:</strong><br />
                VECXA Technologies Headquarters<br />
                1250 Innovation Drive, Suite 400<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;