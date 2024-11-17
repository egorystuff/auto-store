import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

const array = [
  { text: "Audi", value: "1" },
  { text: "BMW", value: "2" },
  { text: "Mercedes", value: "3" },
  { text: "Toyota", value: "4" },
  { text: "Honda", value: "5" },
  { text: "Nissan", value: "6" },
  { text: "Volkswagen", value: "7" },
  { text: "Kia", value: "8" },
  { text: "Hyundai", value: "9" },
];

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-3'>
        <FilterCheckbox text='Фильтр 1' value='1' />
        <FilterCheckbox text='Фильтр 2' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py- pb-7'>
        <p className='font-bold mb-3 mt-5'>Цена от 0 до 100 000 $</p>
        <div className='flex items-center gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={90000} defaultValue={0} />
          <Input type='number' placeholder='100 000' min={0} max={90000} defaultValue={90000} />
        </div>

        <RangeSlider min={0} max={90000} step={100} formatLabel={(value) => `${value}`} />
      </div>

      <CheckboxFiltersGroup className='mt-5' title='Марка автомобиля' limit={5} defaultItems={array} items={array} />
    </div>
  );
};
