import React from "react";
import { Api } from "@/shared/services/api-client";
import { CarBrand } from "@prisma/client";

export const useCarBrands = () => {
  const [carBrands, setCarBrands] = React.useState<CarBrand[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function fetchCarBrands() {
      try {
        setLoading(true);
        const carBrands = await Api.carBrands.getAll();
        setCarBrands(carBrands);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCarBrands();
  }, []);

  return { carBrands, loading };
};
