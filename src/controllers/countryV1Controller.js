const { response } = require("express");
const Country = require("../models/Country-V1");

const getCountryV1 = async (req, res = response) => {
	try {
		const countryList = await Country.findAll();

		return res.status(200).json({
			success: true,
			message:
				countryList.length > 0
					? "Lista de paises encontrado."
					: "No se encontraron paises.",
			data: countryList,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: `Ha ocurrido un error ${error.message}`,
			data: [],
		});
	}
};

const postCountryV1 = async (req, res = response) => {
	try {
		const { name, iso } = req.body;

		const newCountry = await Country.create({
			name,
			iso,
		});

		return res.status(201).json({
			success: true,
			message: "Pais registrado exitosamente",
			data: newCountry,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: `Ha ocurrido un error ${error.message}`,
			data: [],
		});
	}
};

const putCountryV1 = async (req, res = response) => {
	try {
		const { id } = req.params;

		const { name, iso } = req.body;

		const newCountry = await Country.updateIfExists(id, {
			name, iso
		});

		return res.status(200).json({
			success: true,
			message: "Pais actualizado exitosamente",
			data: newCountry,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: `Ha ocurrido un error ${error.message}`,
			data: [],
		});
	}
};

const deleteCountryV1 = async (req, res = response) => {
	try {
		const { id } = req.params;

		const newCountry = await Country.deleteIfExists(id);

		return res.status(200).json({
			success: true,
			message: "Pais borrada exitosamente",
			data: newCountry,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: `Ha ocurrido un error ${error.message}`,
			data: [],
		});
	}
};

module.exports = {
	getCountryV1,
	postCountryV1,
	putCountryV1,
	deleteCountryV1,
};
