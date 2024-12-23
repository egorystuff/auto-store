"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CircleX, Search } from "lucide-react";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);

  const [parent] = useAutoAnimate(/* optional config */);

  useDebounce(
    async () => {
      try {
        const responce = await Api.products.search(searchQuery);
        setProducts(responce);
      } catch (error) {
        console.error(error);
      }
    },
    200,
    [searchQuery],
  );

  return (
    <>
      {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-50' />}
      <div className={cn("flex rounded-xl flex-1 justify-between relative h-11 ", focused && "z-50", className)}>
        <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />

        <input
          className='rounded-xl outline-none w-full bg-gray-100 pl-11'
          type='text'
          placeholder='Поиск авто...'
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-10 shadow-md transition-[width] duration-150 invisible opacity-0 z-50",
            focused && "visible opacity-100 top-12 w-[650px] translate-x-[-50%] left-1/2",
          )}>
          {!products.length && (
            <p className='grid grid-cols-4 items-center border-b last:border-0 gap-5 px-3 py-2'>Ничего не найдено</p>
          )}

          <div className='flex flex-col gap-2' ref={parent}>
            {products.map((product) => (
              <Link
                key={product.id}
                className=' border-b last:border-0 px-3 py-2 hover:bg-primary/10 cursor-pointer'
                href={`/product/${product.id}`}>
                <figure className='flex items-center '>
                  <img className='rounded-xl' src={product.imageUrl} width={96} alt={product.name} />
                  <figcaption className=' flex w-full gap-4 ml-4 '>
                    <span className='w-[230px] text-xl'>{product.name}</span>
                    <span className='w-[100px] text-gray-400'>Год: {product.yearOfManufacture}</span>
                    <span className='w-[170px] text-gray-400'>Цена от: {product.price} $</span>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </div>

        {searchQuery.length > 0 && (
          <div className='absolute top-1/2 translate-y-[-50%] right-3 h-5 text-gray-400'>
            <CircleX className='w-6 h-6 cursor-pointer' onClick={() => setSearchQuery("")} />
          </div>
        )}
      </div>
    </>
  );
};
