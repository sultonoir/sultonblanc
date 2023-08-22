import Image from "next/image";
import React from "react";

const Circles = () => {
  return (
    <div className="absolute -bottom-2 right-0 -z-10 w-[200px] animate-pulse mix-blend-color-dodge xl:-right-16  xl:w-[300px]">
      <Image
        src="/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="h-full w-full"
        priority
      />
    </div>
  );
};

export default Circles;
