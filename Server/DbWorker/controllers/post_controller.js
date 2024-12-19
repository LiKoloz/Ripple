const { Json } = require("sequelize/lib/utils");
const db = require("../DbConnection.js");
const { post } = require("../routes/user_router.js");

exports.create_post = (req, res) => {
    console.log(req.body);
    db.User.findOne({where: {id: req.body.user_id}})
    .then((user) => {
        console.log('\t' + user)
        if(!user) return console.log(`User witht id ${req.body.user_id} not found`);
        user.createPost({
            title: req.body.title,
            content: req.body.content
        }).then(post => res.status(201).json(post)).catch(err => res.status(500).json('Error: ' + err));
    })
    .catch(err => res.status(500).json('Error: ' + err));
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

exports.get_all_posts = async (req, res) => {
    try {
        let posts = await db.Post.findAll();
        posts = posts.sort((p1, p2) => p1.id - p2.id).reverse();
        let authtors = [];
        if (posts.length > 50) posts = posts.slice(0, 50); 
        // Добавляем имена авторов
        for (let i = 0; i < posts.length; i++) {
            console.log('\t' + 'user_id' + posts[i].userId);
            const user = await db.User.findByPk(posts[i].userId);
            if (user) {
                authtors.push({id: user.id, name: user.first_name});
            } else {
                posts[i].author = 'Неизвестный'; // Значение по умолчанию
            }
        }
        authtors.forEach(element => {
            console.log('\t GAT' + element.name + ' ' + element.id);
        });
        let result = [];
        for (let i = 0; i < posts.length; i++) {
            result.push({id: posts[i].id, author: authtors[i].name, author_id: posts[i].userId,title: posts[i].title, content: posts[i].content});
        }
        res.status(200).json(result); // Возвращаем посты без JSON.stringify
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
}
