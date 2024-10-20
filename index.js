const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to our server dashboard!");
});

app.post("/", (req, res) => {
  console.log(req.query);
  res.status(200).send("Successfully Data RECEIVED");
});

module.exports = app;
