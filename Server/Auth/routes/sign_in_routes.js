const express = require("express");
const sign_in_controller = require("../controllers/sign_in_controller.js"); 
const sign_in_router = express.Router();

sign_in_router.post("/sign_in", sign_in_controller.sing_in_default);

module.exports = sign_in_router;