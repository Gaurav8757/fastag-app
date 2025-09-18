"use client";
import Link from "next/link";
import { FaYoutube,FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="text-center  flex flex-col justify-between text-xs md:text-sm px-8 pb-6 md:px-12 bg-gradient-to-tr from-zinc-700 to-gray-800 text-gray-300 dark:text-gray-400 backdrop-blur-3xl tracking-wider">
      <div className="w-full py-4 container  mx-auto border-b border-gray-700 mb-4">
        <div className="flex sm:items-center  justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                FP
              </span>
            </div>
            <span className="text-xl font-bold">FastPay</span>
          </Link>
          <ul className="flex flex-wrap items-center font-medium text-gray-300 0 sm:mb-0 dark:text-gray-400">
            <li className="hover:text-slate-100 hover:scale-102 transition-all duration-300">
              <Link href="/privacy" className="me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li className="hover:text-slate-100 hover:scale-102 transition-all duration-300">
              <Link href="#" className=" me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li className="hover:text-slate-100 hover:scale-102 transition-all duration-300"></li>
          </ul>
        </div>
      </div>
      {/* 2nd container */}
      <div className="w-full md:flex md:justify-between container mx-auto space-y-4 md:space-y-0 border-gray-700 px-2">
        <div className="">
          &copy; Copyright {new Date().getFullYear() - 1} |{" "}
          <Link
            className="hover:scale-105 transition-all duration-300 hover:text-orange-500"
            href="/"
          >
            {" "}
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
        </div>
         <div className="flex gap-3 sm:justify-center">
      {/* YouTube */}
      <Link
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-red-500 transition-transform transform hover:scale-110"
      >
        <FaYoutube size={20} />
      </Link>

      {/* Twitter (X) */}
      <Link
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-slate-400 hover:text-black transition-transform transform hover:scale-110"
      >
        <FaXTwitter size={18} />
      </Link>

      {/* Facebook */}
      <Link
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-blue-500 transition-transform transform hover:scale-110"
      >
        <FaFacebookF size={18} />
      </Link>

      {/* Instagram */}
      <Link
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-pink-400 transition-transform transform hover:scale-110"
      >
        <FaInstagram size={20} />
      </Link>
    </div>
      </div>
    </footer>
  );
}
