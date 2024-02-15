"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { type ChangeEvent } from "react";
import { type ContextStore } from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

function Editor({ value, onChange }: EditorProps) {
  const { theme } = useTheme();

  const handleChange: (
    value?: string | undefined,
    event?: ChangeEvent<HTMLTextAreaElement> | undefined,
    state?: ContextStore | undefined
  ) => void = (newValue) => {
    if (typeof newValue === "string") {
      onChange(newValue);
    }
  };

  return (
    <div data-color-mode={theme ? theme : "light"}>
      <MDEditor
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Editor;
