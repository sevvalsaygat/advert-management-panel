import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ClientProviders from "./clientProviders";
import "./globals.css";

import { Toaster } from "sonner";

import { Layout } from "@app/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>
          <div className="flex flex-col h-screen">
            <Layout.Header />
            {children}
            <Toaster richColors closeButton position="top-right" />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
