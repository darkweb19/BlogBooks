const isValid = (schema, redirectTo) => (req, res, next) => {
	const { error } = schema.validate(req.body);
	if (error) {
		return res.redirect(redirectTo);
	}
	next();
};

module.exports = isValid;
