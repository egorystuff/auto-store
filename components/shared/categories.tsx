"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";

interface Props {
  className?: string;
  items: Category[];
}

export const Categories: React.FC<Props> = ({ className, items }) => {
  const categoryActiveid = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn("inline-flex gap-1 bg-gray-100 p-1 rounded-xl", className)}>
      {items.map(({ name, id }) => (
        <a
          key={id}
          href={`#${name}`}
          className={cn(
            "flex items-center font-bold h-[32px] rounded-xl px-5",
            id === categoryActiveid && "bg-white shadow-md shadow-gray-200 text-primary",
          )}>
          <button className='text-sm'>{name}</button>
        </a>
      ))}
    </div>
  );
};
