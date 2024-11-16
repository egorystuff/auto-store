import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("top-0 'border border-b bg-white py-4 ", className)}>
      <Container className='flex items-center justify-between mt-5'>
        <Categories />

        <SortPopup />
      </Container>
    </div>
  );
};
