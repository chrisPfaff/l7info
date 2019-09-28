const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const fileUpload = require("express-fileupload");

const port = 8080;

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

let fileBuffer;

app.use(fileUpload());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "./client/build")));

const run = () => {
  console.log(fileBuffer);
};

app.post("/getFile", (req, res, next) => {
  const uploadFile = req.files.file;
  res.send(uploadFile.data.toString().replace(/(\r\n|\n|\r|\t)/gm, " "));
  // uploadFile.mv(`${__dirname}/client/public/uploads/${fileName}`);
  // fs.readFile(uploadFile, (error, data) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     fileBuffer = data;
  //   }
  // });
  // run();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log("server is listening");
});
