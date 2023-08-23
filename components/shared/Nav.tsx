"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";
import { Theme } from "../Theme/Theme";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
      {/* inner */}
      <div className="md:px40 flex h-[80px] w-full items-center justify-between gap-y-10 bg-foreground/10 px-4 py-8 text-3xl backdrop-blur-sm xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-8 xl:text-xl">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === path && "text-rose-500"
            } group relative flex items-center transition-all duration-300 hover:text-rose-500`}
            key={index}
            href={link.path}
            replace
          >
            {/* tooltip */}
            <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
              <div className="relative flex items-center rounded-[3px] bg-foreground p-[6px] text-secondary">
                <div className="text-[12px] font-semibold capitalize leading-none">
                  {link.name}
                </div>
                <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-foreground"></div>
              </div>
            </div>
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
