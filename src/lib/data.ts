import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { FileTextIcon, ScrollTextIcon, SlidersHorizontal } from "lucide-react";

export const data = {
  sidebarNav: [
    {
      name: "Project",
      href: "/sulton",
      icon: FileTextIcon,
    },
    {
      name: "Blog",
      href: "/sulton/blog",
      icon: ScrollTextIcon,
    },
    {
      name: "Settings",
      href: "/sulton/settings",
      icon: SlidersHorizontal,
    },
  ],
  mainNav: [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Tech",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ],
  skillsData: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "SvelteKit",
  ],
  social: [
    {
      name: "Github",
      icon: GitHubLogoIcon,
      href: "https://github.com/sultonoir",
    },
    {
      name: "linkedin",
      icon: LinkedInLogoIcon,
      href: "https://github.com/sultonoir",
    },
    {
      name: "Instagram",
      icon: InstagramLogoIcon,
      href: "https://github.com/sultonoir",
    },
  ],
  experience: [
    {
      id: "1",
      name: "Frontend Web Developer",
      years: "2022 - 2023",
      place: "PT. DSAA Group",
      desc: "Responsible for developing, and implementing user-friendly and responsive web applications. My primary focus is on creating engaging user experiences by using a combination of ReactJS, NextJS, and other latest Frontend technologies while also working closely with designers and back-end developers to ensure seamless integration of web applications.",
    },
    {
      id: "2",
      name: "Frontend Web Developer",
      years: "2022 - 2023",
      place: "Diskominfo",
      desc: "Responsible for developing clean, readable, reusable and maintainable solutions. Mostly work on Javascript technologies such as ReactJS and NextJS.",
    },
  ],
};
