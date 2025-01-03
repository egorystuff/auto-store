import { prisma } from "@/prisma/prisma-client";
import { Container, ProductImage, Title } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { notFound } from "next/navigation";

export default async function ProductPage({ params: { id } }: Readonly<{ params: { id: string } }>) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className='flex flex-col my-10'>
      <div className='flex gap-5'>
        <ProductImage className='rounded-md' imageUrl={product.imageUrl} name={product.name} />

        <div className='w-1/2 bg-slate-50 rounded-md p-5'>
          <Title text={product.name} size='md' className='font-extrabold mb-1' />

          <p className='text-md text-gray-400'>Год выпуска: {product.yearOfManufacture}</p>

          <p className='text-md text-gray-400'>Цена: {product.price} $</p>

          <p className='text-md text-gray-400'>
            Кузов - седан. Салон - кожа, алькантара, комбинированный. Двигатели: дизель-бензин. Новые или б/у автомобили
            от официального дилера в Германии под заказ. Доставка в Беларусь на ПТО СВХ в течении 10-14 дней.
          </p>
        </div>
      </div>

      <div className=' w-full bottom-0 left-0 mt-8 flex justify-center'>
        <Button className='text-base rounded-md w-64'>Найти и рассчитать стоимость</Button>
      </div>
    </Container>
  );
}
