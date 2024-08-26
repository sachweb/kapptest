/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Optional: Ensures all URLs have a trailing slash (e.g., /about/ instead of /about)
    basePath: '/kapptest', // e.g. '/kavach-app'
    assetPrefix: '/kapptest/',
  
    images: {
        unoptimized: true,
 }
};

export default nextConfig;
