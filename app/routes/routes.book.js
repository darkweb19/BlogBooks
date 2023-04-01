const router = require("express").Router();
const bookController = require("../controller/controller.book");

//this is for rendering book page
router.route("/book").get(bookController.home).post(bookController.store);

//adding books in the blog page
router.get("/add", bookController.addBook);

//deleting book from the page
router.get("/book/delete/:id", bookController.delete);

module.exports = router;
