const express = require("express");
const cors = require("cors");
const mysqlConnection = require("../db/mysql");
const { middlewareHandler } = require("../middlewares/function-middleware");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		this.countryPath = "/api/v1/countries";

		// Coneccion a base de datos
		this.conectarDB();

		// Middlewares -> Funcion que siempre se ejecuta cuando levantamos el servidor
		this.middlewares();

		// Rutas de la aplicacion
		this.routes();
	}

	async conectarDB() {
		await mysqlConnection.authenticate();
		console.log("Database Connected");
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		// Lectura y parseo del body
		this.app.use(express.json());

		//Directorio publico
		this.app.use(express.static("public"));

		this.app.use(middlewareHandler);
	}

	routes() {
		this.app.use(this.countryPath, require("../routes/countryRoutes"));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Server running at port", this.port);
		});
	}
}

module.exports = Server;
