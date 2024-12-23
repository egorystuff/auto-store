"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProductForm } from "../product-form";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden", className)}>
        <ProductForm product={product} onSubmit={() => router.back()} loading={false} />
      </DialogContent>
    </Dialog>
  );
};
