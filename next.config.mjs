/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-southeast-2.storage.xata.sh",
      },
    ],
  },
};

export default nextConfig;
