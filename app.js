const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const path = require("path");

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/getFile", (req, res) => {
  console.log("hello here");
  res.end();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log("server is listening");
});
