const jwt = require("jsonwebtoken");
const axios = require("../custom_axios");

exports.sing_in_default = async (req, res) => {
    axios.get("217.114.0.104:3000/users/get/e/" + req.body.email)
        .then((response) => {
            let user = response.data;
            jwt.sign({ user: user }, "secret", (err, token) => {
                if (err) {
                    console.log('Error: ' + err);
                    res.status(500).json(err);
                }
                if (req.body.email != user.email && req.body.password != user.password)
                    return res.status(500).json('User not found');
                res.status(200).json({ user: user, token: token });
            })
        })
        .catch(err => {
            console.log('Error \n' + err)
            res.status(500).json(err)
        })
}

exports.check_token = async (req, res) => {
    jwt.verify(req.body.token, "secret", (err, token) => {
        if (err) {
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        res.status(200).json(token);
    })
}