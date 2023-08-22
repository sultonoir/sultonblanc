import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/1.png"}
        alt="Avatar"
        width={750}
        height={750}
        className="translate-z-0 h-full w-full"
      />
    </div>
  );
};

export default Avatar;
