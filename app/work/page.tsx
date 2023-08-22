"use client";
import Circles from "@/components/Circles/Circles";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/shared/FadeIn";
import WorkSlider from "@/components/Services/WorkSlider";

const page = () => {
  return (
    <div className="flex h-full bg-primary/30 sm:items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          {/* text */}
          <div className="mb-4 flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 xl:whitespace-nowrap"
            >
              My works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] lg:mx-0"
            >
              projects I've worked on so far
            </motion.p>
          </div>
          {/* serviceSlide */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
