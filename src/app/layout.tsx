import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "@/components/ui/SessionProviders";
import "./globals.css";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

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
    <html
      lang="en"
      suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system">
            {children}
            <div className="fixed bottom-1 right-1">
              <ThemeSwitcher />
            </div>
          </ThemeProvider>
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
