import React from "react";
import { DashboardHeader } from "./DashbordHeader";
import { FileTextIcon, PlusIcon } from "lucide-react";
import CreateContent from "@/components/ui/CreateContent";
import { getPosts } from "@/actions/get";
import { EmptyPlaceholder } from "@/components/ui/EmptyPlaceholder";
import { PostItem } from "@/components/ui/PostItem";

const Dashboard = async () => {
  const posts = await getPosts({
    category: "project",
  });

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
      {posts.length ? (
        <div className="divide-y divide-border rounded-md border">
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
            />
          ))}
        </div>
      ) : (
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon Icons={FileTextIcon} />
          <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any posts yet. Start creating content.
          </EmptyPlaceholder.Description>
          <CreateContent
            variant="secondary"
            typecontent="project"
            className="gap-3">
            <PlusIcon />
            New Project
          </CreateContent>
        </EmptyPlaceholder>
      )}
    </div>
  );
};

export default Dashboard;
