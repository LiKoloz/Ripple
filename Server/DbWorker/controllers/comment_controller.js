const db = require("../DbConnection.js");

exports.add_comment = (req, res) => {
    db.Post.findOne({where: {id: req.params.id}}).then(post => {
        if(!post) return res.status(400).json('Error: Post not found');
        db.Comments.create({content: req.body.content, postId: post.id, userId: req.body.user_id}).then(comment => res.status(200).json(comment)).catch(err => res.status(400).json('Error: ' + err));
    }).catch(err => res.status(400).json('Error: ' + err));
}

exports.get_comments_by_post_id = (req, res) => {
    db.Comments.findAll({where: {postId: req.params.id}}).then(comments => res.status(200).json(comments)).catch(err => res.status(400).json('Error: ' + err));
}

exports.delete_comment_by_id = (req, res) => {
    db.Comments.destroy({where: {id: req.params.id}}).then(comment => res.status(200).json(comment)).catch(err => res.status(400).json('Error: ' + err));    
}