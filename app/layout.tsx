import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayoflightfertilityfoundation.com"),
  title: "Ray of Light Fertility Foundation",
  description:
    "Wisconsin's first nonprofit dedicated exclusively to supporting couples navigating infertility through grants, resources, and community support.",
  keywords: [
    "fertility",
    "infertility",
    "grants",
    "Wisconsin",
    "nonprofit",
    "IVF",
    "family building",
  ],
  openGraph: {
    title: "Ray of Light Fertility Foundation",
    description:
      "Wisconsin's first nonprofit dedicated exclusively to supporting couples navigating infertility through grants, resources, and community support.",
    url: "https://rayoflightfertilityfoundation.com",
    siteName: "Ray of Light Fertility Foundation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
