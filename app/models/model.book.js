const mongoose = require("mongoose");

//creating book schema
const bookSchema = mongoose.Schema({
	book: String,
	category: String,
	author: String,
});

module.exports = mongoose.model("book", bookSchema);
