const router = require("express").Router();
const loginController = require("../controller/controller.login");
const userController = require("../controller/controller.user");

//this is for login page
router
	.route("/login")
	.get(loginController.login)
	.post(loginController.attemptLogin);

//this is for register page
router.route("/").get(userController.registerPage).post(userController.store);

module.exports = router;
