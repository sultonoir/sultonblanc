import Link from "next/link";
import React from "react";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Social = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-accent"
      >
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Social;
