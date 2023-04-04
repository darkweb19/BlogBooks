const User = require("../models/model.user");
const bcrypt = require("bcrypt");

//show the total user in  the list
exports.usrList = async (req, res) => {
	const users = await User.find();
	res.render("usrList", { users });
};

//store user in database
exports.store = async (req, res) => {
	try {
		const password = await bcrypt.hash(req.body.password, 10);
		//after checking confirm password
		if (req.body.password == req.body.conPassword) {
			const user = new User({
				name: req.body.name,
				email: req.body.email,
				password: password,
			});
			await user.save();
			res.redirect("/login");
		} else {
			res.render("client/registerPage", {
				message: "password doesn't match",
			});
		}
	} catch (err) {
		res.redirect("/");
		console.log(err.message);
	}
};

//shows the register page
exports.registerPage = (req, res) => {
	res.render("client/registerPage");
};

//delete user
exports.delete = async (req, res) => {
	const id = req.params.id;
	await User.findByIdAndDelete(id);
	res.redirect("/user");
};
