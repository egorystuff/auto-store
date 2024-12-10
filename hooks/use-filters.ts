import React from "react";
import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";

interface PriceRange {
  priceFrom?: number;
  priceTo?: number;
}

interface FiltersParams extends PriceRange {
  carLocation: string;
  carBrands: string;
}

export interface FiltersState {
  selectedCarBrands: Set<string>;
  prices: PriceRange;
  carLocation: Set<string>;
}

interface ReturnProps extends FiltersState {
  setCarLocation: (id: string) => void;
  setCarBrands: (id: string) => void;
  setPrices: (name: keyof PriceRange, value: number) => void;
}

/**
 * Custom hook to manage filter state and URL query parameters for a car listing page.
 *
 * @returns An object with functions and states to manage filters including selected car brands, price range, and car location.
 */
export const useFilters = (): ReturnProps => {
  // Get search parameters from the URL
  const searchParams = useSearchParams() as unknown as Map<keyof FiltersParams, string>;

  // Manage selected car brands with a toggle function
  const [selectedCarBrands, { toggle: toggleCarBrands }] = useSet(
    new Set<string>(searchParams.get("carBrands")?.split(",")),
  );

  // Manage price range state with initial values from URL parameters
  const [prices, setPriceRange] = React.useState<PriceRange>({
    priceFrom: Number(searchParams.get("priceFrom")) || 0,
    priceTo: Number(searchParams.get("priceTo")) || 90000,
  });

  const updatePrice = (name: keyof PriceRange, value: number) => {
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  // Manage car location selection with a toggle function
  const [carLocation, { toggle: toggleCarLocation }] = useSet(
    new Set<string>(searchParams.get("carLocation") ? searchParams.get("carLocation")?.split(",") : []),
  );

  // Return the states and toggle functions for managing filters
  return {
    selectedCarBrands,
    prices,
    carLocation,
    setCarLocation: toggleCarLocation,
    setCarBrands: toggleCarBrands,
    setPrices: updatePrice,
  };
};
