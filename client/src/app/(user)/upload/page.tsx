"use client";

import UploadHeader from "@/components/pages/upload/UploadHeader";
import UploadForm from "@/components/pages/upload/UploadForm";
import { containerVariants } from "@/common/constants/defaultValues";
import { MotionDiv } from "@/components/common/FramerMotion";
import BgGradient from "@/components/common/BGGradient";

export const maxDuration = 60;

export default function Page() {
  // const userId = user?.id;

  // const { hasReachedLimit } = await hasReachedUploadLimit(userId);

  // if (hasReachedLimit) {
  //   redirect("/dashboard");
  // }

  return (
    <section className="min-h-screen">
      <BgGradient />
      <MotionDiv
        variants={containerVariants}
        initial={"hidden"}
        animate={"visible"}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader />
          <UploadForm />
        </div>
      </MotionDiv>
    </section>
  );
}
