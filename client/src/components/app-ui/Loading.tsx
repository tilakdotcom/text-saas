"use client";
import React from "react";
import MotionDiv from "../common/FramerMotion";
import { cn } from "@/lib/utils";

export default function Loading({ className }: { className?: string }) {
  return (
    <>
      <div className="flex justify-center items-center p-1">
        <MotionDiv
          className={cn(
            "size-12 rounded-[50%] border-solid border-4 border-t-blue-500 will-change-transform",
            className
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </>
  );
}
