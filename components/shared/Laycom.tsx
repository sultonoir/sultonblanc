"use client";
import React from "react";
import TopLeftimg from "./TopLeftimg";
import Nav from "./Nav";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "./Transition";
import Header from "../Header/Header";

type Props = {
  children: React.ReactNode;
};

const Laycom: React.FC<Props> = ({ children }) => {
  const path = usePathname();
  return (
    <motion.div
      key={path}
      className="h-full"
    >
      <TopLeftimg />
      <Nav />
      <Header />
      <Transition />
      {children}
    </motion.div>
  );
};

export default Laycom;
