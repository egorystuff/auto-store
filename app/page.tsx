"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Container, Filters, ProductsGroupList, Title } from "@/components/shared";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <>
      <div className='border border-b'>
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

      <Container className='mt-5'>
        <Title text='Купить авто из Америки, Европы и Азии' size='lg' className='font-bold' />
      </Container>

      <Container className='mt-5 pb-14'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Авто из Европы'
                items={[
                  { id: 1, name: "Mercedes-Benz GLA", yearOfManufacture: 2022, price: 45000, imageUrl: "/cars/1.jpg" },
                  { id: 2, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/2.jpg" },
                  { id: 3, name: "Mercedes-Benz GLA", yearOfManufacture: 2022, price: 45000, imageUrl: "/cars/3.jpg" },
                  { id: 4, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/4.jpg" },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title='Авто из Америки'
                items={[
                  { id: 1, name: "Mercedes-Benz GLA", yearOfManufacture: 2022, price: 45000, imageUrl: "/cars/4.jpg" },
                  { id: 2, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/2.jpg" },
                  { id: 3, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/2.jpg" },
                  { id: 4, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/2.jpg" },
                  { id: 5, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/2.jpg" },
                ]}
                categoryId={2}
              />
              <ProductsGroupList
                title='Авто из России'
                items={[
                  { id: 1, name: "Mercedes-Benz GLA", yearOfManufacture: 2022, price: 45000, imageUrl: "/cars/1.jpg" },
                  { id: 6, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/3.jpg" },
                  { id: 7, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/3.jpg" },
                  { id: 8, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/3.jpg" },
                  { id: 9, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/3.jpg" },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
