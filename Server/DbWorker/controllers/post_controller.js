const db = require("../DbConnection.js");

exports.create_post = (req, res) => {   
    db.User.findOne({where: {id: req.body.user_id}})
    .then((user) => {
        console.log('\t' + user)
        if(!user) return console.log(`User witht id ${req.body.user_id} not found`);
        user.createPost({
            title: req.body.title,
            content: req.body.content,
            checked: false
        }).then(post => res.status(201).json(post)).catch(err => res.status(500).json('Error: ' + err));
    })
    .catch(err => res.status(500).json('Error: ' + err));
}

exports.get_post_by_id =async  (req, res) => {
    db.Post.findByPk(req.params.id)
    .then(async post => {
    
        if(!post) return res.status(400).json('Error: Post not found');
        db.Likes.findAll({where: {postId: post.id}}).then(likes => {
            post = JSON.parse(JSON.stringify(post));
            post.likes_count = likes.length;
            post.repost_count = 0;
            res.status(200).json(post);
        }).catch(err => res.status(400).json('Error: ' + err));
       
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.get_posts_by_user_id = (req, res) => {
    db.Post.findAll({where: {user_id: req.params.id}})
    .then(posts => res.status(200).json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.get_all_posts = async (req, res) => {
    try {
        let posts = await db.Post.findAll();
        posts = posts.sort((p1, p2) => p1.id - p2.id).reverse();
        let authtors = [];
        if (posts.length > 50) posts = posts.slice(0, 50); 

        for (let i = 0; i < posts.length; i++) {
            console.log('\t' + 'user_id' + posts[i].userId);
            const user = await db.User.findByPk(posts[i].userId);
            if (user) {
                authtors.push({id: user.id, name: user.first_name});
            } else {
                posts[i].author = 'Неизвестный'; 
            }
        }
        authtors.forEach(element => {
            console.log('\t GAT' + element.name + ' ' + element.id);
        });
        let result = [];
        for (let i = 0; i < posts.length; i++) {
            result.push({id: posts[i].id, author: authtors[i].name, author_id: posts[i].userId,title: posts[i].title, content: posts[i].content});
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
}

exports.get_all_posts_with_check = async (req, res) => {
    try {
        let posts = await db.Post.findAll({where: {checked: true}});
        posts = posts.sort((p1, p2) => p1.id - p2.id).reverse();
        let authtors = [];
        if (posts.length > 50) posts = posts.slice(0, 50); 

        for (let i = 0; i < posts.length; i++) {
            const user = await db.User.findByPk(posts[i].userId);
            if (user) {
                authtors.push({id: user.id, name: user.first_name + ' ' + user.last_name});
            } else {
                posts[i].author = 'Неизвестный'; 
            }
        }
        let result = [];
        
        for (let i = 0; i < posts.length; i++) {
            let likes = await db.Likes.findAll({where: {postId: posts[i].id}});
            let likes_count = likes.length;
            if(!likes_count) likes_count = 0;
            result.push({id: posts[i].id, author: authtors[i].name, author_id: posts[i].userId,
                title: posts[i].title, content: posts[i].content, 
                likes_count: likes_count, repost_count: 0});
        }
        res.status(200).json(result); 
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
}

exports.get_all_posts_without_check = async (req, res) => {
    try {
        let posts = await db.Post.findAll({where: {checked: false}});
        posts = posts.sort((p1, p2) => p1.id - p2.id).reverse();
        let authtors = [];

        for (let i = 0; i < posts.length; i++) {
            console.log('\t' + 'user_id' + posts[i].userId);
            const user = await db.User.findByPk(posts[i].userId);
            if (user) {
                authtors.push({id: user.id, name: user.first_name});
            } else {
                posts[i].author = 'Неизвестный';
            }
        }

        let result = [];
        for (let i = 0; i < posts.length; i++) {
            result.push({id: posts[i].id, author: authtors[i].name, author_id: posts[i].userId,title: posts[i].title, content: posts[i].content});
        }
        res.status(200).json(result); 
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
}

exports.delete_post_by_id = (req, res) => {
    db.Post.destroy({where: {id: req.params.id}})
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.check_post_by_id = (req, res) => {
    db.Post.update({checked: true}, {where: {id: req.params.id}})
    .then(post => res.status(200).json(post))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.add_like = async (req, res) => {
    let like = await db.Likes.findOne({where: {postId: req.params.id, userId: req.body.user_id}})
    if(!like){
        db.Post.findOne({where: {id: req.params.id}}).then(post => {
            if(!post) return res.status(400).json('Error: Post not found');
      
            db.User.findOne({where: {id: req.body.user_id}}).then(user => {
                if(!user) return res.status(400).json('Error: User not found');
                db.Likes.create({postId: post.id, userId: user.id}).then(like => res.status(200).json(like)).catch(err => res.status(400).json('Error: ' + err));
            }).catch(err => res.status(400).json('Error: ' + err));
        })
    }else{
        db.Likes.destroy({where: {postId: req.params.id, userId: req.body.user_id}}).then(like => res.status(200).json(like)).catch(err => res.status(400).json('Error: ' + err));
    }
}

