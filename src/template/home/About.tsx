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
      <div className="flex flex-col gap-2 text-justify">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3 font-medium">
          {`Hello! I'm Sulton, a passionate frontend web developer with a
          strong affinity for problem-solving. I find immense satisfaction in
          unraveling complex challenges and crafting efficient solutions.
          Proficient in React, Next.js, Node.js, and MongoDB, I am always eager
          to expand my technological toolkit. Actively seeking a full-time
          position as a frontend developer`}
        </p>
        <p className="font-medium">
          Beyond coding, my commitment extends to the esports arena, where I
          actively refine my gaming skills to compete at a competitive level in
          tournaments. This combination of technical prowess and a competitive
          spirit makes me a dynamic candidate for your team.
        </p>
      </div>
    </motion.section>
  );
}
