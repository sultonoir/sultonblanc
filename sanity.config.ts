import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
  projectId: "5wjbt837",
  dataset: "production",
  apiVersion: "2023-03-04",
  title: "portfolio-next",
  basePath: "/admin",

  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
