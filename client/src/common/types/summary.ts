export type SummaryType = {
  id: string; // or number, depending on your backend
  original_file_url: string;
  file_name: string;
  created_at: string; // or Date, depending on how you handle it
  summary_text: string;
  status: "pending" | "completed" | "failed"; 
};
