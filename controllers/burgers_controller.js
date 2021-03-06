var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// This route works normally. Lets me add a new burger to the list.
router.post("/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
        // Send back the ID of the new quote
        //res.json({ id: result.insertId });
        res.redirect("/");
    });
});
/* This is the route I am having issues getting to work properly. 
I keep getting this warning: Cannot POST /burgers/1. */
router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
            //devoured: true
        },
        condition,
        function(result) {
            /* if(result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end(); */
            res.redirect("/");   
        }
    );
});

// Export routes for server.js to use
module.exports = router;