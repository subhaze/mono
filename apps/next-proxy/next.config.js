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
					has: [{ type: "host", value: "notthecereal-life.127local.host" }],
					destination: "http://localhost:3003/:path*",
				},
			],
		};
	},
};
