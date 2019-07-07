// Foundational Imports
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

// Aphrodite
// NOTES: Aphrodite requires a slightly different approach to support server-side rendered CSS.
// This approach is implemented below.
import { StyleSheetServer } from "aphrodite";

// React Components
import App from "../components/App";

// Define the port for the server
const PORT = 5050;

// Setup the serving using express
const server = express();

// Tell express it can find main.js in the "/dist" folder
server.use(express.static("dist"));

// GET REQUEST
server.get("/", (req, res) => {
  // Incorporate Aphrodite's StyleSheetServer.renderStatic() function into the standard ReactDomServer function
  const { html, css } = StyleSheetServer.renderStatic(() => {
    return ReactDOMServer.renderToString(<App />);
  });

  // Send the response, injecting the css content into the head and html into the body
  res.send(`
		<html>
			<head>
				<title>SSR React App</title>
            	<style data-aphrodite>${css.content}</style>
        	</head>
			<body>
				<div id="mountnode">${html}</div>
				<script src="/main.js"></script>
			</body>
		</html>
	`);
});

server.listen(PORT, () => console.log("Server on."));
