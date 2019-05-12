var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load dashboard page
  // app.get("/", function (req, res) {
  //   db.db.findAll({}).then(function (Sequelize) {
  //     res.render("dashboard", {
  //       msg: "Welcome!",
  //       Sequelize: Sequelize
  //     });
  //   });
  // });

  // Routing sign up
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // Routing sign in
  app.get("/signin", function (req, res) {
    res.render("signin");
  });

  // Routing log out
  app.get("/", function (req, res) {
    res.render("logout");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
