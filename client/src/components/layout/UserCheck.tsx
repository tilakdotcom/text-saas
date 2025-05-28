"use client";

import { loadUser } from "@/lib/localStorage";
import { setUser } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

export default function CheckUser() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = loadUser();
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch]);

  return null;
}
