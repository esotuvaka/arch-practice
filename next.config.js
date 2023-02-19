/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'oaidalleapiprodscus.blob.core.windows.net'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
