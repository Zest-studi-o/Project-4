const { requireAuth, setAuthToken, unsetAuthToken } = require("../controllers/auth");
const { User, Schedule } = require("../db/models");

module.exports = (app) => {
  app.get("/", requireAuth, (req, res) => {
    // todo
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // if the user auths, let them in

    // if not, give them error
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
  });

  app.post("/schedule", requireAuth, (req, res) => {
    // todo
  });
};
