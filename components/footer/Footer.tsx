"use client";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="text-center   text-sm px-6 pb-6 md:px-12 bg-slate-800 text-gray-300 dark:text-gray-400 tracking-wider">
      <div className="w-full py-4 container  mx-auto border-b border-gray-700 mb-4">
        <div className="flex sm:items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                FP
              </span>
            </div>
            <span className="text-xl font-bold">FastPay</span>
          </Link>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-300 0 sm:mb-0 dark:text-gray-400">
            <li className="hover:text-slate-100 hover:scale-102 transition-all duration-300">
              <Link href="#" className="me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li className="hover:text-slate-100 hover:scale-102 transition-all duration-300">
              <Link href="#" className=" me-4 md:me-6">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
      </div>
      &copy; Copyright {new Date().getFullYear()-1} |{" "}
      <Link
        className="hover:scale-105 transition-all duration-300 hover:text-orange-500"
        href="/"
      >
        FastPay Website{" "}
      </Link>
      | All Rights Reserved | Powered by{" "}
      <Link
        className="hover:scale-105 transition-all duration-300 hover:text-green-500"
        href="https://www.aslsolutiontech.com/"
        target="_blank"
      >
        {" "}
        ASL Solutions Tech Pvt. Ltd.
      </Link>
    </footer>
  );
}
