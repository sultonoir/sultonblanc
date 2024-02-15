import Dashboard from "@/template/admin/dashbord";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashbord - Sultonoir",
  description: "Frontend web developer",
};

const Page = () => {
  return <Dashboard />;
};

export default Page;
