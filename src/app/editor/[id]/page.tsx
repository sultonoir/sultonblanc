import { getPostById } from "@/actions/get";
import FormCreateEvent from "@/components/ui/FormCreateEvent";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";
const page = async ({ params }: { params: { id: string } }) => {
  const data = await getPostById(params.id);
  if (!data) redirect("/");

  // Ensure data is a plain object
  const plainData = JSON.parse(JSON.stringify(data));

  return (
    <div className="container">
      <div className="my-10">
        <FormCreateEvent post={plainData} />
      </div>
    </div>
  );
};

export default page;
