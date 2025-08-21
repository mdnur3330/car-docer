"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-red-600">Something went wrong!</h2>
      <p className="mt-3 text-gray-600">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition"
      >
        Try Again
      </button>
    </div>
  );
}
