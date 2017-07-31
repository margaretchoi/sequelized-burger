var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var burgerObject = {
		  burgers: data
		};
		res.render("index", burgerObject);
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burger.update({
		devoured: true
		}, condition, function() {
		res.redirect("/");
	});
});

router.post("/", function(req, res) {
  	burger.create(
  		"burger_name",
	    [req.body.name], 
	    function() {
		    res.redirect("/");
	});
});


module.exports = router;