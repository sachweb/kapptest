/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Optional: Ensures all URLs have a trailing slash (e.g., /about/ instead of /about)
    basePath: '/https://github.com/sachweb/kapptest', // e.g. '/kavach-app'
    assetPrefix: '/https://github.com/sachweb/kapptest/',
  
    images: {
        unoptimized: true,
 }
};

export default nextConfig;
