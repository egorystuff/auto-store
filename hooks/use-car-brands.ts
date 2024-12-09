import React from "react";
import { Api } from "@/services/api-client";
import { CarBrand } from "@prisma/client";

type CarBrandFilterProps = Pick<CarBrand, "id" | "name">;

interface ReturnProps {
  carBrands: CarBrandFilterProps[];
  loading: boolean;
  selectedCarBrands: Set<string>;
  onAddId: (id: string) => void;
}
export const useCarBrands = () => {
  const [carBrands, setCarBrands] = React.useState<ReturnProps[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchCarBrands() {
      try {
        setLoading(true);
        const carBrands = await Api.carBrands.getAll();
        setCarBrands(carBrands.map(({ id, name }) => ({ id, name })));
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
