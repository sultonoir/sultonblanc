"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { data } from "@/lib/data";
import { LogOutIcon } from "lucide-react";

interface UserAccountNavProps {
  user:
    | {
        name?: string | undefined | null;
        image?: string | undefined | null;
        email?: string | undefined | null;
      }
    | undefined;
}

const UserAccountNav = ({ user }: UserAccountNavProps) => {
  const items = data.sidebarNav;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-11 border border-border p-1">
          <AvatarImage
            src={user?.image ?? ""}
            alt="image-user"
            className="rounded-full"
          />
          <AvatarFallback>
            <span className="sr-only">{user?.name ?? "sulton"}</span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.name && <p className="font-medium">{user.name}</p>}
            {user?.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem
            asChild
            key={item.name}>
            <Link href="/sulton">
              <item.icon className="mr-2 size-4" />
              <span>{item.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={async (event) => {
            event.preventDefault();
            await signOut({
              callbackUrl: `${window.location.origin}/auth/login`,
            });
          }}>
          <LogOutIcon className="mr-2 size-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
