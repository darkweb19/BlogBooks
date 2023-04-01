//authorizing for session

const isLoggedIn = (req, res, next) => {
	if (req.session.user) return next();
	else return res.redirect("/");
};

module.exports = isLoggedIn;
