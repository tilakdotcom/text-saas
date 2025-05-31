import { itemVariants } from "@/common/constants/defaultValues";
import BgGradient from "@/components/common/BGGradient";
import { MotionDiv } from "@/components/common/FramerMotion";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function HeaderSkeleton() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>
          <Skeleton className="h-10 w-48" />
        </div>

        <div>
          <Skeleton className="h-10 w-96" />
        </div>
      </div>
    </div>
  );
}

function SummaryCardSkeleton() {
  return (
    <MotionDiv
      variants={itemVariants}
      initial={"hidden"}
      animate={"visible"}
      viewport={{ once: true }}
      className="bg-card text-card-foreground rounded-lg border shadow-sm"
    >
      <Skeleton className="h-48 w-full rounded-lg" />
    </MotionDiv>
  );
}

export default function LoadingSummaries() {
  return (
    <div className="relative min-h-screen">
      <BgGradient className="from-emerald-200 via-teal-200 to-cyan-200" />
      <section className="container mx-auto flex flex-col gap-4 px-10 py-24">
        <HeaderSkeleton />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <SummaryCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
