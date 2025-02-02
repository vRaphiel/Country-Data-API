const validateString = (field) => {
	return (req, res, next) => {
		const value = req.body[field];
		if (typeof value !== "string" || value.trim() === "") {
			return res.status(400).json({
				success: false,
				message: `${field} debe ser una cadena no vacía.`,
			});
		}
		next();
	};
};

module.exports = validateString;
