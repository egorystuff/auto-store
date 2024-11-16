"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Container, Filters, Title, TopBar } from "@/components/shared";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <>
      <div className='border border-b'>
        <Container className='flex items-center justify-center mt-10 mb-10 bg-red-50'>
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

      <Container className='mt-10'>
        <Title text='Купить авто из Америки, Европы и Азии' size='lg' className='font-bold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>Список автомобилей</div>
          </div>
        </div>
      </Container>
    </>
  );
}
