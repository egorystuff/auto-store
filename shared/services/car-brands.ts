import { CarBrand } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getAll = async (): Promise<CarBrand[]> => {
  const { data } = await axiosInstance.get<CarBrand[]>("/car-brands");

  return data;
};
