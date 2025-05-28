import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CLIENT_URI } from "@/common/constants/getEvn";
import { MainLayout } from "@/components/layout/MainLayout";
import { Provider } from "react-redux";
import store from "@/store/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Sommaire - AI Powered PDF Summarization",
  description:
    "Save hours of reading time with AI powered PDF summarization. Transform lengthy PDFs into clear, accurate summaries in second with our advanced AI Technology.",
  openGraph: {
    images: [
      {
        url: "/sommaire.png",
      },
    ],
  },
  metadataBase: new URL(CLIENT_URI),
  alternates: {
    canonical: CLIENT_URI,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </Provider>
  );
}
