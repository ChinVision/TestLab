/** @type {import('next').NextConfig} */
const repoName = 'TestLab';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // 导出静态资源
  trailingSlash: true,        // 生成的每个页面都会带上 /index.html，保证路由正常
  // --- 发布路径 ---
  basePath: `/${repoName}`,   // 网站根路径前缀
  assetPrefix: `/${repoName}/`,// 静态资源（js/css/image）路径前缀
  //distDir: 'out',  // 可选：指定自定义导出目录
  images: {
    // ❌ 禁用所有优化
    unoptimized: true,
    // 如果你还想继续允许远程域名加载，则保留 remotePatterns
    // remotePatterns: [ … ],
  },
};

module.exports = nextConfig;
