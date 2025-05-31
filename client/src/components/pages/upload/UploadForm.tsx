"use client";
import UploadFormInput from "./UploadFormInput";
import { useRef } from "react";
import LoadingSkeleton from "./LoadingSkeleton";

export default function UploadForm() {
  const formRef = useRef(null);
  const isLoading = false;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200 dark:border-gray-800" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background text-muted-foreground px-3 text-sm">
            Uplaod PDF
          </span>
        </div>
      </div>
      <UploadFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
      />
      {/* {isLoading && ( */}
      <>
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200 dark:border-gray-800" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background text-muted-foreground px-3 text-sm">
              Processing
            </span>
          </div>
        </div>
        <LoadingSkeleton />
      </>
      {/* )} */}
    </div>
  );
}
