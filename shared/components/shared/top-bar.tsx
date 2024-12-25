import React from "react";
import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
  return (
    <div className={cn("items-center sticky top-20 z-30 border-b bg-white shadow-lg shadow-black/10", className)}>
      <Container className='flex items-center justify-between mb-4'>
        <Categories items={categories} />

        <SortPopup />
      </Container>
    </div>
  );
};
