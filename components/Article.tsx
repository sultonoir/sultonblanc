"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Project } from "@/types";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface ProjectProps {
  project: Project;
}

export default function Article({ project }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:min-h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <div className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            <PortableText value={project.content} />
          </div>
          <Link
            href={project.url}
            target="_blank"
            className="px-4 py-2 rounded-lg flex gap-2 items-center bg-blue-600 w-fit font-medium text-white hover:bg-yellow-500 hover:text-black transition-colors duration-75 my-3">
            Live Project
          </Link>
        </div>

        <Image
          placeholder="blur"
          blurDataURL={project.image.metadata.lqip as string}
          src={project.image.url as string}
          alt="Project I worked on"
          width={300}
          height={300}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
