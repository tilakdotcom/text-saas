import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CLIENT_ID, CLIENT_URI } from "@/common/constants/getEvn";
import { Providers } from "@/components/layout/ProvidersLayout";
// import { Preloader } from "@/components/app-ui/Loading";
import { GoogleOAuthProvider } from "@react-oauth/google";
import BgGradient from "@/components/common/BGGradient";
import ScrollToTop from "@/components/app-ui/ScrollToTop";
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
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      {" "}
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <Preloader /> */}
          <ScrollToTop />
          <BgGradient className="from-main-500 via-main-500 to-cyan-500" />
          <Providers className="bg-gradient-to-b from-main-50 via-red-50 to-cyan-50 text-neutral-950 ">
            {children}
          </Providers>
         
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
