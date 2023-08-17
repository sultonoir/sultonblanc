"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/shared/FadeIn";
import { BsArrowRight } from "react-icons/bs";

const ContactClient = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto flex items-center justify-center py-32 text-center xl:text-left">
        {/* Title */}
        <div className="flex w-full max-w-[700px] flex-col">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-2 text-clip"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto flex w-full flex-1 flex-col gap-6"
          >
            {/* input group */}
            <div className="flex w-full gap-x-6">
              <input
                type="text"
                placeholder="Name"
                className="input"
              />
              <input
                type="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input"
            />
            <textarea
              placeholder="Message"
              className="textarea"
            />
            <button className="btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent">
              <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                Let's talk
              </span>
              <BsArrowRight className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-500 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactClient;
