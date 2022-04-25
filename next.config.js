/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://community.b00st.com',
        permanent: true,
      },
      {
        source: '/:slug*',
        destination: 'https://community.b00st.com',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
