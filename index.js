const express = require("express");
const app = express();

//setting view engines as ejs
app.set("view engine", "ejs");
app.set("views", "app/views");

//body parser
app.use(express.urlencoded({ extended: true }));

//connnecting to the database
require("./app/config/db.config");

//creating a session
const session = require("express-session");
app.use(
	session({
		secret: "secret",
		saveUninitialized: true,
		resave: false,
		cookie: { secure: false, httpOnly: true },
	})
);

//using the routes
app.use(require("./app/routes/routes.login")); //login and register
const isLoggedIn = require("./app/middleware/isLoggedIn");

//middleware (allows to the route when logged in) force to login or register otherwise
app.use(isLoggedIn); //middleware
app.use(require("./app/routes/routes.user")); //for user list
app.use(require("./app/routes/routes.book")); //for blog

//listening port to the server
app.listen(3000, () => {
	console.log("server started at port");
});
