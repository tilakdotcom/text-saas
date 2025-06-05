"use client";

import { Loading } from "@/components/app-ui/Loading";
import SourceInfo from "@/components/cards/summary-card/SourceInfo";
import SummaryHeader from "@/components/cards/summary-card/SummaryHeader";
import SummaryViewCard from "@/components/cards/summary-card/SummaryViewCard";
import BgGradient from "@/components/common/BGGradient";
import { MotionDiv } from "@/components/common/FramerMotion";
import { useAppDispatch, useTypeSelector } from "@/store/store";
import { getPdfSummaryById } from "@/store/summary/summarySlice";
import { FileText } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function SummaryPage() {
  const { current, isLoading } = useTypeSelector((state) => state.summary);
  const dispatch = useAppDispatch();
  const params = useParams();
  
  const id =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
      ? params.id[0]
      : undefined;

  useEffect(() => {
    if (!id) return;
    dispatch(getPdfSummaryById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading className=" border-e-rose-700"  />;
  }

  if (!current?.id) return null;

  const word_count = current.summary_text.length;
  const readingTime = Math.ceil(word_count / 200);

  return (
    <div className="relative isolate mb-16 min-h-screen bg-gradient-to-b from-rose-100/60 to-white">
      <BgGradient className="from-rose-400 via-rose-300 to-orange-200" />
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
          <MotionDiv
            className="flex flex-col"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SummaryHeader
              title={current.title}
              createdAt={current.createdAt}
              readingTime={String(readingTime)}
            />
          </MotionDiv>

          <SourceInfo
            fileName={current.file_name}
            title={current.title}
            summaryText={current.summary_text}
            createdAt={current.createdAt}
            originalFileUrl={current.original_file_url}
          />
        </div>

        <MotionDiv className="relative my-4 sm:my-8 lg:my-16">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-rose-100/30 bg-white/80 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-50/50 via-orange-50/30 to-transparent opacity-50 sm:rounded-3xl" />

            <div className="text-muted-foreground sm:py1.5 absolute top-2 right-2 flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-1 text-xs shadow-xs sm:top-4 sm:right-4 sm:gap-2 sm:px-3 sm:text-sm">
              <FileText className="h-3 w-3 text-rose-400 sm:h-4 sm:w-4" />
              {word_count.toLocaleString()} words
            </div>

            <div className="relative mt-8 flex items-center justify-center px-2 sm:mt-6 sm:px-14 md:px-20 lg:px-6">
              <SummaryViewCard summary={current.summary_text} />
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
