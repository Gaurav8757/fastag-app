"use client";
import Link from "next/link";
import { MagicCard } from "../magicui/magic-card";
import { Card } from "../ui/card";
import { TextAnimate } from "../magicui/text-animate";
import { ShootingStars } from "../ui/shooting-stars";
import { useStore } from "@/store/store";

export default function Footer() {
  const { setActiveSection } = useStore();
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const bankData = [
    { name: "Airtel Payments Bank", contact: "400/8800-688-006" },
    { name: "AU Small Finance Bank", contact: "1800-258-7300" },
    { name: "Axis Bank Ltd", contact: "1860-419-8585" },
    { name: "Bank of Baroda", contact: "1800-103-4568" },
    { name: "Bank of Maharashtra", contact: "NA" },
    { name: "Canara Bank", contact: "1800-103-3568" },
    { name: "Central Bank of India", contact: "1800221911" },
    { name: "City Union Bank Ltd", contact: "1800-258-7200" },
    { name: "Cosmos Bank", contact: "1800 233 0234" },
    { name: "Equitas Small Finance Bank", contact: "1800-103-1222" },
    { name: "Federal Bank", contact: "1800-266-9520" },
    { name: "FINO Payments Bank", contact: "022-6868-1414" },
    { name: "HDFC Bank", contact: "1800-120-1243" },
    { name: "ICICI Bank", contact: "1800-210-0104" },
    { name: "IDBI Bank", contact: "1800-266-1962" },
    { name: "IDFC First Bank", contact: "1800-266-9970" },
    { name: "Indian Bank", contact: "NA" },
    { name: "IndusInd Bank", contact: "1860-210-8887" },
    { name: "J&K Bank", contact: "1800 572 1370" },
    { name: "Karnataka Bank", contact: "18005722061" },
    { name: "Karur Vysya Bank", contact: "1800-102-1916" },
    { name: "Kotak Mahindra Bank", contact: "18-602-666-888" },
    { name: "Bajaj Finance Ltd.", contact: "18002100260" },
    { name: "Nagpur Nagrik Sahakari Bank", contact: "1800-266-7183" },
    { name: "PAYTM Bank", contact: "1800-120-4210" },
    { name: "Punjab National Bank", contact: "1800-419-6610" },
    { name: "Saraswat Bank", contact: "1800-229-999/1800-266-5555" },
    { name: "South Indian Bank", contact: "1800-425-1809" },
    { name: "State Bank of India", contact: "1800-110-018" },
    { name: "Thrissur District Cooperative Bank", contact: "18004255705" },
    { name: "UCO Bank", contact: "18005721371" },
    { name: "Union Bank of India", contact: "1800-258-6400" },
    { name: "YES BANK", contact: "1800 103 5485" },
    { name: "Dombivli Nagari Sahakari Bank", contact: "1800-233-1700" },
    { name: "LivQuik Technology (India) Pvt Ltd", contact: "18003092225" },
  ];

  return (
    <>
      <Card className=" bg-opacity-70 md:p-12 relative bg-fixed bg-cover bg-center mx-auto rounded-none border-none  " style={{
    backgroundImage: "url('/fasTag.jpg')",
  }}>
     <div className="absolute inset-0 bg-gradient-to-br from-white/50  to-white/50 backdrop-blur-lg z-0" />
        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          className="text-3xl md:text-4xl z-1 font-bold text-center "
        >
          Bank Helpline Numbers
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-center text-lg mb-4 z-1 text-gray-600 dark:text-gray-300"
        >
          NHAI FASTag Helpline No. – 1033
        </TextAnimate>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-sm md:text-base">
          {bankData.map((bank, index) => (
            
              <div
              data-aos="zoom-in-up" data-aos-delay={index * 5}
                key={index}
                className="w-54 h-24 mx-auto p-4 rounded hover:scale-101 transition-all duration-400 hover:shadow-smoke-lg relative overflow-hidden"
              >
                <ShootingStars
                  className="absolute inset-0 pointer-events-none"
                  starColor="#ea871f"
                  trailColor="#39ac37"
                  minSpeed={5}
                  maxSpeed={15}
                  minDelay={200}
                  maxDelay={400}
                />
                <p className="font-semibold ">{bank.name}</p>
                <p className="text-sm">{bank.contact}</p>
              </div>
            
          ))}
        </div>
        <div></div>
      </Card>
      {/* FOOTER */}
      <footer className="text-center  text-sm px-6 pb-6 md:px-12 bg-slate-800 text-gray-300 dark:text-gray-400 tracking-wider">
        <div className="w-full py-4  mx-auto border-b border-gray-700 mb-4">
          <div className="flex sm:items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setActiveSection("home")}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  FP
                </span>
              </div>
              <span className="text-xl font-bold">FastPay</span>
            </div>
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
        &copy; Copyright {new Date().getFullYear()} |{" "}
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
    </>
  );
}
