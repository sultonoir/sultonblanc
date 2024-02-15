"use server";

import { XataClient } from "@/xata";
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
export const action = createSafeActionClient();
const xata = new XataClient();

export const createContent = action(
  contentSchema,
  async ({ category, path }) => {
    try {
      await xata.db.Posts.create({
        title: "Draft",
        category,
        pubDate: new Date(),
      });
      revalidatePath(path);
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
      if (title) {
        await xata.db.Posts.update({
          id,
          title: title,
          slug: slugify(title),
        });
        revalidatePath(path);
      } else if (summary) {
        await xata.db.Posts.update({
          id,
          summary: summary,
        });
        revalidatePath(path);
      } else if (content) {
        await xata.db.Posts.update({
          id,
          content: content,
        });
        revalidatePath(path);
      } else if (image) {
        await xata.db.Posts.update({
          id,
          imageUrl: XataFile.fromBase64(base64Only),
        });
        revalidatePath(path);
      } else if (tag) {
        await xata.db.Posts.update({
          id,
          tag: tag,
        });
        revalidatePath(path);
      } else if (link) {
        await xata.db.Posts.update({
          id,
          link: link,
        });
        revalidatePath(path);
      } else {
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
      }
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
