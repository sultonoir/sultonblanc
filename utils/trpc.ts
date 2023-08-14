import type { AppRouter } from "@/app/api/trpc/root";
import { createTRPCReact } from "@trpc/react-query";

export const api = createTRPCReact<AppRouter>();
