const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
	.is().min(8)
	.is().max(24)
	.has().uppercase()
	.has().lowercase()
	.has().digits()
	.has().not().spaces()

module.exports = (req, res, next) => {
	if (!passwordSchema.validate(req.body.password)) {
		res.status(400).json({ message: "Requis : pas d'éspaces, minimum 8 caractères, dont 1 chiffre, une majuscule et une minuscule." });
	} else {
		next();
	}
};
