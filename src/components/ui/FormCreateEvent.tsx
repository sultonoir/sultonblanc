"use client";
import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ImagePlusIcon, Loader2, XIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { usePathname, useRouter } from "next/navigation";
import { Textarea } from "../ui/textarea";
import { type PostsRecord } from "@/xata";
import Editor from "./Editror";
import { formSchema } from "@/actions/schema";
import { updateContent } from "@/actions/post";

interface FormProps {
  post: PostsRecord | null | undefined;
}

const FormCreateEvent = ({ post: data }: FormProps) => {
  const path = usePathname();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data?.title ?? "",
      summary: data?.summary ?? "",
      image: data?.imageUrl?.url ?? "",
      tag: data?.tag ?? [],
      link: data?.link ?? "",
      content: data?.content ?? "",
      id: data?.id ?? "",
      path,
    },
  });

  //handle upload image
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      newFiles.forEach((file) => {
        if (!file.type.includes("image")) return;
        const fileReader = new FileReader();

        fileReader.onload = async (event) => {
          const imageDataUrl = event.target?.result?.toString() ?? "";
          fieldChange(imageDataUrl);
        };

        fileReader.readAsDataURL(file);
      });
    }
  };

  //handle tag
  const handleKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    fieldChange: (value: string[]) => void,
    fielValue: string[]
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const start: string[] = [];
      const value = e.currentTarget.value.trim(); // Use currentTarget to access the input element
      if (value !== "") {
        start.push(value);
        fieldChange([...fielValue, ...start]);

        // Optionally, clear the input field after pressing Enter
        e.currentTarget.value = "";
      }
    }
  };

  //handle delete tag
  const handleDeleteTag = (
    value: string,
    fieldChange: (value: string[]) => void,
    fieldvalue: string[]
  ) => {
    const prev = [...fieldvalue];
    const deleteValue = prev.filter((e) => e !== value);
    fieldChange(deleteValue);
  };

  //handle submit
  const router = useRouter();
  const { status, execute } = useAction(updateContent, {
    onSuccess: () => {
      toast.success("Content created");
      router.push("/sulton");
      form.reset();
    },
    onError: (e) => {
      toast.error(e.serverError?.toString());
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const plainData = JSON.parse(JSON.stringify(values));
    console.log(values);
    execute(plainData);
  }

  return (
    <div
      className="mx-auto my-5 w-full max-w-screen-md"
      id="#jajang">
      <div className="flex justify-end gap-2">
        <Button
          variant="secondary"
          onClick={() => router.back()}>
          Back
        </Button>
        <Button
          disabled={status === "executing"}
          onClick={form.handleSubmit(onSubmit)}>
          {status === "executing" ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Loading
            </>
          ) : (
            "Save"
          )}
        </Button>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex flex-col gap-2">
                    Image
                    <div className="relative flex h-[150px] w-full items-center justify-center rounded-lg border border-dashed lg:h-[270px]">
                      {field.value ? (
                        <Image
                          src={field.value}
                          fill
                          alt="image"
                          className="aspect-video object-contain"
                        />
                      ) : (
                        <ImagePlusIcon size={50} />
                      )}
                    </div>
                  </div>
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, field.onChange)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link project</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-2">
                      {field.value?.map((item) => (
                        <button
                          className="relative inline-flex items-center gap-2 rounded-full bg-blue-100 py-1 pl-3 pr-2 font-medium text-blue-800 active:scale-95 dark:bg-blue-600 dark:text-white"
                          key={item}
                          onClick={() =>
                            handleDeleteTag(
                              item,
                              field.onChange,
                              field.value ?? []
                            )
                          }>
                          {item}
                          <span className="rounded-full bg-accent p-1 text-blue-800 dark:text-white">
                            <XIcon size={15} />
                          </span>
                        </button>
                      ))}
                    </div>
                    <Input
                      placeholder="Javascript"
                      onKeyDown={(e) =>
                        handleKey(e, field.onChange, field.value ?? [])
                      }
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Summary</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-20"
                    placeholder="this support markdown"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-4">
                    <Editor
                      value={field.value ?? ""}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={status === "executing"}
            type="submit"
            className="w-full">
            create post
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormCreateEvent;
