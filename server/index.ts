import { createClient, groq } from "next-sanity";
import { publicProcedure, router } from "./trpc";
import { Project } from "@/types";

export const AppRouter = router({
  getProject: publicProcedure.query(async (): Promise<Project[]> => {
    const client = createClient({
      projectId: "5wjbt837",
      dataset: "production",
      apiVersion: "2023-03-04",
    });
    return client.fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    );
  }),
});

export type AppRouter = typeof AppRouter;
