import React from "react";
import { CarouselCard, Container, Filters, ProductsGroupList, SearchInput, Title } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { console } from "inspector";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  console.log(categories);

  return (
    <>
      <CarouselCard />

      <Container className='mt-5 flex flex-col items-center '>
        <Title text='Купить авто из Америки, Европы и Азии' size='lg' className='font-bold' />

        <div className='mt-5 w-[650px]'>
          <SearchInput />
        </div>
      </Container>

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

{
  /* <ProductsGroupList
  title='Авто из Европы'
  items={[
    { id: 1, name: "Mercedes-Benz GLA", yearOfManufacture: 2022, price: 45000, imageUrl: "/cars/1.jpg" },
    { id: 2, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/2.jpg" },
    { id: 3, name: "Mercedes-Benz GLA", yearOfManufacture: 2022, price: 45000, imageUrl: "/cars/3.jpg" },
    { id: 4, name: "Peugeot 508", yearOfManufacture: 2021, price: 25000, imageUrl: "/cars/4.jpg" },
  ]}
  categoryId={1}
/>; */
}
