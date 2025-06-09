"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { MotionDiv } from "./FramerMotion";

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
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          role="img"
          aria-label={`${title} AI logo`}
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            className="fill-white dark:fill-gray-800"
          />
          <circle
            cx="60"
            cy="60"
            r="48"
            className="stroke-main-500 dark:stroke-main-400"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
          <g>
            <rect
              x="30"
              y="40"
              width="50"
              height="60"
              rx="3"
              className="fill-gray-100 stroke-gray-300 dark:fill-gray-700 dark:stroke-gray-600"
              strokeWidth="1.5"
              transform="rotate(-5 30 40)"
            />
            <rect
              x="35"
              y="35"
              width="50"
              height="60"
              rx="3"
              className="fill-gray-50 stroke-gray-300 dark:fill-gray-700 dark:stroke-gray-600"
              strokeWidth="1.5"
              transform="rotate(-2 35 35)"
            />
            <rect
              x="40"
              y="30"
              width="50"
              height="60"
              rx="3"
              className="fill-white stroke-main-500 dark:fill-gray-600 dark:stroke-main-400"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="45"
              x2="80"
              y2="45"
              className="stroke-main-400 dark:stroke-main-300"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="50"
              y1="55"
              x2="80"
              y2="55"
              className="stroke-main-400 dark:stroke-main-300"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="50"
              y1="65"
              x2="70"
              y2="65"
              className="stroke-main-400 dark:stroke-main-300"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <g className="translate-x-[5px] translate-y-[5px]">
            <circle
              cx="75"
              cy="75"
              r="18"
              className="fill-main-100 stroke-main-500 dark:fill-main-900/70 dark:stroke-main-400"
              strokeWidth="2"
            />
            <path
              d="M65,75 C65,70 70,65 75,65 C80,65 85,70 85,75 C85,80 80,85 75,85 C70,85 65,80 65,75Z"
              className="fill-none stroke-main-500 dark:stroke-main-400"
              strokeWidth="1.5"
            />
            <path
              d="M75,65 L75,85 M68,70 L82,80 M82,70 L68,80"
              className="stroke-main-500 dark:stroke-main-400"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx="75"
              cy="75"
              r="22"
              className="stroke-main-500/30 dark:stroke-main-400/30"
              strokeWidth="1.5"
            />
            <circle
              cx="75"
              cy="75"
              r="26"
              className="stroke-main-500/20 dark:stroke-main-400/20"
              strokeWidth="1"
            />
          </g>
          <path
            d="M90,30 L93,33 L90,36 L87,33 L90,30Z"
            className="fill-main-500 dark:fill-main-400"
          />
          <path
            d="M40,85 L42,87 L40,89 L38,87 L40,85Z"
            className="fill-main-500 dark:fill-main-400"
          />
          <path
            d="M60,20 L62,22 L60,24 L58,22 L60,20Z"
            className="fill-main-500 dark:fill-main-400"
          />
        </svg>
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
