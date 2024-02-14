"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



const UserAccountNav = () => {
  const {data} = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={data?.user?.image ?? ""} alt="image-user" />
          <AvatarFallback>
            <span className="sr-only">{data?.user?.name ?? "sulton"}</span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {data?.user?.name && <p className="font-medium">{data?.user.name}</p>}
            {data?.user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {data?.user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/sulton">Project</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/billing">Blog</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={async (event) => {
            event.preventDefault();
            await signOut({
              callbackUrl: `${window.location.origin}/auth/login`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
