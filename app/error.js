"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-10 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
