const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const httpProxy = require("http-proxy");
const appProxy = httpProxy.createProxyServer();

const PORT = process.env.PORT ?? 8443;
const BASE_DOMAIN = process.env.BASE_DOMAIN || '127local.host';

const appDomain = new Map();

appDomain.set(`faulty-technology.${BASE_DOMAIN}:${PORT}`, `http://localhost:3000`);
appDomain.set(`asocial-network.${BASE_DOMAIN}:${PORT}`, `http://localhost:3001`)

app.get("/*", function (req, res) {
	const domain = appDomain.get(req.headers.host);
	if (domain) {
		appProxy.web(req, res, { target: domain });
	} else {
    res.send(`Domain unknown: ${domain}`)
  }
});
https
	.createServer(
		{
			key: fs.readFileSync("./tls/key.pem"),
			cert: fs.readFileSync("./tls/cert.pem"),
		},
		app
	)
	.listen(PORT, () => {
		console.log("server is running at port 4000");
	});
