
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AppProviders from "./providers/AppProviders";
import Footer from "./components/Footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arman Vaziri | Architecture & Design",
  description: "Arman Vaziri Architecture & Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppProviders>
          <Navbar />
          {children}
             <Footer />
        </AppProviders>
      </body>
    </html>
  );
}