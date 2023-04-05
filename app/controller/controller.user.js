const User = require("../models/model.user");
const bcrypt = require("bcrypt");
const sendMail = require("../../mail");

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
			//send mail before login
			const msg = ` Dear <strong>${user.name} </strong>
			<br>
			<h2> WELCOME to BOOK blog</h2>
			<br>
			This Mail is an automated form of sending dynamic emails to the users who register in out organization
			<br>
			but being a special user ,
			<br>
			We are greatful to have you as our customer.
			<br>
			So <strong>HAPPY BELATED BIRTHDAY</strong> from Deerwalk Inc.
			<br>
			Thanks for registering our blog.
			<br>
			for more information  about this automation
			<br>
			check our link on 
			<a href="https://github.com/darkweb19/BlogBooks">github </a>
			`;
			sendMail(user.email, "HAPPY BELATED BIRTHDAY", msg);
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
	res.render("client/registerPage", { message: "nothing" });
};

//delete user
exports.delete = async (req, res) => {
	const id = req.params.id;
	await User.findByIdAndDelete(id);
	res.redirect("/user");
};
