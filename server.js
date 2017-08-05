let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require('method-override');

let app = express();
let port = process.env.PORT || 3000;

let db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride('_method'));

let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let connection = require("./config/connection.js");

require("./controller/burgerController.js")(app);

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});