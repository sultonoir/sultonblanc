"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={`/work`}
        className="group relative flex h-[185px] w-[185px] items-center justify-center bg-circleStar bg-cover bg-no-repeat"
      >
        <Image
          src={"/rounded-text.png"}
          alt="ArrowRight"
          width={141}
          height={148}
          className="h-full max-h-[148px] w-auto max-w-[141px] animate-spin-slow"
        />
        <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2" />
      </Link>
    </div>
  );
};

export default ProjectBtn;
