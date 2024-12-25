"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { Container } from "./container";
import { Carousel, CarouselContent, CarouselItem } from "../ui";

interface Props {
  className?: string;
}

export const CarouselCard: React.FC<Props> = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <div className='border-t'>
      <Container className='flex items-center justify-center mt-5 mb-5'>
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Image src={`/cars/${index + 1}.jpg`} alt='car' width={1280} height={720} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};
