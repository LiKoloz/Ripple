const jwt = require("jsonwebtoken");

exports.sing_in_default = async (req, res) => {
    const request = await fetch("http://localhost:3000/users/get/" + req.body.id)
    const user = await request.json();

    jwt.sign({user:user}, "secret", (err, token) => {
        if(err) {
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        res.status(200).json(token);
    })
}