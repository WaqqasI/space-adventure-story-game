/**
 * Main file where the server runs
 */

// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("dist"));
app.use(express.static("Documentation/output/adventure/1.0.1"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/dist/index.html");
});
app.get("/docs", function(request, response) {
  response.sendFile(
    __dirname + "/Documentation/output/adventure/1.0.1/index.html"
  );
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
