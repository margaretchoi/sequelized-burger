let connection = require("./connection.js");

console.log('ORM initiated');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];
  console.log("Num: "+num);

  for (let i = 0; i < num; i++) {
    arr.push("?");
    console.log("arr: "+arr.toString());
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {
  all: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);

      console.log('ALL', result);
    });
  },

  create: function(table, cols, vals, cb) {
    console.log(vals);
    // var queryString = "INSERT INTO " + table + ' (' + cols + ') ' + 'VALUES (' + vals + ')';
    var queryString = "INSERT INTO " + table
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log('Query string', queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
   },
};

module.exports = orm;