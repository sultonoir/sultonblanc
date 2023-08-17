"use client";
import { NextStudio } from "next-sanity/studio";
import defineConfig from "@/sanity.config";
import React from "react";

const AdminClient = () => {
  return <NextStudio config={defineConfig} />;
};

export default AdminClient;
