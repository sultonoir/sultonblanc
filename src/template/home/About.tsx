"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      ref={ref}
      className="mb-28 grid max-h-[40rem] max-w-[65rem] scroll-mt-28 grid-cols-1 gap-10 text-center leading-8 sm:mb-40 md:grid-cols-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <div className="relative hidden size-full md:block">
        <div className="absolute bottom-0 right-0 h-[80%] w-full rounded-2xl bg-blue-500"></div>
        <Image
          src="/1.png"
          alt="owner"
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3 text-base font-medium">
          My expertise spans both frontend, allowing me to create comprehensive
          and seamlessly integrated web solutions. I am committed to developing
          and optimizing interactive, user-friendly, and feature-rich web
          applications. I&apos;m proficient in troubleshooting complex issues
          and implementing new features.Whether you&apos;re a business seeking a
          robust web presence or an employer looking to hire a versatile
          developer, feel free to get in touch.
        </p>
      </div>
    </motion.section>
  );
}
