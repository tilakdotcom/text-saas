import { cn } from "@/lib/utils";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
}
export function CustomButtonWrapper({
  title,
  className,
  type = "button",
  ...rest
}: CustomButtonProps) {
  return (
    <button
      className={cn(
        "py-[5px] px-4 rounded-md border-main-600 border-[1px] shadow-2xs hover:shadow-sm transition duration-300 ease-in-out cursor-pointer flex items-center gap-1 text-sm sm:text-[15px]  hover:bg-main-100 font-normal",
        className
      )}
      type={type}
      {...rest}
    >
      {title}
    </button>
  );
}
