import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📩 Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 px-6 py-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Contact Us
          </h2>

          {/* Main Contact Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Get in Touch
              </h3>
              <p className="text-gray-600">
                Have questions? We'd love to hear from you. Reach out using the
                details below or fill out the form.
              </p>

              <div className="space-y-3 text-gray-700">
                <p>📍 <strong>Address:</strong> Karachi, Pakistan</p>
                <p>📞 <strong>Phone:</strong> +92 300 1234567</p>
                <p>✉️ <strong>Email:</strong> support@eduplatform.com</p>
                <p>🕒 <strong>Support Hours:</strong> Mon - Fri (9AM - 6PM)</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14483.37942226866!2d66.990501!3d24.861462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ed0f12b3c1f%3A0x9f0b11f5b9f0b8f5!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699999999999"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}
