import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "@/components/ui/SessionProviders"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sultonoir",
  description: "Frontend web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>

        {children}
        </SessionProvider>
        </body>
    </html>
  );
}
