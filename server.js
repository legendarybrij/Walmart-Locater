var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv');
var exphbs = require('express-handlebars');
var path = require('path');
var PORT = process.env.PORT || 8080;

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.get('/', function (req, res) {
  res.send('Hello!');
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Models
var models = require("./models");

// Routes
var authRoute = require('./routes/auth.js')(app, passport);

// Load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// Sync Database
models.sequelize.sync().then(function () {
  console.log('Database looks fine')

}).catch(function (err) {
  console.log(err, "Something went wrong with the Database")
});

app.listen(8080, function (err) {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
