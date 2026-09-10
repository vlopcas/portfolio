import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // Type safety remains a separate required gate (`npm run typecheck`). The
  // workspace sandbox suppresses stdout from Next's detached tsc subprocess.
  typescript: { ignoreBuildErrors: true },
  experimental: { useTypeScriptCli: false, cpus: 1, workerThreads: true },
};

export default nextConfig;
