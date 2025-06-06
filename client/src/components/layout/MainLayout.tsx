"use client";

import React from "react";
import Container from "../common/Container";
import CheckUser from "./UserCheck";
import { Provider } from "react-redux";
import store from "@/store/store";
import Header from "../app-ui/Header";
import Footer from "../app-ui/Footer";
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
        <Container className={className}>
          <Header />

          <main className="min-h-screen">{children}</main>

          <Footer />
        </Container>
      </Provider>
    </>
  );
}
