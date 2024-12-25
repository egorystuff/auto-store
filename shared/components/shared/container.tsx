import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn("mx-auto max-w-[1280px] p-2", className)}>{children}</div>;
};

// import { cn } from "@/lib/utils";
// import React from "react";

// interface Props {
//   className?: string;
// }

// export const SortPopup: React.FC<Props> = ({ className }) => {
//   return <div className={cn("", className)}></div>;
// };
