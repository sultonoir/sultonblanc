"use client";
import React from "react";
import Nav from "./Nav";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "./Transition";
import { Theme } from "../Theme/Theme";

type Props = {
  children: React.ReactNode;
};

const Laycom: React.FC<Props> = ({ children }) => {
  const path = usePathname();
  return (
    <>
      <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#6774e3] blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#ea5378] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <motion.div key={path}>
        <Theme />
        <Nav />
        <Transition />
        {children}
      </motion.div>
    </>
  );
};

export default Laycom;
