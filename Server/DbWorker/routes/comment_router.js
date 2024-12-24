const express = require("express");
const comment_controller = require("../controllers/comment_controller.js");
const comment_router = express.Router();

comment_router.get("/get/:id", comment_controller.get_comments_by_post_id);
comment_router.post("/add/:id", comment_controller.add_comment);
comment_router.delete("/delete/:id", comment_controller.delete_comment_by_id);

module.exports = comment_router;