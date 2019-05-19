var db = require("../models");
var axios = require('axios');
require("dotenv").config();
var keys = require("../keys");
var walmart = keys.walmart;

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });


  app.get('/api/test/:queryRequest', (req,res) => {
    var queryRequest = req.params.queryRequest
    // console.log(queryRequest)
    //var queryURL= "https://api.ebay.com/commerce/taxonomy/v1_beta/category_tree/{category_tree_id}/get_category_suggestions?q="+queryRequest;
    
    var queryURL = "http://api.walmartlabs.com/v1/search?query="+queryRequest+"&format=json&apiKey="+walmart.id;

    axios.get(queryURL)
    .then((data) => {
      res.json(data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })



};
