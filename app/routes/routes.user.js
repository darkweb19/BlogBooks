const router = require("express").Router();
const userController = require("../controller/controller.user");

//this is for user list
router.route("/user").get(userController.usrList);

//deleting user
router.get("/user/delete/:id", userController.delete);

module.exports = router;
