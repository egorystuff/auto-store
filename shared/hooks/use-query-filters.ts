import React from "react";
import qs from "qs";
import { useRouter } from "next/navigation";
import { FiltersState } from "./use-filters";

export const useQueryFilters = (filters: FiltersState) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      carLocation: Array.from(filters.carLocation),
      carBrands: Array.from(filters.selectedCarBrands),
    };

    const query = qs.stringify(params, { arrayFormat: "comma" });

    router.push(`?${query}`, { scroll: false });
  }, [filters.carLocation, filters.prices, filters.selectedCarBrands, router]);
};
