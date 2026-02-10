import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // 输出模式：导出为静态 HTML
  output: 'export',
  
  // 图片优化：静态导出时需要禁用
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lf-coze-web-cdn.coze.cn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'code.coze.cn',
        pathname: '/**',
      },
    ],
  },
  
  // 允许的开发源
  allowedDevOrigins: ['*.dev.coze.site'],
};

export default nextConfig;
