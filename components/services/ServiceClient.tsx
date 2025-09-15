"use client";
import { TextAnimate } from "../magicui/text-animate";
import { CheckCircle } from "lucide-react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { MagicCard } from "../magicui/magic-card";
import { ShootingStars } from "../ui/shooting-stars";

export function ServiceClient() {
  return (
    <section className="my-auto py-8">
      <ShootingStars
        className="absolute inset-0 pointer-events-none"
        starColor="#ea871f"
        trailColor="#39ac37"
        minSpeed={5}
        maxSpeed={10}
        minDelay={200}
        maxDelay={300}
      />
      <div className="container mx-auto px-4">
         <div className="text-center space-y-4 mb-16">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              className="text-3xl lg:text-4xl font-bold text-primary text-center"
            >
             Our Services
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="text-xl text-muted-foreground text-pretty"
            >
               Comprehensive FASTag solutions for all your needs
            </TextAnimate>
          </div>
      

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "FASTag Recharge",
              description: "Quick and secure recharge for all FASTag operators",
              features: [
                "Instant processing",
                "Multiple payment options",
                "Auto-recharge available",
              ],
            },
            {
              title: "Balance Check",
              description: "Check your FASTag balance anytime, anywhere",
              features: [
                "Real-time balance",
                "Transaction history",
                "Low balance alerts",
              ],
            },
            {
              title: "Transaction History",
              description: "Detailed records of all your toll transactions",
              features: [
                "Downloadable reports",
                "Filter by date",
                "Expense tracking",
              ],
            },
            {
              title: "Customer Support",
              description: "24/7 assistance for all your FASTag queries",
              features: [
                "Live chat support",
                "Phone assistance",
                "Email support",
              ],
            },
            {
              title: "Fleet Management",
              description: "Manage multiple vehicles and FASTags efficiently",
              features: [
                "Bulk operations",
                "Usage analytics",
                "Cost optimization",
              ],
            },
            {
              title: "Mobile App",
              description: "Manage your FASTag on the go with our mobile app",
              features: [
                "iOS & Android",
                "Offline access",
                "Push notifications",
              ],
            },
          ].map((service, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 150} key={index}>
              <ShootingStars
                className="fixed inset-0 pointer-events-none"
                starColor="#ea871f"
                trailColor="#39ac37"
                minSpeed={5}
                maxSpeed={15}
                minDelay={200}
                maxDelay={400}
              />
              <MagicCard
                gradientColor="#fff7e5"
                key={index}
                className="hover:shadow-lg p-4 rounded-2xl hover:scale-102 transition-all duration-400"
              >
                <CardHeader>
                  <CardTitle className="md:text-xl text-lg">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base my-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </MagicCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
