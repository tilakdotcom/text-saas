"use client";

import { loadUser } from "@/lib/localStorage";
import { checkAuth, setAuthenticated } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

export default function CheckUser() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = loadUser(); // ✅ moved inside useEffect

    if (user === null) {
      dispatch(setAuthenticated(false));
    } else {
      dispatch(checkAuth());
    }
  }, [dispatch]); // ✅ no need for `user` in deps

  return null;
}
