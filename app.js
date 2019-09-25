const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "./client/public", "index.html"));
});

app.listen(port, () => {
  console.log("server is listening");
});
