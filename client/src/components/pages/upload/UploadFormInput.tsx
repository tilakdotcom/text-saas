"use client";

import { uploadFileSchema } from "@/common/schemas/upload.schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type UploadFormInputProps = {
  onSubmit: SubmitHandler<{ file?: File | undefined }>;
  isLoading: boolean;
};

export const UploadFormInput = ({
  onSubmit,
  isLoading,
}: UploadFormInputProps) => {
  const form = useForm<z.infer<typeof uploadFileSchema>>({
    resolver: zodResolver(uploadFileSchema),
    defaultValues: {
      file: undefined,
    },
  });
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mx-auto"
          aria-label="file upload form"
        >
          <div className="flex items-center justify-end gap-1.5">
            {/* file */}
            <FormField
              control={form.control}
              name="file"
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      type="file"
                      required
                      accept="application/pdf"
                      className="w-full px-4 border rounded-lg file:border-none focus:ring-2 focus:ring-neutral-900 focus:outline-none  file:text-gray-900 text-xs sm:text-sm"
                      onChange={(event) => {
                        const file = event.target.files
                          ? event.target.files[0]
                          : null;
                        onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              disabled={isLoading}
              className="bg-rose-600 hover:cursor-pointer hover:bg-rose-700 text-xs sm:text-sm py-2"
            >
              {isLoading ? (
                <>
                  <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Upload Your Pdf"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UploadFormInput;
