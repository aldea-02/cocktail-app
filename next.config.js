/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.thecocktaildb.com',
				port: '',
				pathname: '/images/**'
			}
		]
	}
}

module.exports = nextConfig
