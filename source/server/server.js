import express from "express";
import React from "react";
import ReactDOMServer from "react-deom/server";
import App from "../components/App";

const PORT = 4040;

const server = express();
server.use(express.static("dist"));

server.get("/", (req, res) => {
  let IM = ReactDOMServer.renderToString(<App />);

  res.send(`
		<html>
			<head>
				<title>SSR React App</title>
			</head>
			<body>
				<div id=”mountnode”>${IM}</div>
				<script src=”/main.js”></script>
			</body>
		</html>
	`);
});

server.listen(PORT, () => console.log("Server on."));
