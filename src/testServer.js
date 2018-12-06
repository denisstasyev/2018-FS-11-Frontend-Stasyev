const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

// default options
app.use(fileUpload());
// app.use(express.static("dist"));
// app.use(express.static("dist/create"));

app.post("/message", function(req, res) {
  let i = 0;
  while (i < 100000005) {
    i++;
  }
  var result = Promise.resolve();
  if (typeof req.headers.origin === "string") {
    console.log(req.body);
    res.set("Access-Control-Allow-Origin", req.headers.origin);
  }
  if (req.files != null) {
    if (Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    let sampleFile = req.files.file;
    var filename = sampleFile.name;
    console.log(filename);

    result = new Promise((resolve, reject) => {
      sampleFile.mv("../../Downloads/" + filename, function(err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }
  result
    .then(() => res.send('{"status":"ok"}'))
    .catch(err => res.status(500).send(err));
});

app.listen("8082", function() {
  console.log("Listening on url http://127.0.0.8082");
});
