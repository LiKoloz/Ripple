const jwt = require("jsonwebtoken");
const axios = require("../custom_axios");

exports.post_by_id = (req, res) => {
        axios.get("http://217.114.0.104:3000/posts/get/" + req.params.id)
        .then((response) => {
            console.log("Responce data \n" + response.data);
            res.status(200).json(response.data);
        })
        .catch(err => {
            console.log("Error \n" + err);
            res.status(500).json(err);
        })

}
exports.posts_by_user_id = (req, res) => {
        axios.get("http://217.114.0.104:3000/posts/get/u/" + req.params.id)
        .then((response) => {
            console.log("Responce data \n" + response.data);
            res.status(200).json(response.data);
        })
        .catch(err => {
            console.log("Error \n" + err);
            res.status(500).json(err);
        })
}

exports.create_post = (req, res) => {
    jwt.verify(req.body.token, "secret",async (err, token) => {
        if(err){
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        axios.post("http://217.114.0.104:3000/posts/create", req.body)
        .then((response) => {
            console.log("Responce data \n" + response.data);
            res.status(200).json(response.data);
        })
        .catch(err => {
            console.log("Error \n" + err);
            res.status(500).json(err);
        })
    })
}
