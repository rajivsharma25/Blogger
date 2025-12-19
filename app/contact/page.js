"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [ submitData, setSubmitData ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitData(formData);
    alert(
      `Contact Form Submission\nName: ${submitData.name}\nEmail: ${submitData.email}\nMessage: ${submitData.message}`
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white pt-4 pb-14">
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="mb-8 text-lg leading-relaxed space-y-2">
          <p>
            We&apos;d love to hear from you! Whether you have a question,
            suggestion, or just want to say hello, our team is here for you.
          </p>
        </div>
        <div className="flex flex-col gap-6 border border-black dark:border-white shadow-[-5px_5px_0_#000] dark:shadow-[-5px_5px_0_#fff] p-8 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-4">
            <Mail className="size-6 text-primary dark:text-primary" />
            <div>
              <div className="text-base font-medium">Email</div>
              <a
                href="mailto:support@blogger.com"
                className="text-blue-600 underline dark:text-blue-400"
              >
                support@blogger.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="size-6 text-primary dark:text-primary" />
            <div>
              <div className="text-base font-medium">Phone</div>
              <a href="tel:+1234567890" className="text-blue-600 underline dark:text-blue-400">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="size-6 text-primary dark:text-primary" />
            <div>
              <div className="text-base font-medium">Address</div>
              <span>123 Blogger Lane, Web City, 10001</span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">Send us a message</h2>
          <form
            className="space-y-4 bg-white dark:bg-gray-900 border border-black dark:border-white p-6 shadow-[-5px_5px_0_#000] dark:shadow-[-5px_5px_0_#fff]"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                onChange={handleInput}
                value={formData.name}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white focus:outline-none"
                type="text"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                onChange={handleInput}
                value={formData.email}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white focus:outline-none"
                type="email"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleInput}
                value={formData.message}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-black dark:text-white resize-y focus:outline-none"
                required
              />
            </div>
            <button
              className="mt-2 px-6 py-2 bg-white dark:bg-gray-900 border-black dark:border-white border cursor-pointer text-black dark:text-white font-semibold shadow-[-5px_5px_0_#000] dark:shadow-[-5px_5px_0_#fff] hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
