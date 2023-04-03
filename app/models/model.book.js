const mongoose = require("mongoose");

//creating book schema
const bookSchema = mongoose.Schema({
	book: { type: String, required: true },
	category: { type: String, required: true },
	author: { type: String, required: true },
});

module.exports = mongoose.model("book", bookSchema);
