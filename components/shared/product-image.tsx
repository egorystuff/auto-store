import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
}

export const ProductImage: React.FC<Props> = ({ className, imageUrl, name }) => {
  return (
    <div className={cn("flex items-center justify-center flex-1 relative w-full", className)}>
      <img src={imageUrl} alt={name} className={cn("relative transition-all z-10 duration-300 w-[600px]", className)} />
    </div>
  );
};
