require("dotenv").config();

const config = {
	mysql_host: process.env.LOCAL_HOST,
	mysql_port: process.env.LOCAL_PORT,
	mysql_database: process.env.LOCAL_DATABASE,
	mysql_user: process.env.LOCAL_USER,
	mysql_password: process.env.LOCAL_PASSWORD,
	mysql_dialect: process.env.LOCAL_DIALECT,
	logging: false,
};

module.exports = { config };
