import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";

const saiyanSans = localFont({
  src: "./fonts/Saiyan-Sans.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DBZ-Enciclopedia",
  description:
    "Descubre el universo de Dragon Ball Z con información detallada sobre tus personajes favoritos y los planetas icónicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${saiyanSans.className} antialiased h-screen dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] dark:from-slate-950 dark:via-slate-900 dark:to-gray-800 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-white via-orange-200 to-orange-300`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
