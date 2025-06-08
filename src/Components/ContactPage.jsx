import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className=" bg-purple-300 h-full w-full">
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="bg-slate-400 shadow-2xl rounded-xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Contact Info */}
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-blue-100 mb-6">We’re here to help. Reach out to us!</p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <a href="mailto:126126126.vaidik@gmail.com" className="hover:underline">
                126126126.vaidik@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-xl" />
              <span>+91 6266270796</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl" />
              <span>MP Nagar, Bhopal, Madhya Pradesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 bg-pink-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Your Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );

};

export default ContactPage;
