import { Contents } from "@/lib/types";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

type Props = {
  project: Contents;
};

const Article = ({ project }: Props) => {
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
      className="group mb-3 rounded-lg border p-4 last:mb-0 sm:mb-8">
      <section className="flex w-full max-w-[42rem] flex-col gap-5 md:flex-row">
        <Link
          href={project.link ?? "/"}
          target="_blank"
          className="relative h-[150px] w-[200px]">
          <Image
            src={project.image ?? "/logo.png"}
            alt={project.title ?? "Sultonoir-image"}
            fill
            priority
            className="aspect-video object-contain"
          />
        </Link>
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="text-lg font-bold">{project.title}</h2>
          <p className="text-sm font-medium text-foreground/80">
            {project.summary}
          </p>
          <Link
            target="_blank"
            href={project.link ?? "/"}
            className="flex w-fit items-center gap-2 font-medium hover:text-blue-600">
            <Link2Icon />
            {project.link}
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            {project.tag?.map((item, index) => (
              <div
                className="rounded-full bg-blue-100 px-3 py-1 text-[12px] font-medium text-blue-800 dark:bg-blue-600 dark:text-white"
                key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Article;
