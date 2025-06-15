"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { MotionDiv } from "./FramerMotion";
import Image from "next/image";

type LogoProps = {
  className?: string;
  href?: string;
  size?: sizeClasses;
  textClass?: textSizeClasses;
  title?: string;
};

export enum textSizeClasses {
  small = "text-sm",
  default = "text-xl",
  large = "text-3xl",
}

export enum sizeClasses {
  small = "h-6 sm:h-8",
  default = "h-13 sm:h-14",
  large = "h-16 sm:h-20",
}

export function Logo({
  className,
  href,
  size = sizeClasses.default,
  textClass = textSizeClasses.default,
  title = "DocWise",
}: LogoProps) {
  const logoContent = (
    <div className={cn("flex items-center gap-2 sm:gap-3 md:gap-4", className)}>
      <MotionDiv
        whileHover={{ scale: 1.05, rotate: [0, -2, 0, 2, 0] }}
        transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
        className={cn("relative", size)}
      >
        <Image
          alt={`${title} AI logo`}
          height={40}
          width={40}
          src={"/doc-icon.svg"}
          className="h-full w-auto"
          aria-label={`${title} AI logo`}
        />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 1 }}
        whileHover={{ scale: 1.003 }}
        className={cn("font-bold", textClass)}
      >
        <span className="bg-linear-to-r from-main-600 via-main-500 to-main-400 bg-clip-text text-transparent dark:from-main-400 dark:via-main-500 dark:to-main-300">
          {title}
        </span>
        <span className="ml-1 text-xs font-normal text-gray-600 dark:text-gray-300">
          AI
        </span>
      </MotionDiv>
    </div>
  );

  return href ? <Link href={href}>{logoContent}</Link> : logoContent;
}
