var connection = require("./connection.js");

var orm = {
    selectAll: function() {
        // select * from burgers_db;
    },
    insertOne: function() {
        // insert into burgers (burger_name, devoured) values (?, ?);
    },
    updateOne: function() {
        // update burgers where id = ?;
    }
};

module.exports = orm;