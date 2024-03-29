"use server";
import { createSafeActionClient } from "next-safe-action";
import { revalidatePath } from "next/cache";
import {
  contentSchema,
  deleteSchema,
  formSchema,
  sendEmailSchema,
} from "./schema";
import { XataFile } from "@xata.io/client";
import slugify from "slugify";
import ContactFormEmail from "@/components/ui/ContactFormEmail";
import React from "react";
import { Resend } from "resend";
import { getXataClient } from "@/xata";
export const action = createSafeActionClient();
const xata = getXataClient();

export const createContent = action(
  contentSchema,
  async ({ category, path }) => {
    try {
      await xata.db.Posts.create({
        title: "Draft",
        category,
        link: "https://github.com/sultonoir",
        pubDate: new Date(),
      });
      revalidatePath(path);
      revalidatePath("/");
    } catch (err) {
      if (err instanceof Error) {
        return err;
      }
    }
  }
);

export const updateContent = action(
  formSchema,
  async ({ id, title, summary, content, image, tag, link, path }) => {
    const base64Only = image?.replace(/^data:image\/\w+;base64,/, "") ?? "";

    try {
      await xata.db.Posts.update({
        id,
        title: title,
        summary: summary,
        content: content,
        imageUrl: XataFile.fromBase64(base64Only),
        tag: tag,
        link: link,
        slug: slugify(title),
      });
      revalidatePath(path);
    } catch (err) {
      if (err instanceof Error) {
        return err;
      }
    }
  }
);

export const deleteContent = action(deleteSchema, async ({ id, path }) => {
  try {
    await xata.db.Posts.delete(id);
    revalidatePath(path);
    revalidatePath("/");
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
});

export const sendEmail = action(
  sendEmailSchema,
  async ({ senderEmail, message }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "sultonalidrus5@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail,
        react: React.createElement(ContactFormEmail, {
          message: message,
          senderEmail: senderEmail,
        }),
      });
    } catch (error) {
      return error;
    }
  }
);
