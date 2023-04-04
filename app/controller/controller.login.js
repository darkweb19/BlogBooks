const User = require("../models/model.user");
const bcrypt = require("bcrypt");

//rendering login page
exports.login = (req, res) => {
	res.render("client/login", { message: "nothing" });
};

//for authentication
exports.attemptLogin = async (req, res) => {
	//wrapped in try catch if app crashes
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });
		const isValid = await bcrypt.compare(password, user.password);
		//if only password is wrong
		if (user && !isValid) {
			return res.render("client/login", { message: "pwWrong" });
		}
		//authentication
		if (user && isValid) {
			req.session.user = true;
			return res.redirect("/user");
		} else {
			return res.send("login failed");
		}
	} catch (err) {
		res.render("client/login", { message: "noUser" });
		console.log(err.message);
	}
};
