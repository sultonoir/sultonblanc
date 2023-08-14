import Image from "next/image";
import Link from "next/link";
import React from "react";
import Social from "./Social";

const Header = () => {
  return (
    <header className="absolute z-30 flex w-full items-center px-16 xl:h-[90px] xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 py-8 sm:flex-row">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={220}
              height={48}
              priority
            />
          </Link>
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
