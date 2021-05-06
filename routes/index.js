const { requireAuth, setAuthToken, unsetAuthToken } = require("../controllers/auth");
const { User, Schedule } = require("../db/models");
require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

module.exports = (app) => {
  app.get("/", requireAuth, (req, res) => {
    // todo
      res.json(posts.filter(post => post.username === req.user.name))
    });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // if the user auths, let them in
    function requireAuth(req, res, next) {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]
      if (token == null) return res.sendStatus(401)
      
      // if not, give them error
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next()
      })
    }
 
  });

  app.get("/logout", (req, res) => {
    // do something with our tokens
    res.redirect("/login");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.post("/signup", (req, res) => {
    // if reg is valid, show a message and redirect to login
  });

  app.get("/user/:id", requireAuth, (req, res) => {
    const { id } = req.params;

    // if id is valid, get the schedule data linked to that id
  });

  app.get("/schedule", requireAuth, (req, res) => {
    // todo

    conn.query('SELECT * FROM schedules ORDER BY id desc',function(err,rows)     {
   
    
      if(err) {
       throw err;
          res.render('schedule',{data:""});   
      } else {
        console.log("Schedules work");
        res.render('schedule', {data: rows, days:days, title: "Schedules"});      }
  });
  
  });

  app.post("/schedule", requireAuth, (req, res) => {
    // todo
  });
};
