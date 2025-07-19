import { prisma } from "@/prisma/prisma-client";
import { ChooseProductModal } from "@/shared/components/shared";
import { notFound } from "next/navigation";

export default async function ProductModalPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
