let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
var path = require("path");

let port = process.env.PORT || 3000;

let app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = require("./config/connection.js");

var routes = require("./controller/burgerController.js");
app.use("/", routes);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

