"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex h-[90dvh] w-full justify-center overflow-hidden container max-w-screen-xl">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <div className="flex max-w-lg flex-col">
          <h3 className="mt-1 text-5xl font-bold lg:text-7xl">
            I bring{" "}
            <span className="relative text-blue-600">
              ideas
              <span className="absolute bottom-0 right-0 h-[9px] w-full border-b-[9px] border-yellow-500"></span>
            </span>{" "}
            to web.
          </h3>
          <p className="mt-5 max-w-sm font-medium">
            Transforming complex ideas into elegant and scalable web solutions.
          </p>
          <div className="flex gap-2">
            <Link
              href="#projects"
              className="px-4 py-2 rounded-lg flex gap-2 items-center bg-blue-600 w-fit font-medium text-white hover:bg-yellow-500 hover:text-black transition-colors duration-300 my-3"
              onClick={() => {
                setActiveSection("Projects");
                setTimeOfLastClick(Date.now());
              }}>
              Explore my work
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 rounded-lg flex gap-2 items-center border border-blue-500 w-fit font-medium text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 my-3"
              onClick={() => {
                setActiveSection("About");
                setTimeOfLastClick(Date.now());
              }}>
              About me
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="relative h-full w-full">
          <Image
            src="/hero-1.png"
            width={450}
            height={350}
            priority
            alt="hero-icon"
            className="absolute right-0 top-1/2 z-10  -translate-y-1/2"
          />
        </motion.div>
      </div>
    </section>
  );
}
