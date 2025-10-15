const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Serverless Express!");
});
app.get("/home", (req, res) => {
  res.send("Hello Serverless less Express!");
});
app.post("/data", (req, res) => {
  res.json({ message: "Data received!" });
});

module.exports = app; // Export করব যাতে serverless handle করতে পারে
// module.exports.handler = require("serverless-http")(app);