import { useAppDispatch, useTypeSelector } from "@/store/store";
import { Loading } from "./Loading";
import { getPdfSummaries } from "@/store/summary/summarySlice";
import CustomPagination from "../common/PaginationContainer";

interface PaginatedItemsProps {
  pageCount: number;
}

export function PaginatedItems({ pageCount }: PaginatedItemsProps) {
  const dispatch = useAppDispatch();
  const { isLoading } = useTypeSelector((state) => state.summary);
  if (isLoading) return <Loading />;

  const handlePageClick = async (page: number) => {
    await dispatch(getPdfSummaries(page.toLocaleString()));
  };

  return (
    <CustomPagination totalPages={pageCount} onPageChange={handlePageClick} />
  );
}
