const express = require("express");
const sign_up_controller = require("../controllers/sign_up_controller.js");
const sign_up_router = express.Router();

sign_up_router.post("/sign_up", sign_up_controller.sign_up_default);

module.exports = sign_up_router;