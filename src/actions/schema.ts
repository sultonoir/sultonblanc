import { z } from "zod";
const contentSchema = z.object({
  category: z.string(),
  path: z.string(),
});

const formSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  image: z.string(),
  tag: z.array(z.string()).optional(),
  link: z.string().optional(),
  content: z.string().optional(),
  path: z.string(),
});

const deleteSchema = z.object({
  id: z.string(),
  path: z.string(),
});

const sendEmailSchema = z.object({
  senderEmail: z.string().email(),
  message: z.string(),
});

export { formSchema, contentSchema, deleteSchema, sendEmailSchema };
