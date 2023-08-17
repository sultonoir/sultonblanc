import Image from "next/image";
import React from "react";

const TopLeftimg = () => {
  return (
    <div className="absolute left-0 top-0 w-[200px] opacity-50 mix-blend-color-dodge xl:w-[400px]">
      <Image
        src={"/top-left-img.png"}
        alt={""}
        width={400}
        height={400}
        priority
        className="w-auto"
      />
    </div>
  );
};

export default TopLeftimg;
