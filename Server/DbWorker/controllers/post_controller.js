const db = require("../DbConnection.js");

exports.create_post = (req, res) => {
    console.log(req.body);
    db.User.findOne({where: {id: req.body.user_id}})
    .then((user) => {
        console.log('\t' + user)
        if(!user) return console.log(`User witht id ${req.body.user_id} not found`);
        user.createPost({
            title: req.body.title,
            content: req.body.content
        }).catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.get_post_by_id = (req, res) => {
    db.Post.findByPk(req.params.id)
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.get_posts_by_user_id = (req, res) => {
    db.Post.findAll({where: {user_id: req.params.id}})
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
}