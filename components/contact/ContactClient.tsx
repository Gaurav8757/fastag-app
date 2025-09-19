"use client"
import { useIsMobile } from "@/hooks/use-mobile";
import { AuroraText } from "../magicui/aurora-text";
import { MagicCard } from "../magicui/magic-card";
import { TextAnimate } from "../magicui/text-animate";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Ripple } from "@/components/magicui/ripple";

export function ContactClient() {
  const isMobile = useIsMobile();
  return (
    <>
     <Ripple
        className="absolute inset-0 md:-top-102 top-40 left-0 md:left-55 mask-b-from-25% mask-t-to-75% z-0"
        mainCircleSize={10}
        numCircles={isMobile ? 6 : 10}
        mainCircleOpacity={0.3}
      />
   
    <div className="relative">
      
      <section className="py-6 mb-24 relative">
       
        <div className="container mx-auto px-4">
          <div className="px-1 mx-auto">
            <div className="text-center space-y-4 mb-16">
              <TextAnimate
                animation="fadeIn"
                by="line"
                as="p"
                className="text-3xl lg:text-4xl font-bold text-primary"
              >
                Contact Us
              </TextAnimate>
              <TextAnimate
                animation="slideLeft"
                by="character"
                className="text-xl text-muted-foreground text-pretty "
              >
                Get in touch with our support team
              </TextAnimate>
            </div>

            <div className="grid md:grid-cols-2 lg:gap-8">
              <div className="grid lg:grid-cols-2 space-y-8 lg:space-y-0 gap-8 mb-8 lg:mb-0">
                <div>
                  <TextAnimate
                    animation="slideLeft"
                    by="character"
                    className="text-2xl font-bold mb-6 text-primary"
                  >
                    Get Support
                  </TextAnimate>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-semibold">📞</span>
                      </div>
                      <div>
                        <TextAnimate
                          animation="slideRight"
                          by="character"
                          className="font-semibold"
                        >
                          Customer Care
                        </TextAnimate>
                        <TextAnimate
                          animation="slideRight"
                          by="character"
                          className="text-muted-foreground"
                        >
                          1800-123-4567 (Toll Free)
                        </TextAnimate>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-semibold">✉️</span>
                      </div>
                      <div>
                        <TextAnimate
                          animation="slideRight"
                          by="character"
                          className="font-semibold"
                        >
                          Email Support
                        </TextAnimate>
                        <TextAnimate
                          animation="slideRight"
                          by="character"
                          className="text-muted-foreground"
                        >
                          support@fastpay.com
                        </TextAnimate>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-semibold">💬</span>
                      </div>
                      <div>
                        <TextAnimate
                          animation="slideRight"
                          by="character"
                          className="font-semibold"
                        >
                          Live Chat
                        </TextAnimate>
                        <TextAnimate
                          animation="slideRight"
                          by="character"
                          className="text-muted-foreground"
                        >
                          Available 24/7 on our app
                        </TextAnimate>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <TextAnimate
                    animation="slideRight"
                    by="character"
                    as="p"
                    className="text-xl font-bold mb-4 text-primary"
                  >
                    Office Hours
                  </TextAnimate>
                  <div className="space-y-2 text-muted-foreground">
                    <TextAnimate animation="slideRight" by="character">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </TextAnimate>
                    <TextAnimate animation="slideRight" by="character">
                      Saturday: 10:00 AM - 4:00 PM
                    </TextAnimate>
                    <TextAnimate animation="slideRight" by="character">
                      Sunday: Closed
                    </TextAnimate>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="mb-4 lg:mb-0 lg:aspect-square mx-auto"
              >
                <MagicCard
                  gradientColor="#0033ff3e"
                  className="p-6 rounded-lg shadow-xl bg-red-600/80"
                >
                  <CardHeader>
                    <CardTitle className="text-center text-3xl font-bold text-primary">
                      <AuroraText> Send us a Message </AuroraText>
                    </CardTitle>
                    <CardDescription className="text-center text-muted-foreground mb-5">
                      We'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">
                          First Name
                        </label>
                        <Input
                          type="text"
                          className="w-full mt-1 px-3 border border-input rounded-md bg-background focus:outline-none focus:ring-0 focus:ring-primary focus:border-transparent"
                          placeholder="Your First Name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Last Name</label>
                        <Input
                          type="text"
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                          placeholder="Your Last Name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="fastag@asl.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Subject</label>
                      <Input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        rows={8}
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    <Button className="w-full mt-8 py-4 cursor-pointer hover:text-primary-foreground">Send Message</Button>
                  </CardContent>
                </MagicCard>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div> </>
  );
}
