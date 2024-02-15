"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import useSelectSection from "@/hooks/useSelectSection";
import { data } from "@/lib/data";

export default function NavbarUser() {
  const { setActiveSection, setTimeOfLastClick, activeSection } =
    useSelectSection();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-border bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-accent/75 sm:top-6 sm:h-[3.25rem] sm:w-[37rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-900 sm:w-[initial] sm:flex-nowrap sm:gap-[25px]">
          {data.mainNav.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.href}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                className={clsx(
                  "group flex w-full items-center justify-center p-3 transition dark:text-gray-300 dark:hover:text-gray-100",
                  {
                    "text-gray-200": activeSection === link.name,
                  }
                )}
                href={link.href}
                onMouseEnter={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}>
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-blue-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
