/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/kapptest',  
    assetPrefix: '/kapptest/',  
  
    images: {
        unoptimized: true,  // Needed for static site exports with Next.js
    }
};

export default nextConfig;