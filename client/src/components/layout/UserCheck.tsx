"use client";

import { loadUser } from "@/lib/localStorage";
import { checkAuth, setAuthenticated } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";

export default function CheckUser() {
  const user = loadUser();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user === null) {
      dispatch(setAuthenticated(false));
    } else {
      dispatch(checkAuth());
    }
  }, [dispatch, user]);

  return null;
}
