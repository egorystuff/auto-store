import React from "react";
import { CarouselCard, Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  return (
    <>
      <CarouselCard />

      <Container className='mt-5 flex flex-col items-center '>
        <Title text='Купить авто из Америки, Европы и Азии' size='lg' className='font-bold' />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Container className='mt-5 pb-14'>
        <div className='flex gap-[60px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      items={category.products}
                      categoryId={category.id}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
