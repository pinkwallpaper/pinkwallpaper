/** @type {import('next').NextConfig} */
const nextConfig = {
  // 构建配置
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
    serverActions: {
      bodySizeLimit: '10mb', // 增加Server Actions的body size限制以支持大图片
    },
  },
  
  // 页面配置
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  images: {
    domains: ['img.pinkwallpaper.org','images.pexels.com','fal.media','siliconflow-maas.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pinkwallpaper.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fal.media',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*.bfl.ai',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'siliconflow-maas.s3.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'delivery-us1.bfl.ai',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // 缓存至少60秒
    //dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
  },
}

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl(nextConfig); 