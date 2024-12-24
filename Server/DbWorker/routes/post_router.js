const express = require("express");
const post_controller = require("../controllers/post_controller.js"); 
const post_router = express.Router();

post_router.post("/create", post_controller.create_post);
post_router.post("/like/:id", post_controller.add_like);

post_router.get("/check/:id", post_controller.check_post_by_id);

post_router.get("/get/all/checked", post_controller.get_all_posts_with_check);
post_router.get("/get/all/nonchecked", post_controller.get_all_posts_without_check);
post_router.get("/get/u/:id", post_controller.get_posts_by_user_id);
post_router.get("/get/all", post_controller.get_all_posts);
post_router.get("/get/:id", post_controller.get_post_by_id);

module.exports = post_router;