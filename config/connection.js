var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "upyg6ci1vvhvduuf",
    password: "kgnjhrrh8wusl1xf",
    database: "m4wtbfzml1qlrekq"
});

connection.connect(function(err) {
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;