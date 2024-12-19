import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Button } from "../ui";
import Image from "next/image";

interface Props {
  id: number;
  name: string;
  yearOfManufacture: number;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, yearOfManufacture, price, imageUrl, className }) => {
  return (
    <div className={cn("bg-secondary p-4 rounded-sm", className)}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center'>
          <Image width={1280} height={720} src={imageUrl} alt={name} />
        </div>

        <div className='flex justify-between items-center'>
          <div>
            <Title text={name} size='sm' className='mt-3 font-bold' />
            <p className='text-md text-gray-400'>{yearOfManufacture}</p>
          </div>

          <span className='text-[20px]'>
            от <b>{price} $</b>
          </span>
        </div>

        <div className='flex justify-center mt-2'>
          <Button className='text-base font-bold'>Найти и рассчитать стоимость</Button>
        </div>
      </Link>
    </div>
  );
};
