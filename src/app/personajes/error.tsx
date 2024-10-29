"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col flex-grow min-h-full my-8 gap-4 justify-center items-center p-4">
      <h2 className="text-red-600  text-7xl">¡Algo salió mal!</h2>
      <button
        className="text-2xl text-black dark:text-white border-black transition-all duration-300 hover:text-white hover:bg-black dark:border-white dark:hover:text-black dark:hover:bg-white border-2 rounded-lg p-2"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Intentar otra vez
      </button>
    </main>
  );
}
