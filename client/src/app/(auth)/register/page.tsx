"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { signUpSchema } from "@/common/schemas/auth.schema";
import { useState } from "react";
import { useAppDispatch, useTypeSelector } from "@/store/store";
import { registerUser } from "@/store/auth/authSlice";
import toast from "react-hot-toast";
import GoogleAuth from "@/components/common/GoogleAuth";
import { MotionSection } from "@/components/common/FramerMotion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const { isLoading } = useTypeSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      avatar: null,
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const response = await dispatch(
      registerUser({
        email: values.email,
        password: values.password,
        avatar: values.avatar,
      })
    );

    // Handle the response here if needed
    if (registerUser.fulfilled.match(response)) {
      toast.success("Registration successful! redirecting to login...");
      setTimeout(() => {
        navigate.replace("/login");
      }, 1000);
    } else {
      toast.error("Email already exists");
    }
  }

  return (
    <MotionSection className="flex justify-center py-16 px-4">
      <div className="flex flex-col sm:flex-row gap-10 max-w-xl w-full bg-main-50 shadow-lg rounded-2xl overflow-hidden">
        <div className="flex flex-col justify-center items-center p-8 w-full">
          <h2 className="text-3xl font-semibold text-gray-900">Login</h2>
          <p className="text-gray-700 mb-6 text-sm">Join us and get started!</p>

          <div className="py-4">
            <GoogleAuth />
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-5"
              aria-label="Login form"
            >
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-main-500 focus:outline-none placeholder:text-gray-600"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-main-500 focus:outline-none placeholder:text-gray-600"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Avatar Upload with Preview */}
              <FormField
                control={form.control}
                name="avatar"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Profile Picture</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        type="file"
                        accept="image/*"
                        className="w-full px-4 border rounded-lg file:border-none focus:ring-2 focus:ring-neutral-900 focus:outline-none  file:text-gray-900"
                        onChange={(event) => {
                          const file = event.target.files
                            ? event.target.files[0]
                            : null;
                          onChange(file);
                          if (file) {
                            setAvatarPreview(URL.createObjectURL(file));
                          } else {
                            setAvatarPreview(null);
                          }
                        }}
                      />
                    </FormControl>
                    {avatarPreview && (
                      <div className="mt-2">
                        <Image
                          draggable="false"
                          src={avatarPreview}
                          alt="Profile Preview"
                          className="w-16 h-16 rounded-full object-cover"
                          height={48}
                          width={48}
                        />
                      </div>
                    )}
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 rounded-lg font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 bg-main-600 hover:bg-main-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Processing..." : "Register"}
              </Button>

              {/* Navigation Link */}
              <p className="text-sm text-center text-gray-600 mt-2">
                Already have an Account?{" "}
                <Link
                  href="/login"
                  className="text-main-600 font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </MotionSection>
  );
}
