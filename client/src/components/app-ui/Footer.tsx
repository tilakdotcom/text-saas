import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between">
        {/* Branding Section */}
        <div className="mb-8 md:mb-0 md:w-1/3 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/image.png"
              width={96}
              height={96}
              alt="Tilak Singh"
              className="rounded-full border-2 border-gray-300 shadow-md"
            />
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Made with 🧡 by{" "}
              <Link
                href="#"
                target="_blank"
                className="underline underline-offset-2 hover:text-pink-600 dark:hover:text-pink-400"
              >
                Tilak Singh
              </Link>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:w-2/3 text-sm">
          <div>
            <h4 className="mb-3 font-semibold text-gray-800 uppercase dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="hover:underline">
                  Subscription
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-gray-800 uppercase dark:text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:underline">
                  Cancellation & Refund
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-gray-800 uppercase dark:text-white">
              About
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
        © 2025{" "}
        <Link href="#" target="_blank" className="underline">
          Tilak Singh
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}
