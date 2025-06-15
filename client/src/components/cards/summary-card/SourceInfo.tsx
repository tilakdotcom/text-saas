import { FileText } from "lucide-react";
import DownloadSummaryButton from "./DownloadSummaryButton";

type SourceInfoProps = {
  fileName: string;
  originalFileText: string;
  title: string;
  summaryText: string;
  createdAt: string;
};

export default function SourceInfo({
  fileName,
  originalFileText,
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
        <DownloadSummaryButton
          title={title}
          buttonTittle={"Download Original Text"}
          summaryText={originalFileText}
          fileName={fileName}
          createdAt={createdAt}
        />
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
