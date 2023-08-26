import React from "react";
import Header from "../header";

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default LayoutClient;
