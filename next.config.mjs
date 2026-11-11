/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['swiper', 'lucide-react', 'react-icons'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd28s0oekm6yyba.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
