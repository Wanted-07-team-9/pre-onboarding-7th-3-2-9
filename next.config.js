/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: 'https://wanted-3-2-9-json-server.herokuapp.com/:path*',
        },
      ],
    };
  },
};

module.exports = nextConfig;
