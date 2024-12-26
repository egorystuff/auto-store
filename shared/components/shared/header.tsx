import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import { Button } from "../ui";
import { MessageSquare, MessageSquarePlus } from "lucide-react";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
  search?: boolean;
}

export const Header: React.FC<Props> = ({ className, search = true }) => {
  return (
    <header className={cn("items-center py-2 h-20 sticky top-0 z-40 bg-white", className)}>
      <Container className='flex items-center justify-between'>
        {/* левая часть */}
        <Link href='/'>
          <div className='flex items-center gap-4 '>
            <Image src='/logo.png' alt='logo' width={80} height={80} />
            <div>
              <p className='text-2xl uppercase font-black'>Auto-Store</p>
              <p className='text-sm text-gray-400 leading-3'>Лучший магазин автомобилей</p>
            </div>
          </div>
        </Link>

        {search && (
          <div className='items-center w-[350px]'>
            <SearchInput />
          </div>
        )}

        <div>
          <div className='flex items-center gap-2 text-primary '>
            <Link href={""}>
              <FacebookIcon color='inherit' fontSize='large' />
            </Link>
            <Link href={""}>
              <InstagramIcon color='inherit' fontSize='large' />
            </Link>
            <Link href={""}>
              <TelegramIcon color='inherit' fontSize='large' />
            </Link>
          </div>
        </div>

        {/* правая часть */}
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
