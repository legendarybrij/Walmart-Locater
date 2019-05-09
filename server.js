require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
var path = require("path");
var mysql = require("mysql");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv").load();

var PORT = process.env.PORT || 3000;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "userdb"
//   });
// }

// Sync Database
// db.sequelize.sync().then(function () {
//   console.log("Database looks fine")
// }).catch(function (err) {
//   console.log(err, "Something went wrong with the Database Update!")
// });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));

// Passport
app.use(session({ secret: "secret", resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// app.get("/", function (req, res) {
//   res.send("Passport with Sequelise");
// });

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/auth.js")(app);

// Models
var db = require("./models");

// app.listen(5000, function (err) {

//   if (!err)
//     console.log("Thumbs up, site works");
//   else console.log(err)

// });

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
