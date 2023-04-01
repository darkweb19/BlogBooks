const mongoose = require("mongoose");

//creating user schema
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
});

module.exports = mongoose.model("User", userSchema);
