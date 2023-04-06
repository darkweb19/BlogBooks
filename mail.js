const mailer = require("nodemailer");

const transport = mailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	auth: {
		user: "sujanstha3220@gmail.com",
<<<<<<< HEAD
		pass: "ngeoemgacugoswjg",
=======
		pass: "your_appPassword",
>>>>>>> 8051ed187a7cd7d72a74224a68e2ae9dcd638405
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
