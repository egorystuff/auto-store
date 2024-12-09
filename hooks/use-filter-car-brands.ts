import { useSet } from "react-use";

interface ReturnProps {
  selectedCarBrands: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterCarBrands = (values: string[] = []): ReturnProps => {
  const [selectedIds, { toggle }] = useSet(new Set<string>(values));

  return { selectedCarBrands: selectedIds, onAddId: toggle };
};
