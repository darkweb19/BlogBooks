const mongoose = require("mongoose");

async function connectDb() {
	try {
		await mongoose.connect("mongodb://localhost:27017/Login");
		console.log("database connected");
	} catch (err) {
		console.log(err.message);
	}
}
connectDb();
