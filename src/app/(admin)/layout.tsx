import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/template/admin/navbar";
import { DashboardNav } from "@/template/admin/navbar/DasboardNav";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Navbar />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
          <Toaster
            closeButton
            richColors
            position="top-right"
          />
        </main>
      </div>
    </div>
  );
};

export default Layout;
