import Laycom from "@/components/shared/Laycom";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Laycom>{children}</Laycom>;
};

export default layout;
