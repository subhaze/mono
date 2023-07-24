const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const httpProxy = require("http-proxy");
const appProxy = httpProxy.createProxyServer();

const PORT = process.env.PORT ?? 8443;

const rootServer = "http://localhost:3001",
	apiServer = "http://localhost:3002",
	routeServer = "http://localhost:3003";

const appDomains = {
	"faulty-technology.127local.host": "http://localhost:3000",
	"asocial-network.127local.host": "http://localhost:3001",
};

app.get("/route*", function (req, res) {
	appProxy.web(req, res, { target: routeServer });
});

app.get("/api*", function (req, res) {
	appProxy.web(req, res, { target: apiServer });
});

app.post("/api*", function (req, res) {
	appProxy.web(req, res, { target: apiServer });
});

app.get("/*", function (req, res) {
	const domain = appDomains[`${req.headers.host}`.replace(`:${PORT}`, '')];
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
		console.log("server is runing at port 4000");
	});
