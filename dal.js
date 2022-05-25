const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
// const url = "mongodb://localhost:27017";
const url = "mongodb+srv://napo:12345@ultrabank-database.gpddg.mongodb.net/usersdata?retryWrites=true&w=majority";

let db = null;

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to db server");

  // connect to myproject database
  db = client.db("myproject");
});

// create user account using the collection.insertOne function

function create(name, email) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    const doc = {
      name,
      email,
      accountNumber: Math.floor(10000000 + Math.random() * 90000000).toString(),
      balance: 0,
      gender: null,
      dob: null,
      phoneNumber: null,
      address: null,
    };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}

// create transactions using the collection.insertOne function
function createTransaction(transaction) {
  const newTransaction = JSON.parse(transaction);
  return new Promise((resolve, reject) => {
    const collection = db.collection("transactions");
    collection.insertOne(newTransaction, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(newTransaction);
    });
  });
}

// find transactions by user email
function findTransactions(email) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("transactions")
      .find({ email: email })
      .sort({ date: -1 })
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

// find user account
function findOne(email) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .findOne({ email: email })
      .then((doc) => resolve(doc))
      .catch((err) => reject(err));
  });
}

// update - deposit/withdraw amount
function update(email, amount) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .findOneAndUpdate(
        { email: email },
        { $inc: { balance: amount } },
        { returnOriginal: false },
        function (err, documents) {
          err ? reject(err) : resolve(documents);
        }
      );
  });
}

// edit profile
function editProfile(email, user) {
  const newProfile = JSON.parse(user);
  return new Promise((resolve, reject) => {
    const customers = db.collection("users").findOneAndUpdate(
      { email: email },
      {
        $set: {
          name: newProfile.name,
          gender: newProfile.gender,
          dob: newProfile.dob,
          phoneNumber: newProfile.phoneNumber,
          address: newProfile.address,
        },
      },
      { returnOriginal: false },
      function (err, documents) {
        err ? reject(err) : resolve(documents);
      }
    );
  });
}

// return all users by using the collection.find method
function all() {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

module.exports = {
  create,
  findOne,
  update,
  editProfile,
  createTransaction,
  all,
  findTransactions,
};
