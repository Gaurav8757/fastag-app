
"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function CarouselSection() {
const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
   return (
    <div className="w-full mx-auto justify-center">
      <Carousel
        plugins={[plugin?.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="p-0">
                  <CardContent className="relative aspect-[4/3] w-full overflow-hidden rounded-xl p-0 shadow-lg">
                     <Image width={0} height={0}
                                   src="/modern-toll-booth-with-vehicles-and-fastag-technol.jpg"
                                   alt="FASTag Technology"
                                   className="w-full h-auto rounded-2xl shadow-2xl"
                                 />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}
