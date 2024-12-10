"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useCarBrands, useFilters, useQueryFilters } from "@/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { carBrands, loading } = useCarBrands();
  const filters = useFilters();
  useQueryFilters(filters);

  const items = carBrands.map((item) => ({ text: item.name, value: String(item.id) }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={cn("", className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <CheckboxFiltersGroup
        className='mt-5 border-y border-y-neutral-400 py-7'
        title='Локация авто'
        name='carLocation'
        selected={filters.carLocation}
        onClickCheckbox={filters.setCarLocation}
        limit={4}
        items={[
          { text: "Авто из Европы", value: "1" },
          { text: "Авто из Америки", value: "2" },
          { text: "Авто из России", value: "3" },
          { text: "Авто из Китая", value: "4" },
        ]}
        loading={loading}
      />

      <div className='mt-5 border-b border-b-neutral-400 pb-7'>
        <p className='font-bold mb-3'>Цена от 0 до 90000 $</p>
        <div className='flex items-center gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={90000}
            step={100}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='90000'
            min={0}
            max={90000}
            step={100}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={90000}
          step={100}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 90000]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        className='mt-5'
        title='Марка автомобиля'
        limit={5}
        name='brand'
        defaultItems={items.slice(0, 5)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setCarBrands}
        selected={filters.selectedCarBrands}
      />
    </div>
  );
};
