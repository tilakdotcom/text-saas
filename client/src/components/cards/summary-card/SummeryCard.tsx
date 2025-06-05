import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { MotionDiv } from "@/components/common/FramerMotion";
import { itemVariants } from "@/common/constants/defaultValues";
import { SummaryType } from "@/common/types/summary";
import DeleteButton from "./DeleteButton";

type SummaryHeaderProps = {
  fileUrl?: string;
  title: string;
  createdAt: string;
};

const SummaryHeader = ({ title, createdAt }: SummaryHeaderProps) => {
  const date = new Date(createdAt);
  return (
    <div className="flex items-start gap-2 sm:gap-4">
      <FileText className="mt-1 h-6 w-6 text-rose-400 sm:h-8 sm:w-8" />
      <div className="min-w-0 flex-1">
        <h3 className="w-4/5 truncate text-base font-semibold text-gray-900 xl:text-lg">
          {title}
        </h3>
        <p className="text-sm text-gray-500">
          {formatDistanceToNow(date, { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium capitalize",
        status === "completed"
          ? "bg-green-100 text-green-800"
          : "bg-yellow-100 text-yellow-800"
      )}
    >
      {status}
    </span>
  );
};

export function SummaryCard(summary: SummaryType) {
  return (
    <MotionDiv
      viewport={{ once: true }}
      variants={itemVariants}
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <Card className="relative h-full">
        <div className="absolute top-2 right-2">
          <DeleteButton summaryId={summary.id} />
        </div>
        <Link href={`/summaries/${summary.id}`} className="block p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <SummaryHeader
              fileUrl={summary.original_file_url}
              title={summary.file_name}
              createdAt={summary.createdAt}
            />
            <p className="line-clamp-2 pl-2 text-sm text-gray-600 sm:text-base">
              {summary.summary_text}
            </p>
            <div className="mt-2 flex items-center justify-between sm:mt-4">
              <StatusBadge status={summary.status} />
            </div>
          </div>
        </Link>
      </Card>
    </MotionDiv>
  );
}
