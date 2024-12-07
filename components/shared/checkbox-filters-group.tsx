"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface Props {
  title: string;
  items: FilterChecboxProps[];
  loading?: boolean;
  defaultItems: FilterChecboxProps[];
  limit?: number;
  name?: string;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  devaultValues?: string[];
  selectedIds?: Set<string>;
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  loading,
  defaultItems,
  limit = 5,
  name,
  searchInputPlaceholder = "Поиск...",
  onClickCheckbox,
  selectedIds,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [parent] = useAutoAnimate(/* optional config */);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />)}

        <Skeleton className='w-28 h-6 mb-4 rounded-[8px]' />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    : (defaultItems || items).slice(0, limit);

  return (
    <div ref={parent} className={cn("", className)}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-[300px] pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            name={name}
            endAdornment={item.endAdornment}
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? "- Меньше" : "+ Больше"}
          </button>
        </div>
      )}
    </div>
  );
};
