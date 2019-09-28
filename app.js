const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");

const port = 8080;

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(fileUpload());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "./client/build")));

app.post("/getFile", (req, res, next) => {
  console.log(req.files);
  let uploadFile = req.files.file;
  const fileName = req.files.file.name;
  console.log(uploadFile);
  uploadFile.mv(`${__dirname}/client/public/uploads/${fileName}`);
  res.end();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log("server is listening");
});
