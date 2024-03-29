/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: '1540257937.rsc.cdn77.org',
            },
        ],
    },
};

export default nextConfig;
