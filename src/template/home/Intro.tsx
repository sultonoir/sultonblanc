"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/hooks/useSectionInView";
import useSelectSection from "@/hooks/useSelectSection";
import { data } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useSelectSection();

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  return (
    <section
      ref={ref}
      id="home"
      className="container relative flex h-[100dvh] w-full max-w-screen-xl justify-center overflow-hidden">
      <motion.div
        style={{ opacity, scale }}
        ref={targetRef}
        className="container flex h-full flex-col items-center justify-between md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="flex max-w-lg flex-col">
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
              className="my-3 flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:opacity-80"
              onClick={() => {
                setActiveSection("Projects");
                setTimeOfLastClick(Date.now());
              }}>
              Explore my work
            </Link>
            <Link
              href="#about"
              className="my-3 flex w-fit items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
              onClick={() => {
                setActiveSection("About");
                setTimeOfLastClick(Date.now());
              }}>
              About me
            </Link>
          </div>
          <div className="mt-10 flex gap-5 text-lg">
            {data.social.map((item) => (
              <Link
                href={item.href}
                className="group flex items-center gap-2"
                key={item.name}>
                <item.icon className="text-2xl" />
                <span className="group-hover:text-blue-500">{item.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="relative size-full">
          <Image
            src="/hero-1.png"
            width={450}
            height={350}
            priority
            alt="hero-icon"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
