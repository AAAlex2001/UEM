import type { NextConfig } from "next";

const rawBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBase ? `/${rawBase.replace(/^\/+|\/+$/g, "")}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
