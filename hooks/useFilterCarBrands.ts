import React from "react";
import { Api } from "@/services/api-client";
import { CarBrand } from "@prisma/client";

type CarBrandFilterProps = Pick<CarBrand, "id" | "name">;

interface ReturnProps {
  carBrands: CarBrandFilterProps[];
}

export const useFilterCarBrands = (): ReturnProps => {
  const [carBrands, setCarBrands] = React.useState<ReturnProps["carBrands"]>([]);

  React.useEffect(() => {
    async function fetchCarBrands() {
      try {
        const carBrands = await Api.carBrands.getAll();
        setCarBrands(carBrands.map(({ id, name }) => ({ id, name })));
      } catch (error) {
        console.error(error);
      }
    }

    fetchCarBrands();
  }, []);

  return { carBrands };
};
