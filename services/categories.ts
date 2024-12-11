import { Category, Product } from "@prisma/client";
import { axiosInstance } from "./instance";

interface ReturnProps extends Category {
  products: Product[];
}
export const getAll = async (): Promise<ReturnProps[]> => {
  const { data } = await axiosInstance.get<ReturnProps[]>("/categories");

  return data;
};

// export const getAll = async (): Promise<ReturnProps[]> => {
//   try {
//     const response = await axiosInstance.get("/categories");
//     const categories: Category[] = response.data; // access the data property
//     const transformedCategories = await Promise.all(
//       categories.map(async (category: Category) => {
//         const products = (await axiosInstance.get(`/products?categoryId=${category.id}`)).data;
//         return {
//           ...category,
//           products,
//         };
//       }),
//     );
//     return transformedCategories;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
