import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The parent home directory is a git repo, so Next would otherwise
  // walk upward and ignore this project's lockfile.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
