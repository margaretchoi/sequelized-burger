let express = require("express");
let db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // HTML Routes
  app.get("/", function(req, res) {
  	db.Burger.findAll({}).then(function(data) {
      let burgerObj = {
          burgers:data //data is a array of objects
      };
  	  res.render("index", burgerObj);
  	});
  });

  // POST route for saving a new burger
  app.post("/", function(req, res) {
  	db.Burger.create(req.body).then(function(data) {
      res.redirect("/");
    });
  });

  // DELETE route for deleting burgers. You can access the burger's id in req.params.id
  app.delete("/:id", function(req, res) {
  	db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.redirect("/");
    });
  });

  // PUT route for updating burgers. The updated burger will be available in req.body
  app.put("/:id", function(req, res) {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
        res.redirect("/");
      });
  });

};
