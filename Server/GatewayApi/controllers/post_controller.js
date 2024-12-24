const jwt = require("jsonwebtoken");
const axios = require("../custom_axios");

exports.get_post_by_id = async (req, res) => {
        axios.get("http://localhost:3002/posts/get/" + req.params.id)
        .then((response) => {
            let post = response.data;
            console.log('Responce data \n' + post);
            res.status(200).json(post);
        })
        .catch(err => {
            console.log("Error \n" + err);
            res.status(500).json(err);
        })
}

exports.get_posts_by_user_id = async (req, res) => {
        axios.get("http://localhost:3002/posts/get/u/" + req.params.id)
        .then((response) => {
            let posts = response.data;
            console.log('Responce data \n' + posts);
            res.status(200).json(posts);
        })
        .catch(err => {
                console.log("Error \n" + err);
                res.status(500).json(err);
        })
}

exports.create_post = async (req, res) => {
        axios.post("http://localhost:3002/posts/create", req.body)
        .then((response) => {
            let post = response.data;
            console.log('Responce data \n' + post);
            res.status(200).json(post);
        })
        .catch(err => {
            console.log("Error \n" + err);
            res.status(500).json(err);
        })
}