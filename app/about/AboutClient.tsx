"use client";
import Circles from "@/components/Circles/Circles";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import { motion } from "framer-motion";
import Avatar from "@/components/shared/Avatar";
import { fadeIn } from "@/components/shared/FadeIn";
import CountUp from "react-countup";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const AboutClient = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute -left-[370px] bottom-0 hidden xl:flex"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:px-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ipsam temporibus odio architecto eum nemo cum ea asperiores
            molestiae quod repellendus quis non, ullam similique perferendis
            illo fuga nesciunt itaque.
          </motion.p>
          {/* experience */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 xl:gap-x-6"
          >
            <div className="relative flex-1 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10">
              <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
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
              <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
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
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-[480px] w-full flex-col xl:max-w-[48%]"
        >
          <div className="mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                }  relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex max-w-max flex-1 flex-col items-center gap-x-2 text-white/60 md:flex-row"
              >
                <div className="mb-2 font-light md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div className="">
                  {"stage" in item && <div>{item.stage}</div>}
                </div>
                <div className="flex gap-x-4">
                  {"icons" in item &&
                    item.icons.map((icon, iconsIndex) => (
                      <div
                        key={iconsIndex}
                        className="text-2xl text-white"
                      >
                        {icon}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutClient;
