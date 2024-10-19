"use client"; // Error components must be Client Components
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Something went wrong!
        </h2>
        <p className="text-lg mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
