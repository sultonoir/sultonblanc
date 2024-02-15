"use client";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";
import React from "react";

const Page = () => {
  return (
    <div className="h-[90dvh] w-full">
      <div className="my-2 flex h-full w-full items-center justify-center">
        <Button
          className="gap-3"
          onClick={() =>
            signIn("github", {
              redirect: true,
              callbackUrl: "/sulton",
            })
          }>
          <GitHubLogoIcon />
          Login
        </Button>
      </div>
    </div>
  );
};

export default Page;
