const isProd = process.env.NODE_ENV === "production";
const repo = process.env.NEXT_PUBLIC_BASE_PATH; // e.g. 'TestLab'

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isProd && {
    output: 'export',
    // assetPrefix: `/${repo}/`,   // → '/TestLab/'
    // basePath: `/${repo}`,        // → '/TestLab'
    assetPrefix:"",
    basePath:""
  }),
};

module.exports = nextConfig;

