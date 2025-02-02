const mysqlConnection = require("../db/mysql");
const { DataTypes } = require("sequelize");

const CountryV1 = mysqlConnection.define(
	"Country",
	{
		idCountry: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: { type: DataTypes.STRING },
		iso: { type: DataTypes.STRING },
		createdAt: { type: DataTypes.DATE },
		updatedAt: { type: DataTypes.DATE },
	},
	{
		freezeTableName: true,
	},
);

CountryV1.updateIfExists = async (id, data) => {
	try {
		const country = await CountryV1.findByPk(id);

		if (!country) throw new Error("Pais no encontrado");

		const updateData = {};
		for (const field in data) {
			if (data[field] !== undefined) {
				updateData[field] = data[field];
			}
		}

		await country.update(updateData);

		return country;
	} catch (err) {
		throw new Error(err.message);
	}
};

CountryV1.deleteIfExists = async (id) => {
	try {
		const country = await CountryV1.findByPk(id);

		if (!country) throw new Error("Pais no encontrado");

		await country.destroy();

		return country;
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = CountryV1;
