var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load dashboard page
  app.get("/dashboard", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("dashboard", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Routing sign up
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // Routing sign in
  app.get("/signin", function (req, res) {
    res.render("signin");
  });

  // Routing log out
  app.get("/logout", function (req, res) {
    res.render("/");
  });

  // Routing about us
  app.get("/about", function (req, res) {
    res.render("about");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  

};
