import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true, // 301 永久重定向（SEO友好）
      },
    ];
  },
  images: {
    domains: ["i.imgur.com", "images.unsplash.com", "huaban.com"],
  },
};

export default nextConfig;
