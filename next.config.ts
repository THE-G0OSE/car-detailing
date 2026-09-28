import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: {
    loader: "custom",
    loaderFile: "./src/shared/lib/imageLoader.ts",
  },
  reactCompiler: true,
  allowedDevOrigins: ['198.18.0.1']
};

export default nextConfig;
