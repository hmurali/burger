# burger
A burger eating application with Node.js/Express/MySQL/Handlebars.

## Description
This application models a simple full stack application with a front end powered by HTML/CSS and the backend powered by Node.js and Express. HTML templating is done with Handlebars.

The user may enter any burger name to add it to the menu. This also inserts the new burger record into the MySQL DB. The initial burger record is added as *available* on the menu and placed on the left side of the screen. The user may then eat any burger by clicking *Devour It* next to the burger of their choosing, which moves it to the *devoured* column and sets its devoured status to true in the database.

## Demo
A demo of the burger eating application can be found [here]().

## Installation
To run the application locally, first clone this repository with the following command:
`git clone git@github.com:hmurali/burger.git`

Next, install the application dependencies:
`cd burger
npm install`

Finally, run the node server locally:
`node server`

Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

**Enjoy!**
