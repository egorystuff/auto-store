import React from "react";
import { cn } from "@/shared/lib/utils";
import { Button } from "../ui";
import { Product } from "@prisma/client";
import { ProductImage } from "./product-image";
import { Container } from "./container";

interface Props {
  product: Product;
  className?: string;
  onSubmit: () => void;
  loading: boolean;
}

export const ProductForm: React.FC<Props> = ({ className, product, onSubmit, loading }) => {
  return (
    <Container className={cn(className, "")}>
      <div className='flex gap-5 border-b bg-white shadow-lg shadow-black/10 pb-2'>
        <ProductImage className='rounded-md' imageUrl={product.imageUrl} name={product.name} />

        <div className='w-1/2 bg-slate-50 rounded-md p-5'>
          <p className='text-md text-gray-600'>Год выпуска: {product.yearOfManufacture}</p>

          <p className='text-md text-gray-600'>Цена: {product.price} $</p>

          <p className='text-md text-gray-600'>
            Кузов - седан. Салон - кожа, алькантара, комбинированный. Двигатели: дизель-бензин. Новые или б/у автомобили
            от официального дилера в Германии под заказ. Доставка в Беларусь на ПТО СВХ в течении 10-14 дней.
          </p>
        </div>
      </div>

      <div className='absolute w-full bottom-0 left-0 mb-8 flex justify-center'>
        <Button className='text-base rounded-md w-64' loading={loading} onClick={onSubmit}>
          Найти и рассчитать стоимость
        </Button>
      </div>
    </Container>
  );
};
