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
              borderRadius: "12px",
              background: "#fff1f2", // soft rose background
              color: "#4b5563", // slate-600 text
              padding: "10px 14px", // reduced padding
              fontSize: "13px", // slightly smaller font
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
              border: "1px solid #fda4af", // rose-300 border
            },
            success: {
              iconTheme: {
                primary: "#14b8a6", // teal-500
                secondary: "#ccfbf1", // teal-100
              },
              style: {
                background: "#ccfbf1", // light teal
                color: "#115e59", // dark teal text
                border: "1px solid #5eead4", // teal-300
                padding: "10px 14px", // match base
                fontSize: "13px",
              },
            },
            error: {
              iconTheme: {
                primary: "#f43f5e", // rose-500
                secondary: "#ffe4e6", // rose-100
              },
              style: {
                background: "#ffe4e6", // light rose
                color: "#881337", // dark rose text
                border: "1px solid #fda4af", // rose-300
                padding: "10px 14px", // match base
                fontSize: "13px",
              },
            },
          }}
        />
      </Provider>
    </>
  );
}
