import Link from "next/link";
import React from "react";
import {
  RiInstagramLine,
  RiTwitterLine,
  RiGithubLine,
  RiDiscordLine,
} from "react-icons/ri";

const Social = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 text-2xl">
      <Link
        href={"https://github.com/sultonoir"}
        className="transition-all duration-300 hover:text-rose-500"
        target="_blank"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.discordapp.com/users/503930090393042954"}
        className="transition-all duration-300 hover:text-rose-500"
        target="_blank"
      >
        <RiDiscordLine />
      </Link>
      <Link
        href={"https://www.instagram.com/sultonoir/"}
        className="transition-all duration-300 hover:text-rose-500"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={""}
        className="transition-all duration-300 hover:text-rose-500"
        target="_blank"
      >
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Social;
