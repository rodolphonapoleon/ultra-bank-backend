var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
const admin = require("./admin");
const router = require("./routes/main");
require("dotenv").config();

const PORT = process.env.PORT;

// used to serve static files from public directory
app.use(express.static("public"));
app.use(cors());

// for testing purposes
app.use("/", router);

// app.get("/", (req, res) => {
//   res.status(200).send("The bank app server is running properly");
// });

// create user account
app.get("/account/create/:name/:email", function (req, res) {
  // check if account exists
  dal.find(req.params.email).then((users) => {
    // if user exists, return error message
    if (users.length > 0) {
      console.log("User already in exists");
      res.send("User already in exists");
    } else {
      // else create user
      dal.create(req.params.name, req.params.email).then((user) => {
        console.log(user);
        res.send(user);
      });
    }
  });
});

// login user
app.get("/account/login/:email/:password", function (req, res) {
  dal.find(req.params.email).then((user) => {
    // if user exists, check password
    if (user.length > 0) {
      if (user[0].password === req.params.password) {
        res.send(user[0]);
      } else {
        res.send("Login failed: wrong password");
      }
    } else {
      res.send("Login failed: user not found");
    }
  });
});

// find user account
app.get("/account/find/:email", function (req, res) {
  dal.find(req.params.email).then((user) => {
    // console.log(user);
    res.send(user);
  });
});

// find one user by email - alternative to find
app.get("/account/findOne/:email", function (req, res) {
  dal.findOne(req.params.email).then((user) => {
    // console.log(user);
    res.send(user);
  });
});

// update - deposit/withdraw amount
app.get("/account/update/:email/:amount", function (req, res) {
  var amount = Number(req.params.amount);
  //get idToken from request header
  const idToken = req.headers.authorization;
  console.log(idToken);
  // verify token
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      console.log("decodedToken:", decodedToken);
      dal.update(req.params.email, amount).then((response) => {
        console.log(response);
        res.send(response);
      });
    })
    .catch(function (error) {
      // console.log("error:", error);
      res.sendStatus(401).send("Authentication Fail!");
    });
});

// all accounts
app.get("/account/all", function (req, res) {
  dal.all().then((docs) => {
    // console.log(docs);
    res.send(docs);
  });
});

// var port = 3000;
app.listen(PORT);
console.log("Running on port: " + PORT);
// module.exports = app;
