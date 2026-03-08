/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'medium.com',
            },
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn-images-1.medium.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
            },
        ],
    },
};

export default nextConfig;
