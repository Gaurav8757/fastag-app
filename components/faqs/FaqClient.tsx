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
      title:"Does the concept of 'One Vehicle One FASTag' imply that a vehicle owner must exclusively recharge their FASTag using a specific bank?",
      content: `No, the ‘One Vehicle One FASTag’ concept indicates that a vehicle owner is permitted to have only one active FASTag for one vehicle. All the FASTags linked to a single vehicle except the latest one shall be de-activated. Acquiring multiple FASTags for a single vehicle is not permitted. However, users have the flexibility to recharge their FASTag using any bank and various payment methods such as BBPS, UPI, net banking, etc.`,
    },
    {
      value: "item-2",
      title: "How can I check the status of multiple FASTags linked to my vehicle?",
      content: `To check the status of multiple FASTags linked to your vehicle, you can follow below steps:`,
      list: `Visit the official link: https://www.npci.org.in/what-we-do/netc-fastag/check-your-netc-fastag-status
            Enter your vehicle details.
            Click “Submit.”
            View the status of all the FASTags linked to your vehicle number.`,
    },
    { value: "item-3", title: "What is FASTag?", content: "", list: "" },
    {
      value: "item-4",
      title: "What are the benefits of using FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-5",
      title: "Is FASTag mandatory for all vehicles in India?",
      content: "",
      list: "",
    },
    {
      value: "item-6",
      title: "Is FASTag mandatory for new motor vehicle insurance?",
      content: "",
      list: "",
    },
    {
      value: "item-7",
      title: "Who is implementing FASTag program?",
      content: "",
      list: "",
    },
    {
      value: "item-8",
      title:
        "What is the meaning of tag getting blacklisted? What can be done to avoid the Blacklist of tag?",
      content: "",
      list: "",
    },
    {
      value: "item-9",
      title: "What is the validity of FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-10",
      title:
        "Why are the toll rates different for different vehicle categories?",
      content: "",
      list: "",
    },
    {
      value: "item-11",
      title: "Where can I buy FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-12",
      title: "What documents are required to purchase a FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-13",
      title: "What are the charges for FASTag?",
      content: "",
      list: "",
    },
    { value: "item-14", title: "What is NHAI FASTag?", content: "", list: "" },
    {
      value: "item-15",
      title: "How to buy NHAI FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-16",
      title:
        "How to activate or link your NHAI FASTag with Bank account or NHAI wallet?",
      content: "",
      list: "",
    },
    {
      value: "item-17",
      title: "How to check your FASTag balance?",
      content: "",
      list: "",
    },
    {
      value: "item-18",
      title: "KYC Process related FAQs:",
      content: "",
      list: "",
    },
    {
      value: "item-19",
      title: "How to recharge a FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-20",
      title: "Can I recharge FASTag by paying cash?",
      content: "",
      list: "",
    },
    {
      value: "item-21",
      title: "What is the process of recharging FASTag using UPI?",
      content: "",
      list: "",
    },
    {
      value: "item-22",
      title: "What is my UPI ID for reloading of FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-23",
      title: "Is there any minimum value for a recharge/top up?",
      content: "",
      list: "",
    },
    {
      value: "item-24",
      title:
        "What if I have recharged the FASTag but Money is not credited in my FASTag Account?",
      content: "",
      list: "",
    },
    {
      value: "item-25",
      title: "How and where do I finally pay the toll?",
      content: "",
      list: "",
    },
    {
      value: "item-26",
      title: "Which all Toll Plaza are ready for FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-27",
      title: "Do I need to use any specific lane at the toll plaza for FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-28",
      title:
        "How would I know that the correct user fee has been deducted from my FASTag account?",
      content: "",
      list: "",
    },
    {
      value: "item-29",
      title:
        "How would I report an incorrect deduction and how will I get back the same?",
      content: "",
      list: "",
    },
    {
      value: "item-30",
      title: "How would I cross toll plaza, if ETC equipment are not working?",
      content: "",
      list: "",
    },
    {
      value: "item-31",
      title:
        "In case of harassment/ misconduct/ discourteous/ rude behavior of toll collection staff, what should we do?",
      content: "",
      list: "",
    },
    {
      value: "item-32",
      title: "Can one vehicle use more than one FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-33",
      title:
        "Can a FASTag bought for my one vehicle be used for another vehicle?",
      content: "",
      list: "",
    },
    {
      value: "item-34",
      title: "How do I search for the nearest FASTag point-of-sale (POS)?",
      content: "",
      list: "",
    },
    {
      value: "item-35",
      title:
        "I have a FASTag and also balance in my linked account, but I could not go through ETC lane. How do I get my FASTag checked/ rectified to see whether it is active or not?",
      content: "",
      list: "",
    },
    {
      value: "item-36",
      title: "Can FASTag be used at places other than National highways?",
      content: "",
      list: "",
    },
    {
      value: "item-37",
      title:
        "How I will know whether FASTag is accepted at a particular toll plaza?",
      content: "",
      list: "",
    },
    {
      value: "item-38",
      title: "Can the tags purchased earlier be used?",
      content: "",
      list: "",
    },
    {
      value: "item-39",
      title: "What if the FASTag gets damaged?",
      content: "",
      list: "",
    },
    {
      value: "item-40",
      title: "I have forgotten my Tag details. How to retrieve information?",
      content: "",
      list: "",
    },
    {
      value: "item-41",
      title: "What if I relocate to another City?",
      content: "",
      list: "",
    },
    {
      value: "item-42",
      title: "Can I can avail discounts/passes/exemption etc. on FASTag ?",
      content: "",
      list: "",
    },
    {
      value: "item-43",
      title: "Can I avail a monthly pass?",
      content: "",
      list: "",
    },
    {
      value: "item-44",
      title: "What are the documents required for “Exempted FASTag”?",
      content: "",
      list: "",
    },
    {
      value: "item-45",
      title: "How to apply for “Exempted FASTag”?",
      content: "",
      list: "",
    },
    {
      value: "item-46",
      title: "Who are exempted from Toll Tax?",
      content: "",
      list: "",
    },
    {
      value: "item-47",
      title:
        "Should vehicles exempted from paying fees at NH toll plazas, affix a FASTag sticker?",
      content: "",
      list: "",
    },
    {
      value: "item-48",
      title: "What is the cost to purchase an exempted FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-49",
      title: "Can I get an exempted FASTag from member banks?",
      content: "",
      list: "",
    },
    {
      value: "item-50",
      title:
        "Can exempted persons/vehicles without a FASTag reap the benefit of non-payment of toll fees?",
      content: "",
      list: "",
    },
    {
      value: "item-51",
      title: "What is the validity of an exempted FASTag?",
      content: "",
      list: "",
    },
    {
      value: "item-52",
      title:
        "What is the validity of an exempted FASTag for MPs, MLAs and MLCs?",
      content: "",
      list: "",
    },
    {
      value: "item-53",
      title:
        "Serving army personnel who are using private vehicle for commute, are they exempted from payment of user fee?",
      content: "",
      list: "",
    },
    {
      value: "item-54",
      title:
        "Is exemption available to physically disabled person producing disability certificate?",
      content: "",
      list: "",
    },
    {
      value: "item-55",
      title:
        "I reside within 10 km of a particular Toll Plaza. Do I need to take FASTag to get the concessions available for local vehicles?",
      content: "",
      list: "",
    },
    {
      value: "item-56",
      title: "How do I block my FASTag account, in case my vehicle is lost?",
      content: "",
      list: "",
    },
    {
      value: "item-57",
      title: "What if I sell/ transfer my car?",
      content: "",
      list: "",
    },
    {
      value: "item-58",
      title:
        "What do I have to do if I lost my FASTag? What will happen to the account balance?",
      content: "",
      list: "",
    },
    {
      value: "item-59",
      title: "What if I sell/ transfer my car?",
      content: "",
      list: "",
    },
    {
      value: "item-60",
      title: "What if the vehicle owner/ user has a grievance?",
      content: "",
      list: "",
    },
    {
      value: "item-61",
      title:
        "How is 1033 helpline number useful to me? What type of toll plaza level complaints can I raise by calling this number?",
      content: "",
      list: "",
    },
    {
      value: "item-62",
      title: "If FASTag delivery is delayed. Where can you report?",
      content: "",
      list: "",
    },
    {
      value: "item-63",
      title:
        "If the customer care number for issuer banks is not working/responding what is the alternate option?",
      content: "",
      list: "",
    },
    {
      value: "item-64",
      title: "What is My FASTag App?",
      content: "",
      list: "",
    },
    {
      value: "item-65",
      title: "What are the key features of My FASTag App?",
      content: "",
      list: "",
    },
    {
      value: "item-66",
      title: "How to Download MyFASTag App?",
      content: "",
      list: "",
    },
    {
      value: "item-67",
      title: "What is the use of FASTag app?",
      content: "",
      list: "",
    },
    {
      value: "item-68",
      title:
        "What is Tag Status facility on My FASTag App ? How can I use to pass at a toll plazas?",
      content: "",
      list: "",
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
          <div className="text-center space-y-4 md:mb-16 mb-8">
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
              className="md:text-xl text-muted-foreground text-pretty"
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
                  data-aos-delay={index * 5}
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
                    <AccordionTrigger className="lg:text-lg font-semibold tracking-wider text-base cursor-pointer">
                      {item.title}
                    </AccordionTrigger>

                    <AccordionContent className="lg:text-lg text-muted-foreground tracking-wider text-base">
                      <p>{item.content}</p>

                      {/* Render steps only if `item.list` has line breaks */}
                      {item.list && item.list.includes("\n") ? (
                        <ul className="mt-3 list-disc list-inside space-y-1">
                          {item.list.split("\n").map((step, i) => (
                            <li key={i}>{step.trim()}</li>
                          ))}
                        </ul>
                      ) : (
                        item.list && (
                          <ul className="mt-3 list-disc list-inside">
                            <li>{item.list}</li>
                          </ul>
                        )
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
