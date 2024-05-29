"use client";
import SectionHeading from "@/components/ui/section-heading";
import { useSectionInView } from "@/hooks/useSectionInView";
import React from "react";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <div
      ref={ref}
      id="experience"
      className="container mb-36 size-full scroll-mt-28">
      <SectionHeading>Resume</SectionHeading>
      <div className="grid w-full grid-cols-1 justify-between gap-5 md:grid-cols-2">
        <div className="max-w-md space-y-5">
          <div className="text-2xl">Experience</div>
          <div className="relative grid gap-8 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
            <div className="relative grid gap-1 text-sm">
              <div className="absolute left-0 top-1 z-10 aspect-square w-3 translate-x-[-29.5px] rounded-full bg-gray-900 dark:bg-gray-50" />
              <div className="text-[22px] font-medium">
                Intern frontend web developer
              </div>
              <div className="text-sm text-muted-foreground">
                Sep 2022 - Jan 2023 | Diskominfo kota sukabumi
              </div>
              <p>
                I interned at Discominfo as a frontend developer, specializing
                in creating user-friendly web interfaces. Working closely with
                designers, I transform conceptual designs into responsive,
                interactive web experiences using modern JavaScript frameworks.
                My contributions resulted in increased user engagement and
                decreased bounce rates on key projects. I actively collaborate
                with cross-functional teams, follow Agile methodology, and
                prioritize code quality to deliver a great user experience.
                Overall, my experience at Company A strengthened my frontend
                development skills and expanded my ability to deliver impactful
                solutions.
              </p>
            </div>
            <div className="relative grid gap-1 text-sm">
              <div className="absolute left-0 top-1 z-10 aspect-square w-3 translate-x-[-29.5px] rounded-full bg-gray-900 dark:bg-gray-50" />
              <div className="text-[22px] font-medium">
                Frontend web developer
              </div>
              <div className="text-sm text-muted-foreground">
                Jan 2024 - March 2024 | PT. DSAA Group
              </div>
              <p>
                Responsible for developing, and implementing user-friendly and
                responsive web applications. My primary focus is on creating
                engaging user experiences by using a combination of ReactJS,
                NextJS, and other latest Frontend technologies while also
                working closely with designers and back-end developers to ensure
                seamless integration of web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-md space-y-5">
          <div className="text-center text-2xl">Education</div>
          <div className="relative grid gap-8 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
            <div className="relative grid gap-1 text-sm">
              <div className="absolute left-0 top-1 z-10 aspect-square w-3 translate-x-[-29.5px] rounded-full bg-gray-900 dark:bg-gray-50" />
              <div className="text-[22px] font-medium">
                Bachelors in Computer Science (CS)
              </div>
              <div className="text-sm text-muted-foreground">
                2019 - 2023 | Bina sarana informatika
              </div>
              <p>
                Studied some core computer science courses including theory of
                computation, fundamentals of computer science, compilers and
                operating systems, information theory, systems and architecture,
                algorithms, data structures, software development and testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
