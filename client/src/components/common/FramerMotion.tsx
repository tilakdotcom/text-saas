import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface MotionDivProps extends MotionProps {
  className?: string;
  children?: React.ReactNode;
}

export default function MotionDiv({
  children,
  className,
  ...rest
}: MotionDivProps) {
  return (
    <motion.div className={cn("", className)} {...rest}>
      {children}
    </motion.div>
  );
}
