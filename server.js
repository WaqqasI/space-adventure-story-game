/**
 * @file Main file where the server runs by making a http server.
 */


const express = require("express");
const app = express();
const Documentation = "Documentation/output/adventure/1.1.0"


app.use(express.static("dist"));
app.use(express.static(Documentation));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/dist/index.html");
});
app.get("/docs", function(request, response) {
  response.sendFile(
    __dirname + "/"+Documentation
  );
});
// listen for requests 
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
