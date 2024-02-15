"use client";
import React, { type FC } from "react";
import { Button, type ButtonProps } from "./button";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { createContent } from "@/actions/post";

interface CreateContentProps extends ButtonProps {
  typecontent: "project" | "blog";
}

const CreateContent: FC<CreateContentProps> = ({ ...props }) => {
  const path = usePathname();
  const { status, execute } = useAction(createContent, {
    onSuccess: () => {
      toast.success("Content created");
    },
  });

  const handleSubmit = () => {
    execute({
      category: props.typecontent,
      path,
    });
  };
  return (
    <Button
      onClick={handleSubmit}
      disabled={status === "executing"}
      {...props}>
      {status === "executing" ? "Adding..." : props.children}
    </Button>
  );
};

export default CreateContent;
