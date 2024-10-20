const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to our server dashboard!");
});

app.post("/", (req, res) => {
  console.log(req.query);
  res.res(200).send("Successfully Data RECEIVED");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
