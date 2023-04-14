import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "fvctugb0",
  dataset: "production",
  title: "My personal website",
  apiVersion: "2023-04-13",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;