const { Sequelize } = require("sequelize");
const { config } = require("./../../Config");

const mysqlConnection = new Sequelize(
	config.mysql_database,
	config.mysql_user,
	config.mysql_password,
	{
		host: config.mysql_host,
		port: config.mysql_port,
		dialect: config.mysql_dialect,
		logging: config.logging,
	},
);

module.exports = mysqlConnection;
