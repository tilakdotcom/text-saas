import React from "react";
import { Arvo } from "next/font/google";
import Link from "next/link";
import BgGradient from "@/components/common/BGGradient";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function NotFound() {
  return (
    <section
      className={`min-h-screen ${arvo.className} flex flex-col items-center justify-center px-4 py-10 relative`}
    >
      <BgGradient />

      {/* Responsive 404 text */}
      <h1 className="text-[60px] sm:text-[80px] md:text-[100px] font-bold text-main-500 drop-shadow-lg mb-4 text-center">
        404
      </h1>

      {/* Responsive image */}
      <div
        className="relative w-full max-w-[500px] h-[200px] sm:h-[250px] md:h-[300px] bg-center bg-no-repeat bg-contain mb-6"
        style={{ backgroundImage: "url('/not_found.gif')" }}
      >
        <div className="absolute  bg-pink-700/10 rounded-xl" />
      </div>

      {/* Text + button */}
      <div className="flex flex-col items-center text-center space-y-3 px-2">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Looks like you&apos;re lost
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          The page you are looking for is not available!
        </p>
        <Link
          href="/"
          className="
    mt-6 inline-block
    rounded-lg bg-main-500
    px-5 py-3
    text-white text-base sm:text-lg font-semibold
    shadow
    transition duration-300 ease-in-out
    transform hover:scale-[1.02] hover:bg-main-600
  "
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
