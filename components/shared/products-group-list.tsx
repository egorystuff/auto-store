"use client";

import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, listClassName, className }) => {
  return (
    <div className={className} id={title}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />

      <div className={cn("grid grid-cols-2 gap-[50px]", listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            yearOfManufacture={product.yearOfManufacture}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
