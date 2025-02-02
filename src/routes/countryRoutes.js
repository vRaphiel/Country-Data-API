const { Router } = require("express");

const {
	getCountryV1,
	postCountryV1,
	putCountryV1,
	deleteCountryV1,
} = require("../controllers/countryV1Controller");

const { validateString } = require("../middlewares/index");

const router = Router();

router.get("/", getCountryV1);

router.post("/",
	validateString("name"),
	validateString("iso"),
postCountryV1);

router.put("/:id",
	validateString("name"),
	validateString("iso"),
putCountryV1);

router.delete("/:id", deleteCountryV1);

module.exports = router;
