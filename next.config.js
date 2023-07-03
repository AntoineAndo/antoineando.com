/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
