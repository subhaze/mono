module.exports = {
	reactStrictMode: true,
	rewrites() {
		return {
			beforeFiles: [
				{
					source: "/:path*{/}?",
					has: [
						{
							type: "host",
							value: "(?<is>.*).useless.today",
						},
					],
					destination: "/:path*?is=:is",
				},
			],
		};
	},
};
