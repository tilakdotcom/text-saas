"use client"
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface MotionPropsExtended extends MotionProps {
  className?: string;
  children?: React.ReactNode;
}

export  function MotionDiv({
  children,
  className,
  ...rest
}: MotionPropsExtended) {
  return (
    <motion.div className={cn("", className)} {...rest}>
      {children}
    </motion.div>
  );
}

export const MotionSection = motion.section;

export const MotionH1 = motion.h1;

export const MotionH2 = motion.h2;

export const MotionH3 = motion.h3;

export const MotionP = motion.p;

export const MotionSpan = motion.span;
