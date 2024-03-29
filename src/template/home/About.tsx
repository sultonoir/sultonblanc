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
      <div className="flex flex-col gap-2 text-start">
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3 font-medium leading-snug text-muted-foreground">
          I am Sulton a dynamic developer from Indonesia, driven by an
          insatiable passion for creating stunning and captivating websites.
          Armed with a flair for creativity and a proficient ability to
          transform designs into fully functional digital experiences. I bring a
          unique blend of vision and technical prowess to every project. My goal
          is to not only meet but exceed expectations, sculpting visually
          striking and intuitively responsive websites that leave a lasting
          impression on users. Let my skills and expertise help you on your
          journey of turning concepts into captivating digital realities.
        </p>
      </div>
    </motion.section>
  );
}
