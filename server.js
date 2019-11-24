"use strict";

var express = require("express");
var cors = require("cors");
var multer = require("multer");
var upload = multer();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), function(req, res, next) {
  const { originalname, mimetype, size } = req.file;
  return res.send({
    name: originalname,
    type: mimetype,
    size
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Node.js listening ...");
});
