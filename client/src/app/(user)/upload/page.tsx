"use client";

import { useState } from "react";
import UploadHeader from "@/components/pages/upload/UploadHeader";
import UploadForm from "@/components/pages/upload/UploadForm";
import { containerVariants } from "@/common/constants/defaultValues";
import { MotionDiv } from "@/components/common/FramerMotion";
import BgGradient from "@/components/common/BGGradient";
import { useTypeSelector } from "@/store/store";

export const maxDuration = 60;

export default function Page() {
  const [uploadMode, setUploadMode] = useState<"text" | "image">("text");
  const { isAuthenticated, isCheckingAuth } = useTypeSelector(
    (state) => state.auth
  );

  if (!isCheckingAuth && !isAuthenticated)
    return {
      redirect: {
        destination: "/login?callbackUrl=/dashboard",
        permanent: false,
      },
    };

  return (
    <section className="">
      <BgGradient />
      <MotionDiv
        variants={containerVariants}
        initial={"hidden"}
        animate={"visible"}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        {/* Mode Switcher */}
        <div className="mb-10 flex justify-center gap-4">
          <button
            onClick={() => setUploadMode("text")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition ${
              uploadMode === "text"
                ? "bg-main-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Upload Text PDF
          </button>
          <button
            onClick={() => setUploadMode("image")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition ${
              uploadMode === "image"
                ? "bg-main-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Upload Image PDF
          </button>
        </div>

        {/* Upload Content */}
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader mode={uploadMode} />
          <UploadForm mode={uploadMode} />
        </div>
      </MotionDiv>
    </section>
  );
}
