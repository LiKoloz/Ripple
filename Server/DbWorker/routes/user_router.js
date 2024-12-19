const express = require("express");
const user_constroller = require("../controllers/user_controller.js"); 
const user_router = express.Router();

user_router.post("/create", user_constroller.add_user);
user_router.get("/get/:id", user_constroller.get_user_by_id);
user_router.get("/get/e/:email", user_constroller.get_user_by_email);

module.exports = user_router;