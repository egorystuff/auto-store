import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("mt-4 sticky top-0 z-50 border-b bg-white shadow-lg shadow-black/10", className)}>
      <Container className='flex items-center justify-between'>
        <Categories />

        <SortPopup />
      </Container>
    </div>
  );
};
