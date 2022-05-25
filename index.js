var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");

const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("App running perfectly");
});

// create user account
app.get("/account/create/:name/:email", function (req, res) {
  dal.create(req.params.name, req.params.email).then((user) => {
    res.send(user);
  });
});

// create TRANSACTION
app.get("/account/createtransaction/:transaction", function (req, res) {
  dal.createTransaction(req.params.transaction).then((transaction) => {
    res.send(transaction);
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
app.get("/account/update/:email/:amount", function (req, res) {
  var amount = Number(req.params.amount);
  dal.update(req.params.email, amount).then((response) => {
    res.send(response);
  });
});

//edit Profile
app.get("/account/edit/:email/:user", function (req, res) {
  dal.editProfile(req.params.email, req.params.user).then((response) => {
    res.send(response);
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
