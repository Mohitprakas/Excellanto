import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

export default defineConfig({
  name: "excellanto-cms",
  title: "Excellanto CMS",
  projectId: projectId ?? "",
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  vite: {
    envDir: "..",
    envPrefix: ["SANITY_STUDIO_", "NEXT_PUBLIC_"],
  },
});
