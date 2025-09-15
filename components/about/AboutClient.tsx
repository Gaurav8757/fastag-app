"use client";
import Image from "next/image";
import { MagicCard } from "../magicui/magic-card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TextAnimate } from "../magicui/text-animate";
import { ShootingStars } from "../ui/shooting-stars";

export function AboutClient() {
  return (
    <section className="py-0 mx-auto bg-slate-100/80 text-gray-900 relative overflow-hidden">
     
      <div className="absolute top-[-100px] left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-[-80px] right-[10%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] z-0"></div>

      {/* <div className="container-fluid mx-auto px-4 relative z-10 space-y-20 bg-[url('/FasTag.jpg')] bg-transparent bg-fixed bg-cover bg-center bg-no-repeat"> */}
      <div className="container mx-auto px-4  relative z-10 md:space-y-32 space-y-16">
        {/* Overlay for blur and soft tint */}
        <div className="absolute inset-0  backdrop-blur-sm z-0 size-full" />
        {/* Header Section */}

        <div className="text-center space-y-4 py-8 " data-aos="fade-up">
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-4xl lg:text-5xl font-extrabold text-primary"
          >
            About FastPay
          </TextAnimate>
          <TextAnimate
            animation="slideLeft"
            by="character"
            className="text-xl text-gray-600 mx-auto"
          >
            ASL WALLETS is a leading fintech service aggregator in India,
            offering more than 60+ services. Rapid growth, trusted solutions,
            and continuous innovation define our journey.
          </TextAnimate>
        </div>

        {/* Company Details */}
        <div
          className="grid lg:grid-cols-2 gap-12 mt-0 items-center"
          data-aos="fade-up"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-secondary">Who We Are</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              ASL WALLETS is a trusted partner for payments and service
              aggregation in India. We offer recharge (prepaid, postpaid), bill
              payments (electricity, gas, landline), insurance, travel bookings,
              and many more services — all under one roof.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our retail base and channel partner network have grown
              exponentially. In just four years, our outlets have multiplied
              10×, and we anticipate further growth in the years to come.
            </p>
          </div>
          <div
            className="rounded-2xl items-end overflow-hidden shadow-glow-primary  "
            data-aos="zoom-in"
          >
            <Image width={0} height={0}
              src="/fasTag.jpg"
              alt="ASL Wallet Office"
              className="w-full h-full object-cover mask-alpha mask-r-from-white mask-r-from-50% mask-r-to-black"
            />
          </div>
        </div>

        {/* Values */}
        <div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {[
            {
              title: "Innovation",
              desc: "Pushing boundaries to make technology work smarter for you.",
            },
            {
              title: "Security",
              desc: "Keeping data & transactions safe with bank-grade protocols.",
            },
            {
              title: "Reliability",
              desc: "99.9% uptime — always there when you need us.",
            },
            {
              title: "Transparency",
              desc: "Clear processes, honest communication.",
            },
            {
              title: "Customer Focus",
              desc: "Designing every feature around what the user needs.",
            },
            {
              title: "Scalability",
              desc: "Growing infrastructure that supports millions of users.",
            },
          ].map((val, idx) => (  <div
                   data-aos="zoom-in"
              data-aos-delay={idx * 150}
                  key={idx}
                >
                     <ShootingStars
              className="fixed inset-0 z-10 pointer-events-none"
              starColor="#ea871f"
              trailColor="#39ac37"
            minSpeed={5}
        maxSpeed={15}
        minDelay={200}
        maxDelay={400}
            />
            <MagicCard
              key={idx}
              gradientColor="#d4fbd4"
              className="hover:scale-102 p-4 transition-all duration-300 backdrop-blur-md aspect-rectangle border-0 border-primary-light rounded text-center "
           
            >
             
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {val.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  {val.desc}
                </CardDescription>
              </CardContent>
             
            </MagicCard> </div>
          ))}
        </div>

        {/* Mission, Vision, Plan */}
        <div
          className=" mx-auto grid md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To become India’s most reliable payment solutions provider —
              delivering seamless, secure, and innovative services that simplify
              everyday transactions for millions of users.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Creating a digital ecosystem where all essential services are
              accessible, trusted, and affordable — from utilities to government
              services, from travel to insurance.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">Our Plan</h3>
            <p className="text-gray-700 leading-relaxed">
              Expanding our franchise network to every town and village,
              partnering with leading providers, and building simple, secure
              terminals for real-time transactions and legal billing.
            </p>
          </div>
        </div>

        {/* Team Section */}
        {/* <div
          className="max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-3xl font-bold text-secondary text-center mb-8">
            Meet The Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Doe", role: "CEO", image: "/team/john.jpg" },
              { name: "Jane Smith", role: "CTO", image: "/team/jane.jpg" },
              { name: "Alex Johnson", role: "COO", image: "/team/alex.jpg" },
              {
                name: "Lisa Ray",
                role: "Head of Operations",
                image: "/team/lisa.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-secondary-light hover:shadow-glow-secondary transition"
              >
                <Image
                  width={0}
                  height={0}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <div className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </div>
                  <div className="text-sm text-gray-600">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call To Action */}
        <div
          className="max-w-3xl mx-auto text-center my-12"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <h3 className="text-3xl font-bold text-primary mb-6">
            Join Us On Our Mission
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Ready to partner with ASL WALLETS or want to know more? Reach out
            today and let’s build a better future together.
          </p>
          <button 
          // onClick={()=> setActiveSection("contact")} 
          className="px-8 py-4 bg-secondary text-white font-semibold rounded-full shadow-glow-secondary hover:bg-secondary-light transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
