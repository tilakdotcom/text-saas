export interface SummaryType {
  id: string; // or number, depending on your backend
  original_file_url: string;
  file_name: string;
  createdAt: string; // or Date, depending on how you handle it
  summary_text: string;
  status: "pending" | "completed" | "failed";
  title: string;
  original_text:string
}

export type InitialStateProps = {
  summaries: SummaryType[] | null;
  current: SummaryType | null;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
};
