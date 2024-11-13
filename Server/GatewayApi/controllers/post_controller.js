const jwt = require("jsonwebtoken");

exports.get_post_by_id = async (req, res) => {
        let request = await fetch("http://localhost:3002/posts/get/" + req.params.id);
        let post = await request.json();
        res.status(200).json(post);
}

exports.get_posts_by_user_id = async (req, res) => {
        let request = await fetch("http://localhost:3002/posts/get/u/" + req.params.id);
        let posts = await request.json();
        res.status(200).json(posts);
}

exports.create_post = async (req, res) => {
        let request = await fetch("http://localhost:3002/posts/create", {
            method: "POST",
            body: JSON.stringify(req.body)
        })
        let post = await request.json();
        res.status(200).json(post);
}