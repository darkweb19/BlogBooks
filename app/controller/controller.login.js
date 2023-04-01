const User = require("../models/model.user");
const bcrypt = require("bcrypt");

//rendering login page
exports.login = (req, res) => {
	res.render("client/login");
};

//for authentication
exports.attemptLogin = async (req, res) => {
	const { email, password } = req.body;

	//wrapped in try catch if app crashes
	try {
		const user = await User.findOne({ email: email });
		const isValid = await bcrypt.compare(password, user.password);
		//if only password is wrong
		if (user && !isValid) {
			return res.send("Wrong Password");
		}
		//authentication
		if (isValid) {
			req.session.user = true;
			return res.redirect("/user");
		} else {
			return res.send("login failed");
		}
	} catch (err) {
		res.redirect("/login");
		console.log(err.message);
	}
};
