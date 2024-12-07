"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilterCarBrands } from "@/hooks/useFilterCarBrands";

interface Props {
  className?: string;
}

interface PriceRange {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { carBrands, loading, selectedIds, onAddId } = useFilterCarBrands();
  const [{ priceFrom, priceTo }, setPriceRange] = React.useState<PriceRange>({ priceFrom: 0, priceTo: 90000 });

  const items = carBrands.map((item) => ({ text: item.name, value: String(item.id) }));

  return (
    <div className={cn("", className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-3'>
        <FilterCheckbox name='1' text='Фильтр 1' value='1' />
        <FilterCheckbox name='2' text='Фильтр 2' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py- pb-7'>
        <p className='font-bold mb-3 mt-5'>Цена от 0 до 100 000 $</p>
        <div className='flex items-center gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={90000} value={String(priceFrom)} />
          <Input type='number' placeholder='90000' min={0} max={90000} value={String(priceTo)} />
        </div>

        <RangeSlider min={0} max={90000} step={100} formatLabel={(value) => `${value}`} />
      </div>

      <CheckboxFiltersGroup
        className='mt-5'
        title='Марка автомобиля'
        limit={5}
        name='brand'
        defaultItems={items.slice(0, 5)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
