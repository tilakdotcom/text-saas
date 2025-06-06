import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CLIENT_ID, CLIENT_URI } from "@/common/constants/getEvn";
import { MainLayout } from "@/components/layout/MainLayout";
// import { Preloader } from "@/components/app-ui/Loading";
import { GoogleOAuthProvider } from "@react-oauth/google";
import BgGradient from "@/components/common/BGGradient";
import ScrollToTop from "@/components/app-ui/ScrollToTop";
import { Toaster } from "react-hot-toast";
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
          <BgGradient className="from-rose-500 via-rose-500 to-cyan-500" />
          <MainLayout className="bg-gradient-to-b from-rose-50 via-red-50 to-cyan-50 text-neutral-950 ">
            {children}
          </MainLayout>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 2000,
              style: {
                borderRadius: "14px",
                background: "#fff1f2", // soft rose background
                color: "#4b5563", // slate-600 text
                padding: "16px 20px",
                fontSize: "14px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
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
                },
              },
            }}
          />
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
