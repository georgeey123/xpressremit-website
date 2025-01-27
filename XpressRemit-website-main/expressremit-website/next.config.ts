import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  // Add basePath if you're not serving from the root
  basePath: "",
  // Add trailingSlash for consistent URL handling
  trailingSlash: true,
};

export default config;