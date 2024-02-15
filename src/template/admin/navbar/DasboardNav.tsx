"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { data } from "@/lib/data";

export function DashboardNav() {
  const path = usePathname();
  const items = data.sidebarNav;
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link
              key={index}
              href={item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent"
                )}>
                <item.icon className="mr-2 size-4" />
                <span>{item.name}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
