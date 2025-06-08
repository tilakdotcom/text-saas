"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../common/FramerMotion";
import { Logo, sizeClasses } from "../common/Logo";

export  function Loading({ className }: { className?: string }) {
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

export  function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <MotionDiv
      viewport={{ once: true }}
      className="bg-background fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MotionDiv
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo size={sizeClasses.large} className="mb-6" />
        <div className="relative h-1 w-48 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <MotionDiv
            viewport={{ once: true }}
            className="absolute inset-y-0 left-0 bg-linear-to-r from-main-500 to-main-700"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}