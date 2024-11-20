"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Авто из Европы" },
  { id: 2, name: "Авто из Америки" },
  { id: 3, name: "Авто из России" },
  { id: 4, name: "Авто из Китая" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveid = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-xl", className)}>
      {cats.map(({ name, id }) => (
        <a
          key={id}
          href={`#${name}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-xl px-5",
            id === categoryActiveid && "bg-white shadow-md shadow-gray-200 text-primary",
          )}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
