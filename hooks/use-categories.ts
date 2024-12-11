import React from "react";
import { Api } from "@/services/api-client";
import { Category, Product } from "@prisma/client";
import { prisma } from "@/prisma/prisma-client";

interface ReturnProps extends Category {
  products: Product[];
}

export async function useCategories(): Promise<{ categories: ReturnProps[] }> {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  return { categories };

  // const [categories, setCategories] = React.useState<ReturnProps[]>([]);
  // const [loading, setLoading] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   async function fetchCategories() {
  //     try {
  //       setLoading(true);
  //       const categories = await Api.categories.getAll();
  //       setCategories(categories.map((category) => ({ ...category, products: [] })));
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchCategories();
  // }, []);

  // return { categories, loading };
}
