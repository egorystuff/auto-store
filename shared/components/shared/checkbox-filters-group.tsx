"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CircleX } from "lucide-react";

interface Props {
  title: string;
  items: FilterChecboxProps[];
  loading?: boolean;
  defaultItems?: FilterChecboxProps[];
  limit?: number;
  name?: string;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  devaultValues?: string[];
  selected?: Set<string>;
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
  selected,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [parent] = useAutoAnimate(/* optional config */);

  const onChangeSearchInput = (e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => {
    if ("target" in e && "value" in e.target) {
      setSearchValue(e.target.value);
    }
  };

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />)}

        {limit > 5 && <Skeleton className='w-28 h-6 mb-4 rounded-[8px]' />}
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    : (defaultItems || items).slice(0, limit);

  const onKeyDownEscape = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchValue("");
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  return (
    <div ref={parent} className={cn("", className)}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && (
        <div className='flex mb-5'>
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
            onKeyDown={onKeyDownEscape}
            value={searchValue}
          />

          {searchValue.length > 0 && (
            <div className='absolute top-[42px] right-3 h-5 text-gray-400'>
              <CircleX className='w-6 h-6 cursor-pointer' onClick={() => setSearchValue("")} />
            </div>
          )}
        </div>
      )}

      <div className='flex flex-col gap-4 max-h-[300px] pr-2 overflow-auto overflow-x-hidden ' ref={parent}>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            name={name}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? "- Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
