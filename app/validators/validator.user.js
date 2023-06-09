const Joi = require("joi");

const schema = Joi.object({
	name: Joi.string().min(3).max(30).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(3).max(30).required(),
	conPassword: Joi.ref("password"),
});

module.exports = schema;
