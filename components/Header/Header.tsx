"use client";
import Link from "next/link";
import React from "react";
import Social from "./Social";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <header
      className={`${
        path === "/" && "absolute bg-transparent"
      } z-30 flex w-full items-center bg-primary/30 px-16  xl:h-[90px] xl:px-0`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between py-8 sm:flex-row">
          {/* Logo */}
          <Link href={"/"}>
            <p className="whitespace-nowrap text-[35px] font-semibold">
              Sultonoir <span className="text-accent">.</span>
            </p>
          </Link>
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
