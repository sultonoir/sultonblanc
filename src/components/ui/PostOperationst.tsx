"use client";

import * as React from "react";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Loader, MoreVertical, Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { deleteContent } from "@/actions/post";

interface PostOperationstProps {
  actionType: "project" | "blog";
  id: string;
}

const PostOperationst = ({ actionType, id }: PostOperationstProps) => {
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);

  const { status, execute } = useAction(deleteContent, {
    onSuccess: () => {
      toast.success("Content deleted");
      setShowDeleteAlert(false);
    },
  });
  const path = usePathname();
  const handleDelete = () => {
    execute({
      id,
      path,
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-md border transition-colors hover:bg-muted">
          <MoreVertical className="size-4" />
          <span className="sr-only">Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link
              href={`/editor/${id}`}
              className="flex w-full items-center gap-3">
              <Edit />
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex w-full cursor-pointer items-center gap-3 font-medium text-red-500  focus:text-red-500 focus:hover:bg-red-100"
            onSelect={() => setShowDeleteAlert(true)}>
            <Trash2Icon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog
        open={showDeleteAlert}
        onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this {actionType}
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
              className="bg-red-600 hover:bg-red-600 hover:opacity-80 focus:ring-red-600">
              {status === "executing" ? (
                <Loader className="mr-2 size-4 animate-spin" />
              ) : (
                <Trash2Icon className="mr-2 size-4" />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PostOperationst;
