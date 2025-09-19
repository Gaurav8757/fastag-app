"use client";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Particles } from "@/components/magicui/particles";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";
import { ShootingStars } from "../ui/shooting-stars";
import { AuroraText } from "../magicui/aurora-text";
import { RippleButton } from "../magicui/ripple-button";
import CarouselSection from "../Carousel/carousel";
import { WobbleCard } from "../ui/wobble-card";
import { MagicCard } from "../magicui/magic-card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function LandingPage() {
const router = useRouter();
  return (
    <>
      {/* Hero Section */}
    
      <ShootingStars
        className="fixed inset-0 pointer-events-none"
        starColor="#ea871f"
        trailColor="#39ac37"
        minSpeed={5}
        maxSpeed={15}
        minDelay={200}
        maxDelay={400}
      />
      <section className="relative lg:h-screen bg-cover bg-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <Particles
        className="absolute inset-0 z-10 w-[99%]"
        size={1.5}
        color="#0051ba"
      />
        {/* Overlay */}
        <div className="absolute inset-0 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex md:flex-row flex-col  container mx-auto items-center justify-between  px-4 h-[90%] py-10">
          {/* Text Content */}
          <div
            className="max-w-xl md:text-left  space-y-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Badge variant="secondary" className="w-fit text-slate-800 md:text-sm">
              Trusted by 10M+ Users
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <AuroraText>Seamless FASTag Service Provider</AuroraText>
            </h1>
            <p className="text-lg md:text-xl lg:mb-8">
              ASLWallets brings you a fast, secure, and user-friendly way to manage your <strong>FASTag</strong> needs. 
              From instant recharges to 24/7 support, our platform ensures smooth travel on national highways. Experience lightning-fast processing, real-time updates, and secure payments — all in one place.
            </p>
            <RippleButton
              rippleColor="#39ac37"
              onClick={()=> router.push("/login")}
              className="bg-primary text-white px-8 tracking-wider py-2 rounded-md font-semibold hover:bg-[#033577] transition"
            >
              Get Started
            </RippleButton>
            <div className="flex items-center lg:gap-8 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Instant Recharge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Image Slider Placeholder */}
          <div
            className="w-full lg:w-1/2 mt-10 md:mt-0"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            {/* You can replace this with an actual slider */}
            <CarouselSection />
          </div>
        </div>
      </section>

      {/* abouts */}
      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat lg:py-20 py-10"
        style={{
          backgroundImage: "url('/FasTag.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 backdrop-blur-sm z-0" />
       
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
               
                  <Image src="/fastagbanners.jpg" alt="fastag" width={500} height={80}/>
                
                <h1 className="text-3xl lg:text-6xl font-bold text-balance leading-tight">
                  Go Contactless with  <span className="text-primary">ASL Wallets FASTag</span>  Service
                  Provider
                </h1>
                <p className="md:text-xl text-muted-foreground text-pretty leading-relaxed">
                 FASTag is an RFID passive tag used for making toll payments directly from the customer’s linked prepaid, savings, or current account. It is affixed to the windshield of the vehicle and enables the customer to drive through toll plazas without stopping for any toll payments. The toll fare is directly deducted from the linked account of the customer. FASTag is also vehicle-specific, and once it is affixed to a vehicle, it cannot be transferred to another vehicle.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  onClick= {()=> router.push("/service")}
                  className="text-lg px-8 bg-transparent cursor-pointer">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Instant Recharge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="py-10 bg-muted/30"
      >
        <div className="container mx-auto px-6 md:px-4">
          <div className="text-center space-y-4 mb-16">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              className="text-3xl lg:text-4xl font-bold text-balance bg-gradient-to-tl from-blue-700 to-blue-900 bg-clip-text text-transparent"
            >
              Why Choose FastPay?
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto"
            >
              Experience the future of toll payments with our comprehensive
              FASTag solutions
            </TextAnimate>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                icon: Zap,
                title: "Instant Recharge",
                duration: 100,
                description:
                  "Recharge your FASTag in seconds with multiple payment options",
              },
              {
                icon: Shield,
                title: "Secure & Safe",
                duration: 200,
                description:
                  "Bank-grade security ensures your transactions are always protected",
              },
              {
                icon: CreditCard,
                title: "Multiple Payment Methods",
                duration: 300,
                description:
                  "Pay using UPI, cards, net banking, or digital wallets",
              },
              {
                icon: Users,
                title: "24/7 Support",
                duration: 400,
                description:
                  "Round-the-clock customer support for all your queries",
              },
            ].map((feature, index) => (
              <WobbleCard
                key={index}
                className={`text-center hover:shadow-lg  ${
                  index % 2 === 0 ? "bg-green-100 " : "bg-secondary/20"
                }   dark:bg-transparent transition-shadow`}
              >
                <ShootingStars
                  className="absolute inset-0 pointer-events-none"
                  starColor="#ea871f"
                  trailColor="#39ac37"
                  minSpeed={3}
                  maxSpeed={8}
                  minDelay={500}
                  maxDelay={1500}
                />
                <div
                  data-aos-delay={feature.duration}
                  data-aos="fade-up"
                  key={index}
                >
                  <CardHeader>
                    <div
                      className={`mx-auto w-12 h-12 rounded-lg flex items-center justify-center  mb-4 ${
                        index % 2 === 0
                          ? "bg-green-300/30 dark:bg-green-700/50"
                          : "bg-orange-300/30 dark:bg-orange-700/50"
                      }`}
                    >
                      <feature.icon
                        className={`h-6 w-6 ${
                          index % 2 === 0
                            ? "text-green-600 dark:text-white"
                            : "text-orange-600 dark:text-white"
                        }`}
                      />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </WobbleCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6">
        <div className="container mx-auto lg:px-4">
          <div className="text-center space-y-4 mb-10">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              className="text-3xl lg:text-4xl font-bold text-balance bg-gradient-to-tl from-blue-700 to-blue-800 bg-clip-text text-transparent"
            >
              Trusted by Millions
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto"
            >
              See what our customers say about their FASTag experience
            </TextAnimate>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Frequent Traveler",
                duration: 100,
                content:
                  "FastPay has made my highway journeys so much smoother. Instant recharges and transparent tracking!",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Business Owner",
                duration: 200,
                content:
                  "Managing multiple vehicle FASTags for my fleet is now effortless. Excellent service!",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Daily Commuter",
                duration: 300,
                content:
                  "The best FASTag service I've used. Quick, reliable, and great customer support.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                data-aos-delay={testimonial.duration}
                data-aos="fade-top"
                key={index}
              >
                <MagicCard
                  key={index}
                  className="py-6 mx-4 md:mx-0 bg-[#0033ff1e] rounded-2xl hover:scale-101 transition-all duration-300"
                  gradientColor="#0033ff1e"
                >
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </MagicCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* circle */}

      {/* CTA Section */}
      <section className="mx-auto rounded-xl lg:max-w-[79%] sm:max-w-[82%] px-4 w-full overflow-hidden mb-7 md:px-0">
       
          <picture className="w-full h-full rounded-xl">
            <Image src="/landingp1.png" alt="fastag" width={0} height={0} className="w-full h-full rounded-xl"/>
                </picture>
      </section>

   
    </>
  );
}
