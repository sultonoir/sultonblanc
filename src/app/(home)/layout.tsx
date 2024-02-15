import { Toaster } from "@/components/ui/sonner";
import NavbarUser from "@/template/home/NavbarUser";
import React, { type PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <NavbarUser />
      {children}
      <Toaster
        richColors
        closeButton
        position="top-right"
      />
    </React.Fragment>
  );
};

export default Layout;
