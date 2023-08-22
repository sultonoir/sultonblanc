import { prisma } from "@/lib/prisma";
import { initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";
import superjson from "superjson";
import z from "zod";
import { hash } from "bcryptjs";
import { pusherServer } from "@/lib/pusher";
import { authOptions } from "../auth/[...nextauth]/options";
import { createClient, groq } from "next-sanity";
import { Project } from "@/types";

const t = initTRPC.create({
  transformer: superjson,
});

const publicProcedure = t.procedure;

export const appRouter = t.router({
  getUsers: publicProcedure.query(async () => {
    const session = await getServerSession(authOptions);
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user.email as string,
      },
    });
    return user;
  }),
  postUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const hashedPassword = await hash(input.password, 10);
      const createUser = prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          hashedPassword,
        },
      });
      pusherServer.trigger("test", "name", createUser);
      return createUser;
    }),
  deletUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const userdelet = await prisma.user.delete({
        where: {
          id: input.id,
        },
      });
      return userdelet;
    }),
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

export type AppRouter = typeof appRouter;
