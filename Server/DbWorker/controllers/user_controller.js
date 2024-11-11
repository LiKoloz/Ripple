
const db = require("../DbConnection.js");
exports.add_user = async (req, res) =>{
    console.log()
    console.log(req.body);
    console.log()
    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        is_admin: req.body.is_admin
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.get_user_by_email = (req, res) => {
    db.User.findOne({where:{email: req.params.email}} )
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.get_user_by_id = (req, res) => {
    db.User.findByPk(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json('Error: ' + err));
}