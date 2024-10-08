const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://subashlmch:subashlmch@cluster0.jctz949.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((client) => {
      _db = client.db();
      if (_db) {
        console.log("connected");
      } else {
        console.log("not connected");
      }
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
