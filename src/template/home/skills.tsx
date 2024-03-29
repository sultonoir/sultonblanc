"use client";

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import { data } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Tech");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>Tech stack</SectionHeading>
      <p className="-mt-5 mb-10 text-center">
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {data.skillsData.map((skill, index) => (
          <motion.li
            className="rounded-xl border border-border bg-zinc-50 px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
