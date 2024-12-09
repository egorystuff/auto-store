"use client";

import React from "react";
import qs from "qs";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const items = carBrands.map((item) => ({ text: item.name, value: String(item.id) }));

  const updatePrice = (name: keyof PriceRange, value: number) => {
    setPriceRange({ ...prices, [name]: value });
  };

  React.useEffect(() => {
    const filters = {
      ...prices,
      carLocation: Array.from(carLocation),
      carBrands: Array.from(selectedCarBrands),
    };

    const query = qs.stringify(filters, { arrayFormat: "comma" });

    router.push(`?${query}`, { scroll: false });
  }, [prices, carLocation, selectedCarBrands, router]);

  return (
    <div className={cn("", className)}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      <CheckboxFiltersGroup
        className='mt-5 border-y border-y-neutral-400 py-7'
        title='Локация авто'
        name='carLocation'
        selected={carLocation}
        onClickCheckbox={toggleCarLocation}
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
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='90000'
            min={0}
            max={90000}
            step={100}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={90000}
          step={100}
          value={[prices.priceFrom || 0, prices.priceTo || 90000]}
          onValueChange={(values) => setPriceRange({ priceFrom: values[0], priceTo: values[1] })}
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
        onClickCheckbox={onAddId}
        selected={selectedCarBrands}
      />
    </div>
  );
};
