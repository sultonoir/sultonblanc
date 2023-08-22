"use client";

import TestimonialSlider from "@/components/Services/TestimonialSlider";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/shared/FadeIn";

const TestimonialClient = () => {
  return (
    <div className="h-full bg-primary/30 text-center">
      <div className="container mx-auto flex h-full flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What client <span className="text-accent">Say</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialClient;
