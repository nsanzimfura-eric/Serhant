/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: process.env.NEXT_PUBLIC_WHITELIST_ORIGINS?.split(",")?.map(
      (origin) => ({
        protocol: origin.split(":")[0],
        hostname: origin.split("/")[2].split(":")[0],
        port: origin.split(":")[2]?.split("/")[0] || "",
      })
    ),
  },
};

module.exports = nextConfig;
