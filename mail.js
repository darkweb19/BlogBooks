const mailer = require("nodemailer");

const transport = mailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	auth: {
		user: "sujanstha3220@gmail.com",
		pass: "ngeoemgacugoswjg",
	},
});

function sendMail(to, subject, msg) {
	const mail = {
		from: "sujanstha3220@gmail.com",
		to: to,
		subject: subject,
		html: msg,
	};

	return new Promise((resolve, reject) => {
		transport.sendMail(mail, (err, info) => {
			if (err) {
				reject(err);
			} else {
				resolve(info);
			}
		});
	});
}

module.exports = sendMail;
