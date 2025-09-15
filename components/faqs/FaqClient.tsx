"use client";
import { TextAnimate } from "../magicui/text-animate";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShootingStars } from "../ui/shooting-stars";
export default function FaqClient() {
  const [value, setValue] = useState<string>("item-1");
  const accordionData = [
    {
      value: "item-1",
      title: "Controlled Section 1",
      content: `This accordion is controlled programmatically. Use the buttons above
              to open specific sections, or click the triggers to change the value.`,
    },
    {
      value: "item-2",
      title: "Controlled Section 2",
      content: `Controlled accordions are useful when you need to synchronize the
              accordion state with other parts of your application, or when you
              want to open specific sections based on user actions elsewhere.`,
    },
    {
      value: "item-3",
      title: "Controlled Section 3",
      content: `You can also use controlled state to implement features like
              "expand all" or "collapse all", or to save and restore the
              accordion state from localStorage or a database.`,
    },
  ];

  return (
    <section className="py-6 relative overflow-hidden">
      {/* Shooting stars effect */}
      <ShootingStars
        className="absolute inset-0 pointer-events-none"
        starColor="#ea871f"
        trailColor="#39ac37"
        minSpeed={5}
        maxSpeed={15}
        minDelay={3200}
        maxDelay={4200}
      />
      <div className="container mx-auto px-4">
        <div className="px-1 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <TextAnimate
              animation="fadeIn"
              by="line"
              as="p"
              className="text-3xl lg:text-4xl font-bold text-primary text-center"
            >
              FAQs
            </TextAnimate>
            <TextAnimate
              animation="slideLeft"
              by="character"
              className="text-xl text-muted-foreground text-pretty"
            >
              Your questions, answered. Find quick solutions to common FASTag
              queries.
            </TextAnimate>
          </div>
        </div>
        {/* Accordians */}
        <div className="w-full px-1 flex justify-center">
          <div className="w-full space-y-4">

            <Accordion
              type="single"
              collapsible
              value={value}
              onValueChange={setValue}
              className="w-full"
            >
              {accordionData.map((item, index) => (
                <div
                  className="border-b last:border-b-0"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  key={index}
                >
                  {/* Shooting stars effect */}
                  <ShootingStars
                    className="absolute inset-0 pointer-events-none"
                    starColor="#ea871f"
                    trailColor="#39ac37"
                    minSpeed={5}
                    maxSpeed={15}
                    minDelay={200}
                    maxDelay={400}
                  />
                  <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="lg:text-xl font-semibold tracking-wider text-base cursor-pointer">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-lg text-muted-foreground tracking-wider text-base">
                      {item.value === "item-1" ? (
                        <>{item.content}</>
                      ) : (
                        item.content
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
