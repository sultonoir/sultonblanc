import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <>
        <Link
          href="/"
          className="hidden items-center space-x-2 md:flex">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            priority
          />
          <span className="hidden font-bold sm:inline-block">Sultonoir</span>
        </Link>
        <MobileNavbar/>
        </>
      </div>
    </header>
  );
};

export default Navbar;
