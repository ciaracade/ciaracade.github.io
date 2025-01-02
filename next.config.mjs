/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["assets.aceternity.com", "tailwindflex.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com", 
      },
    ],
  },
};

export default nextConfig;
