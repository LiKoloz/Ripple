const jwt = require("jsonwebtoken");

exports.post_by_id = (req, res) => {
    jwt.verify(req.body.token, "secret",async (err, token) => {
        if(err) {
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        let request = await fetch("http://localhost:3000/posts/get/" + req.params.id);
        let post = await request.json();
        res.status(200).json(post);
    })
}
exports.posts_by_user_id = (req, res) => {
    jwt.verify(req.body.token, "secret",async (err, token) => {
        if(err) {
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        let request = await fetch("http://localhost:3000/posts/get/u/" + req.params.id);
        let posts = await request.json();
        res.status(200).json(posts);
    })
}

exports.create_post = (req, res) => {
    jwt.verify(req.body.token, "secret",async (err, token) => {
        if(err){
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        let request = await fetch("http://localhost:3000/posts/create", {
            method: "POST",
            body: JSON.stringify(req.body)
        });
        let post = await request.json();
        res.status(200).json(post);
    })
}
