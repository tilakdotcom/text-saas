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
import { loginSchema } from "@/common/schemas/auth.schema";
import { useAppDispatch, useTypeSelector } from "@/store/store";
import { loginUser } from "@/store/auth/authSlice";
import toast from "react-hot-toast";
import { MotionSection } from "@/components/common/FramerMotion";
import Link from "next/link";
import GoogleAuth from "@/components/common/GoogleAuth";

export default function LoginPage() {
  const { isLoading } = useTypeSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const response = await dispatch(
      loginUser({
        email: values.email,
        password: values.password,
      })
    );

    // Handle the response here if needed
    if (loginUser.fulfilled.match(response)) {
      toast.success("Login successful!");
    } else if (loginUser.rejected.match(response)) {
      toast.error("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <MotionSection className="flex justify-center py-16 px-4">
      <div className="flex flex-col sm:flex-row gap-10 max-w-xl w-full bg-pink-50 shadow-lg rounded-2xl overflow-hidden">
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
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder:text-gray-600"
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
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder:text-gray-600"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 rounded-lg font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 bg-pink-600 hover:bg-pink-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Processing..." : "Login"}
              </Button>

              {/* Navigation Link */}
              <p className="text-sm text-center text-gray-600 mt-2">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-pink-600 font-medium hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </MotionSection>
  );
}
