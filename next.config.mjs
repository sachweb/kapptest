/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Optional: Ensures all URLs have a trailing slash (e.g., /about/ instead of /about)
  basePath: '',
    images: {
        unoptimized: true,
 }
};

export default nextConfig;
