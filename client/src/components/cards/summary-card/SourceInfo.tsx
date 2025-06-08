import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import DownloadSummaryButton from "./DownloadSummaryButton";

type SourceInfoProps = {
  fileName: string;
  originalFileUrl: string;
  title: string;
  summaryText: string;
  createdAt: string;
};

export default function SourceInfo({
  fileName,
  originalFileUrl,
  title,
  summaryText,
  createdAt,
}: SourceInfoProps) {
  return (
    <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm lg:flex-row">
      <div className="flex items-center justify-center gap-2">
        <FileText className="h-4 w-4 text-main-400" />
        <span>Source: {fileName}</span>
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-3 text-main-600 hover:bg-main-50 hover:text-main-700"
          asChild
        >
          <a href={originalFileUrl} target="_blank" rel="nooperner noreferrer">
            <ExternalLink className="mr-1 h-4 w-4" />
            View Original
          </a>
        </Button>
        <DownloadSummaryButton
          title={title}
          summaryText={summaryText}
          fileName={fileName}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
}
