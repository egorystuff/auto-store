"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Categories, Container, Title } from "@/components/shared";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <>
      <div className='border border-b'>
        <Container className='flex items-center justify-center mt-10 mb-10'>
          <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div>
                    {/* <img src={`/cars/${index + 1}.jpg`} alt='car' className='w-full flex items-center justify-between' /> */}
                    <Image src={`/cars/${index + 1}.jpg`} alt='car' width={1280} height={720} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </div>

      <Container className='mt-10'>
        <Title text='Купить авто из Америки, Европы и Азии' size='lg' className='font-bold' />

        <Categories />
      </Container>
    </>
  );
}
