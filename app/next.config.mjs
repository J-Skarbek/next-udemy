/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['jskarbek--nextjs-demo-users-image.s3.us-east-2.amazonaws.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'jskarbek--nextjs-demo-users-image.s3.us-east-2.amazonaws.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;
