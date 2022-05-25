var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("App running perfectly");
});

app.listen(3000);
console.log("Running on port: " + PORT);
