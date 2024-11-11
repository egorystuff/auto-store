import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className='flex items-center justify-between py-8 '>
        {/* левая часть */}
        <div className='flex items-center gap-4'>
          <Image src='/logo.png' alt='logo' width={80} height={80} />
          <div>
            <h1 className='text-2xl uppercase font-black'>Auto-Store</h1>
            <p className='text-sm text-gray-400 leading-3'>Лучший магазин автомобилей</p>
          </div>
        </div>

        <div>
          <Button variant='outline' size='sm'>
            Обратная связь
          </Button>
        </div>
      </Container>
    </header>
  );
};
