"use client";

import React from "react";
import Container from "../common/Container";
import CheckUser from "./UserCheck";
import { Provider } from "react-redux";
import store from "@/store/store";

export function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Provider store={store}>
        <CheckUser />
        <Container className={className}>{children}</Container>;
      </Provider>
    </>
  );
}
