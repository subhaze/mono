module.exports = {
	reactStrictMode: true,
	rewrites() {
		return {
			beforeFiles: [
				{
					source: "/:path*",
					has: [{ type: "host", value: "faulty-technology.127local.host" }],
					destination: "http://localhost:3000/:path*",
				},
				{
					source: "/:path*",
					has: [{ type: "host", value: "asocial-network.127local.host" }],
					destination: "http://localhost:3001/:path*",
				},
				{
					source: "/:path*",
					has: [{ type: "host", value: "belowthefold-rocks.127local.host" }],
					destination: "http://localhost:3002/:path*",
				},
				{
					source: "/:path*",
					has: [{ type: "host", value: "itsnotthecereal-life.127local.host" }],
					destination: "http://localhost:3003/:path*",
				},
				{
					source: "/:path*",
					has: [{ type: "host", value: "itsthecereal-life.127local.host" }],
					destination: "http://localhost:3004/:path*",
				},
				{
					source: "/:path*{/}?",
					has: [
						{
							type: "host",
							value: "(?<is>.*)-useless-today.127local.host",
						},
					],
					destination: "http://localhost:3005/:path*?is=:is",
				},
			],
		};
	},
};
