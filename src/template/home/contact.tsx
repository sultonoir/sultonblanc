"use client";

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { sendEmail } from "@/actions/post";

const formSchema = z.object({
  senderEmail: z.string().email(),
  message: z.string(),
});

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderEmail: "",
      message: "",
    },
  });

  const { status, execute } = useAction(sendEmail, {
    onSuccess: () => {
      toast.success("Email has been sent");
    },
    onError: (e) => {
      toast.error(e.fetchError);
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    execute(values);
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:sultonnoir@gmail.com">
          sultonnoir@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 flex flex-col justify-end space-y-2">
          <FormField
            control={form.control}
            name="senderEmail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="h-52"
                    placeholder="Your message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-blue-600 text-white outline-none transition-all hover:scale-110 hover:bg-blue-700 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-blue-600/75"
            disabled={status === "executing"}>
            {status === "executing" ? (
              <div className="size-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                Submit{" "}
                <PaperPlaneIcon className="-rotate-45 text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
              </>
            )}
          </Button>
        </form>
      </Form>
    </motion.section>
  );
}
