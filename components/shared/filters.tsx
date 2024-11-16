import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text='Фильтры' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-3'>
        <FilterCheckbox text='Фильтр 1' value='1' />
        <FilterCheckbox text='Фильтр 2' value='2' />
      </div>
    </div>
  );
};
