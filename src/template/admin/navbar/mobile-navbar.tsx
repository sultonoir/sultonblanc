"use client";
import { useLockBody } from "@/hooks/useLockBody";
import { data } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Component1Icon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNavbar = () => {
  useLockBody();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const items = data.sidebarNav
  const path = usePathname()

  return <div>
    <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Cross1Icon /> : <Component1Icon />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} priority />
          <span className="inline-block font-bold">Sultonoir</span>
        </Link>
        <nav className="grid items-start gap-2">
          {items.map((item, index) => {
            return (
              item.href && (
                <Link key={index} href={item.href}>
                  <span
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent",
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.name}</span>
                  </span>
                </Link>
              )
            );
          })}
        </nav>
      </div>
    </div>
      )}
  </div>;
};

export default MobileNavbar;
