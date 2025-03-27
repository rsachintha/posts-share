/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bfpf9f5c3k.ufs.sh"], // Add your image host here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bfpf9f5c3k.ufs.sh",
        pathname: "/f/**",
      },
    ],
  },
};

export default nextConfig;
