const express = require("express");
const controller = require("../controllers/validate");

const router = express.Router();

router.post("/formProcess", controller.form);

module.exports = router;