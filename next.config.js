// CONFIG
const nextConfig = {
	images: {
		remotePatterns: [
      { protocol: 'http', hostname: 'localhost:3000', pathname: '**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '**' },
      { protocol: 'https', hostname: 'nf002-hegr-website-space-pro.fra1.digitaloceanspaces.com', pathname: '**' },
      { protocol: 'https', hostname: 'nf002-hegr-website-space-dev.fra1.digitaloceanspaces.com', pathname: '**' },
    ],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
}

// EXPORTS
module.exports = nextConfig;
