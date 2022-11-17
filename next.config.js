/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return{
      fallback:[
        {
          source: '/:path*',
          destination: 'http://localhost:4000/:path*',
        },
      ]
    }
  },
};
module.exports = nextConfig;
