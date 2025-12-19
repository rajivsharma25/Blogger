"use client"
import { Mail } from 'lucide-react';
import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      setSuccess(false);
      return;
    }

    // Simulate subscription success (replace with real API call)
    setSuccess(true);
    setError('');
    setEmail('');
  };

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-6 text-gray-300">
          Get the latest updates, news, and blog posts delivered to your inbox. No spam, ever.
        </p>
        <form
          className="flex flex-row items-center gap-3 justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="px-4 py-3 bg-white/10 text-black w-full sm:w-auto min-w-[230px] shadow-[-5px_5px_0px_#948979] focus:outline-none placeholder:text-gray-100"
            placeholder="Enter your email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-black font-semibold shadow-[-5px_5px_0px_#948979] hover:bg-gray-300 transition cursor-pointer flex items-center gap-2"
          >
            <Mail className="size-5" />
            Subscribe
          </button>
        </form>
        {success && (
          <div className="mt-4 text-green-400 font-medium">
            🎉 Subscription successful! Thank you for joining.
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-300 font-medium">{error}</div>
        )}
      </div>
    </section>
  );
};

export default SubscribeSection;