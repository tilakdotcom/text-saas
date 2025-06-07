import { SummaryType } from "@/common/types/summary";

export const filterSummaries = (summaries: SummaryType[] | null, id: string) => {
  if(!summaries) return null
  const data = summaries.filter((s) => s.id != id);
  return data;
};
