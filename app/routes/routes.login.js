const router = require("express").Router();
const loginController = require("../controller/controller.login");
const userController = require("../controller/controller.user");
const userSchema = require("../validators/validator.user");
const isValid = require("../middleware/isValid");

//this is for login page
router
	.route("/login")
	.get(loginController.login)
	.post(loginController.attemptLogin);

//this is for register page
router
	.route("/")
	.get(userController.registerPage)
	.post(isValid(userSchema, "/"), userController.store);

module.exports = router;
