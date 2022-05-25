var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
const admin = require("./admin");

const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("App running perfectly");
});

app.post("/account/create/:name/:email", function (req, res) {
  const idToken = req.headers.authorization;
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      //create transaction
      dal.create(req.params.name, req.params.email).then((user) => {
        res.send(user);
      });
    })
    .catch(function (error) {
      // console.log("error:", error);
      res.sendStatus(401).send("Authentication Fail!");
    });
});

// create TRANSACTION
app.post("/account/createtransaction/:transaction", function (req, res) {
  const idToken = req.headers.authorization;
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      //create transaction
      dal.createTransaction(req.params.transaction).then((transaction) => {
        res.send(transaction);
      });
    })
    .catch(function (error) {
      // console.log("error:", error);
      res.sendStatus(401).send("Authentication Fail!");
    });
});

//find transactions by user email
app.get("/account/findTransactions/:email", function (req, res) {
  dal.findTransactions(req.params.email).then((response) => {
    res.send(response);
  });
});

// find one user by email - alternative to find
app.get("/account/findOne/:email", function (req, res) {
  dal.findOne(req.params.email).then((user) => {
    res.send(user);
  });
});

// update - deposit/withdraw amount
app.put("/account/update/:email/:amount", function (req, res) {
  var amount = Number(req.params.amount);
  //get idToken from request header
  const idToken = req.headers.authorization;
  // verify token
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      dal.update(req.params.email, amount).then((response) => {
        res.send(response);
      });
    })
    .catch(function (error) {
      res.sendStatus(401).send("Authentication Fail!");
    });
});

//edit Profile
app.put("/account/edit/:email/:user", function (req, res) {
  //get idToken from request header
  const idToken = req.headers.authorization;
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      console.log("decodedToken:", decodedToken);
      dal.editProfile(req.params.email, req.params.user).then((response) => {
        res.send(response);
      });
    })
    .catch(function (error) {
      res.sendStatus(401).send("Authentication Fail!");
    });
});

// all accounts
app.get("/account/all", function (req, res) {
  dal.all().then((docs) => {
    res.send(docs);
  });
});

app.listen(PORT);
console.log("Running on port: " + PORT);
