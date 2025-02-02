const middlewareHandler = (req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next();
};

const middlewareErrorHandler = (err, req, res, next) => {
	console.error(err);
	res
		.status(500)
		.json({ success: false, message: "Error interno en el servidor" });
};

module.exports = {
	middlewareHandler,
	middlewareErrorHandler,
};
