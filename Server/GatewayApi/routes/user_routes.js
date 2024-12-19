const express = require("express");
const user_controller = require("../controllers/user_controller.js"); 
const user_router = express.Router();

user_router.post("/sign_up/default", user_controller.sign_up_default);
user_router.post("/sign_in/default", user_controller.sign_in_default);
user_router.post("/check_token", user_controller.check_token);

module.exports = user_router;