/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "components", replacement: "/src/components" },
      { find: "context", replacement: "/src/context" },
      { find: "pages", replacement: "/src/pages" },
      { find: "store", replacement: "/src/store" },
      { find: "util", replacement: "/src/util" },
    ],
  },
});
