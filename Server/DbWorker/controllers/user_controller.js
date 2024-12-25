
const db = require("../DbConnection.js");
const { encryptPassword, decryptPassword } = require("../Services/hashFunc.js");

exports.add_user = async (req, res) =>{
    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: encryptPassword(req.body.password),
        is_admin: req.body.is_admin
    })
    .then((user) =>{
        let user_data = user.dataValues
        user_data.password = decryptPassword(user_data.password);
        res.status(201).send(user_data)
        })
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.get_user_by_email = (req, res) => {
    db.User.findOne({where:{email: req.params.email}} )
    .then(user => {
        let user_data = user
        user_data.password = decryptPassword(user_data.password);
        res.json(user_data)
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.get_user_by_id = (req, res) => {
    db.User.findByPk(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json('Error: ' + err));
}