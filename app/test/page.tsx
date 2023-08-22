"use client";
import React from "react";
import { api } from "@/utils/trpc";
import Link from "next/link";

const page = () => {
  const { data, isLoading } = api.getProject.useQuery();
  return (
    <section>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!data ? (
            <p className="h-[50px] w-[200px] animate-pulse bg-slate-400"></p>
          ) : (
            <>{data.map((item) => item.name)}</>
          )}
          <Link href={"/"}>Home</Link>
        </>
      )}
    </section>
  );
};

export default page;
