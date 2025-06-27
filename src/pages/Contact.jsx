import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {


  const handleSubmit = (e) => {
    e.preventDefault(); 

    Swal.fire({
      title: 'Thank You!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#D08A38',
    });

  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5 min-h-screen">
      <div className="flex items-center gap-3">
        <FaPhoneAlt className="text-yellow-600 text-xl" />
        <h2 className="text-2xl font-bold">Contact Us</h2>
      </div>

      <div className="text-gray-700 text-sm space-y-1">
        <p><FaEnvelope className="inline mr-2" /> Email: support@foodiesheaven.com</p>
        <p><FaPhoneAlt className="inline mr-2" /> Phone: +880 1234 567 890</p>
        <p><FaMapMarkerAlt className="inline mr-2" /> Address: Dhaka, Bangladesh</p>
      </div>

      <form className="space-y-4 w-1/2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded-md text-sm h-24"
        ></textarea>
        <button
          type="submit"
          className="py-2 px-3 bg-yellow-100 rounded-lg cursor-pointer hover:bg-yellow-200 font-medium text-yellow-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
