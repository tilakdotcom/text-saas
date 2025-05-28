"use client";



import { UserType } from "@/common/types/user";
export const loadUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const persistUser = (user: UserType | null) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const clearUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};
