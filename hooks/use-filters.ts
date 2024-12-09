import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useFilterCarBrands } from "./use-filter-car-brands";
import { useSet } from "react-use";

interface PriceRange {
  priceFrom?: number;
  priceTo?: number;
}

interface FiltersParams extends PriceRange {
  carLocation: string;
  carBrands: string;
}

export const useFilters = () => {
  const router = useRouter();

  const searchParams = useSearchParams() as unknown as Map<keyof FiltersParams, string>;

  const { carBrands, loading, selectedCarBrands, onAddId } = useFilterCarBrands(
    searchParams.get("carBrands")?.split(","),
  );

  const [prices, setPriceRange] = React.useState<PriceRange>({
    priceFrom: Number(searchParams.get("priceFrom")) || 0,
    priceTo: Number(searchParams.get("priceTo")) || 90000,
  });

  const [carLocation, { toggle: toggleCarLocation }] = useSet(
    new Set<string>(searchParams.get("carLocation") ? searchParams.get("carLocation")?.split(",") : []),
  );
};
