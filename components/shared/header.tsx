import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "../ui";
import { MessageSquare, MessageSquarePlus } from "lucide-react";

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
          <Button className='group relative' size='sm'>
            <MessageSquare
              size={16}
              className='flex items-center gap-1 mr-2 transition duration-300 group-hover:opacity-0  group-hover:-translate-x-2'
            />
            <MessageSquarePlus
              size={16}
              className='absolute gap-1 left-3 transition duration-300 opacity-0 group-hover:opacity-100'
            />
            Обратная связь
          </Button>
        </div>
      </Container>
    </header>
  );
};
