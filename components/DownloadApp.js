import React from "react";
import { Apple, Play } from "lucide-react";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="bg-black/90 text-white py-10 px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get the App.<br className="block sm:hidden" /> Read on the Go!
          </h2>
          <p className="mb-0 md:mb-0 text-lg text-gray-200">
            Download our mobile app for an enhanced reading experience. Never
            miss an update or a great story — all at your fingertips.
          </p>
        </div>
        <div className="flex md:flex-col md:justify-center gap-4">
          <button
            type="button"
            className="inline-flex items-center bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 shadow-[-5px_5px_0px_#000000] transition cursor-pointer"
            aria-label="Download on the App Store"
          >
            <Apple className="w-6 h-6 mr-2" />
            App Store
          </button>
          <button
            type="button"
            className="inline-flex items-center bg-white text-black font-semibold px-5 py-3 shadow-[-5px_5px_0px_#000000] hover:bg-gray-200 transition cursor-pointer"
            aria-label="Get it on Google Play"
          >
            <Play className="w-6 h-6 mr-2" />
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
