const isProd = process.env.NODE_ENV === "production";
const repo = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    output: 'export',
    assetPrefix: `/${repo}/`,
    basePath: `/${repo}`,
  }),
};

module.exports = nextConfig;
