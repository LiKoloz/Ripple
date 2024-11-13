const jwt = require("jsonwebtoken");

exports.sing_in_default = async (req, res) => {
    const request = await fetch("http://localhost:3000/users/get/e/" + req.body.email)
    const user = await request.json();

    jwt.sign({user:user}, "secret", (err, token) => {
        if(err) {
            console.log('Error: ' + err);
            res.status(500).json(err);
        }
        if(req.body.email != user.email && req.body.password != user.password) 
            return res.status(400).json('User not found');
        res.status(200).json({user:user, token:token});
    })
}