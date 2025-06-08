"use client";

import React from "react";
import Container from "../common/Container";
import CheckUser from "./UserCheck";
import { Provider } from "react-redux";
import store from "@/store/store";
import Header from "../app-ui/Header";
import Footer from "../app-ui/Footer";
import { Toaster } from "react-hot-toast";
export function Providers({
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
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2000,
            style: {
              borderRadius: "11px",
              background: "#e0ecff", // softer royal blue-50
              color: "#1e3a8a", // blue-900 (deep)
              padding: "6px 12px",
              fontSize: "13px",
              boxShadow: "0 4px 16px rgba(30, 58, 138, 0.15)", // stronger blue tone shadow
              border: "1px solid #60a5fa", // blue-400 border → more contrast
            },
            success: {
              iconTheme: {
                primary: "#2563eb", // blue-600
                secondary: "#bfdbfe", // blue-200 (lighter than before)
              },
              style: {
                background: "#dbeafe", // blue-100
                color: "#1e40af", // blue-800
                border: "1px solid #60a5fa", // blue-400
                padding: "6px 12px",
                fontSize: "13px",
                boxShadow: "0 4px 16px rgba(30, 58, 138, 0.12)",
              },
            },
            error: {
              iconTheme: {
                primary: "#1e40af", // blue-800
                secondary: "#e0ecff", // lighter blue-50
              },
              style: {
                background: "#e0ecff", // lighter blue-50
                color: "#1e3a8a", // blue-900
                border: "1px solid #60a5fa", // blue-400
                padding: "6px 12px",
                fontSize: "13px",
                boxShadow: "0 4px 16px rgba(30, 58, 138, 0.12)",
              },
            },
          }}
        />
      </Provider>
    </>
  );
}
