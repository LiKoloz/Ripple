const jwt = require("jsonwebtoken");
const axios = require("../custom_axios");

exports.sing_in_default = async (req, res) => {
    axios.get("http://localhost:3000/users/get/e/" + req.body.email)
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