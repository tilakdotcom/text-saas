"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAppDispatch, useTypeSelector } from "@/store/store";
import { deletePdfSummaryById } from "@/store/summary/summarySlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function DeleteButton({ summaryId }: { summaryId: string }) {
  const [open, setOpen] = useState(false);
  const { isLoading } = useTypeSelector((state) => state.summary);
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleDelete = async () => {
    const response = await dispatch(deletePdfSummaryById(summaryId));

    // Handle the response here if needed
    if (deletePdfSummaryById.fulfilled.match(response)) {
      toast.success("Summary Deleted successful!");
    } else if (deletePdfSummaryById.rejected.match(response)) {
      toast.error("Failed to Delete Summary, please try again later");
    }
    setOpen(false);
    navigate.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="border border-gray-200 bg-gray-50 text-gray-400 duration-200 hover:bg-rose-50 hover:text-rose-600"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Summary</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this summary? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            className={cn(
              "border border-gray-200 bg-gray-50 duration-200 hover:bg-gray-100 hover:text-gray-600",
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            )}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            className={cn(
              "bg-rose-500 hover:bg-rose-600",
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            )}
            onClick={handleDelete}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
