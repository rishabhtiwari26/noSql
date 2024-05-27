const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  static save() {
    const db = getDb();
    db.collection("users").insertOne(this);
  }
  static findById(userId) {
    const db = getDb();
    db.collection("users")
      .find({ _id: new mongodb.ObjectId(userId) })
      .next()
      .then(user => {
        return user
      })
      .catch(err => {
        console.log(err)
      });
  }
}
function a() {
  console.log(a);
}
module.exports = User;
