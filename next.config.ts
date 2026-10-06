import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Dev-server only: keep every route's compiled output warm in memory for
  // the whole session instead of the default (5 pages, 60s idle) — with a
  // handful of routes, that default was evicting pages you'd already
  // visited, forcing a full Turbopack recompile when you navigated back.
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 20,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70],
  },
};

export default nextConfig;
