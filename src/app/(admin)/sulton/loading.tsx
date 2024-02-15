import CreateContent from "@/components/ui/CreateContent";
import { PostItem } from "@/components/ui/PostItem";
import { DashboardHeader } from "@/template/admin/dashbord/DashbordHeader";

import { PlusIcon } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="grid items-center gap-8">
      <DashboardHeader
        heading="Project"
        text="Create and manage project">
        <CreateContent
          variant="default"
          typecontent="project"
          className="gap-3">
          <PlusIcon />
          New Project
        </CreateContent>
      </DashboardHeader>
      <div className="divide-y rounded-md border">
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
        <PostItem.Skeleton />
      </div>
    </div>
  );
};

export default Loading;
