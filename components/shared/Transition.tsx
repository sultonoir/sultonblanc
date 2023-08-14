import React from "react";
import { motion } from "framer-motion";

const trasitionVarian = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#4b3792]"
        variants={trasitionVarian}
        initial="initial"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#3b3d71]"
        variants={trasitionVarian}
        initial="initial"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-[#2e2257]"
        variants={trasitionVarian}
        initial="initial"
        animate="animate"
        exit={"exit"}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
