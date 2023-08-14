"use client";
import { fadeIn } from "@/components/shared/FadeIn";
import ProjectBtn from "@/components/shared/ProjectBtn";
import { motion } from "framer-motion";
import Avatar from "../shared/Avatar";
import ParticlesContainer from "../shared/ParticlesContainer";

export default function HomeClient() {
  return (
    <main className="h-full bg-primary/60">
      {/* text */}
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h1"
          >
            Hallo <br /> My Name {""}
            <span className="text-accent">Sulton</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            repellendus nostrum accusamus dolorum! Perspiciatis, a. Aliquid
            veritatis totam repellendus cum.
          </motion.p>
          {/* button */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="relative flex justify-start"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="absolute bottom-0 right-0 h-full w-[1200px]">
        {/* bgimg */}
        <div className="translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat"></div>

        {/* particle */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-32 h-full max-h-[676px] w-full max-w-[737px] lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </main>
  );
}
