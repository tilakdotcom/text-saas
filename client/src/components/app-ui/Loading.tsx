"use client";
import React from "react";
import MotionDiv from "../common/FramerMotion";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center p-10">
        <MotionDiv
          className=" w-12 h-12 rounded-[50%] border-solid border-4 border-t-blue-500 will-change-transform"
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
