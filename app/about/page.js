import React from "react";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white pt-4 pb-10">
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            <strong>Blogger</strong> is a modern blogging platform crafted for
            passionate writers, curious readers, and the stories that connect us
            all.
          </p>
          <p>
            Our mission is to provide a simple, elegant space to discover fresh
            perspectives, share ideas, and enjoy reading on any device. Built
            with the latest web technologies, Blogger puts beautiful design,
            accessibility, and performance first.
          </p>
          <p>
            Whether you&apos;re a seasoned author or a casual browser, we invite
            you to explore featured articles, catch up on trending topics, and
            subscribe for updates directly in your inbox.
          </p>
          <p>
            Thank you for being part of our journey. Let&apos;s read, write, and
            grow together!
          </p>
          <div className="mt-8 text-gray-600 dark:text-gray-300 text-base">
            &mdash; The Blogger Team
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative flex-1 border border-solid border-black dark:border-white p-6 shadow-[-5px_5px_0px_#000000] dark:shadow-[-5px_5px_0px_#fff] bg-white dark:bg-gray-900">
            <Quote size={28} className="absolute right-5 top-5" />
            <div className="text-2xl font-bold mb-2">Rajiv Sharma</div>
            <div className="text-gray-700 dark:text-gray-300 mb-2">
              Founder &amp; Lead Developer
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Rajiv is passionate about building products that empower
              storytellers. With a background in web development and UX design,
              he ensures Blogger is both powerful and delightful to use.
            </p>
          </div>
          <div className="relative flex-1 border border-solid border-black dark:border-white p-6 shadow-[-5px_5px_0px_#000000] dark:shadow-[-5px_5px_0px_#fff] bg-white dark:bg-gray-900">
            <Quote size={28} className="absolute right-5 top-5" />
            <div className="text-2xl font-bold mb-2">Samira Patel</div>
            <div className="text-gray-700 dark:text-gray-300 mb-2">Content Curator</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Samira finds the best voices and stories to feature, helping build
              a vibrant community around fresh perspectives and thoughtful
              writing.
            </p>
          </div>
          <div className="relative flex-1 border border-solid border-black dark:border-white p-6 shadow-[-5px_5px_0px_#000000] dark:shadow-[-5px_5px_0px_#fff] bg-white dark:bg-gray-900">
            <Quote size={28} className="absolute right-5 top-5" />
            <div className="text-2xl font-bold mb-2">Diego Martinez</div>
            <div className="text-gray-700 dark:text-gray-300 mb-2">Community Manager</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Diego connects with readers and writers alike, making sure every
              member feels welcome and heard within the Blogify family.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
