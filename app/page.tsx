"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Categories, Container, Title } from "@/components/shared";
import { Card, CardContent, Carousel, CarouselContent, CarouselItem } from "@/components/ui";

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <>
      <Container className='flex items-center justify-center mt-10'>
        <Carousel
          plugins={[plugin.current]}
          className='w-full max-w-xs'
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card className='border-none'>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-4xl font-semibold'>{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>

      <Container className='mt-10'>
        <Title text='Купить авто из Америки, Европы и Азии' size='lg' className='font-bold' />

        <Categories />
      </Container>
    </>
  );
}
