import { Category, Product } from "@prisma/client";
import { axiosInstance } from "./instance";

interface ReturnProps extends Category {
  products: Product[];
}
export const getAll = async (): Promise<ReturnProps[]> => {
  const { data } = await axiosInstance.get<ReturnProps[]>("/categories");

  return data;
};
