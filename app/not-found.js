'use client';
import { useRouter } from "next/navigation"; // Use if using Next.js

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-8xl font-extrabold animate-bounce">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <p className="text-lg text-gray-400 mt-2">
        The page you're looking for doesn't exist.
      </p>

      <button
        onClick={() => router.push("/")} // Go back home using Next.js router
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-pulse"
      >
        Go Back Home
      </button>

      {/* Adding an extra SVG animation */}
      <div className="mt-16 w-40 h-40">
        <svg
          className="w-full h-full text-blue-500 animate-spin-slow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.341A8 8 0 116.34 6.341M12 2v4m0 12v4m8-8h-4m-12 0H2"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
