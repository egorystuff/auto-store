import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const cats = ["Авто из Европы", "Авто из Америки", "Авто из России", "Авто из Китая"];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-xl", className)}>
      {cats.map((cat, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-xl px-5",
            index === activeIndex && "bg-white shadow-md shadow-gray-200 text-primary",
          )}>
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
