import { formatDate } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Skeleton } from "./skeleton";
import { type PostsRecord } from "@/xata";
import Image from "next/image";
import PostOperationst from "./PostOperationst";

interface PostItemsProps {
  post: PostsRecord;
}

export const PostItem = ({ post }: PostItemsProps) => {
  return (
    <div className="flex gap-2 p-4">
      <Link
        href={`/editor/${post.id}`}
        className="relative h-[100px] w-[200px]">
        <Image
          alt={post.title?.toString() ?? "post"}
          src={post.imageUrl?.url ?? "/logo.png"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="aspect-video object-contain"
          priority
        />
      </Link>
      <div className="flex w-full items-center justify-between">
        <div className="grid h-fit gap-1">
          <Link
            href={`/editor/${post.id}`}
            className="font-semibold hover:underline">
            {post.title?.toString()}
          </Link>
          <div>
            <p className="text-sm text-muted-foreground">
              {formatDate(post.xata.createdAt.toString())}
            </p>
          </div>
        </div>
        <PostOperationst
          actionType="project"
          id={post.id}
        />
      </div>
    </div>
  );
};

PostItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
