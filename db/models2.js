/*const { setAuthToken, getHashedPassword } = require("../controllers/auth");

module.exports.User = {
  // function 1: call to db to get user info by passing their id
  // function 2: auth the user (for login)
  // function 3: validate a new sign-up
};

module.exports.Schedule = {
  // function 1: get all schedules
  // function 2: get all schedules for logged in user
  // function 3: create new schedule entry
};*/
const db = require('../db/config');

//const Cart = require('./cart');

//------------------------ USERS -------------------------//
//--------------------------------------------------------//
//link the tags in my database to the User function

module.exports = class User {
  constructor(id, fullname, surname, email, password) {
    this.id = id;
    this.fullname = fullname;
    this.surname = surname;
    this.email = email;
    this.pasword = password;
  }

//insert users in my database

  save() {
    return db.execute(
      'INSERT INTO users (fullname, surname, email, password) VALUES (?, ?, ?, ?)',
      [this.fullname, this.surname, this.email, this.password]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM users');
  }

  static findById(id) {}
};
