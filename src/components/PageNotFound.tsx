import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <main className="flex flex-col flex-grow min-h-full my-8 gap-4 justify-center items-center p-4">
      <h2 className="text-red-600  text-7xl">404 Página no encontrada </h2>
      <Link
        href="/"
        className="text-2xl text-black dark:text-white border-black transition-all duration-300 hover:text-white hover:bg-black dark:border-white dark:hover:text-black dark:hover:bg-white border-2 rounded-lg p-2"
      >
        Ir al inicio
      </Link>
    </main>
  );
};

export default PageNotFound;
