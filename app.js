const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "uploads/" });

const port = 8080;

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "./client/build")));

app.post("/getFile", upload.single("file"), (req, res, next) => {
  res.end();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log("server is listening");
});
