"use client";

import { loadUser } from "@/lib/localStorage";
import {
  checkAuth,
  setAuthenticated,
  setIsCheckingAuth,
} from "@/store/auth/authSlice";
import { useAppDispatch, useTypeSelector } from "@/store/store";
import { useEffect } from "react";
import { Loading } from "../app-ui/Loading";

export default function CheckUser() {
  const dispatch = useAppDispatch();
  const { isCheckingAuth } = useTypeSelector((state) => state.auth);

  useEffect(() => {
    const user = loadUser();
    if (user === null) {
      dispatch(setAuthenticated(false));
      dispatch(setIsCheckingAuth(false));
    } else {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  if (isCheckingAuth) {
    return <Loading />;
  }

  return null;
}
