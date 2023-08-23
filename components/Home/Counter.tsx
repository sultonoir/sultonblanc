"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/FadeIn";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-1 xl:gap-x-6"
    >
      <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-slate-900/10">
        <div className="mb-2 text-2xl font-extrabold text-rose-700 xl:text-4xl">
          <CountUp
            start={0}
            end={1}
            duration={5}
          />{" "}
          +
        </div>
        <div className=" mx-auto max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px] xl:mx-0">
          years experience
        </div>
      </div>
      <div className="relative flex-1">
        <div className="mb-2 text-2xl font-extrabold text-rose-700 xl:text-4xl">
          <CountUp
            start={0}
            end={5}
            duration={5}
          />{" "}
          +
        </div>
        <div className="mx-auto max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px] xl:mx-0">
          Finnished Project
        </div>
      </div>
    </motion.div>
  );
};

export default Counter;
