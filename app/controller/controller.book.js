const Book = require("../models/model.book");

//for Blog (book lists)
exports.home = async (req, res) => {
	const books = await Book.find();
	res.render("book/bookList", { books });
};

//rendering add book page (post method)
exports.addBook = (req, res) => {
	res.render("book/addBook");
};

//storing book in database
exports.store = async (req, res) => {
	try {
		const book = new Book({
			book: req.body.name,
			category: req.body.category,
			author: req.body.author,
		});
		await book.save();
		res.redirect("/book");
	} catch (err) {
		res.redirect("/book");
		console.log(err.message);
	}
};

//deleting book from database
exports.delete = async (req, res) => {
	const id = req.params.id;
	await Book.findByIdAndDelete(id);
	res.redirect("/book");
};
