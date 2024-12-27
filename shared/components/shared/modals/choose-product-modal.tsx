"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "@prisma/client";
import { cn } from "@/shared/lib/utils";
import { ProductForm } from "../product-form";
import { Dialog } from "../../ui";
import { DialogContent, DialogTitle } from "../../ui/dialog";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[700px] bg-white overflow-hidden", className)}>
        <DialogTitle className='text-3xl flex justify-center items-center border-b bg-white shadow-lg shadow-black/10 pb-2 '>
          {product.name}
        </DialogTitle>
        <ProductForm product={product} onSubmit={() => router.back()} loading={false} />
      </DialogContent>
    </Dialog>
  );
};
