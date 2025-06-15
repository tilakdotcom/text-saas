"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MotionDiv, MotionH1, MotionP } from "@/components/common/FramerMotion";
import { itemVariants } from "@/common/constants/defaultValues";
import EmptySummaryState from "@/components/cards/summary-card/EmptySummaryState";
import BgGradient from "@/components/common/BGGradient";
import { useAppDispatch, useTypeSelector } from "@/store/store";
import { getPdfSummaries } from "@/store/summary/summarySlice";
import { SummaryType } from "@/common/types/summary";
import { SummaryCard } from "@/components/cards/summary-card/SummeryCard";
import { PaginatedItems } from "@/components/app-ui/Pagination";

export default function Page() {
  const { summaries } = useTypeSelector((state) => state.summary);
  const [count, setCount] = useState<number>(1);
  const dispatch = useAppDispatch();

  const hasReachedLimit = false;

  useEffect(() => {
    const fetchSummaries = async () => {
      const res = await dispatch(getPdfSummaries());
      setCount(res.payload.totalPages);
    };
    fetchSummaries();
  }, [dispatch]);

  return (
    <main className="min-h-screen sm:px-8">
      <BgGradient className="from-emerald-200 via-teal-200 to-cyan-200" />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto flex flex-col gap-4 "
      >
        <div className="px-2 py-12 sm:py-24">
          <div className="mb-8 flex justify-between gap-4">
            <div className="flex flex-col gap-2 ">
              <MotionH1
                variants={itemVariants}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                className="bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-transparent"
              >
                Your Summaries
              </MotionH1>
              <MotionP
                variants={itemVariants}
                initial={"hidden"}
                animate={"visible"}
                viewport={{ once: true }}
                className="text-gray-600 text-sm sm:text-sm md:text-base"
              >
                Transform your PDFs into concise, actionable insights
              </MotionP>
            </div>
            {!hasReachedLimit && (
              <MotionDiv
                variants={itemVariants}
                initial={"hidden"}
                whileInView={"visible"}
                whileHover={{ scale: 0.97 }}
                viewport={{ once: true }}
                className="self-start my-auto"
              >
                <Button
                  variant={"link"}
                  className="group bg-linear-to-r rounded-xl from-main-500 to-main-700 transition-all duration-200 hover:from-main-600 hover:to-main-800 hover:no-underline py-1.5 px-3 sm:text-sm"
                >
                  <Link href="/upload" className="flex items-center text-white">
                    <Plus className="mr-1 h-5 w-5" /> New Summary
                  </Link>
                </Button>
              </MotionDiv>
            )}
          </div>

          {hasReachedLimit && (
            <MotionDiv
              variants={itemVariants}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="rounded-lg border border-main-200 bg-main-50 p-4 text-main-800">
                <p className="flex gap-1 text-sm">
                  You&apos;ve reached the limit of 5 uploads on the Basic plan.
                  Please delete some summaries to make room for new ones or{" "}
                  <Link
                    className="flex items-center justify-between"
                    href="/#pricing"
                  >
                    {" "}
                    <span className="font-bold underline">
                      {" "}
                      upgrade to Pro{" "}
                    </span>
                    <ArrowRight size={18} /> for more uploads.
                  </Link>
                </p>
              </div>
            </MotionDiv>
          )}

          {summaries && summaries.length === 0 ? (
            <EmptySummaryState />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
              {summaries &&
                summaries.map((summary: SummaryType, i: number) => (
                  <SummaryCard {...summary} key={i} />
                ))}
            </div>
          )}
          {count > 1 && (
            <div className=" w-full flex justify-center">
              <PaginatedItems pageCount={count} />
            </div>
          )}
        </div>
      </MotionDiv>
    </main>
  );
}
