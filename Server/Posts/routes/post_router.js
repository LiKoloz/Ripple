const express = require("express");
const post_controller = require("../controllers/post_controller.js");
const post_router = express.Router();

post_router.get("/get/u/:id", post_controller.posts_by_user_id);
post_router.get("/get/:id", post_controller.post_by_id);
post_router.post("/create", post_controller.create_post);

module.exports = post_router;