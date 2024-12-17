import { Container, ProductImage, Title } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({ params: { id } }: Readonly<{ params: { id: string } }>) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex flex-1'>
        <ProductImage imageUrl={product.imageUrl} name={product.name} />

        <div className='w-[490px] bg-[#FCFCFC] p-7'>
          <Title text={product.name} size='md' className='font-extrabold mb-1' />

          <p className='text-md text-gray-400'>Год выпуска: {product.yearOfManufacture}</p>

          <p className='text-md text-gray-400'>Цена: {product.price} $</p>

          <p className='text-md text-gray-400'>
            Кузов - седан. Салон - кожа, алькантара, комбинированный. Двигатели: дизель-бензин. Новые или б/у автомобили
            от официального дилера в Германии под заказ. Доставка в Беларусь на ПТО СВХ в течении 10-14 дней.
          </p>
        </div>
      </div>
    </Container>
  );
}
